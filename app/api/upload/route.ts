import { NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

export const runtime = "nodejs";

const MAX_BYTES = 5 * 1024 * 1024; // 5MB
const ALLOWED = ["image/png", "image/jpeg", "image/webp", "image/svg+xml"];

const R2_BUCKET = process.env.R2_BUCKET;
const R2_ACCOUNT_ID = process.env.R2_ACCOUNT_ID;
const R2_ACCESS_KEY = process.env.R2_ACCESS_KEY_ID;
const R2_SECRET_KEY = process.env.R2_SECRET_ACCESS_KEY;
const R2_PUBLIC_URL = process.env.R2_PUBLIC_URL; // e.g. https://files.yourdomain.com

const r2 = new S3Client({
  region: "auto",
  endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: R2_ACCESS_KEY ?? "",
    secretAccessKey: R2_SECRET_KEY ?? "",
  },
});

const useR2 =
  Boolean(R2_BUCKET) &&
  Boolean(R2_ACCOUNT_ID) &&
  Boolean(R2_ACCESS_KEY) &&
  Boolean(R2_SECRET_KEY);

function extOf(filename: string) {
  const i = filename.lastIndexOf(".");
  return i >= 0 ? filename.slice(i) : "";
}

export async function POST(request: Request) {
  const form = await request.formData();
  const file = form.get("file");

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }
  if (!ALLOWED.includes(file.type)) {
    return NextResponse.json({ error: "Unsupported type" }, { status: 400 });
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json({ error: "File too large" }, { status: 400 });
  }

  const ext = extOf(file.name) || ".bin";
  const key = `uploads/${Date.now()}-${Math.random()
    .toString(36)
    .slice(2, 8)}${ext}`;
  const bytes = Buffer.from(await file.arrayBuffer());

  if (useR2) {
    await r2.send(
      new PutObjectCommand({
        Bucket: R2_BUCKET,
        Key: key,
        Body: bytes,
        ContentType: file.type,
      })
    );
    const base = R2_PUBLIC_URL
      ? R2_PUBLIC_URL.replace(/\/$/, "")
      : `https://${R2_BUCKET}.r2.dev`;
    return NextResponse.json({ url: `${base}/${key}` });
  }

  // Local fallback (dev only — not for production / serverless deploys)
  const dir = path.join(process.cwd(), "public", "uploads");
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, key.replace("uploads/", "")), bytes);
  return NextResponse.json({ url: `/${key}` });
}
