import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SiteSettingsProvider } from "@/components/SiteSettingsProvider";
import { ProductsProvider } from "@/components/ProductsProvider";
import { CartProvider } from "@/components/CartProvider";
import { AgeGate } from "@/components/AgeGate";

export const metadata: Metadata = {
  title: "BACK REPO — Digital STL Files",
  description:
    "Digital STL design files for 3D printing. Digital assets only — no physical goods sold.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <SiteSettingsProvider>
            <ProductsProvider>
              <CartProvider>
                <AgeGate />
                {children}
              </CartProvider>
            </ProductsProvider>
          </SiteSettingsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
