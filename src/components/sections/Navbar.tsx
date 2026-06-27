"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { PrimaryCTA } from "@/components/ui/PrimaryCTA";

export function Navbar() {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 80], ["rgba(8,12,22,0)", "rgba(8,12,22,0.95)"]);
  const blur = useTransform(scrollY, [0, 80], ["blur(0px)", "blur(24px)"]);
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 0.12]);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      style={{ backgroundColor: bg, backdropFilter: blur }}
    >
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent"
        style={{ opacity: borderOpacity }}
      />
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center"
        >
          <Image
            src="/logo.png"
            alt="The Quant Partners"
            width={120}
            height={48}
            className="object-contain drop-shadow-[0_0_12px_rgba(201,168,76,0.25)]"
            priority
          />
        </motion.div>

        {/* Nav links */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hidden md:flex items-center gap-8"
        >
          {[
            { n: "01", label: "Problema", href: "#el-problema" },
            { n: "02", label: "Sistema", href: "#el-sistema" },
            { n: "03", label: "Finanzas", href: "#finanzas" },
            { n: "04", label: "Contacto", href: "#contacto" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group flex items-baseline gap-1.5 text-white/45 hover:text-[#c9a84c] transition-colors duration-200"
            >
              <span className="font-mono text-[10px] text-[#c9a84c]/35 group-hover:text-[#c9a84c]/70 transition-colors duration-200">
                {item.n}
              </span>
              <span className="mono-label text-[0.68rem]">{item.label}</span>
            </a>
          ))}
        </motion.nav>

        {/* CTA */}
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
