"use client";
import { useState } from "react";
import SectionLabel from "@/components/SectionLabel";
import SectionKeywords from "@/components/SectionKeywords";
import Collapse from "@/components/Collapse";

export default function AboutMe() {
  const [open, setOpen] = useState(false);

  return (
    <section id="about" className="j-section">
      <SectionLabel>about</SectionLabel>
      <div data-reveal-item>
        <Collapse open={open} collapsedHeight={170} fadeMask duration={560}>
          <p
            style={{
              margin: 0,
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.1875rem, 2vw, 1.3125rem)",
              lineHeight: 1.6,
              color: "var(--text)",
              fontWeight: 500,
            }}
          >
            the only thing out of my control is consistent change.
          </p>
          <p style={paragraph}>
            hey, i&rsquo;m arshan kaudinya, i&rsquo;m working on tech that
            actually interests me, and shaping a version of myself i can
            respect. i&rsquo;m into tech, philosophy, fitness and the broader
            project of understanding how to live well.
          </p>
          <p style={paragraph}>
            everyone seems to be{" "}
            <span style={{ fontStyle: "italic" }}>
              &ldquo;building the next big thing&rdquo;
            </span>{" "}
            — i&rsquo;m building the next big me. i&rsquo;m driven by the need to
            outdo who i was yesterday. more than money or status, what matters to
            me is the person i&rsquo;m becoming.
          </p>
          <p style={paragraph}>
            except the narcissistic tendencies, i do genuinely love to talk to
            new people, i love to learn from them, see the world through their
            eyes and understand how their universe works. everyone lives
            differently beautiful lives, i want to be a part of them all.
          </p>
        </Collapse>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="j-outline-btn"
          style={{
            margin: "18px 0 0",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontFamily: "var(--font-body)",
            fontSize: "12.5px",
            fontWeight: 500,
            letterSpacing: ".01em",
            color: "var(--muted)",
            background: "transparent",
            border: "1px solid var(--border)",
            borderRadius: "8px",
            padding: "7px 15px",
            cursor: "pointer",
            transition: "all .25s ease",
            whiteSpace: "nowrap",
          }}
        >
          {open ? "show less" : "read more"}
          <span
            style={{
              display: "inline-flex",
              transition: "transform .35s ease",
              transform: open ? "rotate(180deg)" : "none",
            }}
          >
            <svg
              width="11"
              height="11"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              aria-hidden="true"
            >
              <path d="M4 6l4 4 4-4" />
            </svg>
          </span>
        </button>
      </div>
      <SectionKeywords items={["ambition", "curiosity", "people"]} />
    </section>
  );
}

const paragraph: React.CSSProperties = {
  margin: "16px 0 0",
  fontSize: "16px",
  lineHeight: 1.8,
  color: "var(--muted)",
};
