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
                Software Engineer with a passion for building clean, scalable applications. I specialize in bridging the gap between robust backend logic (Java)
                and intuitive, engaging user interfaces (JavaScript/CSS).With a focus on modern design trends like Neumorphism and Glassmorphism,
                I thrive on turning complex problems into elegant, user-centric digital solutions."
            </motion.p>
        </section>
    );
}