"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero({ fadeUp }) {
  return (
    <section className="relative pt-6 pb-12 overflow-hidden">

      {/* ===== UPDATED BACKGROUND (MATCHING IMAGE VIBE) ===== */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(43,155,126,0.1),transparent_40%),radial-gradient(circle_at_80%_25%,rgba(13,91,145,0.1),transparent_40%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary shadow-sm border border-primary/20">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Sell Smarter With Automation
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-accent">
            Profit Engine for{" "}
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              modern teams
            </span>
          </h1>

          <p className="mt-6 text-slate-600 max-w-xl text-lg">
            A unified platform that connects growth, management, and operations
            into one powerful system. Businesses can scale faster and stay profitable.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/form"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-secondary to-primary text-white px-8 py-3.5 font-bold shadow-lg hover:shadow-primary/20 transition transform hover:-translate-y-0.5"
            >
              Start Free Trial
            </a>

            <a
              href="/features"
              className="inline-flex items-center gap-3 rounded-full border-2 border-slate-200 px-8 py-3.5 text-accent font-bold hover:bg-slate-50 transition"
            >
              View Demo
            </a>
          </div>

          <div className="mt-10 flex items-center gap-10">
            <div className="border-l-4 border-primary pl-4">
              <p className="text-3xl font-extrabold text-accent">3x</p>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">lead growth</p>
            </div>
            <div className="border-l-4 border-secondary pl-4">
              <p className="text-3xl font-extrabold text-accent">40%</p>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">less manual work</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="relative"
        >
          <div className="w-full aspect-4/3 rounded-2xl bg-white p-3 shadow-2xl border border-slate-200 relative z-10">
            <div className="relative w-full h-full rounded-xl overflow-hidden border border-slate-100">
              <Image
                src="/hero2.jpg"
                alt="Dashboard preview"
                fill
                className="object-cover"
              />
            </div>
          </div>
          {/* Decorative element like the image pattern */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10" />
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full blur-2xl -z-10" />
        </motion.div>

      </div>
    </section>
  );
}
