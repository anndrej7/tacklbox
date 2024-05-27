"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Button from "../Button/Button";
import Input from "../Input/Input";

export const RegisterComponent = ({}) => {
  const router = useRouter();
  function handleInput() {}

  function goToLogin() {
    router.push("/login");
  }
  
  function registerWithGoogle() {
    // Handle registration with Google
  }
  
  function registerWithFacebook() {
    // Handle registration with Facebook
  }

  return (
    <div className="bg-white m-auto max-w-[600px] rounded-[10px] pb-[24px]">
      <div className="flex justify-center">
        <div className="font-26px-ALL pt-[24px] pb-[21px] sm:font-medium">
          Welcome! Let's get started.
        </div>
      </div>
      <div className="m-auto max-w-[448px] xs:max-w-[100%] xs:pl-[24px] xs:pr-[24px] flex flex-col gap-[16px]">
        <Input
          label="Full Name"
          type="text"
          required={true}
          customClass="font-16px-ALL bg-lightgray"
          onChange={handleInput}
        />
        <Input
          label="Username"
          type="text"
          required={true}
          customClass="font-16px-ALL bg-lightgray"
          onChange={handleInput}
        />
        <Input
          label="Email"
          type="email"
          required={true}
          customClass="font-16px-ALL bg-lightgray"
          onChange={handleInput}
        />
        <Input
          label="Password"
          type="password"
          required={true}
          customClass="font-16px-ALL bg-lightgray"
          onChange={handleInput}
        />
        <div className="pt-[24px] sm:pt-[32px]">
          <Button
            text="CREATE ACCOUNT"
            highlighted={true}
            customClass="w-[100%] font-16px-ALL"
          />
        </div>
        <div className="font-26px-ALL text-center">or</div>
        <div className="flex justify-center">
          <div className="flex gap-4">
            <div className="flex items-center justify-center font-16px-ALL" onClick={registerWithGoogle}>
              <Image src="/images/google.png" alt="Google" width={32} height={32} />
              <div className="ml-2">Register with Google</div>
            </div>
            <div className="flex items-center justify-center font-16px-ALL" onClick={registerWithFacebook}>
              <Image src="/images/facebook.png" alt="Facebook" width={32} height={32} />
              <div className="ml-2">Register with Facebook</div>
            </div>
          </div>
        </div>
        <div className="font-16px-ALL flex w-[100%] justify-center pt-[16px]">
          <div>
            Already have an account?{" "}
            <span className="cursor-pointer text-mainRed" onClick={goToLogin}>
              Sign in here
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
