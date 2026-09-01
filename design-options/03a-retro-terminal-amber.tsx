"use client";

const PRODUCTS = [
  { name: "Lower Receiver Frame", price: "$12", category: "Standard" },
  { name: "Trigger Group", price: "$9", category: "Premium" },
];

export default function RetroTerminalAmber() {
  const amberColor = "#FFBF00";
  const darkBg = "#0A0A0A";
  const borderDim = "rgba(255,191,0,0.3)";

  return (
    <div style={{ minHeight: "100vh", background: darkBg, color: amberColor, fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace', fontSize: "14px" }}>
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", opacity: 0.06, backgroundImage: `repeating-linear-gradient(0deg, transparent 0px, transparent 1px, ${amberColor}1A 1px, ${amberColor}1A 2px)` }} />

      <header style={{ borderBottom: "2px solid " + borderDim }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h1 style={{ fontSize: "16px", letterSpacing: "0.2em" }}>
            <span style={{ color: "#FFF" }}>TERM</span>/<span style={{ color: amberColor }}>am</span> <span style={{ color: "#FFA500" }}>user</span>@<span style={{ color: amberColor }}>workbench:~$</span> 
          </h1>
          <nav style={{ display: "flex", gap: "32px", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.25em", color: "#FFA500", opacity: 0.8 }}>
            <a href="#" style={{ color: amberColor, textDecoration: "none" }}>files</a>
            <a href="#" style={{ color: amberColor, textDecoration: "none" }}>legal</a>
          </nav>
        </div>
      </header>

      <section style={{ padding: "128px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.3em", marginBottom: "24px", color: "#FFA500", opacity: 0.8 }}>
            $ ./boot_terminal
          </div>
          <h2 style={{ fontSize: "clamp(48px, 8vw, 96px)", fontWeight: 900, lineHeight: 0.95, letterSpacing: "-0.03em", textShadow: `0 0 20px ${amberColor}33` }}>
            Digital STL files for 3D-printed components
          </h2>
          <p style={{ marginTop: "32px", maxWidth: "640px", lineHeight: 1.7, color: "#FFD700", opacity: 0.9 }}>
            Browse, download, and manage 3D-print ready design files.
            Each model includes full parametric geometry and material specs.
          </p>
          <div style={{ marginTop: "40px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <span style={{ background: "#221B24", padding: "8px 16px", borderRadius: "4px", border: "1px solid " + borderDim, fontSize: "12px" }}>[ active: green ]</span>
            <span style={{ background: "#221B24", padding: "8px 16px", borderRadius: "4px", border: "1px solid " + borderDim, fontSize: "12px" }}>[ count: {PRODUCTS.length} ]</span>
            <span style={{ background: "#221B24", padding: "8px 16px", borderRadius: "4px", border: "1px solid " + borderDim, fontSize: "12px" }}>[ mode: mono ]</span>
          </div>
        </div>
      </section>

      <section style={{ padding: "128px 24px", borderTop: "2px solid " + borderDim }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h3 style={{ fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.3em", marginBottom: "48px", color: "#FFA500", opacity: 0.8 }}>ls -la catalog/</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2px", background: amberColor + "22" }}>
            {PRODUCTS.map((p) => (
              <div key={p.name} style={{ background: darkBg, padding: "28px", border: "1px solid " + borderDim, transition: "background 0.2s" }}>
                <span style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.2em", color: "#FFB347" }}>{p.category}</span>
                <h4 style={{ fontSize: "20px", fontWeight: 700, marginTop: "12px", color: "#FFF" }}>{p.name}</h4>
                <p style={{ marginTop: "20px", color: "#FFD700", fontWeight: 500 }}>{p.price}</p>
                <button style={{ marginTop: "20px", width: "100%", padding: "10px", fontSize: "12px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", background: amberColor, color: darkBg, border: "none", cursor: "pointer", transition: "background 0.2s" }}>
                  install
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer style={{ borderTop: "2px solid " + borderDim, padding: "48px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", fontSize: "11px", opacity: 0.7 }}>
          <span>[ terminal: amber-green ] [ status: READY ] [ power: 100% ]</span>
          <div style={{ display: "flex", gap: "40px" }}>
            <a href="#" style={{ opacity: 0.8, textDecoration: "none" }}>terms</a>
            <a href="#" style={{ opacity: 0.8, textDecoration: "none" }}>privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}