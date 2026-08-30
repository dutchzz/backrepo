import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--c-bg) / <alpha-value>)",
        paper: "rgb(var(--c-fg) / <alpha-value>)",
        muted: "rgb(var(--c-muted) / <alpha-value>)",
        line: "rgb(var(--c-line) / <alpha-value>)",
        accent: "rgb(var(--c-accent) / <alpha-value>)",
        brand: {
          lime: "rgb(var(--brand-lime) / <alpha-value>)",
          magenta: "rgb(var(--brand-magenta) / <alpha-value>)",
          cyan: "rgb(var(--brand-cyan) / <alpha-value>)",
          amber: "rgb(var(--brand-amber) / <alpha-value>)",
          ink: "rgb(var(--brand-ink) / <alpha-value>)",
          paper: "rgb(var(--brand-paper) / <alpha-value>)",
        },
        cat: {
          standard: "rgb(var(--cat-standard) / <alpha-value>)",
          premium: "rgb(var(--cat-premium) / <alpha-value>)",
          bundle: "rgb(var(--cat-bundle) / <alpha-value>)",
          free: "rgb(var(--cat-free) / <alpha-value>)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Space Grotesk", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
