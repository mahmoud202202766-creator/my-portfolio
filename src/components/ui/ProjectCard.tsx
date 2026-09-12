import type { Project } from "../../data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-panel-light rounded-card overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-[0_12px_26px_rgba(0,0,0,0.35)]"
    >
      <div className="aspect-video overflow-hidden bg-space-panel">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-4">
        <h4 className="font-space text-sm font-bold text-ink-dark mb-1">
          {project.title}
        </h4>
        <p className="text-xs text-ink-dark-muted leading-relaxed mb-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] tracking-wide bg-ink-dark text-white px-2.5 py-1 rounded-pill"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
