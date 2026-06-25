"use client";

import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative py-12 px-6 border-t border-[rgba(201,168,76,0.08)]">
      <div className="divider-gold absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="The Quant Partners"
            width={100}
            height={40}
            className="object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
          />
        </div>

        <p className="text-white/15 text-xs text-center">
          © {new Date().getFullYear()} The Quant Partners. Sistemas de adquisición automatizada.
        </p>

        <div className="flex items-center gap-6">
          {["Privacidad", "Términos"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-white/20 hover:text-[#c9a84c] text-xs transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
