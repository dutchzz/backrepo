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
          <h2 className="text-lg font-extrabold tracking-tightest text-paper">
            Cart
          </h2>
          <button
            onClick={close}
            className="text-xs uppercase tracking-widest text-muted hover:text-paper"
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
                  <p className="text-xs text-muted">${i.priceUsd}</p>
                </div>
                <button
                  onClick={() => remove(i.id)}
                  className="text-xs uppercase tracking-widest text-muted hover:text-paper"
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
              <span>${subtotal}</span>
            </div>
            <button
              onClick={openCheckout}
              className="w-full bg-paper py-3 text-sm font-bold uppercase tracking-widest text-ink transition hover:bg-muted"
            >
              Checkout — Cash App
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
