"use client";

import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturesSample from "./components/FeaturesSample";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

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
    <div className='relative min-h-screen bg-[#03040a] text-slate-100 antialiased'>
      {/* PARTICLE BACKGROUND */}
      <Particles
        id='tsparticles'
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          fpsLimit: 60,
          background: { color: { value: "transparent" } },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: false },
            },
            modes: { repulse: { distance: 120 } },
          },
          particles: {
            number: { value: 50, density: { enable: true, area: 800 } },
            color: { value: ["#0ea5e9", "#60a5fa", "#7c3aed"] },
            shape: { type: "circle" },
            opacity: {
              value: 0.12,
              random: { enable: true, minimumValue: 0.05 },
            },
            size: { value: { min: 1.5, max: 4 }, random: true },
            links: {
              enable: true,
              distance: 160,
              color: "#0ea5e9",
              opacity: 0.06,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.9,
              direction: "none",
              outModes: { default: "bounce" },
            },
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

      {/* NAVBAR */}
      <Navbar />

      <main className='relative z-10'>
        <Hero fadeUp={fadeUp} />
        <FeaturesSample fadeUp={fadeUp} />
        <HowItWorks fadeUp={fadeUp} />
        <Testimonials fadeUp={fadeUp} />
        {/* <Pricing fadeUp={fadeUp} /> */}
        <CTA fadeUp={fadeUp} />
        <Footer />
      </main>
    </div>
  );
}
