"use client";

import { cn } from "@/lib/utils";

interface PillProps {
  children: React.ReactNode;
  className?: string;
  variant?: "gold" | "navy" | "neutral";
}

export function Pill({ children, className, variant = "gold" }: PillProps) {
  const variants = {
    gold: "bg-[rgba(201,168,76,0.08)] border-[rgba(201,168,76,0.20)] text-[#c9a84c]",
    navy: "bg-[rgba(201,168,76,0.05)] border-[rgba(201,168,76,0.12)] text-[#e2c46e]",
    neutral: "bg-white/[0.04] border-white/[0.08] text-white/50",
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
