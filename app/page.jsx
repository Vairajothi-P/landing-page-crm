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
    <div className='relative min-h-screen bg-[#03040a] dark:bg-[#03040a] light:bg-white text-slate-100 dark:text-slate-100 light:text-slate-900 antialiased'>
      {/* PARTICLE BACKGROUND */}
      <Particles
        id='tsparticles'
        init={particlesInit}
        options={{
          fullScreen: { enable: true },
          fpsLimit: 60,
          background: {
            color: { value: "#0f172a" }, // deep navy backdrop
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "bubble" },
              onClick: { enable: true, mode: "repulse" },
            },
            modes: {
              bubble: { distance: 200, size: 10, duration: 2, opacity: 0.8 },
              repulse: { distance: 150, duration: 0.4 },
            },
          },
          particles: {
            number: { value: 90, density: { enable: true, area: 1000 } },
            color: { value: ["#3b82f6", "#ec4899"] }, // blue + pink neon
            shape: { type: "circle" },
            opacity: {
              value: 0.3,
              random: { enable: true, minimumValue: 0.1 },
              animation: { enable: true, speed: 1, minimumValue: 0.1, sync: false },
            },
            size: {
              value: { min: 2, max: 6 },
              random: true,
              animation: { enable: true, speed: 2, minimumValue: 1, sync: false },
            },
            links: {
              enable: true,
              distance: 160,
              color: "#3b82f6",
              opacity: 0.25,
              width: 1.2,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              straight: false,
              outModes: { default: "out" },
              attract: { enable: true, rotateX: 600, rotateY: 1200 },
            },
            glow: {
              enable: true,
              color: "#ec4899",
              blur: 10,
              strength: 2,
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
