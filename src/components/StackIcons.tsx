import SectionLabel from "@/components/SectionLabel";
import SectionKeywords from "@/components/SectionKeywords";

type ToolkitRow = {
  cat: string;
  items: string;
};

const toolkit: ToolkitRow[] = [
  { cat: "languages", items: "Rust · Go · TypeScript · Python · Swift" },
  {
    cat: "systems",
    items: "Rust/WASM · concurrency · low-level optimization",
  },
  {
    cat: "backend",
    items: "Go · FastAPI · queues · scale",
  },
  {
    cat: "llm infra",
    items: "gateways · observability · streaming · tool calling · voice agents",
  },
  {
    cat: "infra",
    items: "databases · VPS · hosting · Docker",
  },
];

export default function Toolkit() {
  return (
    <section id="toolkit" className="j-section">
      <SectionLabel>toolkit</SectionLabel>
      <div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {toolkit.map(({ cat, items }) => (
            <div key={cat} className="j-toolkit-row" data-reveal-item>
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  fontSize: "16px",
                  color: "var(--accent)",
                }}
              >
                {cat}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "16px",
                  color: "var(--text)",
                  lineHeight: 1.6,
                }}
              >
                {items}
              </span>
            </div>
          ))}
          <div style={{ borderTop: "1px solid var(--border)" }} />
        </div>
      </div>
      <SectionKeywords items={["systems depth", "llm infrastructure", "owns the stack"]} />
    </section>
  );
}
