"use client";

import { CSSProperties, ReactNode, useEffect, useRef, useState } from "react";

type CollapseProps = {
  open: boolean;
  collapsedHeight?: number;
  duration?: number;
  easing?: string;
  /** Fade the bottom edge with a gradient while collapsed (preview peek). */
  fadeMask?: boolean;
  children: ReactNode;
};

/**
 * Animates between a collapsed height and the content's real height. Measuring
 * the content (instead of guessing a max-height cap) keeps the easing curve
 * mapped to actual pixels, so the motion stays smooth instead of snapping.
 */
export default function Collapse({
  open,
  collapsedHeight = 0,
  duration = 520,
  easing = "cubic-bezier(.22, 1, .36, 1)",
  fadeMask = false,
  children,
}: CollapseProps) {
  const innerRef = useRef<HTMLDivElement>(null);
  const mounted = useRef(false);
  const [height, setHeight] = useState<string>(
    open ? "auto" : `${collapsedHeight}px`
  );

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;

    // Skip animating the initial render; just settle into the starting state.
    if (!mounted.current) {
      mounted.current = true;
      setHeight(open ? "auto" : `${collapsedHeight}px`);
      return;
    }

    const full = el.scrollHeight;
    if (open) {
      setHeight(`${full}px`);
    } else {
      // Pin to the measured height first so the collapse animates from a real
      // pixel value rather than from "auto" (which can't be interpolated).
      setHeight(`${full}px`);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setHeight(`${collapsedHeight}px`));
      });
    }
  }, [open, collapsedHeight]);

  const maskActive = fadeMask && !open;
  const style: CSSProperties = {
    height,
    overflow: "hidden",
    transition: `height ${duration}ms ${easing}`,
    WebkitMaskImage: maskActive
      ? "linear-gradient(to bottom, #000 55%, transparent 100%)"
      : undefined,
    maskImage: maskActive
      ? "linear-gradient(to bottom, #000 55%, transparent 100%)"
      : undefined,
  };

  return (
    <div
      style={style}
      onTransitionEnd={(e) => {
        // Release to "auto" once fully open so it reflows with content/viewport.
        if (e.propertyName === "height" && open) setHeight("auto");
      }}
    >
      <div ref={innerRef}>{children}</div>
    </div>
  );
}
