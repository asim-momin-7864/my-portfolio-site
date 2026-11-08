import { FileText, Github, Linkedin } from "lucide-react";
import { profile, links } from "@/lib/data";
import { ButtonLink, isReal } from "./ui";

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-4 pb-8 pt-12 sm:px-6 sm:pt-16">
      <div className="flex flex-col-reverse items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-accent">{profile.role}</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{profile.name}</h1>
          <p className="mt-3 text-lg text-gray-700">{profile.headline}</p>
          <div className="mt-4 space-y-3 text-gray-600">
            {profile.about.map((p) => <p key={p}>{p}</p>)}
          </div>
          <p className="mt-4 rounded-lg border border-teal-200 bg-teal-50 p-3 text-sm text-teal-900">{profile.looking}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href={links.resume} external><FileText className="h-4 w-4" /> View resume</ButtonLink>
            <ButtonLink href="#projects" variant="outline">See projects</ButtonLink>
            {isReal(links.github) && <ButtonLink href={links.github} variant="outline" external><Github className="h-4 w-4" /> GitHub</ButtonLink>}
            {isReal(links.linkedin) && <ButtonLink href={links.linkedin} variant="outline" external><Linkedin className="h-4 w-4" /> LinkedIn</ButtonLink>}
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={profile.photo} alt={`Photo of ${profile.name}`}
             className="h-36 w-36 rounded-full border border-gray-200 object-cover sm:h-48 sm:w-48" />
      </div>
    </section>
  );
}
