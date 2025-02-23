"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Briefcase,
  Building2,
  Globe,
  MapPin,
  FileImage,
  Twitter,
  Instagram,
  XIcon,
} from "lucide-react";
import React, { useState } from "react";
import companySchema from "../../../../lib/zodSchema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { countryList } from "@/app/utils/contryLists";
import { UploadDropzone } from "../../Frontend/UploadThing";
import { createCompany } from "@/app/actions";
import Image from "next/image";
import { error } from "console";

export default function CompanyForm() {
  const form = useForm<z.infer<typeof companySchema>>({
    resolver: zodResolver(companySchema),
    defaultValues: {
      name: "",
      location: "",
      about: "",
      logo: "",
      website: "",
      xAccount: "",
    },
  });
  
  // Creatign a pending state
  const [pending, setPending] = useState(false);

  async function onSubmit(data: z.infer<typeof companySchema>) {
    try {
        setPending(true);
        const result = await createCompany(data);
        
        if (result?.error) {
            toast.error(result.error);
            return;
        }
        
        if (result?.redirect) {
            window.location.href = result.redirect;
            return;
        }
        
        toast.success("Company information submitted successfully!");
        form.reset();
        
    } catch (error) {
        const message = error instanceof Error ? error.message : "Unknown error";
        toast.error(message);
    } finally {
        setPending(false);
    }
}

  return (
    <div className="min-h-screen mt-6">
      <div className="w-full max-w-4xl mx-auto space-y-6 sm:space-y-8">
        {/* Header Section */}
        <div className="form-container rounded-lg">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4 sm:mb-6">
            <div className="bg-white/10 p-2 sm:p-3 rounded-lg">
              <Briefcase className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                Company Profile
              </h1>
              <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
                Complete your company profile to showcase your organization to
                potential candidates. Make sure to provide accurate and engaging
                information.
              </p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="form-container rounded-lg bg-black  p-6 sm:p-6 md:p-8 space-y-6 sm:space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
              {/* Company Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className=" flex items-center gap-2 text-sm sm:text-base">
                      <Building2 className="h-4 w-4" />
                      Company Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter company name"
                        {...field}
                        className="bg-white/5   focus:border-white/20 focus:ring-white/20"
                      />
                    </FormControl>
                    <FormMessage className="text-rose-300" />
                  </FormItem>
                )}
              />

              {/* Location */}
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className=" flex items-center gap-2 text-sm sm:text-base">
                      <MapPin className="h-4 w-4" />
                      Where are you Located?
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select location" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-black max-h-[300px]">
                        {countryList.map(({ name, code }) => (
                          <SelectItem
                            key={code}
                            value={code}
                            className="text-white "
                          >
                            <span>{name}</span>
                            <span className="ml-2 text-gray-400">{code}</span>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-rose-300" />
                  </FormItem>
                )}
              />

              {/* About Company */}
              <FormField
                control={form.control}
                name="about"
                render={({ field }) => (
                  <FormItem className="col-span-1 md:col-span-2">
                    <FormLabel className="text-white text-sm sm:text-base">
                      About Company
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about your company's mission, culture, and values..."
                        className="bg-white/5  text-white placeholder:text-white/40 min-h-[120px] resize-none focus:border-white/20 focus:ring-white/20"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="text-white/60 text-sm">
                      This information will be displayed on your company
                      profile.
                    </FormDescription>
                    <FormMessage className="text-red-300" />
                  </FormItem>
                )}
              />

              {/* Logo Company */}
              <FormField
                control={form.control}
                name="logo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white flex items-center gap-2 text-sm sm:text-base">
                      <FileImage className="h-4 w-4" />
                      Company Logo
                    </FormLabel>
                    <FormControl>
                      {field.value ? (
                        <div className="w-fit relative">
                          <Image
                            src={field.value}
                            className="rounded-lg"
                            alt="Company Logo"
                            width={80}
                            height={80}
                            onError={(e) => {
                              console.log(e, "Error in the image"); // Hide broken images
                            }}
                          />
                          <Button
                            className="absolute -top-4 -right-2 p-1 rounded-full shadow-md transition-transform duration-300 transform hover:scale-110 "
                            onClick={() => field.onChange("")}
                          >
                            <XIcon className="h-7 w-7 text-white font-extrabold bg-rose-500 rounded-full p-1hover:bg-rose-600 transition-colors duration-300 hover:scale-110 " />
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
                          className="border-primary ut-button:bg-white ut-button:text-black ut-button:font-semibold ut-button:hover:bg-white/80 ut-button:ut-allowed-content:* ut-label:text-white/60 ut-upload-icon:text-rose-400"
                        />
                      )}
                    </FormControl>

                    <FormMessage className="text-rose-300" />
                  </FormItem>
                )}
              />

              {/* Website */}
              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white flex items-center gap-2 text-sm sm:text-base">
                      <Globe className="h-4 w-4" />
                      Website
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://example.com"
                        {...field}
                        className="bg-white/5  text-white placeholder:text-white/40 focus:border-white/20 focus:ring-white/20"
                      />
                    </FormControl>
                    <FormMessage className="text-rose-300" />
                  </FormItem>
                )}
              />

              {/* X Account */}
              <FormField
                control={form.control}
                name="xAccount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white flex items-center gap-2 text-sm sm:text-base">
                      <Twitter className="h-4 w-4" />X Account (Optional)
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="@username"
                        {...field}
                        className="bg-white/5  text-white placeholder:text-white/40 focus:border-white/20 focus:ring-white/20"
                      />
                    </FormControl>
                    <FormMessage className="text-rose-300" />
                  </FormItem>
                )}
              />
            </div>

            {/* Buttons to save or cancel */}
            <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 sm:gap-4 pt-6 border-t border-white/10">
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
                {/* Save Company Profile */}
                {pending ? "Saving..." : "Save Company Profile"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
