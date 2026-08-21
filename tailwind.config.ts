import type { Config } from "tailwindcss";

/** Every colour resolves through a CSS variable so the theme toggle is a
 *  single attribute swap on <html> — no class-level dark: variants needed. */
const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: token("canvas"),
          soft: token("canvas-soft"),
        },
        surface: {
          DEFAULT: token("surface"),
          hi: token("surface-hi"),
        },
        fg: {
          DEFAULT: token("fg"),
          soft: token("fg-soft"),
          muted: token("fg-muted"),
          faint: token("fg-faint"),
        },
        accent: {
          DEFAULT: token("accent"),
          hi: token("accent-hi"),
          lo: token("accent-lo"),
          alt: token("accent-alt"),
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
        display: ["var(--font-display)", "var(--font-geist-sans)", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      borderColor: {
        DEFAULT: "var(--hairline)",
        hairline: "var(--hairline)",
        strong: "var(--hairline-strong)",
      },
      backgroundColor: {
        tint: "var(--tint)",
        "tint-hi": "var(--tint-hi)",
      },
      boxShadow: {
        card: "var(--shadow-card)",
        lift: "var(--shadow-lift)",
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
        "bob": {
          "0%,100%": { transform: "translateY(0)", opacity: "0.55" },
          "50%": { transform: "translateY(6px)", opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease forwards",
        float: "float 8s ease-in-out infinite",
        bob: "bob 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
