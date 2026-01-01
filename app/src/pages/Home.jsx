import { Link } from "react-router-dom";
import About from "../components/About";
import BlogList from "../components/BlogList";
import Certifications from "../components/Certifications";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import { about, blogs, certifications, experience, hero, projects, socialLinks } from "../data/content";

export default function HomePage() {
  const trustedBy = Array.from(new Set(experience.map((item) => item.org)));
  const featuredBlogs = blogs.slice(0, 3);

  return (
    <>
      <Hero data={hero} />

      <section className="section">
        <div className="container intro-grid">
          <div className="intro-title">
            <div className="eyebrow">****</div>
            <h2 className="section-title">With precision + curiosity, we harden systems.</h2>
          </div>
          <div className="intro-body">
            <p className="lead">{about.text}</p>
            <p>
              Every environment tells a story. I help teams surface weak links, stage realistic tests, and ship
              defenses that hold under pressure.
            </p>
            <div className="hero-meta">
              {socialLinks.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="pill">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Trusted by</h2>
            <h2 className="section-title">Teams</h2>
          </div>
          <div className="logo-grid">
            {trustedBy.map((org) => (
              <div className="logo-card" key={org}>
                {org}
              </div>
            ))}
          </div>
        </div>
      </section>

      <About data={about} socials={socialLinks} />
      <Experience items={experience} />
      <Projects items={projects} showViewAll showHeader showFilters={false} />

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div>
              <h2 className="section-title">Recognitions</h2>
              <p className="section-subtitle">Certifications and credentials earned across security and cloud.</p>
            </div>
            <div className="section-actions">
              <Link className="link-button" to="/certifications">
                View all certifications
              </Link>
            </div>
          </div>
          <Certifications items={certifications.slice(0, 5)} showHeader={false} wrap={false} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div>
              <h2 className="section-title">Ops Log</h2>
              <p className="section-subtitle">Recent writeups from exploit labs and defensive research.</p>
            </div>
            <div className="section-actions">
              <Link className="link-button" to="/blogs">
                View all posts
              </Link>
            </div>
          </div>
          <BlogList posts={featuredBlogs} wrap={false} />
        </div>
      </section>
    </>
  );
}
