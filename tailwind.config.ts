import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--bg) / <alpha-value>)",
        fg: "rgb(var(--fg) / <alpha-value>)",
        card: "rgb(var(--card) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
        primary: "rgb(var(--primary) / <alpha-value>)",
        primaryFg: "rgb(var(--primary-fg) / <alpha-value>)",
        ring: "rgb(var(--ring) / <alpha-value>)",
        ink: {
          950: "#070A12",
          900: "#0B1020",
          800: "#111A2E",
          700: "#1A2642",
          600: "#2A3A61",
          500: "#41558B",
          400: "#6B7FC0",
          300: "#9BAAE0",
          200: "#C7D0F2",
          100: "#E9EDFF"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.18)",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;


