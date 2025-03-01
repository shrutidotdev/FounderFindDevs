
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Stats from "../components/Frontend/Stats";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Quote } from "lucide-react";
import CreateJobPostForm from "../components/forms/Hire/CreateJobPostForm";
import { prisma } from "@/lib/prisma";

import { requireUser } from "../utils/requireUser";

const companies = [
  {
    id: 1,
    name: "Anthropic",
    logo: "/companiesLogo/anthropic_black_wordmark.svg",
  },
  { id: 2, name: "DeepSeek", logo: "/companiesLogo/deepseek_wordmark.svg" },
  { id: 3, name: "Qwen", logo: "/companiesLogo/qwen_light.svg" },
  { id: 4, name: "Socket.io", logo: "/companiesLogo/socketio-light.svg" },
  { id: 5, name: "TanStack", logo: "/companiesLogo/tanstack.svg" },
];

const testimonials = [
  {
    quote:
      "Working with this team has been a game-changer for our business. Their expertise and dedication are unmatched.",
    author: "John Doe",
    company: "Tech Innovators Inc.",
  },
  {
    quote:
      "The quality of their work is exceptional. They delivered on time and exceeded our expectations.",
    author: "Jane Smith",
    company: "Green Leaf Solutions",
  },
  {
    quote:
      "I've never seen such attention to detail and professionalism. Highly recommend their services!",
    author: "Emily Johnson",
    company: "FutureTech Enterprises",
  },
  {
    quote:
      "Their customer support is outstanding. They were always available to address our concerns and provide solutions.",
    author: "Michael Brown",
    company: "Innovatech Solutions",
  },
  {
    quote:
      "This team went above and beyond to ensure our project was a success. We'll definitely be working with them again.",
    author: "Sarah Davis",
    company: "EcoFriendly Products",
  },
];

async function getCompanyData(userId: string) {
  return await prisma.company.findUnique({
    where: { userId },
    select: {
      name: true,
      logo: true,
      about: true,
      website: true,
      location: true,
      xAccount: true,
    },
  });
}

async function PostJob() {
  const session = await requireUser();
  const data = await getCompanyData(session.id);

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            Post Your Job
          </h1>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            Connect with top talent by posting your job opportunity. Our platform helps you find the perfect match for your team.
          </p>
        </div>

        <Stats />

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10">
          {/* Job Posting Form */}
          <div className="lg:col-span-7 xl:col-span-8 order-2 lg:order-1">
            <CreateJobPostForm
              companyAbout={data?.about}
              companyLocation={data?.location}
              companyLogo={data?.logo}
              companyName={data?.name}
              companyWebsite={data?.website}
              companyXAccount={data?.xAccount}
            />
          </div>

          {/* Companies & Testimonials Section */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-8 order-1 lg:order-2">
            {/* Trusted Companies Section */}
            <Card className="overflow-hidden border-primary/10 shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 pointer-events-none" />
              <CardHeader className="relative">
                <CardTitle className="text-2xl font-bold text-primary">
                  Trusted by Industry Leaders
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Join thousands of companies who trust us to find the right talent.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 items-center justify-items-center py-4">
                  {companies.map((company) => (
                    <div key={company.id} className="relative w-24 h-12 md:w-28 md:h-14 flex items-center justify-center group">
                      <Image
                        src={company.logo}
                        alt={company.name}
                        fill
                        className="object-contain filter group-hover:brightness-75 transition-all duration-300 transform group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Testimonials Section */}
            <Card className="overflow-hidden border-primary/10 shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 pointer-events-none" />
              <CardHeader className="relative">
                <div className="flex items-center gap-2 mb-2">
                  <Quote className="w-5 h-5 text-primary" />
                  <CardTitle className="text-2xl font-bold text-primary">
                    What People Say
                  </CardTitle>
                </div>
                <CardDescription className="text-muted-foreground">
                  Hear from employers who've found success with our platform
                </CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <ScrollArea className="h-[400px] pr-4">
                  <div className="space-y-6">
                    {testimonials.map((testimonial, index) => (
                      <div key={index} className="relative">
                        <div className="border border-primary/10 bg-card text-card-foreground p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                          <blockquote className="text-lg italic text-muted-foreground mb-4">
                            "{testimonial.quote}"
                          </blockquote>
                          <Separator className="my-4 bg-primary/10" />
                          <footer className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div>
                              <div className="font-semibold text-primary">
                                {testimonial.author}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {testimonial.company}
                              </div>
                            </div>
                          </footer>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostJob;
export { getCompanyData };
