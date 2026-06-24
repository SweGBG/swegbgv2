"use client";

import { useLang } from "@/context/LangContext";
import { getComparisonData, Tone } from "@/lib/comparisonData";

const toneClass: Record<Tone, string> = {
  good: "text-emerald-400",
  mid: "text-amber-400",
  bad: "text-rose-400",
  neutral: "text-ink-dim",
};

export default function ComparisonTable() {
  const { lang } = useLang();
  const data = getComparisonData(lang);

  return (
    <section id="jamforelse" className="bg-panel px-[5%] py-[110px]">
      {/* intro: ownership vs renting */}
      <div className="reveal mx-auto mb-14 max-w-[700px] text-center opacity-0 translate-y-6 transition-all duration-700 ease-out">
        <div className="flex items-center justify-center gap-2.5 font-mono text-[0.78rem] uppercase tracking-[0.18em] text-blue">
          {data.introEyebrow}
        </div>
        <h2 className="mt-3.5 font-chakra text-[clamp(1.7rem,3.4vw,2.7rem)] font-bold leading-tight">
          {data.introTitle}
        </h2>
        <p className="mt-4 text-[0.92rem] leading-relaxed text-ink-dim">{data.introLead1}</p>
        <p className="mt-3 text-[0.92rem] font-medium text-ink">{data.introLead2}</p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-7 gap-y-2.5">
          {data.introBullets.map((b) => (
            <div key={b} className="flex items-center gap-2 text-[0.85rem] font-medium text-ink">
              <span className="text-gold-bright">✓</span>
              <span>{b}</span>
            </div>
          ))}
        </div>
      </div>

      {/* main comparison: desktop table */}
      <div className="reveal mx-auto hidden max-w-[1200px] opacity-0 translate-y-6 transition-all duration-700 ease-out md:block">
        <div className="overflow-x-auto rounded-lg border border-line">
          <div className="min-w-[840px]">
            <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
              <div className="border-b border-line bg-bg/40" />
              {data.columns.map((col, i) => (
                <div
                  key={col.name}
                  className={`border-b-2 px-3 py-4 text-center ${
                    i === 0 ? "border-gold bg-gold/[0.07]" : "border-line/60 bg-bg/40"
                  }`}
                >
                  <div className={`font-mono text-[0.74rem] font-semibold uppercase tracking-wide ${col.accent}`}>
                    {col.name}
                  </div>
                </div>
              ))}
            </div>

            {data.groups.map((group) => (
              <div key={group.title}>
                <div className="bg-bg/70 px-3 py-2 font-mono text-[0.66rem] uppercase tracking-[0.14em] text-ink-dim/70">
                  {group.title}
                </div>
                {group.rows.map((row) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] items-center border-b border-line/25"
                  >
                    <div className="px-3 py-3 text-[0.8rem] text-ink-dim">{row.label}</div>
                    {row.cells.map((cell, i) => (
                      <div key={i} className="px-3 py-3 text-center text-[0.78rem]">
                        <span className={toneClass[cell.tone]}>
                          {cell.icon ? `${cell.icon} ` : ""}
                          <span className="font-medium">{cell.text}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* main comparison: mobile stacked cards */}
      <div className="reveal mx-auto block max-w-[560px] opacity-0 translate-y-6 transition-all duration-700 ease-out md:hidden">
        <div className="flex flex-col gap-7">
          {data.groups.map((group) => (
            <div key={group.title}>
              <div className="mb-3 rounded-md bg-bg/70 px-3 py-2 font-mono text-[0.64rem] uppercase tracking-[0.14em] text-ink-dim/70">
                {group.title}
              </div>
              <div className="flex flex-col gap-2.5">
                {group.rows.map((row) => (
                  <div key={row.label} className="rounded-md border border-line/50 bg-bg/30 p-3">
                    <div className="mb-2 text-[0.82rem] font-semibold text-ink">{row.label}</div>
                    <div className="flex flex-col gap-1">
                      {row.cells.map((cell, i) => (
                        <div
                          key={i}
                          className={`flex items-center justify-between gap-3 rounded px-2 py-1.5 text-[0.78rem] ${
                            i === 0 ? "bg-gold/[0.06]" : ""
                          }`}
                        >
                          <span
                            className={`shrink-0 font-mono text-[0.62rem] uppercase tracking-wide ${data.columns[i].accent}`}
                          >
                            {data.columns[i].name}
                          </span>
                          <span className={`text-right ${toneClass[cell.tone]}`}>
                            {cell.icon ? `${cell.icon} ` : ""}
                            <span className="font-medium">{cell.text}</span>
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* mini comparison: desktop table */}
      <div className="reveal mx-auto mt-10 hidden max-w-[700px] opacity-0 translate-y-6 transition-all duration-700 ease-out md:block">
        <div className="rounded-lg border border-line">
          <div className="bg-bg/70 px-3 py-2.5 text-center font-mono text-[0.7rem] uppercase tracking-[0.14em] text-blue">
            {data.miniTitle}
          </div>
          <div className="grid grid-cols-[1.3fr_1fr_1fr]">
            <div className="border-b border-line bg-bg/40" />
            {data.miniColumns.map((col, i) => (
              <div
                key={col.name}
                className={`border-b-2 px-3 py-3 text-center ${
                  i === 0 ? "border-gold bg-gold/[0.07]" : "border-line/60 bg-bg/40"
                }`}
              >
                <div className={`font-mono text-[0.68rem] font-semibold uppercase tracking-wide ${col.accent}`}>
                  {col.name}
                </div>
              </div>
            ))}
          </div>
          {data.miniRows.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-[1.3fr_1fr_1fr] items-center border-b border-line/25 last:border-b-0"
            >
              <div className="px-3 py-3 text-[0.8rem] text-ink-dim">{row.label}</div>
              {row.cells.map((cell, i) => (
                <div key={i} className="px-3 py-3 text-center text-[0.78rem]">
                  <span className={toneClass[cell.tone]}>
                    {cell.icon ? `${cell.icon} ` : ""}
                    <span className="font-medium">{cell.text}</span>
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* mini comparison: mobile stacked cards */}
      <div className="reveal mx-auto mt-10 block max-w-[560px] opacity-0 translate-y-6 transition-all duration-700 ease-out md:hidden">
        <div className="mb-3 rounded-md bg-bg/70 px-3 py-2.5 text-center font-mono text-[0.64rem] uppercase tracking-[0.14em] text-blue">
          {data.miniTitle}
        </div>
        <div className="flex flex-col gap-2.5">
          {data.miniRows.map((row) => (
            <div key={row.label} className="rounded-md border border-line/50 bg-bg/30 p-3">
              <div className="mb-2 text-[0.82rem] font-semibold text-ink">{row.label}</div>
              <div className="flex flex-col gap-1">
                {row.cells.map((cell, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between gap-3 rounded px-2 py-1.5 text-[0.78rem] ${
                      i === 0 ? "bg-gold/[0.06]" : ""
                    }`}
                  >
                    <span
                      className={`shrink-0 font-mono text-[0.62rem] uppercase tracking-wide ${data.miniColumns[i].accent}`}
                    >
                      {data.miniColumns[i].name}
                    </span>
                    <span className={`text-right ${toneClass[cell.tone]}`}>
                      {cell.icon ? `${cell.icon} ` : ""}
                      <span className="font-medium">{cell.text}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* hosting callout */}
      <div className="reveal mx-auto mt-10 max-w-[700px] rounded-lg border border-blue/25 bg-blue/[0.04] p-6 opacity-0 translate-y-6 transition-all duration-700 ease-out sm:p-7">
        <div className="font-chakra text-[1.05rem] font-semibold text-ink">{data.hostingTitle}</div>
        <p className="mt-2 text-[0.86rem] text-ink-dim">{data.hostingIntro}</p>
        <div className="mt-4 flex flex-col gap-2.5">
          <div className="flex items-start gap-2.5 text-[0.86rem] text-ink">
            <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-blue shadow-[0_0_8px_rgba(79,195,247,0.6)]" />
            {data.hostingOptionA}
          </div>
          <div className="flex items-start gap-2.5 text-[0.86rem] text-ink">
            <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
            {data.hostingOptionB}
          </div>
        </div>
        <p className="mt-4 border-t border-line/40 pt-4 text-[0.82rem] italic text-ink-dim/80">
          {data.hostingNote}
        </p>
      </div>

      {/* closing punchline */}
      <p className="reveal mx-auto mt-12 max-w-[640px] text-center font-chakra text-[1.05rem] leading-snug text-ink opacity-0 translate-y-6 transition-all duration-700 ease-out sm:text-[1.15rem]">
        {data.closingLine}
      </p>
    </section>
  );
}
