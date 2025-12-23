"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-slate-200/60 bg-white/80 backdrop-blur-xl px-5 py-4 shadow-lg shadow-slate-200/40">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden shadow-sm">
              <Image src="/logo.jpg" alt="Logo" width={40} height={40} />
            </div>
            <span className="text-lg font-bold tracking-tight bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent">
              Smart Profit Engine
            </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a
            href="/"
            className="text-slate-600 hover:text-violet-600 transition-colors"
          >
            Home
          </a>
          <a
            href="/features"
            className="text-slate-600 hover:text-violet-600 transition-colors"
          >
            Features
          </a>
          <a
            href="/#how"
            className="text-slate-600 hover:text-violet-600 transition-colors"
          >
            How it works
          </a>
          <a
            href="/pricing"
            className="text-slate-600 hover:text-violet-600 transition-colors"
          >
            Pricing
          </a>
          <a
            href="/#footer"
            className="text-slate-600 hover:text-violet-600 transition-colors"
          >
            About
          </a>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/form"
            className="rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 hover:bg-violet-700 hover:-translate-y-0.5 transition-all"
          >
            Start free trial
          </Link>
        </div>

        {/* MOBILE CTA */}
        <div className="md:hidden">
          <Link
            href="/form"
            className="rounded-full bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-md"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
    </header >
  );
}
