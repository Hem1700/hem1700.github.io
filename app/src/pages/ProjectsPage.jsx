import Projects from "../components/Projects";
import HudWindow from "../components/HudWindow";
import { projects } from "../data/content";

export default function ProjectsPage() {
  return (
    <div className="hud-workspace">
      <HudWindow title="Projects // Deployables" subtitle="drag / resize" initialSize={{ width: 1180 }}>
        <header className="blog-welcome-section">
          <div className="container text-center">
            <h1>Projects</h1>
            <p className="blog-subtitle">Deployments, exploit prototypes, and research drops.</p>
          </div>
        </header>
        <Projects items={projects} showHeader={false} />
      </HudWindow>
    </div>
  );
}
