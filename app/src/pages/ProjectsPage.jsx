import Projects from "../components/Projects";
import TerminalSection from "../components/TerminalSection";
import { projects } from "../data/content";

export default function ProjectsPage() {
  return (
    <div className="terminal-feed">
      <TerminalSection title="projects">
        <ul className="terminal-list">
          {projects.map((p) => (
            <li key={p.title}>
              {p.title} — {p.description}
            </li>
          ))}
        </ul>
      </TerminalSection>
    </div>
  );
}
