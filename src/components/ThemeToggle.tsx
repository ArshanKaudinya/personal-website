"use client";

import { useEffect, useState } from "react";

type ThemeKey = "dark" | "light";

const GLOW = "#f4c63a";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeKey>("dark");

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "light" ? "light" : "dark");
  }, []);

  function toggle() {
    const next: ThemeKey = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* ignore persistence failures (e.g. private mode) */
    }
    setTheme(next);
  }

  const on = theme === "light";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={on ? "switch to dark mode" : "switch to light mode"}
      aria-pressed={on}
      title={on ? "lights on" : "lights off"}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: "transparent",
        border: "none",
        padding: "4px",
        margin: 0,
        cursor: "pointer",
        lineHeight: 0,
        borderRadius: "8px",
      }}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke={on ? GLOW : "var(--faint)"}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        style={{
          transition:
            "stroke .45s ease, filter .55s ease, transform .45s cubic-bezier(.22,1,.36,1)",
          transform: on ? "scale(1.06)" : "scale(1)",
          filter: on
            ? `drop-shadow(0 0 6px rgba(244,198,58,.85)) drop-shadow(0 0 12px rgba(244,198,58,.45))`
            : "drop-shadow(0 0 0 rgba(244,198,58,0))",
        }}
      >
        <path
          d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5.76.76 1.23 1.52 1.41 2.5"
          fill={on ? "rgba(244,198,58,.28)" : "transparent"}
          style={{ transition: "fill .55s ease" }}
        />
        <path d="M9 18h6" />
        <path d="M10 22h4" />
      </svg>
    </button>
  );
}
