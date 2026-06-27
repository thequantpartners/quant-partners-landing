"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  index: string;
  kicker: string;
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center";
}

/**
 * Editorial research-report header: a mono index + hairline + kicker row,
 * followed by a large display headline. No boxes — built from rules and type.
 */
export function SectionHeader({
  index,
  kicker,
  children,
  className,
  align = "left",
}: SectionHeaderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      className={cn(align === "center" && "flex flex-col items-center text-center", className)}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-7"
      >
        <span className="font-mono text-[#c9a84c] text-sm font-medium tracking-[0.2em]">{index}</span>
        <span className="hairline-gold w-16" />
        <span className="mono-label text-[#c9a84c]/55">{kicker}</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="font-display text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.98] tracking-tight"
      >
        {children}
      </motion.h2>
    </div>
  );
}
