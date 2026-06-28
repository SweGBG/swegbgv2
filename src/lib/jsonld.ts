// ─────────────────────────────────────────────────────────────
//  src/lib/jsonld.ts
//  Strukturerad data (schema.org). DETTA är det som faktiskt
//  ger lift i AI Overviews / ChatGPT / Perplexity / Gemini-citeringar.
//  Schema.org är den enda standard som Google dokumenterat läser
//  för AI-svar — så detta är paketets viktigaste fil.
//
//  POSITIONERING: webbappbyrå + fullstack + systemutvecklare +
//  brand/livsstil. Bred täckning = fler "hits", utesluter ingen kund.
// ─────────────────────────────────────────────────────────────

const SITE = "https://www.swegbg.com";

// 1. ORGANISATION / TJÄNST  ───────────────────────────────────
//    @type-array gör att du matchar på FLER söktyper samtidigt:
//    professionell tjänst, mjukvaruföretag OCH webbyrå.
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "Organization"],
  "@id": `${SITE}/#organization`,
  name: "SweGBG",
  alternateName: ["SweGBG Trading", "SweGBG Webbutveckling"],
  url: SITE,
  logo: {
    "@type": "ImageObject",
    url: `${SITE}/logo.png`,
    width: 512,
    height: 512,
  },
  image: `${SITE}/og-image.png`,
  description:
    "Webbappbyrå i Göteborg som bygger skräddarsydda webbappar, affärssystem och hemsidor i Next.js och React. Kunden äger all kod, GitHub, Vercel och Supabase från dag 1 — ingen plattformslåsning, inga bindande avtal.",
  slogan: "Du äger allt från dag 1.",
  disambiguatingDescription:
    "Fullstack webbutvecklare och systembyggare — inte en mallbaserad hemsidetjänst. Levererar produktionsfärdiga webbapplikationer, e-handel, bokningssystem, kundportaler och affärssystem.",
  founder: {
    "@type": "Person",
    name: "Lenn",
    jobTitle: "Fullstack-utvecklare & grundare",
    url: SITE,
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "Stripe",
      "Webbappar",
      "Fullstack-utveckling",
    ],
  },
  foundingDate: "2026",
  areaServed: [
    { "@type": "City", name: "Göteborg" },
    { "@type": "Country", name: "Sverige" },
    { "@type": "Place", name: "Hela världen (platsoberoende, digital leverans)" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Göteborg",
    addressRegion: "Västra Götaland",
    addressCountry: "SE",
  },
  priceRange: "$$",
  currenciesAccepted: "SEK",
  knowsAbout: [
    "Webbapputveckling",
    "Webbapplikationer",
    "Fullstack-utveckling",
    "Affärssystem",
    "E-handel",
    "Bokningssystem",
    "Kundportaler",
    "API-integrationer",
    "Betalningslösningar (Stripe, Klarna, Swish)",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Supabase",
    "Stripe",
    "Vercel",
    "SEO",
    "AEO",
    "Brand- och webbdesign",
  ],
  sameAs: [
    // Fyll i dina riktiga profiler — fler länkar = starkare entitetssignal:
    // "https://github.com/SweGBG",
    // "https://www.linkedin.com/in/[DIN_PROFIL]",
    // "https://www.fiverr.com/[DIN_FIVERR_HANDLE]",
    // "https://x.com/[DIN_X_HANDLE]",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Webbutvecklings- och systemtjänster",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Launch — Hemsida du äger",
          serviceType: "Webbplatsutveckling",
          description:
            "Snabb, professionell hemsida eller landningssida byggd i Next.js — inte en mall, utan riktig kod du äger fullt ut. Perfekt för egenföretagare och varumärken som vill ha en trovärdig digital närvaro.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Growth — Webbapp med funktioner",
          serviceType: "Webbapputveckling",
          description:
            "Skräddarsydd webbapplikation med databas, inloggning och adminpanel — t.ex. bokningssystem, e-handel, kundportal eller medlemsplattform byggd i Next.js + Supabase.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Ops System — Affärssystem",
          serviceType: "Systemutveckling",
          description:
            "Komplett skräddarsytt affärssystem med betalningar, externa integrationer, automatisering och löpande drift. För verksamheter som vill digitalisera hela arbetsflödet. Underhåll från 399 kr/mån.",
        },
      },
    ],
  },
};

