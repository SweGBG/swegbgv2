import type { Metadata, Viewport } from "next";
import { Chakra_Petch, IBM_Plex_Mono, Inter } from "next/font/google";
import { LangProvider } from "@/context/LangContext";
import { Analytics } from "@vercel/analytics/next";
import { jsonLdGraph } from "@/lib/jsonld";
import "./globals.css";

// ─── FONTER (oförändrat från din nuvarande layout) ───────────
const chakra = Chakra_Petch({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-chakra",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const SITE_URL = "https://swegbg.com";

// ─────────────────────────────────────────────────────────────
//  METADATA
//  Bred positionering: webbappbyrå + fullstack + systemutvecklare
//  + brand/livsstil. Webbapp-orden lyfts fram utan att utesluta
//  kunder som söker "hemsida".
// ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "SweGBG — Webbappar, system & hemsidor du äger | Göteborg",
    template: "%s | SweGBG",
  },
  description:
    "Webbappbyrå i Göteborg. Vi bygger skräddarsydda webbappar, affärssystem och hemsidor i Next.js — du äger all kod, GitHub, Vercel och Supabase från dag 1. Ingen plattformslåsning, inga bindande avtal.",
  keywords: [
    // Webbapp-kluster (din prio)
    "webbapp",
    "webbappar",
    "webbapplikation",
    "bygga webbapp",
    "webbapp utveckling göteborg",
    "fullstack utvecklare göteborg",
    "next.js utveckling",
    "react utvecklare sverige",
    // System / affärsnytta
    "affärssystem webb",
    "bokningssystem",
    "e-handel utveckling",
    "kundportal",
    "skräddarsydd webbplats",
    // Klassiska "hemsida"-sökningar (utesluter inga kunder)
    "webbyrå göteborg",
    "webbutvecklare göteborg",
    "bygga hemsida göteborg",
    "hemsida småföretag",
    // Brand / livsstil
    "brand webbdesign",
    "varumärke hemsida",
  ],
  authors: [{ name: "Lenn", url: SITE_URL }],
  creator: "Lenn — SweGBG",
  publisher: "SweGBG",
  applicationName: "SweGBG",
  category: "technology",
  alternates: {
    canonical: "/",
    languages: {
      "sv-SE": "/",
      "en-US": "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "sv_SE",
    alternateLocale: ["en_US"],
    url: SITE_URL,
    siteName: "SweGBG",
    title: "SweGBG — Webbappar, system & hemsidor du äger",
    description:
      "Skräddarsydda webbappar, affärssystem och hemsidor i Next.js. Du äger all kod, GitHub, Vercel & Supabase från dag 1. Ingen plattformslåsning.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SweGBG — Webbappbyrå i Göteborg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SweGBG — Webbappar & system du äger",
    description:
      "Skräddarsydda webbappar och hemsidor i Next.js. Du äger allt från dag 1.",
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
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.webmanifest",
  formatDetection: { telephone: false, address: false, email: false },
  // verification: { google: "[GOOGLE_SEARCH_CONSOLE_TOKEN]" }, // avkommentera vid behov
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0e1a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className="scroll-smooth">
      <head>
        {/* ─── STRUKTURERAD DATA (det AI-motorerna faktiskt läser) ─── */}
        {/* En enda @graph med Organization + WebSite + Service + FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />
      </head>
      <body
        className={`${chakra.variable} ${plexMono.variable} ${inter.variable} bg-bg text-ink font-sans overflow-x-hidden`}
      >
        <LangProvider>{children}</LangProvider>
        <Analytics />
      </body>
    </html>
  );
}
