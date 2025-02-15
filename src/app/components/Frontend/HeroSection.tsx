"use client";

import { Pacifico } from "next/font/google";
import Image from "next/image";
import { motion } from "motion/react"; // Changed from "motion/react" to "framer-motion"
import { cn } from "@/lib/utils";
import { AvatarCircles } from "@/components/ui/Avatar";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});

export default function Home() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#[#d53bfa] ] "
          >
            <AvatarCircles
              avatarUrls={[
                {
                  imageUrl: "/avatar/pic1.avif",
                  profileUrl: "https://github.com/shrutisinghz",
                },
                {
                  imageUrl: "/avatar/pic2.avif",
                  profileUrl: "https://github.com/shrutisinghz",
                },
                {
                  imageUrl: "/avatar/pic3.avif",
                  profileUrl: "https://github.com/shrutisinghz",
                },
                {
                  imageUrl: "/avatar/pic4.avif",
                  profileUrl: "https://github.com/shrutisinghz",
                },
                {
                  imageUrl: "/avatar/pic5.avif",
                  profileUrl: "https://github.com/shrutisinghz",
                },
              ]}
            />
            <motion.div
              custom={0}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#d53bfa]"
            >
              <Image src="/icon.svg" alt="shrutisinghz.dev" width={30} height={30} />
              <span className="text-sm text-white font-mono font-extrabold tracking-wide">
                shrutisinghz.dev
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
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
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-base font-semibold sm:text-lg md:text-xl text-white mb-8 leading-relaxed  tracking-wide max-w-2xl mx-auto px-4 mt-16">
              The Ultimate Job Board Platform for Employers and Job Seekers
            </p>
          </motion.div>

          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex gap-4 justify-center"
          >
            <button className="px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-white/90 transition-colors">
              Get Started
            </button>
            <button className="px-6 py-3 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 transition-colors">
              Learn More
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
