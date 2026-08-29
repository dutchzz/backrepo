"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  DEFAULT_THEME_ID,
  applyThemeVars,
  getTheme,
  type Palette,
} from "@/lib/themes";

const THEME_KEY = "br-theme";

type ThemeContextValue = {
  themeId: string;
  theme: Palette;
  setThemeId: (id: string) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeId, setThemeIdState] = useState<string>(DEFAULT_THEME_ID);

  useEffect(() => {
    const stored =
      typeof window !== "undefined"
        ? window.localStorage.getItem(THEME_KEY)
        : null;
    const id = stored || DEFAULT_THEME_ID;
    setThemeIdState(id);
    applyThemeVars(getTheme(id));
  }, []);

  const setThemeId = (id: string) => {
    setThemeIdState(id);
    applyThemeVars(getTheme(id));
    window.localStorage.setItem(THEME_KEY, id);
  };

  return (
    <ThemeContext.Provider
      value={{ themeId, theme: getTheme(themeId), setThemeId }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
