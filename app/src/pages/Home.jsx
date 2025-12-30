import TerminalSection from "../components/TerminalSection";
import { about, experience, hero, socialLinks } from "../data/content";

export default function HomePage() {
  return (
    <div className="terminal-feed">
      <TerminalSection title="home">
        <pre className="terminal-block">
{`user: ${hero.highlight}
roles: Security Engineer | Pen Tester | Threat Hunter
bio: ${hero.blurb}`}
        </pre>
      </TerminalSection>

      <TerminalSection title="experience">
        <ul className="terminal-list">
          {experience.map((item) => (
            <li key={`${item.role}-${item.range}`}>
              {item.role} @ {item.org} [{item.range}]
            </li>
          ))}
        </ul>
      </TerminalSection>

      <TerminalSection title="about">
        <p className="terminal-text">{about.text}</p>
        <div className="terminal-list inline">
          {socialLinks.map((link) => (
            <span key={link.href}>{link.label}</span>
          ))}
        </div>
      </TerminalSection>
    </div>
  );
}
