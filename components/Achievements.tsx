import { ExternalLink } from "lucide-react";
import { achievements } from "@/lib/data";
import { Card, Section } from "./ui";

export function Achievements() {
  return (
    <Section id="achievements" title="Achievements and Certificates">
      <div className="grid gap-5 sm:grid-cols-2">
        {achievements.map((a) => (
          <Card key={a.title} className="overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={a.image} alt={`${a.title} certificate`} className="aspect-[4/3] w-full border-b border-gray-200 object-cover" />
            <div className="p-4">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-semibold text-gray-900">{a.title}</h3>
                {a.date && <span className="shrink-0 text-xs text-gray-500">{a.date}</span>}
              </div>
              <p className="text-sm text-gray-600">{a.issuer}</p>
              <p className="mt-2 text-sm text-gray-700">{a.description}</p>
              {a.link && (
                <a href={a.link} target="_blank" rel="noopener noreferrer"
                   className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline">
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
