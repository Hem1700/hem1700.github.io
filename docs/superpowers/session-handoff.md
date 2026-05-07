# HEM-OS Session Handoff

**Last session:** 2026-05-04 to 2026-05-07 (Claude Opus 4.7, 1M context).
**Session ID:** `95c4d584-08b6-4d5e-98b8-7e765d89aeae`
**Live site:** https://hem1700.github.io
**Repo:** `Hem1700/hem1700.github.io` (GitHub Pages serves `main`)

If you're a future session reading this — start by skimming this whole file, then look at:
- `docs/superpowers/specs/2026-05-04-hemos-ui-revamp-design.md` — original design spec.
- `docs/superpowers/plans/2026-05-04-hemos-ui-revamp.md` — phase-by-phase implementation plan.
- The user's project memory at `/Users/hemparekh/.claude/projects/-Users-hemparekh-Desktop-finalportfolio/memory/`.

---

## What this project is

A personal portfolio for **Hem Parekh** (Security and Privacy Engineer @ Amazon). Hosted on GitHub Pages from the repo root. Tech stack: React 18 + React Router 6 + Vite 5 + D3 (CVE games) + 18 raw HTML blog posts bundled via Vite `?raw`.

---

## What we built

A **complete UI revamp** that replaces the previous portfolio site with a fake desktop OS metaphor inspired by reference files at `/Users/hemparekh/Downloads/Network.html` + `/Users/hemparekh/Downloads/hemos.jsx` ("HEM-OS").

### The OS metaphor
- **Boot animation** plays once per device (localStorage flag `hemos:bootSeen`). `?boot=1` query param force-replays it.
- **Topbar** (top, 30px) — brand, active app name, File/Edit/View dropdown menus with real actions, online dot, ⌘K spotlight hint, live clock.
- **Dock** (bottom, glassmorphic) — 8 app icons with mobile-style labels visible underneath. Running indicator dot.
- **Draggable, resizable, focusable windows** — Linux-style controls (right-aligned `—` `□` `×`, red close-hover). 8-direction resize from edges + corners (added in iteration; see "Iteration log" below). macOS genie animation on open / minimize / restore.
- **Spotlight (⌘K)** — global search modal with grouped scored results (apps + posts + projects + CVEs). Empty-state suggestions show 3 starter apps + 3 recent posts.
- **PostViewer** — maximized overlay for blog posts; sanitizes the imported HTML, mounts giscus comments mapped by pathname.
- **Welcome panel** on the desktop background when no windows are open.
- **Mobile shell** at viewport ≤ 768px — same React app components rendered full-screen with a bottom tab bar instead of windows.

### Nine apps (under `app/src/apps/`)
| App | Purpose |
|-----|---------|
| Readme | Welcome + ⌘K hint + 6 quick-launch tiles |
| Finder | About / manifesto / numbers (bio data) |
| Notes | Blog index → maximize-on-open into PostViewer |
| Files | Project grid → in-window detail view with metric/status/stack/href |
| Terminal | Real REPL (see Terminal section below) |
| Timeline | Career timeline + 12 certifications grid |
| Mail | Contact + 5 social channel anchors |
| System | Decorative animated `cpu/mem/net/focus` bars + `.now` list |
| Games | Wraps existing CVE games (Node Hunt, Packet Intercept, Malware Maze) with the original components untouched |

### Terminal app — features beyond the spec
The Terminal grew during iteration into a fairly capable REPL:
- Commands: `help`, `whoami`, `ls`, `cd`, `pwd`, `cves`, `cat <file>`, `open <app>`, `play <game>`, `fortune`, `clear`, `exit`.
- **Virtual filesystem:** `~`, `~/projects`, `~/writing`, `~/cves` directories.
- **Context-aware `cat`:** in `~/projects` → `cat FRG` shows FORGE details; in `~/writing` → `cat <slug>` shows post info; in `~/cves` → `cat <ID>` works as shorthand for `cat cve <ID>`. Absolute references (`cat about.txt`, `cat .now`, `cat manifesto.md`, `cat cve <ID>`) work from anywhere.
- **Tab completion** across command names + per-command argument candidates (cd dirs, cat files in cwd, open apps, play games).
- **Command chaining** with `&&` (threads cwd through each segment, halts on first error).
- **Up/Down arrow history** with draft preservation (typed text restored when arrowing past newest).
- **Per-line cwd** in scrollback so old prompts show the cwd they were typed at.

### Routing
React Router with `useSearchParams` for deep links:

