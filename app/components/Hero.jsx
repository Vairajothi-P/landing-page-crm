"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero({ fadeUp }) {
  return (
    <section className='pt-10 pb-16'>
      <div className='max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center'>
        {/* LEFT */}
        <motion.div variants={fadeUp} initial='hidden' whileInView='visible'>
          <div className='mb-4 inline-flex items-center gap-2 rounded-full bg-white/6 px-3 py-1 text-xs font-medium text-sky-300/90 shadow-sm'>
            <svg
              className='w-3 h-3'
              viewBox='0 0 24 24'
              fill='none'
              aria-hidden='true'
            >
              <circle
                cx='12'
                cy='12'
                r='8'
                stroke='currentColor'
                strokeWidth='2'
              />
            </svg>
            CRM for smart marketers
          </div>

          <h1 className='text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-white drop-shadow-[0_8px_48px_rgba(14,165,233,0.08)]'>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-sky-300 via-indigo-300 to-purple-300 ml-3'>
              Sell Smarter With Automation
            </span>
          </h1>

          <p className='mt-6 text-slate-300 max-w-xl'>
            Unify data, automate personalized campaigns, and measure real impact
            built for fast-moving marketing teams.
          </p>

          <div className='mt-8 flex flex-wrap gap-4'>
            <a
              href='/form'
              className='inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-black px-5 py-3 font-semibold shadow-lg transform-gpu hover:scale-[1.03] transition'
            >
              Request demo
            </a>
            <a
              href='/pricing'
              className='inline-flex items-center gap-3 rounded-full border border-white/8 px-5 py-3 text-slate-200 hover:bg-white/3 transition'
            >
              Explore features
            </a>
          </div>

          <div className='mt-8 flex items-center gap-8'>
            <div>
              <p className='text-3xl font-extrabold text-white'>3x</p>
              <p className='text-sm text-slate-400'>average lead growth</p>
            </div>
            <div>
              <p className='text-3xl font-extrabold text-white'>40%</p>
              <p className='text-sm text-slate-400'>reduction in manual work</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <div className='w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-white/3 via-white/6 to-transparent p-6 flex items-center justify-center shadow-2xl backdrop-blur-sm border border-white/6'>
            {/* hero image - replace /hero.jpg with your asset in public/ */}
            <div className='relative w-full h-full rounded-lg overflow-hidden'>
              <Image
                src='/hero1.jpg'
                alt='Hero mockup'
                fill
                className='object-cover'
              />
              {/* neon overlay */}
              <div className='absolute inset-0 mix-blend-screen pointer-events-none'>
                <div className='absolute -left-16 -top-16 w-64 h-64 rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,rgba(14,165,233,0.12),rgba(124,58,237,0.08),transparent)] blur-2xl opacity-90'></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
