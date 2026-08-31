"use client";

const PRODUCTS = [
  { name: "Lower Receiver Frame", price: "$12", category: "Standard" },
  { name: "Trigger Group", price: "$9", category: "Premium" },
];

export default function MinimalSwiss() {
  return (
    <div className="min-h-screen bg-white text-black font-sans antialiased">
      <header className="border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
          <h1 className="text-lg font-medium tracking-tight">
            Back Repo
          </h1>
          <nav className="flex gap-8 text-xs uppercase tracking-widest text-gray-500">
            <a href="#" className="hover:text-black transition">
              Files
            </a>
            <a href="#" className="hover:text-black transition">
              Legal
            </a>
          </nav>
        </div>
      </header>

      <section className="px-6 py-32">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-5xl md:text-6xl font-light leading-tight tracking-tight">
              Digital STL files for 3D-printed components.
            </h2>
          </div>
          <div className="md:pt-2">
            <p className="text-sm leading-relaxed text-gray-600 max-w-md">
              A clean catalog of downloadable design geometry. Digital assets
              only — nothing physical is sold or shipped. Checkout via Cash App.
            </p>
            <div className="mt-8">
              <span className="text-xs uppercase tracking-widest text-gray-400">
                3 designs available
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 bg-gray-50">
        <div className="mx-auto max-w-6xl">
          <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-12">
            Catalog
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRODUCTS.map((p) => (
              <div key={p.name} className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gray-200 mb-4 flex items-center justify-center text-xs text-gray-400">
                  No image
                </div>
                <span className="text-xs uppercase tracking-widest text-gray-400">
                  {p.category}
                </span>
                <h4 className="text-lg font-medium mt-1">{p.name}</h4>
                <p className="mt-2 text-sm text-gray-600">{p.price}</p>
                <button className="mt-4 text-xs uppercase tracking-widest border-b border-black pb-1 hover:border-gray-400 transition">
                  Add to cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-200 px-6 py-12">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <span className="text-xs text-gray-400">
            © 2026 Back Repo — Digital Assets Only
          </span>
          <div className="flex gap-8 text-xs uppercase tracking-widest text-gray-400">
            <a href="#" className="hover:text-black transition">Terms</a>
            <a href="#" className="hover:text-black transition">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
