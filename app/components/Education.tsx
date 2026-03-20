"use client";

import { motion } from "framer-motion";

export default function Education() {
    return (
        <section id="education" className="min-h-screen flex items-center justify-center px-10">
            <motion.h2
                className="text-5xl mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
            >
                Education
            </motion.h2>
            <div className="relative max-w-2xl w-full">

                {/* Vertical Line */}
                <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute left-5 bottom-0 w-[4px] bg-gradient-to-t from-blue-500 to-transparent origin-bottom"
                />

                {/* Content */}
                <div className="space-y-16 ml-10">

                    {/* Current */}
                    <div className="relative">
                        <div className="absolute -left-7 top-2 w-5 h-5 bg-blue-500 rounded-full shadow-[0_0_20px_5px_rgba(59,130,246,0.8)]" />

                        <h3 className="text-xl font-semibold">
                            BCA (Current)
                        </h3>
                        <p className="text-0.5xl text-gray-400 mt-2">
                            Currently pursuing Bachelor of Computer Applications. Built projects like Unit Converter, Chatbot, and Portfolio. Passionate about Ethical hacking and problem solving.
                        </p>
                    </div>

                    {/* 12th */}
                    <div className="relative">
                        <div className="absolute -left-7 top-6 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center" />
                        <span className="text-[10px] text-black font-bold">✓</span>
                        <h3 className="text-xl font-semibold">
                            12th - Computer Science
                        </h3>
                        <p className="text-gray-400 mt-2">
                            Secured 2nd place among 120 students with strong foundation in programming and logical thinking.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}