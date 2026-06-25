"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
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
}

export function PrimaryCTA({
  children,
  href,
  onClick,
  size = "md",
  className,
  icon = true,
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
    x.set((e.clientX - cx) * 0.25);
    y.set((e.clientY - cy) * 0.25);
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
      <motion.span
        className="absolute inset-0 rounded-pill bg-gradient-to-r from-[#00ff88] to-[#00d4ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-hidden
      />
    </>
  );

  const baseClass = cn(
    "group relative inline-flex items-center justify-center rounded-pill",
    "bg-gradient-to-r from-[#00ff88] to-[#00cc6a]",
    "text-[#050505] font-bold",
    "shadow-[0_0_30px_rgba(0,255,136,0.3),0_0_60px_rgba(0,255,136,0.1)]",
    "hover:shadow-[0_0_50px_rgba(0,255,136,0.5),0_0_100px_rgba(0,255,136,0.2)]",
    "transition-shadow duration-300",
    "overflow-hidden cursor-pointer",
    sizes[size],
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
