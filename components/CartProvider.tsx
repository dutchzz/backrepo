"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type CartItem = {
  id: string;
  name: string;
  priceUsd: number;
};

type CartContextValue = {
  items: CartItem[];
  subtotal: number;
  isOpen: boolean;
  checkoutOpen: boolean;
  add: (item: CartItem) => void;
  remove: (id: string) => void;
  clear: () => void;
  open: () => void;
  close: () => void;
  openCheckout: () => void;
  closeCheckout: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const value = useMemo<CartContextValue>(() => {
    const add = (item: CartItem) =>
      setItems((prev) =>
        prev.some((i) => i.id === item.id) ? prev : [...prev, item]
      );
    const remove = (id: string) =>
      setItems((prev) => prev.filter((i) => i.id !== id));
    const clear = () => setItems([]);
    const subtotal = items.reduce((sum, i) => sum + i.priceUsd, 0);
    const openCheckout = () => {
      setIsOpen(false);
      setCheckoutOpen(true);
    };
    const closeCheckout = () => setCheckoutOpen(false);

    return {
      items,
      subtotal,
      isOpen,
      checkoutOpen,
      add,
      remove,
      clear,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      openCheckout,
      closeCheckout,
    };
  }, [items, isOpen, checkoutOpen]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
