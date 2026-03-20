"use client";

import { motion } from "framer-motion";
import { FaPython, FaJs, FaHtml5, FaCss3Alt } from "react-icons/fa";

const skills = [
    {
        name: "Python",
        icon: <FaPython />,
        level: 69,
        category: "Programming"
    },
    {
        name: "JavaScript",
        icon: <FaJs />,
        level: 40,
        category: "Programming"
    },
    {
        name: "HTML",
        icon: <FaHtml5 />,
        level: 90,
        category: "Development"
    },
    {
        name: "CSS",
        icon: <FaCss3Alt />,
        level: 68,
        category: "Development"
    }
];

export default function Skills() {
    return (
        <section id="skills" className="p-20 max-w-4xl mx-auto">
            <h2 className="text-3xl mb-10 text-center">Skills</h2>

            <div className="space-y-8">

                {skills.map((skill, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.2 }}
                    >
                        {/* Top Row */}
                        <div className="flex justify-between items-center mb-2">

                            <div className="flex items-center gap-3 text-xl">
                                <span className="text-2xl">{skill.icon}</span>
                                <span>{skill.name}</span>
                            </div>

                            <span className="text-sm text-gray-400">
                                {skill.category}
                            </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full h-2 bg-white/10 rounded">
                            <motion.div
                                className="h-2 bg-blue-300 rounded"
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                transition={{ duration: 1 }}
                            />
                        </div>

                    </motion.div>
                ))}

            </div>
        </section>
    );
}