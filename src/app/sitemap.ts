// ─────────────────────────────────────────────────────────────
//  src/app/sitemap.ts  →  /sitemap.xml
//  Inkluderar nu både / (svenska) och /en (engelska) med
//  alternates-hreflang så Google förstår språkrelationen.
// ─────────────────────────────────────────────────────────────
import type { MetadataRoute } from "next";

const SITE = "https://swegbg.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: `${SITE}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: {
        languages: {
          "sv-SE": `${SITE}/`,
          "en-US": `${SITE}/en`,
        },
      },
    },
    {
      url: `${SITE}/en`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          "sv-SE": `${SITE}/`,
          "en-US": `${SITE}/en`,
        },
      },
    },
  ];
}
