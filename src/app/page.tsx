import ProfileSection from "@/components/ProfileSection";
import AboutMe from "@/components/AboutMe";
import WorkWithMe from "@/components/WorkWithMe";
import ProjectsSection from "@/components/ProjectSection";
import Toolkit from "@/components/StackIcons";
import AchievementsSection from "@/components/AchievementsSection";
import ReachOut from "@/components/ReachOut";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main>
      <Reveal stagger>
        <ProfileSection />
      </Reveal>
      <Reveal stagger>
        <AboutMe />
      </Reveal>
      <Reveal stagger>
        <WorkWithMe />
      </Reveal>
      <Reveal stagger>
        <ProjectsSection />
      </Reveal>
      <Reveal stagger>
        <Toolkit />
      </Reveal>
      <Reveal stagger>
        <AchievementsSection />
      </Reveal>
      <Reveal stagger>
        <ReachOut />
      </Reveal>
    </main>
  );
}
