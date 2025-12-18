"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const FEATURES = [
  {
    title: "Unified Customer Profiles",
    desc: "See every customer touchpoint in one place — conversations, purchases, and lifecycle stage.",
    icon: (
      <svg
        className='w-8 h-8'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
        />
      </svg>
    ),
    color: "blue",
  },
  {
    title: "Automated Campaigns",
    desc: "Create behavior-driven email & SMS flows that run on autopilot.",
    icon: (
      <svg
        className='w-8 h-8'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M13 10V3L4 14h7v7l9-11h-7z'
        />
      </svg>
    ),
    color: "purple",
  },
  {
    title: "Lead Scoring & Routing",
    desc: "Prioritize leads automatically and route them to the right rep.",
    icon: (
      <svg
        className='w-8 h-8'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
        />
      </svg>
    ),
    color: "orange",
  },
  {
    title: "Reporting & Insights",
    desc: "Prebuilt dashboards + custom reports to measure ROI and growth.",
    icon: (
      <svg
        className='w-8 h-8'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
        />
      </svg>
    ),
    color: "green",
  },
  {
    title: "Integrations",
    desc: "Connect your stack — email, payments, analytics, and more.",
    icon: (
      <svg
        className='w-8 h-8'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1'
        />
      </svg>
    ),
    color: "indigo",
  },
  {
    title: "GDPR & Security",
    desc: "Enterprise-grade controls and compliance tools out of the box.",
    icon: (
      <svg
        className='w-8 h-8'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
        />
      </svg>
    ),
    color: "violet",
  },
];

const colorClasses = {
  blue: {
    iconBg: "bg-blue-500/10",
    iconText: "text-blue-400",
    border: "border-blue-500/20",
    hoverBorder: "group-hover:border-blue-500/40",
    accent: "bg-blue-500/5",
  },
  purple: {
    iconBg: "bg-purple-500/10",
    iconText: "text-purple-400",
    border: "border-purple-500/20",
    hoverBorder: "group-hover:border-purple-500/40",
    accent: "bg-purple-500/5",
  },
  orange: {
    iconBg: "bg-orange-500/10",
    iconText: "text-orange-400",
    border: "border-orange-500/20",
    hoverBorder: "group-hover:border-orange-500/40",
    accent: "bg-orange-500/5",
  },
  green: {
    iconBg: "bg-green-500/10",
    iconText: "text-green-400",
    border: "border-green-500/20",
    hoverBorder: "group-hover:border-green-500/40",
    accent: "bg-green-500/5",
  },
  indigo: {
    iconBg: "bg-indigo-500/10",
    iconText: "text-indigo-400",
    border: "border-indigo-500/20",
    hoverBorder: "group-hover:border-indigo-500/40",
    accent: "bg-indigo-500/5",
  },
  violet: {
    iconBg: "bg-violet-500/10",
    iconText: "text-violet-400",
    border: "border-violet-500/20",
    hoverBorder: "group-hover:border-violet-500/40",
    accent: "bg-violet-500/5",
  },
};

export default function Featuressample({ fadeUp }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className='py-20 bg-transparent'>
      <div className='max-w-7xl mx-auto px-6'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-100px" }}
          className='text-center mb-16'
        >
          <motion.div variants={titleVariants}>
            <span className='inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 bg-blue-500/10 text-blue-400 border border-blue-500/20'>
              Complete Marketing Suite
            </span>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold mt-4 text-white leading-tight'>
              Everything marketing teams need
            </h2>
          </motion.div>

          <motion.p
            variants={subtitleVariants}
            className='mt-6 text-lg md:text-xl max-w-3xl mx-auto text-slate-400'
          >
            From lead capture to nurture workflows and analytics — built to
            scale with your business.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-50px" }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
        >
          {FEATURES.map((feature, idx) => {
            const colors = colorClasses[feature.color];
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                onHoverStart={() => setHoveredIndex(idx)}
                onHoverEnd={() => setHoveredIndex(null)}
                className={`group relative p-8 rounded-xl border transition-all duration-300 bg-slate-900/40 backdrop-blur-sm ${colors.border} ${colors.hoverBorder}`}
              >
                {/* Animated background on hover */}
                <motion.div
                  className={`absolute inset-0 rounded-xl ${colors.accent} opacity-0`}
                  animate={{
                    opacity: hoveredIndex === idx ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />

                <div className='relative z-10'>
                  {/* Icon with subtle animation */}
                  <motion.div
                    animate={{
                      y: hoveredIndex === idx ? -4 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className={`w-14 h-14 rounded-lg flex items-center justify-center mb-5 ${colors.iconBg} ${colors.iconText}`}
                  >
                    {feature.icon}
                  </motion.div>

                  {/* Title with slide animation */}
                  <motion.h3
                    animate={{
                      x: hoveredIndex === idx ? 4 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className='text-xl font-bold mb-3 text-white'
                  >
                    {feature.title}
                  </motion.h3>

                  {/* Description */}
                  <p className='text-sm leading-relaxed text-slate-400'>
                    {feature.desc}
                  </p>

                  {/* Interactive arrow indicator */}
                  <motion.div
                    className={`mt-4 flex items-center gap-2 text-sm font-medium ${colors.iconText}`}
                    animate={{
                      x: hoveredIndex === idx ? 8 : 0,
                      opacity: hoveredIndex === idx ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    Learn more
                    <svg
                      className='w-4 h-4'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 5l7 7-7 7'
                      />
                    </svg>
                  </motion.div>
                </div>

                {/* Corner indicator */}
                <div
                  className={`absolute top-4 right-4 w-2 h-2 rounded-full ${colors.iconBg} opacity-50 group-hover:opacity-100 transition-opacity`}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className='text-center mt-16'
        >
          <motion.a
            href='/form'
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className='inline-flex items-center gap-3 px-8 py-4 rounded-lg font-semibold transition-all bg-blue-600 hover:bg-blue-500 text-white border border-blue-500/50'
          >
            Explore All Features
            <svg
              className='w-5 h-5'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M17 8l4 4m0 0l-4 4m4-4H3'
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
