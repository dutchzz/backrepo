import { useSiteSettings } from "./SiteSettingsProvider";

export function SiteFooter() {
  const { settings } = useSiteSettings();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-content px-6 py-12">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-xl">
            <span className="br-wordmark text-xl tracking-tight text-brand-lime">
              {settings.brand}
            </span>
            <p className="mt-4 text-xs leading-relaxed text-muted">
              {settings.footerDisclaimer}
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="/legal/terms" className="br-tag text-muted hover:text-brand-lime">
              Terms of Service
            </a>
            <a href="/legal/disclaimer" className="br-tag text-muted hover:text-brand-lime">
              Legal Disclaimer
            </a>
            <a href="/legal/privacy" className="br-tag text-muted hover:text-brand-lime">
              Privacy Policy
            </a>
          </nav>
        </div>
        <p className="br-mono mt-10 text-[10px] uppercase tracking-widest text-line">
          © {new Date().getFullYear()} {settings.brand} — Digital Assets Only
        </p>
      </div>
    </footer>
  );
}
