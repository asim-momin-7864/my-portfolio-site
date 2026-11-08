import { Github, Linkedin, Mail, Twitter, Code2 } from "lucide-react";
import { links } from "@/lib/data";
import { Card, Section } from "./ui";

export function Contact() {
  const items = [
    { label: links.email, href: `mailto:${links.email}`, Icon: Mail },
    { label: "GitHub", href: links.github, Icon: Github },
    { label: "LinkedIn", href: links.linkedin, Icon: Linkedin },
    { label: "X (Twitter)", href: links.twitter, Icon: Twitter },
    { label: "LeetCode", href: links.leetcode, Icon: Code2 },
  ].filter((i) => i.href);

  return (
    <Section id="contact" title="Contact">
      <Card className="p-5">
        <p className="text-gray-700">I am open to junior roles and internships at startups. Email is the fastest way to reach me.</p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {items.map(({ label, href, Icon }) => (
            <li key={label}>
              <a href={href} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                 className="flex items-center gap-2 text-gray-800 hover:text-accent">
                <Icon className="h-4 w-4" /> {label}
              </a>
            </li>
          ))}
        </ul>
      </Card>
    </Section>
  );
}
