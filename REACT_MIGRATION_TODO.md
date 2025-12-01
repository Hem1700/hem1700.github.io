# React Migration & Site Upgrade Plan

This file tracks the plan to migrate the existing static site into a React (Vite) app while keeping all content intact. It also records the backup taken before changes.

## Backup Snapshot
- Created: 2025-11-30 17:31:33 (local)
- Location: `backups/site-backup-20251130-173133.tar.gz`
- Command used: `mkdir -p backups && ts=$(date +%Y%m%d-%H%M%S) && tar -czf backups/site-backup-${ts}.tar.gz --exclude='./backups' --exclude='.git' .`

## Goals
- Preserve all existing content and URLs where possible.
- Improve maintainability and theming via React components and shared styles.
- Keep GitHub Pages deployment flow simple (build + push).

## Detailed TODO

### 1) Project Scaffolding
- [x] Create a new `vite` React project in a subfolder (`app/`) to avoid clobbering current root until ready.
- [x] Configure `package.json` and Vite base (`/`) to align with GitHub Pages.
- [ ] Add `.gitignore` entries for `node_modules`, `.vite`, `dist`, and build artifacts.
- [ ] Add Prettier/ESLint (optional) with simple defaults; ensure rules don’t force content edits.

### 2) Assets & Public Files
- [x] Copy all static assets (`images/`) into `public/` in the Vite app.
- [x] Keep blog HTML content available as static assets (copied existing HTML files to `app/public/`) and copied `style.css`/`script.js` for parity.
- [ ] Verify paths so existing blog links remain valid after migration (consider redirects or preserving filenames in `public/`).

### 3) Global Styling & Theme
- [x] Port current design tokens (colors, radius, shadows, gradient) into a global CSS (`src/styles/theme.css` copied from current site).
- [x] Set up light/dark theme CSS variables on `:root` + `.dark`.
- [x] Implement a `useTheme` hook that syncs with `localStorage` and toggles a `dark` class on `body`.
- [ ] Create a base layout wrapper that sets fonts (`Space Grotesk`, `Inter`), container widths, and shared utilities.

### 4) Core Layout Components
- [x] `NavBar` with active-state links, theme toggle button; keep existing nav structure/labels and external resume link.
- [x] `Footer` with current text.
- [x] `SocialIcons` shared component to reuse across hero/about/blog.
- [ ] `Section` utility for consistent padding and `scroll-margin-top`.

### 5) Home Page Components
- [x] `Hero` component with highlight span, hero image, intro text, and scroll arrow.
- [x] `About` component with photo, bio text, and social icons.
- [x] `ExperienceTimeline` component using existing timeline items; keep date ranges and descriptions verbatim.
- [x] `ProjectsGrid` component with existing cards and links; ensure cards stay clickable and text unchanged.
- [x] `Certifications` accordion component mirroring current interaction (expand/collapse).

### 6) Blog Index
- [x] Represent blog metadata as structured data (array of objects) in `src/data/content.js` with title, slug, date, length, excerpt, and href.
- [x] Render blog cards in a responsive grid identical to current content; ensure order matches existing page.
- [x] Ensure social links and header copy match existing content.

### 7) Blog Detail Pages
- [x] For now, keep each blog HTML as static files in `public/` to avoid content edits; ensure routes link to these files.
- [ ] Optionally, wrap each blog in a React page that imports the HTML content (dangerouslySetInnerHTML) while preserving markup; only if parity is guaranteed.
- [ ] Verify `firmware_llm_annotator.html` and all CVE posts are reachable from the React app without content changes.

### 8) Routing & Navigation
- [x] Add React Router with routes: `/` (home), `/blogs` (list), and fallbacks to static blog HTML under `/` (linked directly to static files).
- [x] Keep anchor links (`#about`, `#experience`, etc.) functional on the home page; ensure smooth scroll is preserved.
- [ ] Consider a 404 route that links back to home and blogs.

### 9) Behavior Parity
- [x] Implement smooth scrolling behavior similar to current `scroll-behavior: smooth`.
- [x] Preserve theme toggle text labels (“Light Mode”/“Dark Mode”) and behavior with `localStorage`.
- [x] Maintain hover/focus styles for cards, buttons, and links.

### 10) Content Integrity Checks
- [ ] Verify every piece of visible text matches the current site (no copy changes).
- [ ] Confirm all external links (GitHub, LinkedIn, TryHackMe, HackTheBox, resume, project links) work post-migration.
- [ ] Validate all images render correctly in both themes.

### 11) Testing & QA
- [ ] Run `npm run build` to confirm Vite production build succeeds.
- [ ] Smoke test in browser: home, each section, blog index, and each blog HTML.
- [ ] Test light/dark toggle persistence and responsiveness (desktop/tablet/mobile widths).
- [ ] Lighthouse pass (optional) to check performance/SEO; ensure meta tags carried over.

### 12) Deployment
- [ ] Configure GitHub Pages workflow (`gh-pages` branch or actions) for Vite output in `dist/`.
- [ ] Add an npm script for deploy if using `gh-pages` package (`npm run deploy`).
- [ ] After deploy, verify live URLs for home and blogs; ensure old direct blog links still work.

### 13) Rollback Plan
- [ ] If anything breaks, restore from `backups/site-backup-20251130-173133.tar.gz` by extracting over the repo (excluding `.git`), or revert to the last good commit.
- [ ] Keep the backup archive untouched in `backups/` for reference.

## Notes
- Content must remain unchanged; only structure/implementation should change.
- Avoid deleting legacy HTML until the React build is live and validated.
- When in doubt about parity, prefer embedding existing HTML over rewriting copy.
