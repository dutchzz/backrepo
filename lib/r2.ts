import { S3Client } from "@aws-sdk/client-s3";

export const R2_BUCKET = process.env.R2_BUCKET;
export const R2_ACCOUNT_ID = process.env.R2_ACCOUNT_ID;
const R2_ACCESS_KEY = process.env.R2_ACCESS_KEY_ID;
const R2_SECRET_KEY = process.env.R2_SECRET_ACCESS_KEY;
export const R2_PUBLIC_URL =
  process.env.R2_PUBLIC_URL || "https://pub-01af408da5954c27819a52afe92e7b49.r2.dev";

export const r2Configured = Boolean(
  R2_BUCKET && R2_ACCOUNT_ID && R2_ACCESS_KEY && R2_SECRET_KEY
);

export const r2 = new S3Client({
  region: "auto",
  endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: R2_ACCESS_KEY ?? "",
    secretAccessKey: R2_SECRET_KEY ?? "",
  },
});
