import type { Lang } from "./translations";

export interface TierContent {
  num: string;
  name: string;
  badge?: string;
  tagline: string;
  description: string;
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
          "A custom-built website that makes your business look credible from day one. No templates. No restrictive platform. Just clean code built for speed, SEO and conversion. You get a modern, fast, mobile-friendly site that helps customers find you and understand what you do within seconds.",
        includedLabel: "Included:",
        items: [
          "Custom Next.js website (built from scratch)",
          "SEO + AEO optimization for Google and AI search",
          "Mobile-first & high performance",
          "Contact form connected to email (Resend)",
          "Basic analytics",
          "Deployment on your own domain",
        ],
        note: "One-time payment. You own all the code, always. We can also host and maintain the site if you want — but it's entirely optional, with no lock-in.",
      },
      {
        num: "02",
        name: "Growth",
        badge: "Most popular",
        tagline: "For businesses that want more customers — automatically.",
        description:
          "This is your website plus a system that works for you. Perfect for businesses that want to take bookings, leads and customers without manual work. This is where your website goes from a presentation to a sales machine.",
        includedLabel: "Included:",
        items: [
          "Everything in Launch",
          "Booking system with calendar",
          "Customer login and basic CRM",
          "Admin panel to update content yourself",
          "Email automation (reminders, booking confirmations)",
          "Cron jobs (e.g. 24h reminders)",
          "Dynamic services & pricing",
          "Stripe integration (bookings/deposits)",
          "WhatsApp or SMS integration (optional)",
        ],
        note: "One-time payment — no subscriptions. You fully own the system and the code. We can handle hosting and operations if you want, but you always remain the full owner.",
      },
      {
        num: "03",
        name: "Ops System",
        tagline: "A complete system to run your business digitally.",
        description:
          "This is no longer a website — it's your internal system. You get full control over customers, bookings, revenue and schedules in one tool. Built to replace manual work, Excel and external tools.",
        includedLabel: "Included:",
        items: [
          "Everything in Growth",
          "Full admin panel (clients, bookings, revenue)",
          "Role-based users (admin / staff / customer)",
          "Real-time dashboard for revenue & stats",
          "Scheduling for staff & resources",
          "Stripe (payments, refunds, subscriptions if needed)",
          "Automated workflows (email & triggers)",
          "API layer for future integrations",
          "Audit logs & system overview",
        ],
        note: "One-time project. Full ownership of the entire system and code. Run it yourself, host it yourself, or let us operate it for you — with zero lock-in.",
      },
    ];
  }

  return [
    {
      num: "01",
      name: "Launch",
      tagline: "Din närvaro online, byggd från grunden.",
      description:
        "En skräddarsydd hemsida som gör att ditt företag ser seriöst ut från dag ett. Inga mallar. Ingen begränsad plattform. Bara ren kod byggd för hastighet, SEO och konvertering. Du får en modern, snabb och mobilanpassad site som hjälper kunder att hitta dig och förstå vad du gör på några sekunder.",
      includedLabel: "Ingår:",
      items: [
        "Skräddarsydd Next.js-hemsida (byggd från grunden)",
        "SEO + AEO-optimering för Google och AI-sök",
        "Mobilanpassning & hög prestanda",
        "Kontaktformulär kopplat till mejl (Resend)",
        "Grundläggande analytics",
        "Deployment på egen domän",
      ],
      note: "Engångsbetalning. Du äger hela koden, alltid. Vill du kan vi även hosta och underhålla sidan — men det är helt valfritt och utan bindning.",
    },
    {
      num: "02",
      name: "Growth",
      badge: "Mest valt",
      tagline: "För företag som vill få fler kunder — automatiskt.",
      description:
        "Det här är din hemsida + ett system som jobbar åt dig. Perfekt för verksamheter som vill ta emot bokningar, leads och kunder utan manuellt arbete. Här går din hemsida från att vara en presentation till att bli en säljmaskin.",
      includedLabel: "Ingår:",
      items: [
        "Allt i Launch",
        "Bokningssystem med kalender",
        "Kundlogin och grundläggande CRM",
        "Adminpanel för att uppdatera innehåll själv",
        "E-postautomation (påminnelser, bokningsbekräftelser)",
        "Cron jobs (t.ex. 24h-påminnelser)",
        "Dynamiska tjänster & priser",
        "Stripe-integration (bokningar/deposition)",
        "WhatsApp- eller SMS-integration (valfritt)",
      ],
      note: "Engångsbetalning — inga abonnemang. Du äger systemet och koden fullt ut. Hosting och drift kan skötas av oss om du vill, men du står alltid som full ägare.",
    },
    {
      num: "03",
      name: "Ops System",
      tagline: "Ett komplett system för att driva din verksamhet digitalt.",
      description:
        "Det här är inte längre en hemsida — det är ditt interna system. Du får full kontroll över kunder, bokningar, intäkter och schema i ett enda verktyg. Byggt för att ersätta manuellt arbete, Excel och externa verktyg.",
      includedLabel: "Ingår:",
      items: [
        "Allt i Growth",
        "Full adminpanel (kunder, bokningar, intäkter)",
        "Rollbaserade användare (admin / personal / kund)",
        "Realtidsdashboard för intäkter & statistik",
        "Schemahantering för personal & resurser",
        "Stripe (betalningar, återbetalningar, abonnemang vid behov)",
        "Automatiserade arbetsflöden (mejl & triggers)",
        "API-lager för framtida integrationer",
        "Audit logs & systemöversikt",
      ],
      note: "Engångsprojekt. Full äganderätt till hela systemet och koden. Du kan köra det själv, hosta det själv eller låta oss drifta det åt dig — helt utan låsning.",
    },
  ];
}
