"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";
import { Zap, TrendingUp, Users, ArrowRight } from "lucide-react";
import { Pill } from "@/components/ui/Pill";
import { PrimaryCTA } from "@/components/ui/PrimaryCTA";

const metrics = [
  { label: "Tasa de conversión promedio", value: "8.4%", sub: "vs 1.2% industria" },
  { label: "ROI promedio en 90 días", value: "340%", sub: "en Google Ads" },
  { label: "Clientes activos", value: "47+", sub: "en 6 países" },
];

function FloatingVisual() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  useEffect(() => {
    function onMove(e: MouseEvent) {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 20);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 20);
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="relative w-full h-[500px] flex items-center justify-center"
      style={{ x: springX, y: springY }}
    >
      {/* Outer ring */}
      <motion.div
        className="absolute w-[420px] h-[420px] rounded-full border border-[#00ff88]/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-[320px] h-[320px] rounded-full border border-[#00d4ff]/10"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Central orb */}
      <motion.div
        className="relative w-48 h-48 rounded-full"
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00ff88]/20 to-[#00d4ff]/20 backdrop-blur-xl border border-[#00ff88]/20" />
        <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#00ff88]/10 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <motion.div
              className="text-[#00ff88] font-black text-4xl"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ∞
            </motion.div>
            <div className="text-white/40 text-[10px] mt-1 tracking-widest uppercase">Sistema</div>
          </div>
        </div>
        {/* Glow */}
        <div className="absolute inset-0 rounded-full bg-[#00ff88]/5 blur-2xl scale-150" />
      </motion.div>

      {/* Orbiting nodes */}
      {[
        { icon: <Zap size={14} />, label: "Ads", angle: 0, r: 160, color: "#00ff88" },
        { icon: <TrendingUp size={14} />, label: "Web", angle: 120, r: 160, color: "#00d4ff" },
        { icon: <Users size={14} />, label: "IA", angle: 240, r: 160, color: "#00ff88" },
      ].map((node, i) => {
        const rad = (node.angle * Math.PI) / 180;
        return (
          <motion.div
            key={node.label}
            className="absolute flex flex-col items-center gap-1"
            style={{
              left: `calc(50% + ${Math.cos(rad) * node.r}px - 24px)`,
              top: `calc(50% + ${Math.sin(rad) * node.r}px - 24px)`,
            }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, delay: i * 0.7, repeat: Infinity }}
          >
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center backdrop-blur-xl border"
              style={{
                background: `${node.color}15`,
                borderColor: `${node.color}30`,
                color: node.color,
                boxShadow: `0 0 20px ${node.color}20`,
              }}
            >
              {node.icon}
            </div>
            <span className="text-[10px] text-white/50 tracking-wider">{node.label}</span>
          </motion.div>
        );
      })}

      {/* Connecting lines (SVG) */}
      <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: "none" }}>
        <defs>
          <radialGradient id="lineGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00ff88" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#00ff88" stopOpacity="0" />
          </radialGradient>
        </defs>
        {[0, 120, 240].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = 210, cy = 250;
          const r = 160;
          return (
            <motion.line
              key={i}
              x1={cx}
              y1={cy}
              x2={cx + Math.cos(rad) * r}
              y2={cy + Math.sin(rad) * r}
              stroke="url(#lineGrad)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0.2, 0.6, 0.2] }}
              transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
            />
          );
        })}
      </svg>
    </motion.div>
  );
}

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden pt-24 pb-16 px-6"
    >
      {/* Background mesh */}
      <div className="absolute inset-0 mesh-animated pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505] pointer-events-none" />

      {/* Radial glow behind orb */}
      <motion.div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,255,136,0.06) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center"
        style={{ y, opacity }}
      >
        {/* Left: Copy */}
        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Pill variant="green">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] animate-pulse" />
              Growth Partner — No una agencia tradicional
            </Pill>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-2"
          >
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-[0.95] tracking-tight">
              <span className="text-white">No hacemos</span>
              <br />
              <span className="text-white">páginas web.</span>
              <br />
              <span className="text-gradient-green">Construimos</span>
              <br />
              <span className="text-white">máquinas de</span>
              <br />
              <span className="text-white/40">adquisición.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-white/50 text-lg leading-relaxed max-w-md"
          >
            Instalamos un sistema 360° completo: web de alta conversión + IA de cierre
            propietaria + Google Ads optimizado. Solo pagás si crece tu negocio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-4 items-start"
          >
            <PrimaryCTA href="#contacto" size="lg">
              Agendar Auditoría Gratuita
            </PrimaryCTA>
            <a
              href="#el-sistema"
              className="flex items-center gap-2 text-white/50 hover:text-white transition-colors duration-200 py-5 text-sm font-medium"
            >
              Ver cómo funciona
              <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* Metrics row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap gap-6 pt-2"
          >
            {metrics.map((m) => (
              <div key={m.label} className="flex flex-col gap-0.5">
                <span className="text-2xl font-black text-gradient-green">{m.value}</span>
                <span className="text-xs text-white/30 leading-tight max-w-[100px]">{m.sub}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hidden lg:block"
        >
          <FloatingVisual />
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#00ff88]/40" />
        <span className="text-[10px] text-white/20 tracking-widest uppercase">Scroll</span>
      </motion.div>
    </section>
  );
}
