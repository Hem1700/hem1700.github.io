# HEM-OS UI Revamp Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the current portfolio React SPA with a "HEM-OS" desktop-OS-metaphor SPA — fake desktop with dock, draggable windows, ⌘K spotlight, 9 apps mapping to existing portfolio sections, and a parallel mobile shell.

**Architecture:** Single React 18 + React Router 6 + Vite SPA. A thin `App.jsx` router shell mounts on every route, detects viewport (mobile ≤ 768px) and renders either `Desktop` (window manager) or `MobileShell` (full-screen apps + bottom tab bar). Each route translates to an `autoOpen` directive that launches the relevant app on mount. Apps under `apps/` are content-only and don't know about windows; the shell under `shell/` owns OS chrome. Window state lives in a single `useDesktop` hook. The 18 raw blog HTML files and giscus integration survive untouched, just rendered by a new `PostViewer` overlay.

**Tech Stack:** React 18.3.1, React Router 6.27.0, Vite 5.3.3, D3 7.9.0 (existing CVE games only). JetBrains Mono + Inter via Google Fonts. CSS variables for the HEM-OS palette in a fully-rewritten `theme.css`. No new dependencies.

**Reference design spec:** `docs/superpowers/specs/2026-05-04-hemos-ui-revamp-design.md`

**Reference implementation:** `/Users/hemparekh/Downloads/hemos.jsx` (single-file Babel-in-browser version that this plan ports into ES modules).

---

## Operational rules for the executor

1. **No git operations without explicit user approval.** Per the project's standing rule, do not run `git commit`, `git push`, or `deploy.sh` at any point in this plan. The plan creates a `hemos` branch (local only, never pushed) at Task 0.1; if the user later authorizes, commits happen at end-of-phase checkpoints. Within tasks, never commit.
2. **All work happens on the `hemos` branch.** `main` is untouched.
3. **Verification = `npm run build` (catches compile errors) + visual check at `localhost:5173` (`npm run dev` from `app/`).** There is no test framework in this project; do not add one.
4. **Old files stay until Phase 4.** The new shell and apps are added alongside the existing pages/components. Only at Task 4.3 are the dropped files deleted, after the user has confirmed the new system works.
5. **Phase checkpoints are user gates.** At the end of each phase, run the dev server, summarize what's working, and **stop** — do not start the next phase until the user authorizes.

---

## File structure (target end state)

```
app/
  index.html                                  Modified — add Google Fonts preconnect + links
  package.json                                Unchanged
  vite.config.js                              Unchanged
  src/
    App.jsx                                   Rewritten — thin router shell
    main.jsx                                  Unchanged
    shell/                                    NEW directory
      Boot.jsx
      Topbar.jsx
      Dock.jsx
      Window.jsx
      Spotlight.jsx
      Desktop.jsx
      MobileShell.jsx
      PostViewer.jsx
    apps/                                     NEW directory
      Readme.jsx
      Finder.jsx
      Notes.jsx
      Files.jsx
      Terminal.jsx
      Timeline.jsx
      Mail.jsx
      System.jsx
      Games.jsx
    data/
      content.js                              EXTENDED — new fields: identity, manifesto, stats, now; existing fields stay
      posts.js                                Unchanged
      cveMapData.js                           Unchanged
      apps.js                                 NEW
    hooks/
      useDesktop.js                           NEW
      useIsMobile.js                          NEW
      useTheme.js                             DELETED in Phase 4
      useReveal.js                            DELETED in Phase 4
    posts/                                    Unchanged
    styles/
      theme.css                               REWRITTEN
    components/                               DELETED in Phase 4 except: CveNodeHunt, CvePacketIntercept, CveMalwareMaze, CveDetailDrawer (used by Games app)
    pages/                                    DELETED in Phase 4
```

---

# Phase 0 — Branch setup

### Task 0.1: Create `hemos` branch from `main`

**Files:**
- None modified; only branch state.

- [ ] **Step 1: Verify current branch is clean and on `main`**

Run: `git status && git branch --show-current`
Expected: Working tree clean, `main`.

- [ ] **Step 2: Create and switch to the `hemos` branch**

Run: `git checkout -b hemos`
Expected: `Switched to a new branch 'hemos'`.

- [ ] **Step 3: Verify**

Run: `git branch --show-current`
Expected: `hemos`.

**Do NOT push the branch to origin.** It is local-only until the user explicitly authorizes a push.

---

# Phase 1 — Shell scaffolding

After this phase, running `cd app && npm run dev` should boot HEM-OS: boot animation plays once, desktop with grid background appears, top menu bar and dock are visible, clicking the Readme or Finder dock icon opens a draggable/resizable window with traffic-light controls.

### Task 1.1: Add Google Fonts preconnect to `index.html`

**Files:**
- Modify: `app/index.html`

- [ ] **Step 1: Read current `app/index.html`**

Run: `cat app/index.html`

- [ ] **Step 2: Replace the contents of `app/index.html`**

Write to `app/index.html`:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>HEM-OS — Hem Parekh</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Inter:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

- [ ] **Step 3: Verify build still parses**

Run: `cd app && npm run build`
Expected: Build succeeds (output goes to `dist/`).

### Task 1.2: Rewrite `theme.css` with HEM-OS palette and base styles

**Files:**
- Replace: `app/src/styles/theme.css`

- [ ] **Step 1: Replace contents of `app/src/styles/theme.css`**

Write to `app/src/styles/theme.css`:

