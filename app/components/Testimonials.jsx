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
    <section className="scroll-mt-28 py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-4xl font-extrabold text-accent mb-12"
        >
          What customers say
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.blockquote
              key={t.name}
              whileHover={{ scale: 1.02, y: -4 }}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: idx * 0.1 },
              }}
              className="p-8 rounded-2xl bg-white border border-slate-200 text-left shadow-lg relative overflow-hidden group transition-all"
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 group-hover:bg-primary/10 transition-colors" />

              <p className="text-slate-700 text-lg italic leading-relaxed font-medium relative z-10">“{t.text}”</p>
              <footer className="mt-6 text-md font-bold text-accent relative z-10">
                — {t.name}, <span className="text-primary font-bold">{t.role}</span>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
