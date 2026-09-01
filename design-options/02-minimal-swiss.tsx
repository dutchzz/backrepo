"use client";

const PRODUCTS = [
  { name: "Lower Receiver Frame", price: "$12", category: "Standard" },
  { name: "Trigger Group", price: "$9", category: "Premium" },
];

export default function MinimalSwiss() {
  return (
    <div style={{ minHeight: "100vh", background: "#ffffff", color: "#000000", fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
      <header style={{ borderBottom: "1px solid #e5e7eb" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h1 style={{ fontSize: "18px", fontWeight: 500, letterSpacing: "-0.01em" }}>Back Repo</h1>
          <nav style={{ display: "flex", gap: "32px", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.15em", color: "#9ca3af" }}>
            <a href="#" style={{ color: "#000", textDecoration: "none" }}>Files</a>
            <a href="#" style={{ color: "#000", textDecoration: "none" }}>Legal</a>
          </nav>
        </div>
      </header>

      <section style={{ padding: "128px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "64px", alignItems: "start" }}>
          <div>
            <h2 style={{ fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 300, lineHeight: 1.05, letterSpacing: "-0.02em" }}>
              Digital STL files for 3D-printed components.
            </h2>
          </div>
          <div>
            <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#4b5563", maxWidth: "480px" }}>
              A clean catalog of downloadable design geometry. Digital assets only — nothing physical is sold or shipped. Checkout via Cash App.
            </p>
            <p style={{ marginTop: "32px", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.15em", color: "#9ca3af" }}>3 designs available</p>
          </div>
        </div>
      </section>

      <section style={{ padding: "96px 24px", background: "#f9fafb" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h3 style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.2em", color: "#9ca3af", marginBottom: "48px" }}>Catalog</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "32px" }}>
            {PRODUCTS.map((p) => (
              <div key={p.name}>
                <div style={{ aspectRatio: "4/3", background: "#e5e7eb", marginBottom: "16px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", color: "#9ca3af" }}>No image</div>
                <span style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.15em", color: "#9ca3af" }}>{p.category}</span>
                <h4 style={{ fontSize: "18px", fontWeight: 500, marginTop: "4px" }}>{p.name}</h4>
                <p style={{ marginTop: "8px", fontSize: "14px", color: "#4b5563" }}>{p.price}</p>
                <button style={{ marginTop: "16px", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.15em", background: "transparent", border: "none", borderBottom: "1px solid #000", paddingBottom: "4px", cursor: "pointer" }}>Add to cart</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer style={{ borderTop: "1px solid #e5e7eb", padding: "48px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#9ca3af" }}>
          <span>© 2026 Back Repo — Digital Assets Only</span>
          <div style={{ display: "flex", gap: "32px", textTransform: "uppercase", letterSpacing: "0.15em" }}>
            <a href="#" style={{ color: "#9ca3af", textDecoration: "none" }}>Terms</a>
            <a href="#" style={{ color: "#9ca3af", textDecoration: "none" }}>Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
