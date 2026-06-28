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
    sv: "Skräddarsydda hemsidor och webappar som driver bokningar, leads och försäljning — och automatiserar arbetet däremellan. Du äger all kod. Ingen mall, ingen låst plattform.",
    en: "Custom websites and web apps that drive bookings, leads and sales — and automate the work in between. You own all the code. No templates, no locked-in platform.",
  },
  bannerKicker: { sv: "Från idé till live", en: "From idea to live" },
  bannerItem1Title: { sv: "Du äger koden", en: "You own the code" },
  bannerItem1Sub: { sv: "Full källkod, noll inlåsning", en: "Full source, zero lock-in" },
  bannerItem2Title: { sv: "Automatiserat", en: "Automated" },
  bannerItem2Sub: { sv: "Manuellt arbete bort", en: "Manual work, gone" },
  bannerItem3Title: { sv: "Hemsida & webapp", en: "Site & web app" },
  bannerItem3Sub: { sv: "Skräddarsytt, inte mall", en: "Custom, not template" },
  bannerItem4Title: { sv: "Göteborg → världen", en: "Gothenburg → world" },
  bannerItem4Sub: { sv: "Lokala rötter, global räckvidd", en: "Local roots, global reach" },

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
    sv: "Demo-e-butik med produktkatalog, varukorg och kassaflöde — plus en adminsida med custom-byggd prisbevakare via eget API. Från skyltfönster till orderhantering i ett system.",
    en: "Demo e-commerce store with product catalog, cart and checkout flow — plus an admin panel with a custom-built price tracker via its own API. From storefront to order handling in one system.",
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

  faqEyebrow: { sv: "// faq", en: "// faq" },
  faqH2: { sv: "Vanliga frågor", en: "Frequently asked questions" },

  faq1Q: { sv: "Vad gör SweGBG?", en: "What does SweGBG do?" },
  faq1A: {
    sv: "SweGBG är en webbappbyrå i Göteborg som bygger skräddarsydda webbappar, affärssystem och hemsidor i Next.js och React. Vi gör allt från snabba landningssidor till fullstack-system med databas, inloggning, betalningar och adminpanel. Kunden äger all kod, GitHub, Vercel och Supabase från dag 1.",
    en: "SweGBG is a web-app agency in Gothenburg that builds custom web apps, business systems and websites in Next.js and React. We do everything from fast landing pages to fullstack systems with database, login, payments and an admin panel. The client owns all the code, GitHub, Vercel and Supabase from day 1.",
  },

  faq2Q: {
    sv: "Vad är skillnaden mellan en hemsida och en webbapp?",
    en: "What's the difference between a website and a web app?",
  },
  faq2A: {
    sv: "En hemsida visar information. En webbapp gör saker — den har inloggning, databas, bokningar, betalningar, kundkonton eller ett adminsystem bakom kulisserna. SweGBG bygger båda, men specialiteten är riktiga webbappar och affärssystem som ersätter manuella arbetsflöden. Allt levereras som kod du själv äger.",
    en: "A website displays information. A web app does things — it has login, a database, bookings, payments, customer accounts or an admin system behind the scenes. SweGBG builds both, but the specialty is real web apps and business systems that replace manual workflows. Everything is delivered as code you own yourself.",
  },

  faq3Q: { sv: "Vilka typer av projekt bygger ni?", en: "What kinds of projects do you build?" },
  faq3A: {
    sv: "I princip vad som helst som körs i webbläsaren: bokningssystem, e-handel, kundportaler, medlemsplattformar, CRM, dashboards och skräddarsydda affärssystem — samt professionella hemsidor och landningssidor för varumärken och egenföretagare. Allt byggs efter ditt behov, och vi kopplar in vilka externa tjänster och API:er du vill. Vi jobbar med allt från småföretag och restauranger till varumärken, e-handlare och större bolag.",
    en: "Essentially anything that runs in the browser: booking systems, e-commerce, customer portals, membership platforms, CRMs, dashboards and custom business systems — as well as professional websites and landing pages for brands and sole traders. Everything is built to your needs, and we integrate whatever external services and APIs you want. We work with everything from small businesses and restaurants to brands, e-commerce companies and larger organizations.",
  },

  faq4Q: {
    sv: "Äger jag koden till min webbapp eller hemsida?",
    en: "Do I own the code to my web app or website?",
  },
  faq4A: {
    sv: "Ja. Du äger all kod, ditt GitHub-repo, ditt Vercel-konto och din Supabase-databas från första dagen. Det finns ingen plattformslåsning och inga bindande avtal. Du hyr inte din digitala närvaro — du äger den.",
    en: "Yes. You own all the code, your GitHub repo, your Vercel account and your Supabase database from day one. There's no platform lock-in and no binding contracts. You don't rent your digital presence — you own it.",
  },

  faq5Q: {
    sv: "Kan ni skräddarsy lösningen och koppla in egna API:er?",
    en: "Can you tailor the solution and integrate custom APIs?",
  },
  faq5A: {
    sv: "Ja — det är hela poängen. Eftersom vi bygger med riktig kod (inte en mall) kan vi anpassa precis efter din verksamhet och integrera vilken tjänst som helst som har ett API: bokningskalendrar, bokföring, lagersystem, CRM, e-post, SMS, AI-funktioner, kartor, eller en intern tjänst du redan använder. Behöver du något ovanligt? Om det finns ett API, kan vi koppla in det.",
    en: "Yes — that's the whole point. Because we build with real code (not a template), we can tailor everything to your business and integrate any service that has an API: booking calendars, accounting, inventory systems, CRM, email, SMS, AI features, maps, or an internal tool you already use. Need something unusual? If it has an API, we can connect it.",
  },

  faq6Q: {
    sv: "Vilka betalningsalternativ kan ni bygga in?",
    en: "Which payment options can you build in?",
  },
  faq6A: {
    sv: "Alla vanliga — Stripe, Klarna, Swish, kort, faktura och prenumerationer. Betalningar är i praktiken bara API:er, så vi väljer det som passar din marknad och dina kunder bäst, eller kombinerar flera. Du sitter aldrig fast i en enda leverantör; väljer du att byta senare är det en integration vi kan ändra.",
    en: "All the common ones — Stripe, Klarna, Swish, cards, invoicing and subscriptions. Payments are essentially just APIs, so we pick what fits your market and customers best, or combine several. You're never locked to a single provider; if you choose to switch later, it's an integration we can change.",
  },

  faq7Q: { sv: "Vilken teknik bygger ni i?", en: "What technology do you build with?" },
  faq7A: {
    sv: "Next.js (App Router), TypeScript, Tailwind CSS, Supabase för databas och autentisering, Stripe/Klarna/Swish för betalningar, Resend för e-post och Vercel för drift. Modern, snabb och produktionsfärdig stack — samma teknik som används av ledande mjukvarubolag.",
    en: "Next.js (App Router), TypeScript, Tailwind CSS, Supabase for database and authentication, Stripe/Klarna/Swish for payments, Resend for email and Vercel for hosting. A modern, fast, production-ready stack — the same technology used by leading software companies.",
  },

  faq8Q: {
    sv: "Bygger ni bara hemsidor eller även riktiga system?",
    en: "Do you only build websites or real systems too?",
  },
  faq8A: {
    sv: "Båda. Många tror 'hemsida' betyder en statisk informationssida — men SweGBG bygger fullstack-webbappar och affärssystem som hanterar bokningar, betalningar, lager, kunddata och automatiseringar. Hemsidan är ofta bara ytan; systemet bakom är det som skapar värde.",
    en: "Both. Many people think 'website' means a static information page — but SweGBG builds fullstack web apps and business systems that handle bookings, payments, inventory, customer data and automation. The website is often just the surface; the system behind it is what creates value.",
  },

  faq9Q: {
    sv: "Var finns ni och vilka kunder jobbar ni med?",
    en: "Where are you based and who are your clients?",
  },
  faq9A: {
    sv: "SweGBG har sin bas i Göteborg men arbetar helt platsoberoende med kunder över hela världen. Eftersom allt sker digitalt spelar din placering ingen roll — vi har levererat lokalt i Sverige och jobbar lika gärna med kunder internationellt. Kunderna sträcker sig från egenföretagare, restauranger och salonger till varumärken, e-handlare och växande bolag.",
    en: "SweGBG is based in Gothenburg but works entirely location-independently with clients all over the world. Since everything happens digitally, your location doesn't matter — we've delivered locally in Sweden and work just as happily with clients internationally. Clients range from sole traders, restaurants and salons to brands, e-commerce businesses and growing companies.",
  },

  faq10Q: {
    sv: "Vad kostar det att bygga en hemsida eller webbapp?",
    en: "What does it cost to build a website or web app?",
  },
  faq10A: {
    sv: "Priset beror på vad som ska byggas. En professionell landningssida är ett mindre projekt än ett bokningssystem, en e-butik eller ett komplett affärssystem. Vi börjar alltid med att förstå ditt behov och ger sedan ett tydligt fastpris innan en enda rad kod skrivs — inga överraskningar. Löpande underhåll ligger på 399 kr/mån, och du äger all kod och infrastruktur, så du betalar aldrig för att 'hyra' din sida.",
    en: "The price depends on what's being built. A professional landing page is a smaller project than a booking system, an online store or a complete business system. We always start by understanding your needs and then give you a clear fixed price before a single line of code is written — no surprises. Ongoing maintenance is 399 SEK/month, and you own all the code and infrastructure, so you never pay to 'rent' your site.",
  },

  faq11Q: {
    sv: "Behöver jag vara teknisk för att jobba med er?",
    en: "Do I need to be technical to work with you?",
  },
  faq11A: {
    sv: "Inte alls. Du sköter din verksamhet — vi sköter tekniken. Vi förklarar allt på vanlig svenska, utan jargong, och du har samma kontaktperson genom hela projektet. Du behöver inte kunna något om kod, servrar eller databaser; vi sätter upp allt åt dig och ser till att du enkelt kan använda och uppdatera din sida när den är klar.",
    en: "Not at all. You run your business — we handle the tech. We explain everything in plain language, without jargon, and you have the same contact person throughout the project. You don't need to know anything about code, servers or databases; we set everything up for you and make sure you can easily use and update your site once it's done.",
  },

  faq12Q: {
    sv: "Kan ni hjälpa mig även om jag har en liten budget?",
    en: "Can you help me even if I have a small budget?",
  },
  faq12A: {
    sv: "Ja. Vi anpassar lösningen efter din budget och kan börja i mindre skala — till exempel en snabb, professionell landningssida — och bygga vidare med fler funktioner när verksamheten växer. Eftersom du äger koden från dag 1 är inget bortkastat; det vi bygger idag går att utveckla vidare imorgon utan att börja om. Du får maximal effekt för pengarna oavsett var du startar.",
    en: "Yes. We adapt the solution to your budget and can start small — for example a fast, professional landing page — and build on with more features as your business grows. Since you own the code from day 1, nothing is wasted; what we build today can be developed further tomorrow without starting over. You get maximum value for your money no matter where you start.",
  },
};
