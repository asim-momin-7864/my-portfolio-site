import { ReactNode } from "react";

export function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
      <h2 className="mb-8 text-2xl font-semibold tracking-tight text-gray-900">{title}</h2>
      {children}
    </section>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-xl border border-gray-200 bg-white shadow-sm ${className}`}>{children}</div>;
}

export function Badge({ children }: { children: ReactNode }) {
  return <span className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700">{children}</span>;
}

export function ButtonLink({ href, children, variant = "primary", download = false, external = false }:
  { href: string; children: ReactNode; variant?: "primary" | "outline"; download?: boolean; external?: boolean }) {
  const base = "inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors";
  const style = variant === "primary"
    ? "bg-accent text-white hover:bg-accent-dark"
    : "border border-gray-300 bg-white text-gray-800 hover:bg-gray-50";
  return (
    <a href={href} className={`${base} ${style}`} download={download || undefined}
       {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {children}
    </a>
  );
}
