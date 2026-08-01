"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SERVICES_LIST } from "@/config/servicesData";

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#E86024]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#E86024]/10 border border-[#E86024]/20 rounded-full px-4 py-1.5 text-xs font-bold text-[#E86024] uppercase tracking-wider mb-4">
              Core Logistics Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              Integrated Freight Services
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-base leading-relaxed">
            Tailored supply chain solutions engineered for speed, international regulatory compliance, and total visibility across global transit corridors.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_LIST.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all duration-500 flex flex-col justify-between min-h-[420px] shadow-2xl"
            >
              {/* Background Image with Dark Vignette */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-40 group-hover:opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/20" />
              </div>

              {/* Top Card Content */}
              <div className="relative z-10 p-8">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#E86024] bg-slate-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-800">
                    {service.subtitle}
                  </span>
                  
                  {/* Interactive Top-Right Icon */}
                  <div className="h-10 w-10 rounded-full bg-slate-900/80 border border-slate-700/60 flex items-center justify-center text-slate-300 group-hover:bg-[#E86024] group-hover:text-white group-hover:border-[#E86024] transition-all duration-300">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-2 group-hover:text-slate-100 transition-colors">
                  {service.title}
                </h3>

                <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed line-clamp-3">
                  {service.description}
                </p>
              </div>

              {/* Bottom Features Bar */}
              <div className="relative z-10 px-8 pb-8 pt-4">
                <div className="pt-6 border-t border-slate-800/80 flex flex-wrap gap-2.5">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 bg-slate-950/70 border border-slate-800/80 rounded-lg px-3 py-1.5 backdrop-blur-md"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#E86024]" />
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}