"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Clock, Building2, ExternalLink, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface JobProps {
  job: {
    id: string;
    createdAt: string;
    Company: {
      name: string;
      logo: string;
      about: string;
      location: string;
      website: string;
    };
    jobTitle: string;
    employmentType: string;
    location: string;
    salaryFrom: number;
    salaryTo: number;
    jobDescription: string;
  };
}

const formatSalary = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const ActiveJobCardComponents = ({ job }: JobProps) => {
  return (
    <Link
      href={`/jobs/${job.id}`}
      className="block transition-all duration-300 hover:-translate-y-1"
    >
      <Card className="overflow-hidden border-0 bg-gradient-to-br from-violet-400 to-purple-700 shadow-lg transition-all duration-300 hover:shadow-xl">
        <div className="absolute right-0 top-0 h-24 w-24 bg-gradient-to-bl from-violet-400/20 to-transparent"></div>
        <CardHeader className="space-y-4 pb-2">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-lg border-2 border-white/20 shadow-md">
                <Image
                  src={job.Company.logo || "/placeholder.svg"}
                  alt={job.Company.name}
                  className="size-full object-cover"
                  width={200}
                  height={200}
                  loading="eager"
                  priority
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-white transition-colors">
                  {job.jobTitle}
                </h3>
                <div className="flex items-center gap-2 text-violet-100">
                  <Building2 className="h-4 w-4" />
                  <span>{job.Company.name}</span>
                </div>
              </div>
            </div>
            <Badge variant="secondary" className="h-fit bg-white/20 text-white hover:bg-white/30">
              {job.employmentType}
            </Badge>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-violet-100">
            <div className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              <span>Posted {formatDate(job.createdAt)}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Badge variant="outline" className="border-violet-300 bg-violet-500/20 px-3 py-1.5 text-base font-medium text-white">
              {formatSalary(job.salaryFrom)} - {formatSalary(job.salaryTo)}
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="space-y-4 pt-2">
          <p className="line-clamp-2 text-violet-100">{job.Company.about}</p>

          <div className="flex items-center justify-between pt-2">
            <Button 
              variant="secondary" 
              className="group bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
            >
              View Details
              <ExternalLink className="ml-1.5 inline h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <div className="text-xs text-violet-200">
              <Clock className="mr-1 inline-block h-3.5 w-3.5" />
              Apply soon
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ActiveJobCardComponents;
