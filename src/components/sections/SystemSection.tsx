"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MousePointerClick, Globe, BotMessageSquare, TrendingUp } from "lucide-react";

const steps = [
  {
    id: "01",
    icon: <MousePointerClick size={24} />,
    title: "Tráfico Cualificado",
    sub: "Google Ads",
    desc: "Campañas ultra-segmentadas que traen compradores, no curiosos. Nuestra IA optimiza las pujas en tiempo real.",
    color: "#00ff88",
    glow: "rgba(0,255,136,0.15)",
  },
  {
    id: "02",
    icon: <Globe size={24} />,
    title: "Web de Alta Conversión",
    sub: "Sistema de Captura",
    desc: "No es un diseño bonito. Es una máquina de psicología de ventas construida sobre miles de datos de conversión.",
    color: "#00d4ff",
    glow: "rgba(0,212,255,0.15)",
  },
  {
    id: "03",
    icon: <BotMessageSquare size={24} />,
    title: "IA Conversacional",
    sub: "Widget Propietario",
    desc: "Nuestro agente IA califica, convence y agenda reuniones. Opera 24/7 con el tono exacto de tu negocio.",
    color: "#00ff88",
    glow: "rgba(0,255,136,0.15)",
  },
  {
    id: "04",
    icon: <TrendingUp size={24} />,
    title: "Clientes y Revenue",
    sub: "Resultado medible",
    desc: "Dashboard en tiempo real. Sabés exactamente cuánto invertiste y cuánto ganaste. Sin humo.",
    color: "#00d4ff",
    glow: "rgba(0,212,255,0.15)",
  },
];

export function SystemSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="el-sistema"
      className="relative py-32 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] translate-x-1/3 -translate-y-1/2 rounded-full bg-[#00ff88]/[0.03] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[#00ff88]/60 text-sm font-medium tracking-widest uppercase mb-6"
          >
            Nuestro sistema
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl font-black leading-[0.95] tracking-tight"
          >
            <span className="text-white">El flujo</span>
            <br />
            <span className="text-gradient-green">360°</span>
            <br />
            <span className="text-white">que convierte.</span>
          </motion.h2>
        </div>

        {/* Flow steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00ff88]/20 via-[#00d4ff]/20 to-[#00ff88]/20 hidden md:block" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
                className={`relative flex flex-col ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-8 md:gap-16`}
              >
                {/* Content card */}
                <div className="flex-1">
                  <div
                    className="group p-8 rounded-3xl backdrop-blur-xl border transition-all duration-300 hover:scale-[1.02]"
                    style={{
                      background: `${step.glow}`,
                      borderColor: `${step.color}20`,
                      boxShadow: `0 0 60px ${step.glow}`,
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                        style={{
                          background: `${step.color}15`,
                          border: `1px solid ${step.color}30`,
                          color: step.color,
                        }}
                      >
                        {step.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span
                            className="text-xs font-black tracking-widest"
                            style={{ color: `${step.color}60` }}
                          >
                            {step.id}
                          </span>
                          <span className="text-xs text-white/30 uppercase tracking-wider">
                            {step.sub}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                        <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center dot */}
                <div className="relative z-10 w-10 h-10 shrink-0 hidden md:flex">
                  <motion.div
                    className="w-10 h-10 rounded-full border-2 flex items-center justify-center"
                    style={{ borderColor: step.color, background: "#050505" }}
                    animate={{ boxShadow: [`0 0 0px ${step.color}00`, `0 0 20px ${step.color}60`, `0 0 0px ${step.color}00`] }}
                    transition={{ duration: 2, delay: i * 0.5, repeat: Infinity }}
                  >
                    <div className="w-3 h-3 rounded-full" style={{ background: step.color }} />
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Result callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-20 p-8 md:p-12 rounded-3xl border border-[#00ff88]/15 bg-[#00ff88]/[0.03] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88]/5 to-transparent pointer-events-none" />
          <div className="relative flex flex-col md:flex-row items-center gap-8 justify-between">
            <div>
              <p className="text-[#00ff88]/60 text-sm uppercase tracking-widest mb-2">Resultado</p>
              <p className="text-3xl md:text-4xl font-black text-white leading-tight">
                Un sistema que adquiere clientes<br />
                <span className="text-gradient-green">mientras dormís.</span>
              </p>
            </div>
            <div className="flex gap-8 shrink-0">
              <div className="text-center">
                <div className="text-3xl font-black text-gradient-green">24/7</div>
                <div className="text-xs text-white/30 mt-1 uppercase tracking-wider">Operación</div>
              </div>
              <div className="w-px bg-white/10" />
              <div className="text-center">
                <div className="text-3xl font-black text-gradient-green">∞</div>
                <div className="text-xs text-white/30 mt-1 uppercase tracking-wider">Escala</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
