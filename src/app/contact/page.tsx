"use client"

import { motion } from "motion/react"
import { Mail, MapPin, Phone } from "lucide-react"
import GlassMorphism from "@/components/ui/GlassMorphism"

export default function Contact() {
  return (
    <div className="relative min-h-screen w-full pt-24 bg-[#000000]">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      <GlassMorphism
        className="right-[10%] bottom-[20%]"
        width={400}
        height={400}
        rotate={-15}
        delay={0.4}
        gradient="from-rose-500/[0.08]"
      />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Get in Touch</h1>
            <p className="text-xl text-white/70">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10"
            >
              <form className="space-y-6">
                <div>
                  <label className="block text-white mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/20 focus:border-white/40 focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/20 focus:border-white/40 focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Message</label>
                  <textarea
                    className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/20 focus:border-white/40 focus:outline-none h-32"
                    placeholder="Your message..."
                  />
                </div>
                <button className="w-full px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-white/90 transition-colors">
                  Send Message
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                <div className="flex items-center text-white mb-4">
                  <MapPin className="w-6 h-6 mr-3" />
                  <h3 className="text-lg font-semibold">Visit Us</h3>
                </div>
                <p className="text-white/70 pl-9">
                  123 Innovation Street<br />
                  Tech City, TC 12345
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                <div className="flex items-center text-white mb-4">
                  <Phone className="w-6 h-6 mr-3" />
                  <h3 className="text-lg font-semibold">Call Us</h3>
                </div>
                <p className="text-white/70 pl-9">
                  +1 (555) 123-4567<br />
                  Mon-Fri, 9am-6pm
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                <div className="flex items-center text-white mb-4">
                  <Mail className="w-6 h-6 mr-3" />
                  <h3 className="text-lg font-semibold">Email Us</h3>
                </div>
                <p className="text-white/70 pl-9">
                  hello@kokonut.com<br />
                  support@kokonut.com
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}