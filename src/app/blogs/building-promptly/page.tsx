import {
  Article,
  P,
  Lead,
  Em,
  Mark,
  Fig,
  ExternalLink,
} from "@/components/Article";

export default function BuildingPromptly() {
  return (
    <Article
      title={
        <>
          How I built <span style={{ fontStyle: "italic" }}>Promptly</span>
        </>
      }
      date="nov 2025"
      read="6 min"
    >
      <Lead firstLetter="T">
        he idea for Promptly came right at the end of my summer internship. I was
        spending way too much time refining prompts, copying them around, and
        pasting them back into different AI tools. It worked, but it felt
        painfully inefficient. I wanted a way to refine prompts with my own
        customizations and use them instantly without juggling tabs. That became
        the core problem:{" "}
        <Em>make the entire prompt workflow faster, cleaner, and customizable.</Em>
      </Lead>

      <P>
        I started with the smallest possible step —{" "}
        <Em>a button that sends my raw prompt to my backend.</Em> The challenge
        was that every AI website has its own DOM structure. I had to{" "}
        <Mark>
          reliably parse the HTML for each platform, identify the correct
          textbox, and wire it to the extension via an API call
        </Mark>
        . <Mark>Privacy and data-flow discipline</Mark> mattered — the extension
        was built so the content never touched any server except the refinement
        API.
      </P>

      <Fig src="/promptly/flow.png" alt="Promptly flow diagram" height={400} />

      <P>
        The next step was the real heart of the product:{" "}
        <Mark>refinement logic and user customizations</Mark>. I spent days
        experimenting with what actually improves a prompt, then designed{" "}
        <Mark>constraints and rule sets for my Refinement LLM</Mark>. The idea was
        to{" "}
        <Em>
          teach the AI to cook the prompts and give it the user&rsquo;s
          ingredients.
        </Em>{" "}
        Each request carried the user&rsquo;s settings, and the API returned a
        refined prompt that the extension wrote back with a smooth animation.
      </P>

      <P>
        With the core engine working, I bought the domain and built the website.
        The toughest part wasn&rsquo;t the tech — <Em>it was the design.</Em> I
        wanted a minimal interface that communicated the idea clearly. I spent
        hours on typography, spacing, and layout until the homepage felt right to
        me. I moved everything into a clean{" "}
        <Mark>monorepo, with frontend, server, and extension living in one
        codebase</Mark>
        .
      </P>

      <P>
        The next week was full-stack work:{" "}
        <Mark>
          authentication, user flows, customizations, payments, CRUD, onboarding,
          and usage limits
        </Mark>
        . All the real SaaS plumbing. By the third week, the MVP was deployed on
        Vercel and Render.
      </P>

      <P>
        Real users then shaped the product. They broke things, suggested things,
        hated things, and pushed Promptly to grow. I added refinement tiers,
        preset customizations, free plans, tiered instruction depth, custom user
        instructions, and smoother extension behavior.
      </P>

      <P>
        Eventually I outgrew Render, and migrated everything to a{" "}
        <Mark>DigitalOcean droplet with Docker, Nginx, and cleaner routing</Mark>.
        It turned into real infrastructure instead of just a &ldquo;deploy and
        pray&rdquo; setup.
      </P>

      <P>
        Promptly started as a personal solution at the end of an internship.
        It&rsquo;s now a real product with users, customization layers, a Chrome
        extension, a dashboard, and a proper backend. All from one frustration:{" "}
        <Em>refining prompts shouldn&rsquo;t feel like manual labour.</Em> I just
        built the tool I wished I had.
      </P>

      <P>
        <Em>
          Try it out:{" "}
          <ExternalLink href="https://www.usepromptlyai.com">
            www.usepromptlyai.com
          </ExternalLink>
        </Em>
      </P>
    </Article>
  );
}
