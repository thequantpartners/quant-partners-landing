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
        sans: ["var(--font-space-grotesk)", "var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
      },
      colors: {
        bg: {
          base: "#050505",
          surface: "#0d0d0d",
          elevated: "#141414",
        },
        accent: {
          green: "#00ff88",
          "green-dim": "#00cc6a",
          "green-glow": "rgba(0,255,136,0.15)",
          blue: "#00d4ff",
          "blue-dim": "#00aacc",
        },
        border: {
          subtle: "rgba(255,255,255,0.06)",
          default: "rgba(255,255,255,0.10)",
          strong: "rgba(255,255,255,0.18)",
        },
      },
      borderRadius: {
        pill: "9999px",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        "glow-green": "0 0 40px rgba(0,255,136,0.25), 0 0 80px rgba(0,255,136,0.10)",
        "glow-green-sm": "0 0 20px rgba(0,255,136,0.20)",
        "glow-blue": "0 0 40px rgba(0,212,255,0.20)",
        glass: "inset 0 1px 0 rgba(255,255,255,0.08), 0 8px 32px rgba(0,0,0,0.4)",
      },
      backgroundImage: {
        "mesh-1":
          "radial-gradient(ellipse 80% 50% at 20% 20%, rgba(0,255,136,0.08) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(0,212,255,0.06) 0%, transparent 60%)",
        "mesh-2":
          "radial-gradient(ellipse 60% 60% at 70% 30%, rgba(0,255,136,0.06) 0%, transparent 60%), radial-gradient(ellipse 80% 50% at 30% 70%, rgba(0,212,255,0.08) 0%, transparent 60%)",
        "green-radial": "radial-gradient(circle, rgba(0,255,136,0.15) 0%, transparent 70%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
        "float": "float 6s ease-in-out infinite",
        "mesh-shift": "meshShift 12s ease-in-out infinite alternate",
        "border-glow": "borderGlow 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(2deg)" },
        },
        meshShift: {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "100% 100%" },
        },
        borderGlow: {
          "0%,100%": { boxShadow: "0 0 20px rgba(0,255,136,0.2)" },
          "50%": { boxShadow: "0 0 40px rgba(0,255,136,0.5), 0 0 80px rgba(0,255,136,0.2)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
