"use client";

import { useEffect, useState } from "react";
import { Pacifico } from "next/font/google";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Avatar from "./Avatar";
import Link from "next/link";
import Stats from "./Stats";

// Optimize font loading with display swap
const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
  display: "swap", // Add display swap for better font loading
});

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Simple mount animation instead of complex variants
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Logo and Avatar with immediate render */}
          <div className="mb-6 flex items-center justify-center">
            <Avatar />
            <div className="flex items-center ml-4">
             
              <span className="text-sm bg-purple-600 rounded-md px-4 py-1 text-white font-mono font-extrabold tracking-wide ml-2 flex items-center justify-evenly">
              <Image
                src="/icon.svg"
                alt="shruti.dev"
                width={40}
                height={40}
                priority
                loading="eager"
              />
                shruti.dev
              </span>
            </div>
          </div>

          {/* Main heading with no animation delay for better LCP */}
          <div className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white">
                Your Dream Job Awaits
              </span>
              <br />
              <span
                className={cn(
                  "bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 px-11",
                  pacifico.className
                )}
              >
                Post, Apply, Succeed
              </span>
            </h1>
          </div>

          {/* Subtext with staggered timing */}
          <div className={`transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-base font-semibold sm:text-lg md:text-xl text-white mb-8 leading-relaxed tracking-wide max-w-2xl mx-auto px-4 mt-16">
              The Ultimate Job Board Platform for Employers and Job Seekers
            </p>
          </div>

          {/* CTA buttons with minimal delay */}
          <div className={`transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href={"/hire"}>
                <button className="px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-white/90 transition-colors">
                  Get Started
                </button>
              </Link>
              <button className="px-6 py-3 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Stats component with longest delay */}
          <div className={`transition-all duration-700 delay-300 mt-8 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Stats />
          </div>
        </div>
      </div>
    </div>
  );
}