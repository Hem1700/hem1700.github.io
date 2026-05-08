# HEM-OS — Portfolio as a Desktop OS

> A macOS-inspired interactive portfolio for **Hem Parekh**, Security & Privacy Engineer.  
> Live at **[hem1700.github.io](https://hem1700.github.io)**

```
  ▒ HEM-OS 1.7.0
  curiosity-d ✓
  43 pentests
  18 posts
  12 certs
  1  patent
  ∞  questions
```

---

## What it is

HEM-OS is a portfolio site that doubles as a security education platform. It's built to look and feel like a desktop OS — complete with draggable windows, a Dock, Spotlight search, and a suite of "apps" that let visitors explore Hem's background and actually learn offensive/defensive security techniques.

---

## Apps

| App | Description |
|-----|-------------|
| **Readme** | Bio, skills, and quick links — the splash screen |
| **Notes** | Blog posts on security research, hardware hacking, privacy engineering |
| **Terminal** | A real-ish terminal with custom commands (`cat cve`, `whoami`, `ls`, etc.) |
| **Exploit Lab** | CVE analysis tool powered by Claude AI — attacker & defender views, CVSS, detection rules, patch analysis |
| **Attack Range** | Interactive exploitation playground — 8 vulnerable scenarios you actually exploit |
| **Mail** | Contact form |
| **Timeline** | Career arc |
| **Files** | Project writeups and certifications |
| **System** | About this OS / tech stack |
| **Games** | Easter eggs |
| **Finder** | Site map |

---

## Stack

- **React 18** + **Vite 5** — SPA with file-based routing via React Router 6
- **D3 v7** + **Three.js** — visualizations inside Exploit Lab and Attack Range
- **GitHub Pages** — deployed from the `main` branch root (no separate `gh-pages` branch)
- **Anthropic Claude API** — Exploit Lab and Attack Range call the API directly from the browser using `anthropic-dangerous-direct-browser-access`; the user's API key is stored only in `sessionStorage` and never sent to any backend

---

## Local development

```bash
# Clone
git clone https://github.com/Hem1700/hem1700.github.io.git
cd hem1700.github.io/app

# Install dependencies
npm install

# Start dev server (hot reload)
npm run dev
# → http://localhost:5173
```

The root `index.html` / `assets/` are the *deployed* build artifacts — you don't need them for local development. Work entirely inside `app/`.

---

## Project structure

```
.
├── app/                    # React source (Vite project)
│   ├── src/
│   │   ├── apps/           # One file per "app" (ExploitLab, AttackRange, Terminal, …)
│   │   ├── data/           # Static data: posts, CVE lists, app registry
│   │   ├── hooks/          # useDesktop — window manager state
│   │   ├── shell/          # Desktop, MobileShell, Window, Dock, Topbar, Spotlight
│   │   └── styles/
│   │       └── theme.css   # All styles (~5 900 lines, CSS variables, no framework)
│   └── vite.config.js
├── docs/                   # Markdown source for blog posts
├── index.html              # Built output (committed for GitHub Pages)
├── assets/                 # Built JS/CSS bundles
└── deploy.sh               # Build → copy to root → git push  (gitignored — local only)
```

---

## Deploying

The site deploys by building the React app and committing the output to the repo root (GitHub Pages serves from `main:/`).

```bash
# From repo root — requires the local deploy.sh (not committed)
bash deploy.sh
```

`deploy.sh` runs `npm run build` inside `app/`, copies `app/dist/*` to the repo root, then does `git add . && git commit -m "Deploy React build" && git push`.

---

## Exploit Lab & Attack Range — security notice

Both apps make **direct browser-to-Anthropic API requests**. No data is proxied through any server.

- Your API key is held only in `sessionStorage` for the duration of the browser tab's life.
- No key material is logged, stored in `localStorage`, or sent anywhere other than `api.anthropic.com`.
- All "vulnerable" scenarios in Attack Range are simulated entirely in JavaScript — no real servers are involved.
- Example credentials that appear as part of scenario data (e.g., the SSRF AWS metadata response) are clearly labeled `[REDACTED-LAB-*]` and are not real.

See [SECURITY.md](SECURITY.md) for the responsible disclosure policy.

---

## License

MIT — see [LICENSE](LICENSE).
