"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="p-20 max-w-4xl mx-auto text-center">
            <motion.h2
                className="text-5xl mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
            >
                About Me
            </motion.h2>

            <motion.p
                className="text-2xl mb-1 text-gray-400 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
            >
                I am a developer passionate about building efficient, scalable, and user-friendly applications.
                I enjoy working with modern technologies like Next.js and Firebase, and I continuously strive
                to improve my skills in both frontend and backend development.
            </motion.p>
        </section>
    );
}