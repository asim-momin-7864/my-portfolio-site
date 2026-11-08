import { moments } from "@/lib/data";
import { Section } from "./ui";

export function Moments() {
  if (moments.length === 0) return null;
  return (
    <Section id="moments" title="Moments">
      <div className="grid gap-4 sm:grid-cols-3">
        {moments.map((m) => (
          <figure key={m.src} className="overflow-hidden rounded-xl border border-gray-200 bg-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={m.src} alt={m.caption} className="aspect-[4/3] w-full object-cover" />
            <figcaption className="p-3 text-sm text-gray-600">{m.caption}</figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
