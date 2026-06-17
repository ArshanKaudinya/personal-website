"use client";
import { useState } from "react";
import SectionLabel from "@/components/SectionLabel";
import SectionKeywords from "@/components/SectionKeywords";
import Collapse from "@/components/Collapse";

type WorkEntry = {
  company: string;
  role: string;
  date: string;
  bullets: string[];
};

const workEntries: WorkEntry[] = [
  {
    company: "AskSoca",
    role: "founding engineer (intern)",
    date: "2026 — present",
    bullets: [
      "wearing every hat across the stack: full-stack engineering, applied AI, ops, and the analytics that keep us honest about what is and isn’t working.",
    ],
  },
  {
    company: "PlainField AI",
    role: "founder",
    date: "2025 — present",
    bullets: [
      "started as Promptly, a Chrome extension that rewrote prompts on the fly — that early signal led to PlainField AI.",
      "building an LLM gateway that improves prompts on its own: it routes calls, surfaces the ones quietly burning money, then A/B-tests stronger variants in production and promotes the winners — a one-line integration with zero code changes.",
    ],
  },
  {
    company: "YourToken",
    role: "software engineer, intern",
    date: "2026",
    bullets: [
      "migrated the product backend from TypeScript to Rust, driving major performance optimizations across the stack.",
    ],
  },
  {
    company: "Forvis Mazars",
    role: "software engineer, intern",
    date: "2025",
    bullets: [
      "built internal tooling for the Digital, Trust & Transformation team — small, sharp utilities that quietly removed daily friction.",
    ],
  },
];

export default function WorkWithMe() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="work" className="j-section">
      <SectionLabel>work</SectionLabel>
      <div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {workEntries.map(({ company, role, date, bullets }, i) => {
            const isOpen = openIndex === i;
            return (
              <button
                key={company}
                data-reveal-item
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                style={{
                  textAlign: "left",
                  width: "100%",
                  background: "transparent",
                  border: "none",
                  borderTop: "1px solid var(--border)",
                  padding: "18px 0",
                  cursor: "pointer",
                }}
              >
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
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight:
                          "var(--name-weight)" as React.CSSProperties["fontWeight"],
                        fontSize: "18px",
                        color: "var(--text)",
                      }}
                    >
                      {company}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontStyle: "italic",
                        fontSize: "14px",
                        color: "var(--muted)",
                      }}
                    >
                      {role}
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "13px",
                      flexShrink: 0,
                    }}
                  >
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
                    <span
                      style={{
                        color: "var(--accent)",
                        display: "inline-flex",
                        transition: "transform .35s ease",
                        transform: isOpen ? "rotate(180deg)" : "none",
                      }}
                    >
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        aria-hidden="true"
                      >
                        <path d="M4 6l4 4 4-4" />
                      </svg>
                    </span>
                  </div>
                </div>
                <Collapse open={isOpen} duration={480}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "9px",
                      paddingTop: "14px",
                    }}
                  >
                    {bullets.map((bullet, j) => (
                      <p
                        key={j}
                        style={{
                          margin: 0,
                          color: "var(--muted)",
                          fontSize: "14.5px",
                          lineHeight: 1.7,
                          maxWidth: "540px",
                        }}
                      >
                        {bullet}
                      </p>
                    ))}
                  </div>
                </Collapse>
              </button>
            );
          })}
          <div style={{ borderTop: "1px solid var(--border)" }} />
        </div>
      </div>
      <SectionKeywords items={["applied ai", "optimisations", "founding agency"]} />
    </section>
  );
}
