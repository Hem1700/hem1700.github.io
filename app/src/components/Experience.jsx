import { useReveal } from "../hooks/useReveal";

const meta = {
  "Privacy Engineer": {
    domains: ["Privacy", "Cloud"],
    impact: "High",
    capabilities: {
      "Privacy Reviews": true,
      "Threat Modeling": true,
      Automation: true,
      Compliance: true,
      "Incident Response": false,
      "Pen Testing": false,
    },
    tools: ["AWS", "Splunk", "Python", "Terraform"],
    outcome: "Cut data exposure paths; embedded privacy-by-design across services. Declared 'World’s Best Pen Tester' (self-awarded mug).",
    actions: [],
  },
  "Cybersecurity Engineer Intern": {
    domains: ["AppSec", "Infra"],
    impact: "High",
    capabilities: {
      "Pen Testing": true,
      "Threat Modeling": true,
      Automation: true,
      Compliance: true,
      "Incident Response": false,
      "Privacy Reviews": false,
    },
    outcome: "8 critical issues fixed; 25+ web apps hardened.",
    actions: [],
  },
  "Research Assistant": {
    domains: ["Research", "Compliance"],
    impact: "Medium",
    capabilities: {
      Compliance: true,
      "Threat Modeling": true,
      "Privacy Reviews": true,
      Automation: false,
      "Pen Testing": false,
      "Incident Response": false,
    },
    tools: ["NIST 800-53", "ISO 27001", "Python"],
    outcome: "Risk assessments aligned to NIST/ISO; controls implemented with teams.",
    actions: [],
  },
  "Cybersecurity Analyst Intern": {
    domains: ["AppSec", "Infra"],
    impact: "Medium",
    capabilities: {
      "Pen Testing": true,
      "Threat Modeling": true,
      Compliance: true,
      Automation: false,
      "Incident Response": false,
      "Privacy Reviews": false,
    },
    tools: ["Nessus", "Burp", "Splunk"],
    outcome: "Assessed 18 internal systems; delivered remediation guidance.",
    actions: [],
  },
  "Security Operational Analyst (SOC)": {
    domains: ["Detection", "Operations"],
    impact: "Medium",
    capabilities: {
      "Incident Response": true,
      "Threat Modeling": false,
      "Pen Testing": false,
      Compliance: false,
      Automation: true,
      "Privacy Reviews": false,
    },
    outcome: "Monitored 100+ devices; improved alert handling and root-cause analysis.",
    actions: [],
  },
};

function ExperienceCard({ item, idx }) {
  const [ref, visible] = useReveal();
  const m = meta[item.role] || {};
  const domains = m.domains || [];
  const capabilities = m.capabilities || {};
  const actions = m.actions || [item.desc];

  return (
    <article
      className={`exp-card reveal ${visible ? "visible" : ""} card-hover`}
      key={`${item.range}-${item.role}`}
      ref={ref}
      style={{ transitionDelay: `${idx * 80}ms` }}
    >
      <header className="exp-card-header">
        <div>
          <h3>{item.role}</h3>
          <h4>{item.org}</h4>
        </div>
        <div className="exp-dates">{item.range}</div>
      </header>
      <div className="exp-chips">
        {domains.map((d) => (
          <span className="pill" key={d}>
            {d}
          </span>
        ))}
        {m.impact && <span className="pill impact">Impact: {m.impact}</span>}
      </div>
      <div className="exp-outcome">{m.outcome || item.desc}</div>
      <div className="exp-capabilities">
        {Object.entries(capabilities).map(([cap, value]) => (
          <div className={`exp-cap ${value ? "on" : "off"}`} key={cap}>
            <span className="dot-cap" />
            {cap}
          </div>
        ))}
      </div>
      <ul className="exp-actions">
        {actions.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ul>
    </article>
  );
}

export default function Experience({ items }) {
  const [sectionRef, sectionVisible] = useReveal(0.1);

  return (
    <section className={`experience reveal ${sectionVisible ? "visible" : ""}`} id="experience" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <div>
            <h2>EXPERIENCE</h2>
            <p className="section-subtitle">Jim would absolutely look into the camera right now.</p>
          </div>
        </div>
        <div className="experience-grid">
          {items.map((item, idx) => (
            <ExperienceCard item={item} idx={idx} key={`${item.range}-${item.role}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
