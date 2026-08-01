import Link from "next/link";
import { PhoneCall, Mail } from "lucide-react";

export default function QuickQuoteCTA() {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-blue-700/50 p-8 sm:p-12 rounded-2xl border border-blue-500/30">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight mb-3">
              Ready to Ship Your Cargo Worldwide?
            </h2>
            <p className="text-blue-100 text-base sm:text-lg">
              Get an instant customized rate for air, ocean, or overland transport from our freight specialists.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
            <Link
              href="/get-quote"
              className="w-full sm:w-auto text-center px-8 py-3.5 bg-white text-blue-600 hover:bg-blue-50 font-semibold rounded-lg shadow-md transition-colors"
            >
              Get Custom Quote
            </Link>
            <Link
              href="tel:+914466808888"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 border border-blue-400 hover:bg-blue-500 rounded-lg font-medium transition-colors"
            >
              <PhoneCall className="w-4 h-4" />
              Call Support
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}