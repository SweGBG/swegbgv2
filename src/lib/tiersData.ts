import type { Lang } from "./translations";

export interface TierContent {
  num: string;
  name: string;
  badge?: string;
  tagline: string;
  description: string;
  price: string;
  priceLabel: string;
  priceBadge?: string;
  includedLabel: string;
  items: string[];
  note: string;
}

export function getTiersData(lang: Lang): TierContent[] {
  if (lang === "en") {
    return [
      {
        num: "01",
        name: "Launch",
        tagline: "Your online presence, built from the ground up.",
        description:
          "A hand-built Next.js website — no page builder, no template. Fast, mobile-first and optimized for both Google and AI search, so customers actually find you. Multilingual comes as standard, and everything is deployed on your own domain with code you fully own.",
        price: "5 499 kr",
        priceLabel: "Fixed price",
        includedLabel: "Included:",
        items: [
          "Custom Next.js website — real code, no page builder",
          "SEO + AEO: structured data (JSON-LD), sitemap and llms.txt for AI search",
          "Multilingual as standard (SE/EN — more languages if you need them)",
          "Mobile-first design & top performance scores",
          "Contact form straight to your inbox (Resend)",
          "Analytics + Google Search Console set up",
          "Live on your own domain — GitHub, Vercel and hosting in your name",
        ],
        note: "One-time payment. You own all the code, always. We can host and maintain the site if you want — entirely optional, zero lock-in.",
      },
      {
        num: "02",
        name: "Growth",
        badge: "Most popular",
        tagline: "For businesses that want more customers — automatically.",
        description:
          "Your website becomes a system that works while you don't. Customers book themselves, get automatic confirmations and reminders, and you manage everything — services, prices, opening hours, closed days — from your own admin panel. No third-party booking fees, ever.",
        price: "9 999 kr",
        priceLabel: "Fixed price",
        priceBadge: "Intro price",
        includedLabel: "Included:",
        items: [
          "Everything in Launch",
          "Booking system with calendar and real-time availability",
          "Automatic booking confirmations + 24h reminders via email",
          "Admin panel: bookings, client records and schedule in one place",
          "Customer login backed by a secured database (row-level security)",
          "Edit services, prices, opening hours and closed days yourself",
          "Stripe for payments or deposits at booking",
          "WhatsApp or SMS notifications (optional)",
        ],
        note: "One-time payment — no subscriptions, no per-booking fees. You fully own the system and the code. We can run hosting and operations if you want, but you always remain the owner.",
      },
      {
        num: "03",
        name: "Ops System",
        tagline: "A complete system to run your business digitally.",
        description:
          "This is no longer a website — it's your operations hub. Customers, bookings, revenue, staff schedules and reports in one tool, with role-based access for admin, staff and customers. We scope it around your actual workflow and connect whatever external services you need — payments, price tracking, news feeds, AI features. If it has an API, we can plug it in.",
        price: "Let's talk",
        priceLabel: "Scoped to your needs",
        includedLabel: "Included:",
        items: [
          "Everything in Growth",
          "Full admin panel: clients, bookings, revenue, reports",
          "Role-based users (admin / staff / customer)",
          "Real-time dashboard for revenue & statistics",
          "Scheduling for staff & resources",
          "Stripe: payments, refunds, subscriptions if needed",
          "Automated workflows (email, triggers, scheduled jobs)",
          "External API integrations — price tracking, news, AI, whatever you need",
          "Audit logs & full system overview",
        ],
        note: "Scoped and priced together with you — clear fixed quote before a single line of code is written. Full ownership of the entire system. Run it yourself or let us operate it — zero lock-in.",
      },
    ];
  }

  return [
    {
      num: "01",
      name: "Launch",
      tagline: "Din närvaro online, byggd från grunden.",
      description:
        "En handbyggd Next.js-hemsida — ingen sidbyggare, ingen mall. Snabb, mobilanpassad och optimerad för både Google och AI-sök så att kunder faktiskt hittar dig. Flerspråkighet ingår som standard, och allt levereras på din egen domän med kod du äger fullt ut.",
      price: "5 499 kr",
      priceLabel: "Fast pris",
      includedLabel: "Ingår:",
      items: [
        "Skräddarsydd Next.js-hemsida — riktig kod, ingen sidbyggare",
        "SEO + AEO: strukturerad data (JSON-LD), sitemap och llms.txt för AI-sök",
        "Flerspråkig som standard (SE/EN — fler språk om du behöver)",
        "Mobilanpassad design & toppbetyg i prestanda",
        "Kontaktformulär direkt till din mejl (Resend)",
        "Analytics + Google Search Console uppsatt",
        "Live på egen domän — GitHub, Vercel och hosting i ditt namn",
      ],
      note: "Engångsbetalning. Du äger hela koden, alltid. Vill du kan vi även hosta och underhålla sidan — helt valfritt, utan bindning.",
    },
    {
      num: "02",
      name: "Growth",
      badge: "Mest valt",
      tagline: "För företag som vill få fler kunder — automatiskt.",
      description:
        "Din hemsida blir ett system som jobbar när du inte gör det. Kunderna bokar sig själva, får automatiska bekräftelser och påminnelser, och du styr allt — tjänster, priser, öppettider, stängda dagar — från din egen adminpanel. Inga bokningsavgifter till tredje part, någonsin.",
      price: "9 999 kr",
      priceLabel: "Fast pris",
      priceBadge: "Introduktionspris",
      includedLabel: "Ingår:",
      items: [
        "Allt i Launch",
        "Bokningssystem med kalender och lediga tider i realtid",
        "Automatiska bokningsbekräftelser + 24h-påminnelser via mejl",
        "Adminpanel: bokningar, kundregister och schema på ett ställe",
        "Kundinloggning med säkrad databas (radnivåsäkerhet)",
        "Ändra tjänster, priser, öppettider och stängda dagar själv",
        "Stripe för betalning eller deposition vid bokning",
        "WhatsApp- eller SMS-notiser (valfritt)",
      ],
      note: "Engångsbetalning — inga abonnemang, inga avgifter per bokning. Du äger systemet och koden fullt ut. Hosting och drift kan skötas av oss om du vill, men du står alltid som ägare.",
    },
    {
      num: "03",
      name: "Ops System",
      tagline: "Ett komplett system för att driva din verksamhet digitalt.",
      description:
        "Det här är inte längre en hemsida — det är ditt verksamhetsnav. Kunder, bokningar, intäkter, personalschema och rapporter i ett verktyg, med rollstyrd åtkomst för admin, personal och kund. Vi formar systemet efter ditt faktiska arbetsflöde och kopplar in de externa tjänster du behöver — betalningar, prisbevakning, nyhetsflöden, AI-funktioner. Finns det ett API kan vi koppla in det.",
      price: "Vi kan snacka",
      priceLabel: "Prissätts efter behov",
      includedLabel: "Ingår:",
      items: [
        "Allt i Growth",
        "Full adminpanel: kunder, bokningar, intäkter, rapporter",
        "Rollbaserade användare (admin / personal / kund)",
        "Realtidsdashboard för intäkter & statistik",
        "Schemahantering för personal & resurser",
        "Stripe: betalningar, återbetalningar, abonnemang vid behov",
        "Automatiserade arbetsflöden (mejl, triggers, schemalagda jobb)",
        "Externa API-integrationer — prisbevakning, nyheter, AI, det du behöver",
        "Audit logs & full systemöversikt",
      ],
      note: "Formas och prissätts tillsammans med dig — tydligt fastpris innan en enda rad kod skrivs. Full äganderätt till hela systemet. Kör det själv eller låt oss drifta det — helt utan låsning.",
    },
  ];
}
