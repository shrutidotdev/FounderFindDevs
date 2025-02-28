"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent } from "@/components/ui/select";
import { jobPostSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Building2 } from "lucide-react";
import React from "react";
import { ControllerRenderProps, useForm } from "react-hook-form";
import z from "zod";
import { countryList } from "@/app/utils/contryLists";
import SalaryRangeSelector from "../../Frontend/SalaryRangeSelector";
import JobDescriptionEditor from "../../TextEditor/JobDescriptionEditor";
import BenefitSelector from "../../Frontend/BenefitSelector";

const CreateJobPostForm = () => {
  const form = useForm<z.infer<typeof jobPostSchema>>({
    resolver: zodResolver(jobPostSchema),
    defaultValues: {
      companyName: "",
      companyLocation: "",
      aboutCompany: "",
      companyLogo: "",
      companyWebsite: "",
      companyXAccount: "",

      jobtitle: "",
      employmentType: "",
      location: "",
      salaryFrom: 0,
      salaryTo: 0,
      listingDuration: 0,
      jobDescription: "",
      benefits: [],
    },
  });
  return (
    <div>
      <Form {...form}>
        <form className="col-span-1 lg:col-span-2 flex flex-col gap-4">
          <Card className="lg:sticky lg:top-8 h-fit">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="w-5 h-5 text-primary" />
                <CardTitle>Post a Job</CardTitle>
              </div>
              <CardDescription>
                Create a job posting to find the perfect candidate for your
                team.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Form content will go here */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* title job */}
                <FormField
                  control={form.control}
                  name="jobtitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Job Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Job Title" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* employment type */}
                <FormField
                  control={form.control}
                  name="employmentType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Employment Type</FormLabel>
                      <Select
                        onOpenChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Employment Type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel> Employment Type</SelectLabel>
                            <SelectItem value="Full Time">Full Time</SelectItem>
                            <SelectItem value="Part Time">Part Time</SelectItem>
                            <SelectItem value="Freelance">Freelance</SelectItem>
                            <SelectItem value="Contract">Contract</SelectItem>
                            <SelectItem value="Internship">
                              Internship
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Location */}
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <Select
                        onOpenChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Location" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel> Location</SelectLabel>
                            {countryList.map((country) => (
                              <SelectItem
                                key={country.code}
                                value={country.code}
                              >
                                {country.name}
                                {` ${country.flagEmoji}`}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Salary */}
                <FormItem>
                  <FormLabel>Salary Range</FormLabel>
                  <FormControl>
                    <SalaryRangeSelector
                      control={form.control}
                      minSalary={700000}
                      maxSalary={5000000}
                      step={100}
                      currency="INR"
                    />
                  </FormControl>
                </FormItem>
              </div>

              <div className="mt-9">
                <FormField
                  control={form.control}
                  name="jobDescription"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Job Description</FormLabel>
                        <FormControl>
                          <JobDescriptionEditor field={field} />
                        </FormControl>
                       
                      </FormItem>
                    );
                  }}
                />
              </div>

              <div className="mt-9">
                <FormField
                  control={form.control}
                  name="benefits"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Benefits</FormLabel>
                        <FormControl>
                          <BenefitSelector field={field}  />
                        </FormControl>
                      </FormItem>
                    );
                  }}
                />
              </div>

             
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary" >Company Information</CardTitle>
            </CardHeader>
            <CardContent >
              <div className="grid grid-cols-1  md:grid-cols-2 gap-4">
                	{/* Company Name */}
                <FormField
                control={form.control}
                name="companyName"
                render={ ({ field}) => {
                  return (
                    <FormItem>
                      <FormLabel>Company Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Company Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )
                }}
                />

                {/* Company location */}
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <Select
                        onOpenChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Location" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Company Location</SelectLabel>
                            {countryList.map((country) => (
                              <SelectItem
                                key={country.code}
                                value={country.code}
                              >
                                {country.name}
                                {` ${country.flagEmoji}`}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Company website */}
                <FormField 
                control={form.control}
                name="companyWebsite"
                render={ ({ field}) => {
                  return(
                    <FormItem>
                      <FormLabel>Company Website</FormLabel>
                      <FormControl>
                        <Input placeholder="Company Website" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )
                }}
                />

              </div>
            </CardContent>
          </Card>
        </form>
      </Form>
    </div>
  );
};

export default CreateJobPostForm;
