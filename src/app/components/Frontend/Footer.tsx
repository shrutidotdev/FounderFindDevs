"use client"

import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="max-w-7xl relative z-10 border-t border-red-100/10 bg-black/50 backdrop-blur-lg mt-20">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <section className=" flex items-center gap-2   ">
              <Image src="/favicon_io/android-chrome-192x192.png" alt="JobBoard Logo"  width={40} height={50} />
              <h3 className="text-xl font-bold text-red-300 ">Job Board</h3>
            </section>
            <p className="text-red-100/70 mt-4">
            Creating world-class job platforms with innovative design.
            </p>
            <div className="flex space-x-4 mt-[5.5rem]">
              <Link href="#" className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 text-black font-semibold hover:opacity-90 transition-opacity">
                Twitter
              </Link>
              <Link href="#" className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 text-black font-semibold hover:opacity-90 transition-opacity">
                LinkedIn
              </Link>
              <Link href="#" className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 text-black font-semibold hover:opacity-90 transition-opacity">
                GitHub
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-red-100 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-red-100/70 hover:text-red-100 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="text-red-100/70 hover:text-red-100 transition-colors">
                  Find Jobs
                </Link>
              </li>
              <li>
                <Link href="/post-job" className="text-red-100/70 hover:text-red-100 transition-colors">
                  Post a Job
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-red-100/70 hover:text-red-100 transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-red-100 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-red-100/70 hover:text-red-100 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-red-100/70 hover:text-red-100 transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-red-100/70 hover:text-red-100 transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-red-100/70 hover:text-red-100 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-red-100 mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-red-100/70">
                <MapPin className="w-5 h-5 mr-2" />
                123 Innovation Street, Tech City
              </li>
              <li className="flex items-center text-red-100/70">
                <Phone className="w-5 h-5 mr-2" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center text-red-100/70">
                <Mail className="w-5 h-5 mr-2" />
                hello@kokonut.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-red-100/10 mt-12 pt-8 text-center text-red-100/60">
          <p>&copy; {new Date().getFullYear()} Made by Shruti👋. Some rights reserved. Fork it, tweak it, break it—just don’t blame me.

😂.</p>
        </div>
      </div>
    </footer>
  )
}