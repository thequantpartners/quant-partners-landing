import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        bg: {
          base: "#080c16",
          surface: "#0d1220",
          elevated: "#121929",
        },
        accent: {
          gold: "#c9a84c",
          "gold-bright": "#e2c46e",
          "gold-dim": "#a08535",
          "gold-glow": "rgba(201,168,76,0.15)",
          "gold-subtle": "rgba(201,168,76,0.08)",
        },
        navy: {
          DEFAULT: "#080c16",
          light: "#0d1220",
          border: "rgba(201,168,76,0.12)",
        },
        border: {
          subtle: "rgba(255,255,255,0.05)",
          default: "rgba(255,255,255,0.08)",
          gold: "rgba(201,168,76,0.20)",
          "gold-strong": "rgba(201,168,76,0.35)",
        },
      },
      borderRadius: {
        pill: "9999px",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        "glow-gold": "0 0 40px rgba(201,168,76,0.20), 0 0 80px rgba(201,168,76,0.08)",
        "glow-gold-sm": "0 0 20px rgba(201,168,76,0.18)",
        "glow-gold-lg": "0 0 60px rgba(201,168,76,0.30), 0 0 120px rgba(201,168,76,0.12)",
        glass: "inset 0 1px 0 rgba(255,255,255,0.06), 0 8px 32px rgba(0,0,0,0.5)",
      },
      backgroundImage: {
        "mesh-navy":
          "radial-gradient(ellipse 80% 50% at 20% 20%, rgba(201,168,76,0.06) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(201,168,76,0.04) 0%, transparent 60%)",
        "gold-radial": "radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)",
        "gold-linear": "linear-gradient(135deg, #c9a84c 0%, #e2c46e 50%, #a08535 100%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
        float: "float 6s ease-in-out infinite",
        "shimmer": "shimmer 3s linear infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-18px) rotate(1.5deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
