import ProfilePhoto from "../components/ui/ProfilePhoto";

const SKILL_CATEGORIES = [
  {
    label: "Languages",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "C++"],
  },
  { label: "Styling", skills: ["Bootstrap", "Tailwind CSS", "Sass"] },
  {
    label: "Framework & Routing",
    skills: ["React", "Next.js", "React Router"],
  },
  {
    label: "State & Data",
    skills: ["Zustand", "React Query", "React Hook Form", "Zod"],
  },
  { label: "Backend & Auth", skills: ["Firebase"] },
];

const SOFT_SKILLS = ["Problem solving", "Fast learner", "Team collaboration"];

export default function Skills() {
  return (
    <section className="pb-16">
      <div className="ticker">SYSTEM STATUS</div>
      <h1 className="page-title">SKILLS</h1>

      <div className="flex flex-col md:flex-row gap-8 max-w-205 mt-6">
        {/* profile card */}
        <div className="w-full md:w-60 shrink-0 rounded-card p-6 bg-linear-to-br from-space-panel-2 to-space-panel h-fit">
          <ProfilePhoto className="w-17.5 h-17.5 mb-3.5" />

          <h4 className="font-space text-base mb-0.5">Mahmoud El-Sayed</h4>
          <div className="text-xs text-accent-cyan mb-5">
            Frontend Developer
          </div>

          <div className="text-[11px] tracking-wide text-ink-muted mb-2">
            SOFT SKILLS
          </div>
          <ul className="text-xs leading-[1.9]">
            {SOFT_SKILLS.map((skill) => (
              <li
                key={skill}
                className="before:content-['—_'] before:text-accent-pink"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* categorized tech skills */}
        <div className="flex-1 flex flex-col gap-6">
          {SKILL_CATEGORIES.map((category) => (
            <div key={category.label}>
              <div className="text-[11px] tracking-wide text-accent-cyan mb-2.5">
                {category.label.toUpperCase()}
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-space px-3.5 py-1.5 rounded-pill bg-white/8 border border-subtle text-ink-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
