"use client";

import { motion } from "framer-motion";

export default function CTA({ fadeUp }) {
  return (
    <section id="demo" className="mt-4 pb-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-gradient-to-br from-accent to-secondary rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full -ml-32 -mb-32 blur-3xl" />

          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold text-white relative z-10"
          >
            Ready to grow with Smart Profit Engine?
          </motion.h3>
          <p className="mt-4 text-blue-100 max-w-xl mx-auto relative z-10">
            Request a demo and see how automation + insights can transform your
            journey. Join thousands of teams already scaling with Pi Bi.
          </p>
          <div className="mt-8 relative z-10">
            <a
              href="/form"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-secondary to-primary text-white border-2 border-white/20 px-8 py-3.5 font-bold shadow-2xl transform-gpu hover:scale-110 transition-all"
            >
              Request demo ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
