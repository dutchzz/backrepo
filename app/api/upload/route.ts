import { NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

export const runtime = "nodejs";

const IMAGE_TYPES = ["image/png", "image/jpeg", "image/webp", "image/svg+xml"];
const FILE_TYPES = ["application/zip", "application/octet-stream", "model/stl"];
const ALLOWED_EXT = [".png", ".jpg", ".jpeg", ".webp", ".svg", ".stl", ".zip"];

const IMAGE_MAX_BYTES = 5 * 1024 * 1024; // 5MB
const FILE_MAX_BYTES = 50 * 1024 * 1024; // 50MB

const R2_BUCKET = process.env.R2_BUCKET;
const R2_ACCOUNT_ID = process.env.R2_ACCOUNT_ID;
const R2_ACCESS_KEY = process.env.R2_ACCESS_KEY_ID;
const R2_SECRET_KEY = process.env.R2_SECRET_ACCESS_KEY;
const R2_PUBLIC_URL =
  process.env.R2_PUBLIC_URL || "https://pub-01af408da5954c27819a52afe92e7b49.r2.dev";

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

function extOf(filename: string): string {
  const i = filename.lastIndexOf(".");
  return i >= 0 ? filename.slice(i).toLowerCase() : "";
}

export async function POST(request: Request) {
  const form = await request.formData();
  const file = form.get("file");

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }

  const ext = extOf(file.name);
  const isImage = IMAGE_TYPES.includes(file.type) && ALLOWED_EXT.includes(ext);
  const isFile = [...IMAGE_TYPES, ...FILE_TYPES].includes(file.type) || ALLOWED_EXT.includes(ext);

  if (!isImage && !isFile) {
    return NextResponse.json({ error: "Unsupported type" }, { status: 400 });
  }
  if (isImage && file.size > IMAGE_MAX_BYTES) {
    return NextResponse.json({ error: "Image too large (max 5MB)" }, { status: 400 });
  }
  if (!isImage && file.size > FILE_MAX_BYTES) {
    return NextResponse.json({ error: "File too large (max 50MB)" }, { status: 400 });
  }

  const dir = isImage ? "uploads" : "downloads";
  const key = `${dir}/${Date.now()}-${Math.random()
    .toString(36)
    .slice(2, 8)}${ext || ".bin"}`;
  const bytes = Buffer.from(await file.arrayBuffer());

  if (useR2) {
    await r2.send(
      new PutObjectCommand({
        Bucket: R2_BUCKET,
        Key: key,
        Body: bytes,
        ContentType: file.type || "application/octet-stream",
      })
    );
    const base = R2_PUBLIC_URL.replace(/\/$/, "");
    return NextResponse.json({ url: `${base}/${key}` });
  }

  // Local fallback (dev only — not for production / serverless deploys)
  const outDir = path.join(process.cwd(), "public", dir);
  await mkdir(outDir, { recursive: true });
  await writeFile(path.join(outDir, key.replace(`${dir}/`, "")), bytes);
  return NextResponse.json({ url: `/${key}` });
}
