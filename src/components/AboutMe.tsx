"use client";
import { useState, useRef, useEffect } from "react";
import { ArrowDown } from "phosphor-react";

export default function AboutMe() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  function useIsBigScreen() {
    const [isBig, setIsBig] = useState(false);
    useEffect(() => {
      const check = () => setIsBig(window.innerWidth >= 768); // md breakpoint
      check();
      window.addEventListener("resize", check);
      return () => window.removeEventListener("resize", check);
    }, []);
    return isBig;
  }
  
  // In your component
  const isBigScreen = useIsBigScreen();
  const collapsedHeight = isBigScreen ? "12rem" : "15.5rem";
  const [maxHeight, setMaxHeight] = useState<string>("0px");
  useEffect(() => {
    if (ref.current) setMaxHeight(`${ref.current.scrollHeight}px`);
  }, []);

  return (
    <section className="mx-auto mt-8 mb-4 px-3 text-gray-300 text-base md:text-lg leading-relaxed">
      <div
        ref={ref}
        style={{
          maxHeight: open ? maxHeight : collapsedHeight,
          transition: "max-height 800ms cubic-bezier(0.22,1,0.36,1)",
          willChange: "max-height, opacity, transform"
        }}
        className="relative overflow-hidden"
      >
        <p className="transition-opacity duration-500 ease-out">
          <span className="font-semibold">The only thing out of my control is consistent change.</span><br />
          <br />
          Hey, I&apos;m Arshan Kaudinya, I&apos;m building Archon, working on tech that actually interests me,
          and shaping a version of myself I can respect. I&apos;m into
          tech, philosophy, fitness and the broader project of understanding how to live well.<br />
          <br />
          Everyone seems to be{" "}
          <span className="italic">&quot;building the next big thing&quot;</span>
          &nbsp; I&apos;m building the next big me.<br />
          I&apos;m driven by the need to outdo who I was yesterday. More than money or status, what matters to me is the person I&apos;m becoming.<br />
          <br />
          Except the narcissistic tendencies, I do genuinely love to talk to new people, I love to
          learn from them, see the world through their eyes and understand how
          their universe works. Everyone lives differently beautiful lives, I
          want to be a part of them all.<br />
        </p>

        {/* blur & gradient overlay when collapsed */}
        {!open && (
          <div
            className="
              pointer-events-none absolute inset-x-0 bottom-0
              h-20  
              bg-gradient-to-b from-transparent via-black/5 to-black/80
              /* horizontal fade-out on both sides */
              [mask-image:linear-gradient(to_right,transparent,black,transparent)]
              [-webkit-mask-image:linear-gradient(to_right,transparent,black,transparent)]
              transition-opacity duration-500
            "
          />
        )}
        {/* Floating clickable button (collapsed) */}
        {!open && (
          <button
            onClick={() => setOpen(true)}
            aria-expanded={open}
            className="
              group absolute bottom-1 left-1/2 -translate-x-1/2 z-20
              px-3 rounded-md text-slate-100 text-sm font-medium
              shadow transition-all duration-300 ease-out
              cursor-pointer
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60
              flex items-center gap-1
            "
            style={{ boxShadow: "0 4px 12px 0 rgba(0,0,0,0.18)" }}
          >
            <span className="transition-opacity duration-300">Read more</span>
            <ArrowDown className="h-4 w-4 transition-transform duration-200 ease group-hover:translate-y-0.5" />
          </button>
        )}
      </div>

      {/* toggle button (expanded) */}
      {open && (
        <button
          onClick={() => setOpen(false)}
          aria-expanded={open}
          className="
            group mx-auto mt-2 flex items-center gap-1 px-5 py-1.5 rounded-md
            text-slate-100 text-sm font-medium cursor-pointer
            shadow transition-all duration-300 ease-out
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60
          "
        >
          Show less
          <ArrowDown className="rotate-180 h-4 w-4 group-hover:-translate-y-0.5" />
        </button>
      )}
    </section>
  );
}
