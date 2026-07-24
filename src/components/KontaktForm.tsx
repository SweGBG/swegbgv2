"use client";

//  KontaktForm — "Boka gratis demo"-formulär för swegbg.com
//  Följer samma mönster som resten av sajten: flat t("nyckel") via useLang(),
//  navy/guld-tema, Chakra Petch. Skickar till /api/kontakt som mailar via Resend.
//
//  Nycklar som måste finnas i translations.ts (både sv och en):
//    kontaktEyebrow, kontaktH2, kontaktText, kontaktNamn, kontaktEmail,
//    kontaktForetag, kontaktMeddelande, kontaktSkicka, kontaktSkickar,
//    kontaktTack, kontaktFel, kontaktValidering

import { useState } from "react";
import { useLang } from "@/context/LangContext";

type Status = "idle" | "sending" | "sent" | "error" | "invalid";

export default function KontaktForm() {
  const { lang, t } = useLang();
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    namn: "",
    email: "",
    foretag: "",
    meddelande: "",
    // Honeypot: äkta användare lämnar detta tomt. Bots som autofyller
    // alla fält triggar det, och vi slänger då inlägget tyst.
    webbplats: "",
  });

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async () => {
    if (status === "sending") return;

    // Honeypot ifylld → nästan säkert en bot. Låtsas att det gick bra.
    if (form.webbplats) {
      setStatus("sent");
      setForm({ namn: "", email: "", foretag: "", meddelande: "", webbplats: "" });
      return;
    }

    if (!form.namn.trim() || !form.email.trim() || !form.meddelande.trim()) {
      setStatus("invalid");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, lang }),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      setForm({ namn: "", email: "", foretag: "", meddelande: "", webbplats: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputBase =
    "w-full rounded-sm border border-line bg-panel/60 px-4 py-3 text-left text-[0.95rem] text-ink placeholder:text-ink-dim/60 outline-none transition-colors focus:border-gold focus:bg-panel";

  return (
    <div className="mx-auto mt-12 max-w-xl text-left">
      <div className="flex flex-col gap-4">
        <input
          type="text"
          value={form.namn}
          onChange={update("namn")}
          placeholder={t("kontaktNamn")}
          autoComplete="name"
          className={inputBase}
        />
        <input
          type="email"
          value={form.email}
          onChange={update("email")}
          placeholder={t("kontaktEmail")}
          autoComplete="email"
          className={inputBase}
        />
        <input
          type="text"
          value={form.foretag}
          onChange={update("foretag")}
          placeholder={t("kontaktForetag")}
          autoComplete="organization"
          className={inputBase}
        />
        <textarea
          value={form.meddelande}
          onChange={update("meddelande")}
          placeholder={t("kontaktMeddelande")}
          rows={5}
          className={`${inputBase} resize-none`}
        />

        {/* Honeypot — dolt för användare, synligt för bots. Ta inte bort. */}
        <input
          type="text"
          name="webbplats"
          value={form.webbplats}
          onChange={update("webbplats")}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute left-[-9999px] h-0 w-0 opacity-0"
        />

        <button
          onClick={handleSubmit}
          disabled={status === "sending"}
          className="magnetic group relative mt-2 inline-flex items-center justify-center gap-2 overflow-hidden rounded-sm bg-gold-bright px-[30px] py-[15px] font-mono text-[0.85rem] font-semibold tracking-wide text-[#0c0a06] transition-transform hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(240,179,71,0.35)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none"
        >
          <span className="absolute left-[-120%] top-0 h-full w-3/5 -skew-x-[20deg] bg-gradient-to-r from-transparent via-white/50 to-transparent transition-[left] duration-500 group-hover:left-[130%]" />
          {status === "sending" ? t("kontaktSkickar") : t("kontaktSkicka")}
        </button>

        {status === "sent" && (
          <p className="rounded-sm border border-gold/40 bg-gold/10 px-4 py-3 text-[0.9rem] text-gold-bright">
            {t("kontaktTack")}
          </p>
        )}
        {status === "invalid" && (
          <p className="rounded-sm border border-gold/30 bg-gold/5 px-4 py-3 text-[0.9rem] text-ink-dim">
            {t("kontaktValidering")}
          </p>
        )}
        {status === "error" && (
          <p className="rounded-sm border border-red-500/40 bg-red-500/10 px-4 py-3 text-[0.9rem] text-red-400">
            {t("kontaktFel")}
          </p>
        )}
      </div>
    </div>
  );
}
