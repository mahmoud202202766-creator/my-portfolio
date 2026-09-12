import { PROJECTS } from "../data/projects";
import ProjectCard from "../components/ui/ProjectCard";

export default function Projects() {
  return (
    <section className="pb-16">
      <div className="ticker">FILES FOUND</div>
      <h1 className="page-title">MY PROJECTS</h1>
      <p className="text-ink-muted text-sm mb-8 max-w-130">
        Click any card to open the live project or repo on GitHub.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-215">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
