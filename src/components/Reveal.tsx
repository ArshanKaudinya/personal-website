"use client";

import { ReactNode, useEffect, useRef } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  /**
   * When set, descendants marked with `data-reveal-item` cascade in with a
   * staggered delay once the group scrolls into view. The wrapper itself does
   * not fade. Falls back to a block reveal if no items are found.
   */
  stagger?: boolean;
};

export default function Reveal({
  children,
  className,
  style,
  stagger = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const items = stagger
      ? Array.from(el.querySelectorAll<HTMLElement>("[data-reveal-item]"))
      : [];

    items.forEach((item, i) => item.style.setProperty("--reveal-i", String(i)));

    const targets: Element[] = items.length ? items : [el];
    const reveal = () => targets.forEach((t) => t.classList.add("in"));

    if (typeof IntersectionObserver === "undefined") {
      reveal();
      return;
    }

    // Reveal anything already on screen at mount so above-the-fold content
    // never depends on the observer's (sometimes delayed) initial callback.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      reveal();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          reveal();
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [stagger]);

  if (stagger) {
    return (
      <div ref={ref} data-reveal-group className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <div ref={ref} data-reveal className={className} style={style}>
      {children}
    </div>
  );
}
