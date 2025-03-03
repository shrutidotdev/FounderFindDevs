"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
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
import {
  FileImage,
  XIcon,
  Briefcase,
  Globe,
  DollarSign,
  ListChecks,
  Building,
} from "lucide-react";

import z, { set } from "zod";
import { countryList } from "@/app/utils/contryLists";
import SalaryRangeSelector from "../Frontend/SalaryRangeSelector";
import JobDescriptionEditor from "../TextEditor/JobDescriptionEditor";
import BenefitSelector from "../Frontend/BenefitSelector";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UploadDropzone } from "../Frontend/UploadThing";
import { toast } from "sonner";
import JobListingDuration from "../Frontend/JobListingDuration";
import { useForm } from "react-hook-form";
import { createJob } from "@/app/actions";
import { useState } from "react";

interface CreateJobFormProps {
  companyName: string;
  companyLocation: string;
  companyAbout: string;
  companyLogo: string;
  companyWebsite: string;
  companyXAccount: string | null;
}
const CreateJobPostForm = ({
  companyName,
  companyLocation,
  companyAbout,
  companyLogo,
  companyWebsite,
  companyXAccount,
}: CreateJobFormProps) => {
  const form = useForm<z.infer<typeof jobPostSchema>>({
    resolver: zodResolver(jobPostSchema),
    defaultValues: {
      companyName: companyName,
      companyLocation: companyLocation,
      companyAbout: companyAbout,
      companyLogo: companyLogo,
      companyWebsite: companyWebsite,
      companyXAccount: companyXAccount || " ",

      jobTitle: "",
      employmentType: "",
      location: "",
      salaryFrom: 0,
      salaryTo: 0,
      listingDuration: 60,
      jobDescription: "",
      benefits: [],
    },
  });
  const [pending, setPending] = useState(false);

  async function onSubmit(values: z.infer<typeof jobPostSchema>) {
    try {
      setPending(true);
      await createJob(values);

      console.log(createJob(values))
      toast.message("Job posted will be live. After payment is successful");
    } catch (error) {
      if (error instanceof Error && error.message !== "NEXT_REDIRECT") {
        console.log("Something went wrong: ", error.message);
      }
    } finally {
      setPending(false);
    }
  }

  return (
    <main className="w-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-6"
        >
          {/* Job Details Card */}
          <Card className="border border-primary/10 shadow-md overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-background pointer-events-none" />
            <CardHeader className="relative border-b border-border/40 pb-4">
              <div className="flex items-center gap-2 mb-2">
                <Briefcase className="w-5 h-5 text-primary" />
                <CardTitle className="text-2xl font-bold text-primary">
                  Job Details
                </CardTitle>
              </div>
              <CardDescription className="text-muted-foreground">
                Provide information about the position you're hiring for
              </CardDescription>
            </CardHeader>
            <CardContent className="relative space-y-8 pt-6">
              {/* Form content will go here */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* title job */}
                <FormField
                  control={form.control}
                  name="jobTitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-medium">
                        Job Title
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g. Senior Frontend Developer"
                          {...field}
                          className="border-input/60 focus:border-primary"
                        />
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
                      <FormLabel className="text-foreground font-medium">
                        Employment Type
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="border-input/60 focus:border-primary">
                            <SelectValue placeholder="Select Employment Type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Employment Type</SelectLabel>
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
                  name="companyLocation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Location" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Worldwide</SelectLabel>
                            <SelectItem value="worldwide">
                              <span>🌍</span>
                              <span className="pl-2">Worldwide</span>
                            </SelectItem>
                          </SelectGroup>
                          <SelectGroup>
                            <SelectLabel>Location</SelectLabel>
                            {countryList.map((country) => (
                              <SelectItem
                                value={country.name}
                                key={country.name}
                              >
                                <span>{country.flagEmoji}</span>
                                <span className="pl-2">{country.name}</span>
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
                  <FormLabel className="text-foreground font-medium">
                    <div className="flex items-center gap-1.5">
                      <DollarSign className="h-3.5 w-3.5" />
                      <span>Salary Range</span>
                    </div>
                  </FormLabel>
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

              {/* Job Description  */}
              <div className="mt-9">
                <FormField
                  control={form.control}
                  name="jobDescription"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel className="text-foreground font-medium">
                          <div className="flex items-center gap-1.5">
                            <ListChecks className="h-3.5 w-3.5" />
                            <span>Job Description</span>
                          </div>
                        </FormLabel>
                        <FormControl>
                          <JobDescriptionEditor field={field} />
                        </FormControl>
                      </FormItem>
                    );
                  }}
                />
              </div>

              {/* Benefits */}
              <div className="mt-9">
                <FormField
                  control={form.control}
                  name="benefits"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel className="text-foreground font-medium">
                          Benefits
                        </FormLabel>
                        <FormControl>
                          <BenefitSelector field={field} />
                        </FormControl>
                      </FormItem>
                    );
                  }}
                />
              </div>
            </CardContent>
          </Card>

          {/* Company Form */}
          <Card className="border border-primary/10 shadow-md overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-background pointer-events-none" />
            <CardHeader className="relative border-b border-border/40 pb-4">
              <div className="flex items-center gap-2 mb-2">
                <Building className="w-5 h-5 text-primary" />
                <CardTitle className="text-2xl font-bold text-primary">
                  Company Information
                </CardTitle>
              </div>
              <CardDescription className="text-muted-foreground">
                Tell candidates about your company and culture
              </CardDescription>
            </CardHeader>
            <CardContent className="relative space-y-6 pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Company Name */}
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel className="text-foreground font-medium">
                          Company Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g. Acme Corporation"
                            {...field}
                            className="border-input/60 focus:border-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />

                {/* Company location */}
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-medium">
                        Company Location
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="border-input/60 focus:border-primary">
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
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel className="text-foreground font-medium">
                          Company Website
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="https://example.com"
                            {...field}
                            className="border-input/60 focus:border-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />

                {/* Company Xaccount */}
                <FormField
                  control={form.control}
                  name="companyXAccount"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel className="text-foreground font-medium">
                          Company X Account
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="@companyname"
                            {...field}
                            className="border-input/60 focus:border-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />

                {/* Company Description */}
                <FormField
                  control={form.control}
                  name="companyAbout"
                  render={({ field }) => {
                    return (
                      <FormItem className="md:col-span-2">
                        <FormLabel className="text-foreground font-medium">
                          Company Description
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your company, culture, and values..."
                            {...field}
                            className="min-h-[120px] border-input/60 focus:border-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />

                {/* Logo Company */}
                <FormField
                  control={form.control}
                  name="companyLogo"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel className="text-foreground font-medium flex items-center gap-2">
                        <FileImage className="h-4 w-4" />
                        Company Logo
                      </FormLabel>
                      <FormControl>
                        {field.value ? (
                          <div className="w-fit relative">
                            <Image
                              src={field.value}
                              className="rounded-lg border border-border/40 shadow-sm"
                              alt="Company Logo"
                              width={100}
                              height={100}
                              onError={(e) => {
                                console.log(e, "Error in the image"); // Hide broken images
                              }}
                            />
                            <Button
                              className="absolute -top-4 -right-2 p-1 rounded-full shadow-md transition-transform duration-300 transform hover:scale-110"
                              onClick={() => field.onChange("")}
                              variant="destructive"
                              size="icon"
                            >
                              <XIcon className="h-4 w-4" />
                            </Button>
                          </div>
                        ) : (
                          <UploadDropzone
                            endpoint="imageUploader"
                            onClientUploadComplete={(res) => {
                              if (res && res.length > 0) {
                                field.onChange(res[0].ufsUrl);
                                toast.success("Image uploaded successfully 👍");
                              }
                            }}
                            onUploadError={(error) => {
                              if (error.message?.includes("file too large")) {
                                toast.error("File size must be less than 2MB");
                              } else {
                                toast.error("Upload failed. Please try again.");
                              }
                            }}
                            className="border-primary/30 ut-button:bg-rose-400 ut-button:text-white *:ut-button:text-white ut-button:font-semibold ut-button:hover:bg-purple-400 ut-button:ut-allowed-content:* ut-label:text-muted-foreground ut-upload-icon:text-primary"
                          />
                        )}
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </Card>

          {/* Listing Duration Card */}
          <Card className="overflow-hidden">
            <div className="absolute inset-0 pointer-events-none" />
            <CardHeader className="relative pb-4">
              <CardTitle className="text-2xl font-bold text-primary">
                Job Listing Duration
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Choose how long your job posting should remain active
              </CardDescription>
            </CardHeader>
            <CardContent className="relative pt-6">
              <FormField
                control={form.control}
                name="listingDuration"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormControl>
                        <JobListingDuration field={field} />
                      </FormControl>
                    </FormItem>
                  );
                }}
              />
            </CardContent>
          </Card>

          {/* Submit button */}

          <Button
            variant="secondary"
            type="submit"
            className="w-full py-6"
            disabled={pending}
          >
            {pending ? "Sumitting..." : "Create Job Post"}
          </Button>
        </form>
      </Form>
    </main>
  );
};

export default CreateJobPostForm;
