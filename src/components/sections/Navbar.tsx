"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { PrimaryCTA } from "@/components/ui/PrimaryCTA";

export function Navbar() {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 80], ["rgba(5,5,5,0)", "rgba(5,5,5,0.92)"]);
  const blur = useTransform(scrollY, [0, 80], ["blur(0px)", "blur(20px)"]);
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 0.08]);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      style={{ backgroundColor: bg, backdropFilter: blur }}
    >
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-white"
        style={{ opacity: borderOpacity }}
      />
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00ff88] to-[#00d4ff] flex items-center justify-center">
            <span className="text-[#050505] font-black text-xs">TQ</span>
          </div>
          <span className="font-bold text-white tracking-tight">
            The Quant<span className="text-[#00ff88]"> Partners</span>
          </span>
        </motion.div>

        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hidden md:flex items-center gap-8"
        >
          {["El Sistema", "Ventaja", "Proceso", "Contacto"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-sm text-white/50 hover:text-white transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <PrimaryCTA href="#contacto" size="sm">
            Auditoría Gratis
          </PrimaryCTA>
        </motion.div>
      </div>
    </motion.header>
  );
}
