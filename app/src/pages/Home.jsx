import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import HudWindow from "../components/HudWindow";
import { about, experience, hero, socialLinks } from "../data/content";

export default function HomePage() {
  return (
    <div className="hud-workspace">
      <HudWindow title="Identity // Access Granted" subtitle="Operator profile" initialSize={{ width: 1160 }}>
        <Hero data={hero} />
      </HudWindow>
      <HudWindow title="Experience Feed" subtitle="roles / capabilities" initialPosition={{ x: 8, y: 0 }}>
        <Experience items={experience} />
      </HudWindow>
      <HudWindow title="Bio + Links" subtitle="signal" initialPosition={{ x: -4, y: 0 }}>
        <About data={about} socials={socialLinks} />
      </HudWindow>
    </div>
  );
}
