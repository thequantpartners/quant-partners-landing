"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Target, Filter, CreditCard, Handshake } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const steps = [
  {
    n: "01",
    icon: Target,
    label: "Captación",
    title: "Dirigida al solicitante correcto",
    desc: "Operamos campañas en Meta y Google hacia profesionales con posgrados, investigadores, founders con historial verificable y perfiles O-1 en nichos de alto ingreso. No leads genéricos — perfiles pre-segmentados por señal de calificación.",
  },
  {
    n: "02",
    icon: Filter,
    label: "Filtro automático",
    title: "Pre-calificación sin su intervención",
    desc: "Cada lead entra a un flujo que evalúa grado académico, años de experiencia, evidencia de impacto excepcional, tipo de visa y capacidad de pago. Si no pasan el umbral, salen del flujo. Usted no toca nada.",
  },
  {
    n: "03",
    icon: CreditCard,
    label: "Micro-compromiso",
    title: "El lead paga antes de hablar con usted",
    desc: "Los prospectos calificados pagan entre $150 y $300 para reservar su consulta inicial. Esto elimina al 95% de los curiosos: solo llegan personas con intención real. Y ese dinero es suyo.",
  },
  {
    n: "04",
    icon: Handshake,
    label: "Cierre",
    title: "Usted cierra. El sistema repite.",
    desc: "Solo conversa con prospectos que califican, demostraron intención pagando y ya recibieron onboarding. Su tasa de cierre debería superar el 60%. El sistema sigue corriendo mientras usted trabaja.",
  },
];

function Step({ step, i }: { step: (typeof steps)[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });
  const Icon = step.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="relative grid md:grid-cols-12 gap-6 md:gap-10 pl-16 md:pl-0 pb-20 md:pb-28 last:pb-0"
    >
      {/* Node on the spine */}
      <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-1 flex items-center justify-center">
        <motion.span
          className="w-3.5 h-3.5 rounded-full bg-[#c9a84c]"
          animate={isInView ? { boxShadow: ["0 0 0 0 rgba(201,168,76,0.5)", "0 0 0 10px rgba(201,168,76,0)"] } : {}}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
        />
      </div>

      {/* Left side: number + label (right-aligned on desktop) */}
      <div className="md:col-span-5 md:text-right md:pr-12">
        <span className="font-display text-5xl md:text-6xl font-bold text-stroke-gold leading-none block mb-3">
          {step.n}
        </span>
        <span className="mono-label text-[#c9a84c]/55 inline-flex items-center gap-2 md:flex-row-reverse">
          <Icon size={13} />
          {step.label}
        </span>
      </div>

      {/* Right side: content */}
      <div className="md:col-span-7 md:pl-12 md:pt-2">
        <h3 className="font-display text-2xl md:text-3xl font-semibold text-white leading-tight mb-4">
          {step.title}
        </h3>
        <p className="text-white/45 text-base leading-relaxed max-w-lg">{step.desc}</p>
      </div>
    </motion.div>
  );
}

export function SystemSection() {
  const ref = useRef<HTMLElement>(null);
  const spineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: spineRef,
    offset: ["start center", "end center"],
  });
  const spineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={ref} id="el-sistema" className="relative py-28 md:py-40 px-6 overflow-hidden bg-[#0a0f1a]">
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] translate-x-1/3 rounded-full bg-[#c9a84c]/[0.03] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-20 md:mb-28">
          <SectionHeader index="02" kicker="El sistema">
            <span className="text-white">El flujo que convierte</span>
            <br />
            <span className="text-white/25">desconocidos en</span>{" "}
            <span className="text-gradient-gold">casos de $6,000+</span>
          </SectionHeader>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/40 text-lg mt-8 max-w-xl leading-relaxed"
          >
            Cuatro pasos. Completamente automatizados hasta que el prospecto merece su atención.
          </motion.p>
        </div>

        {/* Vertical spine with animated fill */}
        <div ref={spineRef} className="relative">
          {/* Static track */}
          <div className="absolute left-[6px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-[rgba(201,168,76,0.12)]" />
          {/* Animated progress fill */}
          <motion.div
            className="absolute left-[6px] md:left-1/2 md:-translate-x-1/2 top-0 w-px origin-top bg-gradient-to-b from-[#e2c46e] via-[#c9a84c] to-[#a08535]"
            style={{ scaleY: spineScale, height: "100%" }}
          />

          {steps.map((step, i) => (
            <Step key={step.n} step={step} i={i} />
          ))}
        </div>

        {/* Result line — editorial, no box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 md:mt-24 pt-12 border-t border-[rgba(201,168,76,0.15)] flex flex-col md:flex-row md:items-end justify-between gap-10"
        >
          <p className="font-display text-3xl md:text-5xl font-bold leading-[1.05] tracking-tight max-w-2xl">
            <span className="text-white">Solo habla con personas que</span>{" "}
            <span className="text-gradient-gold">califican y ya pagaron.</span>
          </p>
          <div className="flex gap-12 shrink-0">
            <div>
              <div className="font-display text-4xl font-bold text-gradient-gold">60%+</div>
              <div className="mono-label text-white/30 mt-2">Tasa de cierre</div>
            </div>
            <div>
              <div className="font-display text-4xl font-bold text-gradient-gold">24/7</div>
              <div className="mono-label text-white/30 mt-2">Operación</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
