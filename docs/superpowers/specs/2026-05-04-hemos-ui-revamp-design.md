# HEM-OS UI Revamp — Design Spec

**Date:** 2026-05-04
**Project:** finalportfolio
**Branch:** `hemos` (to be created from `main`)

## Goal

Replace the current React portfolio site with a desktop-OS metaphor inspired by `hemos.jsx` / `Network.html` (the "HEM-OS" reference). Visitors land on a fake desktop with a dock, draggable windows, a top menu bar, and ⌘K spotlight. Each portfolio section lives inside an "app" that opens as a window. The blog, project list, experience timeline, contact info, and CVE games all become apps. Mobile gets a parallel full-screen-app shell so the experience works on phones too.

## Non-goals

- Building a real OS or anything beyond visual metaphor.
- Backend changes — the site stays a static SPA deployed to GitHub Pages.
- Touching blog content. The 18 raw blog HTML files in `app/src/posts/` are not edited.
- Maintaining backwards compatibility with the old visual design or the light/dark theme toggle.
- New dependencies for the core (Three.js gets dropped; D3 stays for the existing CVE games).

## Decisions (locked during brainstorming)

1. **Scope:** Full OS metaphor replaces the current site (option A).
2. **Mobile (≤ 768px):** Same React app components render full-screen with a bottom tab bar; no dock, no draggable windows (option M2).
3. **Blogs:** Notes app sidebar lists all posts; clicking opens the full post as a maximized PostViewer overlay over the desktop. Existing `/blog/:slug` URLs auto-load HEM-OS straight into that post. Comments (giscus) preserved (option B1).
4. **App roster:** 9 apps in the dock — Readme, Finder, Notes, Files, Terminal, Timeline, Mail, System, Games. Plus Terminal command `play <game>` opens a Games window (option R4).
5. **Boot/login:** Boot animation plays once per device via localStorage flag, then never until `?boot=1`. Login screen dropped entirely. Deep-link routes always skip boot (option L2 + L5).
6. **Visual fidelity:** Pure HEM-OS palette and typography. Dark only — no theme toggle. The Three.js orb is removed (option V1).

## Architecture

### Top-level

A single React 18 + React Router 6 + Vite SPA. `App.jsx` is a thin router shell that:

- Reads the URL on mount.
- Detects viewport (mobile ≤ 768px vs. desktop) via `useIsMobile`.
- Renders `<Desktop />` or `<MobileShell />`, passing the route's `autoOpen` directive (which app to launch on mount).

### Shell vs. apps boundary

- **Shell** (`shell/`) owns all OS chrome, window state, routing, boot, theme.
- **Apps** (`apps/`) are pure content components that don't know they're inside windows. The shell hosts them in `<Window>` (desktop) or full-screen panes (mobile).
- This boundary lets each app be developed and tested in isolation. Apps depend only on `data/`, never on `shell/`.

### File layout (under `app/src/`)

```
App.jsx                     thin router shell, picks Desktop vs MobileShell
main.jsx                    unchanged

shell/
  Desktop.jsx               window manager + topbar + dock + spotlight
  MobileShell.jsx           full-screen apps + bottom tab bar
  Boot.jsx                  systemd-style boot animation, plays once
  Topbar.jsx                clock, brand, active-app name
  Dock.jsx                  9 app icons + running indicator dots
  Window.jsx                draggable/resizable window with traffic lights
  Spotlight.jsx             ⌘K search (apps + posts + projects + CVEs)
  PostViewer.jsx            maximized blog post overlay + giscus

apps/
  Readme.jsx                welcome message, ⌘K hint, quick-launch tiles
  Finder.jsx                about + manifesto + numbers
  Notes.jsx                 blog index → maximize-on-open
  Files.jsx                 project grid + detail view
  Terminal.jsx              REPL with help/whoami/ls/cves/cat/open/play/fortune/clear/exit
  Timeline.jsx              experience timeline + certifications grid
  Mail.jsx                  contact + social links
  System.jsx                animated decorative monitor + .now list
  Games.jsx                 wraps existing CveNodeHunt/CvePacketIntercept/CveMalwareMaze

data/
  content.js                EXTENDED with identity, manifesto, stats, now (existing fields kept)
  posts.js                  unchanged
  cveMapData.js             unchanged
  apps.js                   NEW — APPS dict: id → { title, icon class, default w/h }

hooks/
  useDesktop.js             NEW — window manager state (open, focus, z, pos, size)
  useIsMobile.js             NEW — viewport detection with resize listener

posts/                      unchanged (18 raw HTML files bundled via Vite ?raw)

styles/
  theme.css                 REWRITTEN to HEM-OS palette + window/dock/topbar CSS
```

