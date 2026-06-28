import { LangProvider } from "@/context/LangContext";
import HomeContent from "@/components/HomeContent";

// /en — startar på engelska.
// Samma innehåll som startsidan, men EN som standardspråk.
// Språkknappen kan fortfarande växla till svenska i klienten.
export default function HomeEN() {
  return (
    <LangProvider initialLang="en">
      <HomeContent />
    </LangProvider>
  );
}
