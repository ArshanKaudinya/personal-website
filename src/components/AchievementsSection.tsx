type Achievement = {
  title: string;
  subtitle: string;
  date: string;
  prize?: string;
};

const achievements: Achievement[] = [
  {
    title: "Second Runner Up — Build India '26",
    subtitle: "national-level startup competition",
    date: "2026",
    prize: "$7,000",
  },
  {
    title: "Top 50 / 800 — SIH Internal '25",
    subtitle: "smart india hackathon internal selection round",
    date: "2025",
  },
];

export default function AchievementsSection() {
  return (
    <section className="w-full max-w-3xl mb-12">
      <h2 className="text-2xl font-grotesk font-bold mb-6 tracking-tight flex items-center gap-2">
        <span className="text-[#6c6499]">&gt;</span> achievements
      </h2>
      <div className="flex flex-col gap-6">
        {achievements.map(({ title, subtitle, date, prize }) => (
          <div
            key={title}
            className="group border-l-2 border-gray-800 pl-6 hover:border-[#6c6499] transition-all duration-300"
          >
            <div className="flex items-baseline gap-3 mb-1">
              <h3 className="text-base font-grotesk font-bold text-gray-100 group-hover:text-[#6c6499] transition-colors duration-300">
                {title}
              </h3>
              {prize && (
                <span className="text-sm font-mono text-[#6c6499]">· {prize}</span>
              )}
              <span className="text-xs text-gray-600 font-mono">{date}</span>
            </div>
            <p className="text-sm text-gray-400 font-mono">{subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
