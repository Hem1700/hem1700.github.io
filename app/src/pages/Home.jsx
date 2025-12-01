import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";
import { about, experience, hero, projects, socialLinks, certifications } from "../data/content";

export default function HomePage() {
  return (
    <>
      <Hero data={hero} />
      <About data={about} socials={socialLinks} />
      <Experience items={experience} />
      <Projects items={projects} />
      <Certifications items={certifications} />
    </>
  );
}
