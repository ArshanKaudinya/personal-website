"use client";
import { useState, useRef, useEffect } from "react";
import { ArrowDown } from "phosphor-react";

export default function AboutMe() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  function useIsBigScreen() {
    const [isBig, setIsBig] = useState(false);
    useEffect(() => {
      const check = () => setIsBig(window.innerWidth >= 768);
      check();
      window.addEventListener("resize", check);
      return () => window.removeEventListener("resize", check);
    }, []);
    return isBig;
  }
  

  const isBigScreen = useIsBigScreen();
  const collapsedHeight = isBigScreen ? "12rem" : "15.5rem";
  const [maxHeight, setMaxHeight] = useState<string>("0px");
  useEffect(() => {
    if (ref.current) setMaxHeight(`${ref.current.scrollHeight}px`);
  }, []);

  return (
    <section className="mx-auto mb-12 text-gray-300 text-sm md:text-base leading-relaxed">
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
          <span className="font-grotesk font-bold text-accent">the only thing out of my control is consistent change.</span><br />
          <br />
          hey, i&apos;m arshan kaudinya, i&apos;m working on a startup, tech that actually interests me,
          and shaping a version of myself i can respect. i&apos;m into
          tech, philosophy, fitness and the broader project of understanding how to live well.<br />
          <br />
          everyone seems to be{" "}
          <span className="italic">&quot;building the next big thing&quot;</span>
          &nbsp; i&apos;m building the next big me.<br />
          i&apos;m driven by the need to outdo who i was yesterday. more than money or status, what matters to me is the person i&apos;m becoming.<br />
          <br />
          except the narcissistic tendencies, i do genuinely love to talk to new people, i love to
          learn from them, see the world through their eyes and understand how
          their universe works. everyone lives differently beautiful lives, i
          want to be a part of them all.<br />
        </p>

        {!open && (
          <div
            className="
              pointer-events-none absolute inset-x-0 bottom-0
              h-20
              bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a]
              transition-opacity duration-500
            "
          />
        )}
        {!open && (
          <button
            onClick={() => setOpen(true)}
            aria-expanded={open}
            className="
              group absolute bottom-1 left-1/2 -translate-x-1/2 z-20
              px-4 py-1.5 text-gray-400 text-xs font-medium
              border border-gray-800 bg-[#0a0a0a] hover:border-[#6c6499] hover:text-[#6c6499]
              transition-all duration-300 ease-out
              cursor-pointer
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6c6499]/30
              flex items-center gap-1
            "
          >
            <span>read more</span>
            <ArrowDown className="h-3 w-3 flex-shrink-0" />
          </button>
        )}
      </div>

      {open && (
        <button
          onClick={() => setOpen(false)}
          aria-expanded={open}
          className="
            group mx-auto mt-3 flex items-center gap-1 px-4 py-1.5
            text-gray-400 text-xs font-medium cursor-pointer
            border border-gray-800 bg-[#0a0a0a] hover:border-[#6c6499] hover:text-[#6c6499]
            transition-all duration-300 ease-out
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6c6499]/30
          "
        >
          show less
          <ArrowDown className="rotate-180 h-3 w-3 flex-shrink-0" />
        </button>
      )}
    </section>
  );
}
