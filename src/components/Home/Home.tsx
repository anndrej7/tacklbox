"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Button from "../Button/Button";
import { useState } from "react";
import classNames from "classnames";

const HomeComponent = ({}) => {
  const router = useRouter();
  const [currentSlider, handleCurrentSlider] = useState(0);
  const handleSliderChange = (slider: number) => {
    handleCurrentSlider(slider);
  };

  return (
    <div className="px-[60px] mb-[96px] xs:mb-[64px] xs:!px-[16px]">
      home page
    </div>
  );
};

export default HomeComponent;
