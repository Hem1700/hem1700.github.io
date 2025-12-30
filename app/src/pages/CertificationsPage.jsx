import TerminalSection from "../components/TerminalSection";
import { certifications } from "../data/content";

export default function CertificationsPage() {
  return (
    <div className="terminal-feed">
      <TerminalSection title="certifications">
        <ul className="terminal-list">
          {certifications.map((c) => (
            <li key={c.title}>
              {c.title} — {c.details}
            </li>
          ))}
        </ul>
      </TerminalSection>
    </div>
  );
}
