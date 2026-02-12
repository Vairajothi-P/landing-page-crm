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
    color: "#2B9B7E", // Brand Teal
  },
  {
    id: 2,
    title: "Unified Management",
    description:
      "Centralize CRM, tasks, teams, and customers for real time control and visibility",
    icon: "📋",
    color: "#0D5B91", // Brand Blue
  },
  {
    id: 3,
    title: "Agentic Automation",
    description:
      "Automate workflows, follow-ups, approvals, and data movement across departments",
    icon: "⚙️",
    color: "#1A365D", // Brand Dark Blue
  },
  {
    id: 4,
    title: "Revenue Intelligence",
    description:
      "Track performance across operations, pipeline, and campaigns with AI-driven insights",
    icon: "📈",
    color: "#2B9B7E",
  },
  {
    id: 5,
    title: "Scalable Growth",
    description:
      "Activate GTM, marketing automation, and ad exchange to drive and scale demand",
    icon: "🚀",
    color: "#0D5B91",
  },
];

export default function HowItWorks() {
  return (
    <div className='w-full py-16 px-6' id='how'>
      <div className='max-w-4xl mx-auto'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-extrabold text-accent mb-6'>
            Our Smart Workflow
          </h2>
          <p className='text-lg md:text-xl text-slate-600 font-medium'>
            5 proven stages to transform your strategy into results
          </p>
        </motion.div>

        {/* Vertical Timeline */}
        <div className='relative'>
          {/* Center Line (Hidden on mobile, shown on desktop) */}
          <div className='absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-slate-200 via-primary/50 to-slate-200' />

          {/* Steps */}
          <div className='space-y-12 md:space-y-20'>
            {HowItWorkss.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Content Box */}
                <div className='flex-1 w-full pl-16 md:pl-0'>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className='bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 md:p-8 shadow-xl hover:border-primary/40 transition-all'
                  >
                    <div className='flex items-center gap-4 mb-3'>
                      <span className='text-2xl md:text-3xl'>{step.icon}</span>
                      <h3
                        className='text-xl md:text-2xl font-bold'
                        style={{ color: step.color }}
                      >
                        {step.title}
                      </h3>
                    </div>
                    <p className='text-slate-600 text-sm md:text-md font-medium leading-relaxed'>
                      {step.description}
                    </p>
                  </motion.div>
                </div>

                {/* Center Circle */}
                <div className='absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center w-16 md:w-auto mt-6 md:mt-0'>
                  <motion.div
                    animate={{
                      boxShadow: `0 0 20px ${step.color}44`,
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className='w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center font-bold text-white z-10 border-4 border-white shadow-lg shrink-0'
                    style={{
                      backgroundColor: step.color,
                    }}
                  >
                    {step.id}
                  </motion.div>
                </div>

                {/* Empty space for desktop alignment */}
                <div className='hidden md:block flex-1' />
              </motion.div>
            ))}
          </div>

          {/* Bottom decoration (Hidden on mobile) */}
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className='hidden md:block absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-12 w-0 h-0'
            style={{
              borderLeft: "8px solid transparent",
              borderRight: "8px solid transparent",
              borderTop: "16px solid var(--brand-teal)",
              filter: "drop-shadow(0 0 10px rgba(43, 155, 126, 0.4))",
            }}
          />
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className='text-center mt-20'
        >
          <Link
            href="/form"
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-secondary to-primary text-white px-8 md:px-10 py-4 font-bold shadow-2xl hover:shadow-primary/30 transition transform hover:scale-105"
          >
            Start Your Growth Journey
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
