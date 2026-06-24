"use client";

import { useLang } from "@/context/LangContext";
import { getTiersData } from "@/lib/tiersData";

const SHEEN =
  "linear-gradient(180deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0) 14%, rgba(0,0,0,0.08) 55%, rgba(0,0,0,0.32) 100%)";
const BRUSHED =
  "repeating-linear-gradient(101deg, rgba(255,255,255,0.035) 0px, rgba(255,255,255,0.035) 1px, transparent 1px, transparent 3px)";

const METALS = [
  {
    // Launch — copper / bronze
    base: "linear-gradient(160deg,#4a3322 0%,#6b4a30 45%,#3c2a1c 100%)",
    accent: "#e0a868",
    border: "border-[#caa06a]/25",
    borderHover: "group-hover:border-[#caa06a]/55",
    chev: "text-[#e0a868]",
  },
  {
    // Growth — brushed steel
    base: "linear-gradient(160deg,#3a3f46 0%,#5a6169 45%,#2c2f35 100%)",
    accent: "#d7dbe0",
    border: "border-[#9aa3ad]/25",
    borderHover: "group-hover:border-[#9aa3ad]/55",
    chev: "text-[#d7dbe0]",
  },
  {
    // Ops System — gunmetal blue
    base: "linear-gradient(160deg,#1f242b 0%,#2d333c 45%,#171b20 100%)",
    accent: "#4fc3f7",
    border: "border-blue/25",
    borderHover: "group-hover:border-blue/55",
    chev: "text-blue",
  },
];

function Rivet({ className }: { className: string }) {
  return (
    <span
      className={`absolute h-[5px] w-[5px] rounded-full bg-gradient-to-br from-white/55 to-black/70 shadow-[0_0_2px_rgba(0,0,0,0.7)] ${className}`}
    />
  );
}

export default function TierCards() {
  const { lang, t } = useLang();
  const tiers = getTiersData(lang);
  const universalNote = t("tierUniversalNote");

  return (
    <div className="mx-auto grid max-w-[1280px] gap-6 md:grid-cols-2 lg:grid-cols-3">
      {tiers.map((tier, i) => {
        const metal = METALS[i];
        return (
          <div
            key={tier.name}
            className={`reveal tilt group relative overflow-hidden rounded-xl border ${metal.border} ${metal.borderHover} p-7 opacity-0 translate-y-6 transition-all duration-700 ease-out hover:-translate-y-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-1px_0_rgba(0,0,0,0.45),0_18px_40px_-12px_rgba(0,0,0,0.55)]`}
            style={{ backgroundImage: `${SHEEN}, ${BRUSHED}, ${metal.base}` }}
          >
            {/* light sweep on hover */}
            <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
              <span className="absolute -inset-y-full left-[-60%] w-1/4 rotate-[10deg] bg-gradient-to-b from-transparent via-white/10 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[420%]" />
            </span>

            {/* rivets */}
            <Rivet className="left-3 top-3" />
            <Rivet className="right-3 top-3" />
            <Rivet className="bottom-3 left-3" />
            <Rivet className="bottom-3 right-3" />

            {tier.badge && (
              <span
                className="absolute right-7 top-7 rounded-full px-2.5 py-0.5 font-mono text-[0.6rem] uppercase tracking-wide"
                style={{ color: metal.accent, backgroundColor: `${metal.accent}22` }}
              >
                {tier.badge}
              </span>
            )}

            <div className="relative">
              <span className="font-mono text-[0.7rem] tracking-[0.2em]" style={{ color: metal.accent }}>
                {tier.num}
              </span>
              <h3 className="mt-1.5 font-chakra text-[1.6rem] font-bold text-white">{tier.name}</h3>
              <p className="mt-2 text-[0.86rem] italic leading-relaxed" style={{ color: metal.accent }}>
                “{tier.tagline}”
              </p>
              <p className="mt-3 text-[0.86rem] leading-relaxed text-ink-dim/90">{tier.description}</p>

              <div
                className="mt-5 font-mono text-[0.66rem] uppercase tracking-[0.14em]"
                style={{ color: metal.accent }}
              >
                {tier.includedLabel}
              </div>
              <ul className="mt-3 flex flex-col gap-[9px]">
                {tier.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[0.82rem] leading-relaxed text-ink-dim">
                    <span className={`font-bold ${metal.chev}`}>›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 rounded-md bg-black/25 px-3.5 py-3">
                <p className="text-[0.76rem] italic leading-relaxed text-ink-dim/80">💡 {tier.note}</p>
              </div>

              <p className="mt-3 text-center font-mono text-[0.66rem] uppercase tracking-[0.08em] text-ink-dim/45">
                {universalNote}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
