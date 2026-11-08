import { skillGroups } from "@/lib/data";
import { Card, Section } from "./ui";
import { SkillIcon } from "./SkillIcon";

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((g) => (
          <Card key={g.title} className="p-5">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">{g.title}</h3>
            <ul className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2">
              {g.skills.map((s) => (
                <li key={s.name} className="flex items-center gap-2 text-sm text-gray-800">
                  <SkillIcon name={s.icon} /> {s.name}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}
