"use client";
import Image from "next/image";
import { useState } from "react";

const FullImageComponent = ({ imageName }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => {
    setIsZoomed((prev) => !prev);
  };

  return (
    <div
      onClick={toggleZoom}
      className={`relative ${
        isZoomed
          ? "w-[200%] h-[200%] overflow-auto"
          : "w-full h-full overflow-hidden"
      } transition-all duration-300 w-full h-screen`}
    >
      <Image
        src={`/${imageName}.webp`}
        alt={imageName}
        fill
        className={`object-contain ${
          isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"
        }`}
      />
    </div>
  );
};

export default FullImageComponent;
