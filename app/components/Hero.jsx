"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero({ fadeUp }) {
  return (
    <section className="relative pt-4 md:pt-6 pb-12 overflow-hidden">

      {/* ===== UPDATED BACKGROUND (MATCHING IMAGE VIBE) ===== */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(43,155,126,0.1),transparent_40%),radial-gradient(circle_at_80%_25%,rgba(13,91,145,0.1),transparent_40%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

        {/* LEFT CONTENT */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-[10px] md:text-xs font-bold text-primary shadow-sm border border-primary/20 uppercase tracking-widest">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Sell Smarter With Automation
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight tracking-tight text-accent">
            Profit Engine for{" "}
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              modern teams
            </span>
          </h1>

          <p className="mt-6 text-slate-500 max-w-xl text-base md:text-lg font-medium leading-relaxed">
            A unified platform that connects growth, management, and operations
            into one powerful system. Businesses can scale faster and stay profitable.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="/form"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-secondary to-primary text-white px-8 py-4 font-black shadow-xl hover:shadow-primary/30 transition-all hover:scale-105"
            >
              Start Free Trial
            </a>

            <a
              href="/features"
              className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-slate-200 px-8 py-4 text-accent font-black hover:bg-slate-50 transition-all"
            >
              View Demo
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 md:gap-10">
            <div className="border-l-4 border-primary pl-4">
              <p className="text-2xl md:text-4xl font-black text-accent">3x</p>
              <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">lead growth</p>
            </div>
            <div className="border-l-4 border-secondary pl-4">
              <p className="text-2xl md:text-4xl font-black text-accent">40%</p>
              <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">less manual work</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative mt-8 md:mt-0"
        >
          <div className="w-full aspect-[4/3] rounded-3xl bg-white p-2 md:p-3 shadow-2xl border border-slate-200 relative z-10 overflow-hidden">
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-slate-100">
              <Image
                src="/hero1.jpg"
                alt="Dashboard preview"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary/20 rounded-full blur-3xl -z-10" />
          <div className="absolute -top-10 -left-10 w-48 h-48 bg-secondary/20 rounded-full blur-3xl -z-10" />
        </motion.div>

      </div>
    </section>
  );
}
