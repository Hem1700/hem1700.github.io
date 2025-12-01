import Certifications from "../components/Certifications";
import { certifications } from "../data/content";

export default function CertificationsPage() {
  return (
    <>
      <header className="blog-welcome-section">
        <div className="container text-center">
          <h1>Certifications</h1>
          <p className="blog-subtitle">Credentials and exams I’ve completed.</p>
        </div>
      </header>
      <Certifications items={certifications} showHeader={false} />
    </>
  );
}
