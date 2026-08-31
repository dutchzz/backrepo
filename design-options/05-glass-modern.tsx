"use client";

const PRODUCTS = [
  { name: "Lower Receiver Frame", price: "$12", category: "Standard" },
  { name: "Trigger Group", price: "$9", category: "Premium" },
];

export default function GlassModern() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-white/5 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <h1 className="text-lg font-semibold tracking-tight">
            Back Repo
          </h1>
          <nav className="flex gap-6 text-xs uppercase tracking-widest text-white/60">
            <a href="#" className="hover:text-white transition">Files</a>
            <a href="#" className="hover:text-white transition">Legal</a>
          </nav>
        </div>
      </header>

      <section className="px-6 py-32">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-12 backdrop-blur-xl">
            <h2 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
              Digital STL files for 3D-printed components.
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/60">
              A clean catalog of downloadable design geometry. Digital assets
              only — nothing physical is sold or shipped. Checkout via Cash App.
            </p>
            <div className="mt-8 flex gap-4">
              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs">
                {PRODUCTS.length} designs
              </span>
              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs">
                Digital only
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h3 className="text-xs uppercase tracking-widest text-white/40 mb-8">
            Catalog
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRODUCTS.map((p) => (
              <div
                key={p.name}
                className="group cursor-pointer rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/10"
              >
                <div className="aspect-[4/3] rounded-xl bg-white/5 mb-4 flex items-center justify-center text-xs text-white/40">
                  No image
                </div>
                <span className="text-xs uppercase tracking-widest text-white/40">
                  {p.category}
                </span>
                <h4 className="text-lg font-semibold mt-2">{p.name}</h4>
                <p className="mt-2 text-sm text-white/60">{p.price}</p>
                <button className="mt-4 w-full rounded-xl bg-white py-2 text-xs font-bold uppercase tracking-widest text-slate-900 transition hover:bg-white/90">
                  Add to cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-12">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <span className="text-xs text-white/40">
            © 2026 Back Repo — Digital Assets Only
          </span>
          <div className="flex gap-6 text-xs uppercase tracking-widest text-white/40">
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
