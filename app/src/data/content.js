export const socialLinks = [
  { href: "https://github.com/Hem1700", icon: "fab fa-github", label: "GitHub" },
  { href: "https://www.linkedin.com/in/hem-parekh/", icon: "fab fa-linkedin-in", label: "LinkedIn" },
  { href: "https://medium.com/@hemparekh1596", icon: "fab fa-medium", label: "Medium" },
  { href: "https://tryhackme.com/r/p/beatmonk", icon: "fas fa-terminal", label: "TryHackMe" },
  { href: "https://app.hackthebox.com/profile/overview", icon: "fas fa-user-secret", label: "HackTheBox" },
];

export const hero = {
  title: "Hello, I'm Hem Parekh.",
  highlight: "Hem Parekh",
  image: "/images/heading_image.webp",
  blurb:
    "Security and Privacy Engineer at Amazon — building autonomous security tools, shipping privacy-by-design controls, and finding vulnerabilities before adversaries do.",
};

export const about = {
  title: "ABOUT ME",
  image: "/images/profile.jpeg",
  text: `I’m Hem Parekh, a Security and Privacy Engineer at Amazon working on Devices & Services. I run privacy threat modeling and design reviews, lead incident response for data exposure events, and build internal tooling to automate privacy-by-design controls across product teams. On the side, I build autonomous security tools — including FORGE, a multi-agent pentesting platform, and ShellScribe, an offline security analysis CLI. I blend engineering discipline with a hacker’s curiosity, and I write up what I find so other defenders can move faster.`,
};

export const experience = [
  {
    range: "Mar 2024 - Present",
    role: "Security and Privacy Engineer",
    org: "Amazon",
    desc:
      "Leading privacy threat modeling and design reviews for Devices & Services features; conducting end-to-end privacy incident response; building MCP-powered tooling to automate privacy review workflows and enforce privacy-by-design guardrails; translating GDPR/CCPA requirements into actionable technical controls across product and engineering teams.",
  },
  {
    range: "May 2024 - Dec 2024",
    role: "Cybersecurity Engineer Intern",
    org: "Toshiba Global Commerce Solution",
    desc:
      "Conducted penetration testing on over 25 web applications, identifying critical vulnerabilities, automating processes, and improving operational efficiency.",
  },
  {
    range: "Jan 2023 - Aug 2023",
    role: "Research Assistant",
    org: "Rochester Institute of Technology",
    desc:
      "Applied knowledge of security standards, including NIST SP 800-53 and ISO/IEC 27001, conducting risk assessments and implementing controls to mitigate risks effectively.",
  },
  {
    range: "Sep 2023 - May 2024",
    role: "Cybersecurity Analyst Intern",
    org: "Langan Engineering and Environmental Services",
    desc:
      "Conducted vulnerability assessments and penetration tests across 18 internal systems, contributing to enterprise security and developing NIST-27001-compliant documentation.",
  },
  {
    range: "June 2021 - July 2022",
    role: "Security Operational Analyst (SOC)",
    org: "RNS Technology",
    desc:
      "Monitored 100+ security devices, responded to threat alerts, and conducted root cause analyses to enhance system security and data integrity.",
  },
];

