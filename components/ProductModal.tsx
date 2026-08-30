"use client";

import { useEffect, useState } from "react";
import { useCart } from "./CartProvider";
import {
  productGallery,
  productCategory,
  CATEGORY_META,
  type Product,
} from "@/lib/products";

export function ProductModal({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  const { add, open } = useCart();
  const isFree = product.priceUsd === 0;
  const gallery = productGallery(product);
  const [active, setActive] = useState(0);
  const cat = productCategory(product);
  const catMeta = CATEGORY_META[cat];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const addToCart = () => {
    add({ id: product.id, name: product.name, priceUsd: product.priceUsd });
    onClose();
    open();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-brand-ink/90 px-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={product.name}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg border border-line bg-ink"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="br-tag absolute right-3 top-3 z-10 text-muted hover:text-brand-lime"
        >
          Close
        </button>

        <div className="aspect-[16/9] w-full overflow-hidden border-b border-line bg-ink">
          {gallery.length > 0 ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={gallery[active] ?? gallery[0]}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center br-tag text-muted">
              No image
            </div>
          )}
        </div>

        {gallery.length > 1 && (
          <div className="flex gap-2 border-b border-line p-3">
            {gallery.map((src, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-14 w-20 overflow-hidden border ${
                  i === active ? "border-brand-lime" : "border-line"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={`${product.name} ${i + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        )}

        <div className="p-8">
          <div className="flex items-center gap-3">
            <span
              className="br-tag"
              style={{ color: `rgb(var(--cat-${catMeta.color}))` }}
            >
              {catMeta.label}
            </span>
            {product.highlight && (
              <span className="br-tag text-brand-magenta">Premium</span>
            )}
          </div>
          {product.tagline && (
            <p className="mt-3 br-tag text-muted">{product.tagline}</p>
          )}
          <h2 className="br-heading mt-1 text-3xl text-paper">{product.name}</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {product.details || product.summary}
          </p>

          {product.features && product.features.length > 0 && (
            <ul className="mt-6 space-y-2 border-t border-line pt-6">
              {product.features.map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-paper">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-lime" />
                  {f}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-8 flex items-center justify-between">
            <span className="br-mono text-2xl font-medium text-paper">
              {isFree ? "Free" : `$${product.priceUsd}`}
            </span>

            {isFree ? (
              product.fileUrl ? (
                <a
                  href={product.fileUrl}
                  download
                  className="bg-brand-cyan px-6 py-3 text-xs font-bold uppercase tracking-widest text-brand-ink transition hover:opacity-90"
                >
                  Download
                </a>
              ) : (
                <span className="br-tag text-muted">No file</span>
              )
            ) : (
              <button
                onClick={addToCart}
                className="bg-brand-lime px-6 py-3 text-xs font-bold uppercase tracking-widest text-brand-ink transition hover:opacity-90"
              >
                Add to cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
