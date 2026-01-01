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
          <div className="eyebrow">Lets talk</div>
          <h2 className="section-title">Signal received. Lets build secure systems.</h2>
          <p className="contact-blurb">
            Ready to collaborate on security engineering, privacy, or threat research? Drop a note and we will map the next move.
          </p>
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
