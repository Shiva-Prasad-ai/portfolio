"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (

    <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-16 px-10 pt-20">

      {/* LEFT SIDE */}
      <div className="max-w-xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold"
        >
          Hi, I'm <span className="text-blue-500">HarshithDeeo P</span>
        </motion.h1>

        <p className="text-2xl mt-6 text-gray-400">
          Soft Engineer building modern web applications.
        </p>

      </div>
      <div className="relative w-64 h-64 flex items-center justify-center">

        {/* Outer Ring */}
        <div className="absolute w-full h-full rounded-full border-2 border-blue-500/40 shadow-[0_0_30px_rgba(59,130,246,0.5)]"></div>

        {/* Inner Image */}
        <img
          src="/character.png"
          alt="profile"
          className="w-52 h-52 rounded-full object-cover border border-white/10"
        />

      </div>



    </section>
  );
}