export const projects = [
  {
    title: "FORGE",
    description:
      "A fully autonomous multi-agent pentesting platform. The Strategic Brain handles semantic app modeling, LLM-powered campaign planning, and attack surface analysis. The Tactical Swarm runs ReAct-driven agents (recon, probe, deep exploit, evasion, fuzzing) that reason and adapt mid-execution using HTTP requests and Docker-hosted security tools (sqlmap, ffuf, nikto). Ships a Live Exploitation Engine: generates weaponized exploit scripts, executes them in isolated Docker containers against real targets, and delivers LLM-judged verdicts (confirmed / failed / inconclusive) with user override. Discovered 226 vulnerabilities in a real-world CLI project during initial testing. Full React dashboard with live WebSocket streaming, CLI tool, and human-in-the-loop gates throughout.",
    href: "https://github.com/Hem1700/forge",
    tags: ["Security", "AI", "Automation"],
  },
  {
    title: "Raven",
    description:
      "An AI-powered offensive security research platform combining autonomous exploit development with intelligent binary analysis. Raven uses a multi-agent system (Scout, Analyst, Weaponizer, Validator) to automate the full security research lifecycle — from binary recon and vulnerability discovery to exploit generation and validation. Built for CTF players, red teamers, and security researchers.",
    href: "https://github.com/Hem1700/raven",
    tags: ["Security", "AI", "Toolkit"],
  },
  {
    title: "Phish Analyzer Tool",
    description:
      "A patented desktop application designed to analyze and secure against phishing emails, featuring sandbox configurations, advanced security mechanisms, and a user-friendly interface to enhance threat detection and response.",
    href: "https://github.com/Hem1700/sita",
    tags: ["Security", "Desktop"],
  },
  {
    title: "Secure Communication Using Image Exif Data",
    description:
      "Explored the innovative use of image Exif data for covert communication. Developed methodologies for securely embedding and transmitting sensitive information through image metadata.",
    href: "https://drive.google.com/file/d/1WcmhCJQN_b8jad3dQoGplBmO6EN1leYZ/view?usp=sharing",
    tags: ["Research", "Security"],
  },
  {
    title: "Architecture and Advancement in Virtualization of TPM",
    description:
      "Explored the architecture and advancements of virtual Trusted Platform Modules (vTPMs) in virtual and cloud environments. The project highlighted security flaws, key-sharing mechanisms, and the migration challenges associated with vTPMs, proposing solutions for enhanced security and trust in virtualization.",
    href: "https://drive.google.com/file/d/1Y2vyRjVBgjy6QB9_qn_taJUrYCodehHT/view?usp=sharing",
    tags: ["Research", "Cloud"],
  },
  {
    title: "Quantum Key Distribution",
    description:
      "This project delves into the rapidly evolving field of quantum cryptography, focusing on Quantum Key Distribution (QKD). It explores innovative methods to increase QKD transmission distance while maintaining secure data transmission, addressing challenges such as key generation rates, distance limitations, and potential vulnerabilities.",
    href: "https://drive.google.com/file/d/17vZRyJyKYX7CmUgC1iBQf4buEsBgoC30/view?usp=sharing",
    tags: ["Research", "Cryptography"],
  },
  {
    title: "SecTool: The Comprehensive Cybersecurity Toolkit",
    description:
      "SecTool is a versatile cybersecurity toolkit with features like keylogging, OSINT, payload generation, hash cracking, network analysis, social engineering tools, web vulnerability detection, and more. It’s a comprehensive solution for security testing and digital defense.",
    href: "https://github.com/Hem1700/sectool",
    tags: ["Security", "Toolkit"],
  },
  {
    title: "Website Crawler",
    description:
      "A lightweight and efficient web crawler designed to scrape, analyze, and extract data from websites, enabling seamless data collection for various use cases.",
    href: "https://github.com/Hem1700/Website-crawler",
    tags: ["Web", "Automation"],
  },
  {
    title: "ShellScribe",
    description:
      "Offline-first, policy-gated security testing framework with modular plugins, reproducible runs, and evidence-bound reporting for authorized research workflows.",
    href: "https://github.com/Hem1700/shellscribe",
    tags: ["Security", "Toolkit", "Automation"],
  },
];

