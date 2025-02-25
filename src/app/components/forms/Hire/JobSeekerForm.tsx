import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import React, { useEffect } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Briefcase, Building2, FileImage, XIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { jobSeekerSchema } from "@/lib/zodSchema";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UploadDropzone } from "../../Frontend/UploadThing";
import { toast } from "sonner";
import { createJobSeeker } from "@/app/actions";
import pdfImage from "../../../../../public/pdf.webp";
import { useRouter } from "next/navigation";

const JobSeekerForm = () => {
  const form = useForm<z.infer<typeof jobSeekerSchema>>({
    resolver: zodResolver(jobSeekerSchema),
    defaultValues: {
      name: "",
      about: "",
      resume: "",
      portfolioLink: "",
      LinkedIn: "",
    },
  });

  const [pending, setPending] = React.useState(false);
  const router = useRouter();

  async function onSubmit(data: z.infer<typeof jobSeekerSchema>) {
    try {
      setPending(true);

      // Log the data being sent for debugging
      console.log("Submitting data:", data);

      // Check if data is empty or null
      if (!data || Object.keys(data).length === 0) {
        console.error("Form data is empty or null");
        toast.error("Form data is empty. Please fill in all required fields.");
        return;
      }

      const result = await createJobSeeker(data);

      if (result?.error) {
        toast.error(result.error);
        return;
      }

      toast.success("Profile created successfully");
      router.push("/");
    } catch (error) {
      console.error("Form submission error:", error);
      const message = error instanceof Error ? error.message : "Unknown error";
      toast.error(message);
    } finally {
      setPending(false);
    }
  }

  return (
    <div>
      {/* Header Section */}
      <div className="form-container rounded-lg">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4 sm:mb-6">
          <div className="bg-white/10 p-2 sm:p-3 rounded-lg">
            <Briefcase className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Job Seeker Profile
            </h1>
            <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
              Complete your profile to showcase your skills and experience to
              potential employers. Make sure to provide accurate and engaging
              information.
            </p>
          </div>
        </div>
      </div>

      {/* Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 text-sm sm:text-base">
                    <Building2 className="h-4 w-4" />
                    Your Full Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your full name"
                      {...field}
                      className="bg-white/5 focus:border-white/20 focus:ring-white/20"
                    />
                  </FormControl>
                  <FormMessage className="text-rose-300" />
                </FormItem>
              )}
            />

            {/* About */}
            <FormField
              control={form.control}
              name="about"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 text-sm sm:text-base">
                    <Building2 className="h-4 w-4" />
                    Tell us about yourself
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about your skills, experience, and what you're looking for..."
                      {...field}
                      className="bg-white/5 min-h-[120px] focus:border-white/20 focus:ring-white/20"
                    />
                  </FormControl>
                  <FormMessage className="text-rose-300" />
                </FormItem>
              )}
            />

            {/* Resume */}
            <FormField
              control={form.control}
              name="resume"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white flex items-center gap-2 text-sm sm:text-base">
                    <FileImage className="h-4 w-4" />
                    Resume (PDF only)
                  </FormLabel>
                  <FormControl>
                    {field.value ? (
                      <div className="w-fit relative">
                        <Image
                          src={pdfImage}
                          className="rounded-lg"
                          alt="Your Resume"
                          width={80}
                          height={80}
                          onError={(e) => {
                            console.log(e, "Error in the image");
                          }}
                        />
                        <Button
                          type="button" // Add type button to prevent form submission
                          className="absolute -top-4 -right-2 p-1 rounded-full shadow-md transition-transform duration-300 transform hover:scale-110"
                          onClick={() => field.onChange("")}
                        >
                          <XIcon className="h-7 w-7 text-white font-extrabold bg-rose-500 rounded-full p-1 hover:bg-rose-600 transition-colors duration-300 hover:scale-110" />
                        </Button>
                      </div>
                    ) : (
                      <UploadDropzone
                        endpoint="resumePdfUploader"
                        onClientUploadComplete={(res) => {
                          if (res && res.length > 0) {
                            field.onChange(res[0].ufsUrl);
                            toast.success("Resume uploaded successfully 👍");
                          }
                        }}
                        onUploadError={(error) => {
                          console.error("Upload error:", error);

                          if (
                            error?.message
                              ?.toLowerCase()
                              .includes("Invalid config: FileSizeMismatch")
                          ) {
                            toast.error("File size must be less than 2MB ❌");
                          } else {
                            toast.error(
                              `Upload failed: ${
                                error.message || "Unknown error occurred"
                              }`
                            );
                          }
                        }}
                        className="border-primary ut-button:bg-white ut-button:text-black ut-button:font-semibold ut-button:hover:bg-white/80 ut-button:ut-allowed-content:* ut-label:text-white/60 ut-upload-icon:text-rose-400"
                      />
                    )}
                  </FormControl>
                  <FormMessage className="text-rose-300" />
                </FormItem>
              )}
            />

            {/* Link to Portfolio */}
            <FormField
              control={form.control}
              name="portfolioLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 text-sm sm:text-base">
                    <Building2 className="h-4 w-4" />
                    Portfolio Link (Optional)
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="url"
                      placeholder="https://yourportfolio.com"
                      {...field}
                      className="bg-white/5 focus:border-white/20 focus:ring-white/20"
                    />
                  </FormControl>
                  <FormMessage className="text-rose-300" />
                </FormItem>
              )}
            />

            {/* LinkedIn */}
            <FormField
              control={form.control}
              name="LinkedIn"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 text-sm sm:text-base">
                    <Building2 className="h-4 w-4" />
                    LinkedIn Profile
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="url"
                      placeholder="https://www.linkedin.com/in/yourprofile/"
                      {...field}
                      className="bg-white/5 focus:border-white/20 focus:ring-white/20"
                    />
                  </FormControl>
                  <FormMessage className="text-rose-300" />
                </FormItem>
              )}
            />

            {/* Action Buttons */}
            <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 sm:gap-4 pt-6 border-t border-white/10 md:col-span-2">
              <Button
                variant="ghost"
                type="button"
                className="text-white hover:bg-black hover:text-white w-full sm:w-auto"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-white text-black hover:bg-white/90 w-full sm:w-auto"
                disabled={pending}
              >
                {pending
                  ? "Saving..."
                  : "Create Profile"}
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default JobSeekerForm;
