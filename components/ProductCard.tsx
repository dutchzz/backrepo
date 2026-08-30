"use client";

import { useCart } from "./CartProvider";
import {
  productGallery,
  productCategory,
  CATEGORY_META,
  type Product,
} from "@/lib/products";

export function ProductCard({
  product,
  onOpen,
}: {
  product: Product;
  onOpen?: () => void;
}) {
  const { add, items, open } = useCart();
  const inCart = items.some((i) => i.id === product.id);
  const isFree = product.priceUsd === 0;
  const cat = productCategory(product);
  const catMeta = CATEGORY_META[cat];

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    add({
      id: product.id,
      name: product.name,
      priceUsd: product.priceUsd,
    });
    open();
  };

  return (
    <article
      onClick={onOpen}
      className="flex cursor-pointer flex-col justify-between border border-line p-6 transition hover:border-muted"
    >
      <div>
        <div className="mb-4 aspect-[4/3] w-full overflow-hidden border border-line bg-ink">
          {productGallery(product)[0] ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={productGallery(product)[0]}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-[10px] uppercase tracking-[0.2em] text-muted">
              No image
            </div>
          )}
        </div>
        <div className="flex items-center justify-between">
          <span className="br-tag text-muted">Digital File</span>
          <span
            className={`br-tag text-cat-${catMeta.color}`}
            style={{ color: `rgb(var(--cat-${catMeta.color}))` }}
          >
            {catMeta.label}
          </span>
        </div>
        <h3 className="br-heading mt-3 text-xl text-paper">{product.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {product.summary}
        </p>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <span className="br-mono text-lg font-medium text-paper">
          {isFree ? "Free" : `$${product.priceUsd}`}
        </span>

        {isFree ? (
          product.fileUrl ? (
            <a
              href={product.fileUrl}
              download
              onClick={(e) => e.stopPropagation()}
              className="bg-brand-cyan px-4 py-2 text-xs font-bold uppercase tracking-widest text-brand-ink transition hover:opacity-90"
            >
              Download
            </a>
          ) : (
            <span className="br-tag text-muted">No file</span>
          )
        ) : (
          <button
            onClick={handleAdd}
            disabled={inCart}
            className="bg-brand-lime px-4 py-2 text-xs font-bold uppercase tracking-widest text-brand-ink transition hover:opacity-90 disabled:cursor-not-allowed disabled:bg-line disabled:text-muted"
          >
            {inCart ? "Added" : "Add"}
          </button>
        )}
      </div>
    </article>
  );
}
