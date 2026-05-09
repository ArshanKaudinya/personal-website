const skills = [
  // Languages
  { label: "rust", icon: "devicon-rust-original" },
  { label: "typescript", icon: "devicon-typescript-plain" },
  { label: "python", icon: "devicon-python-plain" },
  { label: "c++", icon: "devicon-cplusplus-plain" },
  { label: "javascript", icon: "devicon-javascript-plain" },
  { label: "java", icon: "devicon-java-plain" },
  { label: "c", icon: "devicon-c-original" },

  // Frameworks
  { label: "next.js", icon: "devicon-nextjs-original" },
  { label: "react", icon: "devicon-react-original" },
  { label: "fastapi", icon: "devicon-fastapi-plain" },
  { label: "tailwind", icon: "devicon-tailwindcss-plain" },
  { label: "django", icon: "devicon-django-plain" },
  { label: "express", icon: "devicon-express-original" },

  // Tools & Platforms
  { label: "docker", icon: "devicon-docker-plain" },
  { label: "postgresql", icon: "devicon-postgresql-plain" },
  { label: "redis", icon: "devicon-redis-plain" },
  { label: "supabase", icon: "devicon-supabase-plain" },
  { label: "vercel", icon: "devicon-vercel-original" },
  { label: "cloudflare", icon: "devicon-cloudflare-plain" },
  { label: "mongodb", icon: "devicon-mongodb-plain" },
  { label: "firebase", icon: "devicon-firebase-plain" },
  { label: "railway", icon: "devicon-railway-plain" },
  { label: "github", icon: "devicon-github-original" },
  { label: "git", icon: "devicon-git-plain" },
  { label: "postman", icon: "devicon-postman-plain" },
];

export default function SkillsGrid() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-grotesk font-bold mb-6 tracking-tight flex items-center gap-2">
        <span className="text-[#6c6499]">&gt;</span> skills
      </h2>
      <div className="flex flex-wrap gap-3">
        {skills.map(({ label, icon }) => (
          <div
            key={label}
            className="flex items-center gap-2 px-3 py-1.5 border border-gray-800 text-sm text-gray-400 hover:border-[#6c6499] hover:text-[#6c6499] transition-all duration-300"
            style={{ minWidth: "fit-content" }}
          >
            {icon ? (
              <i className={icon + " text-base"} title={label} />
            ) : (
              <></>
            )}
            <span className="font-mono">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
