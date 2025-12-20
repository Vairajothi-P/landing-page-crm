"use client";

import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    name: "Amit R.",
    role: "Head of Marketing",
    text: "Smart manufacturing Engine scaled our lead flow 3x in 90 days — the automation workflows are a dream.",
  },
  {
    name: "Priya S.",
    role: "Growth Lead",
    text: "Beautiful UI and powerful reporting. Our tasks are automated and we spend less time on manual work.",
  },
];

export default function Testimonials({ fadeUp }) {
  return (
    <section className="scroll-mt-28 mt-8 pb-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-2xl font-bold text-white"
        >
          What customers say
        </motion.h3>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <motion.blockquote
              key={t.name}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: idx * 0.05 },
              }}
              className="p-6 rounded-xl bg-white/4 border border-white/6 text-left"
            >
              <p className="text-slate-100">“{t.text}”</p>
              <footer className="mt-4 text-sm text-slate-300">
                — {t.name}, <span>{t.role}</span>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
