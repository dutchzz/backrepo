import { NextResponse } from "next/server";

type LineItem = { id: string; name: string; priceUsd: number };

const CASHTAG = process.env.NEXT_PUBLIC_CASHAPP_CASHTAG || "$NWOCOMINGSOON";
const SQUARE_APP_ID = process.env.NEXT_PUBLIC_SQUARE_APP_ID;
const SQUARE_ACCESS_TOKEN = process.env.SQUARE_ACCESS_TOKEN;

function makeOrderId() {
  return "BR-" + Math.random().toString(36).slice(2, 10).toUpperCase();
}

export async function POST(request: Request) {
  let body: { items?: LineItem[] };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  const items = body.items ?? [];
  if (items.length === 0) {
    return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
  }

  const total = items.reduce((sum, i) => sum + (i.priceUsd || 0), 0);
  const orderId = makeOrderId();

  // Production: when Square credentials are present, create a Payment with
  // cashAppPay source type via the Square SDK and return the payment id.
  // (Server SDK not bundled in this scaffold; plug in @square/square here.)
  if (SQUARE_APP_ID && SQUARE_ACCESS_TOKEN) {
    return NextResponse.json({
      mode: "square",
      orderId,
      total,
      // paymentId: <from Square>,
    });
  }

  // Fallback: deep link to Cash App with amount + order note.
  const note = encodeURIComponent(`BACK REPO order ${orderId}`);
  const cashAppUrl = `https://cash.app/${CASHTAG.replace(
    /^\$/,
    ""
  )}/${total}?note=${note}`;

  return NextResponse.json({
    mode: "fallback",
    orderId,
    total,
    cashAppUrl,
  });
}
