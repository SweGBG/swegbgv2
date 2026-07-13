"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

// Placering: src/app/admin/page.tsx
//
// Åtkomst: kräver inloggad användare med role = 'admin' i profiles.
// Skrivningar går via anon-klienten — det är säkert här eftersom
// RLS-policies med is_admin() godkänner admin och nekar alla andra.
// (SERVICE_ROLE_KEY behövs först när vi gör operationer som RLS inte
// täcker, t.ex. skapa användare åt kunder — det bygger vi som API-route sen.)

type Profile = {
  id: string;
  role: string;
  full_name: string | null;
  company: string | null;
  phone: string | null;
  email: string | null;
  created_at: string;
};

type Order = {
  id: string;
  customer_id: string;
  title: string;
  tier: string | null;
  status: string;
  amount_sek: number | null;
  created_at: string;
};

type Message = {
  id: string;
  customer_id: string;
  sender_role: "admin" | "kund";
  body: string;
  read_at: string | null;
  created_at: string;
};

const STATUS_LABEL: Record<string, { text: string; cls: string }> = {
  pending:   { text: "Väntar",    cls: "border-blue/40 text-blue" },
  active:    { text: "Pågår",     cls: "border-gold-bright/50 text-gold-bright" },
  delivered: { text: "Levererad", cls: "border-[#28c840]/50 text-[#7de08f]" },
  cancelled: { text: "Avbruten",  cls: "border-ink-dim/40 text-ink-dim" },
};

const EMPTY_ORDER = { title: "", tier: "launch", status: "pending", amount_sek: "" };

