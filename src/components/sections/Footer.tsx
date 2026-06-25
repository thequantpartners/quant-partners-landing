"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="relative py-12 px-6 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#00ff88] to-[#00d4ff] flex items-center justify-center">
            <span className="text-[#050505] font-black text-[10px]">TQ</span>
          </div>
          <span className="text-white/60 text-sm font-medium">
            The Quant Partners
          </span>
        </div>

        <p className="text-white/20 text-xs text-center">
          © {new Date().getFullYear()} The Quant Partners. Sistemas de adquisición automatizada.
        </p>

        <div className="flex items-center gap-6">
          {["Privacidad", "Términos"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-white/30 hover:text-white/60 text-xs transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