```css
:root {
  --bg-0: #0a0e16;
  --bg-1: #0f1420;
  --bg-2: #161b2c;
  --line: rgba(255, 255, 255, 0.08);
  --line2: rgba(255, 255, 255, 0.14);
  --ink: #e8ecf2;
  --ink-d: #aab3c5;
  --mut: #6b7590;
  --acc: #ff5e3a;
  --acc2: #6ee7ff;
  --acc3: #b58cff;
  --grn: #5dd39e;
  --red: #ff5970;
  --ylw: #ffd166;
  --mono: "JetBrains Mono", ui-monospace, monospace;
  --sans: "Inter", -apple-system, sans-serif;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%;
  background: #000;
  color: var(--ink);
  font-family: var(--sans);
  overflow: hidden;
  user-select: none;
}

body.dark {
  /* dark is the only theme; class kept for forward-compat */
}

#root {
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
}

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

/* ==================== BOOT ==================== */
.boot {
  position: fixed;
  inset: 0;
  z-index: 99;
  background: #000;
  font-family: var(--mono);
  font-size: 13px;
  padding: 40px 56px;
  display: flex;
  flex-direction: column;
  transition: opacity 0.5s;
}
.boot.gone {
  opacity: 0;
  pointer-events: none;
}
.boot .logo {
  font-family: var(--sans);
  font-weight: 800;
  font-size: 28px;
  letter-spacing: 0.04em;
  margin-bottom: 30px;
  color: var(--acc);
}
.boot .logo span {
  color: var(--ink);
}
.boot .lines {
  line-height: 1.85;
  max-width: 800px;
}
.boot .ok {
  color: var(--grn);
}
.boot .info {
  color: var(--acc2);
}
.boot .warn {
  color: var(--ylw);
}
.boot .em {
  color: var(--ink);
  font-weight: 500;
}
.boot .progress {
  margin-top: 28px;
  width: 360px;
  height: 3px;
  background: rgba(255, 255, 255, 0.08);
  position: relative;
  overflow: hidden;
}
.boot .progress .fill {
  height: 100%;
  background: var(--acc);
  transition: width 80ms linear;
}
.boot .cursor {
  display: inline-block;
  width: 9px;
  height: 14px;
  background: var(--acc);
  margin-left: 4px;
  vertical-align: middle;
  animation: blink 1s step-end infinite;
}
@keyframes blink {
  50% {
    opacity: 0;
  }
}

/* ==================== DESKTOP ==================== */
.desktop {
  position: fixed;
  inset: 0;
  background: radial-gradient(ellipse at 20% 10%, rgba(255, 94, 58, 0.12), transparent 50%),
    radial-gradient(ellipse at 80% 90%, rgba(110, 231, 255, 0.1), transparent 55%),
    linear-gradient(180deg, #0a0e16, #050810);
  overflow: hidden;
}
.desktop::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(rgba(255, 255, 255, 0.012) 1px, transparent 1px) 0 0/60px 60px,
    linear-gradient(90deg, rgba(255, 255, 255, 0.012) 1px, transparent 1px) 0 0/60px 60px;
  pointer-events: none;
}
.dmark {
  position: absolute;
  bottom: 100px;
  right: 36px;
  font-family: var(--mono);
  font-size: 10px;
  color: rgba(255, 255, 255, 0.07);
  white-space: pre;
  pointer-events: none;
  line-height: 1.05;
  text-align: right;
}

/* ==================== TOPBAR ==================== */
.tb {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 30px;
  background: rgba(10, 14, 22, 0.7);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--line);
  display: flex;
  align-items: center;
  padding: 0 14px;
  gap: 18px;
  font-size: 12px;
  z-index: 50;
}
.tb .it {
  cursor: pointer;
  padding: 4px 6px;
  border-radius: 4px;
}
.tb .it:hover {
  background: rgba(255, 255, 255, 0.08);
}
.tb .it.brand {
  font-weight: 700;
  color: var(--acc);
}
.tb .r {
  margin-left: auto;
  display: flex;
  gap: 14px;
  align-items: center;
  color: var(--ink-d);
  font-family: var(--mono);
  font-size: 11px;
}
.tb .r .dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--grn);
  box-shadow: 0 0 6px var(--grn);
  display: inline-block;
  margin-right: 5px;
}

/* ==================== DOCK ==================== */
.dk {
  position: fixed;
  bottom: 14px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(15, 20, 32, 0.7);
  backdrop-filter: blur(24px);
  border: 1px solid var(--line2);
  border-radius: 18px;
  padding: 8px 12px;
  display: flex;
  gap: 6px;
  z-index: 40;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
}
.dk .ic {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  transition: transform 0.15s;
}
.dk .ic:hover {
  transform: translateY(-6px) scale(1.1);
}
.dk .ic .gly {
  width: 34px;
  height: 34px;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--mono);
  font-weight: 700;
  font-size: 13px;
  color: #fff;
}
.dk .ic .lbl {
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 10px;
  background: rgba(0, 0, 0, 0.8);
  padding: 3px 8px;
  border-radius: 4px;
  opacity: 0;
  pointer-events: none;
  white-space: nowrap;
  transition: opacity 0.12s;
  font-family: var(--mono);
}
.dk .ic:hover .lbl {
  opacity: 1;
}
.dk .ic .run {
  position: absolute;
  bottom: 1px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--acc);
}

.g-finder {
  background: linear-gradient(135deg, #4a90e2, #2a5db0);
}
.g-notes {
  background: linear-gradient(135deg, #ffd166, #e09b1f);
}
.g-files {
  background: linear-gradient(135deg, #b58cff, #6b3eb5);
}
.g-term {
  background: linear-gradient(135deg, #1a1f30, #0a0e16);
  border: 1px solid var(--acc2);
  color: var(--acc2);
}
.g-time {
  background: linear-gradient(135deg, #5dd39e, #2a8e5e);
}
.g-mail {
  background: linear-gradient(135deg, #ff5e3a, #c0341a);
}
.g-system {
  background: linear-gradient(135deg, #6b7590, #3a4258);
}
.g-readme {
  background: linear-gradient(135deg, #e8ecf2, #b3bccf);
  color: #0a0e16;
}
.g-games {
  background: linear-gradient(135deg, #ff5e3a, #b58cff);
}

/* ==================== WINDOW ==================== */
.win {
  position: absolute;
  background: linear-gradient(180deg, var(--bg-2), var(--bg-1));
  border: 1px solid var(--line2);
  border-radius: 10px;
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-width: 320px;
  min-height: 200px;
}
.win.fc {
  box-shadow: 0 30px 100px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(110, 231, 255, 0.15);
}
.win.mn {
  display: none;
}
.tt {
  height: 32px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.04), transparent);
  border-bottom: 1px solid var(--line);
  display: flex;
  align-items: center;
  padding: 0 12px;
  gap: 8px;
  cursor: grab;
  user-select: none;
}
.tt.gr {
  cursor: grabbing;
}
.tt .tr {
  display: flex;
  gap: 7px;
}
.tt .tl {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.2);
}
.tt .tl.cl {
  background: #ff5f57;
}
.tt .tl.mi {
  background: #ffbd2e;
}
.tt .tl.mx {
  background: #28c840;
}
.tt .tl:hover {
  transform: scale(1.15);
}
.tt .ti {
  margin-left: 10px;
  font-size: 12px;
  color: var(--ink-d);
  font-weight: 500;
  flex: 1;
  text-align: center;
}
.wb {
  flex: 1;
  overflow: auto;
  background: var(--bg-1);
}
.rs {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 14px;
  height: 14px;
  cursor: nwse-resize;
  background: linear-gradient(135deg, transparent 50%, rgba(255, 255, 255, 0.18) 50%);
}

/* ==================== APPS — Finder ==================== */
.afi {
  display: grid;
  grid-template-columns: 200px 1fr;
  height: 100%;
}
.afi .sd {
  background: rgba(0, 0, 0, 0.25);
  border-right: 1px solid var(--line);
  padding: 14px 0;
}
.afi .sd .gp {
  padding: 0 14px;
  font-size: 10px;
  color: var(--mut);
  text-transform: uppercase;
  letter-spacing: 0.16em;
  margin: 14px 0 6px;
}
.afi .sd .gp:first-child {
  margin-top: 0;
}
.afi .sd .it {
  padding: 6px 14px;
  font-size: 13px;
  color: var(--ink-d);
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}
.afi .sd .it:hover {
  background: rgba(255, 255, 255, 0.04);
}
.afi .sd .it.on {
  background: rgba(110, 231, 255, 0.12);
  color: var(--ink);
}
.afi .sd .it .d {
  width: 14px;
  height: 14px;
  border-radius: 3px;
  flex-shrink: 0;
}
.afi .mn {
  padding: 22px 28px;
  overflow: auto;
}
.afi .hr {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 22px;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--line);
}
.afi .hr .av {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--acc), var(--acc3));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 38px;
  font-weight: 700;
}
.afi h1 {
  font-size: 24px;
  margin-bottom: 4px;
}
.afi .role {
  color: var(--acc2);
  font-family: var(--mono);
  font-size: 12px;
  margin-bottom: 6px;
  letter-spacing: 0.06em;
}
.afi .meta {
  font-size: 12px;
  color: var(--ink-d);
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}
.afi .sec {
  margin-top: 24px;
}
.afi .sec h2 {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--mut);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-bottom: 12px;
}
.afi .bel {
  padding: 8px 0;
  border-top: 1px solid var(--line);
  font-size: 14px;
  line-height: 1.5;
}
.afi .bel:first-of-type {
  border-top: 0;
}
.afi .bel .k {
  color: var(--acc2);
  font-family: var(--mono);
  font-size: 11px;
  margin-right: 8px;
}
.afi .st {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: var(--line);
  border-radius: 6px;
  overflow: hidden;
}
.afi .st .s {
  background: var(--bg-2);
  padding: 14px 16px;
}
.afi .st .n {
  font-size: 22px;
  font-weight: 700;
  color: var(--acc);
}
.afi .st .l {
  font-size: 11px;
  color: var(--mut);
  margin-top: 2px;
  font-family: var(--mono);
}

/* ==================== APPS — Notes ==================== */
.an {
  display: grid;
  grid-template-columns: 240px 1fr;
  height: 100%;
}
.an .ls {
  background: rgba(0, 0, 0, 0.25);
  border-right: 1px solid var(--line);
  overflow-y: auto;
}
.an .ls .search {
  padding: 10px 12px;
  border-bottom: 1px solid var(--line);
  background: rgba(0, 0, 0, 0.3);
  position: sticky;
  top: 0;
  z-index: 1;
}
.an .ls .search input {
  width: 100%;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--line);
  border-radius: 4px;
  color: var(--ink);
  font-family: var(--mono);
  font-size: 11px;
  padding: 6px 8px;
  outline: none;
}
.an .ls .search input:focus {
  border-color: var(--acc);
}
.an .ls .it {
  padding: 12px 16px;
  border-bottom: 1px solid var(--line);
  cursor: pointer;
}
.an .ls .it:hover {
  background: rgba(255, 255, 255, 0.04);
}
.an .ls .it.on {
  background: rgba(255, 209, 102, 0.12);
  border-left: 3px solid var(--ylw);
  padding-left: 13px;
}
.an .ls .ttl {
  font-size: 13px;
  font-weight: 500;
  line-height: 1.3;
  margin-bottom: 4px;
}
.an .ls .mt {
  font-size: 10px;
  color: var(--mut);
  font-family: var(--mono);
  display: flex;
  gap: 8px;
}
.an .ls .mt .tg {
  color: var(--acc);
}
.an .dt {
  padding: 28px 36px;
  overflow-y: auto;
}
.an .dt h1 {
  font-size: 22px;
  line-height: 1.25;
  margin-bottom: 8px;
}
.an .dt .mt {
  font-size: 11px;
  color: var(--mut);
  font-family: var(--mono);
  margin-bottom: 18px;
  letter-spacing: 0.06em;
}
.an .dt .bd {
  font-size: 14px;
  line-height: 1.65;
  color: var(--ink-d);
}
.an .dt .bd p {
  margin-bottom: 14px;
}
.an .dt .max {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  background: rgba(110, 231, 255, 0.1);
  border: 1px solid var(--acc2);
  color: var(--acc2);
  border-radius: 6px;
  font-family: var(--mono);
  font-size: 12px;
  cursor: pointer;
  margin-top: 10px;
}
.an .dt .max:hover {
  background: rgba(110, 231, 255, 0.2);
}

/* ==================== APPS — Files ==================== */
.af {
  padding: 18px 22px;
  height: 100%;
  overflow-y: auto;
}
.af .tb2 {
  display: flex;
  gap: 10px;
  margin-bottom: 18px;
  align-items: center;
}
.af .crm {
  font-family: var(--mono);
  font-size: 12px;
  color: var(--ink-d);
}
.af .crm .sp {
  color: var(--mut);
  margin: 0 6px;
}
.af .grd {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 14px;
}
.af .fi {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 14px;
  cursor: pointer;
  transition: all 0.14s;
}
.af .fi:hover {
  background: rgba(181, 140, 255, 0.08);
  border-color: var(--acc3);
  transform: translateY(-2px);
}
.af .fi .ic {
  width: 100%;
  height: 80px;
  border-radius: 6px;
  background: linear-gradient(135deg, #2a1f4a, #1a1330);
  border: 1px solid var(--line);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--mono);
  font-weight: 700;
  font-size: 22px;
  color: var(--acc3);
  margin-bottom: 10px;
  position: relative;
  overflow: hidden;
}
.af .fi .ic::before {
  content: "";
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(45deg, transparent 0 4px, rgba(181, 140, 255, 0.05) 4px 5px);
}
.af .fi .ttl {
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 2px;
}
.af .fi .sz {
  font-size: 10px;
  color: var(--mut);
  font-family: var(--mono);
}
.pdr {
  position: absolute;
  inset: 0;
  background: rgba(10, 14, 22, 0.97);
  padding: 24px 30px;
  overflow-y: auto;
  z-index: 5;
}
.pdr .bk {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--acc3);
  cursor: pointer;
  margin-bottom: 16px;
}
.pdr h2 {
  font-size: 28px;
  margin-bottom: 6px;
}
.pdr .ct {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--mut);
  letter-spacing: 0.14em;
  margin-bottom: 14px;
}
.pdr .bl {
  font-size: 14px;
  line-height: 1.6;
  color: var(--ink-d);
  margin-bottom: 18px;
}
.pdr .sk {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-top: 14px;
}
.pdr .ch {
  font-family: var(--mono);
  font-size: 10px;
  padding: 3px 8px;
  background: rgba(181, 140, 255, 0.12);
  color: var(--acc3);
  border-radius: 4px;
}
.pdr .sp {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  background: var(--line);
  border-radius: 6px;
  overflow: hidden;
}
.pdr .sp .s {
  background: var(--bg-2);
  padding: 12px 14px;
}
.pdr .sp .l {
  font-family: var(--mono);
  font-size: 9px;
  color: var(--mut);
  letter-spacing: 0.16em;
  text-transform: uppercase;
}
.pdr .sp .v {
  font-size: 13px;
  margin-top: 3px;
}

/* ==================== APPS — Terminal ==================== */
.at {
  height: 100%;
  background: #04060d;
  font-family: var(--mono);
  font-size: 13px;
  color: var(--grn);
  padding: 14px 16px;
  overflow-y: auto;
  line-height: 1.6;
  cursor: text;
}
.at .ln {
  white-space: pre-wrap;
  word-break: break-word;
}
.at .pp {
  color: var(--acc2);
}
.at .em {
  color: var(--ink);
}
.at .wn {
  color: var(--ylw);
}
.at .bd {
  color: var(--red);
}
.at .dm {
  color: var(--mut);
}
.at .lk {
  color: var(--acc2);
  cursor: pointer;
  text-decoration: underline;
  text-decoration-style: dotted;
}
.at .il {
  display: flex;
  gap: 6px;
  align-items: center;
}
.at .il .ip {
  background: transparent;
  border: none;
  outline: none;
  color: var(--grn);
  font: inherit;
  flex: 1;
  caret-color: var(--acc);
}
.at .ban {
  color: var(--acc);
  white-space: pre;
  font-size: 11px;
  line-height: 1.1;
  margin-bottom: 6px;
}

/* ==================== APPS — Timeline ==================== */
.atm {
  padding: 24px 30px;
  height: 100%;
  overflow-y: auto;
}
.atm h1 {
  font-size: 22px;
  margin-bottom: 4px;
}
.atm .sb {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--mut);
  margin-bottom: 22px;
  letter-spacing: 0.08em;
}
.tl {
  position: relative;
  padding-left: 24px;
}
.tl::before {
  content: "";
  position: absolute;
  left: 6px;
  top: 8px;
  bottom: 8px;
  width: 2px;
  background: linear-gradient(180deg, var(--grn), var(--acc2), transparent);
}
.tl .stop {
  position: relative;
  padding-bottom: 20px;
}
.tl .stop::before {
  content: "";
  position: absolute;
  left: -22px;
  top: 6px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--bg-2);
  border: 2px solid var(--grn);
}
.tl .stop.cur::before {
  background: var(--acc);
  border-color: var(--acc);
  box-shadow: 0 0 12px var(--acc);
}
.tl .rg {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--acc2);
  margin-bottom: 4px;
  letter-spacing: 0.06em;
}
.tl .ro {
  font-size: 16px;
  font-weight: 600;
}
.tl .or {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--acc);
  margin-bottom: 6px;
}
.tl .bl {
  font-size: 13px;
  color: var(--ink-d);
  line-height: 1.55;
  max-width: 600px;
}
.tl .pil {
  display: inline-block;
  margin-left: 8px;
  font-family: var(--mono);
  font-size: 10px;
  padding: 1px 6px;
  background: var(--acc);
  color: #000;
  border-radius: 3px;
  letter-spacing: 0.1em;
  vertical-align: 2px;
}
.atm .cg {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 10px;
  margin-top: 16px;
}
.atm .ce {
  padding: 10px 12px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--line);
  border-radius: 6px;
  text-decoration: none;
  color: inherit;
  display: block;
}
.atm .ce:hover {
  border-color: var(--acc2);
}
.atm .ce .t {
  font-size: 12px;
  font-weight: 600;
}
.atm .ce .m {
  font-family: var(--mono);
  font-size: 10px;
  color: var(--mut);
  margin-top: 3px;
  letter-spacing: 0.08em;
}

/* ==================== APPS — Mail ==================== */
.am {
  display: grid;
  grid-template-columns: 240px 1fr;
  height: 100%;
}
.am .sd {
  background: rgba(0, 0, 0, 0.25);
  border-right: 1px solid var(--line);
  padding: 12px;
}
.am .sd .gl {
  font-family: var(--mono);
  font-size: 10px;
  color: var(--mut);
  letter-spacing: 0.16em;
  margin: 12px 4px 6px;
  text-transform: uppercase;
}
.am .sd .it {
  padding: 6px 10px;
  font-size: 12px;
  color: var(--ink-d);
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
}
.am .sd .it.on {
  background: rgba(255, 94, 58, 0.12);
  color: var(--ink);
}
.am .sd .it .ct {
  font-family: var(--mono);
  font-size: 10px;
  color: var(--mut);
}
.am .mn {
  padding: 20px 28px;
  overflow-y: auto;
}
.am h1 {
  font-size: 18px;
  margin-bottom: 4px;
}
.am .fr {
  font-family: var(--mono);
  font-size: 12px;
  color: var(--acc2);
  margin-bottom: 16px;
}
.am .bd {
  font-size: 14px;
  line-height: 1.6;
  color: var(--ink-d);
}
.am .bd p {
  margin-bottom: 12px;
}
.am .sg {
  margin-top: 22px;
  padding-top: 16px;
  border-top: 1px solid var(--line);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  font-size: 12px;
}
.am .sg a {
  color: var(--ink-d);
  text-decoration: none;
  font-family: var(--mono);
  padding: 6px 8px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 4px;
  border: 1px solid var(--line);
  display: flex;
  justify-content: space-between;
}
.am .sg a:hover {
  color: var(--acc);
  border-color: var(--acc);
}

/* ==================== APPS — System ==================== */
.asy {
  padding: 22px 28px;
  height: 100%;
  overflow-y: auto;
}
.asy h1 {
  font-size: 22px;
  margin-bottom: 4px;
}
.asy .sb {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--mut);
  margin-bottom: 22px;
  letter-spacing: 0.08em;
}
.asy .gg {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
  margin-bottom: 22px;
}
.asy .gu {
  padding: 14px 16px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--line);
  border-radius: 8px;
}
.asy .gu .l {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-family: var(--mono);
  font-size: 11px;
  color: var(--mut);
  margin-bottom: 8px;
  letter-spacing: 0.08em;
}
.asy .gu .l .v {
  color: var(--ink);
  font-size: 12px;
}
.asy .gu .br {
  height: 6px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 3px;
  overflow: hidden;
}
.asy .gu .br .f {
  height: 100%;
  background: linear-gradient(90deg, var(--acc2), var(--acc));
  transition: width 0.8s;
}
.asy h2 {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--mut);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  margin: 22px 0 10px;
}
.asy .nl {
  list-style: none;
}
.asy .nl li {
  padding: 10px 0;
  border-top: 1px solid var(--line);
  font-size: 13px;
  line-height: 1.55;
  color: var(--ink-d);
  padding-left: 22px;
  position: relative;
}
.asy .nl li:first-child {
  border-top: 0;
}
.asy .nl li::before {
  content: "▸";
  position: absolute;
  left: 0;
  top: 10px;
  color: var(--acc);
  font-family: var(--mono);
}

/* ==================== APPS — Readme ==================== */
.ar {
  padding: 28px 36px;
  height: 100%;
  overflow-y: auto;
  max-width: 700px;
}
.ar h1 {
  font-size: 28px;
  margin-bottom: 4px;
}
.ar .sb {
  font-family: var(--mono);
  font-size: 12px;
  color: var(--acc2);
  margin-bottom: 22px;
}
.ar p {
  font-size: 14px;
  line-height: 1.7;
  color: var(--ink-d);
  margin-bottom: 14px;
}
.ar .tp {
  padding: 12px 14px;
  background: rgba(110, 231, 255, 0.07);
  border-left: 3px solid var(--acc2);
  margin: 14px 0;
  font-size: 13px;
  line-height: 1.5;
}
.ar .tp kbd {
  background: rgba(0, 0, 0, 0.4);
  padding: 1px 6px;
  border-radius: 3px;
  font-family: var(--mono);
  color: var(--acc2);
}
.ar .ql {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  margin-top: 14px;
}
.ar .ql .q {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--line);
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
}
.ar .ql .q:hover {
  background: rgba(255, 94, 58, 0.06);
  border-color: var(--acc);
}
.ar .ql .mi {
  width: 26px;
  height: 26px;
  border-radius: 6px;
  flex-shrink: 0;
}

/* ==================== Spotlight ==================== */
.sp {
  position: fixed;
  top: 18%;
  left: 50%;
  transform: translateX(-50%);
  width: 520px;
  max-width: 90vw;
  background: rgba(20, 26, 42, 0.92);
  backdrop-filter: blur(28px);
  border: 1px solid var(--line2);
  border-radius: 12px;
  z-index: 80;
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.7);
  overflow: hidden;
}
.sp input {
  width: 100%;
  padding: 16px 20px;
  background: transparent;
  color: var(--ink);
  border: 0;
  outline: 0;
  font-size: 18px;
  font-family: var(--sans);
  border-bottom: 1px solid var(--line);
}
.sp .rs {
  max-height: 360px;
  overflow-y: auto;
  position: static;
}
.sp .re {
  padding: 10px 18px;
  display: flex;
  gap: 12px;
  align-items: center;
  cursor: pointer;
  border-bottom: 1px solid var(--line);
}
.sp .re.on {
  background: rgba(255, 94, 58, 0.12);
}
.sp .re .ic {
  width: 28px;
  height: 28px;
  border-radius: 6px;
  flex-shrink: 0;
}
.sp .re .ttl {
  font-size: 13px;
}
.sp .re .typ {
  font-size: 11px;
  color: var(--mut);
  font-family: var(--mono);
}

/* ==================== PostViewer ==================== */
.pv {
  position: fixed;
  top: 30px;
  right: 0;
  bottom: 80px;
  left: 0;
  background: linear-gradient(180deg, var(--bg-2), var(--bg-1));
  z-index: 60;
  overflow: auto;
  display: flex;
  flex-direction: column;
}
.pv .pv-bar {
  position: sticky;
  top: 0;
  background: rgba(15, 20, 32, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--line);
  padding: 10px 24px;
  display: flex;
  align-items: center;
  gap: 12px;
  z-index: 1;
}
.pv .pv-bar .pv-close {
  background: #ff5f57;
  color: #000;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--mono);
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.2);
}
.pv .pv-bar .pv-close:hover {
  filter: brightness(1.15);
}
.pv .pv-bar .pv-ti {
  font-size: 12px;
  color: var(--ink-d);
  font-weight: 500;
}
.pv .pv-body {
  max-width: 760px;
  margin: 0 auto;
  padding: 36px 32px 80px;
  width: 100%;
}
.pv .pv-title {
  font-size: 32px;
  line-height: 1.18;
  color: var(--ink);
  margin-bottom: 8px;
}
.pv .pv-meta {
  font-family: var(--mono);
  font-size: 12px;
  color: var(--mut);
  letter-spacing: 0.06em;
  margin-bottom: 28px;
}
.pv .pv-content {
  color: var(--ink-d);
  font-size: 15px;
  line-height: 1.75;
}
.pv .pv-content h2,
.pv .pv-content h3,
.pv .pv-content h4 {
  color: var(--ink);
  margin: 28px 0 12px;
  line-height: 1.3;
}
.pv .pv-content h2 {
  font-size: 22px;
}
.pv .pv-content h3 {
  font-size: 18px;
}
.pv .pv-content p {
  margin-bottom: 16px;
}
.pv .pv-content code {
  font-family: var(--mono);
  font-size: 0.92em;
  background: rgba(255, 255, 255, 0.05);
  padding: 1px 6px;
  border-radius: 3px;
  color: var(--acc2);
}
.pv .pv-content pre {
  font-family: var(--mono);
  background: #04060d;
  color: var(--grn);
  padding: 14px 16px;
  border-radius: 6px;
  overflow-x: auto;
  margin: 14px 0;
  font-size: 12.5px;
  line-height: 1.55;
  border: 1px solid var(--line);
}
.pv .pv-content pre code {
  background: transparent;
  color: inherit;
  padding: 0;
}
.pv .pv-content a {
  color: var(--acc);
  text-decoration: underline;
  text-decoration-style: dotted;
}
.pv .pv-content blockquote {
  border-left: 3px solid var(--acc2);
  padding: 4px 14px;
  color: var(--ink);
  background: rgba(110, 231, 255, 0.05);
  margin: 14px 0;
}
.pv .pv-content ul,
.pv .pv-content ol {
  padding-left: 24px;
  margin-bottom: 16px;
}
.pv .pv-content li {
  margin-bottom: 6px;
}
.pv .pv-content img {
  max-width: 100%;
  border-radius: 6px;
  margin: 14px 0;
  border: 1px solid var(--line);
}
.pv .pv-comments {
  max-width: 760px;
  margin: 32px auto 60px;
  padding: 0 32px;
  width: 100%;
}

/* ==================== MOBILE SHELL ==================== */
.mshell {
  position: fixed;
  inset: 0;
  background: linear-gradient(180deg, #0a0e16, #050810);
  display: flex;
  flex-direction: column;
}
.mshell .mtop {
  height: 36px;
  background: rgba(10, 14, 22, 0.85);
  border-bottom: 1px solid var(--line);
  display: flex;
  align-items: center;
  padding: 0 14px;
  gap: 12px;
  font-size: 11px;
  font-family: var(--mono);
  color: var(--ink-d);
  flex-shrink: 0;
}
.mshell .mtop .brand {
  color: var(--acc);
  font-weight: 700;
}
.mshell .mtop .clk {
  margin-left: auto;
  color: var(--ink);
}
.mshell .mtop .sp-icon {
  cursor: pointer;
  font-size: 14px;
  padding: 4px 6px;
}
.mshell .mbody {
  flex: 1;
  overflow: auto;
  background: var(--bg-1);
  position: relative;
}
.mshell .mtabs {
  height: 70px;
  background: rgba(15, 20, 32, 0.92);
  border-top: 1px solid var(--line2);
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0 10px;
  overflow-x: auto;
  overflow-y: hidden;
  flex-shrink: 0;
}
.mshell .mtabs .mt {
  flex-shrink: 0;
  width: 50px;
  text-align: center;
  cursor: pointer;
  opacity: 0.55;
  transition: opacity 0.15s;
}
.mshell .mtabs .mt.on {
  opacity: 1;
}
.mshell .mtabs .mt .mtg {
  width: 36px;
  height: 36px;
  border-radius: 9px;
  margin: 0 auto 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--mono);
  font-weight: 700;
  font-size: 13px;
  color: #fff;
}
.mshell .mtabs .mt .mtl {
  font-family: var(--mono);
  font-size: 9px;
  color: var(--ink-d);
}

@media (max-width: 700px) {
  .win {
    min-width: 280px !important;
  }
  .tb .it:not(.brand) {
    display: none;
  }
}
```

