"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug, SERVICES_DATA, COMPANY_DETAILS } from "@/config/servicesData";
import QuoteModal from "@/components/QuoteModal";
import { ArrowRight, CheckCircle2, Phone, Mail, ShieldCheck, Clock, FileText } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ServiceDetailPage({ params }: PageProps) {
  const { slug } = use(params);
  const service = getServiceBySlug(slug);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-20">
      
      {/* Header */}
      <section className="bg-[#0E2A47] text-white py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-5xl font-black mb-4">{service.title}</h1>
          <p className="text-slate-300 text-lg max-w-2xl">{service.shortDesc}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200/80">
              <h2 className="text-2xl font-bold text-[#0E2A47] mb-4">Overview</h2>
              <p className="text-slate-600 leading-relaxed">{service.fullDesc}</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/80">
              <h2 className="text-2xl font-bold text-[#0E2A47] mb-6">Key Capabilities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-3 bg-slate-50 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-[#E86024] shrink-0" />
                    <span className="text-sm font-medium text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 sticky top-28 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#E86024]">
                  Need Assistance?
                </span>
                <h3 className="text-xl font-black text-[#0E2A47] mt-1">Request a Quote</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Get custom shipping rates for {service.title}.
                </p>
              </div>

              <div className="space-y-3">
                {/* POPUP TRIGGER BUTTON */}
                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="w-full flex items-center justify-center space-x-2 py-3.5 px-4 bg-[#E86024] hover:bg-[#d2521c] text-white font-bold rounded-xl transition-all shadow-md text-sm"
                >
                  <span>Request Custom Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`tel:${COMPANY_DETAILS.phone}`}
                  className="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-slate-100 hover:bg-slate-200 text-[#0E2A47] font-semibold rounded-xl text-sm"
                >
                  <Phone className="w-4 h-4 text-[#E86024]" />
                  <span>Call {COMPANY_DETAILS.phone}</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* RENDER POPUP MODAL */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        defaultServiceSlug={service.slug}
      />
    </main>
  );
}