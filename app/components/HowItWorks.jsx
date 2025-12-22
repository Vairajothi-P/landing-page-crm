"use client";

import { motion } from "framer-motion";
import Link from "next/link";

/**
 * @typedef {Object} HowItWorks
 * @property {number} id
 * @property {string} title
 * @property {string} description
 * @property {string} icon
 * @property {string} color
 */

/** @type {HowItWorks[]} */
const HowItWorkss = [
  {
    id: 1,
    title: "Operations Foundation",
    description:
      "Digitize manufacturing, finance, and order workflows into a single system (Quotes → Sales Orders → Production → Invoicing → Inventory)",
    icon: "🔍",
    color: "#6366f1",
  },
  {
    id: 2,
    title: "Unified Management",
    description:
      "Centralize CRM, tasks, teams, and customers for real-time control and visibility",
    icon: "📋",
    color: "#8b5cf6",
  },
  {
    id: 3,
    title: "Agentic Automation",
    description:
      "Automate workflows, follow-ups, approvals, and data movement across departments",
    icon: "⚙️",
    color: "#ec4899",
  },
  {
    id: 4,
    title: "Revenue Intelligence",
    description:
      "Track performance across operations, pipeline, and campaigns with AI-driven insights",
    icon: "📈",
    color: "#14b8a6",
  },
  {
    id: 5,
    title: "Scalable Growth",
    description:
      "Activate GTM, marketing automation, and ad exchange to drive and scale demand",
    icon: "🚀",
    color: "#10b981",
  },
];

export default function HowItWorks() {
  return (
    <div className="w-full bg-sky-950 py-32 px-6" id="how">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-center mb-32"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            Our Smart Workflow
          </h2>
          <p className="text-lg text-slate-400">
            5 proven stages to transform your strategy into results
          </p>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-slate-800 via-blue-500/50 to-slate-800" />

          {/* Steps */}
          <div className="space-y-20">
            {HowItWorkss.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: false, margin: "-100px" }}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className="flex-1">
                  <motion.div
                    whileHover={{ x: index % 2 === 0 ? 10 : -10 }}
                    className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-lg p-6 hover:border-slate-700 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{step.icon}</span>
                      <h3
                        className="text-xl font-bold"
                        style={{ color: step.color }}
                      >
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-slate-400 text-sm">{step.description}</p>
                  </motion.div>
                </div>

                {/* Center Circle */}
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2"
                  whileInView={{ scale: 1 }}
                  initial={{ scale: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: false, margin: "-100px" }}
                >
                  <motion.div
                    animate={{
                      boxShadow: `0 0 20px ${step.color}88`,
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white z-10 border-4"
                    style={{
                      backgroundColor: step.color,
                      borderColor: "#0f0f0f",
                    }}
                  >
                    {step.id}
                  </motion.div>
                </motion.div>

                {/* Empty space for alignment */}
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>

          {/* Bottom decoration */}
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false, margin: "-100px" }}
            className="absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-12 w-0 h-0"
            style={{
              borderLeft: "8px solid transparent",
              borderRight: "8px solid transparent",
              borderTop: "16px solid #10b981",
              filter: "drop-shadow(0 0 8px #10b98144)",
            }}
          />
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false }}
          className="text-center mt-32"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 rounded-full bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 text-black px-5 py-3 font-semibold shadow-lg transform-gpu hover:scale-[1.03] transition"
            style={{
              boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
            }}
          >
            <Link href="/pricing">Start Your Growth Journey</Link>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
