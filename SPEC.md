# BACK REPO — Technical Specification & Front-End Architecture

> Minimalist e-commerce landing page for the sale of **digital STL files** (3D-printable
> component designs). No physical goods are sold.

## 1. Product & Compliance Posture

| Item | Definition |
|------|------------|
| **What is sold** | Digital downloadable `.stl` files — design geometry only. |
| **What is NOT sold** | Any physical firearm, firearm frame, receiver, component, or printed object. |
| **Buyer attestation** | Buyer confirms they are 18+ and that downloading/printing is lawful in their jurisdiction. |
| **Regulatory stance** | Files are provided "as-is" for personal, lawful use. Operator is responsible for local compliance. |

This position is surfaced in three mandatory surfaces: the **age gate**, the **checkout
confirmation**, and the **persistent footer disclaimer**.

## 2. Design System (Minimalist)

- **Palette:** monochrome. `--bg #0a0a0a`, `--fg #f5f5f5`, one neutral accent `#878787`.
- **Type:** system sans (`Helvetica Neue`/Arial fallback). One display weight (800) for the
  hero, one body weight (400). No decorative fonts.
- **Spacing:** 8px grid, generous negative space, max content width 1200px.
- **Motion:** single restrained intro fade/rise; no parallax, no gimmicks.
- **Tone:** factual labels only. No slogans, no urgency/Scarcity copy, no emojis.

## 3. Information Architecture

```
/                     Landing: intro hero → product grid → compliance footer
/legal/terms          Terms of Service (placeholder)
/legal/disclaimer     Legal disclaimer & digital-goods notice (placeholder)
/legal/privacy        Privacy policy (placeholder)
/api/checkout         Server route: creates Cash App Pay request (Square)
```

## 4. Component Breakdown

| Component | Responsibility |
|-----------|----------------|
| `AgeGate` | Modal gate on first visit; stores consent in `localStorage`; blocks content until 18+. |
| `Hero` | Full-screen intro with "BACK REPO" wordmark; auto-dismisses to reveal grid. |
| `ProductGrid` | Responsive grid of `ProductCard`s from a static product catalog. |
| `ProductCard` | Title, short factual spec line, price, "Add" action; tag badge "DIGITAL FILE". |
| `CartProvider` | Client context: line items, subtotal, open/close drawer. |
| `CartDrawer` | Slide-in summary + "Checkout with Cash App" CTA. |
| `CashAppCheckout` | Initiates Cash App Pay (Square Web Payments SDK) or `cash.app` fallback; on success unlocks download. |
| `SiteFooter` | Links to legal pages + persistent compliance disclaimer. |
| `LegalPage` | Shared layout for placeholder legal documents. |

## 5. Payment Integration — Cash App (sole method)

Production path uses **Cash App Pay via the Square Web Payments SDK**:

1. `CartDrawer` → "Checkout" calls `POST /api/checkout` with line items.
2. API route (server) creates a Square Payment with `cashAppPay` source type and returns a
   `paymentId` / redirect token.
3. Client mounts `CashAppPay` button, user authorizes in Cash App, webhook/confirmation
   verifies payment.
4. On verified payment, the API returns signed, time-limited download URLs for the STLs.

Fallback (no Square keys configured): a `$cashtag` deep link with amount + order note, plus a
manual "I've paid" confirmation that queues the order for review. Clearly labeled as fallback.

Environment variables:
```
SQUARE_APP_ID=        # Square application ID
SQUARE_LOCATION_ID=   # Square location ID
SQUARE_ACCESS_TOKEN=  # server-only
CASHAPP_CASHTAG=      # e.g. $NWOCOMINGSOON (fallback)
```

## 6. Tech Stack

- **Framework:** Next.js 14 (App Router) — static landing, dynamic API route for checkout.
- **Language:** TypeScript.
- **Styling:** Tailwind CSS (custom monochrome theme).
- **State:** React Context for cart (no external state lib needed at this scale).
- **Payments:** Square Web Payments SDK (`@square/web-payments-sdk`) for Cash App Pay.
- **Persistence:** `localStorage` for age gate + cart.

## 7. Implementation Strategy

1. Scaffold config (`package.json`, `tailwind.config.ts`, `tsconfig.json`, `next.config.mjs`).
2. Build design tokens in `globals.css` + Tailwind theme.
3. Compose landing from the components above; reuse the existing intro hero concept.
4. Implement Cash App checkout with graceful fallback; keep secrets server-side.
5. Add age gate + legal placeholders before launch; legal review required pre-publish.

> Note: This spec is a technical/UX blueprint, not legal advice. Obtain qualified counsel
> before operating in any jurisdiction.
