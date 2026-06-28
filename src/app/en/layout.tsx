import type { Metadata } from "next";
import { jsonLdGraphEN } from "@/lib/jsonld.en";

const SITE_URL = "https://swegbg.com";

// ─────────────────────────────────────────────────────────────
//  ENGELSK METADATA för /en
//  Egen titel, beskrivning, keywords, canonical och hreflang.
//  Detta är vad som gör att Google rankar /en på engelska sökningar.
// ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    default: "SweGBG — Web apps, systems & websites you own | Gothenburg",
    template: "%s | SweGBG",
  },
  description:
    "Web-app agency in Gothenburg, Sweden. We build custom web apps, business systems and websites in Next.js — you own all the code, GitHub, Vercel and Supabase from day 1. No platform lock-in, no binding contracts.",
  keywords: [
    "web app development",
    "web application agency",
    "build a web app",
    "next.js developer",
    "react developer sweden",
    "fullstack developer gothenburg",
    "custom web application",
    "business system development",
    "booking system",
    "ecommerce development",
    "customer portal",
    "web agency sweden",
    "website you own",
    "brand web design",
  ],
  alternates: {
    canonical: "/en",
    languages: {
      "sv-SE": "/",
      "en-US": "/en",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["sv_SE"],
    url: `${SITE_URL}/en`,
    siteName: "SweGBG",
    title: "SweGBG — Web apps, systems & websites you own",
    description:
      "Custom web apps, business systems and websites in Next.js. You own all the code, GitHub, Vercel & Supabase from day 1. No platform lock-in.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SweGBG — Web-app agency in Gothenburg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SweGBG — Web apps & systems you own",
    description:
      "Custom web apps and websites in Next.js. You own everything from day 1.",
    images: ["/og-image.png"],
    creator: "@DIN_X_HANDLE", // ← byt till din riktiga X-handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function ENLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Engelsk strukturerad data — egen @graph för /en */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraphEN) }}
      />
      {children}
    </>
  );
}
