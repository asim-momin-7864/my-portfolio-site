import { ExternalLink } from "lucide-react";
import { achievements } from "@/lib/data";
import { Card, Section } from "./ui";

export function Achievements() {
  return (
    <Section id="achievements" title="Achievements and Certificates">
      <div className="grid gap-4 md:grid-cols-2">
        {achievements.map((a) => (
          <Card key={a.title} className="group relative flex gap-4 p-4 transition-all duration-200 hover:border-gray-300 hover:shadow-sm">
            <a
              href={a.image}
              target="_blank"
              rel="noopener noreferrer"
              className="group/img relative shrink-0 self-start overflow-hidden rounded-md border border-gray-200 transition-all duration-300 group-hover:border-accent/60 group-hover:ring-2 group-hover:ring-accent/15 group-hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              title="Click to view full certificate in new browser tab"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={a.image}
                alt={`${a.title} certificate`}
                className="h-20 w-28 object-cover transition-transform duration-300 group-hover:scale-105 group-hover/img:scale-110 sm:h-24 sm:w-32"
              />
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-200 group-hover:bg-black/25 group-hover/img:bg-black/40">
                <span className="flex items-center gap-1 rounded bg-black/75 px-2 py-0.5 text-[11px] font-medium text-white shadow-xs backdrop-blur-xs opacity-0 transition-all duration-200 group-hover:opacity-90 group-hover/img:opacity-100 group-hover/img:scale-105 group-hover/img:bg-accent">
                  <ExternalLink className="h-3 w-3" />
                  <span>View</span>
                </span>
              </div>
            </a>
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-sm font-semibold leading-snug text-gray-900 sm:text-base">{a.title}</h3>
                {a.date && <span className="shrink-0 text-xs text-gray-500">{a.date}</span>}
              </div>
              <p className="text-xs text-gray-600 sm:text-sm">{a.issuer}</p>
              <p className="mt-1.5 text-sm text-gray-700">{a.description}</p>
              {a.link && (
                <a href={a.link} target="_blank" rel="noopener noreferrer"
                   className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline">
                  View credential <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
