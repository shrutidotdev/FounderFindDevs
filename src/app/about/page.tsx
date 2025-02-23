"use client"

import { motion } from "motion/react"
import Image from "next/image"
import GlassMorphism from "@/components/ui/GlassMorphism"

export default function About() {
  return (
    <div className="relative min-h-screen w-full pt-24 bg-[#000000]">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      <GlassMorphism
        className="right-[10%] top-[30%]"
        width={400}
        height={400}
        rotate={-15}
        delay={0.4}
        gradient="from-rose-500/[0.08]"
      />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Story</h1>
            <p className="text-xl text-white/70">
              Building bridges between talent and opportunity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-white/70 mb-6">
                At Kokonut, we believe in creating meaningful connections between talented individuals and forward-thinking companies. Our platform is designed to make the job search and hiring process more efficient, transparent, and rewarding for everyone involved.
              </p>
              <p className="text-white/70">
                We're committed to innovation, quality, and exceptional service, helping both job seekers and employers achieve their goals in the ever-evolving digital landscape.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative h-[300px] rounded-xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            {[
              { title: "Jobs Posted", value: "10,000+" },
              { title: "Happy Clients", value: "5,000+" },
              { title: "Success Rate", value: "95%" },
            ].map((stat) => (
              <div key={stat.title} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/70">{stat.title}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* <div className="absolute inset-0 bg-gradient-to-t from-[#fa7272] via-transparent to-[#830303]/80 pointer-events-none" /> */}
    </div>
  )
}