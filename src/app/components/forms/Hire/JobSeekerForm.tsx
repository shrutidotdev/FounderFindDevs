// "use client";

// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import {
//   Briefcase,
//   Building2,
//   Globe,
//   MapPin,
//   FileImage,
//   Twitter,
//   Instagram,
//   XIcon,
// } from "lucide-react";
// import React, { useState } from "react";
// import companySchema from "../../../../lib/zodSchema";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormDescription,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Button } from "@/components/ui/button";
// import { toast } from "sonner";
// import { countryList } from "@/app/utils/contryLists";
// import { UploadDropzone } from "../../Frontend/UploadThing";
// import { createCompany } from "@/app/actions";
// import Image from "next/image";

// export default function JobSeekerForm() {
//   const form = useForm<z.infer<typeof companySchema>>({
//     resolver: zodResolver(companySchema),
//     defaultValues: {
//       name: "",
//       location: "",
//       about: "",
//       logo: "",
//       website: "",
//       xAccount: "",
//     },
//   });
//   // Creatign a pending state
//   const [pending, setPending] = useState(false);

//   // async function onSubmit(data: z.infer<typeof companySchema>) {
//   //   try {
//   //     setPending(true);
//   //     await createCompany(data);
//   //     toast.success("Company information submitted successfully!");
//   //     console.log(data);
//   //     form.reset();
//   //   } catch (error) {
//   //     if (error instanceof Error && error.message !== "NEXT_REDIRECT") {
//   //       toast.error(error.message);
//   //       console.log("Something went wrong", error.message);
//   //     }
//   //   } finally {
//   //     setPending(false);
//   //   }
//   // }

//   return (
//     <div className="min-h-screen mt-6">
//       <div className="w-full max-w-4xl mx-auto space-y-6 sm:space-y-8">
//         {/* Header Section */}
//         <div className="form-container rounded-lg">
//           <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4 sm:mb-6">
//             <div className="bg-white/10 p-2 sm:p-3 rounded-lg">
//               <Briefcase className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
//             </div>
//             <div className="space-y-2">
//               <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
//                  Create your Job profile now
//               </h1>
//               <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
//                Fill out the form below to create your job profile.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Form Section */}
//         <Form {...form}>
//           <form
//             // onSubmit={form.handleSubmit(onSubmit)}
//             className="form-container rounded-lg bg-black p-4 sm:p-6 md:p-8 space-y-8 sm:space-y-8"
//           >
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
//               {/* Candidate Name */}
//               <FormField
//                 control={form.control}
//                 name="name"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel className="text-white flex items-center gap-2 text-sm sm:text-base">
//                       <Building2 className="h-4 w-4" />
//                       Your First Name
//                     </FormLabel>
//                     <FormControl>
//                       <Input
//                         placeholder="Enter company name"
//                         {...field}
//                         className="bg-white/5  text-white placeholder:text-white focus:border-white/20 focus:ring-white/20"
//                       />
//                     </FormControl>
//                     <FormMessage className="text-rose-300" />
//                   </FormItem>
//                 )}
//               />

//               {/* Location */}
//               <FormField
//                 control={form.control}
//                 name="location"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel className="text-white flex items-center gap-2 text-sm sm:text-base">
//                       <MapPin className="h-4 w-4" />
//                       Where are you Located?
//                     </FormLabel>
//                     <Select
//                       onValueChange={field.onChange}
//                       defaultValue={field.value}
//                     >
//                       <FormControl>
//                         <SelectTrigger className=" text-white">
//                           <SelectValue placeholder="Select location" />
//                         </SelectTrigger>
//                       </FormControl>
//                       <SelectContent className="bg-black text-white  max-h-[300px]">
//                         {countryList.map(({ name, code }) => (
//                           <SelectItem
//                             key={code}
//                             value={code}
//                             className="text-white "
//                           >
//                             <span>{name}</span>
//                             <span className="ml-2 text-gray-400">{code}</span>
//                           </SelectItem>
//                         ))}
//                       </SelectContent>
//                     </Select>
//                     <FormMessage className="text-rose-300" />
//                   </FormItem>
//                 )}
//               />

