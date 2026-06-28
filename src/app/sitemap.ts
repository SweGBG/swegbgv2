// ─────────────────────────────────────────────────────────────
//  src/app/sitemap.ts  →  genererar /sitemap.xml automatiskt
//
//  OBS: SweGBGv2 verkar vara en ONE-PAGE-sajt (Tjänster/Process/
//  Arbete är sektioner med #ankare, inte egna routes). Då räcker
//  i princip startsidan i sitemapen — sökmotorer indexerar inte
//  #ankare som separata sidor.
//
//  Jag lämnar ändå en lista du enkelt kan utöka OM/när du delar
//  upp sajten i riktiga undersidor (t.ex. /tjanster, /portfolio).
//  Avkommentera de rader som motsvarar sidor som FAKTISKT finns —
//  annars hamnar 404-URL:er i sitemapen, vilket skadar förtroendet.
// ─────────────────────────────────────────────────────────────
import type { MetadataRoute } from "next";

const SITE = "https://swegbg.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: {
    path: string;
    priority: number;
    freq: "weekly" | "monthly" | "yearly";
  }[] = [
    { path: "/", priority: 1.0, freq: "weekly" },

    // ── Avkommentera endast om sidan finns som egen route ──
    // { path: "/en",        priority: 0.8, freq: "weekly"  },
    // { path: "/tjanster",  priority: 0.9, freq: "monthly" },
    // { path: "/portfolio", priority: 0.9, freq: "weekly"  },
    // { path: "/priser",    priority: 0.8, freq: "monthly" },
    // { path: "/kontakt",   priority: 0.7, freq: "monthly" },
    // { path: "/om",        priority: 0.6, freq: "monthly" },
  ];

  return routes.map((r) => ({
    url: `${SITE}${r.path}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }));
}
