import SectionLabel from "@/components/SectionLabel";
import SectionKeywords from "@/components/SectionKeywords";
import Socials from "@/components/Socials";

export default function ReachOut() {
  return (
    <section id="contact" className="j-section">
      <SectionLabel>say hello</SectionLabel>
      <div data-reveal-item>
        <p
          style={{
            margin: "0 0 22px",
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.1875rem, 2vw, 1.3125rem)",
            fontStyle: "italic",
            color: "var(--muted)",
            lineHeight: 1.6,
            maxWidth: "460px",
          }}
        >
          want to build something, collaborate, or just trade ideas? my inbox is
          always open.
        </p>
        <div style={{ color: "var(--faint)" }}>
          <Socials />
        </div>
      </div>
      <SectionKeywords items={["collaborate"]} />
    </section>
  );
}
