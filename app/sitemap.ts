import type { MetadataRoute } from "next";

const BASE = "https://backrepo-liart.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE + "/", lastModified: new Date() },
    { url: BASE + "/legal/terms", lastModified: new Date() },
    { url: BASE + "/legal/disclaimer", lastModified: new Date() },
    { url: BASE + "/legal/privacy", lastModified: new Date() },
  ];
}