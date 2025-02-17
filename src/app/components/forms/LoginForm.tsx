import { redirect } from 'next/navigation'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import Github from "../../../../public/Svg_Icons/Github";
import Google from "../../../../public/Svg_Icons/Google";
import { auth, signIn } from "@/lib/auth";
import SubmitButton from "../Frontend/SubmitButton";

async function LoginForm() {
  const session = await auth()
  if(session?.user) {
    return redirect("/")
  }

  return (
    <div className="flex flex-col gap-6 justify-center items-center w-full">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl ">Welcome Back</CardTitle>
          <CardDescription className="text-gray-300">
            Login with your Google or Github account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex flex-col gap-4 justify-center items-center ">
            <form
              className="w-full"
              action={async () => {
                "use server";

                await signIn("google", {
                  redirectTo: "/",
                });
              }}
            >
               <SubmitButton 
                width="w-full"
              variant="default"
              icon={<Google />}
              text="Login with Google" 
              />
            </form>

            <form
              className="w-full"
              action={async () => {
                "use server";
                await signIn("github", {
                  redirectTo: "/",
                });
              }}
            >
              <SubmitButton 
              width="w-full"
              variant="outline"
              icon={<Github />}
              text="Login with Github" 
              />
            </form>
          </div>
        </CardContent>
      </Card>

      <div>
        <h4 className="text-center text-sm text-gray-50">
          By clicking "Login with Google" or "Login with Github", you agree to
          our Terms of Service and Privacy Policy
        </h4>
      </div>
    </div>
  );
};

export default LoginForm;
