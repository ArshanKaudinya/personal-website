import ProfileSection from "@/components/ProfileSection";
import StackIcons from "@/components/StackIcons";
import SocialLinks from "@/components/SocialLinks";
import ProjectsSection from "@/components/ProjectSection";
import AboutMe from "@/components/AboutMe";
import WorkWithMe from "@/components/WorkWithMe";
import ReachOut from "@/components/ReachOut";
import BlogSection from "@/components/BlogSection";
import AchievementsSection from "@/components/AchievementsSection";

export default function Home() {
  return (
    <main className="px-6 md:px-8 max-w-3xl mx-auto pt-20 pb-20 scroll-smooth">
      <ProfileSection />
      <SocialLinks />
      <AboutMe />
      <div className="w-full h-px bg-gray-800 my-12" />
      <BlogSection />
      <ProjectsSection />
      <AchievementsSection />
      <StackIcons />
      <div className="w-full h-px bg-gray-800 my-12" />
      <WorkWithMe />
      <ReachOut />
      <footer className="text-center text-gray-700 text-xs font-mono mt-16">
        © {new Date().getFullYear()} arshan kaudinya
      </footer>
    </main>
  );
}
