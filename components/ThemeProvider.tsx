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
import { loadResource, saveResource } from "@/lib/remoteStore";

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
    let cancelled = false;
    (async () => {
      const d = await loadResource<string>("theme");
      if (cancelled) return;
      const localId =
        typeof window !== "undefined"
          ? window.localStorage.getItem(THEME_KEY)
          : null;
      if (d.configured && d.value) {
        setThemeIdState(d.value);
        applyThemeVars(getTheme(d.value));
        window.localStorage.setItem(THEME_KEY, d.value);
      } else if (d.configured && !d.value) {
        saveResource("theme", DEFAULT_THEME_ID);
        if (localId) {
          setThemeIdState(localId);
          applyThemeVars(getTheme(localId));
        }
      } else if (localId) {
        setThemeIdState(localId);
        applyThemeVars(getTheme(localId));
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const setThemeId = (id: string) => {
    setThemeIdState(id);
    applyThemeVars(getTheme(id));
    window.localStorage.setItem(THEME_KEY, id);
    saveResource("theme", id);
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
