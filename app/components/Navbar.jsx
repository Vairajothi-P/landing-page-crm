"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className='sticky top-0 md:top-4 z-30'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='flex items-center justify-between py-4 backdrop-blur-sm bg-black/10 border border-white/5 rounded-full px-4'>
          <Link href='/' className='flex items-center gap-3'>
            <div className='w-10 h-10 rounded-lg overflow-hidden'>
              <Image src='/logo.jpg' alt='Logo' width={40} height={40} />
            </div>
            <span className='font-semibold tracking-wide text-white'>
              Smart marketing with CRM
            </span>
          </Link>

          <nav className='hidden md:flex items-center gap-6 text-sm font-medium text-slate-200/90'>

            <a
              href='/'
              className='inline-flex items-center gap-3 rounded-full border border-white/8 px-5 py-3 text-slate-200 hover:bg-white/5 transition'
            >
              Home
            </a>
            <a
              href='/features'
              className='inline-flex items-center gap-3 rounded-full border border-white/8 px-5 py-3 text-slate-200 hover:bg-white/5 transition'
            >
              Features
            </a>
            <a
              href='/#how'
              className='inline-flex items-center gap-3 rounded-full border border-white/8 px-5 py-3 text-slate-200 hover:bg-white/5 transition'
            >
              How it works
            </a>
            <a
              href='/pricing'
              className='inline-flex items-center gap-3 rounded-full border border-white/8 px-5 py-3 text-slate-200 hover:bg-white/5 transition'
            >
              Pricing
            </a>
            <a
              href='/#footer'
              className='inline-flex items-center gap-3 rounded-full border border-white/8 px-5 py-3 text-slate-200 hover:bg-white/5 transition'
            >
              About
            </a>
            <Link
              href='/form'
              className='inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-black px-5 py-3 font-semibold shadow-lg transform-gpu hover:scale-[1.03] transition'
            >
              Start free trial
            </Link>
          </nav>
          <div className="md:hidden">
            {/* Hamburger Button */}
            <button
              onClick={() => setOpen(!open)}
              className="px-4 py-2 rounded-full bg-indigo-600 text-white text-sm"
            >
              ☰
            </button>

            {/* Mobile Menu */}
            {open && (
              <div className="fixed inset-x-0 top-[72px] mx-auto w-[90%] max-w-sm rounded-2xl bg-black/90 backdrop-blur-xl border border-white/10 shadow-2xl p-4 space-y-3 z-50">
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="block text-center py-2 rounded-lg text-white hover:bg-white/10"
                >
                  Home
                </Link>

                <Link
                  href="/features"
                  onClick={() => setOpen(false)}
                  className="block text-center py-2 rounded-lg text-white hover:bg-white/10"
                >
                  Features
                </Link>

                <Link
                  href="/#how"
                  onClick={() => setOpen(false)}
                  className="block text-center py-2 rounded-lg text-white hover:bg-white/10"
                >
                  How it works
                </Link>

                <Link
                  href="/pricing"
                  onClick={() => setOpen(false)}
                  className="block text-center py-2 rounded-lg text-white hover:bg-white/10"
                >
                  Pricing
                </Link>

                <Link
                  href="/#footer"
                  onClick={() => setOpen(false)}
                  className="block text-center py-2 rounded-lg text-white hover:bg-white/10"
                >
                  About
                </Link>

                <Link
                  href="/form"
                  onClick={() => setOpen(false)}
                  className="block text-center mt-3 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-black font-semibold"
                >
                  Start free trial
                </Link>
              </div>
            )}
          </div>


        </div>
      </div>
    </header>
  );
}
