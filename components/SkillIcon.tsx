import { IconType } from "react-icons";
import { FaCode } from "react-icons/fa";
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiShadcnui, SiHtml5, SiCss3,
  SiNodedotjs, SiExpress, SiPostgresql, SiSupabase, SiZod, SiVercel, SiLangchain, SiN8N,
  SiOpenai, SiOllama, SiGit, SiGithub, SiVitest, SiPostman, SiDocker,
} from "react-icons/si";

const icons: Record<string, IconType> = {
  react: SiReact, nextjs: SiNextdotjs, typescript: SiTypescript, javascript: SiJavascript,
  tailwind: SiTailwindcss, shadcn: SiShadcnui, html: SiHtml5, css: SiCss3, node: SiNodedotjs,
  express: SiExpress, postgres: SiPostgresql, supabase: SiSupabase, zod: SiZod, vercel: SiVercel,
  langgraph: SiLangchain, n8n: SiN8N, openai: SiOpenai, ollama: SiOllama, git: SiGit,
  github: SiGithub, vitest: SiVitest, postman: SiPostman, docker: SiDocker,
};

export function SkillIcon({ name }: { name: string }) {
  const Icon = icons[name] ?? FaCode;
  return <Icon className="h-5 w-5 text-gray-700" aria-hidden />;
}
