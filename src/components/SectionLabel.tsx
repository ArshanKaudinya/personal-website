export default function SectionLabel({ children }: { children: string }) {
  return (
    <div
      className="j-label"
      data-reveal-item
      style={{ display: "flex", alignItems: "baseline" }}
    >
      <span
        style={{
          fontFamily: "var(--font-serif)",
          fontStyle: "italic",
          fontSize: "19px",
          color: "var(--accent)",
        }}
      >
        {children}
      </span>
    </div>
  );
}
