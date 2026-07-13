"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";

interface AuthButtonProps {
  /** true i mobilmenyn — knappen fyller hela bredden */
  fullWidth?: boolean;
}

export default function AuthButton({ fullWidth = false }: AuthButtonProps) {
  const [loggedIn, setLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setLoggedIn(!!data.session));

    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      setLoggedIn(!!session);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  // undvik layout-hopp medan sessionen kollas
  if (loggedIn === null) {
    return <span className={fullWidth ? "block h-[46px] w-full" : "inline-block w-[104px]"} />;
  }

  return (
    <Link
      href={loggedIn ? "/konto" : "/login"}
      className={`rounded-sm border border-gold-bright/40 font-mono text-gold-bright
        transition-all duration-300 hover:border-gold-bright hover:bg-gold-bright/10
        hover:shadow-[0_0_16px_rgba(240,179,71,0.25)]
        ${
          fullWidth
            ? "block w-full px-3 py-3 text-center text-[0.85rem]"
            : "px-[18px] py-[9px] text-[0.78rem]"
        }`}
    >
      {loggedIn ? "▸ Min Sida" : "▸ Logga in"}
    </Link>
  );
}
