import { Navbar } from "@/components/sections/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SystemSection } from "@/components/sections/SystemSection";
import { EconomicsSection } from "@/components/sections/EconomicsSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative bg-[#080c16]">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SystemSection />
      <EconomicsSection />
      <SocialProofSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
