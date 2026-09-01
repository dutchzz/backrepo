"use client";

const PRODUCTS = [
  { name: "Lower Receiver Frame", price: "$12", category: "Standard" },
  { name: "Trigger Group", price: "$9", category: "Premium" },
];

export default function RetroTerminalPhosphor() {
  const phosphorGreen = "#39FF14";
  const darkBg = "#000814";

  return (
    <div style={{ minHeight: "100vh", background: darkBg, color: phosphorGreen, fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace", fontSize: "13px" }}>
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", opacity: 0.12, background: `radial-gradient(circle at 10% 20%, ${phosphorGreen}22 0%, transparent 30%), radial-gradient(circle at 90% 80%, ${phosphorGreen}18 0%, transparent 25%)` }} />

      <header style={{ borderBottom: "1px solid " + phosphorGreen + "66" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "18px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h1 style={{ fontSize: "14px", fontWeight: 300, letterSpacing: "0.25em" }}>
            <span style={{ opacity: 0.6 }}>TERMINAL</span> 
            <span style={{ marginLeft: "12px", padding: "4px 8px", background: phosphorGreen + "22", borderRadius: "4px", fontSize: "11px", fontWeight: 600 }}>v2.3.1</span>
          </h1>
          <div style={{ display: "flex", gap: "24px", fontSize: "12px" }}>
            <span style={{ padding: "4px 12px", background: "#FF2B2B", borderRadius: "4px", fontWeight: 600 }}>⚠ POWER ON</span>
            <span style={{ padding: "4px 12px", background: phosphorGreen + "44", borderRadius: "4px", fontWeight: 600, color: "#000" }}>✓ READY</span>
          </div>
        </div>
      </header>

      <section style={{ padding: "100px 24px", background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.2) 100%)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.3em", marginBottom: "20px", opacity: 0.8 }}>
            $ cat catalog/version.txt
          </div>
          <h1 style={{ fontSize: "clamp(56px, 10vw, 120px)", fontWeight: 200, lineHeight: 0.95, letterSpacing: "-0.02em", textShadow: `0 0 30px ${phosphorGreen}44, 0 0 60px ${phosphorGreen}22` }}>
            <span style={{ display: "block", opacity: 0.9 }}>STL MODELS</span>
            <span style={{ display: "block", color: "#FFFFFF", fontWeight: 700, fontSize: "0.4em", marginTop: "8px", opacity: 0.3 }}>for 3D Printing</span>
          </h1>
          <p style={{ marginTop: "36px", maxWidth: "720px", marginInline: "auto", lineHeight: 1.7, color: "#AAAAAA", opacity: 0.95 }}>
            Access 3D model repositories through secure protocols.
            Authenticated download links generated on demand.
            All models include multi-material instructions.
          </p>
          <div style={{ marginTop: "44px", display: "flex", gap: "32px", flexWrap: "wrap", justifyContent: "center", fontSize: "11px" }}>
            <span style={{ padding: "8px 16px", background: phosphorGreen + "22", borderRadius: "4px", fontWeight: 500 }}>[ files: {PRODUCTS.length} ]</span>
            <span style={{ padding: "8px 16px", background: phosphorGreen + "11", borderRadius: "4px" }}>[ bandwidth: OPTIMAL ]</span>
            <span style={{ padding: "8px 16px", background: phosphorGreen + "22", borderRadius: "4px" }}>[ compression: ZIP ]</span>
          </div>
        </div>
      </section>

      <section style={{ padding: "112px 24px", borderTop: "1px solid " + phosphorGreen + "33" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.4em", marginBottom: "48px", opacity: 0.7 }}>
            $ ls --all --color=always ./catalog/
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "4px" }}>
            {PRODUCTS.map((p) => (
              <div key={p.name} style={{ background: "#000C1E", padding: "32px", border: "1px solid " + phosphorGreen + "44", transition: "background 0.2s" }}>
                <span style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.25em", color: "#88CEFF" }}>{p.category}</span>
                <h4 style={{ fontSize: "20px", marginTop: "12px", fontWeight: 600 }}>{p.name}</h4>
                <p style={{ marginTop: "16px", fontWeight: 500 }}>{p.price}</p>
                <button style={{
                  marginTop: "24px",
                  width: "100%",
                  padding: "10px 16px",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  background: phosphorGreen,
                  color: "#000",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer"
                }}>
                  get file
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer style={{ padding: "40px 24px", textAlign: "center" }}>
        <span style={{ fontSize: "10px", opacity: 0.5 }}>
          [ terminal: green-phosphor ] [ mode: 80x24 ] [ buffer: 8KB ]
        </span>
      </footer>
    </div>
  );
}