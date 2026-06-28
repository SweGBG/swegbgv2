// ─────────────────────────────────────────────────────────────
//  src/lib/jsonld.en.ts
//  Engelsk strukturerad data för /en. Spegling av jsonld.ts men
//  på engelska och med inLanguage: en-US. FAQ-texten är identisk
//  med den ENGELSKA texten i translations.ts (faqNA.en) så att
//  schema matchar synligt innehåll när /en visas på engelska.
// ─────────────────────────────────────────────────────────────

const SITE = "https://swegbg.com";

export const organizationJsonLdEN = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "Organization"],
  "@id": `${SITE}/#organization`,
  name: "SweGBG",
  alternateName: ["SweGBG Trading", "SweGBG Web Development"],
  url: SITE,
  logo: {
    "@type": "ImageObject",
    url: `${SITE}/logo.png`,
    width: 512,
    height: 512,
  },
  image: `${SITE}/og-image.png`,
  description:
    "Web-app agency in Gothenburg, Sweden, building custom web apps, business systems and websites in Next.js and React. The client owns all code, GitHub, Vercel and Supabase from day 1 — no platform lock-in, no binding contracts.",
  slogan: "You own everything from day 1.",
  disambiguatingDescription:
    "Fullstack web developer and system builder — not a template-based website service. Delivers production-ready web applications, e-commerce, booking systems, customer portals and business systems.",
  founder: {
    "@type": "Person",
    name: "Lenn",
    jobTitle: "Fullstack developer & founder",
    url: SITE,
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "Stripe",
      "Web apps",
      "Fullstack development",
    ],
  },
  foundingDate: "2026",
  areaServed: [
    { "@type": "City", name: "Gothenburg" },
    { "@type": "Country", name: "Sweden" },
    { "@type": "Place", name: "Worldwide (location-independent, digital delivery)" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gothenburg",
    addressRegion: "Västra Götaland",
    addressCountry: "SE",
  },
  priceRange: "$$",
  currenciesAccepted: "SEK",
  knowsAbout: [
    "Web app development",
    "Web applications",
    "Fullstack development",
    "Business systems",
    "E-commerce",
    "Booking systems",
    "Customer portals",
    "API integrations",
    "Payment solutions (Stripe, Klarna, Swish)",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Supabase",
    "Stripe",
    "Vercel",
    "SEO",
    "AEO",
    "Brand and web design",
  ],
  sameAs: [
    // "https://github.com/SweGBG",
    // "https://www.linkedin.com/in/[DIN_PROFIL]",
    // "https://www.fiverr.com/[DIN_FIVERR_HANDLE]",
    // "https://x.com/[DIN_X_HANDLE]",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web development and system services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Launch — A website you own",
          serviceType: "Website development",
          description:
            "Fast, professional website or landing page built in Next.js — not a template, but real code you own fully. Perfect for sole traders and brands wanting a credible digital presence.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Growth — A web app with features",
          serviceType: "Web app development",
          description:
            "Custom web application with database, login and admin panel — e.g. booking system, e-commerce, customer portal or membership platform built in Next.js + Supabase.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Ops System — Business system",
          serviceType: "System development",
          description:
            "Complete custom business system with payments, external integrations, automation and ongoing operations. For businesses that want to digitize their entire workflow. Maintenance from 399 SEK/mo.",
        },
      },
    ],
  },
};

export const websiteJsonLdEN = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE}/#website`,
  url: SITE,
  name: "SweGBG",
  description:
    "Web-app agency in Gothenburg — custom web apps, business systems and websites you own.",
  publisher: { "@id": `${SITE}/#organization` },
  inLanguage: ["en-US", "sv-SE"],
};

export const serviceJsonLdEN = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE}/#service`,
  serviceType: "Web app and system development",
  provider: { "@id": `${SITE}/#organization` },
  areaServed: { "@type": "Country", name: "Sweden" },
  audience: {
    "@type": "Audience",
    audienceType:
      "Small businesses, restaurants, salons, e-commerce, brands and growing companies",
  },
  description:
    "Development of custom web applications, business systems and websites in Next.js and React. The client owns all code and infrastructure from day 1.",
  hasOfferCatalog: { "@id": `${SITE}/#organization` },
};