### Removed from current `app/src/`

The following are deleted at the end of Phase 4 (kept until then so we can diff against them):

- `components/`: Hero, About, Experience, Projects, Certifications, Navbar, Footer, ContactStrip, BlogList, BlogIntro, BlogSearch, FeaturedCarousel, FeaturedProjects, BackToTop, ScrollProgress, OrbBackground, MatrixRain, HudWindow, TerminalSection, ProjectFilters, CertBadge, SocialIcons, CustomCursor.
- `pages/`: all six pages — replaced by `shell/` + `apps/`.
- `hooks/useTheme.js`, `hooks/useReveal.js` — irrelevant in OS metaphor.

### Survives

- `posts/*.html` and `posts.js` (raw HTML imports) — still bundled, rendered by PostViewer.
- The blog HTML sanitizer logic from `pages/Post.jsx` — moves into `PostViewer.jsx`.
- The giscus integration from `pages/Post.jsx` — moves into `PostViewer.jsx`.
- `components/CveNodeHunt.jsx`, `components/CvePacketIntercept.jsx`, `components/CveMalwareMaze.jsx`, `components/CveDetailDrawer.jsx`, `data/cveMapData.js` — wrapped by `apps/Games.jsx` and reused by Terminal `play <game>`.
- All textual content in `data/content.js` (hero, about, experience, projects, certifications, social links, blogs metadata) — extended, never overwritten.

## State management

### Window manager (`hooks/useDesktop.js`)

State shape:

```js
{
  windows: Array<{
    id: number,
    app: 'readme' | 'finder' | 'notes' | 'files' | 'terminal' | 'timeline' | 'mail' | 'system' | 'games',
    x: number, y: number, w: number, h: number,
    minimized: boolean,
    maximized: boolean,
    z: number,
    appState?: object, // app-specific state survives minimize/restore (e.g., Notes selectedSlug)
  }>,
  focusId: number | null,
  zCounter: number,
  spotlightOpen: boolean,
}
```

API: `launch(app, appState?)`, `close(id)`, `minimize(id)`, `toggleMaximize(id)`, `focus(id)`, `move(id, x, y)`, `resize(id, w, h)`, `toggleSpotlight()`.

Window stacking and drag/resize implementation mirrors the reference `Win` component in `hemos.jsx`. No external library.

### Boot state

- localStorage key `hemos:bootSeen` = `"1"` after first successful boot.
- `Boot.jsx` reads this on mount; if set and route is not `/?boot=1`, returns `null` immediately.
- `?boot=1` bypasses the localStorage check and always plays.

### Theme

- Single dark theme. Body class `dark` is set unconditionally on mount. CSS uses CSS variables, but only the dark palette is defined.
- `useTheme.js` and the theme toggle button are removed.

## Routing

```
/                       Desktop, boot if !bootSeen, no app auto-open
/blog/:slug             Desktop, skip boot, PostViewer auto-opened to slug
                        URL stays /blog/:slug so giscus pathname mapping works
/blogs                  Desktop, skip boot, Notes app auto-opened
/projects               Desktop, skip boot, Files app auto-opened
/certifications         Desktop, skip boot, Timeline app auto-opened, scrolled to certs
/cve-map                Desktop, skip boot, Games app auto-opened
*                       Desktop, no auto-open (404 fallback unchanged)
```

`?boot=1` on any URL forces boot animation to replay (useful for screenshots or sharing the intro).

URL does **not** sync as the user navigates inside HEM-OS — only the initial route triggers an `autoOpen`. Closing the PostViewer dismisses the overlay; the desktop (with whatever windows the user has opened, including a Notes window if PostViewer was launched via deep link) is revealed underneath. The browser URL stays as it loaded; navigating to a different route reloads the page.

The deploy `404.html` (a copy of `index.html`) keeps the SPA refresh fallback working on GitHub Pages.

## App specifications

### Readme (620×520)

Welcome text + ⌘K hint kbd + 6 clickable quick-launch tiles (finder, notes, files, term, time, mail). Auto-launched only on first ever boot (when `bootSeen` flag was just set), not on returning visits.

### Finder — About (760×560)

Two-pane layout. Sidebar: `about.txt` (selected), `manifesto.md`, `numbers.csv`. Main:

