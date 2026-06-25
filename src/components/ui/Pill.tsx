"use client";

import { cn } from "@/lib/utils";

interface PillProps {
  children: React.ReactNode;
  className?: string;
  variant?: "green" | "blue" | "neutral";
}

export function Pill({ children, className, variant = "green" }: PillProps) {
  const variants = {
    green: "bg-accent-green/10 border-accent-green/20 text-accent-green",
    blue: "bg-accent-blue/10 border-accent-blue/20 text-accent-blue",
    neutral: "bg-white/5 border-white/10 text-white/60",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-4 py-1.5 rounded-pill border text-xs font-medium tracking-widest uppercase",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
