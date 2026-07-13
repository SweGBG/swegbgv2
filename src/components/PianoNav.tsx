"use client";

/**
 * PianoNav — SweGBG:s signatur-navigering.
 *
 * Vertikala "pianotangenter" i stigande shades av guld: mörkast överst,
 * ljusast nederst. Aktiv tangent trycks ner: glider ut åt höger, får full
 * guldton och glow. Hover ger en halvglid.
 *
 * Återanvändbar: skicka in items + activeId + onSelect.
 */

export type PianoItem = {
  id: string;
  label: string;
  sublabel?: string;
};

interface PianoNavProps {
  items: PianoItem[];
  activeId: string;
  onSelect: (id: string) => void;
  className?: string;
}

// Guld-skalan: index 0 = mörkast, sista = ljusast
const SHADES = [
  { bg: "rgba(240,179,71,0.06)", border: "rgba(240,179,71,0.18)" },
  { bg: "rgba(240,179,71,0.10)", border: "rgba(240,179,71,0.24)" },
  { bg: "rgba(240,179,71,0.15)", border: "rgba(240,179,71,0.32)" },
  { bg: "rgba(240,179,71,0.21)", border: "rgba(240,179,71,0.40)" },
  { bg: "rgba(240,179,71,0.28)", border: "rgba(240,179,71,0.50)" },
  { bg: "rgba(240,179,71,0.36)", border: "rgba(240,179,71,0.62)" },
];

export default function PianoNav({ items, activeId, onSelect, className = "" }: PianoNavProps) {
  return (
    <nav className={`flex flex-col gap-[3px] ${className}`} aria-label="Kontomeny">
      {items.map((item, i) => {
        const shade = SHADES[Math.min(i, SHADES.length - 1)];
        const active = item.id === activeId;

        return (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
            aria-current={active ? "page" : undefined}
            style={
              active
                ? undefined
                : { backgroundColor: shade.bg, borderColor: shade.border }
            }
            className={`group relative flex w-full items-center justify-between overflow-hidden
              rounded-r-sm border-l-2 px-5 py-4 text-left transition-all duration-300 ease-out
              ${
                active
                  ? "translate-x-3 border-gold-bright bg-gold-bright/90 shadow-[0_0_24px_rgba(240,179,71,0.35),inset_0_1px_0_rgba(255,255,255,0.25)]"
                  : "translate-x-0 hover:translate-x-1.5 hover:shadow-[0_0_14px_rgba(240,179,71,0.15)]"
              }`}
          >
            {/* tangentens "kant" — ljusreflex som på en riktig tangent */}
            <span
              className={`pointer-events-none absolute inset-x-0 top-0 h-px
                ${active ? "bg-white/40" : "bg-white/10"}`}
            />

            <span className="flex flex-col">
              <span
                className={`font-chakra text-[0.95rem] font-semibold tracking-wide transition-colors
                  ${active ? "text-[#0c0a06]" : "text-ink group-hover:text-gold-bright"}`}
              >
                {item.label}
              </span>
              {item.sublabel && (
                <span
                  className={`mt-0.5 font-mono text-[0.66rem] tracking-wide transition-colors
                    ${active ? "text-[#0c0a06]/70" : "text-ink-dim"}`}
                >
                  {item.sublabel}
                </span>
              )}
            </span>

            {/* pil som glider fram */}
            <span
              className={`font-mono text-[0.8rem] transition-all duration-300
                ${
                  active
                    ? "translate-x-0 text-[#0c0a06] opacity-100"
                    : "-translate-x-1 text-gold-bright opacity-0 group-hover:translate-x-0 group-hover:opacity-70"
                }`}
            >
              ▸
            </span>
          </button>
        );
      })}
    </nav>
  );
}
