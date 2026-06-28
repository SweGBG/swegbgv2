// ─────────────────────────────────────────────────────────────
//  src/app/robots.ts  →  genererar /robots.txt automatiskt
//
//  STRATEGI: max synlighet. Vi släpper in ALLA AI-crawlers,
//  både tränings- och sökbottar — vi vill bli citerade i
//  ChatGPT, Claude, Perplexity, Gemini och Copilot, inte blockerade.
//
//  Varför explicita namn när "*" redan tillåter allt?
//  Vissa CDN/WAF-lager (t.ex. Cloudflares "Block AI Bots") kan
//  blockera AI-bottar tyst. Explicita allow-regler är ett tydligt
//  och dokumenterat ställningstagande. Lägg märke till att om du
//  senare aktiverar Cloudflare-skydd måste du tillåta dem DÄR också.
// ─────────────────────────────────────────────────────────────
import type { MetadataRoute } from "next";

const SITE = "https://www.swegbg.com";

// Privata ytor som inte ska indexeras (justera efter SweGBGv2)
const DISALLOW = ["/admin", "/api", "/dashboard"];

// Alla relevanta AI-crawlers vi uttryckligen vill släppa in.
const AI_BOTS = [
  // OpenAI
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  // Anthropic
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  // Perplexity
  "PerplexityBot",
  "Perplexity-User",
  // Google AI (separat från Googlebot)
  "Google-Extended",
  "GoogleOther",
  // Apple, Microsoft, Amazon, Meta, Common Crawl, m.fl.
  "Applebot",
  "Applebot-Extended",
  "Amazonbot",
  "Bingbot",
  "Meta-ExternalAgent",
  "CCBot",
  "DuckAssistBot",
  "MistralAI-User",
  "cohere-ai",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Standard: alla crawlers får allt utom privata ytor.
      {
        userAgent: "*",
        allow: "/",
        disallow: DISALLOW,
      },
      // Explicit allow för varje AI-crawler (samma disallow-skydd).
      {
        userAgent: AI_BOTS,
        allow: "/",
        disallow: DISALLOW,
      },
    ],
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  };
}
