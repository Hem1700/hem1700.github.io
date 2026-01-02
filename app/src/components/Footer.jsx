import { Link } from "react-router-dom";
import { socialLinks } from "../data/content";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h4>Sitemap</h4>
          <Link to="/">Home</Link>
          <br />
          <Link to="/projects">Projects</Link>
          <br />
          <Link to="/certifications">Certifications</Link>
          <br />
          <Link to="/blogs">Blog</Link>
          <br />
          <Link to="/cve-map">CVE Map</Link>
        </div>
        <div>
          <h4>Connect</h4>
          {socialLinks.map((link) => (
            <div key={link.href}>
              <a href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
