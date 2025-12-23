"use client";

import React from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Featuressample from "./components/FeaturesSample";

// Particle init
async function particlesInit(engine) {
  await loadFull(engine);
}

export default function Page() {
  const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="relative min-h-screen text-slate-100 dark:text-slate-100 light:text-slate-900 antialiased">

      {/* NAVBAR */}
      <Navbar />

      <main className="relative z-10">
        <Hero fadeUp={fadeUp} />
        <Featuressample fadeUp={fadeUp} />
        <HowItWorks fadeUp={fadeUp} />
        <Testimonials fadeUp={fadeUp} />
        {/* <Pricing fadeUp={fadeUp} /> */}
        <CTA fadeUp={fadeUp} />
        <Footer />
      </main>
    </div>
  );
}