- Header: round avatar (`HP` initials gradient) + name + role + meta line (`● Amazon · 📍 location · ⏱ tz`).
- `// manifesto`: 4 bullets pulled from `data.manifesto` (NEW content).
- `// numbers`: 4-up stat grid pulled from `data.stats`.

Source: `data/content.js`. New fields needed: `identity`, `manifesto`, `stats`.

### Notes — Writing (820×560)

Two-pane layout. Sidebar lists 18 posts (title, date · readtime · `[category]`). Search bar at top filters titles + excerpts.

Right pane: selected post's title, date · readtime · category, excerpt paragraph, **"Maximize ⤢" button** that opens PostViewer with the full post.

Deep link `/blog/:slug` skips Notes and goes straight to PostViewer, but Notes also auto-opens behind it so closing PostViewer reveals the matching Notes selection.

### Files — Projects (720×540)

Breadcrumb (`/home/hem › projects`). Grid of project tiles (auto-fill, `minmax(160px, 1fr)`): icon block (first letter of title in monospace + diagonal stripe pattern), title, code · tag below.

Click → in-window detail view with: back link, title, code · tag · status, full description, METRIC + STATUS spec table, stack chips, GitHub link.

New fields per project: `code` (3-4 letter), `status` (ACTIVE / SHIPPED / RESEARCH), `metric` (one short numeric/qualitative claim), `stack` (string array). I'll derive defaults from existing descriptions for review.

### Terminal — hem@hemos (720×480)

Real interactive REPL with input field, command history (up/down arrows), scrollable output.

Commands:

- `help` — list available commands.
- `whoami` — `Hem Parekh — Security and Privacy Engineer @ Amazon`.
- `ls` — `about.txt  .now  manifesto.md  projects/  writing/  cves/`.
- `cves` — table of all CVE blog entries (id, target, class, year, role).
- `cat <file>` — supports `about.txt`, `.now`, `manifesto.md`, `cve <ID>`.
- `open <app>` — launches an app (e.g., `open notes`). Calls `launch()` from useDesktop.
- `play <game>` — opens Games window with that game selected (`node-hunt`, `packet-intercept`, `malware-maze`).
- `fortune` — prints a random manifesto line.
- `clear` — empties history.
- `exit` — closes the Terminal window (dispatches a custom event the shell listens for).

ANSI-style banner on first render. Unknown command → `<cmd>: command not found` (red).

### Timeline — Experience (700×560)

Vertical timeline (left rail, dots) with all 5 experience entries. Current role (Amazon) gets a `cur` modifier (orange glowing dot) and `NOW` pill next to the role title. Each stop: `range`, `role`, `org`, `blurb`.

Below: `// CERTIFICATIONS` heading + grid (`auto-fill, minmax(220px, 1fr)`) of 12 cert cards with title + issuer · year on each. Each card links out to its Credly badge.

New fields: experience entries get `tag: "current"` for Amazon and a short `blurb` (existing `desc` is fine, just renamed for the data shape). Certs get `iss` and `y` extracted from existing `details` strings (e.g., "Issued Oct 2024 by CompTIA - Expires Oct 2027" → `iss: "CompTIA", y: "Oct 2024"`).

### Mail — Contact (760×540)

Sidebar: Inbox (1) selected, Sent, then `Channels` group with the 5 social links (each shows label + handle).

Main pane: "Get in touch." headline, `From: hem@hemos · To: you@anywhere` line, body paragraphs (mailto link, location/timezone, PGP-key-on-request flavor line), social link grid at bottom.

New field: `identity.email` and `identity.tz`. I'll fill defaults; you confirm.

### System Monitor (680×540)

Decorative animated bars driven by a `setInterval(1500ms)` + sine-wave perturbation:

- `cpu / curiosity-d` (~72%)
- `mem / writing-cache` (~58%)
- `net / signal-strength` (~80%)
- `focus / shipping` (~64%)

Below: `// processes / now` list pulled from `data.now`.

Pure flavor — no real metrics.

### Games (900×600)

Wraps existing `CveNodeHunt`, `CvePacketIntercept`, `CveMalwareMaze` components untouched. Top of the window: 3-tab toggle (same labels as current `/cve-map`) + Easy/Standard/Hard difficulty toggle. Active component renders below in the window body.

Same component code. Only the chrome around it changes.

### PostViewer (overlay, not in dock)

Triggered by:

- Notes → "Maximize ⤢" button.
- `/blog/:slug` URL on mount.
- Spotlight result of type `post`.

