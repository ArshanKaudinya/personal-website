"use client";
import { useState } from "react";

type WorkEntry = {
  company: string;
  role: string;
  date: string;
  bullets: string[];
};

const workEntries: WorkEntry[] = [
  {
    company: "PlainField AI",
    role: "Founder",
    date: "December 2025 – Present",
    bullets: [
      "Started as Promptly, a Chrome extension that rewrote your prompts on the fly — that early signal led to PlainField AI.",
      "Building the first LLM gateway that autonomously improves prompts: routes API calls, runs statistical analytics to find which prompts are burning money, then A/B tests auto-generated variants in production and promotes the winners — one-line integration, zero code changes.",
    ],
  },
  {
    company: "Forvis Mazars",
    role: "Software Engineering Intern",
    date: "May 2025 – June 2025",
    bullets: [
      "Worked with the Digital, Trust & Transformation team on internal tooling.",
    ],
  },
];

export default function WorkWithMe() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="mx-auto mb-12">
      <h2 className="text-2xl font-grotesk font-bold mb-6 tracking-tight flex items-center gap-2">
        <span className="text-[#6c6499]">&gt;</span> work
      </h2>
      <div className="flex flex-col gap-6">
        {workEntries.map(({ company, role, date, bullets }, i) => {
          const isOpen = openIndex === i;
          return (
            <button
              key={company}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="group text-left w-full border-l-2 border-gray-800 pl-6 hover:border-[#6c6499] transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-baseline justify-between gap-3">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="font-grotesk font-bold text-gray-100 group-hover:text-[#6c6499] transition-colors duration-300">
                    {company}
                  </span>
                  <span className="text-xs text-gray-600 font-mono">{date}</span>
                </div>
                <span className="text-[#6c6499] text-xs font-mono flex-shrink-0">
                  {isOpen ? "–" : "+"}
                </span>
              </div>
              <p className="text-xs text-gray-500 font-mono mt-0.5">{role}</p>
              <div
                style={{
                  maxHeight: isOpen ? "200px" : "0px",
                  transition: "max-height 900ms cubic-bezier(0.22,1,0.36,1)",
                }}
                className="overflow-hidden"
              >
                <ul className="mt-3 space-y-2">
                  {bullets.map((bullet, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="text-[#6c6499] mt-0.5 flex-shrink-0 select-none">–</span>
                      <span className="text-gray-400 text-sm leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
