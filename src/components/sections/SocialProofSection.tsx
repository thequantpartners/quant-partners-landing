"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const testimonials = [
  {
    quote:
      "Pasamos de dar 15 consultas a la semana a dar 4. Todas con personas que ya habían pagado y que cerraron. No puedo creer cuánto tiempo perdía antes.",
    name: "[Nombre del Abogado]",
    firm: "Firma boutique EB-2 NIW — [Ciudad, Estado]",
  },
  {
    quote:
      "El filtro automático es lo que más valoramos. Nuestros clientes ideales llegan pre-educados y con disposición real. El cierre se volvió una conversación, no una negociación.",
    name: "[Nombre del Abogado]",
    firm: "Práctica O-1 y EB-2 — [Ciudad, Estado]",
  },
];

const metrics = [
  { value: "—", label: "Firmas activas en el sistema" },
  { value: "—", label: "Casos cerrados / mes por firma" },
  { value: "—%", label: "Tasa de leads que llegan a consulta" },
];

export function SocialProofSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="resultados" className="relative py-28 md:py-40 px-6 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#c9a84c]/[0.015] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-20 md:mb-28">
          <SectionHeader index="04" kicker="Resultados">
            <span className="text-white">Firmas que dejaron de</span>{" "}
            <span className="text-white/25">perder tiempo en</span>{" "}
            <span className="text-gradient-gold">consultas que no cierran.</span>
          </SectionHeader>
        </div>

        {/* Editorial pull-quotes — no boxes, hairline separated */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-16 mb-24 md:mb-32">
          {testimonials.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
              className="border-t border-[rgba(201,168,76,0.2)] pt-8"
            >
              <span className="font-display text-6xl text-[#c9a84c]/25 leading-none block mb-2">&ldquo;</span>
              <blockquote className="font-display text-2xl md:text-[1.7rem] font-medium text-white/80 leading-snug -mt-6">
                {t.quote}
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3">
                <span className="w-8 h-px bg-[#c9a84c]/40" />
                <div>
                  <p className="text-white/65 text-sm font-semibold">{t.name}</p>
                  <p className="mono-label text-white/25 mt-1.5">{t.firm}</p>
                </div>
              </figcaption>
              <p className="mono-label text-[#c9a84c]/35 mt-5">Testimonio pendiente</p>
            </motion.figure>
          ))}
        </div>

        {/* Metrics — editorial stat row, hairline divided, no box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 border-t border-[rgba(255,255,255,0.08)]"
        >
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className={`py-8 sm:px-8 ${i > 0 ? "border-t sm:border-t-0 sm:border-l border-[rgba(255,255,255,0.06)]" : ""}`}
            >
              <div className="font-display text-5xl font-bold text-gradient-gold leading-none mb-3 opacity-50">
                {m.value}
              </div>
              <div className="mono-label text-white/30 leading-snug">{m.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
