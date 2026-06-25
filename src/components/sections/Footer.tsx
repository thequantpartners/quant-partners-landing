"use client";

export function Footer() {
  return (
    <footer className="relative py-12 px-6 border-t border-[rgba(201,168,76,0.08)]">
      <div className="divider-gold absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#c9a84c] via-[#e2c46e] to-[#a08535] flex items-center justify-center shadow-[0_0_16px_rgba(201,168,76,0.25)]">
            <span className="text-[#080c16] font-black text-[10px]">TQ</span>
          </div>
          <span className="text-white/40 text-sm font-medium">The Quant Partners</span>
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
