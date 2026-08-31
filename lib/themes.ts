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
    id: "slate",
    name: "Slate",
    bg: "15 18 22",
    fg: "226 232 240",
    muted: "100 116 139",
    line: "51 65 85",
    accent: "99 102 241",
  },
  {
    id: "sage",
    name: "Sage",
    bg: "16 20 18",
    fg: "232 240 228",
    muted: "115 132 118",
    line: "74 95 78",
    accent: "34 197 94",
  },
  {
    id: "charcoal",
    name: "Charcoal",
    bg: "12 12 14",
    fg: "244 244 245",
    muted: "113 113 122",
    line: "63 63 70",
    accent: "249 115 22",
  },
  {
    id: "stone",
    name: "Stone",
    bg: "20 19 18",
    fg: "250 250 249",
    muted: "120 113 108",
    line: "106 97 91",
    accent: "168 85 247",
  },
  {
    id: "midnight",
    name: "Midnight",
    bg: "12 18 28",
    fg: "226 232 240",
    muted: "100 116 139",
    line: "51 65 85",
    accent: "59 130 246",
  },
  {
    id: "sand",
    name: "Sand",
    bg: "28 25 22",
    fg: "245 240 235",
    muted: "135 125 115",
    line: "115 103 91",
    accent: "217 119 6",
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