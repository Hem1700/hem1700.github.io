import { useLocation, useNavigate, Link } from "react-router-dom";

export default function Navbar({ onToggleTheme, theme }) {
  const location = useLocation();
  const navigate = useNavigate();

  const isBlog = location.pathname === "/blogs";
  const isProjectsPage = location.pathname.startsWith("/projects");
  const isCertsPage = location.pathname.startsWith("/certifications");

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

  const handleProjectsClick = (event) => {
    if (location.pathname === "/") {
      handleAnchorClick(event, "projects");
    } // otherwise let it navigate to /projects
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="logo">Hem Parekh</div>
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
            <a href="/projects" className={isProjectsPage ? "active" : ""} onClick={handleProjectsClick}>
              Projects
            </a>
          </li>
          <li>
            <a href="/certifications" className={isCertsPage ? "active" : ""} onClick={(e) => {
              if (location.pathname === "/") {
                handleAnchorClick(e, "certs");
              }
            }}>
              Certs
            </a>
          </li>
          <li>
            <a href="#certs" onClick={(e) => handleAnchorClick(e, "certs")}>
              Certs
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/18iXELe1Bge8-SSpKBscATGjY4rCicmNb/view?usp=sharing" target="_blank" rel="noreferrer">
              Resume
            </a>
          </li>
          <li>
            <Link to="/blogs" className={isBlog ? "active" : ""}>
              Blog
            </Link>
          </li>
        </ul>
        <button className="theme-toggle" id="themeToggle" onClick={onToggleTheme}>
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
}