//               {/* About Company */}
//               <FormField
//                 control={form.control}
//                 name="about"
//                 render={({ field }) => (
//                   <FormItem className="col-span-1 md:col-span-2">
//                     <FormLabel className="text-white text-sm sm:text-base pt-8">
//                       Tell us about yourself apart from academic qualifications
//                     </FormLabel>
//                     <FormControl>
//                       <Textarea
//                         placeholder="Tell us about your company's mission, culture, and values..."
//                         className="bg-white/5  text-white placeholder:text-white/40 min-h-[120px] resize-none focus:border-white/20 focus:ring-white/20"
//                         {...field}
//                       />
//                     </FormControl>
//                     <FormDescription className="text-white/60 text-sm">
//                       This information will be displayed on your company
//                       profile.
//                     </FormDescription>
//                     <FormMessage className="text-red-300" />
//                   </FormItem>
//                 )}
//               />

//               {/* Logo Company */}
//               <FormField
//                 control={form.control}
//                 name="logo"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel className="text-white flex items-center gap-2 text-sm sm:text-base">
//                       <FileImage className="h-4 w-4" />
//                       Company Logo
//                     </FormLabel>
//                     <FormControl>
//                       {field.value ? (
//                         <div className="relative inline-block">
//                         <div className="relative w-20 h-20">
//                           <Image
//                             src={field.value}
//                             className="rounded-lg object-cover w-full h-full shadow-lg transition-transform duration-300 transform hover:scale-105"
//                             alt="Company Logo"
//                             width={100}
//                             height={100}
//                           />
//                           <Button
//                             onClick={() => field.onChange("")}
//                             className="absolute -top-4 -right-2 p-1 bg-white rounded-full shadow-md transition-transform duration-300 transform hover:scale-110 hover:bg-rose-100"
//                             style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
//                           >
//                             <XIcon
//                               width={20}
//                               height={20}
//                               className="text-rose-500 hover:text-rose-600"
//                             />
//                           </Button>
//                         </div>
//                       </div>
                      
//                       ) : (
//                         <UploadDropzone
//                           endpoint="imageUploader"
//                           onClientUploadComplete={(res) => {
//                             field.onChange(res[0].url);
//                           }}
//                           onUploadError={(e) => {
//                             console.log("Something Went Wrong");
//                           }}
//                           className="border-primary ut-button:bg-white ut-button:text-black ut-button:font-semibold ut-button:hover:bg-white/80 ut-button:ut-allowed-content:* ut-label:text-white/60 ut-upload-icon:text-rose-400"
//                         />
//                       )}
//                     </FormControl>

//                     <FormMessage className="text-rose-300" />
//                   </FormItem>
//                 )}
//               />

//               {/* Website */}
//               <FormField
//                 control={form.control}
//                 name="website"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel className="text-white flex items-center gap-2 text-sm sm:text-base">
//                       <Globe className="h-4 w-4" />
//                       Website
//                     </FormLabel>
//                     <FormControl>
//                       <Input
//                         placeholder="https://example.com"
//                         {...field}
//                         className="bg-white/5  text-white placeholder:text-white/40 focus:border-white/20 focus:ring-white/20"
//                       />
//                     </FormControl>
//                     <FormMessage className="text-rose-300" />
//                   </FormItem>
//                 )}
//               />

//               {/* X Account */}
//               <FormField
//                 control={form.control}
//                 name="xAccount"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel className="text-white flex items-center gap-2 text-sm sm:text-base">
//                       <Twitter className="h-4 w-4" />X Account (Optional)
//                     </FormLabel>
//                     <FormControl>
//                       <Input
//                         placeholder="@username"
//                         {...field}
//                         className="bg-white/5  text-white placeholder:text-white/40 focus:border-white/20 focus:ring-white/20"
//                       />
//                     </FormControl>
//                     <FormMessage className="text-rose-300" />
//                   </FormItem>
//                 )}
//               />

            
//             </div>

//             {/* Buttons to save or cancel */}
//             <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 sm:gap-4 pt-6 border-t border-white/10">
//               <Button
//                 variant="ghost"
//                 type="button"
//                 className="text-white hover:bg-black hover:text-white w-full sm:w-auto"
//               >
//                 Cancel
//               </Button>
//               <Button
//                 type="submit"
//                 className="bg-white text-black hover:bg-white/90 w-full sm:w-auto"
//                 disabled={pending}
//               >
//                 {/* Save Company Profile */}
//                 {pending ? "Saving..." : "Save Company Profile"}
//               </Button>
//             </div>
//           </form>
//         </Form>
//       </div>
//     </div>
//   );
// }
