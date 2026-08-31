"use client";

const PRODUCTS = [
  { name: "Lower Receiver Frame", price: "$12", category: "Standard" },
  { name: "Trigger Group", price: "$9", category: "Premium" },
];

export default function NeonBrutalist() {
  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <header className="border-b-4 border-white">
        <div className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tighter uppercase">
            Back Repo
          </h1>
          <nav className="flex gap-6 text-xs uppercase tracking-widest">
            <a href="#" className="hover:text-brand-lime transition">
              Files
            </a>
            <a href="#" className="hover:text-brand-lime transition">
              Legal
            </a>
          </nav>
        </div>
      </header>

      <section className="border-b-4 border-white px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-6xl md:text-8xl font-bold leading-none tracking-tighter">
            DIGITAL STL
            <br />
            <span className="text-brand-lime">FILES</span>
          </h2>
          <p className="mt-8 max-w-xl text-sm leading-relaxed text-gray-400">
            Parametric design geometry for 3D printing. Digital assets only —
            nothing physical is sold or shipped.
          </p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h3 className="text-4xl font-bold mb-12 pb-6 border-b-2 border-white">
            CATALOG
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white">
            {PRODUCTS.map((p) => (
              <div
                key={p.name}
                className="bg-black p-6 border-2 border-white hover:bg-white hover:text-black transition-colors"
              >
                <span className="text-xs uppercase tracking-widest text-brand-lime">
                  {p.category}
                </span>
                <h4 className="text-xl font-bold mt-2">{p.name}</h4>
                <p className="mt-4 text-lg font-bold">{p.price}</p>
                <button className="mt-4 w-full border-2 border-white py-2 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition">
                  Add
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t-4 border-white px-6 py-12">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <span className="text-xs text-gray-500">
            © 2026 Back Repo — Digital Assets Only
          </span>
          <div className="flex gap-6 text-xs uppercase tracking-widest text-gray-500">
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
