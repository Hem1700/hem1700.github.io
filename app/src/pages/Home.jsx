import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import TerminalShell from "../components/TerminalShell";
import { about, experience, hero, socialLinks } from "../data/content";

export default function HomePage() {
  return (
    <>
      <TerminalShell />
      <Hero data={hero} />
      <About data={about} socials={socialLinks} />
      <Experience items={experience} />
    </>
  );
}
