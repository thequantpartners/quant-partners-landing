"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PrimaryCTA } from "@/components/ui/PrimaryCTA";

const stats = [
  { value: "$6,500+", label: "Honorario EB-2 / O-1 promedio" },
  { value: "95%", label: "Leads descartados antes de llegar a usted" },
  { value: "4.3×", label: "Meses de servicio cubiertos por 1 caso" },
];

/**
 * Quant equity curve — a rising line + scatter rendered as the hero's visual idea.
 * Communicates growth/ROI trajectory without a fake dashboard.
 */
function EquityCurve() {
  return (
    <svg
      viewBox="0 0 600 400"
      fill="none"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      <defs>
        <linearGradient id="curveStroke" x1="0" y1="400" x2="600" y2="0">
          <stop offset="0%" stopColor="#a08535" stopOpacity="0.2" />
          <stop offset="55%" stopColor="#c9a84c" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#e2c46e" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="curveFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c9a84c" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#c9a84c" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Area under the curve */}
      <motion.path
        d="M0,360 C120,350 180,300 260,280 C340,260 380,200 440,150 C500,100 540,70 600,40 L600,400 L0,400 Z"
        fill="url(#curveFill)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, delay: 0.5 }}
      />

      {/* The equity curve itself */}
      <motion.path
        d="M0,360 C120,350 180,300 260,280 C340,260 380,200 440,150 C500,100 540,70 600,40"
        stroke="url(#curveStroke)"
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.2, ease: "easeInOut", delay: 0.3 }}
      />

      {/* Endpoint pulse */}
      <motion.circle
        cx="600"
        cy="40"
        r="5"
        fill="#e2c46e"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 2.4 }}
      />
      <motion.circle
        cx="600"
        cy="40"
        r="5"
        fill="none"
        stroke="#e2c46e"
        strokeWidth="1.5"
        initial={{ opacity: 0.8, scale: 1 }}
        animate={{ opacity: 0, scale: 3.5 }}
        transition={{ duration: 2, repeat: Infinity, delay: 2.6 }}
      />

      {/* Scatter points sitting near the curve */}
      {[
        [90, 352], [200, 296], [300, 268], [400, 178], [500, 96],
      ].map(([cx, cy], i) => (
        <motion.circle
          key={i}
          cx={cx}
          cy={cy}
          r="2.5"
          fill="#c9a84c"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 0.4, delay: 1.4 + i * 0.12 }}
        />
      ))}
    </svg>
  );
}

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], ["0%", "12%"]);
  const opacity = useTransform(scrollY, [0, 520], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden pt-36 pb-20 px-6"
    >
      {/* Layered background: mesh + technical grid + equity curve */}
      <div className="absolute inset-0 mesh-animated pointer-events-none" />
      <div className="absolute inset-0 quant-grid pointer-events-none opacity-70" />
      <div className="absolute inset-y-0 right-0 w-full lg:w-[62%] opacity-90 pointer-events-none">
        <EquityCurve />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#080c16] via-transparent to-[#080c16] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#080c16] via-[#080c16]/40 to-transparent pointer-events-none" />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto w-full"
        style={{ y, opacity }}
      >
        {/* Mono kicker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
          <span className="mono-label text-[#c9a84c]/70">
            Sistema de pre-calificación · Firmas EB-2 / O-1
          </span>
        </motion.div>

        {/* Editorial headline — breaks the grid, mixes weight + accent */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-display font-bold tracking-tight leading-[0.95] text-[clamp(2.75rem,8vw,6.5rem)] max-w-5xl"
        >
          <span className="text-white">Su firma procesa</span>{" "}
          <span className="text-gradient-gold-shimmer">EB-2 y O-1.</span>
          <br />
          <span className="text-white/30">Nosotros filtramos</span>
          <br />
          <span className="text-white">quién merece su tiempo.</span>
        </motion.h1>

        {/* Subhead + CTA in an asymmetric two-column band */}
        <div className="mt-12 grid lg:grid-cols-12 gap-10 items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-7"
          >
            <p className="text-white/55 text-lg md:text-xl leading-relaxed max-w-xl font-light">
              Captamos solicitantes. Un sistema automático descarta a los no calificados. Los que
              pasan pagan una consulta antes de hablar con usted.{" "}
              <span className="text-white/85 font-normal">Usted cierra casos, no entrevistas.</span>
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-5 items-start sm:items-center">
              <PrimaryCTA href="#contacto" size="lg">
                Agendar auditoría de 20 min
              </PrimaryCTA>
              <a
                href="#el-sistema"
                className="group flex items-center gap-2 text-white/45 hover:text-[#c9a84c] transition-colors duration-200 text-sm font-medium"
              >
                Ver cómo funciona
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
          </motion.div>

          {/* Quant data readout — a stat line, not boxes */}
          <motion.dl
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="lg:col-span-5 lg:border-l lg:border-[rgba(201,168,76,0.14)] lg:pl-10 flex flex-col gap-5"
          >
            {stats.map((s, i) => (
              <div key={s.label} className="flex items-baseline gap-4">
                <span className="font-mono text-[10px] text-[#c9a84c]/35 w-5 shrink-0 pt-1">
                  0{i + 1}
                </span>
                <div className="flex flex-col">
                  <span className="font-display text-2xl md:text-3xl font-bold text-gradient-gold leading-none">
                    {s.value}
                  </span>
                  <span className="text-white/35 text-xs mt-1.5 leading-snug">{s.label}</span>
                </div>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mono-label text-white/20 mt-14 flex items-center gap-2"
        >
          Sin contratos de 12 meses · Sin promesas vacías · Solo casos que cierran
        </motion.p>
      </motion.div>

      {/* Scroll hint */}
      <motion.a
        href="#el-problema"
        className="absolute bottom-8 right-8 hidden md:flex items-center gap-2 text-white/25 hover:text-[#c9a84c] transition-colors duration-200"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.2, repeat: Infinity }}
      >
        <span className="mono-label">Scroll</span>
        <ArrowUpRight size={14} className="rotate-90" />
      </motion.a>
    </section>
  );
}
