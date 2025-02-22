"use server";
import { prisma } from "@/lib/prisma";
// Server actions are public http endpoint by default, but you can make them private by adding the `private` keyword.
import { requireUser } from "./utils/requireUser";
import companySchema from "@/lib/zodSchema";
import { z } from "zod";
import { redirect } from "next/navigation";
export async function createCompany(data: z.infer<typeof companySchema>) {
    const session = await requireUser();

    const validateData = companySchema.parse(data);
    console.log(console.log("Here is the validated data"), validateData);

    await prisma.user.update({
        where: {
            id: session.id,
        },
        data: {
            OnBoarding: true,
            userType: "COMPANY",
            Company : 
            {
                create: {...validateData},
            },
            }
    });
    return redirect("/");
}