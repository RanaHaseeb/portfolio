import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0a0e16",
          900: "#070a11",
          800: "#0d1220",
          700: "#111725",
          600: "#161f31",
          500: "#1e2942",
        },
        cobalt: {
          DEFAULT: "#4a80ff",
          light: "#7fb0ff",
          dark: "#3a6ae0",
        },
        content: {
          DEFAULT: "#e8ecf4",
          secondary: "#aab4c8",
          muted: "#828ca3",
          faint: "#5b647a",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "1120px",
      },
      borderColor: {
        DEFAULT: "rgba(255,255,255,0.08)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease forwards",
        float: "float 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
