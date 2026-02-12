"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-slate-200/60 bg-white/80 backdrop-blur-xl px-5 py-4 shadow-lg shadow-slate-200/40">

          <div className="w-full md:w-auto flex items-center justify-between">
            {/* LOGO & TITLE */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden shadow-sm border border-slate-100 flex-shrink-0">
                <Image src="/logo.jpg" alt="Logo" width={40} height={40} />
              </div>
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                Smart Profit Engine
              </span>
            </Link>

            {/* MOBILE HAMBURGER (Right side) */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 text-slate-600 hover:text-primary transition-colors focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="/" className="text-slate-600 hover:text-primary transition-colors font-semibold">Home</a>
            <a href="/features" className="text-slate-600 hover:text-primary transition-colors font-semibold">Features</a>
            <a href="/#how" className="text-slate-600 hover:text-primary transition-colors font-semibold">How it works</a>
            <a href="/pricing" className="text-slate-600 hover:text-primary transition-colors font-semibold">Pricing</a>
            <a href="/#footer" className="text-slate-600 hover:text-primary transition-colors font-semibold">About</a>
          </nav>

          {/* CTA (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/form"
              className="rounded-full bg-gradient-to-r from-secondary to-primary px-7 py-3 text-sm font-bold text-white shadow-lg shadow-primary/20 hover:scale-105 transition-all"
            >
              Start free trial
            </Link>
          </div>
        </div>

        {/* MOBILE DROPDOWN */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 rounded-2xl border border-slate-200/60 bg-white/95 backdrop-blur-xl p-6 shadow-xl animate-in slide-in-from-top-4 duration-300">
            <nav className="flex flex-col gap-6 text-base font-semibold">
              <a href="/" onClick={toggleMenu} className="text-slate-600 hover:text-primary transition-colors">Home</a>
              <a href="/features" onClick={toggleMenu} className="text-slate-600 hover:text-primary transition-colors">Features</a>
              <a href="/#how" onClick={toggleMenu} className="text-slate-600 hover:text-primary transition-colors">How it works</a>
              <a href="/pricing" onClick={toggleMenu} className="text-slate-600 hover:text-primary transition-colors">Pricing</a>
              <a href="/#footer" onClick={toggleMenu} className="text-slate-600 hover:text-primary transition-colors">About</a>
            </nav>
          </div>
        )}
      </div>
    </header >
  );
}
