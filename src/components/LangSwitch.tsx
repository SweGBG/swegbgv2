"use client";

import { useLang } from "@/context/LangContext";
import { usePathname, useRouter } from "next/navigation";

function FlagSV({ active }: { active: boolean }) {
  return (
    <svg
      width="21"
      height="15"
      viewBox="0 0 20 14"
      className={`rounded-[2px] ring-1 ring-black/30 transition-all duration-200 ${
        active ? "opacity-100" : "opacity-40 grayscale-[0.3]"
      }`}
      aria-hidden="true"
    >
      <rect width="20" height="14" fill="#006AA7" />
      <rect x="7" width="3" height="14" fill="#FECC02" />
      <rect y="5" width="20" height="3" fill="#FECC02" />
    </svg>
  );
}

function FlagEN({ active }: { active: boolean }) {
  return (
    <svg
      width="21"
      height="15"
      viewBox="0 0 20 14"
      className={`rounded-[2px] ring-1 ring-black/30 transition-all duration-200 ${
        active ? "opacity-100" : "opacity-40 grayscale-[0.3]"
      }`}
      aria-hidden="true"
    >
      <rect width="20" height="14" fill="#00247D" />
      <path d="M0,0 L20,14 M20,0 L0,14" stroke="#FFFFFF" strokeWidth="2.6" />
      <path d="M0,0 L20,14 M20,0 L0,14" stroke="#CF142B" strokeWidth="1.2" />
      <path d="M10,0 V14 M0,7 H20" stroke="#FFFFFF" strokeWidth="4.6" />
      <path d="M10,0 V14 M0,7 H20" stroke="#CF142B" strokeWidth="2.4" />
    </svg>
  );
}

export default function LangSwitch() {
  const { lang, toggleLang } = useLang();
  const router = useRouter();
  const pathname = usePathname();

  // Byter BÅDE klientspråket OCH URL:en så de aldrig hamnar i otakt.
  // / → /en och /en → / (Next prefetch:ar så det känns direkt).
  const handleSwitch = () => {
    toggleLang();
    if (lang === "sv") {
      // går till engelska
      if (!pathname.startsWith("/en")) router.push("/en");
    } else {
      // går till svenska
      if (pathname.startsWith("/en")) router.push("/");
    }
  };

  return (
    <button
      onClick={handleSwitch}
      aria-label="Byt språk / Switch language"
      title={lang === "sv" ? "Switch to English" : "Byt till svenska"}
      className="ml-7 flex items-center gap-2 rounded-full border border-line/50 bg-panel/30 px-2.5 py-[6px] backdrop-blur-sm transition-colors hover:border-gold/50 hover:bg-panel/60"
    >
      <FlagSV active={lang === "sv"} />
      <span className="text-[10px] text-ink-dim/40">/</span>
      <FlagEN active={lang === "en"} />
    </button>
  );
}
