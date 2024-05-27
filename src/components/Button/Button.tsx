"use client";

import classNames from "classnames";
import { forwardRef, useRef, useState } from "react";

interface ButtonProps {
  text: string;
  highlighted?: boolean;
  onPress?: () => Promise<any>;
  customClass?: string;
  showSpiner?: boolean;
  disabled?: boolean;
  reverseColors?: boolean;
}

const Button = forwardRef<HTMLDivElement, ButtonProps>(
  (
    {
      text,
      highlighted,
      onPress,
      customClass,
      showSpiner,
      disabled,
    },
    ref
  ) => {
    const [spiner, setSpiner] = useState<boolean>(false);
    const buttonPressed = useRef<boolean>();

    const handleButtonPress = async () => {
      if (showSpiner) setSpiner(true);
      await onPress?.();
      setSpiner(false);
    };

    return (
      <div
        ref={ref}
        onClick={handleButtonPress}
        className={classNames(
          {
            "inline-flex select-none items-center justify-center rounded-[15px] border border-mainRed px-[32px] py-[14px] font-bold text-[16px] leading-[24px] text-mainRed sm:w-full":
              true,
            "transition-all duration-300 hover:bg-dark-blue":
              !disabled && !spiner,
            "bg-mainRed !text-white hover:bg-darkmainRed": highlighted,
            "cursor-not-allowed": disabled,
            "cursor-pointer": !disabled,
            "sm:!px-[24px]": showSpiner,
          },
          `${customClass}`
        )}
      >
        {text}
      </div>
    );
  }
);

export default Button;
