"use client"

import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-red-100/10 bg-black/50 backdrop-blur-lg mt-20">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-bold text-red-300 mb-4">Kokonut</h3>
            <p className="text-red-100/70 mb-4">
              Crafting exceptional digital experiences through innovative design and cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-red-100/70 hover:text-red-100 transition-colors">
                Twitter
              </a>
              <a href="#" className="text-red-100/70 hover:text-red-100 transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-red-100/70 hover:text-red-100 transition-colors">
                GitHub
              </a>
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
                <a href="#" className="text-red-100/70 hover:text-red-100 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-red-100/70 hover:text-red-100 transition-colors">
                  Support
                </a>
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
          <p>&copy; {new Date().getFullYear()} Kokonut. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}