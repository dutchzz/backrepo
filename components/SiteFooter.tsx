import { useSiteSettings } from "./SiteSettingsProvider";

export function SiteFooter() {
  const { settings } = useSiteSettings();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-content px-6 py-12">
        <p className="max-w-2xl text-xs leading-relaxed text-muted">
          {settings.footerDisclaimer}
        </p>
        <nav className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-widest text-muted">
          <a href="/legal/terms" className="hover:text-paper">
            Terms of Service
          </a>
          <a href="/legal/disclaimer" className="hover:text-paper">
            Legal Disclaimer
          </a>
          <a href="/legal/privacy" className="hover:text-paper">
            Privacy Policy
          </a>
        </nav>
        <p className="mt-8 text-[10px] uppercase tracking-widest text-line">
          © {new Date().getFullYear()} {settings.brand} — Digital Assets Only
        </p>
      </div>
    </footer>
  );
}