export const certifications = [
  {
    title: "CompTIA Security+",
    details: "Issued Oct 2024 by CompTIA - Expires Oct 2027",
    href: "https://www.credly.com/badges/7270d02f-a0d1-483a-8000-8ebd2b628391/linked_in_profile",
    domain: "Security",
    issuer: "CompTIA",
  },
  {
    title: "CompTIA Pentest+",
    details: "Issued Oct 2024 by CompTIA - Expires Oct 2027",
    href: "https://www.credly.com/badges/d93ed2a7-c86b-42ec-b4e4-7a7d2a2cd972/linked_in_profile",
    domain: "Security",
    issuer: "CompTIA",
  },
  {
    title: "CompTIA CySA+",
    details: "Issued Nov 2024 by CompTIA - Expires Nov 2027",
    href: "https://www.credly.com/badges/d6a9802e-23b8-4a0a-83e1-edc7e89a457c/linked_in_profile",
    domain: "Security",
    issuer: "CompTIA",
  },
  {
    title: "CompTIA Network Vulnerability Assessment Professional (CVNP)",
    details: "Issued Oct 2024 by CompTIA - Expires Oct 2027",
    href: "https://www.credly.com/badges/59404c7e-7680-45a9-8622-2a76f603c0c7/linked_in_profile",
    domain: "Security",
    issuer: "CompTIA",
  },
  {
    title: "CompTIA Security Analytics Professional (CSAP)",
    details: "Issued Nov 2024 by CompTIA - Expires Nov 2027",
    href: "https://www.credly.com/badges/8c6cca3e-0eb1-4920-8eff-826998743336/linked_in_profile",
    domain: "Security",
    issuer: "CompTIA",
  },
  {
    title: "CompTIA Network Security Professional (CNSP)",
    details: "Issued Nov 2024 by CompTIA - Expires Nov 2027",
    href: "https://www.credly.com/badges/08f2dd46-295b-402c-bc67-29189bea83ff/linked_in_profile",
    domain: "Security",
    issuer: "CompTIA",
  },
  {
    title: "ICS2 Certified in Cybersecurity (CC)",
    details: "Issued Oct 2024 - Expires Oct 2027",
    href: "https://www.credly.com/badges/c16c4d43-1e84-44ab-bebe-38d747073ccb/linked_in_profile",
    domain: "Security",
    issuer: "ISC2",
  },
  {
    title: "AWS Certified Cloud Practitioner (CCP)",
    details: "Issued Mar 2024 - Expires Mar 2027",
    href: "https://www.credly.com/badges/6a0d691b-b3b2-4d44-addb-f2b5b171e83d/linked_in_profile",
    domain: "Cloud",
    issuer: "AWS",
  },
  {
    title: "Microsoft Azure Security, Compliance and Identity Fundamentals (SC-900)",
    details: "Issued Sep 2024 by Microsoft - No expiration",
    href: "https://learn.microsoft.com/api/credentials/share/en-us/HemParekh-9873/BD2B5E59D28A7F54?sharingId=1D33B191273E7834",
    domain: "Cloud",
    issuer: "Microsoft",
  },
  {
    title: "Microsoft Azure Fundamentals (AZ-900)",
    details: "Issued Sep 2024 by Microsoft - No expiration",
    href: "https://learn.microsoft.com/api/credentials/share/en-gb/HemParekh-9873/8B3B97F4E45B9F2C?sharingId",
    domain: "Cloud",
    issuer: "Microsoft",
  },
  {
    title: "CCNA: Introduction to Networks",
    details: "Issued Jun 2020 by Cicso - No expiration",
    href: "https://www.credly.com/badges/be753401-bd44-4d09-81d7-33af049e6fad/linked_in_profile",
    domain: "Networking",
    issuer: "Cisco",
  },
  {
    title: "Cisco: Endpoint Security",
    details: "Issued Nov 2024 by Cicso - No expiration",
    href: "https://www.credly.com/badges/9e4309a6-089f-4259-8333-c9c501666c77/linked_in_profile",
    domain: "Security",
    issuer: "Cisco",
  },
];

export const blogIntro = {
  title: "Ops Log // Latest Signals",
  subtitle: "Field notes from exploit labs, CVE hunts, and defensive experiments.",
  social: [
    { href: "#", icon: "fab fa-twitter" },
    { href: "#", icon: "fab fa-linkedin-in" },
    { href: "#", icon: "fab fa-github" },
    { href: "#", icon: "fab fa-instagram" },
  ],
};

