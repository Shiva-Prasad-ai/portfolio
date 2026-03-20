"use client";

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
            <div className="flex justify-center gap-4 py-4">

                <a href="#home" className="px-5 py-2 rounded-full border border-white/20 text-sm hover:border-blue-500 hover:text-blue-400 transition">Home</a>
                <a href="#about" className="px-5 py-2 rounded-full border border-white/20 text-sm hover:border-blue-500 hover:text-blue-400 transition">About</a>
                <a href="#education" className="px-5 py-2 rounded-full border border-white/20 text-sm hover:border-blue-500 hover:text-blue-400 transition">Education</a>
                <a href="#skills" className="px-5 py-2 rounded-full border border-white/20 text-sm hover:border-blue-500 hover:text-blue-400 transition">Skills</a>
                <a href="#projects" className="px-5 py-2 rounded-full border border-white/20 text-sm hover:border-blue-500 hover:text-blue-400 transition">Projects</a>


            </div>
        </nav>
    );
}