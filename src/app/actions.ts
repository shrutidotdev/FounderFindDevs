"use server";
import { prisma } from "@/lib/prisma";
// Server actions are public http endpoint by default, but you can make them private by adding the `private` keyword.
import { requireUser } from "./utils/requireUser";
import companySchema from "@/lib/zodSchema";
import { z } from "zod";
import { redirect } from "next/navigation";

export async function createCompany(data: z.infer<typeof companySchema>) {
    const session = await requireUser();
    
    try {
        const validateData = companySchema.parse(data);
        const existingCompany = await prisma.company.findUnique({
            where: { userId: session.id }
        });

        if (existingCompany) {
            await prisma.company.update({
                where: { id: existingCompany.id },
                data: validateData
            });
        } else {
            await prisma.user.update({
                where: { id: session.id },
                data: {
                    onboardingCompleted: true,
                    userType: "COMPANY",
                    Company: { create: validateData }
                }
            });
        }

        // Return redirect instead of throwing
        return { redirect: "/" };
        
    } catch (error) {
        console.error(error);
        return { 
            error: error instanceof z.ZodError 
                ? error.message 
                : "Failed to save company data"
        };
    }
}