"use client";

import { useState } from "react";
import { useProducts } from "./ProductsProvider";
import { ProductCard } from "./ProductCard";
import { ProductModal } from "./ProductModal";

export function ProductGrid() {
  const { products } = useProducts();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = products.find((p) => p.id === selectedId) ?? null;

  return (
    <section id="files" className="mx-auto max-w-content px-6 py-24">
      <div className="mb-12 flex items-end justify-between border-b border-line pb-6">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tightest text-paper">
            STL Files
          </h2>
          <p className="mt-2 text-sm text-muted">
            Digital downloads. No physical items are shipped.
          </p>
        </div>
        <span className="hidden text-xs uppercase tracking-widest text-muted sm:block">
          {products.length} designs
        </span>
      </div>
      <div className="grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <div key={p.id} className="bg-ink">
            <ProductCard product={p} onOpen={() => setSelectedId(p.id)} />
          </div>
        ))}
      </div>

      {selected && (
        <ProductModal product={selected} onClose={() => setSelectedId(null)} />
      )}
    </section>
  );
}
