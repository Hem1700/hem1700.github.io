# Portfolio UI Revamp TODO (Detailed)

Goal: Bold, cohesive portfolio with clear navigation, modern typography, and strong section layouts. Keep content intact; improve presentation, interactions, and responsiveness.

## 1) Visual System
- [x] Palette: define light/dark tokens (bg, surface, subtle, text-strong/muted, accent/amber, border, shadow, gradients) with CSS variables.
- [x] Typography: choose display (e.g., Space Grotesk or Sora) and body (e.g., Inter) with explicit weights; set heading scale, letter spacing, and body line-height.
- [x] Spacing & radius: establish spacing scale (4/8/12/16/24/32) and radii (12–16px) with shadow tiers.
- [x] Background: add subtle gradient mesh or noise layer; ensure performance (CSS gradients, small noise texture).

## 2) Navigation & Shell
- [x] Sticky nav with active states for routes; add thin top progress bar on scroll.
- [ ] Primary CTAs in nav (e.g., “Projects”, “Contact”).
- [ ] Theme toggle polish; ensure focus-visible styles.

## 3) Hero
- [x] Rework layout: headline + descriptor stack (role, focus areas, location/time zone).
- [x] Add dual CTAs: “View Projects” (scroll/route) and “Get in Touch”.
- [x] Add quick stats pills (years, projects shipped, certifications).
- [x] Keep hero image; add soft glow/gradient behind.

## 4) Experience
- [ ] Timeline with logos/initials badges, role, company, dates.
- [ ] Add 1–2 bullet highlights per role (impact-focused).
- [ ] Optional filters (tabs): All / Security / Cloud (layout-ready even if static).

## 5) Projects
- [x] Rich cards: title, short blurb, stack tags, impact metric, links (GitHub/demo).
- [ ] Add featured carousel for top 2–3 projects (currently static featured list).
- [x] Filters (chips) for categories (Web, Security Tools, Research).
- [x] Grid responsive down to mobile.

## 6) Certifications
- [ ] Card grid with issuer badge/initial, title, issue/expiry, credential link.
- [x] Group by domain (Security, Cloud, Networking) via chips/tabs.
- [x] Clean, non-accordion presentation.

## 7) Blog
- [x] Blog index: search bar, category chips (static tags), nicer cards (date/read-time prominence).
- [x] Blog detail: consistent typography, sticky mini-TOC for long posts, cleaner header.

## 8) Contact CTA
- [x] Dedicated contact strip: email copy button, LinkedIn/GitHub buttons, optional calendar link (email/LinkedIn/GitHub added).
- [x] Footer: social icons, back-to-top button.

## 9) Interactions & Motion
- [ ] Hover lifts on cards, focus-visible outlines, button transitions.
- [ ] Small reveal/slide on scroll (lightweight, CSS/IntersectionObserver).
- [ ] Smooth scroll and SPA-friendly routing (404 fallback intact).

## 10) Performance & QA
- [ ] Optimize images (WebP), preload fonts.
- [ ] Verify SPA routing on refresh; test breakpoints.
- [ ] Lighthouse sanity check (performance/SEO/accessibility).

Implementation order: Visual system → Nav/Hero → Experience → Projects → Certifications → Blog → Contact → polish/QA.
