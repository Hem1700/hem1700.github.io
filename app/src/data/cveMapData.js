// Sample, lightweight CVE hierarchy for the zoomable mind-map demo.
// In production you would generate this from NVD/NIST feeds and your own aggregations.

export const sampleData = [
  {
    id: "cloud",
    name: "Cloud",
    metrics: { total: 420, kev: 18, maxCvss: 9.8, latestYear: 2025 },
    technologies: [
      {
        id: "aws-iam",
        name: "AWS IAM",
        metrics: { total: 74, kev: 4, maxCvss: 9.0, latestYear: 2025 },
        clusters: [
          {
            id: "2025-critical",
            label: "2025 · Critical",
            kind: "severity",
            metrics: { total: 4, kev: 1, maxCvss: 9.8, latestYear: 2025 },
            cves: [
              {
                id: "CVE-2025-10010",
                title: "AWS IAM policy wildcard privilege escalation",
                severity: "Critical",
                cvss: 9.8,
                year: 2025,
                kev: true,
                summary: "Wildcard principal on cross-account role enables unintended assumeRole and lateral movement.",
                references: ["https://example.com/advisory/iam-2025-10010"],
              },
              {
                id: "CVE-2025-12001",
                title: "IAM session tagging bypass",
                severity: "High",
                cvss: 8.6,
                year: 2025,
                kev: false,
                summary: "Session tags not validated under certain SAML flows allow privilege creep.",
                references: ["https://example.com/blog/iam-session-tagging"],
              },
            ],
          },
          {
            id: "2024-high",
            label: "2024 · High",
            kind: "severity",
            metrics: { total: 3, kev: 0, maxCvss: 8.2, latestYear: 2024 },
            cves: [
              {
                id: "CVE-2024-41001",
                title: "Conditional policy logic bypass",
                severity: "High",
                cvss: 8.2,
                year: 2024,
                kev: false,
                summary: "Malformed condition key evaluation permits unintended resource access.",
                references: ["https://example.com/advisory/iam-41001"],
              },
            ],
          },
        ],
      },
      {
        id: "kubernetes",
        name: "Kubernetes",
        metrics: { total: 112, kev: 7, maxCvss: 9.8, latestYear: 2025 },
        clusters: [
          {
            id: "2025-priv-esc",
            label: "2025 · PrivEsc",
            kind: "cwe",
            metrics: { total: 5, kev: 1, maxCvss: 9.4, latestYear: 2025 },
            cves: [
              {
                id: "CVE-2025-21001",
                title: "kubelet RunPodSandbox path traversal",
                severity: "High",
                cvss: 9.0,
                year: 2025,
                kev: true,
                summary: "Malicious runtime config enables hostPath escape via pod sandbox setup.",
                references: ["https://example.com/k8s/runpodsandbox"],
              },
              {
                id: "CVE-2025-21005",
                title: "API server authn cache poisoning",
                severity: "High",
                cvss: 8.8,
                year: 2025,
                kev: false,
                summary: "Race in authenticator cache allows replay of stale tokens during fail-open windows.",
                references: ["https://example.com/k8s/authn-cache"],
              },
            ],
          },
          {
            id: "2024-network",
            label: "2024 · Net",
            kind: "year",
            metrics: { total: 4, kev: 0, maxCvss: 7.5, latestYear: 2024 },
            cves: [
              {
                id: "CVE-2024-32001",
                title: "Ingress controller header smuggling",
                severity: "Medium",
                cvss: 6.5,
                year: 2024,
                kev: false,
                summary: "Improper canonicalization permits smuggling past backend auth.",
                references: ["https://example.com/k8s/ingress-headers"],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "os",
    name: "Operating Systems",
    metrics: { total: 610, kev: 23, maxCvss: 10, latestYear: 2025 },
    technologies: [
      {
        id: "linux-kernel",
        name: "Linux Kernel",
        metrics: { total: 380, kev: 17, maxCvss: 10, latestYear: 2025 },
        clusters: [
          {
            id: "2025-overflow",
            label: "2025 · Overflow",
            kind: "cwe",
            metrics: { total: 6, kev: 2, maxCvss: 9.8, latestYear: 2025 },
            cves: [
              {
                id: "CVE-2025-12020",
                title: "netfilter nft_payload buffer overflow",
                severity: "Critical",
                cvss: 9.8,
                year: 2025,
                kev: true,
                summary: "Bounds check omission in nft_payload leads to OOB write from crafted netlink.",
                references: ["https://example.com/kernel/nft_payload"],
              },
              {
                id: "CVE-2025-14001",
                title: "io_uring SQE refcount underflow",
                severity: "High",
                cvss: 8.4,
                year: 2025,
                kev: false,
                summary: "Race on submission queue entries permits UAF and potential LPE.",
                references: ["https://example.com/kernel/io_uring"],
              },
            ],
          },
          {
            id: "2024-mem",
            label: "2024 · Memory Safety",
            kind: "year",
            metrics: { total: 4, kev: 0, maxCvss: 7.8, latestYear: 2024 },
            cves: [
              {
                id: "CVE-2024-33010",
                title: "xfrm policy double free",
                severity: "High",
                cvss: 7.8,
                year: 2024,
                kev: false,
                summary: "Error path double free reachable via malformed XFRM policy update.",
                references: ["https://example.com/kernel/xfrm-double-free"],
              },
            ],
          },
        ],
      },
      {
        id: "openssl",
        name: "OpenSSL",
        metrics: { total: 88, kev: 3, maxCvss: 9.8, latestYear: 2025 },
        clusters: [
          {
            id: "2025-crypto",
            label: "2025 · Crypto",
            kind: "cwe",
            metrics: { total: 2, kev: 0, maxCvss: 8.0, latestYear: 2025 },
            cves: [
              {
                id: "CVE-2025-20001",
                title: "PKCS#7 parsing OOB read",
                severity: "High",
                cvss: 7.5,
                year: 2025,
                kev: false,
                summary: "Unbounded length handling in PKCS#7 CMS parsing can leak heap bytes.",
                references: ["https://example.com/openssl/pkcs7"],
              },
            ],
          },
          {
            id: "2024-crypto",
            label: "2024 · Crypto",
            kind: "year",
            metrics: { total: 1, kev: 0, maxCvss: 7.4, latestYear: 2024 },
            cves: [
              {
                id: "CVE-2024-35010",
                title: "DTLS replay window bypass",
                severity: "Medium",
                cvss: 7.4,
                year: 2024,
                kev: false,
                summary: "Logic flaw in replay window advancement allows limited packet replay.",
                references: ["https://example.com/openssl/dtls-replay"],
              },
            ],
          },
        ],
      },
    ],
  },
];

export function buildCveHierarchy() {
  // Convert the domain/tech/cluster/cve model into a d3.hierarchy-friendly tree.
  return {
    name: "CVE Map",
    children: sampleData.map((domain) => ({
      ...domain,
      name: domain.name,
      children: domain.technologies.map((tech) => ({
        ...tech,
        name: tech.name,
        children: tech.clusters.map((cluster) => ({
          ...cluster,
          name: cluster.label,
          children: cluster.cves.map((cve) => ({
            ...cve,
            name: `${cve.id}`,
            value: cve.cvss || 1, // size hint
            nodeType: "cve",
          })),
          nodeType: "cluster",
        })),
        nodeType: "technology",
      })),
      nodeType: "domain",
    })),
    nodeType: "root",
  };
}

export const cveMapSummary = {
  headline: "Drag the constellation, then match each case file to the correct CVE node.",
  datasetHint: "Demo dataset; wire NVD feeds + your own aggregations for production.",
};

// Build a simple hierarchy from CVE-like entries (id, title, year, severity, href)
export function buildBlogCveHierarchy(entries = [], mode = "year") {
  const keyFor = (entry) => {
    if (mode === "severity") return entry.severity || "Info";
    return entry.year || "Unknown";
  };

  const grouped = entries.reduce((acc, entry) => {
    const key = keyFor(entry);
    if (!acc[key]) acc[key] = [];
    acc[key].push(entry);
    return acc;
  }, {});

  const sorter = mode === "severity"
    ? (a, b) => a.localeCompare(b)
    : (a, b) => b.localeCompare(a);

  return {
    name: "CVE Map",
    children: Object.keys(grouped)
      .sort(sorter)
      .map((key) => ({
        id: `${mode}-${key}`,
        name: key,
        nodeType: "cluster",
        children: grouped[key].map((cve) => ({
          ...cve,
          name: cve.id || cve.title,
          value: 1,
          nodeType: "cve",
        })),
      })),
  };
}

export function buildFilteredHierarchy(filters = {}) {
  const {
    severities = ["Critical", "High", "Medium", "Low"],
    minCvss = 0,
    minYear = 0,
    kevOnly = false,
  } = filters;

  const matches = (cve) => {
    const severityOk = severities.includes(cve.severity);
    const yearOk = Number(cve.year) >= Number(minYear || 0);
    const cvssOk = Number(cve.cvss || 0) >= Number(minCvss || 0);
    const kevOk = kevOnly ? Boolean(cve.kev) : true;
    return severityOk && yearOk && cvssOk && kevOk;
  };

  const domains = sampleData
    .map((domain) => {
      const technologies = domain.technologies
        .map((tech) => {
          const clusters = tech.clusters
            .map((cluster) => {
              const cves = (cluster.cves || []).filter(matches);
              if (!cves.length) return null;
              return { ...cluster, cves };
            })
            .filter(Boolean);
          if (!clusters.length) return null;
          return { ...tech, clusters };
        })
        .filter(Boolean);
      if (!technologies.length) return null;
      return { ...domain, technologies };
    })
    .filter(Boolean);

  return {
    name: "CVE Map",
    children: domains.map((domain) => ({
      ...domain,
      name: domain.name,
      children: domain.technologies.map((tech) => ({
        ...tech,
        name: tech.name,
        children: tech.clusters.map((cluster) => ({
          ...cluster,
          name: cluster.label,
          children: cluster.cves.map((cve) => ({
            ...cve,
            name: `${cve.id}`,
            value: cve.cvss || 1,
            nodeType: "cve",
          })),
          nodeType: "cluster",
        })),
        nodeType: "technology",
      })),
      nodeType: "domain",
    })),
    nodeType: "root",
  };
}

export function findCveById(id) {
  for (const domain of sampleData) {
    for (const tech of domain.technologies) {
      for (const cluster of tech.clusters) {
        for (const cve of cluster.cves) {
          if (cve.id.toLowerCase() === id.toLowerCase()) {
            return cve;
          }
        }
      }
    }
  }
  return null;
}
