"use client";

const PRODUCTS = [
  { name: "Lower Receiver Frame", price: "$12", category: "Standard" },
  { name: "Trigger Group", price: "$9", category: "Premium" },
];

export default function RetroTerminal() {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono text-sm">
      <div className="pointer-events-none fixed inset-0 opacity-10" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,0,0.15) 2px, rgba(0,255,0,0.15) 4px)'
      }} />

      <header className="border-b border-green-900">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <h1 className="text-base tracking-widest">
            <span className="text-green-600">root@backrepo</span>:<span className="text-green-400">~</span>$
          </h1>
          <nav className="flex gap-6 text-xs uppercase tracking-widest text-green-600">
            <a href="#" className="hover:text-green-400 transition">files</a>
            <a href="#" className="hover:text-green-400 transition">legal</a>
          </nav>
        </div>
      </header>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-green-600 text-xs uppercase tracking-widest mb-4">
            ./init.sh
          </div>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Digital STL files for 3D-printed components.
          </h2>
          <p className="mt-6 max-w-2xl text-green-400/80 leading-relaxed">
            A clean catalog of downloadable design geometry. Digital assets only —
            nothing physical is sold or shipped. Checkout via Cash App.
          </p>
          <div className="mt-8 flex gap-6 text-xs text-green-600">
            <span>[ designs: {PRODUCTS.length} ]</span>
            <span>[ status: online ]</span>
            <span>[ payment: cashapp ]</span>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 border-t border-green-900">
        <div className="mx-auto max-w-6xl">
          <h3 className="text-xs uppercase tracking-widest text-green-600 mb-8">
            ls -la ./catalog/
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-green-900/30">
            {PRODUCTS.map((p) => (
              <div key={p.name} className="bg-black p-6 border border-green-900">
                <span className="text-xs uppercase tracking-widest text-green-600">
                  {p.category}
                </span>
                <h4 className="text-lg font-bold mt-2 text-green-400">{p.name}</h4>
                <p className="mt-4 text-green-600">{p.price}</p>
                <button className="mt-4 border border-green-600 px-4 py-2 text-xs font-bold uppercase tracking-widest text-green-400 hover:bg-green-900/30 transition">
                  [ add ]
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-green-900 px-6 py-8">
        <div className="mx-auto max-w-6xl flex items-center justify-between text-xs text-green-600">
          <span>© 2026 Back Repo — Digital Assets Only</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-green-400 transition">terms</a>
            <a href="#" className="hover:text-green-400 transition">privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
