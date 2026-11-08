import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { links } from "@/lib/data";
import { Card, Section } from "./ui";

export function Contact() {
  const social = [
    { label: "GitHub", href: links.github, Icon: Github },
    { label: "LinkedIn", href: links.linkedin, Icon: Linkedin },
    { label: "X (Twitter)", href: links.twitter, Icon: Twitter },
  ];
  return (
    <Section id="contact" title="Contact">
      <Card className="p-5">
        <p className="text-gray-700">
          I am open to Full-Stack Developer and Applied AI Developer roles at startups.
        </p>
        <p className="mt-4 flex items-center gap-2 text-gray-800">
          <Mail className="h-4 w-4" aria-hidden />
          <span className="select-all font-medium">{links.email}</span>
        </p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-3">
          {social.map(({ label, href, Icon }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2 text-gray-800 hover:text-accent">
                <Icon className="h-4 w-4" aria-hidden /> {label}
              </a>
            </li>
          ))}
        </ul>
      </Card>
    </Section>
  );
}
