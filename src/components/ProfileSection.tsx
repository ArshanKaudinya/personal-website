import Image from "next/image";
import Socials from "@/components/Socials";

export default function ProfileSection() {
  return (
    <header className="j-hero">
      <div>
        <h1
          data-reveal-item
          style={{
            margin: 0,
            fontFamily: "var(--font-display)",
            fontWeight: "var(--name-weight)" as React.CSSProperties["fontWeight"],
            letterSpacing: "var(--name-track)",
            lineHeight: 1.0,
            fontSize: "clamp(2.875rem, 8vw, 4.75rem)",
            color: "var(--text)",
          }}
        >
          arshan kaudinya
        </h1>
        <p
          data-reveal-item
          style={{
            margin: "14px 0 0",
            fontFamily: "var(--font-body)",
            fontSize: "13px",
            fontWeight: 500,
            letterSpacing: ".05em",
            color: "var(--muted)",
          }}
        >
          founder &amp; student · cs &rsquo;28
        </p>
        <p
          data-reveal-item
          style={{
            margin: "16px 0 0",
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: "18px",
            color: "var(--muted)",
            lineHeight: 1.55,
            maxWidth: "420px",
          }}
        >
          completing the incomplete.
        </p>
        <div data-reveal-item style={{ marginTop: "22px", color: "var(--faint)" }}>
          <Socials />
        </div>
      </div>

      <div className="j-hero-avatar" data-reveal-item>
        <Image
          src="/pfp.jpeg"
          alt="Arshan Kaudinya"
          fill
          sizes="(max-width: 900px) 200px, 240px"
          className="object-cover"
          priority
          style={{ display: "block" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "var(--accent)",
            mixBlendMode: "color",
            opacity: 0.07,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "inherit",
            boxShadow: "inset 0 0 0 1px var(--border)",
          }}
        />
      </div>
    </header>
  );
}
