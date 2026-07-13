"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import PianoNav, { PianoItem } from "@/components/PianoNav";

// Placering: src/app/konto/page.tsx

type Profile = {
  id: string;
  role: string;
  full_name: string | null;
  company: string | null;
  phone: string | null;
  email: string | null;
};

type Order = {
  id: string;
  title: string;
  tier: string | null;
  status: string;
  amount_sek: number | null;
  created_at: string;
};

type Message = {
  id: string;
  sender_role: "admin" | "kund";
  body: string;
  created_at: string;
};

const NAV_ITEMS: PianoItem[] = [
  { id: "orders", label: "Orderhistorik", sublabel: "Dina projekt & paket" },
  { id: "messages", label: "Meddelanden", sublabel: "Direktlinje till SweGBG" },
  { id: "settings", label: "Inställningar", sublabel: "Profil & uppgifter" },
];

const STATUS_LABEL: Record<string, { text: string; cls: string }> = {
  pending:   { text: "Väntar",    cls: "border-blue/40 text-blue" },
  active:    { text: "Pågår",     cls: "border-gold-bright/50 text-gold-bright" },
  delivered: { text: "Levererad", cls: "border-[#28c840]/50 text-[#7de08f]" },
  cancelled: { text: "Avbruten",  cls: "border-ink-dim/40 text-ink-dim" },
};

