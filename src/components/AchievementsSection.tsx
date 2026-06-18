import SectionLabel from "@/components/SectionLabel";
import SectionKeywords from "@/components/SectionKeywords";

type Achievement = {
  title: string;
  subtitle: string;
  date: string;
  prize?: string;
};

const achievements: Achievement[] = [
  {
    title: "second runner-up — build india ’26",
    subtitle: "national hackathon by Anthropic × Replit × Lightspeed",
    date: "2026",
    prize: "$7,000",
  },
  {
    title: "top 50 of 800 — sih internal ’25",
    subtitle: "smart india hackathon internal selection round",
    date: "2025",
  },
  {
    title: "vice chairperson — ieee computer society",
    subtitle: "leading club operations & events",
    date: "2026",
  },
];

export default function AchievementsSection() {
  return (
    <section id="highlights" className="j-section">
      <SectionLabel>highlights</SectionLabel>
      <div>
        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          {achievements.map(({ title, subtitle, date, prize }) => (
            <div key={title} data-reveal-item>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "11px",
                  flexWrap: "wrap",
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-display)",
                    fontWeight:
                      "var(--name-weight)" as React.CSSProperties["fontWeight"],
                    fontSize: "17px",
                    color: "var(--text)",
                  }}
                >
                  {title}
                </h3>
                {prize && (
                  <span
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontStyle: "italic",
                      fontSize: "15px",
                      color: "var(--accent)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {prize}
                  </span>
                )}
              </div>
              <p
                style={{
                  margin: "5px 0 0",
                  fontSize: "14px",
                  color: "var(--muted)",
                  lineHeight: 1.6,
                }}
              >
                {subtitle} <span style={{ color: "var(--faint)" }}>· {date}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
      <SectionKeywords items={["competition", "leadership"]} />
    </section>
  );
}
