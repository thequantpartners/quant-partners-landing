"use client";

import { cn } from "@/lib/utils";

interface SurfaceProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  variant?: "glass" | "dark" | "elevated";
}

export function Surface({ children, className, glow, variant = "glass" }: SurfaceProps) {
  const variants = {
    glass: "bg-white/[0.03] backdrop-blur-xl border border-white/[0.08]",
    dark: "bg-[#0d0d0d] border border-white/[0.06]",
    elevated: "bg-white/[0.06] backdrop-blur-2xl border border-white/[0.12]",
  };

  return (
    <div
      className={cn(
        "rounded-3xl",
        variants[variant],
        glow && "shadow-[0_0_40px_rgba(0,255,136,0.08)]",
        className
      )}
    >
      {children}
    </div>
  );
}
