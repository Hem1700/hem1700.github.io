import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import { about, experience, hero, socialLinks } from "../data/content";

export default function HomePage() {
  return (
    <>
      <Hero data={hero} />
      <Experience items={experience} />
      <About data={about} socials={socialLinks} />
    </>
  );
}
