import TerminalSection from "../components/TerminalSection";
import { certifications } from "../data/content";

export default function CertificationsPage() {
  return (
    <div className="terminal-feed">
      <TerminalSection title="certifications">
        <ul className="terminal-list">
          {certifications.map((c) => (
            <li key={c.title}>
              <a href={c.href} target="_blank" rel="noreferrer">
                {c.title}
              </a>
              {" — "}
              {c.details}
            </li>
          ))}
        </ul>
      </TerminalSection>
    </div>
  );
}
