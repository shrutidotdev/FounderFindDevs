import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import GlassMorphism from "@/components/ui/GlassMorphism"; // Import your GlassMorphism component
import Navbar from "./components/Frontend/Navbar";
import Footer from "./components/Frontend/Footer";

import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // bg-gradient-to-t from-[#fa7272] via-transparent to-[#830303]/80
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#000000]`}
      >
        {/* Gradient Background */}
        <div className="absolute inset-0 " />

        {/* GlassMorphism Components */}
        <GlassMorphism
          className="left-[20%] top-[20%]"
          width={300}
          height={300}
          rotate={15}
          delay={0.2}
          gradient="from-[#d53bfa]"
        />
        <GlassMorphism
          className="right-[10%] bottom-[20%]"
          width={400}
          height={400}
          rotate={-15}
          delay={0.4}
          gradient="from-rose-400"
        />

        {/* Main Content */}
        <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
          <div className="max-w-7xl mx-auto pt-5 px-4 md:px-6 lg:px-8 w-full">
            <Navbar />
            {children}
            <Footer />
          </div>
        </div>
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}