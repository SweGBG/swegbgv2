"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/context/LangContext";
import LangSwitch from "@/components/LangSwitch";

export default function Navbar() {
  const { t } = useLang();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const links = [
    { href: "#tjanster", label: t("navTjanster") },
    { href: "#process", label: t("navProcess") },
    { href: "#arbete", label: t("navArbete") },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex h-[68px] items-center justify-between bg-bg/95 px-[5%] backdrop-blur-md">
        <div className="flex items-center gap-2.5 font-chakra text-[1.05rem] font-bold tracking-wide sm:text-[1.15rem]">
          <span className="h-2 w-2 shrink-0 rounded-full bg-gold-bright shadow-[0_0_12px_#f0b347,0_0_24px_#c9922a] animate-pulse-dot" />
          SWE<b className="text-gold-bright">GBG</b> TRADING
        </div>

        {/* desktop nav */}
        <div className="hidden items-center lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="ml-8 text-[0.88rem] font-medium text-ink-dim transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="ml-8 rounded-sm border border-line px-[18px] py-[9px] font-mono text-[0.78rem] text-gold-bright transition-colors hover:bg-gold/10 hover:border-gold"
          >
            {t("navCta")}
          </a>
          <LangSwitch />
        </div>

        {/* mobile hamburger */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Meny"
          aria-expanded={isOpen}
          className="relative flex h-9 w-9 shrink-0 flex-col items-center justify-center gap-[5px] lg:hidden"
        >
          <span
            className={`block h-[1.5px] w-6 bg-ink transition-transform duration-300 ${
              isOpen ? "translate-y-[6.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-6 bg-ink transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-[1.5px] w-6 bg-ink transition-transform duration-300 ${
              isOpen ? "-translate-y-[6.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* mobile slide-down menu */}
      <div
        className={`fixed left-0 right-0 top-[68px] z-40 overflow-y-auto bg-bg/98 backdrop-blur-md transition-[max-height] duration-300 ease-out lg:hidden ${
          isOpen ? "max-h-[calc(100vh-68px)]" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-[5%] py-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="rounded-md px-3 py-3 text-[0.95rem] font-medium text-ink-dim transition-colors hover:bg-panel hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={() => setIsOpen(false)}
            className="mt-2 rounded-sm border border-line px-3 py-3 text-center font-mono text-[0.85rem] text-gold-bright transition-colors hover:bg-gold/10 hover:border-gold"
          >
            {t("navCta")}
          </a>
          <div className="mt-4 flex justify-center">
            <LangSwitch />
          </div>
        </div>
      </div>
    </>
  );
}
