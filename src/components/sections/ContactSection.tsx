"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, CheckCircle, Calendar } from "lucide-react";
import { PrimaryCTA } from "@/components/ui/PrimaryCTA";

const initialState = {
  name: "",
  business: "",
  email: "",
  phone: "",
  budget: "",
  goal: "",
};

const budgets = ["< $500/mes", "$500 - $2k/mes", "$2k - $5k/mes", "$5k+/mes"];

const inputClass =
  "w-full bg-white/[0.03] border border-[rgba(201,168,76,0.12)] rounded-xl px-4 py-3 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-[rgba(201,168,76,0.40)] focus:bg-[rgba(201,168,76,0.04)] transition-all duration-200";

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
    <section ref={ref} id="contacto" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-[#c9a84c]/[0.025] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Copy */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="text-[#c9a84c]/50 text-sm font-medium tracking-widest uppercase mb-6"
            >
              Empezá hoy
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-6xl font-black leading-[0.95] tracking-tight mb-8"
            >
              <span className="text-white">Auditá tu</span>
              <br />
              <span className="text-gradient-gold">sistema</span>
              <br />
              <span className="text-white">de adquisición.</span>
              <br />
              <span className="text-white/25">Gratis.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="space-y-4"
            >
              {[
                "Análisis de tu embudo actual",
                "Oportunidades de mejora identificadas",
                "Proyección de ROI con nuestro sistema",
                "Sin compromiso, sin presión",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-[#c9a84c] shrink-0" />
                  <span className="text-white/50 text-sm">{item}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-10 p-6 rounded-2xl border border-[rgba(201,168,76,0.10)] bg-[rgba(201,168,76,0.02)]"
            >
              <div className="flex items-center gap-3 mb-3">
                <Calendar size={16} className="text-[#c9a84c]" />
                <span className="text-white/50 text-sm font-medium">¿Preferís agendar directo?</span>
              </div>
              <a
                href="https://calendly.com/thequantpartners"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c9a84c] text-sm hover:text-[#e2c46e] transition-colors duration-200 underline underline-offset-4"
              >
                calendly.com/thequantpartners →
              </a>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            {submitted ? (
              <div className="p-12 rounded-3xl border border-[rgba(201,168,76,0.20)] bg-[rgba(201,168,76,0.04)] flex flex-col items-center justify-center text-center gap-6 min-h-[400px]">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <CheckCircle size={64} className="text-[#c9a84c]" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-black text-white mb-2">¡Recibido!</h3>
                  <p className="text-white/40 text-sm">
                    Te contactamos en menos de 24hs con tu auditoría personalizada.
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 md:p-10 rounded-3xl border border-[rgba(201,168,76,0.12)] bg-[rgba(201,168,76,0.02)] backdrop-blur-xl space-y-5"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-[#c9a84c]/40 uppercase tracking-wider mb-2 block">Nombre *</label>
                    <input name="name" value={form.name} onChange={handleChange} required placeholder="Tu nombre" className={inputClass} />
                  </div>
                  <div>
                    <label className="text-xs text-[#c9a84c]/40 uppercase tracking-wider mb-2 block">Negocio *</label>
                    <input name="business" value={form.business} onChange={handleChange} required placeholder="Tu empresa" className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-[#c9a84c]/40 uppercase tracking-wider mb-2 block">Email *</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="tu@email.com" className={inputClass} />
                </div>

                <div>
                  <label className="text-xs text-[#c9a84c]/40 uppercase tracking-wider mb-2 block">WhatsApp</label>
                  <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+51 999 000 000" className={inputClass} />
                </div>

                <div>
                  <label className="text-xs text-[#c9a84c]/40 uppercase tracking-wider mb-2 block">Presupuesto mensual en ads</label>
                  <select name="budget" value={form.budget} onChange={handleChange} className={inputClass + " appearance-none"}>
                    <option value="" className="bg-[#0d1220]">Seleccioná rango</option>
                    {budgets.map((b) => <option key={b} value={b} className="bg-[#0d1220]">{b}</option>)}
                  </select>
                </div>

                <div>
                  <label className="text-xs text-[#c9a84c]/40 uppercase tracking-wider mb-2 block">¿Cuál es tu mayor reto de crecimiento?</label>
                  <textarea name="goal" value={form.goal} onChange={handleChange} rows={3} placeholder="Tenemos tráfico pero no convertimos..." className={inputClass + " resize-none"} />
                </div>

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
                      Solicitar Auditoría Gratuita
                    </span>
                  )}
                </PrimaryCTA>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