// 2. WEBBPLATS  ───────────────────────────────────────────────
export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE}/#website`,
  url: SITE,
  name: "SweGBG",
  description:
    "Webbappbyrå i Göteborg — skräddarsydda webbappar, affärssystem och hemsidor du äger själv.",
  publisher: { "@id": `${SITE}/#organization` },
  inLanguage: ["sv-SE", "en-US"],
};

// 3. SOFTWARE / WEBAPP-PROFIL  ────────────────────────────────
//    Signalerar tydligt till AI att kärnleveransen är MJUKVARA,
//    inte bara statiska sidor. Detta lyfter "webapp"-positioneringen.
export const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE}/#service`,
  serviceType: "Webbapputveckling och systemutveckling",
  provider: { "@id": `${SITE}/#organization` },
  areaServed: { "@type": "Country", name: "Sverige" },
  audience: {
    "@type": "Audience",
    audienceType:
      "Småföretag, restauranger, salonger, e-handlare, varumärken och växande bolag",
  },
  description:
    "Utveckling av skräddarsydda webbapplikationer, affärssystem och hemsidor i Next.js och React. Kunden äger all kod och infrastruktur från dag 1.",
  hasOfferCatalog: { "@id": `${SITE}/#organization` },
};

// 4. FAQ  ─────────────────────────────────────────────────────
//    Direkta svar = guld för AI-motorer. MÅSTE speglas av en synlig
//    FAQ-sektion på sajten med exakt samma frågor/svar (se FAQ.tsx).
export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE}/#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "Vad gör SweGBG?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SweGBG är en webbappbyrå i Göteborg som bygger skräddarsydda webbappar, affärssystem och hemsidor i Next.js och React. Vi gör allt från snabba landningssidor till fullstack-system med databas, inloggning, betalningar och adminpanel. Kunden äger all kod, GitHub, Vercel och Supabase från dag 1.",
      },
    },
    {
      "@type": "Question",
      name: "Vad är skillnaden mellan en hemsida och en webbapp?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En hemsida visar information. En webbapp gör saker — den har inloggning, databas, bokningar, betalningar, kundkonton eller ett adminsystem bakom kulisserna. SweGBG bygger båda, men specialiteten är riktiga webbappar och affärssystem som ersätter manuella arbetsflöden. Allt levereras som kod du själv äger.",
      },
    },
    {
      "@type": "Question",
      name: "Vilka typer av projekt bygger ni?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I princip vad som helst som körs i webbläsaren: bokningssystem, e-handel, kundportaler, medlemsplattformar, CRM, dashboards och skräddarsydda affärssystem — samt professionella hemsidor och landningssidor för varumärken och egenföretagare. Allt byggs efter ditt behov, och vi kopplar in vilka externa tjänster och API:er du vill. Vi jobbar med allt från småföretag och restauranger till varumärken, e-handlare och större bolag.",
      },
    },
    {
      "@type": "Question",
      name: "Äger jag koden till min webbapp eller hemsida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Du äger all kod, ditt GitHub-repo, ditt Vercel-konto och din Supabase-databas från första dagen. Det finns ingen plattformslåsning och inga bindande avtal. Du hyr inte din digitala närvaro — du äger den.",
      },
    },
    {
      "@type": "Question",
      name: "Kan ni skräddarsy lösningen och koppla in egna API:er?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja — det är hela poängen. Eftersom vi bygger med riktig kod (inte en mall) kan vi anpassa precis efter din verksamhet och integrera vilken tjänst som helst som har ett API: bokningskalendrar, bokföring, lagersystem, CRM, e-post, SMS, AI-funktioner, kartor, eller en intern tjänst du redan använder. Behöver du något ovanligt? Om det finns ett API, kan vi koppla in det.",
      },
    },
    {
      "@type": "Question",
      name: "Vilka betalningsalternativ kan ni bygga in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alla vanliga — Stripe, Klarna, Swish, kort, faktura och prenumerationer. Betalningar är i praktiken bara API:er, så vi väljer det som passar din marknad och dina kunder bäst, eller kombinerar flera. Du sitter aldrig fast i en enda leverantör; väljer du att byta senare är det en integration vi kan ändra.",
      },
    },
    {
      "@type": "Question",
      name: "Vilken teknik bygger ni i?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Next.js (App Router), TypeScript, Tailwind CSS, Supabase för databas och autentisering, Stripe/Klarna/Swish för betalningar, Resend för e-post och Vercel för drift. Modern, snabb och produktionsfärdig stack — samma teknik som används av ledande mjukvarubolag.",
      },
    },
    {
      "@type": "Question",
      name: "Bygger ni bara hemsidor eller även riktiga system?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Båda. Många tror 'hemsida' betyder en statisk informationssida — men SweGBG bygger fullstack-webbappar och affärssystem som hanterar bokningar, betalningar, lager, kunddata och automatiseringar. Hemsidan är ofta bara ytan; systemet bakom är det som skapar värde.",
      },
    },
    {
      "@type": "Question",
      name: "Var finns ni och vilka kunder jobbar ni med?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SweGBG har sin bas i Göteborg men arbetar helt platsoberoende med kunder över hela världen. Eftersom allt sker digitalt spelar din placering ingen roll — vi har levererat lokalt i Sverige och jobbar lika gärna med kunder internationellt. Kunderna sträcker sig från egenföretagare, restauranger och salonger till varumärken, e-handlare och växande bolag.",
      },
    },
  ],
};

