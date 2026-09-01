"use client";

const PRODUCTS = [
  { name: "Lower Receiver Frame", price: "$12", category: "Standard" },
  { name: "Trigger Group", price: "$9", category: "Premium" },
];

export default function EditorialDark() {
  return (
    <div style={{ minHeight: "100vh", background: "#0f1115", color: "#e6e8ec" }}>
      <header style={{ borderBottom: "1px solid #2a2f3a" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h1 style={{ fontSize: "18px", fontFamily: 'Georgia, "Times New Roman", serif', letterSpacing: "-0.01em" }}>Back Repo</h1>
          <nav style={{ display: "flex", gap: "32px", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.2em", color: "#6b7280" }}>
            <a href="#" style={{ color: "#fff", textDecoration: "none" }}>Files</a>
            <a href="#" style={{ color: "#fff", textDecoration: "none" }}>Legal</a>
          </nav>
        </div>
      </header>

      <section style={{ padding: "128px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "32px" }}>
          <div style={{ gridColumn: "span 2" }}>
            <h2 style={{ fontSize: "clamp(40px, 7vw, 80px)", fontFamily: 'Georgia, "Times New Roman", serif', lineHeight: 0.95, letterSpacing: "-0.02em" }}>
              Digital STL files for 3D-printed components.
            </h2>
          </div>
          <div>
            <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#6b7280" }}>
              A clean catalog of downloadable design geometry. Digital assets only — nothing physical is sold or shipped. Checkout via Cash App.
            </p>
            <div style={{ marginTop: "24px", width: "64px", height: "1px", background: "#ef4444" }} />
            <p style={{ marginTop: "16px", fontSize: "12px", color: "#6b7280" }}>{PRODUCTS.length} designs available</p>
          </div>
        </div>
      </section>

      <section style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "48px", paddingBottom: "24px", borderBottom: "1px solid #2a2f3a" }}>
            <h3 style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.2em", color: "#6b7280" }}>Catalog</h3>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "32px" }}>
            {PRODUCTS.map((p) => (
              <div key={p.name}>
                <div style={{ aspectRatio: "4/3", background: "#1a1d24", marginBottom: "16px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", color: "#6b7280" }}>No image</div>
                <span style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.2em", color: "#ef4444" }}>{p.category}</span>
                <h4 style={{ fontSize: "20px", fontFamily: 'Georgia, "Times New Roman", serif', marginTop: "8px" }}>{p.name}</h4>
                <p style={{ marginTop: "8px", fontSize: "14px", color: "#6b7280" }}>{p.price}</p>
                <button style={{ marginTop: "16px", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.15em", background: "transparent", border: "none", borderBottom: "1px solid #ef4444", paddingBottom: "4px", color: "#ef4444", cursor: "pointer" }}>Add to cart</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer style={{ borderTop: "1px solid #2a2f3a", padding: "48px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#6b7280" }}>
          <span>© 2026 Back Repo — Digital Assets Only</span>
          <div style={{ display: "flex", gap: "32px", textTransform: "uppercase", letterSpacing: "0.2em" }}>
            <a href="#" style={{ color: "#6b7280", textDecoration: "none" }}>Terms</a>
            <a href="#" style={{ color: "#6b7280", textDecoration: "none" }}>Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
