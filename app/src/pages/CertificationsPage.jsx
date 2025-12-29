import Certifications from "../components/Certifications";
import HudWindow from "../components/HudWindow";
import { certifications } from "../data/content";

export default function CertificationsPage() {
  return (
    <div className="hud-workspace">
      <HudWindow title="Credentials" subtitle="drag / resize" initialSize={{ width: 1180 }}>
        <header className="blog-welcome-section">
          <div className="container text-center">
            <h1>Certifications</h1>
            <p className="blog-subtitle">Credentials earned; operators verified.</p>
          </div>
        </header>
        <Certifications items={certifications} showHeader={false} />
      </HudWindow>
    </div>
  );
}
