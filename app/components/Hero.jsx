"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero({ fadeUp }) {
  return (
    <section className="relative pt-10 pb-16 overflow-hidden bg-[#f7f8fc]">

      {/* ===== EXACT SAAS BACKGROUND (LIKE REFERENCE) ===== */}
      <div className="absolute inset-0 -z-10">

        {/* Mesh gradient wash */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(139,92,246,0.18),transparent_40%),radial-gradient(circle_at_80%_25%,rgba(56,189,248,0.18),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,1),transparent_65%)]" />

        {/* Purple animated glow */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-violet-400/30 blur-[140px]"
        />

        {/* Blue animated glow */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          className="absolute -top-32 -right-40 w-[600px] h-[600px] rounded-full bg-sky-400/30 blur-[140px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-600 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-violet-500" />
            Sell Smarter With Automation
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-slate-900">
            Profit Engine for{" "}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              modern teams
            </span>
          </h1>

          <p className="mt-6 text-slate-600 max-w-xl">
            A unified platform that connects growth, management, and operations
            into one powerful system.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/form"
              className="inline-flex items-center gap-3 rounded-full bg-violet-600 text-white px-6 py-3 font-semibold shadow-lg hover:bg-violet-700 transition"
            >
              Start Free Trial
            </a>

            <a
              href="/features"
              className="inline-flex items-center gap-3 rounded-full border border-slate-300 px-6 py-3 text-slate-700 hover:bg-slate-50 transition"
            >
              View Demo
            </a>
          </div>

          <div className="mt-8 flex items-center gap-8">
            <div>
              <p className="text-3xl font-extrabold text-slate-900">3x</p>
              <p className="text-sm text-slate-500">lead growth</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-slate-900">40%</p>
              <p className="text-sm text-slate-500">less manual work</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="w-full aspect-4/3 rounded-2xl bg-white p-6 shadow-xl border border-slate-200">
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <Image
                src="/hero2.jpg"
                alt="Dashboard preview"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
