import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Writing — Arshan Kaudinya",
  description: "essays on building, taste, and the slow work of getting better at things.",
};

type Post = {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  read: string;
};

const posts: Post[] = [
  {
    slug: "huffman-encoder",
    title: "Why I built a Huffman encoder from scratch",
    subtitle: "Reading about Huffman coding is not the same as feeling it.",
    date: "apr 2026",
    read: "12 min",
  },
  {
    slug: "building-promptly",
    title: "Building Promptly",
    subtitle: "What shipping a small SaaS in college actually taught me.",
    date: "nov 2025",
    read: "6 min",
  },
];

export default function WritingIndex() {
  return (
    <main>
      <Reveal stagger>
        <div data-reveal-item style={{ marginBottom: "18px" }}>
          <h1
            style={{
              margin: 0,
              fontFamily: "var(--font-display)",
              fontWeight:
                "var(--name-weight)" as React.CSSProperties["fontWeight"],
              fontSize: "clamp(2.875rem, 7vw, 4.5rem)",
              letterSpacing: "var(--name-track)",
              color: "var(--text)",
            }}
          >
            writing
          </h1>
          <p
            style={{
              margin: "14px 0 0",
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              color: "var(--muted)",
              fontSize: "17px",
              lineHeight: 1.6,
              maxWidth: "480px",
            }}
          >
            essays on building, taste, and the slow work of getting better at
            things.
          </p>
        </div>

        <div>
          {posts.map((post) => (
            <Link
              key={post.slug}
              data-reveal-item
              href={`/blogs/${post.slug}`}
              className="j-row"
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                gap: "24px",
                width: "100%",
                borderTop: "1px solid var(--border)",
                padding: "26px 0",
              }}
            >
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "14px",
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight:
                        "var(--name-weight)" as React.CSSProperties["fontWeight"],
                      fontSize: "21px",
                      color: "var(--text)",
                      letterSpacing: "-.005em",
                    }}
                  >
                    {post.title}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "12px",
                      color: "var(--faint)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {post.date} · {post.read}
                  </span>
                </div>
                <p
                  style={{
                    margin: "7px 0 0",
                    fontFamily: "var(--font-serif)",
                    fontStyle: "italic",
                    fontSize: "15.5px",
                    color: "var(--muted)",
                    lineHeight: 1.5,
                  }}
                >
                  {post.subtitle}
                </p>
              </div>
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "20px",
                  color: "var(--faint)",
                  flexShrink: 0,
                }}
              >
                →
              </span>
            </Link>
          ))}
          <div style={{ borderTop: "1px solid var(--border)" }} />
        </div>
      </Reveal>
    </main>
  );
}