Layout: positions absolutely over the desktop, `top: 30px` (below topbar), `bottom: 80px` (above dock), `left/right: 0`. z-index above all windows. Close ✕ in top-right.

Renders: title, `date · readtime · category` line, sanitized post body (using existing sanitizer logic), giscus thread mounted below.

Theme is hardcoded `dark` for giscus (dropping the theme toggle removes the only reason that effect existed). The MutationObserver theme-sync code is removed.

### Spotlight (⌘K)

Modal centered at top 18% of viewport, 520px wide. Indexes:

- All 9 apps.
- All 18 blog post titles (type: `post`).
- All 9 project titles (type: `project`).
- CVE entries derived from CVE-titled blog posts (type: `cve`).

Filter on substring of title. ↑↓ to navigate, ↵ to launch, Esc to close. Selecting a post opens PostViewer; selecting a project opens Files with that project pre-selected; selecting a CVE opens Terminal and immediately runs `cat cve <ID>` (output appended to the existing scrollback).

## Mobile shell (M2 — viewport ≤ 768px)

`useIsMobile` returns true when `window.innerWidth <= 768` (with resize listener). At that point:

- `Desktop` does not render. `MobileShell` renders instead.
- Boot animation still plays once on first visit (same localStorage flag).
- No dock, no draggable windows, no topbar menu items.
- **One app full-screen at a time.** App content fills the viewport between top status strip and bottom tab bar.
- **Status strip** (top, 30px): brand + clock + active app name + magnifying-glass icon for Spotlight.
- **Tab bar** (bottom, ~70px): horizontally scrollable row of the 9 app icons. Active app highlighted.
- **PostViewer**: full-screen takeover with a back arrow → returns to Notes.
- **Spotlight**: same component, but full-width on mobile.
- **Window manager state simplified**: only one app "open" at a time on mobile; switching tabs swaps the active app.

App components themselves stay the same — they need to be responsive (already mostly are). The Notes sidebar collapses into a top dropdown on mobile. Files grid stays auto-fill so it adapts.

The 768px breakpoint is enforced via JS (component selection), not just CSS, because the chrome differs structurally.

## Content additions

The following are NEW content I'll draft as defaults, you review and edit:

- `identity` block: `name`, `role`, `current` ("Amazon"), `location`, `tz`, `email`. I'll pull from existing data where possible.
- `manifesto`: 4 short k/v bullets derived from your About paragraph (e.g., `BUILD: tools that ship, not slides`, `WRITE: defenders move faster when findings are public`, `HUNT: every environment tells a story`, `LEARN: curiosity-d runs continuously`).
- `stats`: 4 entries — derived from existing data (`projects.length`, `blogs.length`, `certifications.length`, `1` patent for the Phish Analyzer Tool).
- `now`: 4 lines — placeholder defaults you fill in (e.g., `Building MCP-powered privacy review tools at Amazon`, `Reading: AMD-TSA microcode advisories`, etc.).
- Per project: `code`, `status`, `metric`, `stack` — derived defaults you review.
- Per certification: `iss`, `y` extracted from existing `details` string via regex.
- Per CVE blog: `target` and `class` — short labels (e.g., for `CVE-2024-1001` → target: "Kubernetes RBAC", class: "Privilege Escalation"). Defaults derived from the blog excerpt.

Existing content (hero blurb, ABOUT ME paragraph, all experience descriptions, all project descriptions, all certification details, all blog content) stays exactly as-is.

## Visual style

- **Palette** (CSS variables in `theme.css`):
  - `--bg-0: #0a0e16`, `--bg-1: #0f1420`, `--bg-2: #161b2c`
  - `--line: rgba(255,255,255,.08)`, `--line2: rgba(255,255,255,.14)`
  - `--ink: #e8ecf2`, `--ink-d: #aab3c5`, `--mut: #6b7590`
  - `--acc: #ff5e3a` (orange), `--acc2: #6ee7ff` (cyan), `--acc3: #b58cff` (purple)
  - `--grn: #5dd39e`, `--red: #ff5970`, `--ylw: #ffd166`