| Path | Behavior |
|------|----------|
| `/` | Boot if not seen + empty desktop |
| `/blog/:slug` | Skip boot, open PostViewer for that slug |
| `/blogs` | Skip boot, auto-open Notes |
| `/projects` | Skip boot, auto-open Files |
| `/certifications` | Skip boot, auto-open Timeline |
| `/cve-map` | Skip boot, auto-open Games |
| `*` | Catch-all → desktop |

`?boot=1` on any URL forces boot replay. URL doesn't sync as the user navigates inside HEM-OS — only the initial route triggers `autoOpen`.

---

## File structure (current)

```
app/
  index.html                    Google Fonts preconnect
  src/
    App.jsx                     Router shell, picks Desktop or MobileShell
    main.jsx                    ReactDOM entry
    shell/
      Boot.jsx                  Boot animation (8 systemd-style lines)
      Topbar.jsx                Top menubar with dropdowns
      Dock.jsx                  Bottom dock with labels
      Window.jsx                Draggable, 8-direction resizable window with genie
      Spotlight.jsx             ⌘K search modal
      Desktop.jsx               Composes shell + window manager + welcome panel
      MobileShell.jsx           Mobile parallel shell
      PostViewer.jsx            Blog post overlay + giscus
    apps/                       9 app components (see table above)
    data/
      content.js                hero / about / experience / projects / certifications /
                                blogs + identity / manifesto / stats / now / projectMeta /
                                certMeta / cves / socialHandles
      apps.js                   APPS dict + DOCK_ORDER + ALL_APPS
      posts.js                  Vite ?raw imports of all 18 blog HTML files
      cveMapData.js             CVE network graph (used by existing CVE components)
    hooks/
      useDesktop.js             Window manager state machine
      useIsMobile.js            Viewport detection (≤ 768px)
    components/                 Only kept the 6 CVE game files (CveNodeHunt,
                                CvePacketIntercept, CveMalwareMaze, CveDetailDrawer,
                                CveConstellation, CveMindMap) — everything else
                                from the old design was deleted in Phase 4
    posts/                      18 raw .html blog files
    styles/
      theme.css                 ~3900-line CSS — HEM-OS palette + window/dock/topbar +
                                game styles ported from old theme + animations
docs/
  superpowers/
    specs/2026-05-04-hemos-ui-revamp-design.md   Original design spec
    plans/2026-05-04-hemos-ui-revamp.md          Phase 0–4 implementation plan
    session-handoff.md                            (this file)
deploy.sh                       Build + copy dist to root + commit + push (gitignored)
.nojekyll                       Disables Jekyll on GitHub Pages
.gitignore                      Includes node_modules, dist, .DS_Store, .superpowers, deploy.sh
```

---

## Key brainstorming decisions (from the spec)

These six choices defined the entire build. If a future iteration reverses any of these, the design needs revisiting:

1. **Scope: Full OS metaphor** — replaces the site entirely (not a hybrid).
2. **Mobile (≤ 768px): M2** — same React app components render full-screen with a bottom tab bar; no draggable windows.
3. **Blogs: B1** — Notes lists posts → maximize-on-open into PostViewer overlay. `/blog/:slug` URLs preserved (giscus comments tied to pathname).
4. **App roster: R4** — 9 dock apps + Terminal `play <game>` opens Games window. CVE games are not dropped.
5. **Boot/login: L2 + drop login** — boot plays once per device via localStorage, login screen entirely removed (was decorative).
6. **Visual: V1 — pure HEM-OS palette** — dark only, no theme toggle, no Three.js orb, JetBrains Mono + Inter.

---

## Deployment state

- **Branch:** `main`. Single source of truth. `hemos` branch was used during development; merged fast-forward into `main`.
- **Pages serves from `main`** — repo root contains `index.html` + `assets/index-*.{js,css}` from the Vite build.
- **Most recent commits on `main`:**
  - `a0204b1` Deploy React build (8-direction resize)
  - `8dd83d2` Deploy React build (Spotlight `.rs` rename fix)
  - `3db015e` Disable Jekyll on GitHub Pages
  - `40317e0` Deploy React build (initial HEM-OS)
  - `bd7bf0c` Replace portfolio with HEM-OS desktop-OS metaphor (source migration)
- **Deploy flow:** edit source → `bash deploy.sh` → site live in ~60s. The script builds, copies `app/dist/*` to repo root, commits "Deploy React build", and `git push`es.

---

## Iteration log (changes after Phase 4 ship)

