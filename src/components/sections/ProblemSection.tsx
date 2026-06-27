"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const problems = [
  {
    n: "01",
    tag: "Tiempo facturable perdido",
    title: "La consulta que nunca debió ocurrir",
    desc: "Pasó 45 minutos explicando el estándar del EB-2 NIW a alguien con un título técnico y dos años de experiencia. Fue educado. No fue productivo. Esa hora valía $375 de su tiempo facturado, y no la recupera.",
  },
  {
    n: "02",
    tag: "Publicidad sin filtro",
    title: "Anuncios que atraen curiosos, no clientes",
    desc: "Su anuncio trae 200 clics. 180 personas no califican. 15 no tienen presupuesto. 4 agendan. 1 cierra. Eso no es marketing — es una lotería cara con una tasa de conversión de 0.5%.",
  },
  {
    n: "03",
    tag: "Escala bloqueada",
    title: "Su agenda controla el negocio, no al revés",
    desc: "Cuando su tiempo es el único cuello de botella, escalar es imposible. Cada caso nuevo exige más de usted. El límite de su firma es el límite de sus horas. Eso no es un bufete — es un autoempleo disfrazado.",
  },
];

export function ProblemSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="el-problema" className="relative py-28 md:py-40 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 w-[420px] h-[420px] -translate-x-1/3 rounded-full bg-[#c9a84c]/[0.025] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header — asymmetric, sits in the left two-thirds */}
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-20 md:mb-28">
          <SectionHeader index="01" kicker="El problema real" className="lg:col-span-8">
            <span className="text-white">Usted no tiene un</span>{" "}
            <span className="text-white/25">problema de marketing.</span>
            <br />
            <span className="text-gradient-gold">Tiene un problema de filtro.</span>
          </SectionHeader>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-4 text-white/40 text-base leading-relaxed lg:pb-2"
          >
            La mayoría de firmas no necesitan más visibilidad. Necesitan un sistema que haga el
            trabajo sucio antes de que usted abra la boca.
          </motion.p>
        </div>

        {/* Editorial numbered index — rows separated by hairlines, no boxes */}
        <div>
          {problems.map((p, i) => (
            <motion.article
              key={p.n}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
              className="group relative grid md:grid-cols-12 gap-6 md:gap-10 items-start py-10 md:py-14 border-t border-[rgba(255,255,255,0.07)] hover:border-[rgba(201,168,76,0.25)] transition-colors duration-500"
            >
              {/* Oversized outline index */}
              <div className="md:col-span-2">
                <span className="font-display text-6xl md:text-7xl font-bold text-stroke-faint group-hover:text-stroke-gold transition-all duration-500 leading-none">
                  {p.n}
                </span>
              </div>

              {/* Title */}
              <div className="md:col-span-5">
                <span className="mono-label text-[#c9a84c]/45 block mb-3">{p.tag}</span>
                <h3 className="font-display text-2xl md:text-3xl font-semibold text-white leading-tight">
                  {p.title}
                </h3>
              </div>

              {/* Description */}
              <div className="md:col-span-5 md:pt-1">
                <p className="text-white/40 text-base leading-relaxed group-hover:text-white/55 transition-colors duration-500">
                  {p.desc}
                </p>
              </div>

              {/* Hover accent that travels along the top rule */}
              <span className="absolute top-0 left-0 h-px w-0 bg-gradient-to-r from-[#c9a84c] to-transparent group-hover:w-1/3 transition-all duration-700" />
            </motion.article>
          ))}
          <div className="border-t border-[rgba(255,255,255,0.07)]" />
        </div>

        {/* Closing editorial statement — big type, no box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 max-w-4xl"
        >
          <p className="font-display text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">
            <span className="text-white">El </span>
            <span className="text-gradient-gold">95%</span>
            <span className="text-white"> de sus consultas no van a cerrar.</span>{" "}
            <span className="text-white/25">Nunca.</span>
          </p>
          <p className="text-white/35 text-lg mt-8 max-w-2xl leading-relaxed">
            Cada una le cuesta tiempo que vale entre $300 y $400 en horas facturables. El problema no
            es la cantidad de leads. Es la calidad.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