export default function KontoPage() {
  const router = useRouter();
  const [tab, setTab] = useState("orders");
  const [profile, setProfile] = useState<Profile | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMsg, setNewMsg] = useState("");
  const [sending, setSending] = useState(false);
  const [saveOk, setSaveOk] = useState(false);
  const [loading, setLoading] = useState(true);

  // form-state för inställningar
  const [form, setForm] = useState({ full_name: "", company: "", phone: "" });

  const loadAll = useCallback(async (userId: string) => {
    const [p, o, m] = await Promise.all([
      supabase.from("profiles").select("*").eq("id", userId).single(),
      supabase.from("orders").select("*").order("created_at", { ascending: false }),
      supabase.from("messages").select("*").order("created_at", { ascending: true }),
    ]);
    if (p.error) console.error("profiles:", p.error.message);
    if (o.error) console.error("orders:", o.error.message);
    if (m.error) console.error("messages:", m.error.message);

    if (p.data) {
      setProfile(p.data);
      setForm({
        full_name: p.data.full_name ?? "",
        company: p.data.company ?? "",
        phone: p.data.phone ?? "",
      });
    }
    setOrders(o.data ?? []);
    setMessages(m.data ?? []);
    setLoading(false);
  }, []);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) {
        router.push("/login");
        return;
      }
      loadAll(data.user.id);
    });
  }, [router, loadAll]);

  const sendMessage = async () => {
    if (!newMsg.trim() || !profile) return;
    setSending(true);
    const { error } = await supabase.from("messages").insert({
      customer_id: profile.id,
      sender_role: "kund",
      body: newMsg.trim(),
    });
    if (error) {
      console.error("send:", error.message);
    } else {
      setNewMsg("");
      const { data } = await supabase
        .from("messages").select("*").order("created_at", { ascending: true });
      setMessages(data ?? []);
    }
    setSending(false);
  };

  const saveProfile = async () => {
    if (!profile) return;
    const { error } = await supabase
      .from("profiles")
      .update({ full_name: form.full_name, company: form.company, phone: form.phone })
      .eq("id", profile.id);
    if (error) {
      console.error("save:", error.message);
      return;
    }
    setSaveOk(true);
    setTimeout(() => setSaveOk(false), 2500);
  };

  const logout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <span className="font-mono text-[0.85rem] text-ink-dim animate-pulse">
          ▸ Laddar ditt konto...
        </span>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden px-[5%] py-[90px]">
      {/* bakgrundsatmosfär */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(240,179,71,0.05),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(79,195,247,0.04),transparent_50%)]" />

      <div className="relative mx-auto max-w-[1100px]">
        {/* header */}
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-blue">
              <span className="h-px w-7 bg-blue" />
              // MIN SIDA
            </div>
            <h1 className="mt-2 font-chakra text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold">
              {profile?.full_name || profile?.email || "Kund"}
            </h1>
            {profile?.company && (
              <p className="mt-1 font-mono text-[0.78rem] text-ink-dim">{profile.company}</p>
            )}
          </div>
          <button
            onClick={logout}
            className="rounded-sm border border-ink/25 px-5 py-2.5 font-mono text-[0.78rem] text-ink transition-colors hover:border-[#ff4d6d]/60 hover:text-[#ff8fa3]"
          >
            Logga ut
          </button>
        </div>

        <div className="grid gap-8 md:grid-cols-[280px_1fr]">
          {/* pianot 🎹 */}
          <PianoNav items={NAV_ITEMS} activeId={tab} onSelect={setTab} />

          {/* innehåll */}
          <div className="min-h-[420px] rounded-md border border-line bg-panel/70 p-7 backdrop-blur-sm">
            {tab === "orders" && (
              <>
                <h2 className="font-chakra text-[1.2rem] font-semibold">Orderhistorik</h2>
                {orders.length === 0 ? (
                  <p className="mt-5 font-mono text-[0.82rem] text-ink-dim">
                    Inga ordrar ännu — din historik dyker upp här.
                  </p>
                ) : (
                  <div className="mt-5 flex flex-col gap-3">
                    {orders.map((o) => {
                      const s = STATUS_LABEL[o.status] ?? STATUS_LABEL.pending;
                      return (
                        <div
                          key={o.id}
                          className="flex flex-wrap items-center justify-between gap-3 rounded-sm border border-line bg-bg/40 px-5 py-4 transition-colors hover:border-gold-bright/30"
                        >
                          <div>
                            <div className="font-chakra text-[0.95rem] font-semibold">{o.title}</div>
                            <div className="mt-0.5 font-mono text-[0.68rem] text-ink-dim">
                              {new Date(o.created_at).toLocaleDateString("sv-SE")}
                              {o.tier && <span className="ml-2 uppercase text-gold/80">{o.tier}</span>}
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            {o.amount_sek != null && (
                              <span className="font-mono text-[0.85rem] text-ink">
                                {o.amount_sek.toLocaleString("sv-SE")} kr
                              </span>
                            )}
                            <span className={`rounded-full border px-3 py-1 font-mono text-[0.66rem] uppercase tracking-wide ${s.cls}`}>
                              {s.text}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </>
            )}

            {tab === "messages" && (
              <>
                <h2 className="font-chakra text-[1.2rem] font-semibold">Meddelanden</h2>
                <div className="mt-5 flex max-h-[380px] flex-col gap-3 overflow-y-auto pr-1">
                  {messages.length === 0 && (
                    <p className="font-mono text-[0.82rem] text-ink-dim">
                      Inga meddelanden ännu. Skriv nedan så svarar vi snabbt.
                    </p>
                  )}
                  {messages.map((m) => (
                    <div
                      key={m.id}
                      className={`max-w-[85%] rounded-md border px-4 py-3 ${
                        m.sender_role === "kund"
                          ? "self-end border-gold-bright/30 bg-gold-bright/10"
                          : "self-start border-blue/25 bg-blue/5"
                      }`}
                    >
                      <div className="mb-1 font-mono text-[0.62rem] uppercase tracking-wide text-ink-dim">
                        {m.sender_role === "kund" ? "Du" : "SweGBG"} ·{" "}
                        {new Date(m.created_at).toLocaleString("sv-SE", {
                          dateStyle: "short",
                          timeStyle: "short",
                        })}
                      </div>
                      <div className="text-[0.88rem] leading-relaxed text-ink">{m.body}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex gap-3">
                  <input
                    value={newMsg}
                    onChange={(e) => setNewMsg(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    placeholder="Skriv ett meddelande..."
                    className="flex-1 rounded-sm border border-line bg-bg/60 px-4 py-3 text-[0.88rem] text-ink outline-none transition-colors focus:border-gold-bright/60"
                  />
                  <button
                    onClick={sendMessage}
                    disabled={sending || !newMsg.trim()}
                    className="rounded-sm bg-gold-bright px-6 py-3 font-mono text-[0.8rem] font-semibold text-[#0c0a06] transition-transform hover:-translate-y-0.5 disabled:opacity-50"
                  >
                    ▸ Skicka
                  </button>
                </div>
              </>
            )}

            {tab === "settings" && (
              <>
                <h2 className="font-chakra text-[1.2rem] font-semibold">Inställningar</h2>
                <div className="mt-5 flex max-w-[440px] flex-col gap-4">
                  <label className="flex flex-col gap-1.5">
                    <span className="font-mono text-[0.7rem] uppercase tracking-wide text-ink-dim">Namn</span>
                    <input
                      value={form.full_name}
                      onChange={(e) => setForm({ ...form, full_name: e.target.value })}
                      className="rounded-sm border border-line bg-bg/60 px-4 py-3 text-[0.9rem] text-ink outline-none transition-colors focus:border-gold-bright/60"
                    />
                  </label>
                  <label className="flex flex-col gap-1.5">
                    <span className="font-mono text-[0.7rem] uppercase tracking-wide text-ink-dim">Företag</span>
                    <input
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="rounded-sm border border-line bg-bg/60 px-4 py-3 text-[0.9rem] text-ink outline-none transition-colors focus:border-gold-bright/60"
                    />
                  </label>
                  <label className="flex flex-col gap-1.5">
                    <span className="font-mono text-[0.7rem] uppercase tracking-wide text-ink-dim">Telefon</span>
                    <input
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="rounded-sm border border-line bg-bg/60 px-4 py-3 text-[0.9rem] text-ink outline-none transition-colors focus:border-gold-bright/60"
                    />
                  </label>
                  <div className="mt-1 flex items-center gap-4">
                    <button
                      onClick={saveProfile}
                      className="rounded-sm bg-gold-bright px-7 py-3 font-mono text-[0.8rem] font-semibold text-[#0c0a06] transition-transform hover:-translate-y-0.5"
                    >
                      ▸ Spara
                    </button>
                    {saveOk && (
                      <span className="font-mono text-[0.76rem] text-[#7de08f]">✓ Sparat</span>
                    )}
                  </div>
                  <p className="mt-2 font-mono text-[0.68rem] text-ink-dim">
                    Inloggad som {profile?.email}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
