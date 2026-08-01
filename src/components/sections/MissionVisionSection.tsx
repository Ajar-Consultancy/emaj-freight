"use client";

import React from "react";
import { Target, Compass, ArrowRight } from "lucide-react";

export default function MissionVisionSection() {
  return (
    <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <span className="text-xs font-bold uppercase tracking-widest text-[#E86024] bg-[#E86024]/10 px-3 py-1.5 rounded-full inline-block mb-4">
          Core Principles
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-[#0E2A47] tracking-tight">
          Driven by Purpose, Guided by Outlook
        </h2>
        <p className="mt-4 text-slate-600 text-base sm:text-lg">
          Engineering the future of global logistics with crystal-clear direction and unwavering commitment to precision.
        </p>
      </div>

      {/* Two Column Layout: Our Purpose & Our Outlook */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        
        {/* Our Purpose Card */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-[18px] p-8 sm:p-12 relative overflow-hidden group hover:border-[#E86024]/40 transition-all duration-300">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#E86024]/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-500" />
          
          <div className="w-14 h-14 rounded-2xl bg-[#0E2A47] text-white flex items-center justify-center mb-8 shadow-lg shadow-[#0E2A47]/10">
            <Target className="w-6 h-6 text-[#E86024]" />
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-[#E86024] block mb-2">
            What Drives Us
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0E2A47] tracking-tight mb-4">
            Our Purpose
          </h3>
          <p className="text-slate-600 leading-relaxed text-base sm:text-lg mb-8">
            To remove friction from international trade by delivering high-reliability, technology-enabled freight solutions that empower businesses to scale globally without borders or logistical barriers.
          </p>

          <div className="flex items-center gap-2 text-sm font-semibold text-[#0E2A47] group-hover:text-[#E86024] transition-colors">
            <span>Precision Engineering</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        {/* Our Outlook Card */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-[18px] p-8 sm:p-12 relative overflow-hidden group hover:border-[#E86024]/40 transition-all duration-300">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#0E2A47]/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-500" />
          
          <div className="w-14 h-14 rounded-2xl bg-[#0E2A47] text-white flex items-center justify-center mb-8 shadow-lg shadow-[#0E2A47]/10">
            <Compass className="w-6 h-6 text-[#E86024]" />
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-[#E86024] block mb-2">
            Where We Are Headed
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0E2A47] tracking-tight mb-4">
            Our Outlook
          </h3>
          <p className="text-slate-600 leading-relaxed text-base sm:text-lg mb-8">
            To set the benchmark for modern logistics by pioneering transparent tracking, predictive supply chain intelligence, and sustainable multi-modal transport infrastructure worldwide.
          </p>

          <div className="flex items-center gap-2 text-sm font-semibold text-[#0E2A47] group-hover:text-[#E86024] transition-colors">
            <span>Global Vision 2030</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>

      </div>

    </div>
  );
}