"use client";

import { useCart } from "./CartProvider";
import { useSiteSettings } from "./SiteSettingsProvider";

export function SiteHeader() {
  const { items, open } = useCart();
  const { settings } = useSiteSettings();

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <a href="#top" className="br-wordmark text-lg tracking-tight text-brand-lime">
          {settings.brand}
        </a>
        <nav className="flex items-center gap-6 text-xs uppercase tracking-widest text-muted">
          <a href="#files" className="transition hover:text-brand-lime">
            Files
          </a>
          <a href="/legal/disclaimer" className="transition hover:text-brand-lime">
            Legal
          </a>
          <button
            onClick={open}
            className="flex items-center gap-2 text-paper transition hover:text-brand-lime"
          >
            Cart
            <span className="br-mono rounded-full bg-brand-lime px-2 py-0.5 text-[10px] font-bold text-brand-ink">
              {items.length}
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
}
