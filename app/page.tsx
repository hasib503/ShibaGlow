import React from "react";
import HeroSection from "./_components/HeroSection";
import AboutSection from "./_components/AboutSection";
import SponsorSection from "./_components/SponsorSection";
import TokenomicSection from "./_components/TokenomicSection";
import RoadmapSection from "./_components/RoadmapSection";
import BenefitSection from "./_components/BenefitSection";

export default function Home() {
  return (
    <div className="font-poppins">
      <HeroSection />
      <AboutSection />
      <SponsorSection />
      <TokenomicSection />
      <RoadmapSection />
      <BenefitSection />
    </div>
  );
}
