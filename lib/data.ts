// ALL content lives here. Edit this file, not the components.

export const profile = {
  name: "Asim Momin",
  role: "Full-Stack Developer | Applied AI",
  photo: "/images/profile.png",
  headline: "I build full-stack web apps with practical AI features.",
  about: [
    "I am a fresher. I finished B.Tech in Information Technology in May 2026.",
    "I build with Next.js, TypeScript, React and PostgreSQL (Supabase). I add AI where it helps: semantic search and RAG, agents and tools with LangGraph, n8n workflows, and local LLMs with Ollama.",
    "I am always exploring and learning full-stack development, applied AI and agents, and I want to grow by working with a real team.",
  ],
  looking:
    "Looking for: Full-Stack Developer or Applied AI Developer roles at startups. Available immediately. Ready to move anywhere in India, or work remote.",
};

export const links = {
  email: "asimmomin.dev@gmail.com",
  github: "https://github.com/asim-momin-7864",
  linkedin: "https://www.linkedin.com/in/asim-momin7864",
  twitter: "https://x.com/asimhmomin7864",
  resume: "/resume/Asim_Momin_Resume.pdf",
};

export const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "shadcn/ui", icon: "shadcn" },
      { name: "HTML5", icon: "html" },
      { name: "CSS3", icon: "css" },
    ],
  },
  {
    title: "Backend and Database",
    skills: [
      { name: "Node.js", icon: "node" },
      { name: "Express", icon: "express" },
      { name: "PostgreSQL", icon: "postgres" },
      { name: "Supabase", icon: "supabase" },
      { name: "Zod", icon: "zod" },
    ],
  },
  {
    title: "AI and Automation",
    skills: [
      { name: "Vercel AI SDK", icon: "vercel" },
      { name: "RAG + pgvector", icon: "postgres" },
      { name: "LangGraph (agents, tools)", icon: "langgraph" },
      { name: "n8n", icon: "n8n" },
      { name: "OpenAI / Claude / Gemini APIs", icon: "openai" },
      { name: "Ollama (local LLMs)", icon: "ollama" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Vitest", icon: "vitest" },
      { name: "Postman", icon: "postman" },
      { name: "Docker (basics)", icon: "docker" },
      { name: "Vercel", icon: "vercel" },
    ],
  },
];

export interface Project {
  name: string;
  tagline: string;
  image: string;
  highlights: string[];
  tech: string[];
  live: string;
  github: string;
  video?: string;
}

// Links: leave "" if not ready. The link stays visible but greyed out ("soon").
export const projects: Project[] = [
  {
    name: "Feature Flow",
    tagline: "Product feedback board with AI duplicate detection",
    image: "/images/projects/feature-flow.png",
    highlights: [
      "Users post ideas, vote and comment. Admin moves items across a 4-stage roadmap.",
      "Row Level Security on every table, plus server-side admin checks.",
      "AI finds similar ideas (embeddings + pgvector) and flags spam. If AI fails, posting still works.",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "pgvector",
      "Zod",
      "Vercel AI SDK",
      "Tailwind",
    ],
    live: "https://feature-flow-full-stack-ai-app-asim-momin.vercel.app/",
    github:
      "https://github.com/asim-momin-7864/feature-flow-full-stack-ai-app/",
  },
  {
    name: "TicketPilot",
    tagline: "AI support agent where a human approves every reply",
    image: "/images/projects/ticketpilot.png",
    highlights: [
      "LangGraph agent classifies tickets, searches a knowledge base (RAG) and drafts a reply with sources.",
      "Policy gate in plain code sends refund and personal-data tickets to a human.",
      "Staff approve, edit or escalate. Nothing is sent without approval. n8n sends email and Slack.",
    ],
    tech: [
      "LangGraph",
      "Next.js",
      "TypeScript",
      "Supabase",
      "pgvector",
      "n8n",
      "Zod",
      "Vitest",
    ],
    live: "https://ticket-pilot-ai-app.vercel.app/",
    github: "https://github.com/asim-momin-7864/ticket-pilot-ai-app/",
  },
  {
    name: "Black Gold Shift",
    tagline: "Shift-log system for coal mines (team project, hackathon)",
    image: "/images/projects/black-gold-shift.png",
    highlights: [
      "I built the web dashboard: KPI cards, 7 Chart.js charts and PDF export of shift logs.",
      "Agreed the Firestore data model with my teammate, who built the Android app.",
      "Won Best Paper Presentation at NC-RISES 2024.",
    ],
    tech: ["Firebase", "Firestore", "JavaScript", "Chart.js"],
    live: "https://black-gold-shift-2-hosted.web.app/index.html",
    github: "https://github.com/asim-momin-7864/Black-Gold-Shift/",
  },
];

export const achievements = [
  {
    title: "Best Paper Presentation",
    issuer: "NC-RISES 2024, DY Patil University",
    date: "2024",
    description:
      "Presented Black Gold Shift, a digital shift-log system for coal mines.",
    image: "/images/achievements/nc-rises-certificate.jpg",
  },
  {
    title: "Web Full Stack Developer Virtual Internship",
    issuer: "AICTE-EduSkills",
    date: "Jul 2025",
    description: "10-week virtual internship program.",
    image: "/images/achievements/aicte-certificate.png",
    link: "",
  },
  {
    title: "SQL and PostgreSQL",
    issuer: "Udemy",
    date: "Jul 2026",
    description: "Course certificate.",
    image: "/images/achievements/udemy-certificate.jpg",
    link: "https://www.udemy.com/certificate/UC-0f9c3da0-af75-4aa3-9d48-071089d87c7d/",
  },
  {
    title: "Full-Stack Web Development (Delta)",
    issuer: "Apna College",
    date: "Feb 2024",
    description: "Course certificate.",
    image: "/images/achievements/apna-certificate.png",
    link: "",
  },
];

export interface MomentPhoto {
  src: string;
  alt: string;
  caption?: string;
  tag?: string;
  span?: string;
  objectPosition?: string;
}

// Moments = Bento box gallery of milestones and memories
export const moments: MomentPhoto[] = [
  {
    src: "/images/moments/ncrise-1.jpeg",
    alt: "Winning Best Paper Presentation award with team at NC-RISES 2024",
    tag: "NC-RISES 2024",
    caption: "Best Paper Presentation Award with team & faculty",
    span: "md:col-span-2",
    objectPosition: "object-center",
  },
  {
    src: "/images/moments/blackbook.jpeg",
    alt: "Me holding the college final year Black Book",
    tag: "Milestone",
    caption: "College Final Year Black Book Submission",
    span: "md:col-span-1",
    objectPosition: "object-[center_18%]",
  },
  {
    src: "/images/moments/ncrise-2.jpeg",
    alt: "Presenting system live to evaluators in the computer lab",
    tag: "Demo",
    caption: "Demonstrating the coal mine shift system in the lab",
    span: "md:col-span-1",
    objectPosition: "object-center",
  },
  {
    src: "/images/moments/ncrise-3.jpeg",
    alt: "Presenting Black Gold Shift on stage with slides",
    tag: "Presentation",
    caption: "Presenting Black Gold Shift on stage to the audience",
    span: "md:col-span-2",
    objectPosition: "object-center",
  },
];
