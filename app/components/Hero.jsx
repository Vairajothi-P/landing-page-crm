"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero({ fadeUp }) {
  return (
    <section className="pt-10 pb-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
          {/* exact hero content copied here */}
        </motion.div>

        {/* RIGHT */}
        <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }}>
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
            <Image src="/hero2.jpg" alt="Hero" fill className="object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
