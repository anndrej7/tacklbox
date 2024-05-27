"use client";

import { ChangeEvent, FC, useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { z } from "zod";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface LoginDataProps {
  username: string;
  password: string;
}

interface loginProps {
  onClose?: () => void;
}

export const LoginComponent: FC<loginProps> = ({}) => {
  const router = useRouter();
  const [loginData, setLoginData] = useState<LoginDataProps>({
    username: "",
    password: "",
  });
  const handleInput = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setLoginData((loginData) => ({
      ...loginData,
      [e.target.name]: e.target.value,
    }));
  };

  const goToRegister = () => {
    router.push("/register");
  };

  // TEST PASSWORD = B70T6@oOGWzeqJMB

  const loginValidation = z.object({
    password: z.string().min(5).max(30),
    username: z.string().min(5).max(30),
  });

  function loginWithGoogle() {
    // Handle registration with Google
  }

  function loginWithFacebook() {
    // Handle registration with Facebook
  }

  return (
    <>
      <div className="bg-white m-auto max-w-[600px] rounded-[10px] pb-[24px]">
        <div className="flex justify-center">
          <div className="font-26px-ALL pt-[24px] pb-[21px] sm:font-medium">
            Great to have you back!
          </div>
        </div>
        <div className="m-auto max-w-[448px] xs:max-w-[100%] xs:pl-[24px] xs:pr-[24px] flex flex-col gap-[16px]">
          <Input
            label="Username or email"
            name="username"
            required={true}
            value={loginData.username}
            customClass="font-16px-ALL bg-lightgray"
            onChange={handleInput}
          />
          <Input
            label="Password"
            name="password"
            required={true}
            value={loginData.password}
            type="password"
            customClass="font-16px-ALL bg-lightgray"
            onChange={handleInput}
          />
          <Button
            text="SIGN IN TO YOUR ACCOUNT"
            highlighted={true}
            customClass="w-[100%] font-16px-ALL mt-[24px]"
            showSpiner
            disabled={!loginData.password || !loginData.username}
            reverseColors
          />
          <div className="font-26px-ALL text-center">or</div>
          <div className="flex justify-center">
            <div className="flex gap-4">
              <div
                className="flex items-center justify-center font-16px-ALL"
                onClick={loginWithGoogle}
              >
                <Image
                  src="/images/google.png"
                  alt="Google"
                  width={32}
                  height={32}
                />
                <div className="ml-2">Sign in with Google</div>
              </div>
              <div
                className="flex items-center justify-center font-16px-ALL"
                onClick={loginWithFacebook}
              >
                <Image
                  src="/images/facebook.png"
                  alt="Facebook"
                  width={32}
                  height={32}
                />
                <div className="ml-2">Sign in with Facebook</div>
              </div>
            </div>
          </div>
          <div className="font-D16px-ALL flex w-[100%] justify-center pt-[16px]">
            <div>
              Not a member?{" "}
              <span
                className="cursor-pointer text-mainRed"
                onClick={goToRegister}
              >
                Create an account
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
