"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type PrefKey = "font" | "spacing" | "large" | "links" | "mask";

const STORAGE_KEY = "a11y";

const PREFS: { key: PrefKey; cls: string; label: string; hint: string }[] = [
  { key: "font", cls: "a11y-font", label: "Dyslexia-friendly font", hint: "OpenDyslexic" },
  { key: "spacing", cls: "a11y-spacing", label: "Readable spacing", hint: "line + letter spacing" },
  { key: "large", cls: "a11y-large", label: "Larger text", hint: "125%" },
  { key: "links", cls: "a11y-links", label: "Highlight links", hint: "underline + bold" },
  { key: "mask", cls: "a11y-mask", label: "Reading mask", hint: "follows cursor" },
];

type Prefs = Record<PrefKey, boolean>;

const EMPTY_PREFS: Prefs = {
  font: false,
  spacing: false,
  large: false,
  links: false,
  mask: false,
};

/** Clear strip height (px) the reading mask keeps undimmed around the cursor. */
const MASK_GAP = 72;

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState<Prefs>(EMPTY_PREFS);

  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const firstToggleRef = useRef<HTMLButtonElement>(null);
  const topBandRef = useRef<HTMLDivElement>(null);
  const bottomBandRef = useRef<HTMLDivElement>(null);

  // The pre-paint head script is the source of truth before hydration, so we
  // read the actual classes already on <html> to seed component state.
  useEffect(() => {
    const root = document.documentElement;
    const next = { ...EMPTY_PREFS };
    for (const { key, cls } of PREFS) {
      next[key] = root.classList.contains(cls);
    }
    setPrefs(next);
  }, []);

  const persist = useCallback((next: Prefs) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* ignore persistence failures (e.g. private mode) */
    }
  }, []);

  const apply = useCallback((next: Prefs) => {
    const root = document.documentElement;
    for (const { key, cls } of PREFS) {
      root.classList.toggle(cls, next[key]);
    }
  }, []);

  const toggle = useCallback(
    (key: PrefKey) => {
      setPrefs((prev) => {
        const next = { ...prev, [key]: !prev[key] };
        apply(next);
        persist(next);
        return next;
      });
    },
    [apply, persist]
  );

  const reset = useCallback(() => {
    apply(EMPTY_PREFS);
    setPrefs(EMPTY_PREFS);
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  }, [apply]);

  const close = useCallback((returnFocus: boolean) => {
    setOpen(false);
    if (returnFocus) triggerRef.current?.focus();
  }, []);

  // Escape closes the panel and returns focus to the trigger.
  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.stopPropagation();
        close(true);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, close]);

  // Click outside the panel/trigger closes it (without stealing focus).
  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: MouseEvent) {
      const target = e.target as Node;
      if (
        panelRef.current?.contains(target) ||
        triggerRef.current?.contains(target)
      ) {
        return;
      }
      close(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [open, close]);

  // Move focus into the panel for keyboard users when it opens.
  useEffect(() => {
    if (open) firstToggleRef.current?.focus();
  }, [open]);

  // Reading mask: track the cursor and resize the two dimmed bands directly via
  // refs to avoid a re-render on every mousemove.
  useEffect(() => {
    if (!prefs.mask) return;

    function position(y: number) {
      const h = window.innerHeight;
      const topH = Math.max(0, y - MASK_GAP / 2);
      const bottomTop = Math.min(h, y + MASK_GAP / 2);
      if (topBandRef.current) {
        topBandRef.current.style.top = "0px";
        topBandRef.current.style.height = `${topH}px`;
      }
      if (bottomBandRef.current) {
        bottomBandRef.current.style.top = `${bottomTop}px`;
        bottomBandRef.current.style.height = `${Math.max(0, h - bottomTop)}px`;
      }
    }

    let lastY = window.innerHeight / 2;
    position(lastY);

    function onMove(e: MouseEvent) {
      lastY = e.clientY;
      position(lastY);
    }
    function onResize() {
      position(lastY);
    }
    window.addEventListener("mousemove", onMove);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
    };
  }, [prefs.mask]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className="a11y-fab"
        aria-label="accessibility options"
        aria-expanded={open}
        aria-controls="a11y-panel"
        onClick={() => setOpen((v) => !v)}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="4" r="1.6" />
          <path d="M5 8h14" />
          <path d="M12 8v6" />
          <path d="M9.5 21l2.5-7 2.5 7" />
        </svg>
      </button>

      <div
        ref={panelRef}
        id="a11y-panel"
        className="a11y-panel"
        role="dialog"
        aria-label="accessibility preferences"
        data-open={open}
        inert={!open}
      >
        <p className="a11y-panel-title">accessibility</p>

        {PREFS.map((p, i) => {
          const on = prefs[p.key];
          return (
            <button
              key={p.key}
              ref={i === 0 ? firstToggleRef : undefined}
              type="button"
              className="a11y-toggle"
              data-pref={p.key}
              aria-pressed={on}
              onClick={() => toggle(p.key)}
            >
              <span>
                {p.label}
                <span
                  style={{
                    display: "block",
                    marginTop: "2px",
                    fontSize: "13px",
                    fontWeight: 400,
                    color: "var(--muted)",
                  }}
                >
                  {p.hint}
                </span>
              </span>
              <span className="a11y-state">{on ? "on" : "off"}</span>
            </button>
          );
        })}

        <button type="button" className="a11y-reset" onClick={reset}>
          reset all
        </button>
      </div>

      {prefs.mask && (
        <>
          <div ref={topBandRef} className="a11y-mask-band" aria-hidden="true" />
          <div ref={bottomBandRef} className="a11y-mask-band" aria-hidden="true" />
        </>
      )}
    </>
  );
}
