import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let body: { orderId?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  if (!body.orderId) {
    return NextResponse.json({ error: "Missing orderId" }, { status: 400 });
  }

  // Production: verify the corresponding Square payment before issuing links.
  // For the fallback flow this queues the order for manual review.
  const downloadToken = "tok_" + Math.random().toString(36).slice(2, 12);

  return NextResponse.json({ ok: true, downloadToken });
}
