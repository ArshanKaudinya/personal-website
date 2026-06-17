type SocialItem = {
  label: string;
  href: string;
  size: number;
  filled: boolean;
  path: string;
};

const SOCIALS: SocialItem[] = [
  {
    label: "GitHub",
    href: "https://github.com/arshankaudinya",
    size: 20,
    filled: true,
    path: "M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2 0 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0C17.3 5 18.3 5.3 18.3 5.3c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/arshan-kaudinya-54b333255/",
    size: 20,
    filled: true,
    path: "M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zm1.8 13H3.5V9h3.6v11.4zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7c0-.9-.8-1.7-1.8-1.7z",
  },
  {
    label: "X",
    href: "https://x.com/arshankaudinya",
    size: 18,
    filled: true,
    path: "M18.2 2h3.3l-7.2 8.3L23 22h-6.6l-5.2-6.8L5.2 22H1.9l7.7-8.8L1 2h6.8l4.7 6.2L18.2 2zm-1.2 18h1.8L7.1 3.8H5.2L17 20z",
  },
];

const EMAIL = "mailto:arshankaudinya@gmail.com";

export default function Socials({ gap = 20 }: { gap?: number }) {
  return (
    <div style={{ display: "flex", gap: `${gap}px` }}>
      {SOCIALS.map(({ label, href, size, filled, path }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          target="_blank"
          rel="noopener noreferrer"
          className="j-social-link"
        >
          <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={filled ? "currentColor" : "none"}
            stroke={filled ? "none" : "currentColor"}
            strokeWidth={filled ? 0 : 1.8}
            aria-hidden="true"
          >
            <path d={path} />
          </svg>
        </a>
      ))}
      <a href={EMAIL} aria-label="Email" className="j-social-link">
        <svg
          width={20}
          height={20}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          aria-hidden="true"
        >
          <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
          <path d="M3 6l9 7 9-7" />
        </svg>
      </a>
    </div>
  );
}
