import SectionLabel from "@/components/SectionLabel";
import SectionKeywords from "@/components/SectionKeywords";

type Project = {
  title: string;
  desc: string;
  href?: string;
  date?: string;
  github?: string;
};

const projects: Project[] = [
  {
    title: "encoder-sim",
    desc: "end-to-end file transfer system in rust: huffman compression with canonical codes, bit-level i/o, a framed binary protocol with crc32 checksums, and a deliberately hostile network simulator (latency, jitter, loss, reordering) to prove the reassembler holds up. five concurrent threads connected by bounded crossbeam channels.",
    github: "https://github.com/ArshanKaudinya/Huffman-encoder-sim",
    date: "2026",
  },
  {
    title: "promptly",
    desc: "a friction-less prompt-engineering browser extension, completely customizable, one-click rewrites to supercharge your prompts. live and closed source with 100+ users.",
    href: "https://usepromptlyai.com",
    date: "2025",
  },
  {
    title: "pdfhelper",
    desc: "private question-answering for any document. upload a pdf, ask in plain language, and get grounded answers from a mixtral llm and local vector search — built with next.js, fastapi, supabase, and together ai.",
    github: "https://github.com/ArshanKaudinya/PDFhelper",
    date: "2025",
  },
  {
    title: "thriftee",
    desc: "a full-stack second-hand marketplace for indian college students: authentication, secure listings, multi-image uploads, real-time chat, and city-based filtering — designed for scale, clarity, and trust.",
    github: "https://github.com/arshankaudinya/thriftee",
    date: "2024",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="j-section">
      <SectionLabel>projects</SectionLabel>
      <div>
        <div style={{ display: "flex", flexDirection: "column", gap: "34px" }}>
          {projects.map(({ title, desc, href, github, date }) => {
            const url = href ?? github;
            return (
              <div key={title} data-reveal-item>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    gap: "14px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: "12px",
                      flexWrap: "wrap",
                    }}
                  >
                    <h3
                      style={{
                        margin: 0,
                        fontFamily: "var(--font-display)",
                        fontWeight:
                          "var(--name-weight)" as React.CSSProperties["fontWeight"],
                        fontSize: "21px",
                        color: "var(--text)",
                        letterSpacing: "-.005em",
                      }}
                    >
                      {title}
                    </h3>
                    {date && (
                      <span
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "12px",
                          color: "var(--faint)",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {date}
                      </span>
                    )}
                  </div>
                  {url && (
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`view ${title}`}
                      className="j-link-accent"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "5px",
                        fontFamily: "var(--font-serif)",
                        fontStyle: "italic",
                        fontSize: "14px",
                        color: "var(--faint)",
                        flexShrink: 0,
                      }}
                    >
                      view
                      <span style={{ fontStyle: "normal", fontSize: "13px" }}>
                        {"\u2197\uFE0E"}
                      </span>
                    </a>
                  )}
                </div>
                <p
                  style={{
                    margin: "11px 0 0",
                    color: "var(--muted)",
                    fontSize: "15px",
                    lineHeight: 1.72,
                    maxWidth: "560px",
                  }}
                >
                  {desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <SectionKeywords items={["rust", "ai", "full-stack"]} />
    </section>
  );
}
