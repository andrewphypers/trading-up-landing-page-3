import { Hero } from "@/app/components/Hero";
import { About } from "@/app/components/About";
import { ProgramPillars } from "@/app/components/ProgramPillars";
import { TradesFocus } from "@/app/components/TradesFocus";
import { Treatment } from "@/app/components/Treatment";
import { CourtOrders } from "@/app/components/CourtOrders";
import { Impact } from "@/app/components/Impact";
import { Partners } from "@/app/components/Partners";
import { CTA } from "@/app/components/CTA";
import { Footer } from "@/app/components/Footer";

export default function App() {
  return (
    <div className="size-full">
      <Hero />
      <About />
      <ProgramPillars />
      <TradesFocus />
      <Treatment />
      <CourtOrders />
      <Impact />
      <Partners />
      <CTA />
      <Footer />
    </div>
  );
}