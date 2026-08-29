"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "br-age-consent";

export function AgeGate() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const consent = window.localStorage.getItem(STORAGE_KEY);
    if (!consent) setOpen(true);
  }, []);

  const confirm = () => {
    window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Age verification"
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 px-6"
    >
      <div className="max-w-md text-center">
        <h2 className="text-2xl font-extrabold tracking-tightest text-paper">
          Age Verification
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          This site distributes digital design files intended for lawful,
          personal use by adults. By entering, you confirm that you are at least
          18 years of age and that accessing or manufacturing from these files
          is legal in your jurisdiction. No physical goods are sold here.
        </p>
        <div className="mt-8 flex flex-col gap-3">
          <button
            onClick={confirm}
            className="w-full bg-paper py-3 text-sm font-bold uppercase tracking-widest text-ink transition hover:bg-muted"
          >
            I am 18 or older — Enter
          </button>
          <button
            onClick={() => (window.location.href = "https://example.com")}
            className="w-full border border-line py-3 text-sm font-bold uppercase tracking-widest text-muted transition hover:text-paper"
          >
            Leave
          </button>
        </div>
      </div>
    </div>
  );
}
