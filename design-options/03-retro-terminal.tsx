"use client";

const PRODUCTS = [
  { name: "Lower Receiver Frame", price: "$12", category: "Standard" },
  { name: "Trigger Group", price: "$9", category: "Premium" },
];

export default function RetroTerminal() {
  return (
    <div style={{ minHeight: "100vh", background: "#000", color: "#4ade80", fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace', fontSize: "14px" }}>
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", opacity: 0.08, backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(74,222,128,0.25) 2px, rgba(74,222,128,0.25) 4px)' }} />

      <header style={{ borderBottom: "1px solid #14532d" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h1 style={{ fontSize: "14px", letterSpacing: "0.15em" }}>
            <span style={{ color: "#22c55e" }}>root@backrepo</span>:<span style={{ color: "#4ade80" }}>~</span>$
          </h1>
          <nav style={{ display: "flex", gap: "24px", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.15em", color: "#22c55e" }}>
            <a href="#" style={{ color: "#22c55e", textDecoration: "none" }}>files</a>
            <a href="#" style={{ color: "#22c55e", textDecoration: "none" }}>legal</a>
          </nav>
        </div>
      </header>

      <section style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.2em", color: "#22c55e", marginBottom: "16px" }}>./init.sh</div>
          <h2 style={{ fontSize: "clamp(32px, 6vw, 64px)", fontWeight: 700, lineHeight: 1.1 }}>
            Digital STL files for 3D-printed components.
          </h2>
          <p style={{ marginTop: "24px", maxWidth: "720px", lineHeight: 1.6, color: "rgba(74,222,128,0.8)" }}>
            A clean catalog of downloadable design geometry. Digital assets only — nothing physical is sold or shipped. Checkout via Cash App.
          </p>
          <div style={{ marginTop: "32px", display: "flex", gap: "24px", fontSize: "12px", color: "#22c55e" }}>
            <span>[ designs: {PRODUCTS.length} ]</span>
            <span>[ status: online ]</span>
            <span>[ payment: cashapp ]</span>
          </div>
        </div>
      </section>

      <section style={{ padding: "96px 24px", borderTop: "1px solid #14532d" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h3 style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.2em", color: "#22c55e", marginBottom: "32px" }}>ls -la ./catalog/</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1px", background: "rgba(20,83,45,0.35)" }}>
            {PRODUCTS.map((p) => (
              <div key={p.name} style={{ background: "#000", padding: "24px", border: "1px solid #14532d" }}>
                <span style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.15em", color: "#22c55e" }}>{p.category}</span>
                <h4 style={{ fontSize: "18px", fontWeight: 700, marginTop: "8px", color: "#4ade80" }}>{p.name}</h4>
                <p style={{ marginTop: "16px", color: "#22c55e" }}>{p.price}</p>
                <button style={{ marginTop: "16px", border: "1px solid #22c55e", padding: "8px 16px", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", background: "transparent", color: "#4ade80", cursor: "pointer" }}>[ add ]</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer style={{ borderTop: "1px solid #14532d", padding: "32px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#22c55e" }}>
          <span>© 2026 Back Repo — Digital Assets Only</span>
          <div style={{ display: "flex", gap: "24px", textTransform: "uppercase", letterSpacing: "0.15em" }}>
            <a href="#" style={{ color: "#22c55e", textDecoration: "none" }}>terms</a>
            <a href="#" style={{ color: "#22c55e", textDecoration: "none" }}>privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
