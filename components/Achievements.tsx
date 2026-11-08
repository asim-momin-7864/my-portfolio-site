import { ExternalLink } from "lucide-react";
import { achievements } from "@/lib/data";
import { Card, Section } from "./ui";

export function Achievements() {
  return (
    <Section id="achievements" title="Achievements and Certificates">
      <div className="grid gap-4 md:grid-cols-2">
        {achievements.map((a) => (
          <Card key={a.title} className="flex gap-4 p-4">
            <a href={a.image} target="_blank" rel="noopener noreferrer" className="shrink-0" title="Open certificate">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={a.image} alt={`${a.title} certificate`}
                   className="h-20 w-28 rounded-md border border-gray-200 object-cover sm:h-24 sm:w-32" />
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
