"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Logo from "../../../public/vercel.svg";
import Link from "next/link";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";


const navItems = [
  { href: "/", label: "Home" },
  { href: "/jobs", label: "Find Jobs" },
  { href: "/post-job", label: "Post Jobs" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About Us" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={cn(
      "flex w-full",
      !hasScrolled && !isOpen && "bg-gradient-to-t from-[#fa7272] via-transparent to-[#830303]/80",
      (hasScrolled || isOpen) && "bg-black"
    )}>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          hasScrolled && "bg-black shadow-lg transition-all scroll-smooth duration-300 ease-out" 
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 rounded-2xl py-5 px-5">
            <Link
              href="/"
              className={cn(
                "text-2xl font-extrabold flex justify-center items-center gap-2",
                "bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300"
              )}
            >
              <Image src="/icona.svg" alt="JobBoard Logo" width={40} height={40} />
              Job Board
            </Link>

            {/* Hamburger Menu Icon */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white font-semibold hover:text-gray-200 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>

        
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/login"
                className="text-white font-semibold hover:text-gray-200 transition-colors"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="px-4 py-2 rounded-lg bg-white text-black font-semibold hover:bg-white/90 transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden fixed inset-0 top-16 bg-black min-h-screen w-full">
              <div className="flex flex-col items-center gap-14 p-4 pt-10">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-white font-semibold hover:text-gray-200 transition-colors text-2xl"
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex flex-col items-center gap-6 w-full">
                <Link
                    href="/login"
                    className="text-white font-semibold hover:text-gray-200 transition-colors text-2xl"
                    onClick={toggleMenu}
                  >
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    className="w-full max-w-xs text-center px-4 py-2 rounded-lg bg-white text-black font-semibold hover:bg-white/90 transition-colors text-xl"
                    onClick={toggleMenu}
                  >
                    Sign Up
                  </Link>
                 
                </div>
              </div>
            </div>
          )}
          
        </div>
        
      </motion.nav>
    </div>
  );
};

export default Navbar;