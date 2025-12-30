import { useLocation, useNavigate, Link } from "react-router-dom";

export default function Navbar({ onToggleTheme, onToggleGlow, glowOn, theme }) {
  const location = useLocation();
  const navigate = useNavigate();

  const isBlog = location.pathname === "/blogs";
  const isProjectsPage = location.pathname.startsWith("/projects");
  const isCertsPage = location.pathname.startsWith("/certifications");
  const isCveMap = location.pathname.startsWith("/cve-map");
  const isContact = location.hash === "#contact" || location.pathname === "/contact";

  const handleAnchorClick = (event, id) => {
    event.preventDefault();
    const scrollToId = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scrollToId, 80);
    } else {
      scrollToId();
    }
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="logo">
          Hem Parekh | Security Engineer
        </div>
        <ul className="nav-links">
          <li>
            <a href="#about" onClick={(e) => handleAnchorClick(e, "about")}>
              About
            </a>
          </li>
          <li>
            <a href="#experience" onClick={(e) => handleAnchorClick(e, "experience")}>
              Experience
            </a>
          </li>
          <li>
            <Link to="/projects" className={isProjectsPage ? "active" : ""}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/certifications" className={isCertsPage ? "active" : ""}>
              Certs
            </Link>
          </li>
          <li>
            <Link to="/blogs" className={isBlog ? "active" : ""}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/cve-map" className={isCveMap ? "active" : ""}>
              CVE Map
            </Link>
          </li>
          <li>
            <a href="#contact" className={isContact ? "active" : ""} onClick={(e) => handleAnchorClick(e, "contact")}>
              Contact
            </a>
          </li>
        </ul>
        <div className="nav-actions">
          <button className="theme-toggle" id="themeToggle" onClick={onToggleGlow}>
            HUD Glow: {glowOn ? "On" : "Off"}
          </button>
          <button className="theme-toggle" id="themeTheme" onClick={onToggleTheme}>
            Theme: {theme === "dark" ? "Dark" : "Light"}
          </button>
        </div>
      </div>
    </nav>
  );
}
