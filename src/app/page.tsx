import HeroSection from "./Components/Hero";
import { Footer } from "./Components/Footer";
import { Navbar } from "./Components/Navbar";
import AboutSection from "./Components/About/AboutSection";
import AchievementsSection from "./Components/AchievementsSection";
import ProjectsSection from "./Components/ProjectsSection";
import EmailSection from "./Components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
         <AchievementsSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
