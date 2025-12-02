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
    outcome: "Cut data exposure paths; embedded privacy-by-design across services.",
    actions: [
      "Ran DPIAs and embedded data minimization controls into SDLC checkpoints.",
      "Built automated privacy checks; closed data leakage pathways with teams.",
      "Partnered with engineering to enforce retention and access boundaries.",
    ],
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
    tools: ["Burp", "ZAP", "k6", "GitHub Actions"],
    outcome: "8 critical issues fixed; 25+ web apps hardened.",
    actions: [
      "Performed web app testing and prioritized fixes with teams.",
      "Automated scans and performance baselines in CI pipelines.",
      "Authored NIST-27001-ready documentation to support compliance.",
    ],
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
    actions: [
      "Conducted risk assessments mapped to NIST SP 800-53 and ISO/IEC 27001.",
      "Worked with stakeholders to implement mitigating controls.",
      "Documented findings and recommendations for research systems.",
    ],
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
    actions: [
      "Executed vulnerability assessments and penetration tests on internal systems.",
      "Delivered remediation guidance and tracked fixes with engineers.",
      "Supported creation of NIST-27001-compliant documentation.",
    ],
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
    tools: ["SIEM", "IDS/IPS", "SOAR"],
    outcome: "Monitored 100+ devices; improved alert handling and root-cause analysis.",
    actions: [
      "Monitored security telemetry across 100+ devices and responded to alerts.",
      "Performed root-cause analysis on incidents and tuned detections.",
      "Streamlined triage by automating routine checks.",
    ],
  },
};

export default function Experience({ items }) {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="section-header">
          <div>
            <h2>EXPERIENCE</h2>
          </div>
        </div>
        <div className="experience-grid">
          {items.map((item) => {
            const m = meta[item.role] || {};
            const domains = m.domains || [];
            const capabilities = m.capabilities || {};
            const tools = m.tools || [];
            const actions = m.actions || [item.desc];
            return (
              <article className="exp-card" key={`${item.range}-${item.role}`}>
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
                <div className="exp-tools">
                  <span className="exp-tools-label">Tools:</span>
                  <div className="exp-tools-list">
                    {tools.map((t) => (
                      <span className="pill" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <ul className="exp-actions">
                  {actions.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
