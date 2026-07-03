"use client";

import { cn } from "@/lib/utills";
import React from "react";

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}) => {
  return (
    <main>
      <div
        className={cn(
          "transition-bg relative flex h-[50vh] w-[100vw] md:w-[50vw] flex-col items-center justify-center ",
          className
        )}
        {...props}
      >
        <div
          className="absolute inset-0 "
          style={{
            "--aurora":
              "repeating-linear-gradient(100deg,#3b82f6_10%,#a5b4fc_15%,#93c5fd_20%,#ddd6fe_25%,#60a5fa_30%)",

            "--dark-gradient":
              "repeating-linear-gradient(100deg,#000_0%,#000_7%,transparent_10%,transparent_12%,#000_16%)",

            "--white-gradient":
              "repeating-linear-gradient(100deg,#fff_0%,#fff_7%,transparent_10%,transparent_12%,#fff_16%)",

            "--blue-300": "#93c5fd",
            "--blue-400": "#60a5fa",
            "--blue-500": "#3b82f6",
            "--indigo-300": "#a5b4fc",
            "--violet-200": "#ddd6fe",
            "--black": "#000",
            "--white": "#fff",
            "--transparent": "transparent",
          }}
        >
          <div
            className={cn(
              `after:animate-aurora pointer-events-none absolute -inset-[10px] 
       [background-image:repeating-linear-gradient(60deg,red_10%,orange_15%,yellow_20%,green_25%,blue_30%,indigo_35%,violet_40%)]
       [background-size:300%,_200%]
       [background-position:50%_50%,50%_50%]
       opacity-60 blur-[10px] invert filter will-change-transform
       after:absolute after:inset-0
       after:[background-image:repeating-linear-gradient(45deg,red_0%,orange_25%,green_50%,blue_75%))]
       after:[background-size:200%,_100%]
       after:[background-attachment:fixed]
       after:mix-blend-difference
       after:content-[""]
       dark:invert-0`,
              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_40%_0%,black_0%,var(--transparent)_70%)]`
            )}
          ></div>
        </div>
        {children}
      </div>
    </main>
  );
};
