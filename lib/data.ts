// ALL content lives here. Edit this file, not the components.
// Leave a link as "" and its button is hidden automatically.

export const profile = {
  name: "Asim Momin",
  role: "Full-Stack Developer (Applied AI)",
  photo: "/images/profile.svg", // replace with /images/profile.jpg
  headline: "I build full-stack web apps with practical AI features.",
  about: [
    "I am a fresher. I finished B.Tech in Information Technology in May 2026.",
    "I build with Next.js, TypeScript, React and PostgreSQL (Supabase). I add AI where it helps, such as semantic search and RAG, and I keep the AI optional so the app still works when it fails.",
    "I care about secure data access (Row Level Security, server-side checks) and I want to learn fast on a real team.",
  ],
  looking: "Looking for: junior full-stack or AI application developer role, or an internship at a startup. Available immediately. Ready to relocate (Bengaluru, Hyderabad, Chennai) or work remote.",
  location: "Pune, India",
};

export const links = {
  email: "asimmomin.dev@gmail.com",
  github: "https://github.com/asim-momin-7864",
  linkedin: "", // add your LinkedIn URL
  twitter: "", // add your X URL
  leetcode: "", // add later
  resumeView: "/resume/Asim_Momin_Resume.pdf",
  // Phone is NOT shown on the page on purpose. It is in the resume PDF.
};

// icon = name of the icon in components/SkillIcon.tsx
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
    { name: "LangGraph", icon: "langgraph" }, { name: "n8n", icon: "n8n" },
    { name: "OpenAI / Claude / Gemini APIs", icon: "openai" }, { name: "Ollama", icon: "ollama" } ] },
  { title: "Tools", skills: [
    { name: "Git", icon: "git" }, { name: "GitHub", icon: "github" },
    { name: "Vitest", icon: "vitest" }, { name: "Postman", icon: "postman" },
    { name: "Docker (basics)", icon: "docker" }, { name: "Vercel", icon: "vercel" } ] },
];

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
  {
    title: "Best Paper Presentation",
    issuer: "NC-RISES 2024, DY Patil University",
    date: "2024",
    description: "Presented Black Gold Shift, a digital shift-log system for coal mines.",
    image: "/images/achievements/nc-rises-certificate.svg",
    link: "",
  },
  {
    title: "Web Full Stack Developer Virtual Internship",
    issuer: "AICTE-EduSkills",
    date: "Jul 2025",
    description: "10-week virtual internship program.",
    image: "/images/achievements/aicte-certificate.svg",
    link: "",
  },
  {
    title: "SQL and PostgreSQL",
    issuer: "Udemy",
    date: "",
    description: "Course certificate.",
    image: "/images/achievements/udemy-certificate.svg",
    link: "",
  },
  {
    title: "Full-Stack Web Development (Delta)",
    issuer: "Apna College",
    date: "",
    description: "Course certificate.",
    image: "/images/achievements/apna-certificate.svg",
    link: "",
  },
];

// Small "Moments" section. Keep it to 4-6 photos.
export const moments = [
  { src: "/images/moments/nc-rises-team.svg", caption: "NC-RISES 2024 with my team" },
  { src: "/images/moments/graduation.svg", caption: "Graduation, May 2026" },
  { src: "/images/moments/event.svg", caption: "Presenting Black Gold Shift" },
];