- **Typography**: JetBrains Mono (400/500/700) for code/labels/terminal/timestamps; Inter (400/500/600/700) for body/headings. Both via Google Fonts preconnect in `index.html`.
- **Background**: radial gradients at top-left (orange) and bottom-right (cyan) over a dark linear gradient, with a subtle 60×60 grid overlay (`linear-gradient(rgba(255,255,255,.012) 1px, transparent 1px)`).
- **Window chrome**: macOS-style traffic lights (red/yellow/green) at the top-left of each title bar; centered title; subtle gradient title bar with bottom border; bottom-right resize handle.
- **Dock**: rounded pill at bottom-center, glassmorphic (`backdrop-filter: blur(24px)`), 50px icons that lift on hover with a tooltip.
- **Topbar**: 30px height, blurred, subtle border, brand on left + active app + File/Edit/View menu items + clock and ⌘K hint on right.

## Migration plan

All work on a new branch `hemos` cut from `main`. `main` is untouched until explicitly authorized.

### Phase 1 — Shell scaffolding
- Add deps if needed (none expected).
- Rewrite `theme.css` with HEM-OS palette and chrome styles.
- Build `Boot.jsx`, `Desktop.jsx`, `Topbar.jsx`, `Dock.jsx`, `Window.jsx`, `Spotlight.jsx`, `useDesktop.js`, `useIsMobile.js`, `MobileShell.jsx`, `apps.js`.
- Stub `Readme.jsx` and `Finder.jsx` only.
- Add JetBrains Mono + Inter via `index.html` preconnect.
- Verify locally: dev server runs, boot plays, dock launches Readme + Finder windows that drag/resize/close.

### Phase 2 — Blog + deep links
- Build `Notes.jsx`, `PostViewer.jsx`.
- Move sanitizer + giscus from old `Post.jsx`.
- Wire route `/blog/:slug` to auto-open PostViewer.
- Verify locally: clicking a post in Notes opens PostViewer, comments load, deep link `/blog/villager_inside_out` lands on the post.

### Phase 3 — Remaining apps
- Build `Files.jsx`, `Timeline.jsx`, `Mail.jsx`, `Terminal.jsx`, `System.jsx`, `Games.jsx`.
- Wire deep-link routes for `/projects`, `/blogs`, `/certifications`, `/cve-map`.
- Wire Terminal `open <app>` and `play <game>` commands to `useDesktop.launch()`.
- Verify each app renders correctly and contains its mapped content.

### Phase 4 — Mobile + cleanup
- Implement `MobileShell` full-screen layout + bottom tab bar.
- Verify layout at 375px, 414px, 768px viewports.
- Delete dropped components (`pages/`, old `components/`, `hooks/useTheme.js`, `hooks/useReveal.js`).
- Manually test: every existing URL (`/`, `/blogs`, `/blog/<each-slug>`, `/projects`, `/certifications`, `/cve-map`) loads correctly on desktop and mobile.
- Verify giscus loads on at least 3 different blog posts.
- Verify all 9 dock icons launch their app.
- Verify Spotlight finds all post/project/cve entries.

User runs `cd app && npm run dev` after each phase to preview. No git push or deploy until user explicitly authorizes.

## Risks and mitigations

- **Risk:** Sanitized blog HTML doesn't lay out well inside PostViewer's centered column.
  - **Mitigation:** PostViewer uses the same `.blog-post-content` styling we already have; the sanitizer already strips the bits that fight the SPA.
- **Risk:** Drag/resize math gets buggy on touch devices.
  - **Mitigation:** Mobile uses MobileShell (no drag); only desktop with mouse needs the math, mirroring the reference implementation that already handles it.
- **Risk:** Deep-link flicker — boot or empty desktop briefly visible before PostViewer mounts.
  - **Mitigation:** Detect deep-link routes before first render in `App.jsx` and pass `skipBoot: true` + `autoOpen` directive to the shell synchronously on mount.
- **Risk:** giscus iframe doesn't fit inside PostViewer width on mobile.
  - **Mitigation:** Width: 100%, max-width: 720px, centered. giscus iframe is responsive.
- **Risk:** Old SPA fallback `404.html` stops working with new routes.
  - **Mitigation:** Keep the existing `npm run build && cp dist/index.html dist/404.html` postbuild hook in `app/package.json` unchanged.

## Out of scope (future iterations)

- Real backend / API.
- Window snapping / tiling.
- Multi-desktop / virtual desktops.
- File drag-and-drop between apps.
- Persistent window positions across reloads.
- Customizable dock.
- Light theme variant.
- Keyboard shortcuts beyond ⌘K (no ⌘W to close, ⌘M to minimize, etc.).
- Real System Monitor metrics (GitHub stars, last commit time, etc.).
- Mobile gestures (swipe between apps).

These can be added later once the core ships and we iterate based on real usage.
