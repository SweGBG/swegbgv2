import type { Metadata, Viewport } from "next";
import { Chakra_Petch, IBM_Plex_Mono, Inter } from "next/font/google";
import { LangProvider } from "@/context/LangContext";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SweGBG Trading — Hemsidor & Webappar i Next.js",
    template: "%s | SweGBG Trading",
  },
  description:
    "Vi bygger skräddarsydda hemsidor och affärssystem i Next.js. Inga mallar, ingen prenumeration — du äger koden fullt ut från dag ett.",
  keywords: [
    "webbyrå Göteborg",
    "Next.js utveckling",
    "skräddarsydd hemsida",
    "webbapp småföretag",
    "hemsida restaurang",
    "affärssystem webb",
  ],
  authors: [{ name: "SweGBG Trading", url: SITE_URL }],
  creator: "SweGBG Trading",
  publisher: "SweGBG Trading",
  applicationName: "SweGBG Trading",
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
    alternateLocale: "en_US",
    url: SITE_URL,
    siteName: "SweGBG Trading",
    title: "SweGBG Trading — Hemsidor & Webappar i Next.js",
    description:
      "Skräddarsydda hemsidor och affärssystem i Next.js. Inga mallar, ingen prenumeration — du äger koden från dag ett.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SweGBG Trading",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SweGBG Trading — Hemsidor & Webappar i Next.js",
    description:
      "Skräddarsydda hemsidor och affärssystem i Next.js. Du äger koden från dag ett.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },



  manifest: "/manifest.webmanifest",

  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },

  verification: {
    // google: "din-google-verification-kod",
  },
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
      <body
        className={`${chakra.variable} ${plexMono.variable} ${inter.variable} bg-bg text-ink font-sans overflow-x-hidden`}
      >
        <LangProvider>{children}</LangProvider>
        <Analytics />
      </body>
    </html>
  );
}