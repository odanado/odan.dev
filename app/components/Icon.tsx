"use client";

import { FC } from "react";
import Image from "next/image";
import { useRotateCounter } from "../hooks/useRotateCounter";
import { imageLoader } from "../utils/image-loader";

const Icon: FC = () => {
  const [isRotate, increment] = useRotateCounter();

  return (
    <div className={isRotate ? "animate-spin" : ""} onClick={() => increment()}>
      <Image
        loader={imageLoader}
        src="/icon.jpeg"
        width={128}
        height={128}
        alt="My icon"
        className="rounded-full"
      />
    </div>
  );
};

export default Icon;
