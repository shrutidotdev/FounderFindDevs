import { z } from "zod";

export const companySchema = z.object({
    name: z.string().min(1, { message: "Company name should be at least 1 character long" }),
    location: z.string().min( 1, { message: "Location should be at least 1 character long" }),
    about: z.string().min(10, { message: "Please provide a brief description about your company" }),
    logo: z.string().min(1, { message: "Please Upload a logo for your company" }),
    website: z.string().url({ message: "Please provide a valid website URL" }),
    xAccount: z.string().optional(),
   
})

export const jobSeekerSchema = z.object({
    name : z.string().min(1, { message: "name should be at least 1 character long" }),
    about: z.string().min(10, { message: "Please provide a brief description about yourself" }),
    resume: z.string().min(1, { message: "Please Upload a resume" }),
    portfolioLink: z.string().url().optional(),
    LinkedIn: z.string().url({ message: "Please provide a valid LinkedIn URL" }),
})

