"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Mail, ArrowRight, Ship } from "lucide-react";
import { COMPANY_DETAILS } from "@/config/servicesData";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Contact", href: "/#quote" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      
      {/* Top Contact Bar */}
      <div className="hidden md:block bg-[#0E2A47] text-slate-300 py-2 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a
              href={`tel:${COMPANY_DETAILS.phone}`}
              className="flex items-center space-x-2 hover:text-[#E86024] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#E86024]" />
              <span>{COMPANY_DETAILS.phone}</span>
            </a>
            <a
              href={`mailto:${COMPANY_DETAILS.email}`}
              className="flex items-center space-x-2 hover:text-[#E86024] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#E86024]" />
              <span>{COMPANY_DETAILS.email}</span>
            </a>
          </div>
          <div className="text-slate-300 font-medium tracking-wide">
            <span>{COMPANY_DETAILS.name}</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28">
          
          {/* BRAND / LOGO AREA */}
          {/* BRAND / LOGO AREA (Option B - Crop PNG Icon + Live Text) */}
<Link href="/" className="flex items-center space-x-3 group shrink-0">
  {!logoFailed ? (
    /* Clip container to show only the emblem part of the logo image */
    <div className="relative h-14 w-14 shrink-0 overflow-hidden">
  <Image
    src="/images/logo.png"
    alt="EMAJ Emblem"
    fill
    className="object-cover object-top scale-125 mix-blend-multiply"
    onError={() => setLogoFailed(true)}
    priority
  />
</div>
  ) : (
    <div className="w-12 h-12 rounded-xl bg-[#0E2A47] flex items-center justify-center shrink-0">
      <Ship className="w-6 h-6 text-[#E86024]" />
    </div>
  )}

  <div className="flex flex-col justify-center">
    <span className="text-2xl sm:text-3xl font-black text-[#0E2A47] tracking-wider leading-none">
      EMAJ <span className="text-[#E86024]">FREIGHT</span>
    </span>
    <span className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase mt-1">
      Private Limited
    </span>
  </div>
</Link>



          {/* DESKTOP NAV LINKS */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-[#0E2A47] hover:text-[#E86024] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA BUTTON */}
          <div className="hidden md:flex items-center">
            <Link
              href="/#quote"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-[#E86024] hover:bg-[#d0521d] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-orange-500/20"
            >
              Request Quote
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Link>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-[#0E2A47] hover:bg-slate-100 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE MENU DRAWER */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-semibold text-[#0E2A47] hover:text-[#E86024] hover:bg-slate-50 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="/#quote"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center px-5 py-3 rounded-xl bg-[#E86024] hover:bg-[#d0521d] text-white font-bold text-sm transition-all shadow-md"
            >
              Request Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}