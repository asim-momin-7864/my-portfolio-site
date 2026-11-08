// ALL content lives here. Edit this file, not the components.

export const profile = {
  name: "Asim Momin",
  role: "Full-Stack Developer | Applied AI",
  photo: "/images/profile.svg", // replace with /images/profile.jpg
  headline: "I build full-stack web apps with practical AI features.",
  about: [
    "I am a fresher. I finished B.Tech in Information Technology in May 2026.",
    "I build with Next.js, TypeScript, React and PostgreSQL (Supabase). I add AI where it helps: semantic search and RAG, agents and tools with LangGraph, n8n workflows, and local LLMs with Ollama.",
    "I am always exploring and learning full-stack development, applied AI and agents, and I want to grow by working with a real team.",
  ],
  looking:
    "Looking for: Full-Stack Developer or Applied AI Developer roles at startups. Available immediately. Ready to move anywhere in India, or work remote.",
};

// Replace the YOUR-... placeholders. Placeholder links are hidden in the Hero buttons.
export const links = {
  email: "asimmomin.dev@gmail.com", // shown as plain text (copy it)
  github: "https://github.com/asim-momin-7864",
  linkedin: "https://www.linkedin.com/in/YOUR-ID",
  twitter: "https://x.com/YOUR-HANDLE",
  resume: "/resume/Asim_Momin_Resume.pdf",
};

export const skillGroups = [
  { title: "Frontend", skills: [
    { name: "React", icon: "react" }, { name: "Next.js", icon: "nextjs" },
    { name: "TypeScript", icon: "typescript" }, { name: "JavaScript", icon: "javascript" },
    { name: "Tailwind CSS", icon: "tailwind" }, { name: "shadcn/ui", icon: "shadcn" },
    { name: "HTML5", icon: "html" }, { name: "CSS3", icon: "css" } ] },
  { title: "Backend and Database", skills: [
    { name: "Node.js", icon: "node" }, { name: "Express", icon: "express" },
    { name: "PostgreSQL", icon: "postgres" }, { name: "Supabase", icon: "supabase" },
    { name: "Zod", icon: "zod" } ] },
  { title: "AI and Automation", skills: [
    { name: "Vercel AI SDK", icon: "vercel" }, { name: "RAG + pgvector", icon: "postgres" },
    { name: "LangGraph (agents, tools)", icon: "langgraph" }, { name: "n8n", icon: "n8n" },
    { name: "OpenAI / Claude / Gemini APIs", icon: "openai" }, { name: "Ollama (local LLMs)", icon: "ollama" } ] },
  { title: "Tools", skills: [
    { name: "Git", icon: "git" }, { name: "GitHub", icon: "github" },
    { name: "Vitest", icon: "vitest" }, { name: "Postman", icon: "postman" },
    { name: "Docker (basics)", icon: "docker" }, { name: "Vercel", icon: "vercel" } ] },
];

// Links: leave "" if not ready. The link stays visible but greyed out ("soon").
export const projects = [
  {
    name: "Feature Flow",
    tagline: "Product feedback board with AI duplicate detection",
    image: "/images/projects/feature-flow.svg",
    highlights: [
      "Users post ideas, vote and comment. Admin moves items across a 4-stage roadmap.",
      "Row Level Security on every table, plus server-side admin checks.",
      "AI finds similar ideas (embeddings + pgvector) and flags spam. If AI fails, posting still works.",
    ],
    tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "pgvector", "Zod", "Vercel AI SDK", "Tailwind"],
    live: "", github: "", video: "",
  },
  {
    name: "TicketPilot",
    tagline: "AI support agent where a human approves every reply",
    image: "/images/projects/ticketpilot.svg",
    highlights: [
      "LangGraph agent classifies tickets, searches a knowledge base (RAG) and drafts a reply with sources.",
      "Policy gate in plain code sends refund and personal-data tickets to a human.",
      "Staff approve, edit or escalate. Nothing is sent without approval. n8n sends email and Slack.",
    ],
    tech: ["LangGraph", "Next.js", "TypeScript", "Supabase", "pgvector", "n8n", "Zod", "Vitest"],
    live: "", github: "", video: "",
  },
  {
    name: "Black Gold Shift",
    tagline: "Shift-log system for coal mines (team project, hackathon)",
    image: "/images/projects/black-gold-shift.svg",
    highlights: [
      "I built the web dashboard: KPI cards, 7 Chart.js charts and PDF export of shift logs.",
      "Agreed the Firestore data model with my teammate, who built the Android app.",
      "Won Best Paper Presentation at NC-RISES 2024.",
    ],
    tech: ["Firebase", "Firestore", "JavaScript", "Chart.js"],
    live: "", github: "", video: "",
  },
];

export const achievements = [
  { title: "Best Paper Presentation", issuer: "NC-RISES 2024, DY Patil University", date: "2024",
    description: "Presented Black Gold Shift, a digital shift-log system for coal mines.",
    image: "/images/achievements/nc-rises-certificate.svg", link: "" },
  { title: "Web Full Stack Developer Virtual Internship", issuer: "AICTE-EduSkills", date: "Jul 2025",
    description: "10-week virtual internship program.",
    image: "/images/achievements/aicte-certificate.svg", link: "" },
  { title: "SQL and PostgreSQL", issuer: "Udemy", date: "",
    description: "Course certificate.",
    image: "/images/achievements/udemy-certificate.svg", link: "" },
  { title: "Full-Stack Web Development (Delta)", issuer: "Apna College", date: "",
    description: "Course certificate.",
    image: "/images/achievements/apna-certificate.svg", link: "" },
];

// Moments = a few real events, not a gallery. Each event has 1-3 photos.
export const moments = [
  {
    title: "NC-RISES 2024",
    text: "Presenting Black Gold Shift with my team. We won Best Paper Presentation.",
    photos: [
      { src: "/images/moments/ncrises-1.svg", alt: "NC-RISES team photo" },
      { src: "/images/moments/ncrises-2.svg", alt: "NC-RISES with teachers" },
      { src: "/images/moments/ncrises-3.svg", alt: "NC-RISES presentation" },
    ],
  },
  {
    title: "College Black Book",
    text: "[Write one true line about this photo.]",
    photos: [{ src: "/images/moments/blackbook.svg", alt: "Me with the college Black Book" }],
  },
];
