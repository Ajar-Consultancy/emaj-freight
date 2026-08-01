"use client";

import React from "react";
import { ArrowRight, ShieldCheck, Globe, Clock, Anchor } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#0E2A47] text-white pt-28 sm:pt-36 md:pt-40 pb-20 flex items-center">
      
      {/* Background Video Loop */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center z-0 scale-105"
        poster="/images/hero-fallback.jpg"
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay with subtle blur for legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0E2A47]/95 via-[#0E2A47]/85 to-[#0E2A47]/75 backdrop-blur-[1px] z-0" />

      {/* Animated Accent Ambient Glows */}
      <div className="absolute inset-0 opacity-30 pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#E86024] rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-3xl" />
      </div>

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
              <ShieldCheck className="w-4 h-4 text-[#E86024]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-100">
                Trusted International Logistics Partner
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-tight">
              End-to-End Global Supply Chains with{" "}
              <span className="text-[#E86024] block mt-1">EMAJ Freight</span>
            </h1>

            <p className="text-slate-200 text-base sm:text-lg max-w-2xl leading-relaxed drop-shadow-sm">
              EMAJ Freight Private Limited delivers ocean & air forwarding, customs clearance, NVOCC operations, and specialized project logistics with precision across worldwide trade lanes.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#quote"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#E86024] hover:bg-[#d0521d] text-white font-semibold text-sm transition-all shadow-lg hover:shadow-orange-500/30"
              >
                Request a Rate Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/25 font-semibold text-sm backdrop-blur-md transition-all"
              >
                Explore Capabilities
              </a>
            </div>
          </div>

          {/* Right Column: Key Trust Metrics */}
          <div className="lg:col-span-5 hidden lg:flex justify-end">
            <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700/60 rounded-2xl p-6 space-y-6 max-w-sm w-full shadow-2xl">
              
              <div className="flex items-start space-x-4 border-b border-slate-800 pb-5">
                <div className="p-3 bg-[#E86024]/10 rounded-xl border border-[#E86024]/20 text-[#E86024]">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-3xl font-extrabold text-[#E86024]">50+</p>
                  <p className="text-xs text-slate-300 font-semibold uppercase tracking-wider mt-0.5">
                    Global Port Networks
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 border-b border-slate-800 pb-5">
                <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20 text-blue-400">
                  <Anchor className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">Full-Service</p>
                  <p className="text-xs text-slate-300 font-semibold uppercase tracking-wider mt-0.5">
                    Ocean, Air & Customs Clearing
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#E86024]/10 rounded-xl border border-[#E86024]/20 text-[#E86024]">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-3xl font-extrabold text-[#E86024]">24/7</p>
                  <p className="text-xs text-slate-300 font-semibold uppercase tracking-wider mt-0.5">
                    Dedicated Support
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}