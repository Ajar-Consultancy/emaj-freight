"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Layers, Sparkles } from "lucide-react";
import { SERVICES_DATA } from "@/config/servicesData";

export default function ServicesGrid() {
  return (
    <div className="relative z-10 max-w-7xl mx-auto">
      
      {/* Section Header - Fixed for Light Background */}
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 mb-4 shadow-sm"
        >
          <Layers className="w-4 h-4 text-[#E86024]" />
          <span className="text-xs font-bold uppercase tracking-widest text-slate-700">
            End-to-End Solutions
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight"
        >
          Tailored Freight & Supply Chain Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto"
        >
          Global logistics engineered for agility, safety, and operational excellence across sea, air, and land routes.
        </motion.p>
      </div>

      {/* 3x2 Service Grid with Crisp Light Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {SERVICES_DATA.map((service, index) => (
          <motion.div
            key={service.slug || `service-${index}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="group relative rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-lg hover:shadow-2xl hover:border-[#E86024]/50 transition-all duration-500 flex flex-col justify-between"
          >
            {/* Top Accent Line on Hover */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#E86024] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

            <div>
              {/* Card Image Header */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority={index < 3}
                />
                
                {/* Gentle Gradient Image Overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-70" />
                
                {/* Badge Chip */}
                {service.badge && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3.5 py-1 rounded-full bg-slate-900/80 border border-slate-700/60 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-[#E86024] shadow-md flex items-center space-x-1.5">
                      <Sparkles className="w-3 h-3 text-[#E86024]" />
                      <span>{service.badge}</span>
                    </span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#E86024] transition-colors leading-snug">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.shortDesc}
                </p>
              </div>
            </div>

            {/* Card Footer CTA */}
            <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-0">
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#E86024] group-hover:text-[#c74c17] transition-colors"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300 text-[#E86024]" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
}