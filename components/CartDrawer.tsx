"use client";

import { useCart } from "./CartProvider";

export function CartDrawer() {
  const { items, subtotal, isOpen, close, remove, openCheckout } = useCart();

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-ink/70 transition-opacity ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={close}
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-sm flex-col border-l border-line bg-ink transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-line p-6">
          <h2 className="br-heading text-lg text-paper">Cart</h2>
          <button
            onClick={close}
            className="br-tag text-muted hover:text-brand-lime"
          >
            Close
          </button>
        </div>

        {items.length === 0 ? (
          <p className="p-6 text-sm text-muted">Your cart is empty.</p>
        ) : (
          <ul className="flex-1 space-y-px overflow-y-auto bg-line">
            {items.map((i) => (
              <li
                key={i.id}
                className="flex items-center justify-between bg-ink p-4"
              >
                <div>
                  <p className="text-sm text-paper">{i.name}</p>
                  <p className="br-mono text-xs text-muted">${i.priceUsd}</p>
                </div>
                <button
                  onClick={() => remove(i.id)}
                  className="br-tag text-muted hover:text-brand-lime"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}

        {items.length > 0 && (
          <div className="border-t border-line p-6">
            <div className="mb-4 flex justify-between text-sm font-bold text-paper">
              <span>Total</span>
              <span className="br-mono">${subtotal}</span>
            </div>
            <button
              onClick={openCheckout}
              className="w-full bg-brand-lime py-3 text-sm font-bold uppercase tracking-widest text-brand-ink transition hover:opacity-90"
            >
              Checkout — Cash App
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
