import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="mb-12 text-4xl font-bold">
        Skills
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        <SkillCard
          title="Frontend"
          items={skills.frontend}
        />

        <SkillCard
          title="Backend"
          items={skills.backend}
        />

        <SkillCard
          title="Database"
          items={skills.database}
        />

        <SkillCard
          title="Tools"
          items={skills.tools}
        />
      </div>
    </section>
  );
}

type SkillCardProps = {
  title: string;
  items: string[];
};

function SkillCard({
  title,
  items,
}: SkillCardProps) {
  return (
    <div className="rounded-2xl border border-slate-800 p-6">
      <h3 className="mb-4 text-2xl font-semibold">
        {title}
      </h3>

      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full bg-slate-800 px-4 py-2 text-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}