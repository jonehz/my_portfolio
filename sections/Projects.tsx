import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="mb-12 text-4xl font-bold">
        Projects
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}

type ProjectCardProps = {
  project: {
    title: string;
    description: string;
    technologies: string[];
    github: string;
    demo: string;
  };
};

function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <div className="rounded-2xl border border-slate-800 p-6">
      <h3 className="mb-4 text-2xl font-semibold">
        {project.title}
      </h3>

      <p className="mb-6 text-gray-400">
        {project.description}
      </p>

      <div className="mb-6 flex flex-wrap gap-3">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-slate-800 px-4 py-2 text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <a
          href={project.demo}
          target="_blank"
          className="rounded-lg bg-sky-500 px-5 py-2"
        >
          Live Demo
        </a>

        <a
          href={project.github}
          target="_blank"
          className="rounded-lg border border-gray-600 px-5 py-2"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}