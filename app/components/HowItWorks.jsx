"use client";

import { motion } from "framer-motion";

export default function HowItWorks({ fadeUp }) {
  return (
    <section id="how" className="scroll-mt-28 mt-8 pb-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h3 className="text-2xl font-bold text-white">How it works</h3>
          <p className="mt-3 text-slate-300">
            Launch campaigns fast with a three-step workflow that connects data,
            automation, and measurement.
          </p>
          <ol className="mt-6 space-y-4 text-sm text-slate-300">
            <li>
              <strong>1. Capture:</strong> Collect leads from forms, ads, and
              integrations.
            </li>
            <li>
              <strong>2. Automate:</strong> Segment and trigger personalized
              journeys.
            </li>
            <li>
              <strong>3. Measure:</strong> Track performance with dashboards and
              ROI reports.
            </li>
          </ol>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-white/4 border border-white/6">
              <h4 className="font-semibold text-white">
                Drag & drop journey builder
              </h4>
              <p className="mt-2 text-sm text-slate-300">
                Build multi-step flows visually — no code required.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/4 border border-white/6">
              <h4 className="font-semibold text-white">
                Personalization at scale
              </h4>
              <p className="mt-2 text-sm text-slate-300">
                Dynamic content and behavioral triggers for relevant messaging.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/4 border border-white/6">
              <h4 className="font-semibold text-white">Realtime analytics</h4>
              <p className="mt-2 text-sm text-slate-300">
                Monitor conversions and pipeline impact in realtime dashboards.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/4 border border-white/6">
              <h4 className="font-semibold text-white">
                Permissions & workflows
              </h4>
              <p className="mt-2 text-sm text-slate-300">
                Role-based access and approvals for teams of any size.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
