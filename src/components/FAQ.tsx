"use client";

// ─────────────────────────────────────────────────────────────
//  src/components/FAQ.tsx
//  Tvåspråkig FAQ som följer språkväxlaren via useLang().
//  Texten hämtas från translations.ts (faq1Q/faq1A … faq8Q/faq8A).
//
//  VIKTIGT FÖR AEO: den SVENSKA texten i translations.ts måste
//  vara identisk med faqJsonLd i lib/jsonld.ts. Schemat ligger i
//  layout (svenska) — synligt innehåll måste matcha det.
// ─────────────────────────────────────────────────────────────

import { useState } from "react";
import { useLang } from "@/context/LangContext";

// Nyckelpar i samma ordning som schemat. Lägger du till en fråga:
// lägg till nyckelparet här OCH i translations.ts OCH i faqJsonLd.
const FAQ_KEYS = [
  { q: "faq1Q", a: "faq1A" },
  { q: "faq2Q", a: "faq2A" },
  { q: "faq3Q", a: "faq3A" },
  { q: "faq4Q", a: "faq4A" },
  { q: "faq5Q", a: "faq5A" },
  { q: "faq6Q", a: "faq6A" },
  { q: "faq7Q", a: "faq7A" },
  { q: "faq8Q", a: "faq8A" },
  { q: "faq9Q", a: "faq9A" },
] as const;

export default function FAQ() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-labelledby="faq-rubrik"
      className="mx-auto w-full max-w-3xl px-[5%] py-[110px]"
    >
      <div className="mb-3 flex items-center gap-2.5 font-mono text-[0.78rem] uppercase tracking-[0.18em] text-blue">
        {t("faqEyebrow")}
      </div>
      <h2
        id="faq-rubrik"
        className="mb-10 font-chakra text-[clamp(1.8rem,3.2vw,2.6rem)] font-semibold leading-tight"
      >
        {t("faqH2")}
      </h2>

      <dl className="divide-y divide-line/40">
        {FAQ_KEYS.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q} className="py-1.5">
              <dt>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left transition-colors hover:text-gold-bright"
                >
                  <span className="font-chakra text-[1rem] font-semibold text-ink sm:text-[1.08rem]">
                    {t(item.q)}
                  </span>
                  <span
                    className={`shrink-0 font-mono text-gold-bright transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
              </dt>
              <dd
                className={`grid overflow-hidden transition-all duration-300 ease-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="pb-5 pr-8 text-[0.9rem] leading-relaxed text-ink-dim sm:text-base">
                    {t(item.a)}
                  </p>
                </div>
              </dd>
            </div>
          );
        })}
      </dl>
    </section>
  );
}
