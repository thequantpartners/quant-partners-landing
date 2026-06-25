"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface PrimaryCTAProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: boolean;
  variant?: "gold" | "outline";
}

export function PrimaryCTA({
  children,
  href,
  onClick,
  size = "md",
  className,
  icon = true,
  variant = "gold",
}: PrimaryCTAProps) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  function handleMouseMove(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.22);
    y.set((e.clientY - cy) * 0.22);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const sizes = {
    sm: "px-6 py-3 text-sm",
    md: "px-8 py-4 text-base",
    lg: "px-10 py-5 text-lg",
  };

  const variants = {
    gold: cn(
      "bg-gradient-to-r from-[#c9a84c] via-[#e2c46e] to-[#a08535]",
      "text-[#080c16] font-bold",
      "shadow-[0_0_30px_rgba(201,168,76,0.25),0_0_60px_rgba(201,168,76,0.08)]",
      "hover:shadow-[0_0_50px_rgba(201,168,76,0.45),0_0_100px_rgba(201,168,76,0.18)]",
    ),
    outline: cn(
      "bg-transparent border border-[rgba(201,168,76,0.35)]",
      "text-[#c9a84c] font-semibold",
      "hover:bg-[rgba(201,168,76,0.06)] hover:border-[rgba(201,168,76,0.6)]",
    ),
  };

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2 font-semibold">
        {children}
        {icon && (
          <motion.span
            className="inline-flex"
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <ArrowRight size={18} />
          </motion.span>
        )}
      </span>
      {variant === "gold" && (
        <motion.span
          className="absolute inset-0 rounded-pill bg-gradient-to-r from-[#e2c46e] via-[#c9a84c] to-[#e2c46e] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-hidden
        />
      )}
    </>
  );

  const baseClass = cn(
    "group relative inline-flex items-center justify-center rounded-pill",
    "transition-all duration-300",
    "overflow-hidden cursor-pointer",
    sizes[size],
    variants[variant],
    className
  );

  if (href) {
    return (
      <motion.a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={baseClass}
        style={{ x: springX, y: springY }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileTap={{ scale: 0.97 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.Ref<HTMLButtonElement>}
      onClick={onClick}
      className={baseClass}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.97 }}
    >
      {content}
    </motion.button>
  );
}
