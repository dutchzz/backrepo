"use client";

const PRODUCTS = [
  { name: "Lower Receiver Frame", price: "$12", category: "Standard" },
  { name: "Trigger Group", price: "$9", category: "Premium" },
];

export default function EditorialDark() {
  return (
    <div className="min-h-screen bg-[#0f1115] text-[#e6e8ec]">
      <header className="border-b border-[#2a2f3a]">
        <div className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
          <h1 className="text-lg font-serif tracking-tight">
            Back Repo
          </h1>
          <nav className="flex gap-8 text-xs uppercase tracking-widest text-[#6b7280]">
            <a href="#" className="hover:text-white transition">Files</a>
            <a href="#" className="hover:text-white transition">Legal</a>
          </nav>
        </div>
      </header>

      <section className="px-6 py-32">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8">
            <h2 className="text-5xl md:text-7xl font-serif leading-[0.95] tracking-tight">
              Digital STL files for 3D-printed components.
            </h2>
          </div>
          <div className="md:col-span-4 md:pt-4">
            <p className="text-sm leading-relaxed text-[#6b7280]">
              A clean catalog of downloadable design geometry. Digital assets
              only — nothing physical is sold or shipped. Checkout via Cash App.
            </p>
            <div className="mt-6 w-16 h-px bg-[#ef4444]" />
            <p className="mt-4 text-xs text-[#6b7280]">
              {PRODUCTS.length} designs available
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between mb-12 pb-6 border-b border-[#2a2f3a]">
            <h3 className="text-xs uppercase tracking-widest text-[#6b7280]">
              Catalog
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRODUCTS.map((p) => (
              <div key={p.name} className="group cursor-pointer">
                <div className="aspect-[4/3] bg-[#1a1d24] mb-4 flex items-center justify-center text-xs text-[#6b7280]">
                  No image
                </div>
                <span className="text-xs uppercase tracking-widest text-[#ef4444]">
                  {p.category}
                </span>
                <h4 className="text-xl font-serif mt-2">{p.name}</h4>
                <p className="mt-2 text-sm text-[#6b7280]">{p.price}</p>
                <button className="mt-4 text-xs uppercase tracking-widest border-b border-[#ef4444] pb-1 text-[#ef4444] hover:text-white hover:border-white transition">
                  Add to cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-[#2a2f3a] px-6 py-12">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <span className="text-xs text-[#6b7280]">
            © 2026 Back Repo — Digital Assets Only
          </span>
          <div className="flex gap-8 text-xs uppercase tracking-widest text-[#6b7280]">
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
