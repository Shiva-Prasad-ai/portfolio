"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-16 px-10 pt-20">

      {/* LEFT SIDE */}
      <div className="max-w-xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold"
        >
          Hi, I'm <span className="text-blue-500">Shiva Prasad</span>
        </motion.h1>

        <p className="mt-6 text-gray-400">
          Full Stack Developer building modern web experiences.
        </p>

      </div>

      {/* RIGHT SIDE (Character) */}
      <motion.img
        src="/character.png"
        alt="character"
        width={300}
        height={300}
        border-radius={200}
        className="rounded-full object-cover border border-white/10"
      />

    </section>
  );
}