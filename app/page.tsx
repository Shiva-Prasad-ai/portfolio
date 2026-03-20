import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

import Contact from "./components/Contact";
import SocialBar from "./components/SocialBar";
import About from "./components/About";
import Education from "./components/Education";

export default function Home() {
    return (
        <>
            <Navbar />
            <SocialBar />
            <Hero />
            <About />
            <Education />
            <Skills />

            <Contact />
        </>
    );
}