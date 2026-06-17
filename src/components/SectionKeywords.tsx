export default function SectionKeywords({ items }: { items: string[] }) {
  return (
    <div className="j-keywords" data-reveal-item aria-hidden="true">
      {items.map((word) => (
        <span
          key={word}
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: "13.5px",
            color: "var(--faint)",
            lineHeight: 1.5,
          }}
        >
          {word}
        </span>
      ))}
    </div>
  );
}
