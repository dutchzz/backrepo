"use client";

const PRODUCTS = [
  { name: "Lower Receiver Frame", price: "$12", category: "Standard" },
  { name: "Trigger Group", price: "$9", category: "Premium" },
];

export default function RetroTerminalBlue() {
  const phosphorBlue = "#00FFFF";
  const darkBg = "#000B1F";
  const scanColor = "rgba(0,255,255,0.08)";

  return (
    <div style={{ minHeight: "100vh", background: darkBg, color: phosphorBlue, fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace", fontSize: "14px", backgroundImage: `linear-gradient(0deg, ${scanColor} 0%, ${scanColor} 1px, transparent 1px, transparent 3px), linear-gradient(90deg, ${scanColor} 0%, ${scanColor} 1px, transparent 1px, transparent 3px)`, backgroundSize: "20px 20px" }}>
      <header style={{ borderBottom: "2px solid " + phosphorBlue + "66", background: "rgba(0,0,0,0.4)", boxShadow: "inset 0 0 20px rgba(0,255,255,0.1)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h1 style={{ fontSize: "16px", letterSpacing: "0.2em" }}>
            <span style={{ opacity: 0.7 }}>BACKREPO.TTY</span>
          </h1>
          <div style={{ display: "flex", gap: "24px", fontSize: "12px" }}>
            <span style={{ padding: "4px 12px", background: phosphorBlue + "33", borderRadius: "6px", fontWeight: 500 }}>
              [ ONLINE ]
            </span>
            <span>files: <span style={{ fontWeight: 600 }}>{PRODUCTS.length}</span></span>
          </div>
        </div>
      </header>

      <section style={{ padding: "120px 24px", background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 100%)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.4em", marginBottom: "28px", opacity: 0.7 }}>
            $ cat model_catalog/VERSION
          </div>
          <h2 style={{ fontSize: "clamp(52px, 9vw, 120px)", fontWeight: 200, lineHeight: 0.9, letterSpacing: "-0.03em", textShadow: `0 0 30px ${phosphorBlue}44` }}>
            PARAMETRIC
            <span style={{ display: "block", fontSize: "0.35em", opacity: 0.4, letterSpacing: "0.1em" }}>
              3D MODELS
            </span>
          </h2>
          <p style={{ marginTop: "36px", maxWidth: "680px", lineHeight: 1.75, color: "#666", opacity: 0.95 }}>
            Explore curated STL models. All designs include parametric variations and multi-material instructions.
          </p>
          <div style={{ marginTop: "44px", display: "inline-flex", gap: "32px", fontSize: "12px" }}>
            <span style={{ padding: "8px 16px", background: phosphorBlue + "22", borderRadius: "8px", fontWeight: 500 }}>
              [ render: cpu ]
            </span>
            <span style={{ padding: "8px 16px", background: phosphorBlue + "11", borderRadius: "8px" }}>
              [ compression: ZIP ]
            </span>
            <span style={{ padding: "8px 16px", background: phosphorBlue + "22", borderRadius: "8px" }}>
              [ licensing: CC-BY ]
            </span>
          </div>
        </div>
      </section>

      <section style={{ padding: "128px 24px", borderTop: "1px solid " + phosphorBlue + "33" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <div style={{ fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.5em", marginBottom: "32px", opacity: 0.7 }}>
            $ grep --color=always .category ./catalog/*
          </div>
          {PRODUCTS.map((p) => (
            <div key={p.name} style={{ border: "1px solid " + phosphorBlue + "44", padding: "32px", marginBottom: "16px", borderRadius: "8px", background: "rgba(0,0,0,0.25)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <span style={{ fontSize: "12px", fontWeight: 500, color: "#FFFFFF" }}>{p.category}</span>
                <span style={{ fontSize: "16px", fontWeight: 600 }}>{p.price}</span>
              </div>
              <h4 style={{ fontSize: "20px", marginTop: 0, fontWeight: 500 }}>{p.name}</h4>
              <button style={{
                marginTop: "24px",
                padding: "10px 24px",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                background: phosphorBlue,
                color: "#000",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer"
              }}>
                fetch model
              </button>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ borderTop: "1px solid " + phosphorBlue + "33", padding: "40px 24px", textAlign: "center" }}>
        <span style={{ fontSize: "11px", opacity: 0.7 }}>
          [ terminal: cyan-blue ] [ mode: 80x24 ] [ fps: 60 ]
        </span>
      </footer>
    </div>
  );
}