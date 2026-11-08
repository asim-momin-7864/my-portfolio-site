import { moments } from "@/lib/data";
import { Card, Section } from "./ui";

export function Moments() {
  if (moments.length === 0) return null;
  return (
    <Section id="moments" title="Moments">
      <div className="flex flex-col gap-5">
        {moments.map((m) => (
          <Card key={m.title} className="p-4 sm:p-5">
            <h3 className="font-semibold text-gray-900">{m.title}</h3>
            <p className="mt-1 text-sm text-gray-600">{m.text}</p>
            <div className={`mt-4 grid gap-3 ${m.photos.length > 1 ? "sm:grid-cols-3" : "sm:max-w-sm"}`}>
              {m.photos.map((ph) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={ph.src} src={ph.src} alt={ph.alt}
                     className="aspect-[4/3] w-full rounded-md border border-gray-200 object-cover" />
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
