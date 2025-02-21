"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";
import { ArrowLeft, Briefcase } from "lucide-react";

const HiringForm = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="w-full">
      <div className="max-w-4xl mx-auto bg-black/40 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/10">
        <div className="flex flex-col gap-8">
          {/* Header Section */}
          <div className="flex flex-col gap-6">
            <Link
              href="/"
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors w-fit"
            >
              <ArrowLeft size={20} />
              <span>Back to Home</span>
            </Link>
            
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className={cn(
                  "text-2xl md:text-4xl lg:text-5xl font-extrabold flex items-center gap-4",
                  "bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300"
                )}
              >
                <div className="relative">
                  <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-indigo-300/20 via-white/10 to-rose-300/20 blur"></div>
                  <div className="relative bg-black/50 p-2 rounded-lg">
                    <Briefcase size={40} className="text-white" />
                  </div>
                </div>
                Job Board
              </Link>
              <p className="text-white/70 text-lg">
                Post your job opening and reach thousands of qualified candidates
              </p>
            </div>
          </div>

          {/* Form Section */}
          <motion.div 
            {...fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="space-y-4">
              <label className="block">
                <span className="text-white/90 block mb-2">Company Name</span>
                <input 
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:border-indigo-300 focus:ring-1 focus:ring-indigo-300 transition-all outline-none"
                  placeholder="Enter company name"
                />
              </label>
              <label className="block">
                <span className="text-white/90 block mb-2">Job Title</span>
                <input 
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:border-indigo-300 focus:ring-1 focus:ring-indigo-300 transition-all outline-none"
                  placeholder="e.g. Senior Frontend Developer"
                />
              </label>
            </div>
            
            <div className="space-y-4">
              <label className="block">
                <span className="text-white/90 block mb-2">Location</span>
                <input 
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:border-indigo-300 focus:ring-1 focus:ring-indigo-300 transition-all outline-none"
                  placeholder="e.g. Remote, New York, London"
                />
              </label>
              <label className="block">
                <span className="text-white/90 block mb-2">Employment Type</span>
                <select 
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:border-indigo-300 focus:ring-1 focus:ring-indigo-300 transition-all outline-none"
                >
                  <option value="" className="bg-gray-900">Select type</option>
                  <option value="full-time" className="bg-gray-900">Full-time</option>
                  <option value="part-time" className="bg-gray-900">Part-time</option>
                  <option value="contract" className="bg-gray-900">Contract</option>
                </select>
              </label>
            </div>

            <div className="md:col-span-2">
              <label className="block">
                <span className="text-white/90 block mb-2">Job Description</span>
                <textarea 
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:border-indigo-300 focus:ring-1 focus:ring-indigo-300 transition-all outline-none h-32"
                  placeholder="Describe the role, requirements, and benefits..."
                />
              </label>
            </div>

            <div className="md:col-span-2 flex justify-end">
              <button 
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 text-black font-semibold hover:opacity-90 transition-opacity"
              >
                Post Job
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HiringForm;