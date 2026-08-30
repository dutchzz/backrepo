import { NextResponse } from "next/server";
import { GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { r2, r2Configured, R2_BUCKET } from "@/lib/r2";

export const runtime = "nodejs";

const RESOURCES = new Set(["products", "settings", "theme"]);

type ResourceName = "products" | "settings" | "theme";

export async function GET(request: Request) {
  const resource = new URL(request.url).searchParams.get("resource");
  if (!resource || !RESOURCES.has(resource)) {
    return NextResponse.json({ error: "Bad resource" }, { status: 400 });
  }
  if (!r2Configured) return NextResponse.json({ configured: false });

  try {
    const obj = await r2.send(
      new GetObjectCommand({
        Bucket: R2_BUCKET,
        Key: `data/${resource}.json`,
      })
    );
    const text = await obj.Body!.transformToString();
    return NextResponse.json({ configured: true, value: JSON.parse(text) });
  } catch {
    // Key not found yet — caller bootstraps it.
    return NextResponse.json({ configured: true, value: null });
  }
}

export async function POST(request: Request) {
  const body = (await request.json()) as {
    resource?: ResourceName;
    value?: unknown;
  };
  const { resource, value } = body;
  if (!resource || !RESOURCES.has(resource)) {
    return NextResponse.json({ error: "Bad resource" }, { status: 400 });
  }
  if (!r2Configured) return NextResponse.json({ configured: false });

  await r2.send(
    new PutObjectCommand({
      Bucket: R2_BUCKET,
      Key: `data/${resource}.json`,
      Body: JSON.stringify(value),
      ContentType: "application/json",
    })
  );
  return NextResponse.json({ ok: true });
}
