'use client';
import { GithubLogo, LinkedinLogo, TwitterLogo, Envelope } from "phosphor-react";

const socials = [
  {
    href: "https://github.com/arshankaudinya",
    label: "GitHub",
    icon: GithubLogo,
  },
  {
    href: "https://www.linkedin.com/in/arshan-kaudinya-54b333255/",
    label: "LinkedIn",
    icon: LinkedinLogo,
  },
  {
    href: "https://x.com/arshankaudinya",
    label: "X (Twitter)",
    icon: TwitterLogo,
  },
  {
    href: "mailto:arshankaudinya@gmail.com",
    label: "Email",
    icon: Envelope,
  },
];

export default function ReachOut() {
  return (
    <section id="reachout" className="mx-auto mt-6 px-1">
      <h2 className="text-xl font-semibold mb-4 text-accent">Reach Out</h2>
      <p className="text-gray-400 mb-6">
        Want to connect, collaborate, or just say hi?  
        Reach out to me anytime, I&apos;m always open to new ideas and conversations.
      </p>
      <div className="flex flex-row gap-6">
        {socials.map(({ href, label, icon: Icon }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            className="text-gray-400 hover:text-accent transition-colors p-2 rounded-full border border-transparent hover:border-accent"
          >
            <Icon size={32} weight="duotone" />
          </a>
        ))}
      </div>
    </section>
  );
}
