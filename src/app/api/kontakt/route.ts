import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

// Avsändare måste ligga på verifierad domän (swegbg.com är verifierad i Resend).
const FROM = "SweGBG Trading <kontakt@swegbg.com>";
// Dit du får in förfrågningar.
const TO = "lenn.soder@proton.me";

export async function POST(req: Request) {
  const { namn, email, foretag, meddelande, webbplats, lang } =
    await req.json();

  // Honeypot: en bot fyllde det dolda fältet. Släng tyst, låtsas ok.
  if (webbplats) {
    return NextResponse.json({ ok: true });
  }

  if (!namn || !email || !meddelande) {
    return NextResponse.json({ error: "Fält saknas" }, { status: 400 });
  }

  // Enkel e-postkontroll.
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Ogiltig e-post" }, { status: 400 });
  }

  const isEn = lang === "en";

  try {
    // 1) Notis till dig.
    await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `Ny demo-förfrågan från ${namn}`,
      text:
        `Namn: ${namn}\n` +
        `E-post: ${email}\n` +
        `Företag: ${foretag || "-"}\n` +
        `Språk: ${isEn ? "EN" : "SV"}\n\n` +
        `${meddelande}`,
    });

    // 2) Auto-svar till kunden, på deras språk.
    await resend.emails.send({
      from: FROM,
      to: email,
      replyTo: TO,
      subject: isEn
        ? "We've received your request — SweGBG Trading"
        : "Vi har tagit emot din förfrågan — SweGBG Trading",
      text: isEn
        ? `Hi ${namn},\n\n` +
          `Thanks for reaching out! We've received your request and will get back to you within 24 hours.\n\n` +
          `Your message:\n"${meddelande}"\n\n` +
          `Best regards,\nSweGBG Trading\nswegbg.com`
        : `Hej ${namn},\n\n` +
          `Tack för att du hörde av dig! Vi har tagit emot din förfrågan och återkommer inom 24 timmar.\n\n` +
          `Ditt meddelande:\n"${meddelande}"\n\n` +
          `Vänliga hälsningar,\nSweGBG Trading\nswegbg.com`,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Kunde inte skicka" }, { status: 500 });
  }
}
