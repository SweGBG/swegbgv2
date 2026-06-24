"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { translations, Lang } from "@/lib/translations";

interface LangContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (key: keyof typeof translations) => string;
}

const LangContext = createContext<LangContextType | undefined>(undefined);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("sv");

  const toggleLang = () => setLang((prev) => (prev === "sv" ? "en" : "sv"));

  const t = (key: keyof typeof translations) => {
    const entry = translations[key];
    if (!entry) return String(key);
    return entry[lang];
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) {
    throw new Error("useLang måste användas inom en LangProvider");
  }
  return ctx;
}
