"use client";

import { Hero } from "@/components/Hero";
import { SiteHeader } from "@/components/SiteHeader";
import { ProductGrid } from "@/components/ProductGrid";
import { CartDrawer } from "@/components/CartDrawer";
import { CashAppCheckout } from "@/components/CashAppCheckout";
import { SiteFooter } from "@/components/SiteFooter";
import { useSiteSettings } from "@/components/SiteSettingsProvider";

export default function Home() {
  const { settings } = useSiteSettings();

  return (
    <div id="top">
      <Hero />
      <SiteHeader />
      <main>
        <section className="mx-auto max-w-content px-6 pt-24">
          <h1 className="whitespace-pre-line text-4xl font-extrabold leading-[0.95] tracking-tightest text-paper md:text-6xl">
            {settings.heroTitle}
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted">
            {settings.heroSubtitle}
          </p>
          <a
            href="/admin"
            className="mt-6 inline-block text-xs uppercase tracking-widest text-muted hover:text-paper"
          >
            Admin →
          </a>
        </section>
        <ProductGrid />
      </main>
      <SiteFooter />
      <CartDrawer />
      <CashAppCheckout />
    </div>
  );
}
