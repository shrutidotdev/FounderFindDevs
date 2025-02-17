import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import LoginForm from "@/app/components/forms/LoginForm";

const Login = () => {
  return (
    <div className="min-h-screen w-screen flex justify-center items-center max-w-7xl bg-black/50">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link href="/" className="flex justify-center items-center gap-2 self-center">
          <Image 
          src={"/favicon_io/android-chrome-192x192.png"}
           alt="JobBoard Logo" className="size-16"
           width={100}
           height={100}
            />
          <h1
            className={cn(
              "text-2xl font-extrabold flex justify-center items-center gap-2",
              "bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300"
            )}
          >
            Job Board
          </h1>
        </Link>
       <LoginForm />
      </div>
    </div>
  );
};

export default Login;
