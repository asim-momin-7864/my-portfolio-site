import { ExternalLink, Github, Video } from "lucide-react";
import { projects } from "@/lib/data";
import { Badge, ButtonLink, Card, Section } from "./ui";

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((p) => (
          <Card key={p.name} className="flex flex-col overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.image} alt={`${p.name} screenshot`} className="aspect-video w-full border-b border-gray-200 object-cover" />
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
              <p className="mt-1 text-sm text-gray-600">{p.tagline}</p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-gray-700">
                {p.highlights.map((h) => <li key={h}>{h}</li>)}
              </ul>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.map((t) => <Badge key={t}>{t}</Badge>)}
              </div>
              <div className="mt-auto flex flex-wrap gap-2 pt-5">
                {p.live && <ButtonLink href={p.live} external><ExternalLink className="h-4 w-4" /> Live demo</ButtonLink>}
                {p.github && <ButtonLink href={p.github} variant="outline" external><Github className="h-4 w-4" /> GitHub</ButtonLink>}
                {p.video && <ButtonLink href={p.video} variant="outline" external><Video className="h-4 w-4" /> Demo video</ButtonLink>}
              </div>
            </div>
          </Card>
        ))}
      </div>
      <p className="mt-4 text-sm text-gray-500">Screenshots, architecture and setup steps are in each project README on GitHub.</p>
    </Section>
  );
}
