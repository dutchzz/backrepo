"use client";

import { useEffect, useRef, useState } from "react";
import { useCart } from "./CartProvider";

type CheckoutResult = {
  mode: "square" | "fallback";
  orderId: string;
  total: number;
  cashAppUrl?: string;
  downloadToken?: string;
};

const SQUARE_APP_ID = process.env.NEXT_PUBLIC_SQUARE_APP_ID;
const CASHTAG = process.env.NEXT_PUBLIC_CASHAPP_CASHTAG || "$NWOCOMINGSOON";

export function CashAppCheckout() {
  const { items, subtotal, checkoutOpen, closeCheckout, clear } = useCart();
  const [status, setStatus] = useState<"idle" | "processing" | "done" | "error">(
    "idle"
  );
  const [result, setResult] = useState<CheckoutResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const sdkMounted = useRef(false);

  const handleCheckout = async () => {
    setStatus("processing");
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });
      if (!res.ok) throw new Error("Checkout request failed");
      const data: CheckoutResult = await res.json();
      setResult(data);

      if (data.mode === "fallback" && data.cashAppUrl) {
        window.open(data.cashAppUrl, "_blank", "noopener");
      }
    } catch (e) {
      setStatus("error");
      setError(e instanceof Error ? e.message : "Unknown error");
    } finally {
      setStatus("processing");
    }
  };

  const confirmFallbackPaid = async () => {
    setStatus("processing");
    try {
      const res = await fetch("/api/checkout/confirm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderId: result?.orderId }),
      });
      if (!res.ok) throw new Error("Confirmation failed");
      const data = await res.json();
      setResult((prev) => ({ ...prev!, downloadToken: data.downloadToken }));
      setStatus("done");
    } catch (e) {
      setStatus("error");
      setError(e instanceof Error ? e.message : "Unknown error");
    }
  };

  useEffect(() => {
    if (
      result?.mode === "square" &&
      SQUARE_APP_ID &&
      !sdkMounted.current
    ) {
      sdkMounted.current = true;
      // Square Web Payments SDK mounts the Cash App Pay button here in production.
      // See SPEC.md §5 for the full tokenization + /api/checkout verification flow.
      setStatus("done");
    }
  }, [result]);

  if (!checkoutOpen || items.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 px-6">
      <div className="w-full max-w-md border border-line bg-ink p-8">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-extrabold tracking-tightest text-paper">
            Checkout
          </h2>
          <button
            onClick={closeCheckout}
            className="text-xs uppercase tracking-widest text-muted hover:text-paper"
          >
            Close
          </button>
        </div>

        <ul className="mt-6 space-y-2 border-y border-line py-4">
          {items.map((i) => (
            <li
              key={i.id}
              className="flex justify-between text-sm text-muted"
            >
              <span className="text-paper">{i.name}</span>
              <span>${i.priceUsd}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex justify-between text-sm font-bold text-paper">
          <span>Total</span>
          <span>${subtotal}</span>
        </div>

        <p className="mt-4 text-[11px] leading-relaxed text-muted">
          Payment method: Cash App only. You are purchasing digital STL files.
          No physical goods are sold.
        </p>

        {status !== "done" && (
          <button
            onClick={handleCheckout}
            disabled={status === "processing"}
            className="mt-6 w-full bg-paper py-3 text-sm font-bold uppercase tracking-widest text-ink transition hover:bg-muted disabled:opacity-50"
          >
            {status === "processing" ? "Processing…" : "Pay with Cash App"}
          </button>
        )}

        {result?.mode === "fallback" && status !== "done" && (
          <button
            onClick={confirmFallbackPaid}
            className="mt-3 w-full border border-line py-3 text-xs font-bold uppercase tracking-widest text-muted hover:text-paper"
          >
            I&apos;ve paid — confirm order
          </button>
        )}

        {status === "done" && result?.downloadToken && (
          <div className="mt-6 rounded border border-line p-4 text-sm text-paper">
            Order {result.orderId} confirmed. Your download links are
            available. (Demo token: {result.downloadToken})
          </div>
        )}

        {status === "error" && error && (
          <p className="mt-4 text-xs text-paper">{error}</p>
        )}
      </div>
    </div>
  );
}
