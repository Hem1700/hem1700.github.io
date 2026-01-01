import Projects from "../components/Projects";
import { projects } from "../data/content";

export default function ProjectsPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div>
            <div className="eyebrow">Featured work</div>
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle">Deployment dossiers and offensive prototypes.</p>
          </div>
        </div>
        <Projects items={projects} showHeader={false} showViewAll={false} showFilters showFeatured wrap={false} />
      </div>
    </section>
  );
}
