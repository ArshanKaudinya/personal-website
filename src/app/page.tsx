import ProfileSection from "@/components/ProfileSection";
import StackIcons from "@/components/StackIcons";
import SocialLinks from "@/components/SocialLinks";
import ProjectsSection from "@/components/ProjectSection";
// import BlogSection from "@/components/BlogSection";
import AboutMe from "@/components/AboutMe";
import WorkWithMe from "@/components/WorkWithMe";
import ReachOut from "@/components/ReachOut";

export default function Home() {
  return (
    <main className="px-8 md:px-0 max-w-2xl mx-auto pt-18 pb-15 space-y-12 scroll-smooth">
      <ProfileSection />
      <SocialLinks />
      <div className="w-full border-t border-gray-600 mb-4" />
      <AboutMe />
      <div className="w-full border-t border-gray-600 mb-8" />
      <StackIcons />
      <ProjectsSection />
      <div className="w-full border-t border-gray-600 mb-10" />
      <WorkWithMe />
      {/* <BlogSection /> */}
      <div className="w-full border-t border-gray-600 mb-8 mt-8" />
      <ReachOut />
      <footer className="text-center text-gray-600 text-sm mt-12">
        © {new Date().getFullYear()} Arshan Kaudinya
      </footer>
    </main>
  );
}
