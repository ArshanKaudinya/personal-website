"use client";

const socials = [
  {
    href: "https://github.com/arshankaudinya",
    label: "GitHub",
    icon: "devicon-github-original",
  },
  {
    href: "https://www.linkedin.com/in/arshan-kaudinya-54b333255/",
    label: "LinkedIn",
    icon: "devicon-linkedin-plain",
  },
  {
    href: "https://x.com/arshankaudinya",
    label: "X/Twitter",
    icon: "devicon-twitter-original",
  },
];

export default function SocialLinks() {
  return (
      <section className="flex justify-start ml-[0.8rem] gap-5 mb-2">
        {socials.map(({ href, label, icon }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent transition"
          >
            <i className={`${icon} text-xl`} title={label}></i>
          </a>
        ))}
      </section>
  );
}
