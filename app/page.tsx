import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatIsEuInc from "@/components/WhatIsEuInc";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import Timeline from "@/components/Timeline";
import WhyEurope from "@/components/WhyEurope";
import FAQ from "@/components/FAQ";
import Blog from "@/components/Blog";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="snap-section-hero">
          <Hero />
        </div>
        <div className="snap-section">
          <WhatIsEuInc />
        </div>
        <div className="snap-section">
          <Benefits />
        </div>
        <div className="snap-section">
          <HowItWorks />
        </div>
        <div className="snap-section">
          <Timeline />
        </div>
        <div className="snap-section">
          <WhyEurope />
        </div>
        <div className="snap-section">
          <FAQ />
        </div>
        <div className="snap-section">
          <Blog />
        </div>
        <div className="snap-section-footer bg-navy">
          <CTA />
          <Footer />
        </div>
      </main>
    </>
  );
}
