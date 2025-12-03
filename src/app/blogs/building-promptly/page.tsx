"use client";

import Image from "next/image";
import Link from "next/link";

export default function BuildingPromptly() {
  return (
    <article
      className="px-8 md:px-0 max-w-2xl mx-auto text-md pt-18 pb-15 scroll-smooth text-gray-300 leading-8"
      style={{ fontFamily: "Lora, serif" }}
    >
      <div className="w-full h-48 md:h-48 relative rounded-xl overflow-hidden mb-12">
        <Image
          src="/promptly/banner.jpg"
          alt="Promptly Banner"
          fill
          className="object-cover"
          priority
        />
      </div>

      <h1 className="text-5xl font-bold mb-3 text-gray-100">
        How I Built <span className="italic">Promptly</span>
      </h1>
      <p className="text-gray-400 mb-12 text-base">November 2025</p>

      <p className="mb-6">
        The idea for Promptly came right at the end of my summer internship. I was
        spending way too much time refining prompts, copying them around, and
        pasting them back into different AI tools. It worked, but it felt
        painfully inefficient. I wanted a way to refine prompts with my own
        customizations and use them instantly without juggling tabs. That became
        the core problem:{" "}
        <span className="font-normal italic">
          make the entire prompt workflow faster, cleaner, and customizable.
        </span>
      </p>

      <p className="mb-6">
        I started with the smallest possible step —{" "}
        <span className="italic">a button that sends my raw prompt to my backend.</span>{" "}
        The challenge was that every AI website has its own DOM structure. I had
        to{" "}
        <span className="underline underline-offset-4 decoration-slate-500/70 text-gray-100">
          reliably parse the HTML for each platform, identify the correct textbox,
          and wire it to the extension via an API call
        </span>
        .{" "}
        <span className="underline underline-offset-4 decoration-slate-500/70 text-gray-100">
          Privacy and data-flow discipline
        </span>{" "}
        mattered — the extension was built so the content never touched any server
        except the refinement API.
      </p>

      {/* Flow Image */}
      <div className="w-full h-100 relative rounded-xl overflow-hidden my-6">
        <Image
          src="/promptly/flow.png"
          alt="Promptly Flow Diagram"
          fill
          className="object-contain"
        />
      </div>

      <p className="mb-6">
        The next step was the real heart of the product:{" "}
        <span className="underline underline-offset-4 decoration-slate-500/70 text-gray-100">
          refinement logic and user customizations
        </span>
        . I spent days experimenting with what actually improves a prompt, then
        designed{" "}
        <span className="underline underline-offset-4 decoration-slate-500/70 text-gray-100">
          constraints and rule sets for my Refinement LLM
        </span>
        . The idea was to{" "}
        <span className="italic">
          teach the AI to cook the prompts and give it the user’s ingredients.
        </span>{" "}
        Each request carried the user’s settings, and the API returned a refined
        prompt that the extension wrote back with a smooth animation.
      </p>

      <p className="mb-6">
        With the core engine working, I bought the domain and built the website.
        The toughest part wasn’t the tech —{" "}
        <span className="italic">it was the design.</span> I wanted a minimal
        interface that communicated the idea clearly. I spent hours on typography,
        spacing, and layout until the homepage felt right to me. I moved everything into
        a clean{" "}
        <span className="underline underline-offset-4 decoration-slate-500/70 text-gray-100">
          monorepo, with frontend, server, and extension living in one codebase
        </span>
        .
      </p>

      <p className="mb-6">
        The next week was full-stack work:{" "}
        <span className="underline underline-offset-4 decoration-slate-500/70 text-gray-100">
          authentication, user flows, customizations, payments, CRUD, onboarding,
          and usage limits
        </span>
        . All the real SaaS plumbing. By the third week, the MVP was deployed on
        Vercel and Render.
      </p>

      <p className="mb-6">
        Real users then shaped the product. They broke things, suggested things,
        hated things, and pushed Promptly to grow. I added refinement tiers, preset
        customizations, free plans, tiered instruction depth, custom user
        instructions, and smoother extension behavior.
      </p>

      <p className="mb-6">
        Eventually I outgrew Render, and migrated everything to a{" "}
        <span className="underline underline-offset-4 decoration-slate-500/70 text-gray-100">
          DigitalOcean droplet with Docker, Nginx, and cleaner routing
        </span>
        . It turned into real infrastructure instead of just a “deploy and pray”
        setup.
      </p>

      <p className="mb-6">
        Promptly started as a personal solution at the end of an internship. It’s
        now a real product with users, customization layers, a Chrome extension, a
        dashboard, and a proper backend. All from one frustration:{" "}
        <span className="italic">
          refining prompts shouldn’t feel like manual labour.
        </span>{" "}
        I just built the tool I wished I had.
      </p>

      <p className="italic text-lg mb-6">
        Try it out: <Link href="https://www.usepromptlyai.com"target="_blank"rel="noopener noreferrer"className="underline">www.usepromptlyai.com</Link>
      </p>
    </article>
  );
}
