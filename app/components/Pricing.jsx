"use client";

import { motion } from "framer-motion";

export default function Pricing({ fadeUp }) {
  return (
    <section id="pricing" className="mt-8 pb-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h3 className="text-2xl font-bold text-white">Simple pricing</h3>
          <p className="max-w-2xl mx-auto mt-2 text-slate-300">
            All plans include the core CRM features. Add-ons for onboarding and
            premium support.
          </p>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-white/4 border border-white/6 transform-gpu hover:scale-[1.03] transition">
            <h4 className="font-semibold text-white">Starter</h4>
            <p className="mt-2 text-3xl font-bold text-white">
              $29
              <span className="text-sm font-normal text-slate-300">/mo</span>
            </p>
            <ul className="mt-4 text-sm text-slate-300 space-y-2">
              <li>Up to 3 users</li>
              <li>Core CRM features</li>
              <li>Email support</li>
            </ul>
            <a className="mt-6 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-sky-400 to-indigo-500 text-black px-4 py-2 font-semibold shadow-lg cursor-pointer">
              Get started
            </a>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-r from-white/6 to-white/4 border-2 border-indigo-400 transform-gpu hover:scale-[1.03] transition">
            <h4 className="font-semibold text-white">Pro</h4>
            <p className="mt-2 text-3xl font-bold text-white">
              $99
              <span className="text-sm font-normal text-slate-300">/mo</span>
            </p>
            <ul className="mt-4 text-sm text-slate-300 space-y-2">
              <li>Up to 15 users</li>
              <li>Automation & scoring</li>
              <li>Priority support</li>
            </ul>
            <a className="mt-6 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-sky-400 to-indigo-500 text-black px-4 py-2 font-semibold shadow-lg cursor-pointer">
              Start free trial
            </a>
          </div>

          <div className="p-6 rounded-xl bg-white/4 border border-white/6 transform-gpu hover:scale-[1.03] transition">
            <h4 className="font-semibold text-white">Enterprise</h4>
            <p className="mt-2 text-3xl font-bold text-white">Custom</p>
            <ul className="mt-4 text-sm text-slate-300 space-y-2">
              <li>Unlimited users</li>
              <li>SSO, SLA, Dedicated support</li>
              <li>Custom integrations</li>
            </ul>
            <a className="mt-6 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-sky-400 to-indigo-500 text-black px-4 py-2 font-semibold shadow-lg cursor-pointer">
              Contact sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
