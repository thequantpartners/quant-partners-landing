"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { X, Check } from "lucide-react";

const problems = [
  "Tu web es una tarjeta de presentación digital. Nadie la visita.",
  "Gastás en ads sin sistema de conversión. Tirás plata.",
  "Tu competencia responde en minutos con IA. Vos respondés mañana.",
  "La agencia te vende métricas, no clientes ni facturación.",
];

const solutions = [
  "Sistema de adquisición automatizado que trabaja 24/7.",
  "Cada peso en ads entra a un embudo de conversión medido.",
  "Widget IA propietario cierra en tiempo real, a las 3am si hace falta.",
  "Solo medimos lo que importa: leads calificados y revenue.",
];

export function ProblemSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="el-problema" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c9a84c]/[0.02] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-24">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[#c9a84c]/50 text-sm font-medium tracking-widest uppercase mb-6"
          >
            El problema real
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl xl:text-7xl font-black leading-[0.95] tracking-tight"
          >
            <span className="text-white/20">Las webs</span>
            <br />
            <span className="text-white">tradicionales</span>
            <br />
            <span className="text-white/20">están</span>
            <br />
            <span className="text-white">muertas.</span>
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-0 border border-[rgba(201,168,76,0.10)] rounded-3xl overflow-hidden">
          {/* Problems */}
          <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-[rgba(201,168,76,0.08)]">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                <X size={14} className="text-red-400" />
              </div>
              <span className="text-red-400/50 text-sm font-medium tracking-wider uppercase">
                La agencia tradicional
              </span>
            </div>
            <ul className="space-y-6">
              {problems.map((p, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex gap-4 items-start group"
                >
                  <X size={16} className="text-red-400/30 mt-0.5 shrink-0" />
                  <span className="text-white/35 text-base leading-snug group-hover:text-white/55 transition-colors duration-200">
                    {p}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="p-8 md:p-12 bg-[rgba(201,168,76,0.02)]">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-full bg-[rgba(201,168,76,0.10)] border border-[rgba(201,168,76,0.20)] flex items-center justify-center">
                <Check size={14} className="text-[#c9a84c]" />
              </div>
              <span className="text-[#c9a84c]/50 text-sm font-medium tracking-wider uppercase">
                The Quant Partners
              </span>
            </div>
            <ul className="space-y-6">
              {solutions.map((s, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="flex gap-4 items-start group"
                >
                  <Check size={16} className="text-[#c9a84c] mt-0.5 shrink-0" />
                  <span className="text-white/60 text-base leading-snug group-hover:text-white transition-colors duration-200">
                    {s}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bold stat */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-white/20 text-sm uppercase tracking-widest mb-4">El dato que duele</p>
          <p className="text-4xl md:text-5xl font-black">
            <span className="text-white">El </span>
            <span className="text-gradient-gold">96%</span>
            <span className="text-white"> de los visitantes</span>
          </p>
          <p className="text-4xl md:text-5xl font-black text-white/20 mt-1">
            se van sin convertir.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
