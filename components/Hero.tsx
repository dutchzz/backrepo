"use client";

import { useEffect, useState } from "react";
import { useSiteSettings } from "./SiteSettingsProvider";

export function Hero() {
  const { settings } = useSiteSettings();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      aria-label="Intro"
      className={`fixed inset-0 z-40 flex items-center justify-center bg-ink transition-opacity duration-700 ${
        hidden ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <h1 className="animate-rise px-4 text-center text-[18vw] font-extrabold leading-[0.9] tracking-tightest text-paper md:text-[16rem]">
        {settings.brand.toUpperCase()}
      </h1>
    </section>
  );
}