export const blogs = [
  {
    slug: "llm_assisted_binary_diffing_blog",
    title: "LLM-Assisted Binary Diffing: Finding 1-Days Before PoCs Drop",
    href: "/blog/llm_assisted_binary_diffing_blog",
    excerpt:
      "When a vendor ships a security patch, the binary tells the story. LLMs compress patch diffing from days to hours; this post walks the full pipeline from acquisition to validation.",
    date: "February 8, 2026",
    readTime: "8 min read",
    category: "Research Papers",
  },
  {
    slug: "llm_multistage_attacks_technical_breakdown_full",
    title: "On the Feasibility of Using LLMs to Execute Multistage Network Attacks – A Technical Breakdown",
    href: "/blog/llm_multistage_attacks_technical_breakdown_full",
    excerpt:
      "A technical breakdown of why LLMs struggle with multistage network attacks and how the Incalmo framework changes outcomes for autonomous red teaming.",
    date: "January 20, 2026",
    readTime: "25 min read",
    category: "Research Papers",
  },
  {
    slug: "villager_inside_out",
    title: "Villager, Inside Out: FastAPI control plane + LLM task graph + MCP tool runner (with code)",
    href: "/blog/villager_inside_out",
    excerpt:
      "A defender-focused teardown of the villager agent stack: FastAPI control plane, task-graph orchestration, MCP tool execution, and the risk model around exposed tools.",
    date: "January 6, 2026",
    readTime: "12 min read",
    category: "Research Papers",
  },
  {
    slug: "kernel_surface_audit_blog",
    title: "Who Can Touch Your Kernel? Auditing /boot/vmlinuz-* on Linux",
    href: "/blog/kernel_surface_audit_blog",
    excerpt:
      "A defender’s walkthrough on who should vs. who can modify your kernel image, dangerous root patterns, and a Python-based audit checklist to watch /boot/vmlinuz-*.",
    date: "December 8, 2025",
    readTime: "7 min read",
    category: "Research Papers",
  },
  {
    slug: "cve-2022-26318-re-blog",
    title: "Reverse-Engineering CVE-2022-26318 (WatchGuard Firebox/XTM): From Network Trace to Root Cause (Non-Weaponized)",
    href: "/blog/cve-2022-26318-re-blog",
    excerpt:
      "Defender-focused RE of CVE-2022-26318: how the /agent/login path reaches wgagent, SAX parsing overflow mechanics, watchpoint-driven proof, and patch/detection guidance without weaponized details.",
    date: "December 28, 2025",
    readTime: "10 min read",
    category: "CVEs/Libraries",
  },
  {
    slug: "react2shell-toy-lab",
    title: "From React2Shell to Toy Labs: Understanding Insecure Deserialization with a Tiny \"Fake Flight\" Server",
    href: "/blog/react2shell-toy-lab",
    excerpt:
      "Build a tiny \"fake Flight\" Node lab to see how insecure deserialization and thenable handling can lead to RCE, plus a safer variant and takeaways that mirror React2Shell.",
    date: "December 8, 2025",
    readTime: "8 min read",
    category: "Research Papers",
  },
  {
    slug: "transient_scheduler_attacks_tsa_blog",
    title: "Transient Scheduler Attacks on CPUs: Exploiting AMD’s New Microarchitectural Leak",
    href: "/blog/transient_scheduler_attacks_tsa_blog",
    excerpt:
      "AMD’s new TSA class abuses false completions in the instruction scheduler to leak data across privilege boundaries. Here’s what TSA is, how an attacker could exploit it, a tiny timing lab to feel the leak, and what defenders should do.",
    date: "December 4, 2025",
    readTime: "8 min read",
    category: "Research Papers",
  },
  {
    slug: "firmware_llm_annotator",
    title: "Firmware Exploration: LLM as Your Annotator",
    href: "/blog/firmware_llm_annotator",
    excerpt:
      "How to use an LLM as a helper for firmware reversing: triaging strings, summarizing decompiled functions, and annotating config blobs while you stay in control of the analysis.",
    date: "November 30, 2025",
    readTime: "5 min read",
    category: "Research Papers",
  },
  {
    slug: "1001",
    title: "CVE-2024–1001",
    href: "/blog/1001",
    excerpt:
      "Kubernetes relies heavily on Role-Based Access Control (RBAC) to manage permissions. However, in early 2024, CVE-2024–1001 was disclosed, revealing how misconfigured RBAC rules in Kubernetes could allow attackers to gain full control over a cluster. This vulnerability emphasizes the risks of poorly defined access policies.",
    date: "September 8, 2024",
    readTime: "3 min read",
    category: "CVEs/Libraries",
  },
  {
    slug: "0012",
    title: "CVE-2024–0012",
    href: "/blog/0012",
    excerpt:
      "CVE-2024–0012, known as the HTTP/2 Rapid Reset Attack, was disclosed, affecting major web servers like Apache and Nginx. This denial-of-service (DoS) vulnerability exploits HTTP/2’s stream management system by abusing the RST_STREAM frame. By overwhelming the server with rapid stream resets, attackers can exhaust resources and disrupt services.",
    date: "September 8, 2024",
    readTime: "3 min read",
    category: "CVEs/Libraries",
  },
  {
    slug: "40982",
    title: "CVE-2022–40982",
    href: "/blog/40982",
    excerpt:
      "A critical vulnerability, CVE-2022–40982, dubbed Downfall, was disclosed. This vulnerability affects Intel x86–64 processors and exploits speculative execution to access sensitive data stored in vector registers. It impacts both consumer CPUs and server-grade Xeon processors, allowing attackers with local access to bypass security boundaries and potentially extract confidential information like encryption keys or passwords.",
    date: "September 8, 2024",
    readTime: "3 min read",
    category: "CVEs/Libraries",
  },
  {
    slug: "cow",
    title: "CVE-2016–5195",
    href: "/blog/cow",
    excerpt:
      "In 2016, a critical vulnerability in the Linux kernel, known as Dirty Cow (CVE-2016–5195), was disclosed. This privilege escalation flaw exploited a race condition in the kernel’s memory management system, allowing attackers to write to read-only memory mappings. The name “Dirty Cow” comes from its exploitation of the Copy-On-Write (COW) mechanism in Linux.",
    date: "September 8, 2024",
    readTime: "3 min read",
    category: "CVEs/Libraries",
  },
  {
    slug: "symlinks",
    title: "Symbolic Links (Symlinks) in Linux",
    href: "/blog/symlinks",
    excerpt:
      "TIn Linux, symbolic links are essentially shortcuts that point to other files or directories. They allow you to reference a file or directory without duplicating its contents. To know more read the blog.",
    date: "September 8, 2024",
    readTime: "3 min read",
    category: "Research Papers",
  },
  {
    slug: "23397",
    title: "CVE-2023–23397",
    href: "/blog/23397",
    excerpt:
      "This blog will break down the ROBOT attack, provide examples, and discuss mitigations to protect vulnerable systems.",
    date: "September 8, 2024",
    readTime: "3 min read",
    category: "CVEs/Libraries",
  },
  {
    slug: "0160",
    title: "CVE-2014-0160",
    href: "/blog/0160",
    excerpt:
      "Heartbleed’s simplicity and devastating impact exposed the internet’s underlying fragility, and despite extensive efforts to patch affected systems, its ghost still haunts forgotten and neglected systems today. Let’s explore the technical details of this vulnerability, the global chaos it caused, and why it’s still relevant.",
    date: "September 8, 2024",
    readTime: "3 min read",
    category: "CVEs/Libraries",
  },
  {
    slug: "11882",
    title: "CVE-2017-11882",
    href: "/blog/11882",
    excerpt:
      "One of the most notorious among these is CVE-2017–11882, commonly known as the Microsoft Office Memory Corruption Vulnerability. Originating in 2000, this vulnerability remains a frequently exploited entry point for attackers worldwide, from nation-state actors to cyber criminals.",
    date: "October 26 2024",
    readTime: "3 min read",
    category: "CVEs/Libraries",
  },
  {
    slug: "robot",
    title: "ROBOT (Return of Bleichenbacher’s Oracle Threat) Attack",
    href: "/blog/robot",
    excerpt:
      "This blog will break down the ROBOT attack, provide examples, and discuss mitigations to protect vulnerable systems.",
    date: "September 8, 2024",
    readTime: "3 min read",
    category: "CVEs/Libraries",
  },
  {
    slug: "poodle",
    title: "ZOMBIE POODLE and GOLDENDOODLE ATTACKS",
    href: "/blog/poodle",
    excerpt:
      "This blog provides an in-depth look at Zombie Poodle and Goldendoodle attacks, how they work, and their implications for modern cybersecurity.",
    date: "September 6, 2024",
    readTime: "6 min read",
    category: "CVEs/Libraries",
  },
];