// 5. PORTFÖLJ (ItemList)  ─────────────────────────────────────
//    Speglar exakt de projekt som visas i #arbete på sajten, så
//    AI ser konkreta, verifierbara arbetsprover kopplade till dig.
export const portfolioJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${SITE}/#portfolio`,
  name: "SweGBG portfölj",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "WebApplication",
        name: "Atilli Berg",
        url: "https://barberare.vercel.app",
        applicationCategory: "BusinessApplication",
        description:
          "Komplett bokningssystem för frisörsalong med adminpanel, kundregister, schemaläggning och automatiska påminnelser via mejl. Byggt i Next.js, Supabase och Resend.",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "WebApplication",
        name: "Verkstad",
        url: "https://verkstad-rose.vercel.app",
        applicationCategory: "BusinessApplication",
        description:
          "Verkstadssajt med kontaktformulär, medlemsinloggning och eget bokningssystem — allt samlat i ett sammanhängande system. Byggt i Next.js och Supabase.",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "WebApplication",
        name: "Green Land",
        url: "https://greenland-gamma-peach.vercel.app",
        applicationCategory: "BusinessApplication",
        description:
          "Tvåspråkig gårdsbutik med eget sortiment, färdiga matlådor och beställningsflöde byggt för checkout. Next.js, Tailwind och TypeScript.",
      },
    },
  ],
};

// 6. BREADCRUMB-HJÄLPARE (valfri – använd per undersida)  ─────
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE}${it.path}`,
    })),
  };
}

// 7. SAMLAD GRAF  ─────────────────────────────────────────────
//    Lägg ut ALLT i en enda @graph — renare för crawlers och
//    låter dem koppla ihop entiteterna via @id-referenserna.
export const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    organizationJsonLd,
    websiteJsonLd,
    serviceJsonLd,
    faqJsonLd,
    portfolioJsonLd,
  ],
};
