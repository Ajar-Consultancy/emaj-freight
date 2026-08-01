"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Anchor, Globe2, Award } from "lucide-react";

export default function AboutSection() {
  const highlights = [
    {
      icon: Anchor,
      title: "Global Reach",
      desc: "Connecting strategic trade corridors across major ports worldwide.",
    },
    {
      icon: ShieldCheck,
      title: "Full Compliance",
      desc: "Adhering to international customs regulations and freight safety standards.",
    },
    {
      icon: Globe2,
      title: "Seamless Network",
      desc: "Integrated multimodal transportation across ocean, air, and land routes.",
    },
    {
      icon: Award,
      title: "Reliable Service",
      desc: "Dedicated account managers ensuring timely and transparent dispatch.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      {/* Upper Grid: Story & Visual */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16 sm:mb-20">
        
        {/* Left Column - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#0E2A47]/10 border border-[#0E2A47]/20">
            <span className="w-2 h-2 rounded-full bg-[#E86024]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#0E2A47]">
              About EMAJ Freight
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0E2A47] tracking-tight leading-tight">
            Architecting Global Trade with Speed and Precision
          </h2>

          <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
            At EMAJ Freight Private Limited, we deliver end-to-end freight forwarding and supply chain management designed to give businesses a competitive edge. From custom clearance to vessel chartering, we streamline every leg of your cargo's journey.
          </p>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Our specialized logistics infrastructure combines advanced tracking technologies with deep industry expertise, ensuring safety, operational excellence, and predictable transit times.
          </p>
        </motion.div>

        {/* Right Column - Visual Graphic/Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-200 aspect-4/3">
            <Image
              src="/images/about-vessel.jpg"
              alt="EMAJ Freight Maritime Operations"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E2A47]/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E86024]">
                Trusted Logistics Partner
              </span>
              <p className="text-lg font-bold mt-1">
                Moving cargo across 120+ international ports
              </p>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Lower Highlights Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-[#E86024]/40 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0E2A47]/10 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-[#0E2A47]" />
              </div>
              <h3 className="text-lg font-bold text-[#0E2A47] mb-2">{item.title}</h3>
              <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
            </motion.div>
          );
        })}
      </div>

    </div>
  );
}