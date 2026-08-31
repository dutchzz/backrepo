"use client";

import { useState } from "react";
import NeonBrutalist from "@/design-options/01-neon-brutalist";
import MinimalSwiss from "@/design-options/02-minimal-swiss";
import RetroTerminal from "@/design-options/03-retro-terminal";
import EditorialDark from "@/design-options/04-editorial-dark";
import GlassModern from "@/design-options/05-glass-modern";

const OPTIONS = [
  { id: "neon", label: "Neon Brutalist", component: NeonBrutalist },
  { id: "swiss", label: "Minimal Swiss", component: MinimalSwiss },
  { id: "terminal", label: "Retro Terminal", component: RetroTerminal },
  { id: "editorial", label: "Editorial Dark", component: EditorialDark },
  { id: "glass", label: "Glass Modern", component: GlassModern },
] as const;

type OptionId = (typeof OPTIONS)[number]["id"];

export default function PreviewPage() {
  const [selected, setSelected] = useState<OptionId>("neon");
  const Active = OPTIONS.find((o) => o.id === selected)!.component;

  return (
    <div className="min-h-screen bg-[#0b0d12] text-white">
      <div className="sticky top-0 z-40 border-b border-white/10 bg-[#0b0d12]/90 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-sm font-semibold tracking-tight">
              Site Redesign Previews
            </h1>
            <p className="text-xs text-white/60">
              Choose a direction below to preview a lightweight sample.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {OPTIONS.map((o) => (
              <button
                key={o.id}
                onClick={() => setSelected(o.id)}
                className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                  selected === o.id
                    ? "border-white bg-white/10"
                    : "border-white/20 hover:border-white/40"
                }`}
              >
                {o.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl">
        <Active />
      </div>
    </div>
  );
}
