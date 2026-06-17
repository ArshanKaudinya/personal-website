import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

const backLinkStyle: React.CSSProperties = {
  background: "transparent",
  border: "none",
  padding: 0,
  fontFamily: "var(--font-serif)",
  fontStyle: "italic",
  fontSize: "15px",
  color: "var(--faint)",
};

export function Article({
  label = "essay",
  title,
  date,
  read,
  children,
}: {
  label?: string;
  title: ReactNode;
  date: string;
  read: string;
  children: ReactNode;
}) {
  return (
    <article className="j-fade-in" style={{ maxWidth: "660px", margin: "0 auto" }}>
      <Link
        href="/writing"
        className="j-link-accent"
        style={{ ...backLinkStyle, display: "inline-block", marginBottom: "34px" }}
      >
        ← writing
      </Link>
      <p
        style={{
          margin: "0 0 14px",
          fontFamily: "var(--font-body)",
          fontSize: "11px",
          fontWeight: 500,
          letterSpacing: ".2em",
          textTransform: "uppercase",
          color: "var(--accent)",
        }}
      >
        {label}
      </p>
      <h1
        style={{
          margin: 0,
          fontFamily: "var(--font-display)",
          fontWeight: "var(--name-weight)" as React.CSSProperties["fontWeight"],
          fontSize: "clamp(2.125rem, 5vw, 2.875rem)",
          lineHeight: 1.08,
          letterSpacing: "var(--name-track)",
          color: "var(--text)",
        }}
      >
        {title}
      </h1>
      <p
        style={{
          margin: "20px 0 0",
          fontFamily: "var(--font-body)",
          fontSize: "13px",
          color: "var(--faint)",
          letterSpacing: ".02em",
        }}
      >
        {date} · {read} · arshan kaudinya
      </p>
      <div
        style={{ height: "1px", background: "var(--border)", margin: "30px 0 36px" }}
      />

      {children}

      <div
        style={{ height: "1px", background: "var(--border)", margin: "44px 0 26px" }}
      />
      <Link href="/writing" className="j-link-accent" style={backLinkStyle}>
        ← back to writing
      </Link>
    </article>
  );
}

const bodyText: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontSize: "17px",
  lineHeight: 1.9,
  color: "var(--text)",
};

export function P({ children, mt = 22 }: { children: ReactNode; mt?: number }) {
  return <p style={{ margin: `${mt}px 0 0`, ...bodyText }}>{children}</p>;
}

export function Lead({
  firstLetter,
  children,
}: {
  firstLetter: string;
  children: ReactNode;
}) {
  return (
    <p style={{ margin: 0, ...bodyText }}>
      <span
        style={{
          float: "left",
          fontFamily: "var(--font-display)",
          fontWeight: "var(--name-weight)" as React.CSSProperties["fontWeight"],
          fontSize: "68px",
          lineHeight: 0.74,
          padding: "8px 14px 0 0",
          color: "var(--accent)",
        }}
      >
        {firstLetter}
      </span>
      {children}
    </p>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return (
    <h2
      style={{
        margin: "40px 0 0",
        fontFamily: "var(--font-display)",
        fontWeight: "var(--name-weight)" as React.CSSProperties["fontWeight"],
        fontSize: "25px",
        letterSpacing: "var(--name-track)",
        color: "var(--text)",
      }}
    >
      {children}
    </h2>
  );
}

export function Mark({ children }: { children: ReactNode }) {
  return (
    <span
      style={{
        textDecoration: "underline",
        textUnderlineOffset: "4px",
        textDecorationColor: "var(--accent)",
        color: "var(--text)",
      }}
    >
      {children}
    </span>
  );
}

export function Em({ children }: { children: ReactNode }) {
  return <span style={{ fontStyle: "italic" }}>{children}</span>;
}

export function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="j-link-accent"
      style={{
        textDecoration: "underline",
        textUnderlineOffset: "3px",
        textDecorationColor: "var(--accent)",
      }}
    >
      {children}
    </a>
  );
}

export function Bullets({ items }: { items: ReactNode[] }) {
  return (
    <ul
      style={{
        margin: "16px 0 0",
        padding: 0,
        listStyle: "none",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      {items.map((item, i) => (
        <li key={i} style={{ display: "flex", gap: "12px", ...bodyText, margin: 0 }}>
          <span style={{ color: "var(--accent)", flexShrink: 0 }}>—</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Steps({ items }: { items: ReactNode[] }) {
  return (
    <ol
      style={{
        margin: "16px 0 0",
        padding: 0,
        listStyle: "none",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        counterReset: "step",
      }}
    >
      {items.map((item, i) => (
        <li key={i} style={{ display: "flex", gap: "12px", ...bodyText, margin: 0 }}>
          <span
            style={{
              color: "var(--accent)",
              flexShrink: 0,
              fontFamily: "var(--font-display)",
              fontWeight: "var(--name-weight)" as React.CSSProperties["fontWeight"],
            }}
          >
            {i + 1}.
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}

export function Fig({
  src,
  alt,
  height = 320,
  fit = "contain",
}: {
  src: string;
  alt: string;
  height?: number;
  fit?: "contain" | "cover";
}) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: `${height}px`,
        margin: "30px 0",
        borderRadius: "12px",
        overflow: "hidden",
        border: "1px solid var(--border)",
        background: "var(--surface)",
      }}
    >
      <Image src={src} alt={alt} fill className={fit === "cover" ? "object-cover" : "object-contain"} />
    </div>
  );
}
