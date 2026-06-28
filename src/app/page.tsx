import { LangProvider } from "@/context/LangContext";
import HomeContent from "@/components/HomeContent";

// Startsidan "/" — startar på svenska.
// Språkknappen kan fortfarande växla till engelska i klienten.
export default function Home() {
  return (
    <LangProvider initialLang="sv">
      <HomeContent />
    </LangProvider>
  );
}
