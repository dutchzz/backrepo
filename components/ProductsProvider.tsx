"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { PRODUCTS, type Product } from "@/lib/products";

const PRODUCTS_KEY = "br-products";

type ProductsContextValue = {
  products: Product[];
  add: (p: Omit<Product, "id">) => void;
  update: (id: string, patch: Partial<Product>) => void;
  remove: (id: string) => void;
  reset: () => void;
};

const ProductsContext = createContext<ProductsContextValue | null>(null);

function load(): Product[] {
  if (typeof window === "undefined") return PRODUCTS;
  try {
    const raw = window.localStorage.getItem(PRODUCTS_KEY);
    if (!raw) return PRODUCTS;
    const parsed = JSON.parse(raw) as Product[];
    return Array.isArray(parsed) && parsed.length ? parsed : PRODUCTS;
  } catch {
    return PRODUCTS;
  }
}

export function ProductsProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>(PRODUCTS);

  useEffect(() => {
    setProducts(load());
  }, []);

  const persist = (next: Product[]) => {
    setProducts(next);
    window.localStorage.setItem(PRODUCTS_KEY, JSON.stringify(next));
  };

  const add = (p: Omit<Product, "id">) => {
    const id = p.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 32);
    persist([...products, { ...p, id: id || `item-${Date.now()}` }]);
  };

  const update = (id: string, patch: Partial<Product>) =>
    persist(products.map((p) => (p.id === id ? { ...p, ...patch } : p)));

  const remove = (id: string) =>
    persist(products.filter((p) => p.id !== id));

  const reset = () => persist(PRODUCTS);

  return (
    <ProductsContext.Provider value={{ products, add, update, remove, reset }}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  const ctx = useContext(ProductsContext);
  if (!ctx)
    throw new Error("useProducts must be used within ProductsProvider");
  return ctx;
}
