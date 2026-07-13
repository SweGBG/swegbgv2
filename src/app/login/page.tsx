"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

// Placering: src/app/login/page.tsx
export default function LoginPage() {
  const router = useRouter();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setError(null);
    setLoading(true);

    if (mode === "login") {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setError("Fel e-post eller lösenord.");
        setLoading(false);
        return;
      }
    } else {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { full_name: fullName } },
      });
      if (error) {
        setError(error.message);
        setLoading(false);
        return;
      }
    }
    router.push("/konto");
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-[5%]">
      {/* bakgrundsglöd */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(240,179,71,0.06),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(79,195,247,0.05),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] bg-[linear-gradient(rgba(201,146,42,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(201,146,42,0.06)_1px,transparent_1px)] bg-[size:46px_46px]" />

      <div className="relative w-full max-w-[420px] rounded-md border border-line bg-panel/90 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_0_1px_rgba(201,146,42,0.08)] backdrop-blur-md">
        <div className="mb-1 flex items-center gap-2.5 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-blue">
          <span className="h-px w-7 bg-blue" />
          {mode === "login" ? "// KUNDPORTAL" : "// NYTT KONTO"}
        </div>
        <h1 className="font-chakra text-[1.6rem] font-bold">
          {mode === "login" ? "Logga in" : "Skapa konto"}
        </h1>

        <div className="mt-6 flex flex-col gap-4">
          {mode === "signup" && (
            <label className="flex flex-col gap-1.5">
              <span className="font-mono text-[0.7rem] uppercase tracking-wide text-ink-dim">Namn</span>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="rounded-sm border border-line bg-bg/60 px-4 py-3 text-[0.9rem] text-ink outline-none transition-colors focus:border-gold-bright/60"
                placeholder="För- och efternamn"
              />
            </label>
          )}

          <label className="flex flex-col gap-1.5">
            <span className="font-mono text-[0.7rem] uppercase tracking-wide text-ink-dim">E-post</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-sm border border-line bg-bg/60 px-4 py-3 text-[0.9rem] text-ink outline-none transition-colors focus:border-gold-bright/60"
              placeholder="din@epost.se"
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="font-mono text-[0.7rem] uppercase tracking-wide text-ink-dim">Lösenord</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && submit()}
              className="rounded-sm border border-line bg-bg/60 px-4 py-3 text-[0.9rem] text-ink outline-none transition-colors focus:border-gold-bright/60"
              placeholder="••••••••"
            />
          </label>

          {error && (
            <div className="rounded-sm border border-[#ff4d6d]/40 bg-[#ff4d6d]/10 px-4 py-2.5 font-mono text-[0.78rem] text-[#ff8fa3]">
              {error}
            </div>
          )}

          <button
            onClick={submit}
            disabled={loading}
            className="group relative mt-1 overflow-hidden rounded-sm bg-gold-bright px-[30px] py-[14px] font-mono text-[0.85rem] font-semibold tracking-wide text-[#0c0a06] transition-transform hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(240,179,71,0.35)] disabled:opacity-60"
          >
            <span className="absolute left-[-120%] top-0 h-full w-3/5 -skew-x-[20deg] bg-gradient-to-r from-transparent via-white/50 to-transparent transition-[left] duration-500 group-hover:left-[130%]" />
            {loading ? "Ett ögonblick..." : mode === "login" ? "▸ Logga in" : "▸ Skapa konto"}
          </button>

          <button
            onClick={() => { setMode(mode === "login" ? "signup" : "login"); setError(null); }}
            className="mt-1 font-mono text-[0.76rem] text-ink-dim transition-colors hover:text-blue"
          >
            {mode === "login" ? "Ny kund? Skapa konto →" : "← Har redan konto? Logga in"}
          </button>
        </div>
      </div>
    </main>
  );
}
