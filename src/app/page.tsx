import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProperties } from "@/components/home/FeaturedProperties";
import { InteractiveMap } from "@/components/home/InteractiveMap";
import { AgentBio } from "@/components/home/AgentBio";
import { Testimonials } from "@/components/home/Testimonials";
import { LeadCapture } from "@/components/home/LeadCapture";

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-sans selection:bg-primary/20 selection:text-primary-foreground">
      <Navbar />
      <HeroSection />
      <FeaturedProperties />
      <InteractiveMap />
      <AgentBio />
      <Testimonials />
      <LeadCapture />
      
      <footer className="bg-foreground text-background py-10 text-center relative z-20">
        <p className="text-background/70 font-light text-sm">
          &copy; {new Date().getFullYear()} Sudeste Inversiones. Todos los derechos reservados.
        </p>
      </footer>
    </main>
  );
}
