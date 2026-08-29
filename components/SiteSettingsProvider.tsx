"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type SiteSettings = {
  brand: string;
  heroTitle: string;
  heroSubtitle: string;
  footerDisclaimer: string;
};

export const DEFAULTS: SiteSettings = {
  brand: "Back Repo",
  heroTitle: "Digital STL files for\n3D-printed components.",
  heroSubtitle:
    "A clean catalog of downloadable design geometry. Digital assets only — nothing physical is sold or shipped. Checkout via Cash App.",
  footerDisclaimer:
    "Back Repo distributes digital design files (.stl) only. No firearms, receivers, frames, or physical components are sold or shipped. Buyers are solely responsible for compliance with all applicable laws in their jurisdiction. Files are provided “as-is” for lawful, personal use by verified adults (18+).",
};

const SETTINGS_KEY = "br-settings";

type SettingsContextValue = {
  settings: SiteSettings;
  update: (patch: Partial<SiteSettings>) => void;
  reset: () => void;
};

const SettingsContext = createContext<SettingsContextValue | null>(null);

function load(): SiteSettings {
  if (typeof window === "undefined") return DEFAULTS;
  try {
    const raw = window.localStorage.getItem(SETTINGS_KEY);
    if (!raw) return DEFAULTS;
    return { ...DEFAULTS, ...JSON.parse(raw) };
  } catch {
    return DEFAULTS;
  }
}

export function SiteSettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<SiteSettings>(DEFAULTS);

  useEffect(() => {
    setSettings(load());
  }, []);

  const update = (patch: Partial<SiteSettings>) => {
    setSettings((prev) => {
      const next = { ...prev, ...patch };
      window.localStorage.setItem(SETTINGS_KEY, JSON.stringify(next));
      return next;
    });
  };

  const reset = () => {
    setSettings(DEFAULTS);
    window.localStorage.setItem(SETTINGS_KEY, JSON.stringify(DEFAULTS));
  };

  return (
    <SettingsContext.Provider value={{ settings, update, reset }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSiteSettings() {
  const ctx = useContext(SettingsContext);
  if (!ctx)
    throw new Error("useSiteSettings must be used within SiteSettingsProvider");
  return ctx;
}
