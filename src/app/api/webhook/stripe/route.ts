//  Paymets are not synchronous it's asyncronous. It can be faster but can take 1 day 1 hours or 1 week. 

import { prisma } from "@/lib/prisma";
import { stripe } from "@/lib/stripe";
import { headers } from "next/headers";
import Stripe from "stripe";

export async function POST(req: Request) {
    const body = await req.text();

    const headerList = await headers();

    const signature = headerList.get("Stripe-Signature");


    let event: Stripe.Event;
    try{
        const webhooksecret = process.env.STRIPE_WEBHOOK_SECRET        
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            webhooksecret
        )
    }catch{
        return new Response("Webhook error", {status: 400})
    }

    const session = event.data.object as Stripe.Checkout.Session;
    // console.log(session);

    if(event.type === "checkout.session.completed") {
        const customerId = session.customer as string;
        const jobID = session.metadata.jobID;

        if(!jobID) return new Response("NO JOB ID FOUND", {status: 400})

        const company = await prisma.user.findUnique({
            where: {
                stripeCustomerId: customerId
            },
            include: {
                Company: true
            }
        })
        if(!company) return new Response("NO COMPANY FOUND FOR THE USER", {status: 400})

        await prisma.jobPost.update({
            where: {
                id: jobID,
                companyId: company?.Company?.id ,
            },
            data: {
                status : "ACTIVE"
            }
        })
    }




   
    return new Response("OK", {status: 200})
}