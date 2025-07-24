import Approach from "@/components/main/Approach";
import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import RecentProjects from "@/components/main/RecentProjects";
import Skills from "@/components/main/Skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <RecentProjects />
        <Approach />
        <Encryption />
      </div>
    </main>
  );
}
