"use client";

import SiteEffects from "@/components/SiteEffects";
import Navbar from "@/components/Navbar";
import ComparisonTable from "@/components/ComparisonTable";
import TierCards from "@/components/TierCards";
import FAQ from "@/components/FAQ";
import { useLang } from "@/context/LangContext";

export default function HomeContent() {
  const { lang, t } = useLang();

  return (
    <>
      <SiteEffects lang={lang} />

      {/* spotlight cursor glow */}
      <div className="fixed inset-0 z-[5] pointer-events-none [mix-blend-mode:screen] bg-[radial-gradient(600px_circle_at_var(--mx,50%)_var(--my,30%),rgba(79,195,247,0.06),transparent_60%)]" />

      {/* scanlines */}
      <div className="fixed inset-0 z-[6] pointer-events-none opacity-50 bg-[repeating-linear-gradient(to_bottom,rgba(0,0,0,0)_0px,rgba(0,0,0,0)_2px,rgba(0,0,0,0.06)_3px,rgba(0,0,0,0)_4px)]" />

      {/* noise flicker */}
      <div className="fixed inset-0 z-[6] pointer-events-none bg-blue/[0.015] animate-flicker" />

      <Navbar />

      <section
        className="relative flex min-h-screen items-center bg-cover bg-center
          bg-[image:linear-gradient(100deg,rgba(6,9,17,0.97)_0%,rgba(6,9,17,0.82)_32%,rgba(6,9,17,0.45)_58%,rgba(6,9,17,0.7)_100%),url('/cyberjs.jpg')]"
      >
        <div data-parallax="0.12" className="relative z-[2] mx-auto w-full max-w-[1400px] px-[5%] pt-[90px]">
          <div className="mb-5 flex items-center gap-2.5 font-mono text-[0.78rem] uppercase tracking-[0.18em] text-blue opacity-0 animate-fade-up [animation-delay:0.2s]">
            <span className="h-px w-7 bg-blue" />
            {t("heroEyebrow")}
          </div>

          <h1 className="max-w-[880px] font-chakra text-[clamp(2.6rem,6vw,5.2rem)] font-bold leading-[1.04] tracking-tight opacity-0 animate-fade-up [animation-delay:0.4s]">
            {t("heroH1Pre")}
            <span
              className="group relative inline-block cursor-pointer text-gold-bright
                before:absolute before:inset-0 before:opacity-0 before:text-blue before:[mix-blend-mode:screen] before:content-[attr(data-text)]
                hover:before:opacity-80 hover:before:animate-glitch1
                after:absolute after:inset-0 after:opacity-0 after:text-[#ff4d6d] after:[mix-blend-mode:screen] after:content-[attr(data-text)]
                hover:after:opacity-70 hover:after:animate-glitch2"
              data-text={t("heroGlitchWord")}
            >
              {t("heroGlitchWord")}
            </span>
            {t("heroH1Mid")}
            <span className="text-gold-bright">{t("heroH1Glow")}</span>
          </h1>

          <p className="lead mt-[26px] max-w-[540px] text-[1.08rem] leading-[1.65] text-ink-dim opacity-0 animate-fade-up [animation-delay:0.6s]">
            {t("heroLead")}
          </p>

          <div className="mt-[38px] flex flex-wrap items-center gap-4 opacity-0 animate-fade-up [animation-delay:0.8s]">
            <a
              href="#kontakt"
              className="magnetic group relative inline-flex items-center gap-2 overflow-hidden rounded-sm bg-gold-bright px-[30px] py-[15px] font-mono text-[0.85rem] font-semibold tracking-wide text-[#0c0a06] transition-transform hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(240,179,71,0.35)]"
            >
              <span className="absolute left-[-120%] top-0 h-full w-3/5 -skew-x-[20deg] bg-gradient-to-r from-transparent via-white/50 to-transparent transition-[left] duration-500 group-hover:left-[130%]" />
              {t("heroCtaPrimary")}
            </a>
            <a
              href="#tjanster"
              className="rounded-sm border border-ink/25 px-[26px] py-[14px] font-mono text-[0.85rem] text-ink transition-colors hover:border-blue hover:text-blue"
            >
              {t("heroCtaGhost")}
            </a>
          </div>
        </div>

        <div className="absolute bottom-[10%] right-[5%] z-[3] hidden w-[380px] rounded-md border border-line bg-panel/90 shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_0_1px_rgba(201,146,42,0.08)] backdrop-blur-md opacity-0 animate-fade-up [animation-delay:1.1s] md:block">
          <div className="flex items-center gap-[7px] border-b border-line px-[14px] py-[10px]">
            <span className="h-[9px] w-[9px] rounded-full bg-[#ff5f57]" />
            <span className="h-[9px] w-[9px] rounded-full bg-[#febc2e]" />
            <span className="h-[9px] w-[9px] rounded-full bg-[#28c840]" />
            <small className="ml-auto font-mono text-[0.68rem] text-ink-dim">
              {t("terminalTitle")}
            </small>
          </div>
          <div
            id="termBody"
            className="min-h-[150px] px-4 pb-[18px] pt-4 font-mono text-[0.78rem] leading-[1.75] text-[#9ee7a8]"
          />
        </div>
      </section>

      {/* ── value banner ── */}
      <div className="group/banner relative overflow-hidden border-y border-line bg-panel">
        {/* lager 1: dubbel radiell glöd (gold uppe, blå nere) */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(240,179,71,0.07),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(79,195,247,0.05),transparent_55%)]" />
        {/* lager 2: fint rutnät som tonar ut */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.4] [mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)] bg-[linear-gradient(rgba(201,146,42,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(201,146,42,0.06)_1px,transparent_1px)] bg-[size:46px_46px]" />
        {/* lager 3: ljusstrimma som sveper när man hovrar bannern */}
        <div className="pointer-events-none absolute inset-y-0 left-[-30%] w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent transition-[left] duration-1000 ease-out group-hover/banner:left-[130%]" />
        {/* hårlinjer upp/ner */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-bright/45 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue/30 to-transparent" />

        <div className="relative mx-auto max-w-[1400px] px-[5%] py-8">
          <div className="mb-6 flex items-center gap-2.5 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-blue opacity-0 animate-fade-up">
            <span className="h-px w-7 bg-blue" />
            {t("bannerKicker")}
            <span className="ml-1 inline-block h-1.5 w-1.5 rounded-full bg-blue animate-pulse-dot" />
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-7 md:grid-cols-4 md:divide-x md:divide-line">
            {[
              { t: "bannerItem1Title", s: "bannerItem1Sub" },
              { t: "bannerItem2Title", s: "bannerItem2Sub" },
              { t: "bannerItem3Title", s: "bannerItem3Sub" },
              { t: "bannerItem4Title", s: "bannerItem4Sub" },
            ].map((item, i) => (
              <div
                key={item.t}
                style={{ animationDelay: `${0.15 + i * 0.12}s` }}
                className={`group relative flex items-start gap-3 opacity-0 animate-fade-up ${i === 0 ? "" : "md:pl-6"}`}
              >
                {/* diamantmarkör med glöd på hover */}
                <span className="relative mt-[6px] flex h-2.5 w-2.5 shrink-0 rotate-45 items-center justify-center border border-gold-bright/70 bg-gold-bright/15 transition-all duration-300 group-hover:bg-gold-bright group-hover:shadow-[0_0_12px_rgba(240,179,71,0.7)]">
                  <span className="absolute inset-0 rounded-[1px] bg-gold-bright opacity-0 transition-opacity duration-300 group-hover:animate-pulse-dot group-hover:opacity-100" />
                </span>
                <div>
                  <div className="font-chakra text-[1rem] font-semibold leading-snug text-ink transition-colors duration-300 group-hover:text-gold-bright">
                    {t(item.t as any)}
                  </div>
                  <div className="mt-1 font-mono text-[0.72rem] leading-relaxed text-ink-dim transition-colors duration-300 group-hover:text-ink/80">
                    {t(item.s as any)}
                  </div>
                  {/* underline som växer fram på hover */}
                  <span className="mt-2 block h-px w-0 bg-gradient-to-r from-gold-bright to-transparent transition-all duration-500 group-hover:w-12" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section id="tjanster" className="px-[5%] py-[110px]">
        <div className="reveal mx-auto mb-16 max-w-[680px] text-center opacity-0 translate-y-6 transition-all duration-700 ease-out">
          <div className="flex items-center justify-center gap-2.5 font-mono text-[0.78rem] uppercase tracking-[0.18em] text-blue">
            {t("tjansterEyebrow")}
          </div>
          <h2 className="mt-3.5 font-chakra text-[clamp(1.8rem,3.2vw,2.6rem)] font-semibold leading-tight">
            {t("tjansterH2")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-dim">{t("tjansterP")}</p>
        </div>

        <TierCards />
      </section>

      <ComparisonTable />

      <section id="process" className="bg-panel px-[5%] py-[110px]">
        <div className="reveal mx-auto mb-16 max-w-[680px] text-center opacity-0 translate-y-6 transition-all duration-700 ease-out">
          <div className="flex items-center justify-center gap-2.5 font-mono text-[0.78rem] uppercase tracking-[0.18em] text-blue">
            {t("processEyebrow")}
          </div>
          <h2 className="mt-3.5 font-chakra text-[clamp(1.8rem,3.2vw,2.6rem)] font-semibold leading-tight">
            {t("processH2")}
          </h2>
        </div>
        <div className="mx-auto grid max-w-[1100px] gap-9 md:grid-cols-4 md:gap-0">
          {[
            { num: "step1Num", h: "step1H", p: "step1P" },
            { num: "step2Num", h: "step2H", p: "step2P" },
            { num: "step3Num", h: "step3H", p: "step3P" },
            { num: "step4Num", h: "step4H", p: "step4P" },
          ].map((step, i) => (
            <div
              key={step.num}
              className={`reveal px-[22px] opacity-0 translate-y-6 transition-all duration-700 ease-out md:border-l md:border-line ${i === 0 ? "md:border-l-0 md:pl-0" : ""
                }`}
            >
              <div className="font-mono text-[0.78rem] tracking-wide text-gold">{t(step.num as any)}</div>
              <h4 className="mt-2.5 font-chakra text-[1.08rem] font-semibold">{t(step.h as any)}</h4>
              <p className="mt-[9px] text-[0.88rem] leading-relaxed text-ink-dim">{t(step.p as any)}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="arbete" className="px-[5%] py-[110px]">
        <div className="reveal mx-auto mb-16 max-w-[680px] text-center opacity-0 translate-y-6 transition-all duration-700 ease-out">
          <div className="flex items-center justify-center gap-2.5 font-mono text-[0.78rem] uppercase tracking-[0.18em] text-blue">
            {t("arbeteEyebrow")}
          </div>
          <h2 className="mt-3.5 font-chakra text-[clamp(1.8rem,3.2vw,2.6rem)] font-semibold leading-tight">
            {t("arbeteH2")}
          </h2>
        </div>
        <div className="mx-auto grid max-w-[1100px] gap-6 md:grid-cols-3">
          <div className="reveal rounded-lg border border-line bg-panel p-[30px] opacity-0 translate-y-6 transition-all duration-700 ease-out hover:-translate-y-1 hover:border-blue-dim">
            <div className="flex items-baseline justify-between">
              <h3 className="font-chakra text-[1.2rem] font-semibold">Atilli Berg</h3>
              <a
                href="https://barberare.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[0.74rem] text-blue transition-colors hover:text-gold-bright hover:underline"
              >
                barberare.vercel.app
              </a>
            </div>
            <p className="mt-3.5 text-[0.9rem] leading-relaxed text-ink-dim">{t("work1Desc")}</p>
            <div className="mt-[18px] flex flex-wrap gap-2">
              {["Next.js", "Supabase", "Resend", "CSS Modules"].map((tag) => (
                <span key={tag} className="rounded-full border border-line px-[9px] py-1 font-mono text-[0.66rem] text-ink-dim">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="reveal group rounded-lg border border-line bg-panel p-[30px] opacity-0 translate-y-6 transition-all duration-700 ease-out hover:-translate-y-1 hover:border-gold-bright/40">
            <div className="flex items-baseline justify-between">
              <h3 className="font-chakra text-[1.2rem] font-semibold">SweGBG Store</h3>
              <a
                href="https://swegbgtrading.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[0.74rem] text-blue transition-colors hover:text-gold-bright hover:underline"
              >
                swegbgtrading.vercel.app
              </a>
            </div>

            {/* badge / coin i mitten */}
            <a
              href="https://swegbgtrading.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="relative mx-auto mt-5 flex h-[160px] w-[160px] items-center justify-center"
            >
              <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(240,179,71,0.28),transparent_65%)] blur-lg opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
              <img
                src="/swegbg-coin.png"
                alt="SweGBG Trading"
                className="relative h-full w-full object-contain drop-shadow-[0_4px_18px_rgba(240,179,71,0.4)] transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3"
              />
            </a>

            <p className="mt-4 text-[0.9rem] leading-relaxed text-ink-dim">{t("work3Desc")}</p>
            <div className="mt-[18px] flex flex-wrap gap-2">
              {["Next.js", "Supabase", "Stripe", "Custom API"].map((tag) => (
                <span key={tag} className="rounded-full border border-line px-[9px] py-1 font-mono text-[0.66rem] text-ink-dim">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="reveal rounded-lg border border-line bg-panel p-[30px] opacity-0 translate-y-6 transition-all duration-700 ease-out hover:-translate-y-1 hover:border-blue-dim">
            <div className="flex items-baseline justify-between">
              <h3 className="font-chakra text-[1.2rem] font-semibold">Green Land</h3>
              <a
                href="https://greenland-gamma-peach.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[0.74rem] text-blue transition-colors hover:text-gold-bright hover:underline"
              >
                greenland-gamma-peach.vercel.app
              </a>
            </div>
            <p className="mt-3.5 text-[0.9rem] leading-relaxed text-ink-dim">{t("work4Desc")}</p>
            <div className="mt-[18px] flex flex-wrap gap-2">
              {["Next.js", "Tailwind", "TypeScript"].map((tag) => (
                <span key={tag} className="rounded-full border border-line px-[9px] py-1 font-mono text-[0.66rem] text-ink-dim">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="reveal mx-auto mt-6 max-w-[1100px] opacity-0 translate-y-6 transition-all duration-700 ease-out">
          <div className="mb-4 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-ink-dim/60">
            {t("demosLabel")}
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { name: "coalisking", url: "https://coalisking.vercel.app" },
              { name: "hitekk", url: "https://hitekk.vercel.app" },
              { name: "stalco", url: "https://stalco-theta.vercel.app" },
            ].map((demo) => (
              <a
                key={demo.name}
                href={demo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block rounded-lg border border-line bg-panel/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-dim"
              >
                <span className="absolute left-4 top-4 rounded-full border border-line/70 bg-bg/60 px-2 py-0.5 font-mono text-[0.6rem] uppercase tracking-wide text-ink-dim/70">
                  {t("demoBadge")}
                </span>
                <h4 className="mt-7 font-chakra text-[1rem] font-semibold capitalize text-ink transition-colors group-hover:text-gold-bright">
                  {demo.name}
                </h4>
                <span className="mt-1 block font-mono text-[0.7rem] text-blue/80 transition-colors group-hover:text-blue">
                  {demo.url.replace("https://", "")}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <FAQ />

      <section
        id="kontakt"
        className="px-[5%] py-[110px] text-center bg-[radial-gradient(ellipse_at_center,rgba(201,146,42,0.07),transparent_65%)]"
      >
        <h2 className="mx-auto max-w-[780px] font-chakra text-[clamp(2rem,4.5vw,3.4rem)] font-bold leading-[1.15]">
          {t("finalH2")}
        </h2>
        <p className="mt-5 text-[1.02rem] text-ink-dim">{t("finalP")}</p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#"
            className="magnetic group relative inline-flex items-center gap-2 overflow-hidden rounded-sm bg-gold-bright px-[30px] py-[15px] font-mono text-[0.85rem] font-semibold tracking-wide text-[#0c0a06] transition-transform hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(240,179,71,0.35)]"
          >
            <span className="absolute left-[-120%] top-0 h-full w-3/5 -skew-x-[20deg] bg-gradient-to-r from-transparent via-white/50 to-transparent transition-[left] duration-500 group-hover:left-[130%]" />
            {t("finalCta")}
          </a>
        </div>
      </section>

      <footer className="flex flex-wrap items-center justify-between gap-3.5 border-t border-line px-[5%] py-[34px] font-mono text-[0.76rem] text-ink-dim">
        <div className="flex items-center gap-2.5 font-chakra text-[0.95rem] font-bold">
          <span className="h-2 w-2 rounded-full bg-gold-bright shadow-[0_0_12px_#f0b347,0_0_24px_#c9922a] animate-pulse-dot" />
          SWE<b className="text-gold-bright">GBG</b> TRADING
        </div>
        <div>{t("footerLocation")}</div>
      </footer>
    </>
  );
}
