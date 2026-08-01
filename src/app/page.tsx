"use client";

import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import MissionVisionSection from "@/components/sections/MissionVisionSection";
import ServicesGrid from "@/components/sections/ServicesGrid";
import QuoteSection from "@/components/sections/QuoteSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#E86024] selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] bg-[#0E2A47] overflow-hidden">
        <HeroSection />
      </section>

      {/* 2. ABOUT US */}
      <section id="about" className="py-20 sm:py-28 bg-slate-50 relative">
        <AboutSection />
      </section>

      {/* 3. MISSION & VISION */}
      <section className="py-20 sm:py-28 bg-white relative">
        <MissionVisionSection />
      </section>

      {/* 4. SERVICES GRID */}
      <section id="services" className="py-20 sm:py-28 bg-slate-50 relative">
        <ServicesGrid />
      </section>

      {/* 5. QUOTE SECTION */}
      <section id="quote" className="py-20 sm:py-28 bg-white relative">
        <QuoteSection />
      </section>

    </main>
  );
}