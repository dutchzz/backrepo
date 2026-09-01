"use client";

const PRODUCTS = [
  { name: "Lower Receiver Frame", price: "$12", category: "Standard" },
  { name: "Trigger Group", price: "$9", category: "Premium" },
];

export default function RetroTerminalMono() {
  const monoGreen = "#00FF00";
  const darkBg = "#000000";
  const borderGreen = "#00AA00";

  return (
    <div style={{ minHeight: "100vh", background: darkBg, color: monoGreen, fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace", fontSize: "12px" }}>
      <div style={{ position: "fixed", inset: "0", background: `linear-gradient(rgba(0,0,0,0) 50%, rgba(0,0,0,0.1) 50%), linear-gradient(90deg, rgba(0,0,0,0) 50%, rgba(0,255,0,0.04) 50%)`, backgroundSize: "20px 20px", zIndex: "0" }} />

      <header style={{ borderBottom: "1px solid " + borderGreen, background: "rgba(0,0,0,0.3)", position: "relative", zIndex: "1" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h1 style={{ fontSize: "14px", fontWeight: 300, letterSpacing: "0.15em" }}>
            <span style={{ opacity: 0.7 }}>TERMINAL</span>
            <span style={{ marginLeft: "32px", fontWeight: 600, opacity: 0.9 }}>mono</span>
          </h1>
          <div style={{ display: "flex", gap: "16px", fontSize: "11px" }}>
            <span>files:</span>
            <span style={{ fontWeight: 600 }}>{PRODUCTS.length}</span>
          </div>
        </div>
      </header>

      <section style={{ padding: "120px 24px", position: "relative", zIndex: "1" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.3em", marginBottom: "20px", opacity: 0.8 }}>
            $ cat README.md
          </div>
          <h2 style={{ fontSize: "clamp(48px, 7vw, 96px)", fontWeight: 300, lineHeight: 0.95, letterSpacing: "-0.02em" }}>
            DIGITAL VECTOR
            <span style={{ display: "block", fontSize: "0.4em", opacity: 0.4, letterSpacing: "0.1em" }}>MODEL CATALOG</span>
          </h2>
          <div style={{ marginTop: "40px", width: "120px", height: "2px", background: monoGreen, opacity: 0.5 }} />
          <p style={{ marginTop: "32px", maxWidth: "640px", marginInline: "auto", lineHeight: 1.7, color: "#333", opacity: 0.85 }}>
            Browse parametric STL models. Each design includes measurement specifications and assembly guides.
          </p>
          <div style={{ marginTop: "36px", display: "flex", gap: "24px", justifyContent: "center", fontSize: "11px" }}>
            <span>[ total: {PRODUCTS.length} ]</span>
            <span>[ active: y ]</span>
            <span>[ render: cpu ]</span>
          </div>
        </div>
      </section>

      <section style={{ padding: "112px 24px", borderTop: "1px solid " + borderGreen, position: "relative", zIndex: "1" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.3em", marginBottom: "48px", opacity: 0.8 }}>
            $ ls --format=columns
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2px" }}>
            {PRODUCTS.map((p) => (
              <div key={p.name} style={{ background: "#000000", padding: "28px", border: "1px solid " + borderGreen, transition: "background 0.15s" }}>
                <span style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", opacity: 0.8 }}>{p.category}</span>
                <h4 style={{ fontSize: "18px", marginTop: "10px", fontWeight: 600 }}>{p.name}</h4>
                <p style={{ marginTop: "14px", fontWeight: 500 }}>{p.price}</p>
                <button style={{
                  marginTop: "18px",
                  padding: "6px 16px",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  background: "transparent",
                  border: "1px solid " + monoGreen,
                  color: monoGreen,
                  cursor: "pointer",
                  transition: "background 0.2s"
                }}>
                  select
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer style={{ borderTop: "1px solid " + borderGreen, padding: "32px 24px", textAlign: "center", position: "relative", zIndex: "1" }}>
        <span style={{ fontSize: "10px", opacity: 0.5 }}>
          [ terminal: monochrome-green ] [ render: cpu ] [ cache: 256KB ]
        </span>
      </footer>
    </div>
  );
}