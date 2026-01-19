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
    <section id="reachout" className="mx-auto mb-16">
      <h2 className="text-2xl font-grotesk font-bold mb-6 tracking-tight flex items-center gap-2">
        <span className="text-[#6c6499]">&gt;</span> contact
      </h2>
      <p className="text-gray-400 mb-6 text-sm">
        want to connect, collaborate, or just say hi?
        reach out anytime, i&apos;m always open to new ideas and conversations.
      </p>
      <div className="flex flex-row gap-5">
        {socials.map(({ href, label, icon: Icon }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            className="text-gray-600 hover:text-[#6c6499] transition-all duration-300"
          >
            <Icon size={24} weight="regular" />
          </a>
        ))}
      </div>
    </section>
  );
}