// ============================================================
// HEM-OS additions — new content for the OS metaphor.
// All EXISTING exports above (socialLinks, hero, about, experience,
// projects, certifications, blogIntro, blogs) are unchanged.
// ============================================================

export const identity = {
  name: "Hem Parekh",
  role: "Security and Privacy Engineer",
  current: "Amazon",
  location: "United States",
  tz: "PT",
  email: "hemparekhportfolio@gmail.com",
};

export const manifesto = [
  { k: "BUILD:", v: "tools that ship, not slides." },
  { k: "WRITE:", v: "defenders move faster when findings are public." },
  { k: "HUNT:",  v: "every environment tells a story — read it before reacting." },
  { k: "LEARN:", v: "curiosity-d runs continuously." },
];

export const stats = [
  { n: String(projects.length),        l: "projects" },
  { n: String(blogs.length),           l: "writeups" },
  { n: String(certifications.length),  l: "certs" },
  { n: "1",                            l: "patent" },
];

// `now` — currently-focused items. Pure flavor; user edits.
export const now = [
  "Building MCP-powered privacy review tooling at Amazon",
  "Reverse-engineering CVE-2022-26318 (WatchGuard Firebox) for the next post",
  "Iterating on FORGE — autonomous multi-agent pentesting",
  "Reading: AMD-TSA microcode advisory + transient scheduler attacks",
];

