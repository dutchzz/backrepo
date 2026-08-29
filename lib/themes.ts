export type Palette = {
  id: string;
  name: string;
  bg: string;
  fg: string;
  muted: string;
  line: string;
  accent: string;
};

// Colors are stored as space-separated RGB channels so Tailwind can apply
// alpha (e.g. bg-ink/90) via `rgb(var(--c-x) / <alpha-value>)`.
export const THEMES: Palette[] = [
  {
    id: "acid",
    name: "Acid",
    bg: "10 10 10",
    fg: "204 255 0",
    muted: "120 120 30",
    line: "44 44 0",
    accent: "255 0 170",
  },
  {
    id: "inferno",
    name: "Inferno",
    bg: "20 0 0",
    fg: "255 59 0",
    muted: "122 21 0",
    line: "64 12 0",
    accent: "255 208 0",
  },
  {
    id: "cyber",
    name: "Cyber",
    bg: "5 1 15",
    fg: "0 240 255",
    muted: "0 112 122",
    line: "30 12 48",
    accent: "255 0 229",
  },
  {
    id: "toxic",
    name: "Toxic",
    bg: "4 20 10",
    fg: "0 255 133",
    muted: "10 107 58",
    line: "12 46 26",
    accent: "180 0 255",
  },
  {
    id: "sunset",
    name: "Sunset",
    bg: "26 0 16",
    fg: "255 46 136",
    muted: "138 16 72",
    line: "60 12 34",
    accent: "255 179 0",
  },
  {
    id: "voltage",
    name: "Voltage",
    bg: "0 16 32",
    fg: "255 230 0",
    muted: "122 112 0",
    line: "0 44 76",
    accent: "0 102 255",
  },
];

export const DEFAULT_THEME_ID = THEMES[0].id;

export function getTheme(id: string): Palette {
  return THEMES.find((t) => t.id === id) ?? THEMES[0];
}

export function applyThemeVars(theme: Palette) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.style.setProperty("--c-bg", theme.bg);
  root.style.setProperty("--c-fg", theme.fg);
  root.style.setProperty("--c-muted", theme.muted);
  root.style.setProperty("--c-line", theme.line);
  root.style.setProperty("--c-accent", theme.accent);
}
