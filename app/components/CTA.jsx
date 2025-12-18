"use client";

import { motion } from "framer-motion";

export default function CTA({ fadeUp }) {
  return (
    <section id="demo" className="mt-8 pb-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-3xl font-bold text-white"
        >
          Ready to grow with Smart marketing with CRM?
        </motion.h3>
        <p className="mt-3 text-slate-300">
          Request a demo and see how automation + insights can transform your
          marketing.
        </p>
        <div className="mt-6">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-black px-5 py-3 font-semibold shadow-lg transform-gpu hover:scale-[1.03] transition"
          >
            Request demo
          </a>
        </div>
      </div>
    </section>
  );
}
