"use client";

import React, { useState } from "react";
import { Send, Clock, ShieldCheck, Loader2, CheckCircle2, RefreshCw } from "lucide-react";
import { SERVICES_DATA } from "@/config/servicesData";

export default function QuoteSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: SERVICES_DATA[0]?.title || "Ocean Freight Forwarding",
    details: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      // Background submission to Next.js API route
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit request.");
      }

      // Show success screen and reset form inputs
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: SERVICES_DATA[0]?.title || "Ocean Freight Forwarding",
        details: "",
      });
    } catch (error) {
      console.error("Submission error:", error);
      setErrorMessage("Something went wrong while submitting your request. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#0E2A47] rounded-[18px] p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl">
        
        {/* Soft Background Glows */}
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#E86024]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-5 space-y-6">
            <span className="px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider bg-[#E86024]/20 text-[#E86024] rounded-full border border-[#E86024]/30 inline-block">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
              Ready to Streamline Your Supply Chain?
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Request a customized rate quotation tailored to your cargo origin, destination, and timelines.
            </p>

            {/* Micro Highlights */}
            <div className="space-y-4 pt-6 border-t border-slate-700/60">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white/5 rounded-xl text-[#E86024] border border-white/10">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">2-Hour Response Time</p>
                  <p className="text-xs text-slate-300">Fast rate calculation by specialized desk teams.</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white/5 rounded-xl text-[#E86024] border border-white/10">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Guaranteed Ocean/Air Space</p>
                  <p className="text-xs text-slate-300">Direct allocations with leading global carriers.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Contrast Form / Success Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[18px] p-6 sm:p-10 shadow-xl border border-slate-100 text-slate-800">
              
              {isSubmitted ? (
                /* Success View */
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0E2A47]">
                    Quote Request Submitted Successfully!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to EMAJ Freight. Our executive will review your shipment specifications and contact you as soon as possible.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Submit Another Request</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Active Form View */
                <>
                  <h3 className="text-2xl font-bold text-[#0E2A47] mb-1">
                    Request an Express Quote
                  </h3>
                  <p className="text-xs text-slate-500 mb-6">
                    Fill in the details below to receive competitive freight pricing immediately.
                  </p>

                  {errorMessage && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 text-xs rounded-xl">
                      {errorMessage}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-[#E86024] focus:border-transparent outline-none transition-all text-sm text-slate-900"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-[#E86024] focus:border-transparent outline-none transition-all text-sm text-slate-900"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Required Service *
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-[#E86024] focus:border-transparent outline-none transition-all text-sm text-slate-900"
                        >
                          {SERVICES_DATA.map((item) => (
                            <option key={item.slug} value={item.title}>
                              {item.title}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-[#E86024] focus:border-transparent outline-none transition-all text-sm text-slate-900"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Shipment Details
                      </label>
                      <textarea
                        name="details"
                        rows={3}
                        value={formData.details}
                        onChange={handleChange}
                        placeholder="Provide origin, destination, estimated weight/volume, and commodity type..."
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-[#E86024] focus:border-transparent outline-none transition-all text-sm text-slate-900 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center space-x-2 py-4 px-6 bg-[#E86024] hover:bg-[#d2521c] text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl text-sm disabled:opacity-70 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending Request...</span>
                        </>
                      ) : (
                        <>
                          <span>Get Express Quote</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}