"use client";

import { motion } from "framer-motion";

const FEATURES = [
  { title: "Unified Customer Profiles", desc: "See every customer touchpoint in one place — conversations, purchases, and lifecycle stage." },
  { title: "Automated Campaigns", desc: "Create behavior-driven email & SMS flows that run on autopilot." },
  { title: "Lead Scoring & Routing", desc: "Prioritize leads automatically and route them to the right rep." },
  { title: "Reporting & Insights", desc: "Prebuilt dashboards + custom reports to measure ROI and growth." },
  { title: "Integrations", desc: "Connect your stack — email, payments, analytics, and more." },
  { title: "GDPR & Security", desc: "Enterprise-grade controls and compliance tools out of the box." },
];

export default function Features({ fadeUp }) {
  return (
    <section id="features" className="scroll-mt-28 mt-8 pb-16">
      <div className="max-w-7xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
              <h2 className="text-3xl font-bold text-white">Everything marketing teams need</h2>
              <p className="mt-3 text-slate-300 max-w-2xl mx-auto">From lead capture to nurture workflows and analytics — built to scale with your business.</p>
            </motion.div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {FEATURES.map((f, idx) => (
                <motion.div key={f.title} whileHover={{ y: -8 }} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0, transition: { delay: idx * 0.06 } }} className="p-6 rounded-xl border border-white/6 shadow-sm bg-gradient-to-b from-white/2 to-transparent backdrop-blur-md">
                  <div className="w-12 h-12 rounded-md bg-white/6 flex items-center justify-center font-semibold text-sky-300">✓</div>
                  <h3 className="mt-4 font-semibold text-lg text-white">{f.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
    </section>
  );
}