- [ ] **Step 2: Verify the CSS still parses on build**

Run: `cd app && npm run build`
Expected: Build succeeds. (The current `App.jsx` will still reference old class names but that's OK — we rewrite App.jsx in Task 1.16.)

### Task 1.3: Create `data/apps.js` (APPS dictionary)

**Files:**
- Create: `app/src/data/apps.js`

- [ ] **Step 1: Create file**

Write to `app/src/data/apps.js`:

```js
// APPS = id -> static metadata. Default window size, dock icon class, title.
export const APPS = {
  readme:   { title: "README.txt",          g: "g-readme", w: 620, h: 520 },
  finder:   { title: "Finder — About",      g: "g-finder", w: 760, h: 560 },
  notes:    { title: "Notes — Writing",     g: "g-notes",  w: 820, h: 560 },
  files:    { title: "Files — Projects",    g: "g-files",  w: 720, h: 540 },
  terminal: { title: "Terminal — hem@hemos", g: "g-term",   w: 720, h: 480 },
  timeline: { title: "Timeline — Experience", g: "g-time",  w: 700, h: 560 },
  mail:     { title: "Mail — Contact",      g: "g-mail",   w: 760, h: 540 },
  system:   { title: "System Monitor",      g: "g-system", w: 680, h: 540 },
  games:    { title: "Games — CVE Range",   g: "g-games",  w: 900, h: 600 },
};

// Order in the dock + mobile tab bar. Readme is intentionally not in the dock —
// it's auto-launched on first boot only and reachable via spotlight.
export const DOCK_ORDER = [
  "finder",
  "notes",
  "files",
  "terminal",
  "timeline",
  "mail",
  "system",
  "games",
];

// All apps, including readme — used by spotlight and mobile tab bar.
export const ALL_APPS = ["readme", ...DOCK_ORDER];
```

- [ ] **Step 2: Verify build**

Run: `cd app && npm run build`
Expected: Build succeeds.

### Task 1.4: Create `hooks/useIsMobile.js`

**Files:**
- Create: `app/src/hooks/useIsMobile.js`

- [ ] **Step 1: Create file**

Write to `app/src/hooks/useIsMobile.js`:

```js
import { useEffect, useState } from "react";

const BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth <= BREAKPOINT;
  });

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= BREAKPOINT);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return isMobile;
}
```

- [ ] **Step 2: Verify build**

Run: `cd app && npm run build`
Expected: Build succeeds.

### Task 1.5: Create `hooks/useDesktop.js` (window manager)

**Files:**
- Create: `app/src/hooks/useDesktop.js`

- [ ] **Step 1: Create file**

Write to `app/src/hooks/useDesktop.js`:

```js
import { useCallback, useRef, useState } from "react";
import { APPS } from "../data/apps";

// Window manager state hook. Owns the array of open windows, focus, z-order,
// and spotlight visibility. Apps don't talk to this hook directly — Desktop
// passes callbacks down.
export function useDesktop() {
  const [windows, setWindows] = useState([]);
  const [focusId, setFocusId] = useState(null);
  const [spotlightOpen, setSpotlightOpen] = useState(false);
  const widRef = useRef(0);
  const zRef = useRef(1);

  const launch = useCallback((app, appState) => {
    setWindows((ws) => {
      const existing = ws.find((w) => w.app === app);
      if (existing) {
        zRef.current += 1;
        const z = zRef.current;
        setFocusId(existing.id);
        return ws.map((w) =>
          w.id === existing.id
            ? { ...w, minimized: false, z, appState: appState ?? w.appState }
            : w
        );
      }
      const meta = APPS[app];
      if (!meta) return ws;
      widRef.current += 1;
      zRef.current += 1;
      const id = widRef.current;
      const off = ws.length * 28;
      setFocusId(id);
      return [
        ...ws,
        {
          id,
          app,
          x: 100 + off,
          y: 70 + off,
          w: meta.w,
          h: meta.h,
          minimized: false,
          maximized: false,
          z: zRef.current,
          appState: appState ?? null,
        },
      ];
    });
  }, []);

  const close = useCallback((id) => {
    setWindows((ws) => ws.filter((w) => w.id !== id));
    setFocusId((cur) => (cur === id ? null : cur));
  }, []);

  const minimize = useCallback((id) => {
    setWindows((ws) => ws.map((w) => (w.id === id ? { ...w, minimized: true } : w)));
  }, []);

  const toggleMaximize = useCallback((id) => {
    setWindows((ws) =>
      ws.map((w) => (w.id === id ? { ...w, maximized: !w.maximized } : w))
    );
  }, []);

  const focus = useCallback((id) => {
    zRef.current += 1;
    const z = zRef.current;
    setFocusId(id);
    setWindows((ws) =>
      ws.map((w) => (w.id === id ? { ...w, z, minimized: false } : w))
    );
  }, []);

  const move = useCallback((id, x, y) => {
    setWindows((ws) => ws.map((w) => (w.id === id ? { ...w, x, y } : w)));
  }, []);

  const resize = useCallback((id, w, h) => {
    setWindows((ws) => ws.map((win) => (win.id === id ? { ...win, w, h } : win)));
  }, []);

  const updateAppState = useCallback((id, partial) => {
    setWindows((ws) =>
      ws.map((w) =>
        w.id === id ? { ...w, appState: { ...(w.appState || {}), ...partial } } : w
      )
    );
  }, []);

  const toggleSpotlight = useCallback(() => setSpotlightOpen((s) => !s), []);
  const closeSpotlight = useCallback(() => setSpotlightOpen(false), []);

  return {
    windows,
    focusId,
    spotlightOpen,
    launch,
    close,
    minimize,
    toggleMaximize,
    focus,
    move,
    resize,
    updateAppState,
    toggleSpotlight,
    closeSpotlight,
  };
}
```

- [ ] **Step 2: Verify build**

Run: `cd app && npm run build`
Expected: Build succeeds.

### Task 1.6: Create `shell/Boot.jsx`

**Files:**
- Create: `app/src/shell/Boot.jsx`

- [ ] **Step 1: Create file**

Write to `app/src/shell/Boot.jsx`:

```jsx
import { useEffect, useState } from "react";

const BOOT_LINES = [
  { c: "ok",   t: "[  OK  ] Reached target Boot Complete." },
  { c: "info", t: "[ INFO ] HEM-OS 1.7.0 — kernel 6.5.0-hardened" },
  { c: "ok",   t: "[  OK  ] Mounted /home/hem (43 pentests, 18 posts, 12 certs)" },
  { c: "ok",   t: "[  OK  ] Started Curiosity Daemon (curiosity-d)" },
  { c: "info", t: "[ INFO ] Loading vulnerabilities table … 9 entries" },
  { c: "warn", t: "[ WARN ] AMD-TSA microcode advisory found in queue" },
  { c: "ok",   t: "[  OK  ] Started Display Manager" },
  { c: "em",   t: "Welcome to HEM-OS." },
];

export default function Boot({ onDone }) {
  const [n, setN] = useState(0);

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      i += 1;
      setN(i);
      if (i >= BOOT_LINES.length) {
        clearInterval(t);
        setTimeout(onDone, 600);
      }
    }, 220);
    return () => clearInterval(t);
  }, [onDone]);

  const pct = Math.min(100, (n / BOOT_LINES.length) * 100);

  return (
    <div className="boot">
      <div className="logo">HEM<span>-OS</span></div>
      <div className="lines">
        {BOOT_LINES.slice(0, n).map((l, i) => (
          <div key={i} className={l.c}>{l.t}</div>
        ))}
        {n < BOOT_LINES.length && <span className="cursor" />}
      </div>
      <div className="progress">
        <div className="fill" style={{ width: pct + "%" }} />
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `cd app && npm run build`
Expected: Build succeeds.

### Task 1.7: Create `shell/Topbar.jsx`

**Files:**
- Create: `app/src/shell/Topbar.jsx`

- [ ] **Step 1: Create file**

Write to `app/src/shell/Topbar.jsx`:

```jsx
import { useEffect, useState } from "react";
import { APPS } from "../data/apps";

export default function Topbar({ activeApp, onSpotlight }) {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="tb">
      <span className="it brand">⌘ HEM-OS</span>
      <span className="it">{activeApp ? APPS[activeApp].title : "Desktop"}</span>
      <span className="it">File</span>
      <span className="it">Edit</span>
      <span className="it">View</span>
      <div className="r">
        <span><span className="dot" />online</span>
        <span style={{ cursor: "pointer" }} onClick={onSpotlight}>⌘K spotlight</span>
        <span style={{ color: "var(--ink)" }}>
          {now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </span>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `cd app && npm run build`
Expected: Build succeeds.

### Task 1.8: Create `shell/Dock.jsx`

**Files:**
- Create: `app/src/shell/Dock.jsx`

- [ ] **Step 1: Create file**

Write to `app/src/shell/Dock.jsx`:

```jsx
import { APPS, DOCK_ORDER } from "../data/apps";

export default function Dock({ onLaunch, openApps }) {
  return (
    <div className="dk">
      {DOCK_ORDER.map((id) => {
        const meta = APPS[id];
        const initial = meta.title.split(" ")[0][0];
        const label = meta.title.split("—")[0].trim();
        return (
          <div key={id} className="ic" onClick={() => onLaunch(id)}>
            <div className={`gly ${meta.g}`}>{initial}</div>
            <div className="lbl">{label}</div>
            {openApps.includes(id) && <div className="run" />}
          </div>
        );
      })}
    </div>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `cd app && npm run build`
Expected: Build succeeds.

### Task 1.9: Create `shell/Window.jsx`

**Files:**
- Create: `app/src/shell/Window.jsx`

- [ ] **Step 1: Create file**

Write to `app/src/shell/Window.jsx`:

```jsx
import { useEffect, useState } from "react";
import { APPS } from "../data/apps";

// Generic draggable / resizable window with traffic-light controls.
// Window position and size live in the shell-level useDesktop state; this
// component handles pointer events and reports back via callbacks.
export default function Window({
  win,
  focused,
  onClose,
  onMinimize,
  onToggleMaximize,
  onFocus,
  onMove,
  onResize,
  children,
}) {
  const [drag, setDrag] = useState(null);
  const [rsz, setRsz] = useState(null);

  useEffect(() => {
    if (!drag && !rsz) return undefined;
    const move = (e) => {
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      const y = e.touches ? e.touches[0].clientY : e.clientY;
      if (drag) {
        onMove(
          win.id,
          Math.max(0, drag.wx + (x - drag.x)),
          Math.max(30, drag.wy + (y - drag.y))
        );
      } else if (rsz) {
        onResize(
          win.id,
          Math.max(360, rsz.ww + (x - rsz.x)),
          Math.max(220, rsz.wh + (y - rsz.y))
        );
      }
    };
    const up = () => {
      setDrag(null);
      setRsz(null);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
    window.addEventListener("touchmove", move);
    window.addEventListener("touchend", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("touchend", up);
    };
  }, [drag, rsz, win.id, onMove, onResize]);

  const startDrag = (e) => {
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    const y = e.touches ? e.touches[0].clientY : e.clientY;
    setDrag({ x, y, wx: win.x, wy: win.y });
    onFocus(win.id);
  };
  const startResize = (e) => {
    e.stopPropagation();
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    const y = e.touches ? e.touches[0].clientY : e.clientY;
    setRsz({ x, y, ww: win.w, wh: win.h });
    onFocus(win.id);
  };

  const style = {
    left: win.maximized ? 0 : win.x,
    top: win.maximized ? 30 : win.y,
    width: win.maximized ? "100vw" : win.w,
    height: win.maximized ? "calc(100vh - 30px - 80px)" : win.h,
    zIndex: focused ? 30 : 10 + (win.z || 0),
  };

  return (
    <div
      className={`win ${focused ? "fc" : ""} ${win.minimized ? "mn" : ""}`}
      style={style}
      onMouseDown={() => onFocus(win.id)}
    >
      <div
        className={`tt ${drag ? "gr" : ""}`}
        onMouseDown={startDrag}
        onTouchStart={startDrag}
        onDoubleClick={() => onToggleMaximize(win.id)}
      >
        <div className="tr">
          <div
            className="tl cl"
            onClick={(e) => { e.stopPropagation(); onClose(win.id); }}
          />
          <div
            className="tl mi"
            onClick={(e) => { e.stopPropagation(); onMinimize(win.id); }}
          />
          <div
            className="tl mx"
            onClick={(e) => { e.stopPropagation(); onToggleMaximize(win.id); }}
          />
        </div>
        <div className="ti">{APPS[win.app].title}</div>
        <div style={{ width: 56 }} />
      </div>
      <div className="wb">{children}</div>
      {!win.maximized && (
        <div className="rs" onMouseDown={startResize} onTouchStart={startResize} />
      )}
    </div>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `cd app && npm run build`
Expected: Build succeeds.

### Task 1.10: Create `shell/Spotlight.jsx`

**Files:**
- Create: `app/src/shell/Spotlight.jsx`

- [ ] **Step 1: Create file**

Write to `app/src/shell/Spotlight.jsx`:

```jsx
import { useMemo, useState } from "react";
import { APPS, ALL_APPS } from "../data/apps";
import { blogs, projects } from "../data/content";

export default function Spotlight({ onClose, onLaunch, onOpenPost, onRunCveCommand }) {
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(0);

  const all = useMemo(() => {
    const apps = ALL_APPS.map((id) => ({
      type: "app",
      title: APPS[id].title,
      action: () => onLaunch(id),
      g: APPS[id].g,
    }));
    const posts = blogs.map((b) => ({
      type: "post",
      title: b.title,
      action: () => onOpenPost(b.slug),
      g: "g-notes",
    }));
    const projs = projects.map((p) => ({
      type: "project",
      title: p.title,
      action: () => onLaunch("files", { selectedTitle: p.title }),
      g: "g-files",
    }));
    const cveLike = blogs.filter((b) => b.title.toUpperCase().includes("CVE"));
    const cves = cveLike.map((b) => {
      const idMatch = b.title.match(/CVE[-–](\d{4})[-–]?(\d+)/i);
      const id = idMatch ? `CVE-${idMatch[1]}-${idMatch[2]}` : b.slug.toUpperCase();
      return {
        type: "cve",
        title: `${id} — ${b.title.replace(/^CVE[-–\d]+/i, "").trim()}`,
        action: () => onRunCveCommand(id),
        g: "g-term",
      };
    });
    return [...apps, ...posts, ...projs, ...cves];
  }, [onLaunch, onOpenPost, onRunCveCommand]);

  const filtered = q
    ? all.filter((x) => x.title.toLowerCase().includes(q.toLowerCase())).slice(0, 8)
    : all.slice(0, 8);

  const onKey = (e) => {
    if (e.key === "Escape") onClose();
    else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSel((s) => Math.min(filtered.length - 1, s + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSel((s) => Math.max(0, s - 1));
    } else if (e.key === "Enter") {
      const r = filtered[sel];
      if (r) {
        r.action();
        onClose();
      }
    }
  };

  return (
    <div className="sp" onClick={(e) => e.stopPropagation()}>
      <input
        autoFocus
        placeholder="Search apps, posts, projects, CVEs…"
        value={q}
        onChange={(e) => { setQ(e.target.value); setSel(0); }}
        onKeyDown={onKey}
      />
      <div className="rs">
        {filtered.map((r, i) => (
          <div
            key={i}
            className={`re ${i === sel ? "on" : ""}`}
            onClick={() => { r.action(); onClose(); }}
            onMouseEnter={() => setSel(i)}
          >
            <div className={`ic ${r.g}`} />
            <div style={{ flex: 1 }}>
              <div className="ttl">{r.title}</div>
              <div className="typ">{r.type}</div>
            </div>
          </div>
        ))}
        {!filtered.length && <div className="re"><div className="ttl">no results</div></div>}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `cd app && npm run build`
Expected: Build succeeds.

### Task 1.11: Create `shell/Desktop.jsx` (composes shell + manages auto-open)

**Files:**
- Create: `app/src/shell/Desktop.jsx`

- [ ] **Step 1: Create file**

Write to `app/src/shell/Desktop.jsx`:

```jsx
import { useEffect, useState } from "react";
import Topbar from "./Topbar";
import Dock from "./Dock";
import Window from "./Window";
import Spotlight from "./Spotlight";
import PostViewer from "./PostViewer";
import { useDesktop } from "../hooks/useDesktop";
import Readme from "../apps/Readme";
import Finder from "../apps/Finder";

// Lazy app registry — each app gets imported once we add it. Listed apps
// not yet implemented fall through to a placeholder. Future tasks replace
// the placeholder imports.
function AppHost({ app, win, desktop }) {
  switch (app) {
    case "readme":
      return <Readme onLaunch={desktop.launch} />;
    case "finder":
      return <Finder />;
    default:
      return (
        <div style={{ padding: 24, fontFamily: "var(--mono)", color: "var(--mut)" }}>
          [{app}] not implemented yet
        </div>
      );
  }
}

export default function Desktop({ autoOpen, autoOpenSlug, freshBoot }) {
  const desktop = useDesktop();
  const [postSlug, setPostSlug] = useState(autoOpenSlug || null);

  // Auto-open behavior on mount based on the route.
  useEffect(() => {
    if (autoOpenSlug) {
      // Open Notes underneath so closing PostViewer reveals it.
      desktop.launch("notes", { selectedSlug: autoOpenSlug });
      setPostSlug(autoOpenSlug);
      return;
    }
    if (autoOpen) {
      desktop.launch(autoOpen);
      return;
    }
    if (freshBoot) {
      desktop.launch("readme");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ⌘K / Ctrl+K spotlight + global escape.
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        desktop.toggleSpotlight();
      } else if (e.key === "Escape") {
        desktop.closeSpotlight();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [desktop]);

  // Terminal "exit" command dispatches a custom event we listen for here.
  useEffect(() => {
    const onCloseTerm = () =>
      desktop.windows
        .filter((w) => w.app === "terminal")
        .forEach((w) => desktop.close(w.id));
    window.addEventListener("hemos-close-term", onCloseTerm);
    return () => window.removeEventListener("hemos-close-term", onCloseTerm);
  }, [desktop]);

  const activeApp = desktop.windows.find((w) => w.id === desktop.focusId)?.app;
  const openApps = [...new Set(desktop.windows.map((w) => w.app))];

  const openPost = (slug) => {
    desktop.launch("notes", { selectedSlug: slug });
    setPostSlug(slug);
  };

  const runCveCommand = (id) => {
    desktop.launch("terminal", { runOnOpen: `cat cve ${id}` });
  };

  return (
    <div className="desktop">
      <Topbar activeApp={activeApp} onSpotlight={desktop.toggleSpotlight} />
      <div className="dmark">{` ▒ HEM-OS 1.7.0
  curiosity-d ✓
  43 pentests
  18 posts
  12 certs
  1  patent
  ∞  questions`}</div>

      {desktop.windows.map((w) => (
        <Window
          key={w.id}
          win={w}
          focused={w.id === desktop.focusId}
          onClose={desktop.close}
          onMinimize={desktop.minimize}
          onToggleMaximize={desktop.toggleMaximize}
          onFocus={desktop.focus}
          onMove={desktop.move}
          onResize={desktop.resize}
        >
          <AppHost app={w.app} win={w} desktop={{ ...desktop, openPost }} />
        </Window>
      ))}

      <Dock onLaunch={desktop.launch} openApps={openApps} />

      {desktop.spotlightOpen && (
        <div
          onClick={desktop.closeSpotlight}
          style={{ position: "fixed", inset: 0, zIndex: 70, background: "rgba(0,0,0,0.3)" }}
        >
          <Spotlight
            onClose={desktop.closeSpotlight}
            onLaunch={desktop.launch}
            onOpenPost={openPost}
            onRunCveCommand={runCveCommand}
          />
        </div>
      )}

      {postSlug && (
        <PostViewer slug={postSlug} onClose={() => setPostSlug(null)} />
      )}
    </div>
  );
}
```

- [ ] **Step 2: Add a placeholder PostViewer so Desktop builds**

Write to `app/src/shell/PostViewer.jsx`:

```jsx
// Placeholder — replaced by full implementation in Task 2.2.
export default function PostViewer() {
  return null;
}
```

- [ ] **Step 3: Verify build**

Run: `cd app && npm run build`
Expected: Build succeeds.

### Task 1.12: Create `shell/MobileShell.jsx` (stub)

**Files:**
- Create: `app/src/shell/MobileShell.jsx`

- [ ] **Step 1: Create file (stub — full implementation in Phase 4)**

Write to `app/src/shell/MobileShell.jsx`:

```jsx
// Mobile shell — stub that renders a "best on desktop" message.
// Full implementation in Task 4.1.
export default function MobileShell() {
  return (
    <div style={{
      position: "fixed",
      inset: 0,
      background: "linear-gradient(180deg,#0a0e16,#050810)",
      color: "var(--ink)",
      fontFamily: "var(--mono)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: 24,
      textAlign: "center",
    }}>
      <div style={{ color: "var(--acc)", fontWeight: 700, fontSize: 24, marginBottom: 8 }}>
        HEM-OS
      </div>
      <div style={{ color: "var(--ink-d)", fontSize: 13 }}>
        Mobile shell coming online. Best experienced on desktop for now.
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `cd app && npm run build`
Expected: Build succeeds.

### Task 1.13: Create `apps/Readme.jsx`

**Files:**
- Create: `app/src/apps/Readme.jsx`

- [ ] **Step 1: Create file**

Write to `app/src/apps/Readme.jsx`:

```jsx
import { APPS } from "../data/apps";

const QUICK = ["finder", "notes", "files", "terminal", "timeline", "mail"];

export default function Readme({ onLaunch }) {
  return (
    <div className="ar">
      <h1>Welcome to HEM-OS.</h1>
      <div className="sb">// boot complete · all subsystems online</div>
      <p>
        This is Hem Parekh's portfolio, but installed as an operating system.
        Every section lives in an app. Open the dock, double-click, drag windows,
        type commands.
      </p>
      <div className="tp">
        Press <kbd>⌘K</kbd> (or <kbd>Ctrl+K</kbd>) for spotlight — search across
        apps, posts, projects, and CVEs.
      </div>
      <p>Quick launch:</p>
      <div className="ql">
        {QUICK.map((id) => {
          const meta = APPS[id];
          const label = meta.title.split("—")[0].trim();
          const subtitle = (meta.title.split("—")[1] || "").trim();
          return (
            <div key={id} className="q" onClick={() => onLaunch(id)}>
              <div className={`mi ${meta.g}`} />
              <div>
                <div style={{ fontWeight: 600 }}>{label}</div>
                <div style={{ fontSize: 11, color: "var(--mut)", fontFamily: "var(--mono)" }}>
                  {subtitle}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <p style={{ color: "var(--mut)", fontSize: 12, fontFamily: "var(--mono)", marginTop: 24 }}>
        // Try the Terminal: type{" "}
        <span style={{ color: "var(--acc2)" }}>cves</span>,{" "}
        <span style={{ color: "var(--acc2)" }}>cat .now</span>, or{" "}
        <span style={{ color: "var(--acc2)" }}>fortune</span>.
      </p>
    </div>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `cd app && npm run build`
Expected: Build succeeds.

### Task 1.14: Extend `data/content.js` with HEM-OS fields

**Files:**
- Modify: `app/src/data/content.js` (append new exports — keep all existing ones unchanged)

- [ ] **Step 1: Append new exports**

Add to the end of `app/src/data/content.js`:

```js

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
  email: "hemparekh1596@gmail.com",
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
```

- [ ] **Step 2: Verify build**

Run: `cd app && npm run build`
Expected: Build succeeds.

### Task 1.15: Create `apps/Finder.jsx`

**Files:**
- Create: `app/src/apps/Finder.jsx`

- [ ] **Step 1: Create file**

Write to `app/src/apps/Finder.jsx`:

```jsx
import { about, identity, manifesto, stats } from "../data/content";

export default function Finder() {
  const initials = identity.name.split(" ").map((p) => p[0]).join("");
  return (
    <div className="afi">
      <div className="sd">
        <div className="gp">Profile</div>
        <div className="it on">
          <span className="d" style={{ background: "linear-gradient(135deg,var(--acc),var(--acc3))" }} />
          about.txt
        </div>
        <div className="it">
          <span className="d" style={{ background: "var(--acc2)" }} />
          manifesto.md
        </div>
        <div className="it">
          <span className="d" style={{ background: "var(--ylw)" }} />
          numbers.csv
        </div>
      </div>
      <div className="mn">
        <div className="hr">
          <div className="av">{initials}</div>
          <div>
            <h1>{identity.name}</h1>
            <div className="role">{identity.role}</div>
            <div className="meta">
              <span>● {identity.current}</span>
              <span>📍 {identity.location}</span>
              <span>⏱ {identity.tz}</span>
            </div>
          </div>
        </div>

        <div className="sec">
          <h2>// about</h2>
          <div style={{ fontSize: 14, lineHeight: 1.6, color: "var(--ink-d)" }}>
            {about.text}
          </div>
        </div>

        <div className="sec">
          <h2>// manifesto</h2>
          {manifesto.map((b, i) => (
            <div key={i} className="bel">
              <span className="k">{b.k}</span>
              {b.v}
            </div>
          ))}
        </div>

        <div className="sec">
          <h2>// numbers</h2>
          <div className="st">
            {stats.map((s, i) => (
              <div key={i} className="s">
                <div className="n">{s.n}</div>
                <div className="l">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `cd app && npm run build`
Expected: Build succeeds.

### Task 1.16: Rewrite `App.jsx` (router + viewport detection + boot gate)

**Files:**
- Replace: `app/src/App.jsx`

- [ ] **Step 1: Replace contents of `app/src/App.jsx`**

Write to `app/src/App.jsx`:

```jsx
import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  useSearchParams,
  useLocation,
} from "react-router-dom";
import Boot from "./shell/Boot";
import Desktop from "./shell/Desktop";
import MobileShell from "./shell/MobileShell";
import { useIsMobile } from "./hooks/useIsMobile";

const BOOT_FLAG = "hemos:bootSeen";

// Single shell rendered per-route. Each route invocation tells the shell
// which app to auto-open (or which post slug to show in PostViewer).
function ShellGate({ autoOpen, autoOpenSlug }) {
  const [params] = useSearchParams();
  const isMobile = useIsMobile();
  const forceBoot = params.get("boot") === "1";
  const isDeepLink = Boolean(autoOpen) || Boolean(autoOpenSlug);
  const [phase, setPhase] = useState(() => {
    if (forceBoot) return "boot";
    if (isDeepLink) return "shell";
    if (typeof window !== "undefined" && localStorage.getItem(BOOT_FLAG) === "1") {
      return "shell";
    }
    return "boot";
  });

  // Was this a fresh boot? Track so Desktop knows whether to auto-launch Readme.
  const [freshBoot, setFreshBoot] = useState(false);

  useEffect(() => {
    if (phase === "shell") {
      // Always set body class; only one theme.
      document.body.classList.add("dark");
    }
  }, [phase]);

  if (phase === "boot") {
    return (
      <Boot
        onDone={() => {
          try { localStorage.setItem(BOOT_FLAG, "1"); } catch (_) {}
          setFreshBoot(true);
          setPhase("shell");
        }}
      />
    );
  }

  return isMobile ? (
    <MobileShell autoOpen={autoOpen} autoOpenSlug={autoOpenSlug} />
  ) : (
    <Desktop autoOpen={autoOpen} autoOpenSlug={autoOpenSlug} freshBoot={freshBoot} />
  );
}

function PostRoute() {
  const { slug } = useParams();
  return <ShellGate autoOpenSlug={slug} />;
}

function HomeRoute() {
  return <ShellGate />;
}

function AppRoute({ app }) {
  return <ShellGate autoOpen={app} />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="/blog/:slug" element={<PostRoute />} />
        <Route path="/blogs" element={<AppRoute app="notes" />} />
        <Route path="/projects" element={<AppRoute app="files" />} />
        <Route path="/certifications" element={<AppRoute app="timeline" />} />
        <Route path="/cve-map" element={<AppRoute app="games" />} />
        <Route path="*" element={<HomeRoute />} />
      </Routes>
    </BrowserRouter>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `cd app && npm run build`
Expected: Build succeeds. Some warnings about unused legacy components are acceptable — they will be removed in Phase 4.

### Task 1.17: Phase 1 checkpoint — preview locally + user gate

- [ ] **Step 1: Start the dev server**

Run: `cd app && npm run dev`
Expected: Vite reports `Local: http://localhost:5173`.

- [ ] **Step 2: Manual verification checklist**

Open `http://localhost:5173` and verify:

1. **First load:** Boot animation plays — black screen, "HEM-OS" logo, 8 systemd-style log lines tick out over ~2 seconds, progress bar fills.
2. After boot completes, the desktop appears with grid background, top menu bar (`⌘ HEM-OS`, "Desktop", File/Edit/View, online dot, ⌘K hint, clock).
3. Readme window auto-opens on first boot.
4. Dock at bottom shows 8 icons (no Readme — readme is auto-only).
5. Click any dock icon: a window opens. Try **Finder** — verify the about/manifesto/numbers content renders.
6. Drag the window's title bar — it moves.
7. Drag the bottom-right corner handle — it resizes (min 360×220).
8. Click the green traffic light or double-click the title bar — it maximizes (top under topbar, bottom above dock).
9. Click the yellow traffic light — it minimizes (window vanishes; clicking the dock icon again restores it).
10. Click the red traffic light — it closes.
11. Click outside windows — focus/highlighted z-order works (focused window has cyan glow).
12. Press `⌘K` (or `Ctrl+K`) — Spotlight modal appears at top, searchable.
13. Type "fin" in Spotlight — Finder app appears in results. Press Enter — it opens.
14. Refresh the page (`Cmd+R`) — boot does NOT play again (localStorage flag set). Readme does NOT auto-open. Empty desktop.
15. Visit `http://localhost:5173/?boot=1` — boot plays again.
16. Open DevTools, run `localStorage.removeItem("hemos:bootSeen")`, refresh — boot plays.

- [ ] **Step 3: Stop the dev server (Ctrl+C) and report status to the user**

Tell the user: "Phase 1 complete. Boot + Desktop + Topbar + Dock + draggable Window + Spotlight + Readme + Finder all working. Apps not yet implemented (Notes, Files, Terminal, Timeline, Mail, System, Games) currently render `[<app>] not implemented yet` placeholders. Ready to proceed to Phase 2 (Notes + PostViewer + giscus)?"

**Wait for user authorization before starting Phase 2. Do not commit, push, or stash.**

---

# Phase 2 — Blog + PostViewer + deep links

After this phase, opening any of the 18 posts via Notes works (sidebar list → click → preview pane → Maximize button), AND visiting `/blog/<slug>` directly auto-opens HEM-OS with that post in PostViewer. giscus comments load.

### Task 2.1: Create `apps/Notes.jsx`

**Files:**
- Create: `app/src/apps/Notes.jsx`

- [ ] **Step 1: Create file**

Write to `app/src/apps/Notes.jsx`:

```jsx
import { useEffect, useMemo, useState } from "react";
import { blogs } from "../data/content";

export default function Notes({ initialSlug, onOpenPost }) {
  const [q, setQ] = useState("");
  const [selSlug, setSelSlug] = useState(initialSlug || (blogs[0] && blogs[0].slug));

  useEffect(() => {
    if (initialSlug) setSelSlug(initialSlug);
  }, [initialSlug]);

  const filtered = useMemo(() => {
    if (!q) return blogs;
    const needle = q.toLowerCase();
    return blogs.filter(
      (b) =>
        b.title.toLowerCase().includes(needle) ||
        b.excerpt.toLowerCase().includes(needle) ||
        (b.category || "").toLowerCase().includes(needle)
    );
  }, [q]);

  const sel = blogs.find((b) => b.slug === selSlug) || blogs[0];

  return (
    <div className="an">
      <div className="ls">
        <div className="search">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="search posts…"
            spellCheck={false}
          />
        </div>
        {filtered.map((p) => (
          <div
            key={p.slug}
            className={`it ${p.slug === selSlug ? "on" : ""}`}
            onClick={() => setSelSlug(p.slug)}
          >
            <div className="ttl">{p.title}</div>
            <div className="mt">
              <span>{p.date}</span>
              <span>·</span>
              <span>{p.readTime}</span>
              <span className="tg">[{p.category}]</span>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="it" style={{ color: "var(--mut)" }}>no matches</div>
        )}
      </div>
      <div className="dt">
        {sel && (
          <>
            <h1>{sel.title}</h1>
            <div className="mt">{sel.date} · {sel.readTime} · {sel.category}</div>
            <div className="bd">
              <p>{sel.excerpt}</p>
            </div>
            <div className="max" onClick={() => onOpenPost && onOpenPost(sel.slug)}>
              ⤢ Maximize — read full post
            </div>
          </>
        )}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `cd app && npm run build`
Expected: Build succeeds.

### Task 2.2: Create `shell/PostViewer.jsx` (full implementation)

**Files:**
- Replace: `app/src/shell/PostViewer.jsx`

- [ ] **Step 1: Replace contents of `app/src/shell/PostViewer.jsx`**

Write to `app/src/shell/PostViewer.jsx`:

```jsx
import { useEffect, useMemo } from "react";
import { blogs } from "../data/content";
import { posts } from "../data/posts";

// Strip nav/header/footer/style chrome from imported blog HTML and unwrap
// container divs so the post integrates with our centered layout.
function sanitizePostContent(htmlString) {
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");

    const removeSelectors = [
      "style",
      "script",
      "link",
      "nav",
      "header",
      "footer",
      ".navbar",
      ".nav-container",
      ".theme-toggle",
      ".footer",
      ".social-links",
      ".social-icons",
    ];
    doc.querySelectorAll(removeSelectors.join(",")).forEach((node) => node.remove());
    doc.querySelectorAll("[style]").forEach((el) => el.removeAttribute("style"));

    const firstH1 = doc.querySelector("h1");
    if (firstH1) firstH1.remove();

    const mainCandidates = [".blog-text", "article", ".blog-post-content", "main"];
    let container = doc.body;
    for (const selector of mainCandidates) {
      const found = doc.querySelector(selector);
      if (found) {
        container = found;
        break;
      }
    }

    container.querySelectorAll(".container").forEach((node) => {
      while (node.firstChild) {
        node.parentNode.insertBefore(node.firstChild, node);
      }
      node.remove();
    });

    Array.from(container.querySelectorAll("h2, h3")).forEach((heading, idx) => {
      if (!heading.id) heading.id = `section-${idx + 1}`;
    });

    return container.innerHTML || htmlString;
  } catch (_) {
    return htmlString;
  }
}

export default function PostViewer({ slug, onClose }) {
  const postEntry = posts[slug];
  const meta = blogs.find((b) => b.slug === slug);

  const content = useMemo(() => {
    if (!postEntry) return "";
    return sanitizePostContent(postEntry.content);
  }, [postEntry]);

  // Mount giscus once per slug. Theme is fixed dark (no toggle).
  useEffect(() => {
    if (!postEntry) return undefined;
    const container = document.querySelector(".pv-comments");
    if (!container) return undefined;
    container.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.setAttribute("data-giscus", "true");
    script.setAttribute("data-repo", "Hem1700/hem1700.github.io");
    script.setAttribute("data-repo-id", "R_kgDONilgZg");
    script.setAttribute("data-category", "General");
    script.setAttribute("data-category-id", "DIC_kwDONilgZs4CzSR2");
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "1");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "top");
    script.setAttribute("data-lang", "en");
    script.setAttribute("data-theme", "dark");
    container.appendChild(script);

    return () => { container.innerHTML = ""; };
  }, [slug, postEntry]);

  if (!postEntry) {
    return (
      <div className="pv">
        <div className="pv-bar">
          <div className="pv-close" onClick={onClose}>✕</div>
          <div className="pv-ti">Post not found</div>
        </div>
        <div className="pv-body">
          <h1 className="pv-title">Post not found</h1>
          <p>Signal lost. Close this and try another post from the Notes app.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pv">
      <div className="pv-bar">
        <div className="pv-close" onClick={onClose}>✕</div>
        <div className="pv-ti">{postEntry.title}</div>
      </div>
      <div className="pv-body">
        <h1 className="pv-title">{postEntry.title}</h1>
        {meta && <div className="pv-meta">{meta.date} · {meta.readTime} · {meta.category}</div>}
        <div className="pv-content" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
      <div className="pv-comments" />
    </div>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `cd app && npm run build`
Expected: Build succeeds.

### Task 2.3: Wire Notes into the Desktop AppHost

**Files:**
- Modify: `app/src/shell/Desktop.jsx`

- [ ] **Step 1: Update `Desktop.jsx` `AppHost` to render Notes**

Replace the `AppHost` function in `app/src/shell/Desktop.jsx`:

```jsx
function AppHost({ app, win, desktop }) {
  switch (app) {
    case "readme":
      return <Readme onLaunch={desktop.launch} />;
    case "finder":
      return <Finder />;
    case "notes":
      return (
        <Notes
          initialSlug={win.appState && win.appState.selectedSlug}
          onOpenPost={desktop.openPost}
        />
      );
    default:
      return (
        <div style={{ padding: 24, fontFamily: "var(--mono)", color: "var(--mut)" }}>
          [{app}] not implemented yet
        </div>
      );
  }
}
```

Also add the import at the top of the file:

```jsx
import Notes from "../apps/Notes";
```

- [ ] **Step 2: Verify build**

Run: `cd app && npm run build`
Expected: Build succeeds.

### Task 2.4: Phase 2 checkpoint — preview locally + user gate

- [ ] **Step 1: Start the dev server**

Run: `cd app && npm run dev`

- [ ] **Step 2: Manual verification checklist**

1. Open `http://localhost:5173/blog/villager_inside_out` directly. Boot does NOT play. PostViewer opens immediately with the Villager post rendered, dark code blocks, headings styled, comments at the bottom (giscus iframe loads).
2. Close the post (✕) — desktop revealed with Notes window open at that post (sidebar item highlighted).
3. Click another post in Notes sidebar → preview pane updates → click Maximize ⤢ → PostViewer for that post opens.
4. Type "TSA" in the search box — list filters.
5. Open `http://localhost:5173/blog/non-existent-slug` — PostViewer shows "Post not found".
6. Open `http://localhost:5173/blog/cow` — Dirty Cow post opens, post body renders, comments load.
7. Verify giscus iframe URL contains `pathname` mapping for `/blog/cow` (open DevTools → Network → look at giscus iframe URL).

- [ ] **Step 3: Stop the dev server and report status**

Tell the user: "Phase 2 complete. Notes + PostViewer + giscus + deep links all working. Ready for Phase 3 (Files, Timeline, Mail, Terminal, System, Games + remaining deep-link routes)?"

**Wait for user authorization. Do not commit/push/stash.**

---

# Phase 3 — Remaining apps

After this phase: all 9 apps function, all 5 existing deep-link routes work (`/blogs`, `/projects`, `/certifications`, `/cve-map`, `/blog/:slug`), Terminal supports interactive commands, Games wraps the existing CVE games.

### Task 3.1: Create `apps/Files.jsx`

**Files:**
- Create: `app/src/apps/Files.jsx`

- [ ] **Step 1: Create file**

Write to `app/src/apps/Files.jsx`:

```jsx
import { useEffect, useState } from "react";
import { projects, projectMeta } from "../data/content";

function metaFor(p) {
  return projectMeta[p.title] || {
    code: p.title.split(" ").map((w) => w[0]).join("").slice(0, 4).toUpperCase(),
    status: "—",
    metric: "—",
    stack: p.tags || [],
  };
}

export default function Files({ initialTitle }) {
  const [openIdx, setOpenIdx] = useState(null);

  useEffect(() => {
    if (initialTitle) {
      const idx = projects.findIndex((p) => p.title === initialTitle);
      if (idx >= 0) setOpenIdx(idx);
    }
  }, [initialTitle]);

  if (openIdx !== null) {
    const p = projects[openIdx];
    const m = metaFor(p);
    return (
      <div className="af">
        <div className="pdr">
          <div className="bk" onClick={() => setOpenIdx(null)}>← projects</div>
          <h2>{p.title}</h2>
          <div className="ct">{m.code} · {(p.tags || []).join(" / ")} · {m.status}</div>
          <p className="bl">{p.description}</p>
          <div className="sp">
            <div className="s"><div className="l">METRIC</div><div className="v">{m.metric}</div></div>
            <div className="s"><div className="l">STATUS</div><div className="v">{m.status}</div></div>
          </div>
          <div className="sk">{m.stack.map((s) => <span key={s} className="ch">{s}</span>)}</div>
          {p.href && p.href !== "#" && (
            <p style={{ marginTop: 18 }}>
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                style={{ color: "var(--acc2)", fontFamily: "var(--mono)", fontSize: 12 }}
              >
                {p.href} →
              </a>
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="af">
      <div className="tb2">
        <div className="crm">/home/hem<span className="sp">›</span>projects</div>
      </div>
      <div className="grd">
        {projects.map((p, i) => {
          const m = metaFor(p);
          return (
            <div key={p.title} className="fi" onClick={() => setOpenIdx(i)}>
              <div className="ic">{p.title[0]}</div>
              <div className="ttl">{p.title}</div>
              <div className="sz">{m.code} · {(p.tags || [])[0] || "—"}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `cd app && npm run build`
Expected: Build succeeds.

### Task 3.2: Create `apps/Timeline.jsx`

**Files:**
- Create: `app/src/apps/Timeline.jsx`

- [ ] **Step 1: Create file**

Write to `app/src/apps/Timeline.jsx`:

```jsx
import { certMeta, experience } from "../data/content";

export default function Timeline() {
  return (
    <div className="atm">
      <h1>Career Trajectory</h1>
      <div className="sb">// {experience.length} stops · {certMeta.length} certifications</div>
      <div className="tl">
        {experience.map((e, i) => {
          const isCurrent = e.range.toLowerCase().includes("present");
          return (
            <div key={i} className={`stop ${isCurrent ? "cur" : ""}`}>
              <div className="rg">{e.range}</div>
              <div className="ro">
                {e.role}
                {isCurrent && <span className="pil">NOW</span>}
              </div>
              <div className="or">{e.org}</div>
              <div className="bl">{e.desc}</div>
            </div>
          );
        })}
      </div>
      <h2 style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--mut)", letterSpacing: ".16em", textTransform: "uppercase", margin: "22px 0 10px" }}>
        // CERTIFICATIONS
      </h2>
      <div className="cg">
        {certMeta.map((c, i) => (
          <a key={i} className="ce" href={c.href} target="_blank" rel="noreferrer">
            <div className="t">{c.title}</div>
            <div className="m">{c.iss} · {c.y}</div>
          </a>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `cd app && npm run build`
Expected: Build succeeds.

### Task 3.3: Create `apps/Mail.jsx`

**Files:**
- Create: `app/src/apps/Mail.jsx`

- [ ] **Step 1: Create file**

Write to `app/src/apps/Mail.jsx`:

```jsx
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
          <div key={s.label} className="it" onClick={() => window.open(s.href, "_blank")}>
            {s.label}<span className="ct">{s.handle}</span>
          </div>
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
```

- [ ] **Step 2: Verify build**

Run: `cd app && npm run build`
Expected: Build succeeds.

### Task 3.4: Create `apps/System.jsx`

**Files:**
- Create: `app/src/apps/System.jsx`

- [ ] **Step 1: Create file**

Write to `app/src/apps/System.jsx`:

```jsx
import { useEffect, useState } from "react";
import { now } from "../data/content";

export default function System() {
  const [t, setT] = useState(0);
  useEffect(() => {
    const i = setInterval(() => setT((x) => x + 1), 1500);
    return () => clearInterval(i);
  }, []);

  const cur = (n, off) =>
    Math.max(5, Math.min(95, n + Math.sin((t + off) * 0.6) * 8));

  const bars = [
    { label: "cpu / curiosity-d", base: 72, off: 0 },
    { label: "mem / writing-cache", base: 58, off: 1 },
    { label: "net / signal-strength", base: 80, off: 2 },
    { label: "focus / shipping", base: 64, off: 3 },
  ];

  return (
    <div className="asy">
      <h1>system_monitor</h1>
      <div className="sb">// hem@hemos · uptime: stable since 2018</div>
      <div className="gg">
        {bars.map((b) => {
          const v = cur(b.base, b.off);
          return (
            <div key={b.label} className="gu">
              <div className="l">
                <span>{b.label}</span>
                <span className="v">{v.toFixed(0)}%</span>
              </div>
              <div className="br">
                <div className="f" style={{ width: v + "%" }} />
              </div>
            </div>
          );
        })}
      </div>
      <h2>// processes / now</h2>
      <ul className="nl">
        {now.map((n, i) => <li key={i}>{n}</li>)}
      </ul>
    </div>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `cd app && npm run build`
Expected: Build succeeds.

### Task 3.5: Create `apps/Games.jsx`

**Files:**
- Create: `app/src/apps/Games.jsx`

- [ ] **Step 1: Create file**

Write to `app/src/apps/Games.jsx`:

```jsx
import { useMemo, useState } from "react";
import CveNodeHunt from "../components/CveNodeHunt";
import CvePacketIntercept from "../components/CvePacketIntercept";
import CveMalwareMaze from "../components/CveMalwareMaze";
import { blogs } from "../data/content";

const GAMES = {
  "node-hunt": { label: "Node Hunt", Cmp: CveNodeHunt },
  "packet-intercept": { label: "Packet Intercept", Cmp: CvePacketIntercept },
  "malware-maze": { label: "Malware Maze", Cmp: CveMalwareMaze },
};

export default function Games({ initialGame = "node-hunt" }) {
  const [gameMode, setGameMode] = useState(GAMES[initialGame] ? initialGame : "node-hunt");
  const [difficulty, setDifficulty] = useState("standard");

  const cveEntries = useMemo(() => {
    const isCveLike = (t) => t.toUpperCase().includes("CVE");
    const severityFromId = (id) => {
      const digits = (id || "").match(/\d/g) || [];
      const sum = digits.reduce((acc, d) => acc + Number(d), 0);
      const bands = ["Low", "Medium", "High", "Critical"];
      return bands[sum % bands.length];
    };
    const cvssFromSeverity = (s) =>
      s === "Critical" ? 9.4 : s === "High" ? 8.1 : s === "Medium" ? 6.0 : 4.0;
    const parseYear = (d) => {
      if (!d) return "Unknown";
      const y = new Date(d).getFullYear();
      return Number.isFinite(y) ? String(y) : "Unknown";
    };
    return blogs
      .filter((b) => isCveLike(b.title))
      .map((b) => {
        const idMatch = b.title.match(/CVE[-–](\d{4})[-–]?(\d+)/i);
        const id = idMatch ? `CVE-${idMatch[1]}-${idMatch[2]}` : b.slug.toUpperCase();
        const sev = severityFromId(id);
        return {
          id,
          title: b.title,
          severity: sev,
          cvss: cvssFromSeverity(sev),
          year: parseYear(b.date),
          kev: false,
          summary: b.excerpt,
          href: b.href || `/blog/${b.slug}`,
        };
      });
  }, []);

  const ActiveCmp = GAMES[gameMode].Cmp;

  return (
    <div style={{ padding: 16, height: "100%", overflow: "auto" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 14 }}>
        <div style={{ display: "flex", gap: 6 }}>
          {Object.entries(GAMES).map(([key, g]) => (
            <button
              key={key}
              type="button"
              onClick={() => setGameMode(key)}
              style={{
                padding: "6px 12px",
                background: gameMode === key ? "rgba(255,94,58,0.15)" : "rgba(255,255,255,0.04)",
                border: `1px solid ${gameMode === key ? "var(--acc)" : "var(--line)"}`,
                color: gameMode === key ? "var(--acc)" : "var(--ink-d)",
                borderRadius: 6,
                fontFamily: "var(--mono)",
                fontSize: 11,
                cursor: "pointer",
                letterSpacing: ".06em",
              }}
            >
              {g.label}
            </button>
          ))}
        </div>
        <div style={{ marginLeft: "auto", display: "flex", gap: 6, alignItems: "center" }}>
          <span style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--mut)", letterSpacing: ".1em" }}>
            DIFFICULTY
          </span>
          {["easy", "standard", "hard"].map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => setDifficulty(d)}
              style={{
                padding: "4px 10px",
                background: difficulty === d ? "rgba(110,231,255,0.15)" : "rgba(255,255,255,0.04)",
                border: `1px solid ${difficulty === d ? "var(--acc2)" : "var(--line)"}`,
                color: difficulty === d ? "var(--acc2)" : "var(--ink-d)",
                borderRadius: 4,
                fontFamily: "var(--mono)",
                fontSize: 10,
                cursor: "pointer",
              }}
            >
              {d}
            </button>
          ))}
        </div>
      </div>
      <ActiveCmp entries={cveEntries} difficulty={difficulty} />
    </div>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `cd app && npm run build`
Expected: Build succeeds.

### Task 3.6: Create `apps/Terminal.jsx`

**Files:**
- Create: `app/src/apps/Terminal.jsx`

- [ ] **Step 1: Create file**

Write to `app/src/apps/Terminal.jsx`:

```jsx
import { useEffect, useRef, useState } from "react";
import { APPS } from "../data/apps";
import { cves, identity, manifesto, now } from "../data/content";

const BANNER =
  "  _   _ _____ __  __        ___  ____\n" +
  " | | | | ____|  \\/  |      / _ \\/ ___|\n" +
  " | |_| |  _| | |\\/| |____ | | | \\___ \\\n" +
  " |  _  | |___| |  | |____|| |_| |___) |\n" +
  " |_| |_|_____|_|  |_|       \\___/|____/";

const VALID_GAMES = ["node-hunt", "packet-intercept", "malware-maze"];

export default function Terminal({ runOnOpen, onLaunch }) {
  const [hist, setHist] = useState([
    { type: "ban", t: BANNER },
    { type: "dm", t: "HEM-OS 1.7.0 — type 'help' to begin." },
  ]);
  const [input, setInput] = useState("");
  const [cmds, setCmds] = useState([]);
  const [ci, setCi] = useState(-1);
  const ref = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (ref.current) ref.current.scrollTop = ref.current.scrollHeight;
  }, [hist]);

  const run = (cmd) => {
    const out = [{ type: "in", t: cmd }];
    const a = cmd.trim().split(/\s+/);
    const c = a[0];
    if (!c) {
      // empty command — show prompt only
    } else if (c === "help") {
      out.push(
        { type: "em", t: "available: help, whoami, ls, cves, cat <file>, open <app>, play <game>, fortune, clear, exit" },
        { type: "dm", t: "files: about.txt, .now, manifesto.md, cve <ID>" }
      );
    } else if (c === "whoami") {
      out.push(
        { type: "em", t: `${identity.name} — ${identity.role}` },
        { type: "dm", t: `${identity.current} · ${identity.location}` }
      );
    } else if (c === "ls") {
      out.push({ type: "em", t: "about.txt  .now  manifesto.md  projects/  writing/  cves/" });
    } else if (c === "cves") {
      out.push({ type: "em", t: "ID                 TARGET                  CLASS                  YEAR  ROLE" });
      cves.forEach((v) => {
        out.push({
          type: "ln",
          t: `${v.id.padEnd(18)} ${(v.target || "").padEnd(23)} ${(v.class || "").padEnd(22)} ${v.year}  study`,
        });
      });
    } else if (c === "cat") {
      const f = a[1];
      if (f === "about.txt" || f === "about") {
        out.push({ type: "em", t: `${identity.name} · ${identity.role}\n${identity.current} · ${identity.location}\n` });
      } else if (f === ".now") {
        now.forEach((n) => out.push({ type: "ln", t: `▸ ${n}` }));
      } else if (f === "manifesto.md") {
        manifesto.forEach((m) => out.push({ type: "ln", t: `${m.k} ${m.v}` }));
      } else if (f === "cve" && a[2]) {
        const v = cves.find((x) => x.id.toLowerCase() === a[2].toLowerCase());
        if (v) {
          out.push({
            type: "em",
            t: `${v.id}\n  target: ${v.target}\n  class:  ${v.class}\n  year:   ${v.year}\n  blog:   /blog/${v.slug}`,
          });
        } else {
          out.push({ type: "bd", t: `cat: cve ${a[2]}: not found` });
        }
      } else {
        out.push({ type: "bd", t: `cat: ${f || "(no file)"}: No such file` });
      }
    } else if (c === "open") {
      const t = a[1];
      if (t && APPS[t]) {
        if (onLaunch) onLaunch(t);
        out.push({ type: "dm", t: `opening ${t}…` });
      } else {
        out.push({ type: "bd", t: `open: ${t || "(no app)"}: unknown app` });
      }
    } else if (c === "play") {
      const g = a[1];
      if (g && VALID_GAMES.includes(g)) {
        if (onLaunch) onLaunch("games", { initialGame: g });
        out.push({ type: "dm", t: `loading ${g}…` });
      } else {
        out.push({
          type: "bd",
          t: `play: ${g || "(no game)"}: unknown. try: ${VALID_GAMES.join(", ")}`,
        });
      }
    } else if (c === "fortune") {
      const f = manifesto[Math.floor(Math.random() * manifesto.length)];
      out.push({ type: "wn", t: `❝ ${f.v} ❞` });
    } else if (c === "clear") {
      setHist([]);
      return;
    } else if (c === "exit") {
      window.dispatchEvent(new Event("hemos-close-term"));
      return;
    } else {
      out.push({ type: "bd", t: `${c}: command not found` });
    }
    setHist((h) => [...h, ...out]);
  };

  // Auto-run an initial command (e.g., spotlight CVE select).
  useEffect(() => {
    if (runOnOpen) {
      run(runOnOpen);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [runOnOpen]);

  const onKey = (e) => {
    if (e.key === "Enter") {
      if (input.trim()) {
        setCmds((cur) => [...cur, input]);
        setCi(-1);
        run(input);
      }
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmds.length) {
        const ni = ci < 0 ? cmds.length - 1 : Math.max(0, ci - 1);
        setCi(ni);
        setInput(cmds[ni]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (ci >= 0) {
        const ni = ci + 1;
        if (ni >= cmds.length) {
          setCi(-1);
          setInput("");
        } else {
          setCi(ni);
          setInput(cmds[ni]);
        }
      }
    }
  };

  return (
    <div className="at" ref={ref} onClick={() => inputRef.current && inputRef.current.focus()}>
      {hist.map((l, i) => {
        if (l.type === "ban") return <pre key={i} className="ban">{l.t}</pre>;
        if (l.type === "in") {
          return (
            <div key={i} className="ln">
              <span className="pp">hem@hemos:~$</span> {l.t}
            </div>
          );
        }
        return <div key={i} className={`ln ${l.type}`}>{l.t}</div>;
      })}
      <div className="il">
        <span className="pp">hem@hemos:~$</span>
        <input
          ref={inputRef}
          className="ip"
          autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKey}
          spellCheck={false}
        />
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `cd app && npm run build`
Expected: Build succeeds.

### Task 3.7: Wire all remaining apps into Desktop AppHost

**Files:**
- Modify: `app/src/shell/Desktop.jsx`

- [ ] **Step 1: Replace Desktop.jsx imports + AppHost**

In `app/src/shell/Desktop.jsx`, replace the imports block at the top to:

```jsx
import { useEffect, useState } from "react";
import Topbar from "./Topbar";
import Dock from "./Dock";
import Window from "./Window";
import Spotlight from "./Spotlight";
import PostViewer from "./PostViewer";
import { useDesktop } from "../hooks/useDesktop";
import Readme from "../apps/Readme";
import Finder from "../apps/Finder";
import Notes from "../apps/Notes";
import Files from "../apps/Files";
import Terminal from "../apps/Terminal";
import Timeline from "../apps/Timeline";
import Mail from "../apps/Mail";
import System from "../apps/System";
import Games from "../apps/Games";
```

And replace the `AppHost` function with:

```jsx
function AppHost({ app, win, desktop }) {
  const appState = win.appState || {};
  switch (app) {
    case "readme":
      return <Readme onLaunch={desktop.launch} />;
    case "finder":
      return <Finder />;
    case "notes":
      return (
        <Notes
          initialSlug={appState.selectedSlug}
          onOpenPost={desktop.openPost}
        />
      );
    case "files":
      return <Files initialTitle={appState.selectedTitle} />;
    case "terminal":
      return (
        <Terminal
          runOnOpen={appState.runOnOpen}
          onLaunch={desktop.launch}
        />
      );
    case "timeline":
      return <Timeline />;
    case "mail":
      return <Mail />;
    case "system":
      return <System />;
    case "games":
      return <Games initialGame={appState.initialGame} />;
    default:
      return null;
  }
}
```

- [ ] **Step 2: Verify build**

Run: `cd app && npm run build`
Expected: Build succeeds.

### Task 3.8: Phase 3 checkpoint — preview locally + user gate

- [ ] **Step 1: Start the dev server**

Run: `cd app && npm run dev`

- [ ] **Step 2: Manual verification checklist**

1. From the dock, open every app: Finder, Notes, Files, Terminal, Timeline, Mail, System, Games. Each should render its content.
2. **Files**: click a project tile → detail view shows description, code, status, metric, stack. Back link returns to the grid.
3. **Timeline**: 5 experience entries (Amazon at top with NOW pill), 12 cert cards in the grid, each links out.
4. **Mail**: email link is `mailto:hemparekh1596@gmail.com`, social grid has all 5 entries.
5. **System**: bars animate, `.now` list renders 4 items.
6. **Games**: tab switcher works (Node Hunt / Packet Intercept / Malware Maze), difficulty toggle works, the existing game components render and accept `entries`.
7. **Terminal**: type `help` — list shown. `whoami` — name + role. `ls`, `cves` — table renders with all CVE entries. `cat about.txt`, `cat .now`, `cat manifesto.md`, `cat cve cve-2014-0160` — each renders correctly. `cat cve nope` — red "not found". `open files` — Files window opens. `play malware-maze` — Games window opens with malware-maze tab active. `fortune` — random manifesto line. `clear` — empties scrollback. Up/Down arrows cycle through history.
8. **Spotlight**: ⌘K opens. Search "TSA" — finds the post. Press Enter — PostViewer opens. ⌘K, search "FORGE" — finds project. Press Enter — Files opens with FORGE detail view. ⌘K, search "0160" — finds CVE-2014-0160. Press Enter — Terminal opens and runs `cat cve CVE-2014-0160`.
9. **Routes**:
   - `/blogs` → desktop with Notes auto-opened.
   - `/projects` → desktop with Files auto-opened.
   - `/certifications` → desktop with Timeline auto-opened.
   - `/cve-map` → desktop with Games auto-opened.
   - `/blog/cow` → PostViewer with Dirty Cow post immediately.
10. **Window interaction**: open 4 apps, drag them around, verify focus z-order, minimize all, restore by clicking dock, close one — dock running indicator disappears.

- [ ] **Step 3: Stop the dev server and report status**

Tell the user: "Phase 3 complete. All 9 apps + all deep-link routes + Terminal commands + Spotlight all functional. Ready for Phase 4 (mobile shell + cleanup of dropped legacy files)?"

**Wait for user authorization. Do not commit/push/stash.**

---

# Phase 4 — Mobile shell + cleanup

After this phase: mobile (≤ 768px) shows full-screen apps with bottom tab bar; legacy components/pages are deleted; project compiles cleanly with no unused imports.

### Task 4.1: Implement `MobileShell.jsx` (full)

**Files:**
- Replace: `app/src/shell/MobileShell.jsx`

- [ ] **Step 1: Replace contents**

Write to `app/src/shell/MobileShell.jsx`:

```jsx
import { useEffect, useMemo, useState } from "react";
import { APPS, ALL_APPS } from "../data/apps";
import Readme from "../apps/Readme";
import Finder from "../apps/Finder";
import Notes from "../apps/Notes";
import Files from "../apps/Files";
import Terminal from "../apps/Terminal";
import Timeline from "../apps/Timeline";
import Mail from "../apps/Mail";
import System from "../apps/System";
import Games from "../apps/Games";
import PostViewer from "./PostViewer";
import Spotlight from "./Spotlight";

function renderApp(app, args) {
  const a = args || {};
  switch (app) {
    case "readme":   return <Readme onLaunch={a.onLaunch} />;
    case "finder":   return <Finder />;
    case "notes":    return <Notes initialSlug={a.selectedSlug} onOpenPost={a.onOpenPost} />;
    case "files":    return <Files initialTitle={a.selectedTitle} />;
    case "terminal": return <Terminal runOnOpen={a.runOnOpen} onLaunch={a.onLaunch} />;
    case "timeline": return <Timeline />;
    case "mail":     return <Mail />;
    case "system":   return <System />;
    case "games":    return <Games initialGame={a.initialGame} />;
    default:         return null;
  }
}

export default function MobileShell({ autoOpen, autoOpenSlug }) {
  const [activeApp, setActiveApp] = useState(autoOpen || "readme");
  const [appArgs, setAppArgs] = useState({});
  const [postSlug, setPostSlug] = useState(autoOpenSlug || null);
  const [spotlightOpen, setSpotlightOpen] = useState(false);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(t);
  }, []);

  // If we deep-linked to a post, also seed Notes with the right slug so
  // closing PostViewer reveals the matching list selection.
  useEffect(() => {
    if (autoOpenSlug) {
      setActiveApp("notes");
      setAppArgs({ selectedSlug: autoOpenSlug });
    } else if (autoOpen) {
      setActiveApp(autoOpen);
    }
  }, [autoOpen, autoOpenSlug]);

  const launch = (app, state) => {
    setActiveApp(app);
    setAppArgs(state || {});
  };
  const openPost = (slug) => setPostSlug(slug);
  const runCveCommand = (id) => {
    setActiveApp("terminal");
    setAppArgs({ runOnOpen: `cat cve ${id}` });
  };

  const args = useMemo(
    () => ({ ...appArgs, onLaunch: launch, onOpenPost: openPost }),
    [appArgs]
  );

  return (
    <div className="mshell">
      <div className="mtop">
        <span className="brand">⌘ HEM-OS</span>
        <span>{APPS[activeApp]?.title || "Desktop"}</span>
        <span className="clk">
          {now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </span>
        <span className="sp-icon" onClick={() => setSpotlightOpen(true)}>⌕</span>
      </div>

      <div className="mbody">{renderApp(activeApp, args)}</div>

      <div className="mtabs">
        {ALL_APPS.map((id) => {
          const meta = APPS[id];
          const initial = meta.title.split(" ")[0][0];
          const label = meta.title.split("—")[0].trim();
          return (
            <div
              key={id}
              className={`mt ${activeApp === id ? "on" : ""}`}
              onClick={() => { setActiveApp(id); setAppArgs({}); }}
            >
              <div className={`mtg ${meta.g}`}>{initial}</div>
              <div className="mtl">{label}</div>
            </div>
          );
        })}
      </div>

      {postSlug && <PostViewer slug={postSlug} onClose={() => setPostSlug(null)} />}

      {spotlightOpen && (
        <div
          onClick={() => setSpotlightOpen(false)}
          style={{ position: "fixed", inset: 0, zIndex: 80, background: "rgba(0,0,0,0.4)" }}
        >
          <Spotlight
            onClose={() => setSpotlightOpen(false)}
            onLaunch={launch}
            onOpenPost={openPost}
            onRunCveCommand={runCveCommand}
          />
        </div>
      )}
    </div>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `cd app && npm run build`
Expected: Build succeeds.

### Task 4.2: Mobile manual testing

- [ ] **Step 1: Start dev server**

Run: `cd app && npm run dev`

- [ ] **Step 2: Mobile verification**

In Chrome DevTools, toggle device emulation to 375×667 (iPhone SE) and 414×896 (iPhone 11).

1. Open `http://localhost:5173/` — Boot plays once. After boot, MobileShell renders. Active app is Readme.
2. Bottom tab bar shows all 9 app icons; horizontally scrollable if cramped. Active icon is highlighted.
3. Tap a different app icon — content swaps; status strip updates.
4. Tap the magnifier in the top-right — Spotlight modal opens, full-width. Type a query, tap a result, the relevant app opens (or PostViewer for posts).
5. Tap **Notes** in the tab bar → tap the search box → filter posts → tap a post → preview pane shows on a single column → tap **Maximize ⤢** → PostViewer takes over fullscreen → close ✕ → back to Notes.
6. Visit `/blog/villager_inside_out` directly on mobile — PostViewer opens immediately. Comments load (giscus iframe responsive).
7. Resize browser back to desktop width — Desktop shell takes over. Resize back below 768px — MobileShell.

- [ ] **Step 3: Stop the dev server**

### Task 4.3: Delete legacy files

**Files:**
- Delete entire directory: `app/src/pages/`
- Delete from `app/src/components/`: `About.jsx`, `BackToTop.jsx`, `BlogIntro.jsx`, `BlogList.jsx`, `BlogSearch.jsx`, `CertBadge.jsx`, `Certifications.jsx`, `ContactStrip.jsx`, `CustomCursor.jsx`, `Experience.jsx`, `FeaturedCarousel.jsx`, `FeaturedProjects.jsx`, `Footer.jsx`, `Hero.jsx`, `HudWindow.jsx`, `MatrixRain.jsx`, `Navbar.jsx`, `OrbBackground.jsx`, `ProjectFilters.jsx`, `Projects.jsx`, `ScrollProgress.jsx`, `SocialIcons.jsx`, `TerminalSection.jsx`
- KEEP in `app/src/components/`: `CveNodeHunt.jsx`, `CvePacketIntercept.jsx`, `CveMalwareMaze.jsx`, `CveDetailDrawer.jsx`, `CveConstellation.jsx`, `CveMindMap.jsx` (used by Games + may be used by future Games iterations)
- Delete: `app/src/hooks/useTheme.js`, `app/src/hooks/useReveal.js`

- [ ] **Step 1: Run delete commands**

Run, in order:

```bash
rm -rf app/src/pages
rm app/src/components/About.jsx app/src/components/BackToTop.jsx app/src/components/BlogIntro.jsx app/src/components/BlogList.jsx app/src/components/BlogSearch.jsx app/src/components/CertBadge.jsx app/src/components/Certifications.jsx app/src/components/ContactStrip.jsx app/src/components/CustomCursor.jsx app/src/components/Experience.jsx app/src/components/FeaturedCarousel.jsx app/src/components/FeaturedProjects.jsx app/src/components/Footer.jsx app/src/components/Hero.jsx app/src/components/HudWindow.jsx app/src/components/MatrixRain.jsx app/src/components/Navbar.jsx app/src/components/OrbBackground.jsx app/src/components/ProjectFilters.jsx app/src/components/Projects.jsx app/src/components/ScrollProgress.jsx app/src/components/SocialIcons.jsx app/src/components/TerminalSection.jsx
rm app/src/hooks/useTheme.js app/src/hooks/useReveal.js
```

- [ ] **Step 2: Verify build still succeeds**

Run: `cd app && npm run build`
Expected: Build succeeds.

If the build fails, look at the error — likely an import in a remaining file references a deleted module. Fix the import or restore the file.

- [ ] **Step 3: Verify dev server still runs**

Run: `cd app && npm run dev`
Then in another terminal: `curl -s http://localhost:5173 | head -50`
Expected: HTML returned with `<div id="root">`.

Stop dev server.

### Task 4.4: Final smoke test (full surface)

- [ ] **Step 1: Run a fresh build**

Run: `cd app && npm run build`
Expected: Build succeeds. Look at the output — note bundle sizes, no errors.

- [ ] **Step 2: Preview the production build**

Run: `cd app && npm run preview`
Expected: Vite preview server starts on `http://localhost:4173`.

- [ ] **Step 3: Final manual checklist (production build)**

Open `http://localhost:4173/` and verify (clear localStorage first to reset boot flag):

1. Boot plays once.
2. Desktop renders, dock works, all 8 dock apps open as windows.
3. Spotlight opens with ⌘K, all search types work.
4. `/blog/cow`, `/blog/villager_inside_out`, `/blog/transient_scheduler_attacks_tsa_blog` — each opens PostViewer with the correct content + giscus.
5. `/blogs`, `/projects`, `/certifications`, `/cve-map` — each auto-opens the correct app.
6. Mobile emulation (375×667) — MobileShell renders, tabs work, all apps load.
7. Terminal commands all work.
8. No console errors in browser DevTools across any app.

- [ ] **Step 4: Stop the preview server**

### Task 4.5: Phase 4 checkpoint — final user gate

- [ ] **Step 1: Report final status to user**

Tell the user something like:

> Phase 4 complete. HEM-OS UI revamp finished:
> - 9 apps in dock + Readme via Spotlight/Terminal
> - Boot plays once per device (`?boot=1` to replay)
> - All deep-link routes working (`/blog/:slug`, `/blogs`, `/projects`, `/certifications`, `/cve-map`)
> - Mobile shell with bottom tab bar (≤ 768px)
> - Legacy components/pages deleted
> - Build green, preview green, no console errors in smoke test
>
> All work is on the local `hemos` branch. `main` is untouched. What's next?
> - **Stash:** `git stash` (revert working tree, keep changes parked)
> - **Commit on hemos branch (no push):** `git add -A && git commit -m "..."`
> - **Merge to main + deploy:** confirm explicitly, then merge + run deploy.sh
> - **Continue iterating:** I make more changes; you preview again.

**Do not commit, push, or merge anything until the user explicitly chooses one of those options.**

---

## Self-review notes

The plan covers each requirement in the spec:
- All 9 apps mapped to tasks 1.13/1.15 (Readme/Finder), 2.1 (Notes), 2.2 (PostViewer), 3.1 (Files), 3.2 (Timeline), 3.3 (Mail), 3.4 (System), 3.5 (Games), 3.6 (Terminal).
- Shell: 1.6 (Boot), 1.7 (Topbar), 1.8 (Dock), 1.9 (Window), 1.10 (Spotlight), 1.11 (Desktop), 1.12+4.1 (MobileShell), 2.2 (PostViewer).
- Routes: 1.16 (App.jsx with all 6 routes including `*`).
- Boot policy (L2 + drop login): 1.6 (Boot component) + 1.16 (BOOT_FLAG localStorage check + `?boot=1` override).
- Visual fidelity (V1): 1.1 (fonts), 1.2 (palette + chrome CSS).
- Mobile (M2): 4.1 (MobileShell with bottom tab bar) + 1.4 (useIsMobile hook) + 1.16 (App.jsx mobile branch).
- Blog rendering (B1): 2.2 (PostViewer overlay), Notes Maximize button (2.1), `/blog/:slug` deep link (1.16 + Desktop autoOpenSlug effect 1.11).
- Content additions: 1.14 (identity, manifesto, stats, now, projectMeta, certMeta, cves, socialHandles all derived from existing data with sensible defaults).
- Branch policy: 0.1.
- No-commit-without-approval policy: respected throughout — only stop-and-ask gates at end of each phase, no `git commit` commands inside any task step.
- Cleanup of dropped files: 4.3.

No placeholders. All file paths absolute, all code blocks complete.
