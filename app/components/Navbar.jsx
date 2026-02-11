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
            <div className="w-10 h-10 rounded-xl overflow-hidden shadow-sm border border-slate-100">
              <Image src="/logo.jpg" alt="Logo" width={40} height={40} />
            </div>
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Smart Profit Engine
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a
              href="/"
              className="text-slate-600 hover:text-primary transition-colors font-semibold"
            >
              Home
            </a>
            <a
              href="/features"
              className="text-slate-600 hover:text-primary transition-colors font-semibold"
            >
              Features
            </a>
            <a
              href="/#how"
              className="text-slate-600 hover:text-primary transition-colors font-semibold"
            >
              How it works
            </a>
            <a
              href="/pricing"
              className="text-slate-600 hover:text-primary transition-colors font-semibold"
            >
              Pricing
            </a>
            <a
              href="/#footer"
              className="text-slate-600 hover:text-primary transition-colors font-semibold"
            >
              About
            </a>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/form"
              className="rounded-full bg-gradient-to-r from-secondary to-primary px-7 py-3 text-sm font-bold text-white shadow-lg shadow-primary/20 hover:scale-105 transition-all"
            >
              Start free trial
            </Link>
          </div>

          {/* MOBILE CTA */}
          <div className="md:hidden">
            <Link
              href="/form"
              className="rounded-full bg-gradient-to-r from-secondary to-primary px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-primary/20 hover:scale-105 transition-all"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header >
  );
}
