"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Ship } from "lucide-react";

export default function Logo() {
  const [imageError, setImageError] = useState(false);

  return (
    <Link href="/" className="flex items-center space-x-3 group">
      {!imageError ? (
        /* Tries to load local image from /public/images/logo.png */
        <Image
          src="/images/logo.png"
          alt="EMAJ Freight Logo"
          width={180}
          height={48}
          className="h-10 w-auto object-contain"
          onError={() => setImageError(true)}
          priority
        />
      ) : (
        /* High-end Styled Vector Fallback if logo.png is missing */
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E86024] to-[#d0521d] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
            <Ship className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black text-white tracking-wider leading-none">
              EMAJ <span className="text-[#E86024]">FREIGHT</span>
            </span>
            <span className="text-[9px] font-semibold tracking-widest text-slate-400 uppercase mt-1">
              Private Limited
            </span>
          </div>
        </div>
      )}
    </Link>
  );
}