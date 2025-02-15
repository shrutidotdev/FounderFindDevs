import { Button } from "@/components/ui/button";
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

const LoginForm = () => {
  return (
    <div className="flex flex-col gap-6 ">
      <Card className="">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl ">Welcome Back</CardTitle>
          <CardDescription>
            Login with your Google or Github account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex flex-col gap-4 justify-center items-center ">
            <form className="w-full">
              <Button className="w-full">
                <Google />
                Login with Google
              </Button>
            </form>

            <form className="w-full">
              <Button className="w-full">
                <Github />
                Login with Github
              </Button>
            </form>
          </div>
        </CardContent>
      </Card>

      <div>
        <h4 className="text-center text-sm text-gray-500">By clicking "Login with Google" or "Login with Github", you agree to our Terms of Service and Privacy Policy</h4>
      </div>
    </div>
  );
};

export default LoginForm;
