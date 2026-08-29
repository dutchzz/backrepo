import type { ReactNode } from "react";

export function LegalPage({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <main className="mx-auto max-w-content px-6 py-24">
      <h1 className="text-3xl font-extrabold tracking-tightest text-paper">
        {title}
      </h1>
      <div className="mt-10 space-y-6 text-sm leading-relaxed text-muted">
        {children}
      </div>
      <p className="mt-12 text-[10px] uppercase tracking-widest text-line">
        Placeholder content — replace with reviewed legal copy before launch.
      </p>
    </main>
  );
}
