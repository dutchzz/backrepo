"use client";

import { useState } from "react";
import RetroTerminalAmber from "@/design-options/03a-retro-terminal-amber";
import RetroTerminalPhosphor from "@/design-options/03b-retro-terminal-phosphor";
import RetroTerminalMono from "@/design-options/03c-retro-terminal-mono";
import RetroTerminalBlue from "@/design-options/03d-retro-terminal-blue";
import RetroTerminalCRT from "@/design-options/03e-retro-terminal-crt";

const OPTIONS = [
  { id: "amber", label: "Amber Glow", component: RetroTerminalAmber },
  { id: "phosphor", label: "Phosphor Green", component: RetroTerminalPhosphor },
  { id: "mono", label: "Monochrome Green", component: RetroTerminalMono },
  { id: "blue", label: "Cyan-Blue", component: RetroTerminalBlue },
  { id: "crt", label: "CRT Curved", component: RetroTerminalCRT },
] as const;

type OptionId = (typeof OPTIONS)[number]["id"];

export default function PreviewPage() {
  const [selected, setSelected] = useState<OptionId>("amber");
  const Active = OPTIONS.find((o) => o.id === selected)!.component;

  return (
    <div style={{ minHeight: "100vh", background: "#0b0d12", color: "#fff" }}>
      <div style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        background: "rgba(11,13,18,0.95)",
        backdropFilter: "blur(8px)"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <div>
            <h1 style={{ fontSize: "14px", fontWeight: 600, letterSpacing: "0.05em" }}>
              Retro Terminal Variations
            </h1>
            <p style={{ fontSize: "11px", opacity: 0.6, marginTop: "4px" }}>
              Five distinct color schemes and rendering styles
            </p>
          </div>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {OPTIONS.map((o) => (
              <button
                key={o.id}
                onClick={() => setSelected(o.id)}
                style={{
                  padding: "6px 14px",
                  fontSize: "11px",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  borderRadius: "9999px",
                  border: "1px solid rgba(255,255,255,0.2)",
                  background: selected === o.id ? "rgba(255,255,255,0.1)" : "transparent",
                  color: selected === o.id ? "#fff" : "rgba(255,255,255,0.7)",
                  cursor: "pointer",
                  transition: "background 0.15s, color 0.15s"
                }}
              >
                {o.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Active />
      </div>
    </div>
  );
}