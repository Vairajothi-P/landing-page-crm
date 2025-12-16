"use client";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

async function particlesInit(engine) {
  await loadFull(engine);
}

export default function ParticlesBackground() {
  return (
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
          opacity: { value: 0.12, random: { enable: true, minimumValue: 0.05 } },
          size: { value: { min: 1.5, max: 4 }, random: true },
          links: { enable: true, distance: 160, color: "#0ea5e9", opacity: 0.06, width: 1 },
          move: { enable: true, speed: 0.9, outModes: { default: "bounce" } },
        },
        detectRetina: true,
      }}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
      }}
    />
  );
}
