"use client";

import { useEffect } from "react";
import type { Lang } from "@/lib/translations";

const CURSOR_HTML =
  '<span class="inline-block w-[7px] h-[14px] bg-blue ml-0.5 align-[-2px] animate-blink"></span>';

function getTerminalLines(lang: Lang) {
  if (lang === "en") {
    return [
      { t: "$ npx create-next-app@latest swegbg-project", cls: "" },
      { t: "✓ Installing dependencies...", cls: "text-ink-dim" },
      { t: "$ git init && git remote add origin", cls: "" },
      { t: "✓ Client owns the repo from day 1", cls: "text-gold-bright" },
      { t: "$ vercel deploy --prod", cls: "" },
      { t: "✓ Live in 2.4s", cls: "text-gold-bright" },
    ];
  }
  return [
    { t: "$ npx create-next-app@latest swegbg-projekt", cls: "" },
    { t: "✓ Installerar beroenden...", cls: "text-ink-dim" },
    { t: "$ git init && git remote add origin", cls: "" },
    { t: "✓ Kund äger repo från dag 1", cls: "text-gold-bright" },
    { t: "$ vercel deploy --prod", cls: "" },
    { t: "✓ Live på 2.4s", cls: "text-gold-bright" },
  ];
}

export default function SiteEffects({ lang }: { lang: Lang }) {
  useEffect(() => {
    // ---- spotlight cursor glow ----
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--mx", `${e.clientX}px`);
      document.documentElement.style.setProperty("--my", `${e.clientY}px`);
    };
    document.addEventListener("mousemove", handleMouseMove);

    // ---- terminal typing sequence ----
    const body = document.getElementById("termBody");
    const lines = getTerminalLines(lang);
    let li = 0;
    let ci = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    function typeLine() {
      if (!body) return;
      if (li >= lines.length) {
        timeoutId = setTimeout(() => {
          body.innerHTML = "";
          li = 0;
          ci = 0;
          typeLine();
        }, 2200);
        return;
      }
      const line = lines[li];
      if (ci === 0) {
        const div = document.createElement("div");
        div.className = line.cls;
        div.id = `line-${li}`;
        body.appendChild(div);
      }
      const div = document.getElementById(`line-${li}`);
      if (!div) return;
      if (ci <= line.t.length) {
        div.innerHTML = line.t.slice(0, ci) + CURSOR_HTML;
        ci++;
        timeoutId = setTimeout(typeLine, 22 + Math.random() * 30);
      } else {
        div.innerHTML = line.t;
        li++;
        ci = 0;
        timeoutId = setTimeout(typeLine, 260);
      }
    }
    if (body) body.innerHTML = "";
    li = 0;
    ci = 0;
    typeLine();

    // ---- scroll reveal ----
    const revealEls = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.remove("opacity-0", "translate-y-6");
            en.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach((el) => obs.observe(el));

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeoutId);
      obs.disconnect();
    };
  }, [lang]);

  return null;
}