// Short two-letter / four-letter project codes used by Files app.
// Map by project title — falls back to first chars of title in Files component.
export const projectMeta = {
  "FORGE": { code: "FRG", status: "ACTIVE",   metric: "226 vulns surfaced",   stack: ["React", "Python", "FastAPI", "Docker", "WebSocket"] },
  "Raven": { code: "RVN", status: "ACTIVE",   metric: "multi-agent platform", stack: ["Python", "LLM", "Binary RE"] },
  "Phish Analyzer Tool": { code: "SITA", status: "PATENTED", metric: "patented design", stack: ["Desktop", "Sandbox"] },
  "Secure Communication Using Image Exif Data": { code: "EXIF", status: "RESEARCH", metric: "covert channel paper", stack: ["Image", "Crypto", "Steganography"] },
  "Architecture and Advancement in Virtualization of TPM": { code: "vTPM", status: "RESEARCH", metric: "research paper", stack: ["Virtualization", "TPM", "Cloud"] },
  "Quantum Key Distribution": { code: "QKD", status: "RESEARCH", metric: "QKD distance study", stack: ["Quantum", "Crypto"] },
  "SecTool: The Comprehensive Cybersecurity Toolkit": { code: "SEC", status: "SHIPPED", metric: "all-in-one toolkit", stack: ["Python", "Toolkit"] },
  "Website Crawler": { code: "WCR", status: "SHIPPED", metric: "scraping utility", stack: ["Python", "Web"] },
  "ShellScribe": { code: "SHL", status: "ACTIVE", metric: "policy-gated runner", stack: ["Python", "Plugin", "CLI"] },
};

// Year + issuer extracted from existing `details` strings on certifications.
// Used by Timeline app's cert grid. Order mirrors the certifications array.
export const certMeta = certifications.map((c) => {
  const issuerMatch = c.details.match(/by\s+([A-Za-z0-9\s\-&/]+?)(?:\s*-|\s*$)/);
  const yearMatch = c.details.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d{4}/);
  return {
    title: c.title,
    iss: c.issuer || (issuerMatch ? issuerMatch[1].trim() : "—"),
    y: yearMatch ? yearMatch[0] : "—",
    href: c.href,
  };
});

// CVE entries derived from blog posts whose titles look like CVEs.
// Used by Terminal `cves` and `cat cve <id>` commands.
function deriveCveEntries() {
  const isCveLike = (t) => t.toUpperCase().includes("CVE");
  return blogs
    .filter((b) => isCveLike(b.title))
    .map((b) => {
      const idMatch = b.title.match(/CVE[-–](\d{4})[-–]?(\d+)/i);
      const id = idMatch ? `CVE-${idMatch[1]}-${idMatch[2]}` : b.slug.toUpperCase();
      const yearMatch = idMatch ? idMatch[1] : (b.date.match(/\d{4}/) || ["—"])[0];
      // Heuristic target/class derivation — first noun in excerpt + a static class.
      const target = (b.excerpt.split(/[.,]/)[0] || "Unknown").slice(0, 40);
      return {
        id,
        target,
        class: b.category || "Unknown",
        year: yearMatch,
        role: "study",
        slug: b.slug,
      };
    });
}

export const cves = deriveCveEntries();

// Social handles — pulled from socialLinks; supplemented for Mail app.
export const socialHandles = socialLinks.map((s) => ({
  label: s.label,
  href: s.href,
  handle: s.label === "GitHub" ? "@Hem1700" :
          s.label === "LinkedIn" ? "/in/hem-parekh" :
          s.label === "Medium" ? "@hemparekh1596" :
          s.label === "TryHackMe" ? "/p/beatmonk" :
          s.label === "HackTheBox" ? "/profile" : "—",
}));
