"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, CheckCircle, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PrimaryCTA } from "@/components/ui/PrimaryCTA";

const initialState = {
  name: "",
  firm: "",
  email: "",
  phone: "",
  specialty: "",
  volume: "",
  challenge: "",
};

const specialties = ["EB-2 NIW", "O-1 (Artistas / Atletas)", "O-1 (Ciencias / Negocios)", "E-2 / L-1", "Múltiples visas"];
const volumes = ["1–3 casos/mes", "4–7 casos/mes", "8–15 casos/mes", "15+ casos/mes"];

const fieldClass =
  "w-full bg-transparent border-b border-[rgba(255,255,255,0.12)] py-3 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-[#c9a84c] transition-colors duration-200";

const labelClass = "mono-label text-[#c9a84c]/45 mb-2 block";

const checklist = [
  "Auditoría de su pipeline actual de consultas",
  "Identificación de cuánto tiempo pierde en leads no calificados",
  "Proyección de ROI con el sistema TQP",
  "Sin compromiso. Si no hay fit, se lo decimos directo.",
];

export function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <section ref={ref} id="contacto" className="relative py-28 md:py-40 px-6 overflow-hidden bg-[#0a0f1a]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-[#c9a84c]/[0.025] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-x-16 gap-y-16 items-start">
          {/* Left: Copy */}
          <div className="lg:col-span-6">
            <SectionHeader index="05" kicker="Dar el primer paso">
              <span className="text-white">Si cierra un solo caso</span>{" "}
              <span className="text-white/25">extra este mes,</span>{" "}
              <span className="text-gradient-gold">el sistema se pagó solo.</span>
            </SectionHeader>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-white/40 text-lg leading-relaxed mt-8 mb-12 max-w-xl"
            >
              En esta llamada de 20 minutos auditamos su situación actual. Si no identificamos una
              oportunidad clara para mejorar su pipeline, se lo decimos directamente. No hay pitch si
              no hay fit.
            </motion.p>

            {/* Checklist — hairline rows */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mb-12"
            >
              {checklist.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 py-4 border-t border-[rgba(255,255,255,0.07)]"
                >
                  <span className="font-mono text-[#c9a84c]/40 text-xs pt-0.5 w-5 shrink-0">
                    0{i + 1}
                  </span>
                  <span className="text-white/50 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </motion.div>

            {/* Guarantee — editorial, no box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="border-l-2 border-[rgba(201,168,76,0.4)] pl-6 mb-10"
            >
              <p className="mono-label text-[#c9a84c]/55 mb-3">
                Nuestra posición en riesgo, no la suya
              </p>
              <p className="text-white/55 text-base leading-relaxed">
                Si al finalizar el mes 1 no generamos al menos 3 prospectos calificados que hayan
                agendado consulta, no cobramos la mensualidad hasta que lo logremos.
              </p>
            </motion.div>

            {/* Calendly link */}
            <motion.a
              href="https://calendly.com/thequantpartners"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="group inline-flex items-center gap-2 text-[#c9a84c] hover:text-[#e2c46e] transition-colors duration-200 text-sm font-medium mb-10"
            >
              ¿Prefiere agendar directo? calendly.com/thequantpartners
              <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </motion.a>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="text-white/20 text-xs leading-relaxed max-w-md"
            >
              The Quant Partners trabaja con un número limitado de firmas por región geográfica y
              especialidad para evitar conflictos de nicho. Si su mercado ya está cubierto, se lo
              notificamos en la llamada.
            </motion.p>
          </div>

          {/* Right: Form — underline inputs, no card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-6 lg:pl-12 lg:border-l lg:border-[rgba(201,168,76,0.14)]"
          >
            {submitted ? (
              <div className="flex flex-col items-start justify-center gap-6 min-h-[400px]">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <CheckCircle size={56} className="text-[#c9a84c]" />
                </motion.div>
                <div>
                  <h3 className="font-display text-4xl font-bold text-white mb-3">Recibido.</h3>
                  <p className="text-white/45 text-base leading-relaxed max-w-sm">
                    Le contactamos en menos de 24 horas para confirmar su auditoría. Revise su bandeja
                    de entrada.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className={labelClass}>Nombre *</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Su nombre"
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Firma *</label>
                    <input
                      name="firm"
                      value={form.firm}
                      onChange={handleChange}
                      required
                      placeholder="Nombre legal"
                      className={fieldClass}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Email *</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="su@firma.com"
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>WhatsApp / Teléfono</label>
                  <input
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className={fieldClass}
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className={labelClass}>Especialidad</label>
                    <select
                      name="specialty"
                      value={form.specialty}
                      onChange={handleChange}
                      className={fieldClass + " appearance-none"}
                    >
                      <option value="" className="bg-[#0d1220]">Seleccionar</option>
                      {specialties.map((s) => (
                        <option key={s} value={s} className="bg-[#0d1220]">{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Casos / mes</label>
                    <select
                      name="volume"
                      value={form.volume}
                      onChange={handleChange}
                      className={fieldClass + " appearance-none"}
                    >
                      <option value="" className="bg-[#0d1220]">Seleccionar</option>
                      {volumes.map((v) => (
                        <option key={v} value={v} className="bg-[#0d1220]">{v}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className={labelClass}>¿Cuál es su mayor desafío de crecimiento?</label>
                  <textarea
                    name="challenge"
                    value={form.challenge}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Ej: Demasiado tiempo en consultas que no cierran..."
                    className={fieldClass + " resize-none"}
                  />
                </div>

                <div className="pt-4">
                  <PrimaryCTA size="lg" className="w-full justify-center" icon={false}>
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <motion.span
                          className="w-4 h-4 rounded-full border-2 border-[#080c16] border-t-transparent"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }}
                        />
                        Enviando...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send size={16} />
                        Solicitar Auditoría Gratuita de 20 Min
                      </span>
                    )}
                  </PrimaryCTA>
                </div>

                <p className="text-white/20 text-xs text-center leading-relaxed">
                  Sin compromiso. Sin contratos de 12 meses. Sin promesas vacías.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
