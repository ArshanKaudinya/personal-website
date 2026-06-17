"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";

function navLinkStyle(active: boolean): React.CSSProperties {
  return {
    padding: "4px 0",
    fontFamily: "var(--font-serif)",
    fontStyle: "italic",
    fontSize: "15px",
    color: active ? "var(--accent)" : "var(--faint)",
    borderBottom: "1px solid " + (active ? "var(--pop)" : "transparent"),
    transition: "color .25s ease, border-color .25s ease",
  };
}

export default function SiteNav() {
  const pathname = usePathname();
  const isWriting = pathname.startsWith("/writing") || pathname.startsWith("/blogs");
  const isIndex = !isWriting;

  return (
    <nav className="j-nav">
      <Link
        href="/"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "18px",
          fontWeight: "var(--name-weight)" as React.CSSProperties["fontWeight"],
          color: "var(--text)",
          letterSpacing: "-.01em",
        }}
      >
        arshan kaudinya
      </Link>
      <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
        <Link href="/" style={navLinkStyle(isIndex)}>
          index
        </Link>
        <Link href="/writing" style={navLinkStyle(isWriting)}>
          writing
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}
