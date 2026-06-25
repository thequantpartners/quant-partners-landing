"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lock, Cpu, BarChart3, Shield } from "lucide-react";

const advantages = [
  {
    icon: <Cpu size={20} />,
    title: "Tecnología Propietaria",
    desc: "Nuestro stack de IA no lo tenés disponible en ningún SaaS. Lo construimos y lo mejoramos nosotros.",
    tag: "Exclusivo TQP",
  },
  {
    icon: <BarChart3 size={20} />,
    title: "Optimización Cuantitativa",
    desc: "Tomamos decisiones con datos, no con intuición. Modelamos el ROI antes de gastar un peso.",
    tag: "Data-driven",
  },
  {
    icon: <Lock size={20} />,
    title: "Sin Contratos Largos",
    desc: "Confiamos en los resultados, no en la letra chica. Mes a mes, o te vas sin costo.",
    tag: "Sin riesgo",
  },
  {
    icon: <Shield size={20} />,
    title: "Modelo de Socio",
    desc: "Ganamos cuando vos ganás. Nuestros incentivos están 100% alineados con tu crecimiento.",
    tag: "Growth Partner",
  },
];

export function AdvantageSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="ventaja" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[#00d4ff]/[0.025] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Asymmetric header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="text-[#00ff88]/60 text-sm font-medium tracking-widest uppercase mb-6"
            >
              Ventaja injusta
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-6xl font-black leading-[0.95] tracking-tight"
            >
              <span className="text-white">Por qué el</span>
              <br />
              <span className="text-gradient-green">99% de</span>
              <br />
              <span className="text-white">las agencias</span>
              <br />
              <span className="text-white/30">no pueden</span>
              <br />
              <span className="text-white">competirnos.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:max-w-[280px] p-6 rounded-3xl border border-[#00ff88]/15 bg-[#00ff88]/[0.03]"
          >
            <p className="text-white/50 text-sm leading-relaxed">
              Usamos modelos de lenguaje fine-tuneados sobre datos de conversión reales de nuestros
              clientes. El sistema aprende continuamente y se vuelve más inteligente con cada
              interacción.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
              <span className="text-[#00ff88]/60 text-xs tracking-widest uppercase">
                IA en producción
              </span>
            </div>
          </motion.div>
        </div>

        {/* Advantages grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {advantages.map((adv, i) => (
            <motion.div
              key={adv.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              className="group relative p-8 rounded-3xl border border-white/[0.06] bg-white/[0.02] hover:border-[#00ff88]/20 hover:bg-[#00ff88]/[0.03] transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 rounded-xl bg-[#00ff88]/10 border border-[#00ff88]/20 flex items-center justify-center text-[#00ff88] shrink-0 group-hover:bg-[#00ff88]/15 transition-colors duration-300">
                  {adv.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <h3 className="font-bold text-white text-lg">{adv.title}</h3>
                    <span className="text-[10px] text-[#00ff88]/50 border border-[#00ff88]/15 rounded-pill px-2 py-0.5 whitespace-nowrap">
                      {adv.tag}
                    </span>
                  </div>
                  <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/60 transition-colors duration-300">
                    {adv.desc}
                  </p>
                </div>
              </div>
              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#00ff88]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
