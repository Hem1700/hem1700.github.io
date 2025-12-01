import Projects from "../components/Projects";
import { projects } from "../data/content";

export default function ProjectsPage() {
  return (
    <>
      <header className="blog-welcome-section">
        <div className="container text-center">
          <h1>Projects</h1>
          <p className="blog-subtitle">A focused list of what I’ve shipped and explored.</p>
        </div>
      </header>
      <Projects items={projects} />
    </>
  );
}
