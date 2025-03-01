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

export const jobPostSchema = z.object({
    jobTitle: z.string().min(1, { message: "Job title should be at least 1 character long" }),
    employmentType: z.string().min(1, { message: "Please select an employment type" }),
    location: z.string().min(1, { message: "Please select a location" }),
    salaryFrom: z.number().min(1, { message: "Please provide a valid salary range" }),
    salaryTo: z.number().min(1, { message: "Please provide a valid salary range" }),
    jobDescription: z.string().min(10, { message: "Please provide a brief description about the job" }),
    listingDuration: z.number().min(1, { message: "Please select a listing duration" }),
    benefits: z.array(z.string()).min(1, { message: "Please provide at least one benefit" }),
   companyName: z.string().min(1, { message: "Company name should be at least 1 character long" }),
   companyLocation: z.string().min(1, { message: "Location should be at least 1 character long" }),
   aboutCompany: z.string().min(10, { message: "Please provide a brief description about the company" }),
   companyLogo: z.string().min(1, { message: "Please Upload a logo for your company" }),
   companyWebsite: z.string().url({ message: "Please provide a valid website URL" }),
   companyXAccount: z.string().optional(),
})