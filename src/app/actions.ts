"use server";
import { prisma } from "@/lib/prisma";
import { requireUser } from "./utils/requireUser";
import { companySchema, jobPostSchema, jobSeekerSchema } from "@/lib/zodSchema";
import { date, z } from "zod";
import { toast } from "sonner";
import { detectBot, request } from "@arcjet/next";
import arcjet, { shield } from "./arcjet";
import { redirect } from "next/navigation";


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

export async function createCompany(data: z.infer<typeof companySchema>) {
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
                    Company: {
                        create: {
                            name: validateData.name,
                            location: validateData.location,
                            about: validateData.about,
                            logo: validateData.logo,
                            website: validateData.website,
                            xAccount: validateData.xAccount,
                          
                        }
                    }
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

export async function createJobSeeker(data: z.infer<typeof jobSeekerSchema>) {


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
                        create: {
                          name: validateData.name,
                          resume: validateData.resume,
                          about: validateData.about,
                          LinkedIn: validateData.LinkedIn,
                          portfolioLink: validateData.portfolioLink
                        }
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

export async function createJob(data: z.infer<typeof jobPostSchema>) {
    const user = await requireUser();
    
    // Validate data
    const validateData = jobPostSchema.parse(data);
    
    // Get company
    const company = await prisma.company.findUnique({
      where: { userId: user.id },
      select: { id: true }
    });
  
    if (!company?.id) {
      throw new Error("Company not found");
    }
  
    // Create job
    await prisma.jobPost.create({
      data: {
        jobDescription: validateData.jobDescription,
        jobTitle: validateData.jobTitle,
        employmentType: validateData.employmentType,
        listingDuration: validateData.listingDuration,
        salaryFrom: validateData.salaryFrom,
        salaryTo: validateData.salaryTo,
        location: validateData.location,
        benefits: validateData.benefits,
        companyId: company.id,
      }
    });
  
    redirect("/");
  }
