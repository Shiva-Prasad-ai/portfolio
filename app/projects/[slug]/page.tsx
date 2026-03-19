import { projects } from "./../../lib/data";

export default function ProjectPage({ params }: { params: { slug: string } }) {
    const project = projects.find((p) => p.slug === params.slug);

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className="p-10 max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold">{project.title}</h1>

            <p className="mt-4 text-gray-400">
                {project.description}
            </p>

            <a
                href={project.link}
                target="_blank"
                className="inline-block mt-6 px-6 py-3 bg-blue-600 rounded-lg"
            >
                View Live Project
            </a>
        </div>
    );
}