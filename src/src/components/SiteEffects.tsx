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

    // ---- scroll reveal (with stagger + blur-in) ----
    const revealEls = document.querySelectorAll<HTMLElement>(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            const el = en.target as HTMLElement;
            // stagger siblings that share a parent for a cascading feel
            const siblings = el.parentElement
              ? Array.from(el.parentElement.querySelectorAll(":scope > .reveal"))
              : [el];
            const idx = Math.max(siblings.indexOf(el), 0);
            el.style.transitionDelay = `${Math.min(idx * 90, 360)}ms`;
            el.classList.remove("opacity-0", "translate-y-6");
            el.classList.add("opacity-100", "translate-y-0", "is-in");
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach((el) => obs.observe(el));

    const reduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // ---- scroll progress bar ----
    let progress = document.getElementById("scroll-progress");
    if (!progress) {
      progress = document.createElement("div");
      progress.id = "scroll-progress";
      progress.setAttribute("aria-hidden", "true");
      document.body.appendChild(progress);
    }

    // ---- single rAF loop: progress + hero parallax (scroll driven) ----
    const parallaxEls = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]")
    );
    let targetY = window.scrollY || 0;
    let smoothY = targetY;
    let rafId = 0;

    const onScroll = () => {
      targetY = window.scrollY || 0;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const tick = () => {
      rafId = requestAnimationFrame(tick);
      smoothY = reduced ? targetY : smoothY + (targetY - smoothY) * 0.12;

      const docH =
        document.documentElement.scrollHeight - window.innerHeight;
      const p = docH > 0 ? Math.min(smoothY / docH, 1) : 0;
      if (progress) progress.style.width = `${p * 100}%`;

      if (!reduced) {
        for (const el of parallaxEls) {
          const speed = parseFloat(el.dataset.parallax || "0.15");
          el.style.transform = `translate3d(0, ${smoothY * speed}px, 0)`;
        }
      }
    };
    rafId = requestAnimationFrame(tick);

    // ---- 3D tilt on cursor (.tilt) ----
    const tiltEls = Array.from(document.querySelectorAll<HTMLElement>(".tilt"));
    const tiltCleanups: Array<() => void> = [];
    if (!reduced) {
      tiltEls.forEach((el) => {
        let frame = 0;
        const move = (e: MouseEvent) => {
          cancelAnimationFrame(frame);
          frame = requestAnimationFrame(() => {
            const r = el.getBoundingClientRect();
            const px = (e.clientX - r.left) / r.width - 0.5;
            const py = (e.clientY - r.top) / r.height - 0.5;
            el.style.transition = "transform 120ms ease-out";
            el.style.transform = `perspective(900px) rotateX(${(-py * 7).toFixed(
              2
            )}deg) rotateY(${(px * 9).toFixed(2)}deg) translateY(-6px)`;
          });
        };
        const leave = () => {
          cancelAnimationFrame(frame);
          el.style.transition = "transform 520ms cubic-bezier(.16,1,.3,1)";
          el.style.transform = "";
          window.setTimeout(() => {
            el.style.transition = "";
          }, 540);
        };
        el.addEventListener("mousemove", move);
        el.addEventListener("mouseleave", leave);
        tiltCleanups.push(() => {
          el.removeEventListener("mousemove", move);
          el.removeEventListener("mouseleave", leave);
        });
      });
    }

    // ---- magnetic buttons (.magnetic) ----
    const magEls = Array.from(
      document.querySelectorAll<HTMLElement>(".magnetic")
    );
    const magCleanups: Array<() => void> = [];
    if (!reduced) {
      magEls.forEach((el) => {
        const move = (e: MouseEvent) => {
          const r = el.getBoundingClientRect();
          const mx = e.clientX - (r.left + r.width / 2);
          const my = e.clientY - (r.top + r.height / 2);
          el.style.transition = "transform 120ms ease-out";
          el.style.transform = `translate(${(mx * 0.22).toFixed(1)}px, ${(
            my * 0.3
          ).toFixed(1)}px)`;
        };
        const leave = () => {
          el.style.transition = "transform 450ms cubic-bezier(.16,1,.3,1)";
          el.style.transform = "";
        };
        el.addEventListener("mousemove", move);
        el.addEventListener("mouseleave", leave);
        magCleanups.push(() => {
          el.removeEventListener("mousemove", move);
          el.removeEventListener("mouseleave", leave);
        });
      });
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeoutId);
      obs.disconnect();
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
      tiltCleanups.forEach((fn) => fn());
      magCleanups.forEach((fn) => fn());
    };
  }, [lang]);

  return null;
}
