export type Lang = "sv" | "en";

type Dict = Record<string, { sv: string; en: string }>;

export const translations: Dict = {
  navTjanster: { sv: "Tjänster", en: "Services" },
  navProcess: { sv: "Process", en: "Process" },
  navArbete: { sv: "Arbete", en: "Work" },
  navCta: { sv: "> Starta projekt", en: "> Start a project" },

  heroEyebrow: {
    sv: "// fullstack utveckling — göteborg",
    en: "// fullstack development — gothenburg",
  },
  heroH1Pre: { sv: "Vi bygger hemsidor som ", en: "We build websites that " },
  heroGlitchWord: { sv: "kompilerar", en: "compile" },
  heroH1Mid: { sv: " till ", en: " into " },
  heroH1Glow: { sv: "fler kunder.", en: "more customers." },
  heroLead: {
    sv: "Vi bygger skräddarsydda hemsidor och affärssystem för småföretag — med rötterna i Göteborg och kunder över hela världen. Snabb leverans, ingen bindningstid, och du äger all kod fullt ut. Ingen mall. Ingen låst plattform.",
    en: "We build custom websites and business systems for small businesses — rooted in Gothenburg, serving clients worldwide. Fast delivery, no lock-in period, and you fully own the code. No templates. No locked-in platform.",
  },
  heroCtaPrimary: { sv: "▸ Boka kostnadsfri demo", en: "▸ Book a free demo" },
  heroCtaGhost: { sv: "Se tjänster", en: "See services" },
  terminalTitle: { sv: "swegbg — zsh", en: "swegbg — zsh" },

  termLine2: { sv: "✓ Installerar beroenden...", en: "✓ Installing dependencies..." },
  termLine4: { sv: "✓ Kund äger repo från dag 1", en: "✓ Client owns the repo from day 1" },
  termLine6: { sv: "✓ Live på 2.4s", en: "✓ Live in 2.4s" },

  tjansterEyebrow: { sv: "// vad vi bygger", en: "// what we build" },
  tjansterH2: { sv: "Tre nivåer. Från lansering till komplett system.", en: "Three tiers. From launch to a complete system." },
  tjansterP: {
    sv: "Från din första hemsida till ett system som driver hela verksamheten — du väljer hur långt du vill gå.",
    en: "From your first website to a system that runs your whole business — you choose how far you want to go.",
  },

  processEyebrow: { sv: "// så går det till", en: "// how it works" },
  processH2: { sv: "Du ser resultatet innan du betalar.", en: "You see the result before you pay." },

  step1Num: { sv: "01 — DEMO", en: "01 — DEMO" },
  step1H: { sv: "Vi bygger en levande demo", en: "We build a live demo" },
  step1P: {
    sv: "Inget säljsnack. Du ser en riktig, klickbar version av din sida först.",
    en: "No sales talk. You see a real, clickable version of your site first.",
  },
  step2Num: { sv: "02 — ANPASSA", en: "02 — ADAPT" },
  step2H: { sv: "Färger, namn, innehåll", en: "Colors, name, content" },
  step2P: {
    sv: "Vi justerar demon efter ditt varumärke tills den känns som din.",
    en: "We adjust the demo to your brand until it feels like yours.",
  },
  step3Num: { sv: "03 — ÄGANDE", en: "03 — OWNERSHIP" },
  step3H: { sv: "Du äger koden direkt", en: "You own the code right away" },
  step3P: {
    sv: "GitHub, Vercel och Supabase registreras i ditt namn från start.",
    en: "GitHub, Vercel and Supabase are registered in your name from the start.",
  },
  step4Num: { sv: "04 — LANSERING", en: "04 — LAUNCH" },
  step4H: { sv: "Live, snabb och din", en: "Live, fast and yours" },
  step4P: {
    sv: "Ingen plattformslåsning. Ingen månadsavgift till ett tredjepartsverktyg.",
    en: "No platform lock-in. No monthly fee to a third-party tool.",
  },

  arbeteEyebrow: { sv: "// referensprojekt", en: "// reference projects" },
  arbeteH2: { sv: "Byggt, levererat, i drift.", en: "Built, delivered, in production." },

  work1Desc: {
    sv: "Komplett bokningssystem för frisörsalong med adminpanel, kundregister, schemaläggning och automatiska påminnelser via mejl.",
    en: "Complete booking system for a hair salon with admin panel, client records, scheduling and automated email reminders.",
  },
  work3Desc: {
    sv: "En verkstad med kontaktformulär, medlemsinloggning och eget bokningssystem — allt samlat i ett sammanhängande system.",
    en: "A workshop site with a contact form, member login and its own booking system — all in one connected system.",
  },
  work4Desc: {
    sv: "Gårdsbutik med eget sortiment, färdiga matlådor och beställningsflöde — byggt för att kopplas till checkout. Tvåspråkig (SE/EN).",
    en: "Farm shop with its own product range, ready-made food boxes and an order flow — built to connect to checkout. Bilingual (SE/EN).",
  },
  demosLabel: { sv: "Demos", en: "Demos" },
  demoBadge: { sv: "Landing Page", en: "Landing Page" },

  finalH2: { sv: "Redo att se din sida ta form?", en: "Ready to see your site take shape?" },
  finalP: {
    sv: "Skicka ett meddelande — du får en riktig demo innan något kostar en krona.",
    en: "Send a message — you get a real demo before anything costs a krona.",
  },
  finalCta: { sv: "▸ Starta ditt projekt", en: "▸ Start your project" },

  tierUniversalNote: {
    sv: "Engångsprojekt. Ingen prenumeration. Full kodägande.",
    en: "One-time project. No subscription. Full code ownership.",
  },
  footerLocation: { sv: "Göteborg, Sverige — Fullstack-utveckling", en: "Gothenburg, Sweden — Fullstack development" },
};