// FAQ — texten MÅSTE matcha faqNA.en i translations.ts
export const faqJsonLdEN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE}/#faq`,
  inLanguage: "en-US",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does SweGBG do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SweGBG is a web-app agency in Gothenburg that builds custom web apps, business systems and websites in Next.js and React. We do everything from fast landing pages to fullstack systems with database, login, payments and an admin panel. The client owns all the code, GitHub, Vercel and Supabase from day 1.",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference between a website and a web app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A website displays information. A web app does things — it has login, a database, bookings, payments, customer accounts or an admin system behind the scenes. SweGBG builds both, but the specialty is real web apps and business systems that replace manual workflows. Everything is delivered as code you own yourself.",
      },
    },
    {
      "@type": "Question",
      name: "What kinds of projects do you build?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Essentially anything that runs in the browser: booking systems, e-commerce, customer portals, membership platforms, CRMs, dashboards and custom business systems — as well as professional websites and landing pages for brands and sole traders. Everything is built to your needs, and we integrate whatever external services and APIs you want. We work with everything from small businesses and restaurants to brands, e-commerce companies and larger organizations.",
      },
    },
    {
      "@type": "Question",
      name: "Do I own the code to my web app or website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You own all the code, your GitHub repo, your Vercel account and your Supabase database from day one. There's no platform lock-in and no binding contracts. You don't rent your digital presence — you own it.",
      },
    },
    {
      "@type": "Question",
      name: "Can you tailor the solution and integrate custom APIs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — that's the whole point. Because we build with real code (not a template), we can tailor everything to your business and integrate any service that has an API: booking calendars, accounting, inventory systems, CRM, email, SMS, AI features, maps, or an internal tool you already use. Need something unusual? If it has an API, we can connect it.",
      },
    },
    {
      "@type": "Question",
      name: "Which payment options can you build in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All the common ones — Stripe, Klarna, Swish, cards, invoicing and subscriptions. Payments are essentially just APIs, so we pick what fits your market and customers best, or combine several. You're never locked to a single provider; if you choose to switch later, it's an integration we can change.",
      },
    },
    {
      "@type": "Question",
      name: "What technology do you build with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Next.js (App Router), TypeScript, Tailwind CSS, Supabase for database and authentication, Stripe/Klarna/Swish for payments, Resend for email and Vercel for hosting. A modern, fast, production-ready stack — the same technology used by leading software companies.",
      },
    },
    {
      "@type": "Question",
      name: "Do you only build websites or real systems too?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both. Many people think 'website' means a static information page — but SweGBG builds fullstack web apps and business systems that handle bookings, payments, inventory, customer data and automation. The website is often just the surface; the system behind it is what creates value.",
      },
    },
    {
      "@type": "Question",
      name: "Where are you based and who are your clients?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SweGBG is based in Gothenburg but works entirely location-independently with clients all over the world. Since everything happens digitally, your location doesn't matter — we've delivered locally in Sweden and work just as happily with clients internationally. Clients range from sole traders, restaurants and salons to brands, e-commerce businesses and growing companies.",
      },
    },
  ],
};

export const portfolioJsonLdEN = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${SITE}/#portfolio`,
  name: "SweGBG portfolio",
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
          "Complete booking system for a hair salon with admin panel, client records, scheduling and automated email reminders. Built in Next.js, Supabase and Resend.",
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
          "Workshop site with a contact form, member login and its own booking system — all in one connected system. Built in Next.js and Supabase.",
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
          "Bilingual farm shop with its own product range, ready-made food boxes and an order flow built for checkout. Next.js, Tailwind and TypeScript.",
      },
    },
  ],
};

export const jsonLdGraphEN = {
  "@context": "https://schema.org",
  "@graph": [
    organizationJsonLdEN,
    websiteJsonLdEN,
    serviceJsonLdEN,
    faqJsonLdEN,
    portfolioJsonLdEN,
  ],
};
