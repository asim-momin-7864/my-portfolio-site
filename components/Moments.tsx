import { ExternalLink } from "lucide-react";
import { moments } from "@/lib/data";
import { Section } from "./ui";

export function Moments() {
  if (moments.length === 0) return null;

  return (
    <Section id="moments" title="Moments">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {moments.map((item, idx) => (
          <a
            key={item.src}
            href={item.src}
            target="_blank"
            rel="noopener noreferrer"
            title="Click to view full image in browser"
            className={`group relative overflow-hidden rounded-2xl border border-gray-200/90 bg-gray-100 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
              item.span ?? ""
            } ${idx < 2 ? "h-64 sm:h-72 md:h-80" : "h-60 sm:h-64 md:h-72"}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.src}
              alt={item.alt}
              className={`h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 ${
                item.objectPosition ?? "object-center"
              }`}
            />

            {/* Subtle gradient vignette at bottom */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-85 transition-opacity duration-300 group-hover:opacity-95" />

            {/* Caption & Tag */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 sm:p-5 text-white">
              {item.tag && (
                <span className="mb-1.5 inline-block rounded-full bg-white/20 px-2.5 py-0.5 text-[11px] font-medium tracking-wide backdrop-blur-md">
                  {item.tag}
                </span>
              )}
              {item.caption && (
                <p className="text-sm font-semibold leading-snug sm:text-base text-white/95">
                  {item.caption}
                </p>
              )}
            </div>

            {/* Hover Expand Badge in top-right corner */}
            <div className="pointer-events-none absolute right-3 top-3 flex items-center gap-1 rounded-full bg-black/50 px-2.5 py-1 text-xs font-medium text-white shadow-xs backdrop-blur-md opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:bg-accent">
              <ExternalLink className="h-3 w-3" />
              <span>View</span>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
