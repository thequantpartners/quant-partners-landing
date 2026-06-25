import { Navbar } from "@/components/sections/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SystemSection } from "@/components/sections/SystemSection";
import { AdvantageSection } from "@/components/sections/AdvantageSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative bg-[#080c16]">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SystemSection />
      <AdvantageSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
