import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

export default function Navbar({ onToggleTheme, theme }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

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
      setTimeout(scrollToId, 120);
    } else {
      scrollToId();
    }
    setMenuOpen(false);
  };

  const navLinks = [
    { label: "About", anchor: "about" },
    { label: "Experience", anchor: "experience" },
    { label: "Projects", to: "/projects" },
    { label: "Certs", to: "/certifications" },
    { label: "Blog", to: "/blogs" },
    { label: "CVE Map", to: "/cve-map" },
    { label: "Contact", anchor: "contact" },
  ];

  const isActive = (to) => location.pathname === to;

  return (
    <>
      <nav className="hud">
        <div className="container hud-inner">
          <Link to="/" className="hud-brand">
            Hem Parekh
          </Link>
          <div className="hud-links">
            {navLinks.map((link) => {
              if (link.anchor) {
                return (
                  <a
                    key={link.label}
                    href={`#${link.anchor}`}
                    className="hud-link"
                    onClick={(e) => handleAnchorClick(e, link.anchor)}
                  >
                    <span>{link.label}</span>
                    <div className="link-track">
                      <div className="link-track-fill" />
                    </div>
                  </a>
                );
              }
              return (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`hud-link ${isActive(link.to) ? "active" : ""}`}
                  onClick={() => setMenuOpen(false)}
                >
                  <span>{link.label}</span>
                  <div className="link-track">
                    <div className="link-track-fill" />
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="hud-actions">
            <button className="theme-toggle" id="themeTheme" onClick={onToggleTheme} type="button">
              Theme {theme === "dark" ? "Light" : "Dark"}
            </button>
            <button
              className={`menu-toggle ${menuOpen ? "open" : ""}`}
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="hud-menu"
            >
              <span className="menu-toggle-lines" aria-hidden="true">
                <span className="menu-line" />
                <span className="menu-line" />
                <span className="menu-line" />
              </span>
              <span className="menu-label">Menu</span>
            </button>
          </div>
        </div>
      </nav>
      <div className={`hud-menu ${menuOpen ? "open" : ""}`} id="hud-menu" aria-hidden={!menuOpen}>
        <div className="hud-menu-list">
          {navLinks.map((link) => {
            if (link.anchor) {
              return (
                <a
                  key={link.label}
                  href={`#${link.anchor}`}
                  className="menu-link"
                  onClick={(e) => handleAnchorClick(e, link.anchor)}
                >
                  <span>{link.label}</span>
                  <div className="link-track">
                    <div className="link-track-fill" />
                  </div>
                </a>
              );
            }
            return (
              <Link
                key={link.label}
                to={link.to}
                className="menu-link"
                onClick={() => setMenuOpen(false)}
              >
                <span>{link.label}</span>
                <div className="link-track">
                  <div className="link-track-fill" />
                </div>
              </Link>
            );
          })}
          <button className="btn" type="button" onClick={() => setMenuOpen(false)}>
            Close
          </button>
        </div>
      </div>
    </>
  );
}
