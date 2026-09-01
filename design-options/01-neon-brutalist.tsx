"use client";

const PRODUCTS = [
  { name: "Lower Receiver Frame", price: "$12", category: "Standard" },
  { name: "Trigger Group", price: "$9", category: "Premium" },
];

export default function NeonBrutalist() {
  return (
    <div style={{ minHeight: "100vh", background: "#000", color: "#fff", fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" }}>
      <header style={{ borderBottom: "4px solid #fff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h1 style={{ fontSize: "24px", fontWeight: 700, letterSpacing: "-0.02em", textTransform: "uppercase" }}>
            Back Repo
          </h1>
          <nav style={{ display: "flex", gap: "24px", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.15em" }}>
            <a href="#" style={{ color: "#ccff00", textDecoration: "none" }}>Files</a>
            <a href="#" style={{ color: "#ccff00", textDecoration: "none" }}>Legal</a>
          </nav>
        </div>
      </header>

      <section style={{ borderBottom: "4px solid #fff", padding: "96px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(48px, 8vw, 96px)", fontWeight: 700, lineHeight: 0.9, letterSpacing: "-0.03em" }}>
            DIGITAL STL
            <br />
            <span style={{ color: "#ccff00" }}>FILES</span>
          </h2>
          <p style={{ marginTop: "32px", maxWidth: "560px", fontSize: "14px", lineHeight: 1.6, color: "#9ca3af" }}>
            Parametric design geometry for 3D printing. Digital assets only — nothing physical is sold or shipped.
          </p>
        </div>
      </section>

      <section style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h3 style={{ fontSize: "36px", fontWeight: 700, marginBottom: "48px", paddingBottom: "24px", borderBottom: "2px solid #fff" }}>
            CATALOG
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1px", background: "#fff" }}>
            {PRODUCTS.map((p) => (
              <div key={p.name} style={{ background: "#000", padding: "24px", border: "2px solid #fff" }}>
                <span style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.15em", color: "#ccff00" }}>{p.category}</span>
                <h4 style={{ fontSize: "20px", fontWeight: 700, marginTop: "8px" }}>{p.name}</h4>
                <p style={{ marginTop: "16px", fontSize: "18px", fontWeight: 700 }}>{p.price}</p>
                <button style={{ marginTop: "16px", width: "100%", border: "2px solid #fff", padding: "8px", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", background: "transparent", color: "#fff", cursor: "pointer" }}>
                  Add
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer style={{ borderTop: "4px solid #fff", padding: "48px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#6b7280" }}>
          <span>© 2026 Back Repo — Digital Assets Only</span>
          <div style={{ display: "flex", gap: "24px", textTransform: "uppercase", letterSpacing: "0.15em" }}>
            <a href="#" style={{ color: "#6b7280", textDecoration: "none" }}>Terms</a>
            <a href="#" style={{ color: "#6b7280", textDecoration: "none" }}>Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