In rough order, with the bugs/feedback that drove each change:

1. **Linux-style window controls** — replaced macOS traffic lights with right-aligned `—` `□` `×` square buttons; close goes red on hover.
2. **macOS genie minimize animation** — windows squash into the dock icon. Three-keyframe path (shrink → sliver → pinch) using a CSS variable target derived from `data-app="<id>"` on the dock icons.
3. **Bug: minimize → click dock to restore was broken.** Root cause: `phase` was in the genie effect's dep array, so the cleanup ran on every state change inside the cycle and `clearTimeout`'d the auto-advance. Fix: split into two effects (one watches the prop flip, the other handles auto-advance in isolation).
4. **Email update** in `data/content.js` from `hemparekh1596@gmail.com` to `hemparekhportfolio@gmail.com`.
5. **Game styling restoration** — Phase 1 had dropped ~1700 lines of CSS for the CVE games. Re-added them by extracting from `git show main:app/src/styles/theme.css` and bridging old palette variables (`--main-dark`, `--primary-color`, etc.) to HEM-OS variables (`--ink`, `--acc`).
6. **Bug: games still rendered as plain text.** Root cause: a missing `}` after `.link-track-fill { ... background: currentColor;` (line 1708) — the CSS parser ate ~1500 lines of game rules. Fix: closing brace + a Node script to validate brace balance for future appends.
7. **Bug: games' action buttons (Scan, Probe, Run, etc.) showed as browser-default white-on-black.** Root cause: `.pill` class was undefined. Fix: added `.pill` and dark-mode contrast for `.lane-actions button` and `.maze-dpad button`.
8. **Game animations layer** — radar sweep over Node Hunt grid, traveling packet dots in Packet Intercept lanes, player trail + target ring in Malware Maze, stage scanlines on all three. CSS-only via pseudo-elements; respects `prefers-reduced-motion`.
9. **Topbar dropdown menus** — File/Edit/View became real menus with actions: New Terminal, Spotlight, Replay Boot, Close Active, Search, Copy Email, Copy Site URL, About HEM-OS, Show System Monitor, Minimize/Close All Windows.
10. **Spotlight scoring + grouping** — switched from substring-of-title to weighted scoring across title + subtitle + body fields, grouped by type (APPS / WRITING / PROJECTS / CVES) with section headers.
11. **Bug: Spotlight showed no suggestions, Files breadcrumb had a giant gap.** Root cause: class name collision — `.sp` was used for **S**potlight modal AND breadcrumb **s**eparator AND project **s**pec grid. Fix: renamed Spotlight's root class to `.spotlight`.
12. **Bug: Spotlight STILL showed no suggestions even after rename.** Root cause: another class collision — `.rs` was both Spotlight's results container AND Window's resize handle (`position: absolute; width: 14px; height: 14px`). The Window's properties leaked onto the Spotlight container, squashing the dropdown into 14×14px. Fix: renamed Spotlight's results container to `.spot-rs` and added explicit `width: 100%`.
13. **Welcome panel + dock labels** — copied the mobile UX onto desktop. Welcome card shows when no windows are visible; dock icons gained mobile-style labels underneath.
14. **Genie open animation** — windows now emerge from their dock icon when launched, mirroring the minimize animation in reverse.
15. **GitHub Pages Jekyll failure** — the implementation plan markdown contained `{{ ... }}` JSX expressions, which Jekyll tried to parse as Liquid templates and crashed. Fix: added `.nojekyll` at repo root to disable Jekyll entirely.
16. **8-direction window resize** — windows now have invisible drag handles on all 4 edges + 4 corners. North/west drags keep the opposite edge anchored. Min size 360×220, north edge clamped above topbar.

---

## Recurring failure pattern: 2-letter CSS class collisions

