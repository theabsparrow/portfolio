"use client";

import { cn } from "@/utills/tailwindMarge";
import { CSSProperties, HTMLAttributes, ReactNode } from "react";

interface AuroraBackgroundProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}
type CSSVariables = CSSProperties & {
  [key: `--${string}`]: string | number;
};

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  const auroraStyle: CSSVariables = {
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
  };
  return (
    <main>
      <div
        className={cn(
          "transition-bg relative flex h-[50vh] w-screen md:w-[50vw] flex-col items-center justify-center ",
          className,
        )}
        {...props}
      >
        <div className="absolute inset-0 " style={auroraStyle}>
          <div
            className={cn(
              `after:animate-aurora pointer-events-none absolute -inset-2.5 
       bg-[repeating-linear-gradient(60deg,red_10%,orange_15%,yellow_20%,green_25%,blue_30%,indigo_35%,violet_40%)]
       bg-size-[300%,200%]
       bg-position-[50%_50%,50%_50%]
       opacity-60 blur-[10px] invert filter will-change-transform
       after:absolute after:inset-0
       after:bg-[repeating-linear-gradient(45deg,red_0%,orange_25%,green_50%,blue_75%)]
       after:bg-size-[200%,100%]
       after:bg-fixed
       after:mix-blend-difference
       after:content-[""]
       dark:invert-0`,
              showRadialGradient &&
                `mask-[radial-gradient(ellipse_at_40%_0%,black_0%,var(--transparent)_70%)]`,
            )}
          ></div>
        </div>
        {children}
      </div>
    </main>
  );
};
