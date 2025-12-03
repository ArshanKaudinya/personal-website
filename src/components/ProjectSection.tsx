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
    title: "Promptly",
    desc: "A friction-less prompt engineering browser extension, completely customizable, one click rewrites to supercharge your prompts. Live and closed source with 100+ users(as of 18/11/25).",
    href: "https://usepromptlyai.com",
    stack: ["Next.js", "Tailwind", "FastAPI", "OpenAI API", "Supabase", "Redis", "Render", "Chrome Extensions", "Polar", "Resend", "Cloudflare"],
    date: "2025",
  },
  {
    title: "PDFhelper",
    desc: "Full-stack AI tool for instant, privacy-focused Q&A on any PDF. Upload documents, ask questions, and get fast, accurate answers with Mixtral LLM and local vector search. Built with Next.js, FastAPI, Supabase, and Together AI.",
    github: "https://github.com/ArshanKaudinya/PDFhelper",
    stack: ["FAISS", "Together AI", "Next.js", "React", "FastAPI", "Supabase", "Vercel", "Tailwind", "Railway"],
    date: "2025",
  },
  {
    title: "Thriftee",
    desc: "A full-stack second-hand marketplace built for Indian college students. Features user authentication, secure listings, multi-image uploads, real-time chat, and robust city-based filtering. Designed for scale, clarity, and trust.",
    github: "https://github.com/arshankaudinya/thriftee",
    stack: ["React", "Next.js", "Tailwind", "Supabase", "PostgreSQL"],
    date: "2024",
  },
];

export default function ProjectsSection() {
  return (
    <section className="w-full max-w-3xl">
      <h2 className="text-xl font-semibold mb-4 ml-[0.1rem]">Notable Projects</h2>
      <div className="flex flex-col gap-6">
        {projects.map(({ title, desc, href, date, github }) => (
          <div
            key={title}
            className="bg-white/3 border border-white/20 rounded-xl p-6 group hover:border-accent/70 transition-colors"
          >
            <div className="flex flex-row items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <h3 className="text-lg md:text-xl font-semibold group-hover:text-accent transition">{title}</h3>
                {date && (
                  <span className="text-xs text-gray-500 font-mono mt-1">{date}</span>
                )}
              </div>
              <span className="flex items-center gap-2">
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub repo"
                    className="text-gray-500 hover:text-accent transition"
                  >
                    <GithubLogo size={20} weight="duotone" />
                  </a>
                )}
                {href && (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live Project"
                    className="text-gray-500 hover:text-accent transition"
                  >
                    <ArrowSquareOut size={20} weight="duotone" />
                  </a>
                )}
              </span>
            </div>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mt-1">{desc}</p>
            {/* {stack && (
              <div className="flex flex-wrap gap-2 mt-4">
                {stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded bg-gray-800/60 text-[13px] text-gray-200 border border-gray-700/60 font-mono tracking-wide"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )} */}
          </div>
        ))}
      </div>
    </section>
  );
}
