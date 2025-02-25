"use client";
import Link from "next/link";
import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import UserSelectionTypeForm from "./UserSelectionType"
import { Card, CardContent } from "@/components/ui/card";
import CompanyForm from "./CompanyForm";
import JobSeekerForm from "./JobSeekerForm";

type UserSelectionType = "company" | "jobseeker" | null;

const HiringForm = () => {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState<UserSelectionType>(null);
// this function will handle the user type selection and move to the next step the hiring page for company or jobseeker to fill the form
  function handleUserTypeSelection(type: UserSelectionType) {
    setUserType(type);
    setStep(2);
  }

  function renderStep() {
    switch (step) {
      case 1: return <UserSelectionTypeForm onSelect={handleUserTypeSelection} />

        case 2: return userType === "company" ? <CompanyForm /> : <JobSeekerForm />;
        default: return null
    }
  }


  return (
    <div className="w-full min-h-screen">
      <div className=" mx-auto rounded-2xl p-8 ">
        <div className="flex flex-col gap-8">
          {/* Header Section */}
          <Card className=" text-white mt-[16px]">
            <CardContent>{renderStep()}</CardContent>
          </Card>

          <Link
              href="/"
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back to Home</span>
            </Link>

        </div>
      </div>
    </div>
  );
};

export default HiringForm;
