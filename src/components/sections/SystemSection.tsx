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
  },
  {
    id: "02",
    icon: <Globe size={24} />,
    title: "Web de Alta Conversión",
    sub: "Sistema de Captura",
    desc: "No es un diseño bonito. Es una máquina de psicología de ventas construida sobre miles de datos de conversión.",
  },
  {
    id: "03",
    icon: <BotMessageSquare size={24} />,
    title: "IA Conversacional",
    sub: "Widget Propietario",
    desc: "Nuestro agente IA califica, convence y agenda reuniones. Opera 24/7 con el tono exacto de tu negocio.",
  },
  {
    id: "04",
    icon: <TrendingUp size={24} />,
    title: "Clientes y Revenue",
    sub: "Resultado medible",
    desc: "Dashboard en tiempo real. Sabés exactamente cuánto invertiste y cuánto ganaste. Sin humo.",
  },
];

export function SystemSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="el-sistema" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] translate-x-1/3 -translate-y-1/2 rounded-full bg-[#c9a84c]/[0.02] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[#c9a84c]/50 text-sm font-medium tracking-widest uppercase mb-6"
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
            <span className="text-gradient-gold">360°</span>
            <br />
            <span className="text-white">que convierte.</span>
          </motion.h2>
        </div>

        {/* Flow */}
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#c9a84c]/20 via-[#c9a84c]/10 to-transparent hidden md:block" />

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
                {/* Card */}
                <div className="flex-1">
                  <div
                    className="group p-8 rounded-3xl border border-[rgba(201,168,76,0.12)] bg-[rgba(201,168,76,0.03)] hover:border-[rgba(201,168,76,0.25)] hover:bg-[rgba(201,168,76,0.05)] transition-all duration-300 hover:scale-[1.02]"
                    style={{ boxShadow: "0 0 40px rgba(201,168,76,0.04)" }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-[rgba(201,168,76,0.10)] border border-[rgba(201,168,76,0.22)] text-[#c9a84c] group-hover:bg-[rgba(201,168,76,0.16)] transition-colors duration-300">
                        {step.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs font-black tracking-widest text-[#c9a84c]/40">
                            {step.id}
                          </span>
                          <span className="text-xs text-white/25 uppercase tracking-wider">
                            {step.sub}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                        <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/55 transition-colors duration-300">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center dot */}
                <div className="relative z-10 w-10 h-10 shrink-0 hidden md:flex items-center justify-center">
                  <motion.div
                    className="w-10 h-10 rounded-full border-2 border-[#c9a84c] bg-[#080c16] flex items-center justify-center"
                    animate={{
                      boxShadow: [
                        "0 0 0px rgba(201,168,76,0)",
                        "0 0 20px rgba(201,168,76,0.5)",
                        "0 0 0px rgba(201,168,76,0)",
                      ],
                    }}
                    transition={{ duration: 2.5, delay: i * 0.5, repeat: Infinity }}
                  >
                    <div className="w-3 h-3 rounded-full bg-[#c9a84c]" />
                  </motion.div>
                </div>

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
          className="mt-20 p-8 md:p-12 rounded-3xl border border-[rgba(201,168,76,0.18)] bg-[rgba(201,168,76,0.04)] relative overflow-hidden"
          style={{ boxShadow: "0 0 60px rgba(201,168,76,0.06)" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(201,168,76,0.05)] to-transparent pointer-events-none" />
          <div className="relative flex flex-col md:flex-row items-center gap-8 justify-between">
            <div>
              <p className="text-[#c9a84c]/50 text-sm uppercase tracking-widest mb-2">Resultado</p>
              <p className="text-3xl md:text-4xl font-black text-white leading-tight">
                Un sistema que adquiere clientes<br />
                <span className="text-gradient-gold">mientras dormís.</span>
              </p>
            </div>
            <div className="flex gap-8 shrink-0">
              <div className="text-center">
                <div className="text-3xl font-black text-gradient-gold">24/7</div>
                <div className="text-xs text-white/25 mt-1 uppercase tracking-wider">Operación</div>
              </div>
              <div className="w-px bg-[rgba(201,168,76,0.15)]" />
              <div className="text-center">
                <div className="text-3xl font-black text-gradient-gold">∞</div>
                <div className="text-xs text-white/25 mt-1 uppercase tracking-wider">Escala</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
