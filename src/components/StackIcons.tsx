const skills = [
  // Languages
  { label: "Python", icon: "devicon-python-plain colored" },
  { label: "C++", icon: "devicon-cplusplus-plain colored" },
  { label: "C", icon: "devicon-c-original colored" },
  { label: "Java", icon: "devicon-java-plain colored" },
  { label: "JavaScript", icon: "devicon-javascript-plain colored" },
  { label: "TypeScript", icon: "devicon-typescript-plain colored" },

  // Frameworks
  { label: "React.js", icon: "devicon-react-original colored" },
  { label: "Next.js", icon: "devicon-nextjs-original-wordmark" },
  { label: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
  { label: "Django", icon: "devicon-django-plain" },
  { label: "FastAPI", icon: "devicon-fastapi-plain colored" },
  { label: "ExpressJS", icon: "devicon-express-original" },

  // Tools & Platforms
  { label: "Git", icon: "devicon-git-plain colored" },
  { label: "GitHub", icon: "devicon-github-original" },
  { label: "Supabase", icon: "devicon-supabase-plain colored" }, 
  { label: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
  { label: "MongoDB", icon: "devicon-mongodb-plain colored" },
  { label: "Railway", icon: "devicon-railway-plain colored" },
  { label: "Redis", icon: "devicon-redis-plain colored" },
  { label: "Vercel", icon: "devicon-vercel-original" },
  { label: "Firebase", icon: "devicon-firebase-plain colored" },
  { label: "Docker", icon: "devicon-docker-plain colored" },
  { label: "Cloudflare", icon: "devicon-cloudflare-plain colored" },
  { label: "Postman", icon: "devicon-postman-plain colored" },
];

export default function SkillsGrid() {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-2 ml-[0.1rem]">Technical Skills &amp; Tools</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map(({ label, icon }) => (
          <div
            key={label}
            className="flex items-center gap-2 px-2 py-1 rounded-lg bg-[#232328] border border-[#333] text-[10px] font-medium shadow-sm hover:border-accent transition"
            style={{ minWidth: "fit-content" }}
          >
            {icon ? (
              <i className={icon + " text-lg"} title={label} />
            ) : (
              <></>
            )}
            <span className="text-[14px]">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
