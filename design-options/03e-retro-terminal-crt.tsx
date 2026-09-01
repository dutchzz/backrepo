"use client";

const PRODUCTS = [
  { name: "Lower Receiver Frame", price: "$12", category: "Standard" },
  { name: "Trigger Group", price: "$9", category: "Premium" },
];

export default function RetroTerminalCRT() {
  const phosphor = "#FFFF00";
  const darkBg = "#0C0C0C";

  return (
    <div style={{ minHeight: "100vh", background: darkBg, color: phosphor, fontFamily: '"Courier New", Courier, monospace', fontSize: "16px", lineHeight: 1.4, letterSpacing: "0.05em", backgroundImage: `linear-gradient(rgba(255,255,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,0,0.03) 1px, transparent 1px)`, backgroundSize: "20px 20px" }}>
      <div style={{ position: "fixed", inset: "0", background: `radial-gradient(ellipse at center, transparent 0%, ${darkBg} 70%), linear-gradient(45deg, transparent 20%, rgba(255,255,255,0.02) 50%, transparent 70%)`, zIndex: 1, pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 2, transform: "perspective(1000px) rotateX(2deg) rotateY(-1deg)", transformStyle: "preserve-3d", minHeight: "100vh", padding: "96px 24px 48px" }}>
        <header style={{ borderBottom: "2px solid " + phosphor + "66", background: "rgba(0,0,0,0.35)", padding: "24px 0" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h1 style={{ fontSize: "14px", fontWeight: 500, letterSpacing: "0.3em" }}>
              <span style={{ opacity: 0.7 }}>VINTAGE</span>
              <span style={{ marginLeft: "16px", color: phosphor, textShadow: `0 0 10px ${phosphor}` }}>TERMINAL</span>
            </h1>
            <div style={{ display: "flex", gap: "24px", fontSize: "11px" }}>
              <span style={{ marginRight: "24px" }}>│</span>
              <span style={{ margin: "0 12px" }}>v2.1.0</span>
              <span style={{ marginLeft: "24px" }}>│</span>
            </div>
          </div>
        </header>

        <section style={{ padding: "96px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.4em", marginBottom: "20px", opacity: 0.8 }}>
              $ cat version
            </div>
            <h1 style={{ fontSize: "clamp(64px, 12vw, 144px)", fontWeight: 400, lineHeight: 0.85, letterSpacing: "-0.05em", textTransform: "uppercase", textShadow: `0 0 50px ${phosphor}55` }}>
              BACKREPO
            </h1>
            <h3 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 400, letterSpacing: "-0.02em", opacity: 0.8, marginTop: "16px" }}>
              3D PRINT FILES
            </h3>
            <p style={{ marginTop: "24px", maxWidth: "640px", margin: "0 auto", lineHeight: 1.6, opacity: 0.85 }}>
              Access digital STL files for 3D printing projects.
              All models include measurement specifications and assembly guides.
            </p>
            <div style={{ marginTop: "40px", display: "flex", gap: "40px", justifyContent: "center", fontSize: "12px" }}>
              <span>[ total: {PRODUCTS.length} ]</span>
              <span>[ active: y ]</span>
              <span>[ tty: vt100 ]</span>
            </div>
          </div>
        </section>

        <section style={{ padding: "120px 24px" }}>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <div style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.4em", marginBottom: "32px", opacity: 0.7 }}>
              $ ls files
            </div>
            {PRODUCTS.map((p) => (
              <div key={p.name} style={{ border: "1px solid " + phosphor + "44", padding: "32px", marginBottom: "16px", background: "rgba(0,0,0,0.25)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                  <span style={{ fontWeight: 500, color: "#FFFFFF" }}>{p.category}</span>
                  <span style={{ fontWeight: 600 }}>{p.price}</span>
                </div>
                <h4 style={{ fontSize: "18px", margin: 0 }}>{p.name}</h4>
                <button style={{
                  marginTop: "24px",
                  padding: "10px 24px",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  background: "transparent",
                  border: "2px solid " + phosphor,
                  color: phosphor,
                  cursor: "pointer"
                }}>
                  get file
                </button>
              </div>
            ))}
          </div>
        </section>

        <footer style={{ borderTop: "1px solid " + phosphor + "33", padding: "32px 24px 16px", textAlign: "center", fontSize: "10px", opacity: 0.6 }}>
          <span style={{ marginRight: "32px" }}>│</span>
          <span style={{ margin: "0 16px" }}>[ boot: INIT ] [ mode: SINGLE_USER ]</span>
          <span style={{ marginLeft: "32px" }}>│</span>
        </footer>
      </div>
    </div>
  );
}