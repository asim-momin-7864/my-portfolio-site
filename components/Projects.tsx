import { ExternalLink, Github, Video } from "lucide-react";
import { ReactNode } from "react";
import { projects } from "@/lib/data";
import { Badge, Card, Section } from "./ui";

function ProjectLink({ href, icon, label }: { href: string; icon: ReactNode; label: string }) {
  const base = "inline-flex items-center gap-1.5 text-sm font-medium";
  if (!href) {
    return <span className={`${base} cursor-default text-gray-400`} title="Link coming soon">{icon} {label} <span className="text-xs font-normal">(soon)</span></span>;
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} text-accent hover:underline`}>
      {icon} {label}
    </a>
  );
}

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="flex flex-col gap-6">
        {projects.map((p) => (
          <Card key={p.name} className="overflow-hidden md:grid md:grid-cols-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.image} alt={`${p.name} screenshot`}
                 className="aspect-video w-full border-b border-gray-200 object-cover md:col-span-2 md:h-full md:border-b-0 md:border-r" />
            <div className="flex flex-col p-5 sm:p-6 md:col-span-3">
              <h3 className="text-xl font-semibold text-gray-900">{p.name}</h3>
              <p className="mt-1 text-sm text-gray-600">{p.tagline}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-700">
                {p.highlights.map((h) => <li key={h}>{h}</li>)}
              </ul>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.map((t) => <Badge key={t}>{t}</Badge>)}
              </div>
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 border-t border-gray-100 pt-4">
                <ProjectLink href={p.live} icon={<ExternalLink className="h-4 w-4" />} label="Live demo" />
                <ProjectLink href={p.github} icon={<Github className="h-4 w-4" />} label="GitHub" />
                <ProjectLink href={p.video} icon={<Video className="h-4 w-4" />} label="Demo video" />
              </div>
            </div>
          </Card>
        ))}
      </div>
      <p className="mt-4 text-sm text-gray-500">Screenshots, architecture and setup steps are in each project README on GitHub.</p>
    </Section>
  );
}
