import TiltCard from "./TiltCard";
import { projects } from "../lib/data";
import { Project } from "../lib/types";

export default function Projects() {
    return (
        <section id="projects" className="p-10">
            <h2 className="text-3xl mb-8 text-center">Projects</h2>

            <div className="grid md:grid-cols-2 gap-6 [perspective:1000px]">

                {projects.map((p: Project, i: number) => (

                    <TiltCard key={i}>

                        <a
                            href={`/projects/${p.slug}`}
                            className="block p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition"
                        >
                            <h3 className="text-xl font-semibold">{p.title}</h3>
                            <p className="text-gray-400 mt-2">{p.description}</p>
                        </a>

                    </TiltCard>

                ))}

            </div>
        </section>
    );
}