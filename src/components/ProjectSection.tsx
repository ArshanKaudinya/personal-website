'use client';
import { GithubLogo, ArrowSquareOut } from "phosphor-react";

type Project = {
  title: string;
  desc: string;
  href?: string;
  date?: string;
  github?: string;
  stack?: string[];
};

const projects: Project[] = [
  {
    title: "promptly",
    desc: "a friction-less prompt engineering browser extension, completely customizable, one click rewrites to supercharge your prompts. live and closed source with 100+ users(as of 18/11/25).",
    href: "https://usepromptlyai.com",
    stack: ["Next.js", "Tailwind", "FastAPI", "OpenAI API", "Supabase", "Redis", "Render", "Chrome Extensions", "Polar", "Resend", "Cloudflare"],
    date: "2025",
  },
  {
    title: "pdfhelper",
    desc: "full-stack ai tool for instant, privacy-focused q&a on any pdf. upload documents, ask questions, and get fast, accurate answers with mixtral llm and local vector search. built with next.js, fastapi, supabase, and together ai.",
    github: "https://github.com/ArshanKaudinya/PDFhelper",
    stack: ["FAISS", "Together AI", "Next.js", "React", "FastAPI", "Supabase", "Vercel", "Tailwind", "Railway"],
    date: "2025",
  },
  {
    title: "thriftee",
    desc: "a full-stack second-hand marketplace built for indian college students. features user authentication, secure listings, multi-image uploads, real-time chat, and robust city-based filtering. designed for scale, clarity, and trust.",
    github: "https://github.com/arshankaudinya/thriftee",
    stack: ["React", "Next.js", "Tailwind", "Supabase", "PostgreSQL"],
    date: "2024",
  },
];

export default function ProjectsSection() {
  return (
    <section className="w-full max-w-3xl mb-12">
      <h2 className="text-2xl font-grotesk font-bold mb-6 tracking-tight flex items-center gap-2">
        <span className="text-[#6c6499]">&gt;</span> projects
      </h2>
      <div className="flex flex-col gap-8">
        {projects.map(({ title, desc, href, date, github }) => (
          <div
            key={title}
            className="group border-l-2 border-gray-800 pl-6 hover:border-[#6c6499] transition-all duration-300"
          >
            <div className="flex flex-row items-start justify-between mb-2">
              <div className="flex items-baseline gap-3">
                <h3 className="text-xl font-grotesk font-bold text-gray-100 group-hover:text-[#6c6499] transition-colors duration-300">{title}</h3>
                {date && (
                  <span className="text-xs text-gray-600 font-mono">{date}</span>
                )}
              </div>
              <span className="flex items-center gap-3">
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub repo"
                    className="text-gray-600 hover:text-[#6c6499] transition-colors duration-300"
                  >
                    <GithubLogo size={20} weight="regular" />
                  </a>
                )}
                {href && (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live Project"
                    className="text-gray-600 hover:text-[#6c6499] transition-colors duration-300"
                  >
                    <ArrowSquareOut size={20} weight="regular" />
                  </a>
                )}
              </span>
            </div>
            {title === "promptly" ? (
              <p className="text-gray-400 text-sm leading-relaxed">
                a friction-less prompt engineering browser extension, completely customizable, one click rewrites to supercharge your prompts. <span className="underline decoration-[#6c6499] underline-offset-2">live and closed source</span> with 100+ users(as of 18/11/25).
              </p>
            ) : (
              <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
