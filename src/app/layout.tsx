import type { Metadata } from "next";
import { Chakra_Petch, IBM_Plex_Mono, Inter } from "next/font/google";
import { LangProvider } from "@/context/LangContext";
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

export const metadata: Metadata = {
  title: "SweGBG Trading — Hemsidor & Webappar i Next.js",
  description:
    "Vi bygger skräddarsydda hemsidor och affärssystem i Next.js. Inga mallar, ingen prenumeration — du äger koden fullt ut från dag ett.",
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
      </body>
    </html>
  );
}