export default function AdminPage() {
  const router = useRouter();
  const [me, setMe] = useState<Profile | null>(null);
  const [customers, setCustomers] = useState<Profile[]>([]);
  const [selected, setSelected] = useState<Profile | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [tab, setTab] = useState<"orders" | "messages">("orders");
  const [reply, setReply] = useState("");
  const [newOrder, setNewOrder] = useState(EMPTY_ORDER);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState<string | null>(null);

  const flash = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
  };

  // ── auth-guard: bara admin ──
  useEffect(() => {
    supabase.auth.getUser().then(async ({ data }) => {
      if (!data.user) return router.push("/login");
      const { data: p, error } = await supabase
        .from("profiles").select("*").eq("id", data.user.id).single();
      if (error || !p || p.role !== "admin") return router.push("/konto");
      setMe(p);
      const { data: all, error: e2 } = await supabase
        .from("profiles").select("*").order("created_at", { ascending: false });
      if (e2) console.error("customers:", e2.message);
      setCustomers(all ?? []);
      setLoading(false);
    });
  }, [router]);

  // ── ladda vald kunds data ──
  const loadCustomer = useCallback(async (c: Profile) => {
    setSelected(c);
    const [o, m] = await Promise.all([
      supabase.from("orders").select("*")
        .eq("customer_id", c.id).order("created_at", { ascending: false }),
      supabase.from("messages").select("*")
        .eq("customer_id", c.id).order("created_at", { ascending: true }),
    ]);
    if (o.error) console.error("orders:", o.error.message);
    if (m.error) console.error("messages:", m.error.message);
    setOrders(o.data ?? []);
    setMessages(m.data ?? []);
  }, []);

  // ── skapa order ──
  const createOrder = async () => {
    if (!selected || !newOrder.title.trim()) return;
    const { error } = await supabase.from("orders").insert({
      customer_id: selected.id,
      title: newOrder.title.trim(),
      tier: newOrder.tier,
      status: newOrder.status,
      amount_sek: newOrder.amount_sek ? parseInt(newOrder.amount_sek, 10) : null,
    });
    if (error) return flash(`Fel: ${error.message}`);
    setNewOrder(EMPTY_ORDER);
    setShowOrderForm(false);
    flash("✓ Order skapad");
    loadCustomer(selected);
  };

  // ── ändra orderstatus ──
  const cycleStatus = async (o: Order) => {
    const chain = ["pending", "active", "delivered", "cancelled"];
    const next = chain[(chain.indexOf(o.status) + 1) % chain.length];
    const { error } = await supabase.from("orders")
      .update({ status: next, updated_at: new Date().toISOString() })
      .eq("id", o.id);
    if (error) return flash(`Fel: ${error.message}`);
    if (selected) loadCustomer(selected);
  };

  // ── svara kund ──
  const sendReply = async () => {
    if (!selected || !reply.trim()) return;
    const { error } = await supabase.from("messages").insert({
      customer_id: selected.id,
      sender_role: "admin",
      body: reply.trim(),
    });
    if (error) return flash(`Fel: ${error.message}`);
    setReply("");
    loadCustomer(selected);
  };

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <span className="font-mono text-[0.85rem] text-ink-dim animate-pulse">▸ Laddar admin...</span>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen px-[5%] py-[90px]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(240,179,71,0.05),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(79,195,247,0.04),transparent_50%)]" />

      {/* toast */}
      {toast && (
        <div className="fixed bottom-8 right-8 z-50 rounded-sm border border-gold-bright/50 bg-panel px-5 py-3 font-mono text-[0.8rem] text-gold-bright shadow-[0_0_24px_rgba(240,179,71,0.25)]">
          {toast}
        </div>
      )}

      <div className="relative mx-auto max-w-[1250px]">
        <div className="mb-10">
          <div className="flex items-center gap-2.5 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-blue">
            <span className="h-px w-7 bg-blue" />
            // ADMIN — SWEGBG TRADING
          </div>
          <h1 className="mt-2 font-chakra text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold">Kundcentral</h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
          {/* ── kundlista ── */}
          <div className="rounded-md border border-line bg-panel/70 p-4">
            <div className="mb-3 px-2 font-mono text-[0.68rem] uppercase tracking-wide text-ink-dim">
              Kunder ({customers.length})
            </div>
            <div className="flex flex-col gap-1.5">
              {customers.map((c) => (
                <button
                  key={c.id}
                  onClick={() => loadCustomer(c)}
                  className={`rounded-sm border px-4 py-3 text-left transition-all duration-200
                    ${
                      selected?.id === c.id
                        ? "border-gold-bright/60 bg-gold-bright/10 shadow-[0_0_14px_rgba(240,179,71,0.15)]"
                        : "border-transparent hover:border-line hover:bg-bg/40"
                    }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-chakra text-[0.9rem] font-semibold text-ink">
                      {c.full_name || c.email}
                    </span>
                    {c.role === "admin" && (
                      <span className="rounded-full border border-blue/40 px-2 py-0.5 font-mono text-[0.58rem] uppercase text-blue">
                        admin
                      </span>
                    )}
                  </div>
                  <div className="mt-0.5 font-mono text-[0.66rem] text-ink-dim">
                    {c.company || c.email}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* ── vald kund ── */}
          <div className="min-h-[480px] rounded-md border border-line bg-panel/70 p-7">
            {!selected ? (
              <div className="flex h-full items-center justify-center font-mono text-[0.82rem] text-ink-dim">
                ◂ Välj en kund i listan
              </div>
            ) : (
              <>
                <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h2 className="font-chakra text-[1.3rem] font-semibold">
                      {selected.full_name || selected.email}
                    </h2>
                    <div className="mt-0.5 font-mono text-[0.7rem] text-ink-dim">
                      {selected.email} {selected.phone && `· ${selected.phone}`}
                    </div>
                  </div>
                  {/* flikar */}
                  <div className="flex gap-2">
                    {(["orders", "messages"] as const).map((t) => (
                      <button
                        key={t}
                        onClick={() => setTab(t)}
                        className={`rounded-sm border px-4 py-2 font-mono text-[0.72rem] uppercase tracking-wide transition-colors
                          ${
                            tab === t
                              ? "border-gold-bright/60 bg-gold-bright/15 text-gold-bright"
                              : "border-line text-ink-dim hover:text-ink"
                          }`}
                      >
                        {t === "orders" ? "Ordrar" : "Meddelanden"}
                      </button>
                    ))}
                  </div>
                </div>

                {tab === "orders" && (
                  <>
                    <button
                      onClick={() => setShowOrderForm((v) => !v)}
                      className="mb-4 rounded-sm bg-gold-bright px-5 py-2.5 font-mono text-[0.76rem] font-semibold text-[#0c0a06] transition-transform hover:-translate-y-0.5"
                    >
                      {showOrderForm ? "× Avbryt" : "+ Ny order"}
                    </button>

                    {showOrderForm && (
                      <div className="mb-5 grid gap-3 rounded-sm border border-gold-bright/25 bg-bg/40 p-4 sm:grid-cols-2">
                        <input
                          value={newOrder.title}
                          onChange={(e) => setNewOrder({ ...newOrder, title: e.target.value })}
                          placeholder="Titel, t.ex. Launch-paket – Företag AB"
                          className="rounded-sm border border-line bg-bg/60 px-3 py-2.5 text-[0.85rem] text-ink outline-none focus:border-gold-bright/60 sm:col-span-2"
                        />
                        <select
                          value={newOrder.tier}
                          onChange={(e) => setNewOrder({ ...newOrder, tier: e.target.value })}
                          className="rounded-sm border border-line bg-bg/60 px-3 py-2.5 text-[0.85rem] text-ink outline-none focus:border-gold-bright/60"
                        >
                          <option value="launch">Launch</option>
                          <option value="growth">Growth</option>
                          <option value="ops">Ops System</option>
                        </select>
                        <input
                          value={newOrder.amount_sek}
                          onChange={(e) => setNewOrder({ ...newOrder, amount_sek: e.target.value.replace(/\D/g, "") })}
                          placeholder="Belopp (kr)"
                          inputMode="numeric"
                          className="rounded-sm border border-line bg-bg/60 px-3 py-2.5 text-[0.85rem] text-ink outline-none focus:border-gold-bright/60"
                        />
                        <button
                          onClick={createOrder}
                          disabled={!newOrder.title.trim()}
                          className="rounded-sm bg-gold-bright px-5 py-2.5 font-mono text-[0.76rem] font-semibold text-[#0c0a06] disabled:opacity-50 sm:col-span-2"
                        >
                          ▸ Skapa order
                        </button>
                      </div>
                    )}

                    <div className="flex flex-col gap-3">
                      {orders.length === 0 && (
                        <p className="font-mono text-[0.8rem] text-ink-dim">Inga ordrar för denna kund.</p>
                      )}
                      {orders.map((o) => {
                        const s = STATUS_LABEL[o.status] ?? STATUS_LABEL.pending;
                        return (
                          <div
                            key={o.id}
                            className="flex flex-wrap items-center justify-between gap-3 rounded-sm border border-line bg-bg/40 px-5 py-4"
                          >
                            <div>
                              <div className="font-chakra text-[0.95rem] font-semibold">{o.title}</div>
                              <div className="mt-0.5 font-mono text-[0.66rem] text-ink-dim">
                                {new Date(o.created_at).toLocaleDateString("sv-SE")}
                                {o.tier && <span className="ml-2 uppercase text-gold/80">{o.tier}</span>}
                              </div>
                            </div>
                            <div className="flex items-center gap-4">
                              {o.amount_sek != null && (
                                <span className="font-mono text-[0.85rem]">{o.amount_sek.toLocaleString("sv-SE")} kr</span>
                              )}
                              <button
                                onClick={() => cycleStatus(o)}
                                title="Klicka för nästa status"
                                className={`rounded-full border px-3 py-1 font-mono text-[0.66rem] uppercase tracking-wide transition-transform hover:scale-105 ${s.cls}`}
                              >
                                {s.text} ↻
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </>
                )}

                {tab === "messages" && (
                  <>
                    <div className="flex max-h-[360px] flex-col gap-3 overflow-y-auto pr-1">
                      {messages.length === 0 && (
                        <p className="font-mono text-[0.8rem] text-ink-dim">Ingen konversation ännu.</p>
                      )}
                      {messages.map((m) => (
                        <div
                          key={m.id}
                          className={`max-w-[85%] rounded-md border px-4 py-3 ${
                            m.sender_role === "admin"
                              ? "self-end border-gold-bright/30 bg-gold-bright/10"
                              : "self-start border-blue/25 bg-blue/5"
                          }`}
                        >
                          <div className="mb-1 font-mono text-[0.62rem] uppercase tracking-wide text-ink-dim">
                            {m.sender_role === "admin" ? "SweGBG" : "Kund"} ·{" "}
                            {new Date(m.created_at).toLocaleString("sv-SE", { dateStyle: "short", timeStyle: "short" })}
                          </div>
                          <div className="text-[0.88rem] leading-relaxed text-ink">{m.body}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 flex gap-3">
                      <input
                        value={reply}
                        onChange={(e) => setReply(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && sendReply()}
                        placeholder="Svara kunden..."
                        className="flex-1 rounded-sm border border-line bg-bg/60 px-4 py-3 text-[0.88rem] text-ink outline-none focus:border-gold-bright/60"
                      />
                      <button
                        onClick={sendReply}
                        disabled={!reply.trim()}
                        className="rounded-sm bg-gold-bright px-6 py-3 font-mono text-[0.8rem] font-semibold text-[#0c0a06] transition-transform hover:-translate-y-0.5 disabled:opacity-50"
                      >
                        ▸ Skicka
                      </button>
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
