"use server";
import { prisma } from "@/lib/prisma";
import { requireUser } from "./utils/requireUser";
import { companySchema, jobSeekerSchema } from "@/lib/zodSchema";
import { z } from "zod";
import { toast } from "sonner";
import { detectBot, request } from "@arcjet/next";
import arcjet, { shield } from "./arcjet";


const aj = arcjet
    .withRule(
        shield({
            mode: "LIVE",
        })
    ).withRule(
        detectBot({
            mode: "LIVE",
            allow: []
        })
    )

async function createCompany(data: z.infer<typeof companySchema>) {
    const session = await requireUser();

    // Arcject the data
    const req = await request();
    const decision = await aj.protect(req); // Deduct 5 tokens from the bucket
    console.log("Arcjet decision", decision);

    if (decision.isDenied()) {
        toast.message("You have been detected as a bot. You are FORBIDDEN from accessing this resource.");
    }


    try {
        // Make sure data is not null
        if (!data) {
            return { error: "No data provided" };
        }

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

        return { redirect: "/" };

    } catch (error) {
        console.error("Company creation error:", error);
        return {
            error: error instanceof z.ZodError
                ? error.errors.map(e => `${e.path.join('.')}: ${e.message}`).join(', ')
                : "Failed to save company data"
        };
    }
}

async function createJobSeeker(data: z.infer<typeof jobSeekerSchema>) {


    // Arcject the data
    const req = await request();
    const decision = await aj.protect(req); // Deduct 5 tokens from the bucket
    console.log("Arcjet decision", decision);

    if (decision.isDenied()) {
        toast.message("You have been detected as a bot. You are FORBIDDEN from accessing this resource.");
    }



    try {
        const user = await requireUser();
        const validateData = jobSeekerSchema.parse(data);

        const existingJobSeeker = await prisma.jobSeeker.findUnique({
            where: { userId: user.id }
        });

        if (existingJobSeeker) {
            // Update existing job seeker
            await prisma.jobSeeker.update({
                where: { id: existingJobSeeker.id },
                data: validateData
            });
        } else {
            // Create new job seeker
            await prisma.user.update({
                where: { id: user.id },
                data: {
                    onboardingCompleted: true,
                    userType: "JOB_SEEKER",
                    JobSeeker: {
                        create: validateData
                    }
                }
            });
        }

        return { success: true };
    } catch (error) {
        console.error("Full error object:", error); // Log complete error

        // Check if error is null or undefined
        if (error == null) {
            console.error("Error object is null or undefined");
            return { error: "An unknown error occurred" };
        }

        if (error instanceof z.ZodError) {
            const errorMessages = error.errors.map(e => `${e.path.join('.')}: ${e.message}`).join(', ');
            console.error("Validation errors:", errorMessages);
            return { error: errorMessages };
        }

        return { error: "Failed to save job seeker data" };
    }
}

export { createCompany, createJobSeeker }; 