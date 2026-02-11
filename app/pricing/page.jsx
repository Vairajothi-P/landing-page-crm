"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Plans from "../components/Plans";

export default function PricingPage() {
  return (
    <div
      id='pricing'
      className='relative w-full min-h-screen bg-transparent text-slate-900 px-2 sm:px-8 lg:px-16 overflow-x-hidden pb-20'
    >
      <Navbar />

      {/* Background Decorative Elements */}
      <div className='absolute inset-0 pointer-events-none -z-10'>
        <div className='absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl' />
        <div className='absolute bottom-40 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl' />
      </div>

      <div className='relative max-w-7xl mx-auto mt-8'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className='relative text-center mb-24'
        >
          {/* Back Button */}
          <button
            onClick={() => window.history.back()}
            className='absolute left-0 top-2 bg-gradient-to-r from-secondary to-primary text-white flex items-center gap-2 px-6 py-2.5 rounded-full shadow-lg hover:shadow-primary/20 transition-all font-bold'
          >
            <span className='text-lg'>←</span>
            <span className='hidden sm:inline'>Back</span>
          </button>

          {/* Heading */}
          <h1 className='text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent leading-tight pb-2'>
            Pricing Plans
          </h1>

          {/* Description */}
          <p className='text-slate-600 text-xl font-medium max-w-3xl mx-auto leading-relaxed'>
            Flexible plans designed for manufacturing teams at every stage.
            Start with the essentials and add capabilities as you scale.
          </p>
        </motion.div>

        <Plans />

        {/* Add-ons Marketplace */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='mt-32'
        >
          <div className='text-center mb-16'>
            <div className='inline-block mb-6 p-4 bg-primary/10 rounded-2xl'>
              <svg
                className='w-12 h-12 mx-auto text-primary'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
                />
              </svg>
            </div>
            <h2 className='text-4xl md:text-5xl font-extrabold text-accent mb-6'>Add-Ons Marketplace</h2>
            <p className='text-slate-600 text-lg font-medium max-w-3xl mx-auto'>
              Enhance your platform with specialized modules. Options vary by base plan.
            </p>
          </div>

          {/* CRM & HR Add-Ons Section */}
          <div className='mb-20'>
            <h3 className='text-2xl font-extrabold mb-8 text-secondary border-l-4 border-secondary pl-4 uppercase tracking-wider'>
              CRM & HR Add-Ons
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              <AddonBox
                icon='🎯'
                title='CRM Basic'
                price='₹2,000'
                period='/month'
                description='Streamline client management, automate invoicing, and boost accounting efficiency effortlessly.'
                note='Included in Professional'
              />
              <AddonBox
                icon='🎯'
                title='CRM Advanced'
                price='₹3,500'
                period='/month'
                description='Customer 360, Deal AI, Follow-Up Automation for complete customer insights.'
                note='Included in Ultimate'
              />
              <AddonBox
                icon='👨‍💼'
                title='HRMS Basic'
                price='₹1,500'
                period='/month'
                description='Attendance & Leave Management to streamline HR operations.'
              />
              <AddonBox
                icon='👨‍💼'
                title='HRMS Advanced'
                price='₹2,000'
                period='/month'
                description='Payroll systems automate salaries, reduce errors, track staff, and improve HR operations.'
              />
              <AddonBox
                icon='👷'
                title='Field Service Management'
                price='₹2,500'
                period='/month'
                description='Field Service projects track costs, invoices, and revenue for accurate accounting.'
              />
            </div>
          </div>

          {/* Growth & Marketing Add-Ons Section */}
          <div className='mb-20'>
            <h3 className='text-2xl font-extrabold mb-8 text-primary border-l-4 border-primary pl-4 uppercase tracking-wider'>
              Growth & Marketing Add-Ons
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              <AddonBox
                icon='📱'
                title='Growth Booster Basic'
                price='₹2,000'
                period='/month'
                description='Lead Nurturing Campaigns via Email, WhatsApp, and SMS.'
                note='Optional for Basic'
              />
              <AddonBox
                icon='🚀'
                title='Growth Booster Advanced'
                price='₹2,500'
                period='/month'
                description='Advanced marketing automation with AI-powered insights and multi-channel campaigns.'
                note='Optional for Professional'
              />
              <AddonBox
                icon='📊'
                title='Analytics & Revenue Intelligence'
                price='₹3,499'
                period='/month'
                description='Revenue Forecasting, ROAS Dashboards, and Marketing Intelligence Reports.'
                note='Optional for Professional/Ultimate'
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function PlanCard({
  title,
  price,
  period,
  blurb,
  sections,
  highlight = false,
  badge,
  icon,
  addons,
  addonsTitle,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
      className={
        "relative h-full rounded-3xl border bg-gradient-to-b from-white/80 to-gray-50/40 backdrop-blur-xl p-8 md:p-10 transition-all duration-300 flex flex-col" +
        (highlight
          ? " border-blue-300/60 shadow-2xl shadow-blue-200/40 ring-1 ring-blue-200/20"
          : " border-gray-300/50 hover:border-gray-400/50")
      }
    >
      {/* Gradient overlay for highlight */}
      {highlight && (
        <div className='absolute inset-0 bg-gradient-to-br from-blue-100/5 via-purple-100/5 to-pink-100/5 rounded-3xl pointer-events-none' />
      )}

      {badge ? (
        <div className='absolute -top-4 left-1/2 -translate-x-1/2'>
          <span className='px-5 py-2 text-sm font-bold rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 shadow-lg shadow-purple-900/50'>
            {badge}
          </span>
        </div>
      ) : null}

      <div className='relative mb-8'>
        {/* Icon */}
        <div className='mb-6'>{icon}</div>

        <h3 className='text-2xl font-bold mb-3'>{title}</h3>
        <div className='flex items-baseline gap-2'>
          <span className='text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
            {price}
          </span>
          <span className='text-gray-500 text-lg'>{period}</span>
        </div>
        {blurb ? (
          <p className='mt-4 text-gray-600 text-base leading-relaxed'>
            {blurb}
          </p>
        ) : null}
      </div>

      <div className='relative space-y-8 mb-8 flex-grow'>
        {sections?.map((sec) => (
          <div key={sec.heading}>
            <h4 className='text-sm font-bold text-blue-600 uppercase tracking-wider mb-3'>
              {sec.heading}
            </h4>
            <ul className='space-y-2.5'>
              {sec.items.map((it, i) => {
                const isObject = typeof it === "object";
                const itemText = isObject ? it.text : it;
                const itemIcon = isObject ? it.icon : null;

                return (
                  <li
                    key={i}
                    className='flex gap-3 text-gray-700 text-sm leading-relaxed'
                  >
                    {itemIcon ? (
                      <div className='shrink-0 mt-0.5'>
                        {getIconSVG(itemIcon)}
                      </div>
                    ) : (
                      <svg
                        className='w-5 h-5 text-blue-500 shrink-0 mt-0.5'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2.5}
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                    )}
                    <span>{itemText}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      {/* Add-ons Section */}
      {addons && addons.length > 0 && (
        <div className='relative mb-6'>
          <h4 className='text-sm font-bold text-purple-600 uppercase tracking-wider mb-4'>
            {addonsTitle || "Add-Ons"}
          </h4>
          <div className='space-y-3'>
            {addons.map((addon, idx) => (
              <div
                key={idx}
                className='rounded-lg border border-gray-300/50 bg-gradient-to-br from-gray-50/60 to-gray-100/30 p-4 hover:border-purple-300/50 transition-all duration-300'
              >
                <div className='flex items-start gap-3'>
                  <div className='shrink-0 mt-0.5'>
                    {getIconSVG(addon.icon)}
                  </div>
                  <div className='flex-1'>
                    <div className='flex items-baseline justify-between gap-2 mb-1'>
                      <h5 className='font-semibold text-gray-900 text-sm'>
                        {addon.title}
                      </h5>
                      <span className='text-purple-400 font-bold text-xs whitespace-nowrap'>
                        {addon.price}
                      </span>
                    </div>
                    <p className='text-gray-500 text-xs leading-relaxed'>
                      {addon.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className='relative mt-auto'>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className='w-full py-4 rounded-xl font-bold text-base bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:shadow-xl hover:shadow-purple-200/50 transition-all duration-300'
        >
          Get Started →
        </motion.button>
      </div>
    </motion.div>
  );
}

function AddonsCard({ title, items }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5 }}
      className='rounded-3xl border border-gray-300/50 bg-gradient-to-br from-white/80 to-gray-50/40 backdrop-blur-xl p-8 hover:border-gray-400/50 transition-all duration-300'
    >
      <div className='flex items-center gap-3 mb-6'>
        <div className='w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center'>
          <svg
            className='w-6 h-6 text-purple-400'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M12 6v6m0 0v6m0-6h6m-6 0H6'
            />
          </svg>
        </div>
        <h3 className='text-2xl font-bold'>{title}</h3>
      </div>
      <ul className='space-y-3'>
        {items.map((it, i) => (
          <li
            key={i}
            className='flex gap-3 text-gray-700 text-sm leading-relaxed'
          >
            <svg
              className='w-5 h-5 text-purple-500 shrink-0 mt-0.5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function AddonBox({ icon, title, price, period, description, note }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -6 }}
      className='rounded-3xl border border-slate-200 bg-white p-8 shadow-xl hover:shadow-2xl hover:border-primary/40 transition-all duration-300 relative overflow-hidden group'
    >
      <div className='absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -mr-10 -mt-10 group-hover:bg-primary/10 transition-colors' />

      <div className='flex items-start gap-5 mb-6 relative z-10'>
        <div className='w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0 shadow-sm'>
          {getIconSVG(icon)}
        </div>
        <div className='flex-1'>
          <h4 className='text-xl font-bold text-accent mb-1 group-hover:text-secondary transition-colors'>{title}</h4>
          <div className='flex items-baseline gap-1'>
            <span className='text-2xl font-extrabold text-primary'>
              {price}
            </span>
            <span className='text-slate-500 text-sm font-bold'>{period}</span>
          </div>
        </div>
      </div>
      <p className='text-slate-600 text-md font-medium leading-relaxed mb-4 relative z-10'>
        {description}
      </p>
      {note && (
        <div className='inline-block px-3 py-1 rounded-md bg-slate-50 border border-slate-100 text-xs text-slate-500 font-bold italic relative z-10'>
          {note}
        </div>
      )}
    </motion.div>
  );
}

// SVG Icon Components
function BasicIcon() {
  return (
    <div className='w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center'>
      <svg
        className='w-8 h-8 text-blue-400'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
        />
      </svg>
    </div>
  );
}

function ProIcon() {
  return (
    <div className='w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center'>
      <svg
        className='w-8 h-8 text-purple-400'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M13 10V3L4 14h7v7l9-11h-7z'
        />
      </svg>
    </div>
  );
}

function UltimateIcon() {
  return (
    <div className='w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center'>
      <svg
        className='w-8 h-8 text-amber-400'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
        />
      </svg>
    </div>
  );
}

// Icon mapping function
function getIconSVG(emoji) {
  const iconMap = {
    "📄": (
      <svg
        className='w-5 h-5 text-secondary'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
        />
      </svg>
    ),
    "📋": (
      <svg
        className='w-5 h-5 text-secondary'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
        />
      </svg>
    ),
    "📦": (
      <svg
        className='w-5 h-5 text-secondary'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4'
        />
      </svg>
    ),
    "🛒": (
      <svg
        className='w-5 h-5 text-secondary'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
        />
      </svg>
    ),
    "💬": (
      <svg
        className='w-5 h-5 text-secondary'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
        />
      </svg>
    ),
    "🤝": (
      <svg
        className='w-5 h-5 text-secondary'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
        />
      </svg>
    ),
    "📊": (
      <svg
        className='w-5 h-5 text-secondary'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
        />
      </svg>
    ),
    "💰": (
      <svg
        className='w-5 h-5 text-secondary'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
    ),
    "📈": (
      <svg
        className='w-5 h-5 text-secondary'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
        />
      </svg>
    ),
    "💲": (
      <svg
        className='w-5 h-5 text-secondary'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
    ),
    "💳": (
      <svg
        className='w-5 h-5 text-primary'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z'
        />
      </svg>
    ),
    "🔧": (
      <svg
        className='w-5 h-5 text-primary'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
        />
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
        />
      </svg>
    ),
    "📑": (
      <svg
        className='w-5 h-5 text-primary'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
        />
      </svg>
    ),
    "🎯": (
      <svg
        className='w-5 h-5 text-primary'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
        />
      </svg>
    ),
    "🔔": (
      <svg
        className='w-5 h-5 text-primary'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
        />
      </svg>
    ),
    "✅": (
      <svg
        className='w-5 h-5 text-green-400'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
    ),
    "🏷️": (
      <svg
        className='w-5 h-5 text-primary'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z'
        />
      </svg>
    ),
    "📝": (
      <svg
        className='w-5 h-5 text-primary'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
        />
      </svg>
    ),
    "🔮": (
      <svg
        className='w-5 h-5 text-primary'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
        />
      </svg>
    ),
    "⚙️": (
      <svg
        className='w-5 h-5 text-secondary'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
        />
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
        />
      </svg>
    ),
    "🏭": (
      <svg
        className='w-5 h-5 text-secondary'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
        />
      </svg>
    ),
    "🔄": (
      <svg
        className='w-5 h-5 text-secondary'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
        />
      </svg>
    ),
    "🤖": (
      <svg
        className='w-5 h-5 text-secondary'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z'
        />
      </svg>
    ),
    "📉": (
      <svg
        className='w-5 h-5 text-secondary'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M13 17h8m0 0V9m0 8l-8-8-4 4-6-6'
        />
      </svg>
    ),
    "⚡": (
      <svg
        className='w-5 h-5 text-yellow-400'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M13 10V3L4 14h7v7l9-11h-7z'
        />
      </svg>
    ),
    "🔐": (
      <svg
        className='w-5 h-5 text-primary'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
        />
      </svg>
    ),
    "👥": (
      <svg
        className='w-5 h-5 text-secondary'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
        />
      </svg>
    ),
    "📱": (
      <svg
        className='w-5 h-5 text-primary'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
        />
      </svg>
    ),
    "⭐": (
      <svg
        className='w-5 h-5 text-yellow-400'
        fill='currentColor'
        viewBox='0 0 24 24'
      >
        <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
      </svg>
    ),
    "👨‍💼": (
      <svg
        className='w-5 h-5 text-secondary'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
        />
      </svg>
    ),
    "🚀": (
      <svg
        className='w-5 h-5 text-primary'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M13 10V3L4 14h7v7l9-11h-7z'
        />
      </svg>
    ),
    "📧": (
      <svg
        className='w-5 h-5 text-secondary'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
        />
      </svg>
    ),
    "📢": (
      <svg
        className='w-5 h-5 text-secondary'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z'
        />
      </svg>
    ),
    "👷": (
      <svg
        className='w-5 h-5 text-orange-400'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
        />
      </svg>
    ),
  };

  return iconMap[emoji] || <span className='text-lg'>{emoji}</span>;
}
