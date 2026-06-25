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
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 18);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 18);
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="relative w-full h-[500px] flex items-center justify-center"
      style={{ x: springX, y: springY }}
    >
      {/* Outer rings */}
      <motion.div
        className="absolute w-[420px] h-[420px] rounded-full border border-[#c9a84c]/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-[320px] h-[320px] rounded-full border border-[#c9a84c]/08"
        animate={{ rotate: -360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-[220px] h-[220px] rounded-full border border-[#c9a84c]/15"
        animate={{ rotate: 360 }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      />

      {/* Central orb — shield-like premium */}
      <motion.div
        className="relative w-44 h-44 rounded-full"
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#c9a84c]/20 via-[#0d1220] to-[#a08535]/10 backdrop-blur-xl border border-[#c9a84c]/25"
          style={{ boxShadow: "0 0 60px rgba(201,168,76,0.18), inset 0 1px 0 rgba(201,168,76,0.2)" }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-gradient-gold font-black text-4xl leading-none">TQ</div>
            <div className="text-[#c9a84c]/40 text-[9px] mt-1 tracking-[0.3em] uppercase">Partners</div>
          </div>
        </div>
        {/* Gold glow */}
        <div className="absolute inset-0 rounded-full bg-[#c9a84c]/04 blur-2xl scale-150" />
      </motion.div>

      {/* Orbiting nodes */}
      {[
        { icon: <Zap size={14} />, label: "Ads", angle: 0, r: 158 },
        { icon: <TrendingUp size={14} />, label: "Web", angle: 120, r: 158 },
        { icon: <Users size={14} />, label: "IA", angle: 240, r: 158 },
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
            transition={{ duration: 2.5, delay: i * 0.8, repeat: Infinity }}
          >
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center backdrop-blur-xl"
              style={{
                background: "rgba(201,168,76,0.08)",
                border: "1px solid rgba(201,168,76,0.25)",
                color: "#c9a84c",
                boxShadow: "0 0 20px rgba(201,168,76,0.12)",
              }}
            >
              {node.icon}
            </div>
            <span className="text-[10px] text-[#c9a84c]/50 tracking-wider">{node.label}</span>
          </motion.div>
        );
      })}

      {/* Connecting lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: "none" }}>
        <defs>
          <radialGradient id="lineGradGold" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#c9a84c" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#c9a84c" stopOpacity="0" />
          </radialGradient>
        </defs>
        {[0, 120, 240].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = 210, cy = 250;
          const r = 158;
          return (
            <motion.line
              key={i}
              x1={cx} y1={cy}
              x2={cx + Math.cos(rad) * r}
              y2={cy + Math.sin(rad) * r}
              stroke="url(#lineGradGold)"
              strokeWidth="1"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.15, 0.5, 0.15] }}
              transition={{ duration: 3, delay: i * 0.6, repeat: Infinity }}
            />
          );
        })}
      </svg>
    </motion.div>
  );
}

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], ["0%", "20%"]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden pt-40 pb-16 px-6"
    >
      {/* Background mesh */}
      <div className="absolute inset-0 mesh-animated pointer-events-none" />
      {/* Bottom fade to next section */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#080c16] pointer-events-none" />

      {/* Gold radial glow behind orb */}
      <motion.div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 9, repeat: Infinity }}
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
            <Pill variant="gold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
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
              <span className="text-gradient-gold-shimmer">Construimos</span>
              <br />
              <span className="text-white">máquinas de</span>
              <br />
              <span className="text-white/30">adquisición.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-white/45 text-lg leading-relaxed max-w-md"
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
              className="flex items-center gap-2 text-white/40 hover:text-[#c9a84c] transition-colors duration-200 py-5 text-sm font-medium"
            >
              Ver cómo funciona
              <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap gap-8 pt-2 border-t border-[rgba(201,168,76,0.10)]"
          >
            {metrics.map((m) => (
              <div key={m.label} className="flex flex-col gap-0.5 pt-4">
                <span className="text-2xl font-black text-gradient-gold">{m.value}</span>
                <span className="text-xs text-white/25 leading-tight max-w-[100px]">{m.sub}</span>
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
        transition={{ duration: 2.2, repeat: Infinity }}
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#c9a84c]/30" />
        <span className="text-[10px] text-white/20 tracking-widest uppercase">Scroll</span>
      </motion.div>
    </section>
  );
}
