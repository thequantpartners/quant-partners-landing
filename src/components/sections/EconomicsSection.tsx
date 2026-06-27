"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PrimaryCTA } from "@/components/ui/PrimaryCTA";

const ledger = [
  {
    label: "Honorario promedio · caso EB-2 NIW / O-1",
    value: "$6,500",
    sign: "",
    valueClass: "text-white",
  },
  {
    label: "Mensualidad The Quant Partners",
    value: "$1,500",
    sign: "−",
    valueClass: "text-white/40",
  },
  {
    label: "Consultas cobradas · est. 4–6 / mes",
    value: "$800",
    sign: "+",
    valueClass: "text-[#c9a84c]",
  },
];

export function EconomicsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="finanzas" className="relative py-28 md:py-40 px-6 overflow-hidden bg-[#050810]">
      <div className="absolute bottom-0 right-0 w-[700px] h-[500px] translate-x-1/3 translate-y-1/4 rounded-full bg-[#c9a84c]/[0.04] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-20 md:mb-28">
          <SectionHeader index="03" kicker="La lógica financiera">
            <span className="text-white">La matemática</span>{" "}
            <span className="text-white/25">no miente.</span>
            <br />
            <span className="text-gradient-gold">El servicio se paga solo.</span>
          </SectionHeader>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/40 text-lg mt-8 max-w-xl leading-relaxed"
          >
            Antes de cualquier conversación, le pedimos que haga este ejercicio. Tómese 90 segundos.
          </motion.p>
        </div>

        {/* Editorial financial statement — hairline rows, no box */}
        <div className="grid lg:grid-cols-12 gap-x-16 gap-y-16 items-start">
          {/* Left: the ledger as a statement */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="mono-label text-[#c9a84c]/45 mb-2"
            >
              Escenario · 1 caso cerrado al mes
            </motion.div>

            <div>
              {ledger.map((row, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
                  className="flex items-baseline justify-between gap-8 py-6 border-t border-[rgba(255,255,255,0.08)]"
                >
                  <span className="text-white/45 text-sm md:text-base leading-snug max-w-xs">
                    {row.label}
                  </span>
                  <span className={`font-display font-bold text-3xl md:text-4xl shrink-0 tabular-nums ${row.valueClass}`}>
                    <span className="text-white/25">{row.sign}</span>
                    {row.value}
                  </span>
                </motion.div>
              ))}

              {/* Net result — oversized */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pt-10 mt-2 border-t-2 border-[rgba(201,168,76,0.3)]"
              >
                <div>
                  <p className="mono-label text-white/30">Ganancia neta</p>
                  <p className="text-white/45 text-sm mt-2">en el mes del primer cierre</p>
                </div>
                <p className="font-display font-bold text-gradient-gold leading-none text-[clamp(3.5rem,11vw,7rem)] tabular-nums">
                  $5,800
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mono-label text-[#c9a84c]/35 mt-6"
              >
                1 caso cubre <span className="text-[#c9a84c]/70">4.3 meses</span> de servicio completo
              </motion.p>
            </div>
          </div>

          {/* Right: ROI as editorial statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 lg:pl-12 lg:border-l lg:border-[rgba(201,168,76,0.14)] flex flex-col gap-10"
          >
            <div>
              <p className="mono-label text-[#c9a84c]/45 mb-5">ROI proyectado</p>
              <p className="font-display text-2xl md:text-3xl font-semibold text-white leading-snug">
                Con 1 caso al mes, el sistema genera{" "}
                <span className="text-gradient-gold">$4,300 de profit neto</span>{" "}
                sobre su inversión. Mes tras mes.
              </p>
              <div className="hairline-gold w-24 my-7" />
              <p className="text-white/40 text-base leading-relaxed">
                Si cierra dos casos al mes — escenario conservador para una firma establecida — el ROI
                anualizado supera el{" "}
                <span className="text-white/70 font-semibold">700%</span>.
              </p>
            </div>

            <p className="text-white/35 text-base leading-relaxed border-t border-[rgba(255,255,255,0.07)] pt-7">
              Esta no es una conversación sobre presupuesto de marketing. Es una conversación sobre{" "}
              <span className="text-white/65 font-semibold">ingeniería de pipeline</span>.
            </p>

            <PrimaryCTA href="#contacto" size="md" className="w-full justify-center">
              Ver si aplica para mi firma
            </PrimaryCTA>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
