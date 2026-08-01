"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowRight, Ship } from "lucide-react";
import { COMPANY_DETAILS, SERVICES_DATA } from "@/config/servicesData";

export default function Footer() {
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <footer className="bg-gradient-to-b from-slate-100 via-slate-50 to-slate-200 text-slate-700 pt-16 pb-8 border-t border-slate-300 relative overflow-hidden">
      
      {/* Ambient Accent Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0E2A47]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12">
          
          {/* 1. BRAND COLUMN */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block">
              {!logoFailed ? (
                /* Native Logo Display - Crisp on Light Background */
                <div className="relative h-20 w-48 sm:w-56 shrink-0">
                  <Image
                    src="/images/logo.png"
                    alt="EMAJ Freight Logo"
                    fill
                    sizes="220px"
                    className="object-contain object-left"
                    onError={() => setLogoFailed(true)}
                    priority
                  />
                </div>
              ) : (
                /* Fallback Icon + Text */
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl bg-[#0E2A47] flex items-center justify-center shrink-0 shadow-md">
                    <Ship className="w-6 h-6 text-[#E86024]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-black text-[#0E2A47] tracking-wider leading-none">
                      EMAJ <span className="text-[#E86024]">FREIGHT</span>
                    </span>
                    <span className="text-[9px] font-bold tracking-[0.2em] text-slate-500 uppercase mt-1">
                      Private Limited
                    </span>
                  </div>
                </div>
              )}
            </Link>

            <p className="text-slate-600 text-sm leading-relaxed max-w-sm font-medium">
              Architects of global logistics, multi-modal freight forwarding, and end-to-end supply chain solutions tailored for modern international trade.
            </p>
          </div>

          {/* 2. NAVIGATION LINKS */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-black uppercase tracking-widest text-[#0E2A47] border-b border-slate-300 pb-2">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm font-semibold">
              <li>
                <Link href="/" className="hover:text-[#E86024] transition-colors text-slate-700">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-[#E86024] transition-colors text-slate-700">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[#E86024] transition-colors text-slate-700">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#quote" className="hover:text-[#E86024] transition-colors text-slate-700">
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. SERVICES LIST */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-black uppercase tracking-widest text-[#0E2A47] border-b border-slate-300 pb-2">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm font-semibold">
              {SERVICES_DATA.slice(0, 5).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="flex items-center space-x-2 text-slate-700 hover:text-[#E86024] transition-colors group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-[#E86024] opacity-80 group-hover:translate-x-1 transition-transform" />
                    <span className="line-clamp-1">{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. CONTACT INFO */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-black uppercase tracking-widest text-[#0E2A47] border-b border-slate-300 pb-2">
              Contact Info
            </h3>
            <ul className="space-y-3.5 text-sm font-medium">
              <li className="flex items-start space-x-3 text-slate-700">
                <MapPin className="w-4 h-4 text-[#E86024] shrink-0 mt-1" />
                <span>Thoothukudi, Tamil Nadu, India</span>
              </li>
              <li>
                <a
                  href={`tel:${COMPANY_DETAILS.phone}`}
                  className="flex items-center space-x-3 text-slate-700 hover:text-[#E86024] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#E86024] shrink-0" />
                  <span>{COMPANY_DETAILS.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY_DETAILS.email}`}
                  className="flex items-center space-x-3 text-slate-700 hover:text-[#E86024] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#E86024] shrink-0" />
                  <span>{COMPANY_DETAILS.email}</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar Divider */}
        <div className="pt-8 border-t border-slate-300 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-medium space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} EMAJ Freight Private Limited. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-[#E86024] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-[#E86024] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}