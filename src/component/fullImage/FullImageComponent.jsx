"use client";
import Image from "next/image";
import { useState } from "react";

const FullImageComponent = ({ imageName }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  console.log(isZoomed);
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
      } transition-all duration-300 w-full h-screen border border-red-700`}
    >
      <Image
        src={`/${imageName}.webp`}
        alt={imageName}
        width={1600}
        height={1200}
        className={`transition-transform duration-500 object-contain ${
          isZoomed ? "scale-[2] cursor-zoom-out" : "scale-100 cursor-zoom-in"
        }`}
      />
    </div>
  );
};

export default FullImageComponent;
