import AboutSection from "./components/about";
import HeroSection from "./components/home";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import ProjectsSession from "./components/projects";
import SkillsSection from "./components/skills";
import ContactSection from "./components/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSession/>
      <ContactSection />
      <Footer/>
    </main>
    </div>
  );
}
