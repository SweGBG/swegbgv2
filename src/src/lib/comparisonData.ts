import type { Lang } from "./translations";

export type Tone = "good" | "mid" | "bad" | "neutral";

export interface Cell {
  icon: "✓" | "~" | "✗" | null;
  text: string;
  tone: Tone;
}

export interface Row {
  label: string;
  cells: Cell[];
}

export interface Group {
  title: string;
  rows: Row[];
}

export interface ColumnHeader {
  name: string;
  accent: string;
}

export interface MiniRow {
  label: string;
  cells: [Cell, Cell];
}

export interface ComparisonData {
  introEyebrow: string;
  introTitle: string;
  introLead1: string;
  introLead2: string;
  introBullets: string[];
  columns: ColumnHeader[];
  groups: Group[];
  miniTitle: string;
  miniColumns: [ColumnHeader, ColumnHeader];
  miniRows: MiniRow[];
  hostingTitle: string;
  hostingIntro: string;
  hostingOptionA: string;
  hostingOptionB: string;
  hostingNote: string;
  closingLine: string;
}

export function getComparisonData(lang: Lang): ComparisonData {
  if (lang === "en") {
    return {
      introEyebrow: "// ownership vs renting",
      introTitle: "Own your system. Don't rent your platform.",
      introLead1:
        "Most websites today are built on platforms where you're effectively renting your business. We build something different.",
      introLead2: "We build custom systems in Next.js that give you:",
      introBullets: ["full control", "full ownership", "full freedom to keep developing whenever you want"],
      columns: [
        { name: "Custom Next.js (us)", accent: "text-gold-bright" },
        { name: "Shopify", accent: "text-emerald-400" },
        { name: "WordPress", accent: "text-blue" },
        { name: "Wix", accent: "text-violet-400" },
      ],
      groups: [
        {
          title: "Ownership & freedom",
          rows: [
            {
              label: "Ownership",
              cells: [
                { icon: "✓", text: "100% your code, design & data", tone: "good" },
                { icon: "✗", text: "The platform controls it", tone: "bad" },
                { icon: "~", text: "Partial", tone: "mid" },
                { icon: "✗", text: "Locked", tone: "bad" },
              ],
            },
            {
              label: "Platform lock-in",
              cells: [
                { icon: null, text: "None", tone: "good" },
                { icon: null, text: "High", tone: "bad" },
                { icon: null, text: "Medium", tone: "mid" },
                { icon: null, text: "High", tone: "bad" },
              ],
            },
            {
              label: "Move freely",
              cells: [
                { icon: "✓", text: "Yes, anytime", tone: "good" },
                { icon: "✗", text: "Difficult", tone: "bad" },
                { icon: "~", text: "Partial", tone: "mid" },
                { icon: "✗", text: "No", tone: "bad" },
              ],
            },
          ],
        },
        {
          title: "Flexibility & development",
          rows: [
            {
              label: "Customization",
              cells: [
                { icon: "✓", text: "Built exactly for your business", tone: "good" },
                { icon: "~", text: "Limited to the system", tone: "mid" },
                { icon: "~", text: "Plugin-based", tone: "mid" },
                { icon: "✗", text: "Templates", tone: "bad" },
              ],
            },
            {
              label: "New features",
              cells: [
                { icon: "✓", text: "We build it directly for you", tone: "good" },
                { icon: "~", text: "Apps / restrictions", tone: "mid" },
                { icon: "~", text: "Plugins", tone: "mid" },
                { icon: "✗", text: "Limited", tone: "bad" },
              ],
            },
            {
              label: "Changes",
              cells: [
                { icon: "✓", text: "Fast, straight in the code", tone: "good" },
                { icon: "~", text: "Depends on apps", tone: "mid" },
                { icon: "~", text: "Can get complex", tone: "mid" },
                { icon: "✗", text: "Difficult", tone: "bad" },
              ],
            },
          ],
        },
        {
          title: "Operations, hosting & cost",
          rows: [
            {
              label: "Starting cost",
              cells: [
                { icon: null, text: "One-time project", tone: "good" },
                { icon: null, text: "Low", tone: "neutral" },
                { icon: null, text: "Low", tone: "neutral" },
                { icon: null, text: "Low", tone: "neutral" },
              ],
            },
            {
              label: "Monthly fee",
              cells: [
                { icon: "✓", text: "Optional hosting (0–50 SEK+)", tone: "good" },
                { icon: "✗", text: "~500 SEK/mo", tone: "bad" },
                { icon: "✗", text: "~200 SEK/mo", tone: "bad" },
                { icon: "✗", text: "~300 SEK/mo", tone: "bad" },
              ],
            },
            {
              label: "Extra fees",
              cells: [
                { icon: "✓", text: "None", tone: "good" },
                { icon: "✗", text: "Transaction fees + apps", tone: "bad" },
                { icon: "~", text: "Plugins", tone: "mid" },
                { icon: "✗", text: "Add-ons", tone: "bad" },
              ],
            },
          ],
        },
      ],
      miniTitle: "What we do differently",
      miniColumns: [
        { name: "Custom Next.js (us)", accent: "text-gold-bright" },
        { name: "Traditional platforms", accent: "text-ink-dim" },
      ],
      miniRows: [
        {
          label: "Philosophy",
          cells: [
            { icon: null, text: "Built for your business", tone: "good" },
            { icon: null, text: "Built for everyone", tone: "neutral" },
          ],
        },
        {
          label: "Ownership",
          cells: [
            { icon: "✓", text: "You own everything", tone: "good" },
            { icon: "✗", text: "You rent the system", tone: "bad" },
          ],
        },
        {
          label: "Support",
          cells: [
            { icon: "✓", text: "Direct developer support", tone: "good" },
            { icon: "~", text: "Tickets / community", tone: "mid" },
          ],
        },
        {
          label: "Updates",
          cells: [
            { icon: "✓", text: "Direct, no restrictions", tone: "good" },
            { icon: "~", text: "System-dependent", tone: "mid" },
          ],
        },
      ],
      hostingTitle: "Hosting — your choice",
      hostingIntro: "You choose how the system runs:",
      hostingOptionA: "We host & manage it — smooth, a ready-to-go system",
      hostingOptionB: "You host it yourself — full control",
      hostingNote: "Either way, you always own the entire system and can move it whenever you want.",
      closingLine:
        "Other platforms let you build within their system. We build a system that's yours from the ground up.",
    };
  }

  return {
    introEyebrow: "// äganderätt vs hyra",
    introTitle: "Äg ditt system. Inte hyr din plattform.",
    introLead1:
      "De flesta hemsidor idag byggs på plattformar där du i praktiken hyr din verksamhet. Vi bygger något annat.",
    introLead2: "Vi bygger skräddarsydda system i Next.js där du får:",
    introBullets: ["full kontroll", "full äganderätt", "full frihet att utveckla vidare när du vill"],
    columns: [
      { name: "Custom Next.js (oss)", accent: "text-gold-bright" },
      { name: "Shopify", accent: "text-emerald-400" },
      { name: "WordPress", accent: "text-blue" },
      { name: "Wix", accent: "text-violet-400" },
    ],
    groups: [
      {
        title: "Ägande & frihet",
        rows: [
          {
            label: "Äganderätt",
            cells: [
              { icon: "✓", text: "100% din kod, design & data", tone: "good" },
              { icon: "✗", text: "Plattformen styr", tone: "bad" },
              { icon: "~", text: "Delvis", tone: "mid" },
              { icon: "✗", text: "Låst", tone: "bad" },
            ],
          },
          {
            label: "Plattformslåsning",
            cells: [
              { icon: null, text: "Ingen", tone: "good" },
              { icon: null, text: "Hög", tone: "bad" },
              { icon: null, text: "Medel", tone: "mid" },
              { icon: null, text: "Hög", tone: "bad" },
            ],
          },
          {
            label: "Flytta fritt",
            cells: [
              { icon: "✓", text: "Ja, när som helst", tone: "good" },
              { icon: "✗", text: "Svårt", tone: "bad" },
              { icon: "~", text: "Delvis", tone: "mid" },
              { icon: "✗", text: "Nej", tone: "bad" },
            ],
          },
        ],
      },
      {
        title: "Flexibilitet & utveckling",
        rows: [
          {
            label: "Anpassning",
            cells: [
              { icon: "✓", text: "Byggs exakt för din verksamhet", tone: "good" },
              { icon: "~", text: "Begränsat till system", tone: "mid" },
              { icon: "~", text: "Plugin-baserat", tone: "mid" },
              { icon: "✗", text: "Mallar", tone: "bad" },
            ],
          },
          {
            label: "Nya funktioner",
            cells: [
              { icon: "✓", text: "Vi bygger direkt åt dig", tone: "good" },
              { icon: "~", text: "Appar / begränsningar", tone: "mid" },
              { icon: "~", text: "Plugins", tone: "mid" },
              { icon: "✗", text: "Begränsat", tone: "bad" },
            ],
          },
          {
            label: "Ändringar",
            cells: [
              { icon: "✓", text: "Snabbt, direkt i koden", tone: "good" },
              { icon: "~", text: "Beroende av appar", tone: "mid" },
              { icon: "~", text: "Kan bli komplext", tone: "mid" },
              { icon: "✗", text: "Svårt", tone: "bad" },
            ],
          },
        ],
      },
      {
        title: "Drift, hosting & kostnad",
        rows: [
          {
            label: "Startkostnad",
            cells: [
              { icon: null, text: "Engångsprojekt", tone: "good" },
              { icon: null, text: "Låg", tone: "neutral" },
              { icon: null, text: "Låg", tone: "neutral" },
              { icon: null, text: "Låg", tone: "neutral" },
            ],
          },
          {
            label: "Månadsavgift",
            cells: [
              { icon: "✓", text: "Valfri hosting (0–50 kr+)", tone: "good" },
              { icon: "✗", text: "~500 kr/mån", tone: "bad" },
              { icon: "✗", text: "~200 kr/mån", tone: "bad" },
              { icon: "✗", text: "~300 kr/mån", tone: "bad" },
            ],
          },
          {
            label: "Extra avgifter",
            cells: [
              { icon: "✓", text: "Inga", tone: "good" },
              { icon: "✗", text: "Transaktions + appar", tone: "bad" },
              { icon: "~", text: "Plugins", tone: "mid" },
              { icon: "✗", text: "Tillägg", tone: "bad" },
            ],
          },
        ],
      },
    ],
    miniTitle: "Vad vi gör annorlunda",
    miniColumns: [
      { name: "Custom Next.js (oss)", accent: "text-gold-bright" },
      { name: "Traditionella plattformar", accent: "text-ink-dim" },
    ],
    miniRows: [
      {
        label: "Filosofi",
        cells: [
          { icon: null, text: "Byggt för din verksamhet", tone: "good" },
          { icon: null, text: "Byggt för alla", tone: "neutral" },
        ],
      },
      {
        label: "Ägande",
        cells: [
          { icon: "✓", text: "Du äger allt", tone: "good" },
          { icon: "✗", text: "Du hyr systemet", tone: "bad" },
        ],
      },
      {
        label: "Support",
        cells: [
          { icon: "✓", text: "Direkt utvecklar-support", tone: "good" },
          { icon: "~", text: "Tickets / community", tone: "mid" },
        ],
      },
      {
        label: "Uppdateringar",
        cells: [
          { icon: "✓", text: "Direkt, inga begränsningar", tone: "good" },
          { icon: "~", text: "Systemberoende", tone: "mid" },
        ],
      },
    ],
    hostingTitle: "Hosting — du väljer",
    hostingIntro: "Du väljer själv hur systemet körs:",
    hostingOptionA: "Vi hostar & sköter drift — smidigt, ett färdigt system",
    hostingOptionB: "Du hostar själv — full kontroll",
    hostingNote: "Oavsett val äger du alltid hela systemet och kan flytta det när du vill.",
    closingLine:
      "Andra plattformar låter dig bygga inom deras system. Vi bygger ett system som är ditt från grunden.",
  };
}
