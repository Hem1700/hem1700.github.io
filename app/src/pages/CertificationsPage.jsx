import Certifications from "../components/Certifications";
import { certifications } from "../data/content";

export default function CertificationsPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div>
            <div className="eyebrow">Recognitions</div>
            <h2 className="section-title">Certifications</h2>
            <p className="section-subtitle">Professional credentials across security, cloud, and networking.</p>
          </div>
        </div>
        <Certifications items={certifications} showHeader={false} wrap={false} />
      </div>
    </section>
  );
}
