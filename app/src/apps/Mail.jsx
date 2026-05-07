import { identity, socialHandles } from "../data/content";

export default function Mail() {
  return (
    <div className="am">
      <div className="sd">
        <div className="gl">Mailbox</div>
        <div className="it on">Inbox <span className="ct">1</span></div>
        <div className="it">Sent</div>
        <div className="gl">Channels</div>
        {socialHandles.map((s) => (
          <a
            key={s.label}
            className="it"
            href={s.href}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            {s.label}<span className="ct">{s.handle}</span>
          </a>
        ))}
      </div>
      <div className="mn">
        <h1>Get in touch.</h1>
        <div className="fr">From: hem@hemos · To: you@anywhere</div>
        <div className="bd">
          <p>
            Fastest path:{" "}
            <a href={`mailto:${identity.email}`} style={{ color: "var(--acc2)" }}>
              {identity.email}
            </a>
          </p>
          <p>
            I'm in {identity.location} ({identity.tz}). Open to: security
            research collabs, hiring conversations, paper reviews, and lab tours.
          </p>
          <p style={{ color: "var(--mut)", fontFamily: "var(--mono)", fontSize: 12 }}>
            // PGP key on request. I read DMs eventually.
          </p>
        </div>
        <div className="sg">
          {socialHandles.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
              <span>{s.label}</span><span>{s.handle} →</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
