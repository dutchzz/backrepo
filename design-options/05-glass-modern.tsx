"use client";

const PRODUCTS = [
  { name: "Lower Receiver Frame", price: "$12", category: "Standard" },
  { name: "Trigger Group", price: "$9", category: "Premium" },
];

export default function GlassModern() {
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #0f172a, #581c87, #0f172a)", color: "#ffffff" }}>
      <header style={{ position: "sticky", top: 0, zIndex: 30, borderBottom: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.05)", backdropFilter: "blur(16px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h1 style={{ fontSize: "18px", fontWeight: 600, letterSpacing: "-0.01em" }}>Back Repo</h1>
          <nav style={{ display: "flex", gap: "24px", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(255,255,255,0.6)" }}>
            <a href="#" style={{ color: "#fff", textDecoration: "none" }}>Files</a>
            <a href="#" style={{ color: "#fff", textDecoration: "none" }}>Legal</a>
          </nav>
        </div>
      </header>

      <section style={{ padding: "128px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ borderRadius: "16px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.05)", backdropFilter: "blur(16px)", padding: "48px" }}>
            <h2 style={{ fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              Digital STL files for 3D-printed components.
            </h2>
            <p style={{ marginTop: "24px", maxWidth: "560px", fontSize: "14px", lineHeight: 1.6, color: "rgba(255,255,255,0.6)" }}>
              A clean catalog of downloadable design geometry. Digital assets only — nothing physical is sold or shipped. Checkout via Cash App.
            </p>
            <div style={{ marginTop: "32px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <span style={{ borderRadius: "9999px", border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.1)", padding: "8px 16px", fontSize: "12px" }}>{PRODUCTS.length} designs</span>
              <span style={{ borderRadius: "9999px", border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.1)", padding: "8px 16px", fontSize: "12px" }}>Digital only</span>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h3 style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.2em", color: "rgba(255,255,255,0.4)", marginBottom: "32px" }}>Catalog</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
            {PRODUCTS.map((p) => (
              <div key={p.name} style={{ cursor: "pointer", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.05)", padding: "24px", transition: "background 0.2s, border-color 0.2s" }}>
                <div style={{ aspectRatio: "4/3", borderRadius: "12px", background: "rgba(255,255,255,0.05)", marginBottom: "16px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>No image</div>
                <span style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(255,255,255,0.4)" }}>{p.category}</span>
                <h4 style={{ fontSize: "18px", fontWeight: 600, marginTop: "8px" }}>{p.name}</h4>
                <p style={{ marginTop: "8px", fontSize: "14px", color: "rgba(255,255,255,0.6)" }}>{p.price}</p>
                <button style={{ marginTop: "16px", width: "100%", borderRadius: "12px", background: "#fff", padding: "10px", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "#0f172a", border: "none", cursor: "pointer" }}>Add to cart</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.1)", padding: "48px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", fontSize: "12px", color: "rgba(255,255,255,0.5)" }}>
          <span>© 2026 Back Repo — Digital Assets Only</span>
          <div style={{ display: "flex", gap: "24px", textTransform: "uppercase", letterSpacing: "0.15em" }}>
            <a href="#" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Terms</a>
            <a href="#" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
