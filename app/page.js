"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const FEATURES = [
  { title: "Unified Customer Profiles", desc: "See every customer touchpoint in one place — conversations, purchases, and lifecycle stage." },
  { title: "Automated Campaigns", desc: "Create behavior-driven email & SMS flows that run on autopilot." },
  { title: "Lead Scoring & Routing", desc: "Prioritize leads automatically and route them to the right rep." },
  { title: "Reporting & Insights", desc: "Prebuilt dashboards + custom reports to measure ROI and growth." },
  { title: "Integrations", desc: "Connect your stack — email, payments, analytics, and more." },
  { title: "GDPR & Security", desc: "Enterprise-grade controls and compliance tools out of the box." },
];

const TESTIMONIALS = [
  { name: "Amit R.", role: "Head of Marketing", text: "Smart marketing with CRM scaled our lead flow 3x in 90 days — the automation workflows are a dream." },
  { name: "Priya S.", role: "Growth Lead", text: "Beautiful UI and powerful reporting. Our campaigns convert better and we spend less time on manual work." },
];

// particle init: required for react-tsparticles to load engine features
async function particlesInit(engine) {
  await loadFull(engine);
}

export default function Page() {
  // framer-motion variants
  const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#03040a] text-slate-100 antialiased">
      {/* PARTICLE BACKGROUND */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          fpsLimit: 60,
          background: { color: { value: "transparent" } },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse", parallax: { enable: false } },
              onClick: { enable: false },
            },
            modes: { repulse: { distance: 120 } },
          },
          particles: {
            number: { value: 50, density: { enable: true, area: 800 } },
            color: { value: ["#0ea5e9", "#60a5fa", "#7c3aed"] },
            shape: { type: "circle" },
            opacity: { value: 0.12, random: { enable: true, minimumValue: 0.05 }, anim: { enable: false } },
            size: { value: { min: 1.5, max: 4 }, random: true },
            links: { enable: true, distance: 160, color: "#0ea5e9", opacity: 0.06, width: 1 },
            move: { enable: true, speed: 0.9, direction: "none", outModes: { default: "bounce" } },
          },
          detectRetina: true,
        }}
        style={{
          position: "absolute",
          zIndex: 0,
          inset: 0,
          width: "100%",
          height: "100%",
        }}
      />

      {/* BLURRING NEON BLOBS */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* top-left blob */}
        <div className="absolute left-[-12%] top-[-8%] w-[520px] h-[520px] rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.14),transparent 35%)] blur-3xl opacity-80 transform rotate-12"></div>
        {/* center blob */}
        <div className="absolute left-1/2 top-10 -translate-x-1/2 w-190 h-190 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.12),transparent 36%)] blur-3xl opacity-60"></div>
        {/* bottom-right blob */}
        <div className="absolute right-[-8%] bottom-[-6%] w-130 h-130 rounded-full bg-[radial-gradient(circle,rgba(96,165,250,0.12),transparent 34%)] blur-3xl opacity-70"></div>
      </div>

      {/* NAVBAR */}
      <header className="sticky top-4 z-30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between py-4 backdrop-blur-sm bg-black/20 border border-white/5 rounded-full px-4">
            <Link href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-linear-to-br from-blue-400 via-indigo-500 to-purple-600 flex items-center justify-center text-black font-extrabold shadow-sm">
                SM
              </div>
              <span className="font-semibold tracking-wide">Smart marketing with CRM</span>
            </Link>

            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-200/90">
              <a href="#features" className="hover:text-white transition">Features</a>
              <a href="#how" className="hover:text-white transition">How it works</a>
              <a href="#pricing" className="hover:text-white transition">Pricing</a>
              <a href="#contact" className="hover:text-white transition">About</a>
              <Link href="#demo" className="ml-2 inline-block px-4 py-2 rounded-full bg-linear-to-r from-blue-400 to-indigo-500 text-black text-sm font-semibold shadow">Start free trial</Link>
            </nav>

            <div className="md:hidden">
              <Link href="#demo" className="inline-block px-4 py-2 rounded-full bg-indigo-600 text-white text-sm">Demo</Link>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        {/* HERO */}
        <section className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/6 px-3 py-1 text-xs font-medium text-sky-300/90 shadow-sm">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2"/></svg>
                CRM for smart marketers
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-white drop-shadow-[0_8px_48px_rgba(14,165,233,0.08)]">
                Grow faster with automation & data —
                <span className="bg-clip-text text-transparent bg-linear-to-r from-sky-300 via-indigo-300 to-purple-300 ml-3">Smart marketing with CRM</span>
              </h1>

              <p className="mt-6 text-slate-300 max-w-xl">Unify customer data, automate personalized campaigns with AI-driven recommendations, and measure impact with clear dashboards — built for marketing teams that move fast.</p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#demo" className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-sky-400 to-indigo-500 text-black px-5 py-3 font-semibold shadow-lg transform-gpu hover:scale-[1.03] transition">Request demo</a>
                <a href="#features" className="inline-flex items-center gap-3 rounded-full border border-white/8 px-5 py-3 text-slate-200 hover:bg-white/3 transition">Explore features</a>
              </div>

              <div className="mt-8 flex items-center gap-8">
                <div>
                  <p className="text-3xl font-extrabold text-white">3x</p>
                  <p className="text-sm text-slate-400">average lead growth</p>
                </div>
                <div>
                  <p className="text-3xl font-extrabold text-white">40%</p>
                  <p className="text-sm text-slate-400">reduction in manual work</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative">
              <div className="w-full aspect-4/3 rounded-2xl bg-linear-to-br from-white/3 via-white/6 to-transparent p-6 flex items-center justify-center shadow-2xl backdrop-blur-sm border border-white/6">
                {/* hero image - replace /hero.jpg with your asset in public/ */}
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                  <Image src="/hero.jpg" alt="Hero mockup" fill className="object-cover" />
                  {/* neon overlay */}
                  <div className="absolute inset-0 mix-blend-screen pointer-events-none">
                    <div className="absolute -left-16 -top-16 w-64 h-64 rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,rgba(14,165,233,0.12),rgba(124,58,237,0.08),transparent)] blur-2xl opacity-90"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="mt-8 pb-16">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
              <h2 className="text-3xl font-bold text-white">Everything marketing teams need</h2>
              <p className="mt-3 text-slate-300 max-w-2xl mx-auto">From lead capture to nurture workflows and analytics — built to scale with your business.</p>
            </motion.div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {FEATURES.map((f, idx) => (
                <motion.div key={f.title} whileHover={{ y: -8 }} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0, transition: { delay: idx * 0.06 } }} className="p-6 rounded-xl border border-white/6 shadow-sm bg-gradient-to-b from-white/2 to-transparent backdrop-blur-md">
                  <div className="w-12 h-12 rounded-md bg-white/6 flex items-center justify-center font-semibold text-sky-300">✓</div>
                  <h3 className="mt-4 font-semibold text-lg text-white">{f.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className="mt-16 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent)] py-16">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h3 className="text-2xl font-bold text-white">How it works</h3>
              <p className="mt-3 text-slate-300">Launch campaigns fast with a three-step workflow that connects data, automation, and measurement.</p>
              <ol className="mt-6 space-y-4 text-sm text-slate-300">
                <li><strong>1. Capture:</strong> Collect leads from forms, ads, and integrations.</li>
                <li><strong>2. Automate:</strong> Segment and trigger personalized journeys.</li>
                <li><strong>3. Measure:</strong> Track performance with dashboards and ROI reports.</li>
              </ol>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="md:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-white/4 border border-white/6">
                  <h4 className="font-semibold text-white">Drag & drop journey builder</h4>
                  <p className="mt-2 text-sm text-slate-300">Build multi-step flows visually — no code required.</p>
                </div>
                <div className="p-6 rounded-xl bg-white/4 border border-white/6">
                  <h4 className="font-semibold text-white">Personalization at scale</h4>
                  <p className="mt-2 text-sm text-slate-300">Dynamic content and behavioral triggers for relevant messaging.</p>
                </div>
                <div className="p-6 rounded-xl bg-white/4 border border-white/6">
                  <h4 className="font-semibold text-white">Realtime analytics</h4>
                  <p className="mt-2 text-sm text-slate-300">Monitor conversions and pipeline impact in realtime dashboards.</p>
                </div>
                <div className="p-6 rounded-xl bg-white/4 border border-white/6">
                  <h4 className="font-semibold text-white">Permissions & workflows</h4>
                  <p className="mt-2 text-sm text-slate-300">Role-based access and approvals for teams of any size.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="mt-16 pb-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <motion.h3 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-2xl font-bold text-white">What customers say</motion.h3>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {TESTIMONIALS.map((t, idx) => (
                <motion.blockquote key={t.name} whileHover={{ scale: 1.02 }} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0, transition: { delay: idx * 0.05 } }} className="p-6 rounded-xl bg-white/4 border border-white/6 text-left">
                  <p className="text-slate-100">“{t.text}”</p>
                  <footer className="mt-4 text-sm text-slate-300">— {t.name}, <span className="text-slate-300">{t.role}</span></footer>
                </motion.blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="mt-16 py-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h3 className="text-2xl font-bold text-white">Simple pricing</h3>
              <p className="max-w-2xl mx-auto mt-2 text-slate-300">All plans include the core CRM features. Add-ons for onboarding and premium support.</p>
            </motion.div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-white/4 border border-white/6">
                <h4 className="font-semibold text-white">Starter</h4>
                <p className="mt-2 text-3xl font-bold text-white">$29<span className="text-sm font-normal text-slate-300">/mo</span></p>
                <ul className="mt-4 text-sm text-slate-300 space-y-2">
                  <li>Up to 3 users</li>
                  <li>Core CRM features</li>
                  <li>Email support</li>
                </ul>
                <a className="mt-6 inline-block px-4 py-2 rounded-full bg-gradient-to-r from-sky-400 to-indigo-500 text-black font-semibold">Get started</a>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-r from-white/6 to-white/4 border-2 border-indigo-400">
                <h4 className="font-semibold text-white">Pro</h4>
                <p className="mt-2 text-3xl font-bold text-white">$99<span className="text-sm font-normal text-slate-300">/mo</span></p>
                <ul className="mt-4 text-sm text-slate-300 space-y-2">
                  <li>Up to 15 users</li>
                  <li>Automation & scoring</li>
                  <li>Priority support</li>
                </ul>
                <a className="mt-6 inline-block px-4 py-2 rounded-full bg-gradient-to-r from-sky-400 to-indigo-500 text-black font-semibold">Start free trial</a>
              </div>

              <div className="p-6 rounded-xl bg-white/4 border border-white/6">
                <h4 className="font-semibold text-white">Enterprise</h4>
                <p className="mt-2 text-3xl font-bold text-white">Custom</p>
                <ul className="mt-4 text-sm text-slate-300 space-y-2">
                  <li>Unlimited users</li>
                  <li>SSO, SLA, Dedicated support</li>
                  <li>Custom integrations</li>
                </ul>
                <a className="mt-6 inline-block px-4 py-2 rounded-full bg-linear-to-r from-sky-400 to-indigo-500 text-black font-semibold">Contact sales</a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="demo" className="mt-20 py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.h3 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-3xl font-bold text-white">Ready to grow with Smart marketing with CRM?</motion.h3>
            <p className="mt-3 text-slate-300">Request a demo and see how automation + insights can transform your marketing.</p>
            <div className="mt-6">
              <a href="#contact" className="inline-block px-6 py-3 rounded-full bg-linear-to-r from-sky-400 to-indigo-500 text-black font-semibold">Request demo</a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer id="contact" className="mt-16 border-t border-white/6">
          <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-linear-to-br from-blue-400 via-indigo-500 to-purple-600 flex items-center justify-center text-black font-bold">SM</div>
                <div>
                  <p className="font-semibold text-white">Smart marketing with CRM</p>
                  <p className="text-sm text-slate-300">Marketing-first CRM for growth teams</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 flex justify-between">
              <div>
                <h5 className="font-semibold text-white">Product</h5>
                <ul className="mt-3 text-sm text-slate-300 space-y-2">
                  <li>Features</li>
                  <li>Integrations</li>
                  <li>Pricing</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-white">Company</h5>
                <ul className="mt-3 text-sm text-slate-300 space-y-2">
                  <li>About</li>
                  <li>Careers</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-white">Get in touch</h5>
                <p className="mt-3 text-sm text-slate-300">hello@smartmarketingcrm.example</p>
              </div>
            </div>

            <div className="mt-8 md:mt-0 md:col-span-3 text-center text-sm text-slate-400">© {new Date().getFullYear()} Smart marketing with CRM. All rights reserved.</div>
          </div>
        </footer>
      </main>
    </div>
  );
}
