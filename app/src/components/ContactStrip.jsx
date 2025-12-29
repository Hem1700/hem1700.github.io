import { useState } from "react";

export default function ContactStrip() {
  const email = "hemparekh1596@gmail.com";
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
      }).catch(() => {});
    }
  };

  return (
    <section className="contact-strip" id="contact">
      <div className="container contact-grid">
        <div>
          <p className="pill">Let’s talk</p>
          <h2>Signal received. Drop a note and let’s build secure systems.</h2>
          <p className="contact-blurb">Let’s connect to collaborate on security engineering or privacy-focused initiatives.</p>
          {copied && <p className="contact-blurb">Copied. Channel armed with end-to-end noise.</p>}
        </div>
        <div className="contact-actions">
          <button className="button primary" onClick={copyEmail} type="button">
            Copy Email
          </button>
          <a className="button ghost" href="https://www.linkedin.com/in/hem-parekh/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="button ghost" href="https://github.com/Hem1700" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