Three separate bugs in this session (#11, #12 above, plus an earlier `.link-track-fill` brace) traced back to short, generic class names overloaded by different parts of the codebase. The pattern was inherited from the original `hemos.jsx` reference, which used 2-letter classes for terseness in a single-file Babel-in-browser context.

**Known collisions resolved:**
- `.sp` (Spotlight) → renamed to `.spotlight`. Other `.sp` uses (breadcrumb separator inside `.af .crm`, project spec grid inside `.pdr`) were left alone.
- `.rs` (resize handle vs. Spotlight results) → Spotlight's renamed to `.spot-rs`. Window's `.rs` is the still resize handle.

**Other 2-letter classes still in use** that haven't bitten us yet but probably should be audited if anyone touches them:
- `.tt` (window title bar), `.tl` (title-bar control button), `.tr` (control cluster), `.ti` (title text), `.wb` (window body), `.dk` (dock), `.ic` (dock icon), `.gly` (dock icon glyph), `.lbl` (dock hover tooltip), `.run` (running indicator), `.tb` (topbar), `.it` (topbar item), `.r` (topbar right side), `.dot` (topbar online indicator).

If a future session adds a new component, **avoid 2-letter class names**. Prefix with the component (e.g., `.sidebar-item` not `.it`).

---

## User preferences (durable rules)

These are saved in the user's project memory at `/Users/hemparekh/.claude/projects/-Users-hemparekh-Desktop-finalportfolio/memory/`. Honor them in any future session:

1. **Never run `git commit`, `git push`, or `bash deploy.sh` without an explicit "push", "deploy", "ship", or equivalent from the user.** This was set early in the session. The user may grant scope-limited permission ("push this fix") — that authorization is for that change only, not standing.
2. **The user runs `npm run dev` themselves and previews changes locally** before pushing. After implementing changes, end with "preview it and let me know" — not "ready to commit."
3. **The user gave standing permission for incremental deploys** during the iteration phase (after the initial `B` choice). This is *iteration-bounded*; if a fresh task starts, re-confirm before pushing.

---

## Things to know for future sessions

- **The dev server may already be running.** Check `/private/tmp/claude-501/.../tasks/` or just `lsof -i :5173` before starting another one.
- **The HEM-OS visual style is canonical for this site now.** No light theme, no theme toggle. Don't reintroduce them unless explicitly asked.
- **Blog content is sacred.** The 18 raw HTML files in `app/src/posts/` are the user's actual published writing. The PostViewer sanitizer strips chrome but leaves content. Never edit a `.html` file in `posts/`.
- **giscus discussion threads** are tied to the `/blog/<slug>` pathname. Any change to blog routing must preserve those URLs or comments orphan.
- **Bundle size warning (~510 KB JS)** is from D3 + the existing CVE game components. Listed as out-of-scope in the spec.
- **CSS file is large (~3900 lines)** with multiple layered append blocks. Run `node -e "..."` brace-balance check (used in iteration #6) before committing if you append more.
- **`.gitignore` excludes `deploy.sh`** so the script ships only locally — don't be surprised when it's not on GitHub.

---

## Open items / things not done

- **No automated tests.** No Vitest/RTL infra. Verification is `npm run build` + manual visual check at localhost:5173.
- **Bundle splitting** — out of scope per spec, would require Vite config changes.
- **Cert search** — Spotlight indexes apps/posts/projects/CVEs but not certifications (the user once asked about AWS / similar; got dismissed).
- **Close-window animation** — only opening/minimize/restore have genie animations. Close just unmounts. Could add a "closing" phase that delays unmount.
- **Real System Monitor metrics** — bars are decorative noise. Could wire to GitHub stars on a project, last-commit time, etc.
- **Persisted window positions** across reloads — currently every visit starts from scratch.
- **Window snapping / tiling** — drag to screen edge → maximize half. Would be polish.
- **Cmd-W / Cmd-M shortcuts** — only ⌘K is wired; no other macOS-style keyboard shortcuts.
- **Touch resize** — `touchstart` is wired on the resize handles but the math may need testing on real touch devices.

---

## Quick reference: common tasks

**Run dev server:**
```bash
cd /Users/hemparekh/Desktop/finalportfolio/app && npm run dev
```

**Production build:**
```bash
cd /Users/hemparekh/Desktop/finalportfolio/app && npm run build
```

**Deploy to live site (requires user authorization):**
```bash
bash /Users/hemparekh/Desktop/finalportfolio/deploy.sh
```

**Replay boot animation in browser:** visit `/?boot=1` or in DevTools console run `localStorage.removeItem("hemos:bootSeen")`.

**Add a new app:**
1. Create `app/src/apps/NewApp.jsx`
2. Register in `app/src/data/apps.js` (`APPS` + `DOCK_ORDER`)
3. Wire into `Desktop.jsx` `AppHost` switch + `MobileShell.jsx` `renderApp` switch
4. Add CSS for any new selectors in `app/src/styles/theme.css` — **avoid 2-letter class names**.

**Add a new Terminal command:** edit the `runOne` function in `app/src/apps/Terminal.jsx` — add a new `else if (c === "newcmd")` branch and update the `help` listing + `getCompletions` if it needs tab completion.
