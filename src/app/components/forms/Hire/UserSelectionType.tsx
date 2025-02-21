
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import {  Search, Building2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {fadeInUp} from "@/lib/Animations";

type UserSelectionType = "company" | "jobseeker" | null;

interface UserSelectionTypeProps {
  onSelect: (type: UserSelectionType) => void;
}

export default function UserSelectionType({ onSelect }: UserSelectionTypeProps) {


  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    hover: { 
      y: -5,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="">
      <div className=" mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial="initial"
          animate="animate"
          className="max-w-4xl mx-auto space-y-16"
        >
        {/* Header */}
          <div className="text-center space-y-6">
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center justify-center"
            >
              <div className="relative">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-indigo-300/20 via-white/10 to-rose-300/20 blur"></div>
                <div className="relative bg-black/50 p-3 rounded-lg">
                  <Image
                    src="/favicon_io/android-chrome-192x192.png"
                    alt="Logo"  className="size-16"
                    width={64}
                    height={64}
                  />
                </div>
              </div>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className={cn(
                "text-4xl md:text-6xl font-extrabold",
                "bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300"
              )}
            >
              Welcome to Job Board
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto"
            >
              Choose your path to begin your journey with us
            </motion.p>
          </div>

          {/* Selection Cards */}
          <div className="grid md:grid-cols-2 gap-6">

            {/* Job Seeker Card */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="group relative"
            >
              <div className="block" onClick={() => onSelect("jobseeker")}>
                <div className="relative bg-black/40 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-2xl h-full transition-all duration-300 group-hover:border-indigo-300/50">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-300/10 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="relative space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white/5 rounded-xl">
                        <Search size={32} className="text-indigo-300" />
                      </div>
                      <h2 className="text-2xl font-bold text-white">Job Seeker</h2>
                    </div>

                    <p className="text-white/70">
                      Browse opportunities that match your skills and aspirations.
                    </p>

                    <div className="flex items-center gap-2 text-indigo-300 group-hover:gap-4 transition-all">
                      <span className="font-semibold">Browse Jobs</span>
                      <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Employer Card */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="group relative"
            >
              <div className="block" onClick={() => onSelect("company")}>
                <div className="relative bg-black/40 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-2xl h-full transition-all duration-300 group-hover:border-rose-300/50">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-rose-300/10 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="relative space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white/5 rounded-xl">
                        <Building2 size={32} className="text-rose-300" />
                      </div>
                      <h2 className="text-2xl font-bold text-white">Employer</h2>
                    </div>

                    <p className="text-white/70">
                      Post job openings and connect with qualified candidates. Find the perfect talent to join your team.
                    </p>

                    <div className="flex items-center gap-2 text-rose-300 group-hover:gap-4 transition-all">
                      <span className="font-semibold">Post a Job</span>
                      <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          
        </motion.div>
      </div>
    </div>
  );
}