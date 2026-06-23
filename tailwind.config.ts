import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#060911",
        panel: "#0d1320",
        panel2: "#11182a",
        gold: "#c9922a",
        "gold-bright": "#f0b347",
        blue: "#4fc3f7",
        "blue-dim": "#1d5a78",
        ink: "#e9e4d8",
        "ink-dim": "#9aa3b5",
        line: "rgba(201,146,42,0.18)",
      },
      fontFamily: {
        chakra: ["var(--font-chakra)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(0.7)" },
        },
        flicker: {
          "0%, 97%, 100%": { opacity: "0" },
          "98%": { opacity: "1" },
          "99%": { opacity: "0.3" },
        },
        blink: {
          "50%": { opacity: "0" },
        },
        pulseFlow: {
          to: { "stroke-dashoffset": "0" },
        },
        nodePulse: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        glitch1: {
          "0%": { transform: "translate(0,0)", "clip-path": "inset(10% 0 70% 0)" },
          "25%": { transform: "translate(-3px,1px)", "clip-path": "inset(60% 0 5% 0)" },
          "50%": { transform: "translate(3px,-1px)", "clip-path": "inset(20% 0 50% 0)" },
          "75%": { transform: "translate(-2px,0)", "clip-path": "inset(80% 0 2% 0)" },
          "100%": { transform: "translate(2px,1px)", "clip-path": "inset(40% 0 40% 0)" },
        },
        glitch2: {
          "0%": { transform: "translate(0,0)", "clip-path": "inset(70% 0 10% 0)" },
          "25%": { transform: "translate(3px,-1px)", "clip-path": "inset(5% 0 80% 0)" },
          "50%": { transform: "translate(-3px,1px)", "clip-path": "inset(50% 0 20% 0)" },
          "75%": { transform: "translate(2px,0)", "clip-path": "inset(15% 0 65% 0)" },
          "100%": { transform: "translate(-2px,-1px)", "clip-path": "inset(45% 0 35% 0)" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.9s ease forwards",
        "pulse-dot": "pulseDot 2s ease-in-out infinite",
        flicker: "flicker 6s infinite",
        blink: "blink 0.9s steps(1) infinite",
        "pulse-flow": "pulseFlow 4.5s linear infinite",
        "node-pulse": "nodePulse 2.6s ease-in-out infinite",
        glitch1: "glitch1 0.35s steps(2) infinite",
        glitch2: "glitch2 0.3s steps(2) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
