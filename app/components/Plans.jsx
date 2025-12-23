"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Plans() {
  return (
    <>
      {/* Plans */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 mb-24'>
        {/* BASIC */}
        <PlanCard
          highlight={false}
          title='BASIC Plan'
          price='₹2,999'
          period='/ month'
          icon={<BasicIcon />}
          blurb='Perfect for small manufacturing teams starting operations — CRM, HRMS, and Growth are optional add-ons'
          sections={[
            {
              heading: "Manufacturing Operations",
              items: [
                { text: "Invoices & Quotations", icon: "📄" },
                { text: "Sales Order", icon: "📋" },
                { text: "Real-Time Inventory", icon: "📦" },
                { text: "Purchase Orders and Bills", icon: "🛒" },
                { text: "RFQs (Request for Quotations)", icon: "💬" },
                { text: "Vendor Management", icon: "🤝" },
                { text: "Production Planning (Basic)", icon: "📊" },
                { text: "Expense Management", icon: "💰" },
                { text: "P&L, Balance Sheet", icon: "📈" },
                { text: "Price List", icon: "💲" },
              ],
            },
            {
              heading: "Management & Tasks",
              items: [
                { text: "Task Assignment & Tracking", icon: "✅" },
                {
                  text: "Standard Dashboards (Production, Inventory, Revenue)",
                  icon: "📊",
                },
              ],
            },
            {
              heading: "Support",
              items: [
                {
                  text: "Email Notifications for Orders & Inventory Alerts",
                  icon: "📧",
                },
                { text: "Email Support", icon: "💬" },
              ],
            },
          ]}
          addons={[
            {
              title: "CRM Basic Pack",
              price: "₹2,000/mo",
              description: "Lead Tracking, Customer Contacts, Deal Status",
              icon: "🎯",
            },
            {
              title: "HRMS Basic",
              price: "₹1,500/mo",
              description: "Attendance & Leave Management",
              icon: "👥",
            },
            {
              title: "Growth Booster Basic",
              price: "₹2,000/mo",
              description: "Lead Nurturing Campaigns, Email/WhatsApp/SMS",
              icon: "📱",
            },
          ]}
          addonsTitle='Add-Ons Available for Basic'
        />

        {/* PROFESSIONAL */}
        <PlanCard
          highlight
          badge='Most Popular'
          title='PROFESSIONAL Plan'
          price='₹5,999'
          period='/ month'
          icon={<ProIcon />}
          blurb='₹1,000 more than Basic + includes CRM Basic pack + extra features'
          sections={[
            {
              heading: "Manufacturing Operations (Enhanced)",
              items: [
                { text: "POS", icon: "💳" },
                { text: "Work Orders", icon: "🔧" },
                { text: "Bill of Materials (BOM)", icon: "📑" },
                {
                  text: "Advanced Production Planning (Auto Resource Allocation)",
                  icon: "🎯",
                },
                { text: "Real-Time Inventory Alerts", icon: "🔔" },
                { text: "Sales and Purchsse approvals", icon: "✅" },
                {
                  text: "Price Lists (Automated Pricing Rules)",
                  icon: "🏷️",
                },
                { text: "GSTR Filing", icon: "📝" },
                {
                  text: "Inventory Forecasting & Auto-Reordering",
                  icon: "🔮",
                },
              ],
            },
            {
              heading: "CRM & Management",
              items: [
                {
                  text: "CRM Basic (Included) — saves ₹2,000/mo vs. Basic + Add-On",
                  icon: "🎯",
                },
                {
                  text: "Automated Workflows (Task reminders, approvals)",
                  icon: "⚡",
                },
                { text: "Role-Based Access Control", icon: "🔐" },
                {
                  text: "HRMS Basic (Optional Add-On ₹1,500/mo if needed)",
                  icon: "👥",
                },
              ],
            },
            {
              heading: "Growth & Marketing",
              items: [
                {
                  text: "Lead Nurturing Campaigns (Email, WhatsApp, SMS)",
                  icon: "📱",
                },
                {
                  text: "Deal Insights AI (Pricing & Conversion Recommendations)",
                  icon: "🤖",
                },
                { text: "Priority Support", icon: "⭐" },
              ],
            },
          ]}
          addons={[
            {
              title: "HRMS Advanced",
              price: "₹2,000/mo",
              description: "Payroll, Performance Reviews, Employee Analytics",
              icon: "👨‍💼",
            },
            {
              title: "Growth Booster Advanced",
              price: "₹2,500/mo",
              description:
                "Advanced marketing automation with AI-powered insights",
              icon: "🚀",
            },
          ]}
          addonsTitle='Strategic Add-Ons'
        />

        {/* ULTIMATE */}
        <PlanCard
          highlight={false}
          title='ULTIMATE Plan'
          price='₹11,999'
          period='/ month'
          icon={<UltimateIcon />}
          blurb='Full manufacturing automation + CRM Advanced + Growth & Marketing Intelligence'
          sections={[
            {
              heading: "Complete Manufacturing Operations",
              items: [
                {
                  text: "Capacity Planning & Work Center Optimization",
                  icon: "⚙️",
                },
                {
                  text: "Multi-Plant & Multi-Warehouse Automation",
                  icon: "🏭",
                },
                { text: "Auto BOM Updates", icon: "🔄" },
                {
                  text: "Advanced Stock Ledger & Batch Controls",
                  icon: "📊",
                },
                { text: "Procurement Automation", icon: "🤖" },
                {
                  text: "Production Costing & Variance Reports",
                  icon: "📉",
                },
              ],
            },
            {
              heading: "CRM Advanced & Management",
              items: [
                {
                  text: "CRM Advanced (Customer 360, Deal AI, Follow-Up Automation) — saves ₹3,500/mo if purchased as add-on separately",
                  icon: "🎯",
                },
                {
                  text: "HRMS Advanced (Payroll, Performance Reviews, Employee Analytics)",
                  icon: "👨‍💼",
                },
              ],
            },
            {
              heading: "Growth, Marketing & Revenue Intelligence",
              items: [
                {
                  text: "Personalized Lead Nurturing Campaigns (AI Recommendations)",
                  icon: "🤖",
                },
                { text: "Ad Exchange", icon: "📢" },
                {
                  text: "Revenue Forecasting & ROAS Dashboards",
                  icon: "📈",
                },
                {
                  text: "Revenue Attribution & Marketing Intelligence Reports",
                  icon: "📊",
                },
              ],
            },
          ]}
        />
      </div>
    </>
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

// Icon mapping function - returns emoji as fallback
function getIconSVG(emoji) {
  return <span className='text-lg'>{emoji}</span>;
}
