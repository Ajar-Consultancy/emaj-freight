"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle } from "lucide-react";
import { SERVICES_DATA, COMPANY_DETAILS } from "@/config/servicesData";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultServiceSlug?: string;
}

export default function QuoteModal({
  isOpen,
  onClose,
  defaultServiceSlug = "",
}: QuoteModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: defaultServiceSlug,
    cargoDetails: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Connect your API/email endpoint here
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden z-10 border border-slate-100"
          >
            {/* Header */}
            <div className="bg-[#0E2A47] text-white px-6 py-5 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold">Request a Custom Quote</h3>
                <p className="text-xs text-slate-300 mt-0.5">
                  Fast response guaranteed from {COMPANY_DETAILS.name}
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-1 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {submitted ? (
                <div className="py-8 text-center space-y-3">
                  <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto animate-bounce" />
                  <h4 className="text-lg font-bold text-[#0E2A47]">
                    Quote Request Received!
                  </h4>
                  <p className="text-sm text-slate-600">
                    Our freight desk will get back to you shorty at{" "}
                    <strong className="text-[#0E2A47]">{formData.email}</strong>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#E86024] focus:border-transparent outline-none text-sm text-slate-800"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#E86024] focus:border-transparent outline-none text-sm text-slate-800"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#E86024] focus:border-transparent outline-none text-sm text-slate-800"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Select Logistics Service
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#E86024] focus:border-transparent outline-none text-sm text-slate-800 bg-white"
                    >
                      <option value="">-- Choose Service --</option>
                      {SERVICES_DATA.map((item) => (
                        <option key={item.slug} value={item.slug}>
                          {item.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Shipment / Cargo Details
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Origin, destination, estimated weight/volume, commodity type..."
                      value={formData.cargoDetails}
                      onChange={(e) =>
                        setFormData({ ...formData, cargoDetails: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#E86024] focus:border-transparent outline-none text-sm text-slate-800 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center space-x-2 py-3.5 px-4 bg-[#E86024] hover:bg-[#d2521c] text-white font-bold rounded-xl transition-all shadow-md text-sm mt-2"
                  >
                    <span>Submit Quote Request</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}