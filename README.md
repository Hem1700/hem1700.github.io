# hem1700.github.io — Portfolio

> Personal site for **Hem Parekh** — security engineer, memory-safety & vulnerability research.
> Live at **[hem1700.github.io](https://hem1700.github.io)**

A minimal, content-first portfolio: a quiet multi-page static site that leads with real upstream
security findings, then projects, writing, and background. No build step, no framework.

---

## Pages

| Page | What's on it |
|------|--------------|
| `index.html` | Home — hero and a short "selected findings" teaser |
| `findings.html` | Upstream vulnerability findings (ksmbd, PyTorch, curl, NTFS) with links to the patches |
| `projects.html` | FORGE, mcp-tool-poisoning-scanner, bug-hunter, CRIP, RAVEN, PatchProbe, ShellScribe, SITA/CETAS |
| `writing.html` | Index of all 18 writeups |
| `posts/*.html` | One page per writeup, full content in the site's typography |
| `about.html` | Experience, education, focus areas, tooling, certifications |
| `404.html` | Styled not-found page |

---

## Stack

- Plain HTML + one shared `style.css`. No framework, no bundler, no build.
- Fonts: Newsreader (serif), Inter (sans), JetBrains Mono — loaded from Google Fonts.
- A tiny `IntersectionObserver` snippet per page for fade-in on scroll. That's the only JS.
- **GitHub Pages** — served directly from the `main` branch root (`.nojekyll` present).

---

## Structure

```
.
├── index.html              # home
├── findings.html
├── projects.html
├── writing.html
├── about.html
├── 404.html
├── style.css               # shared stylesheet for every page
└── posts/                  # one HTML page per writeup (18)
```

---

## Local development

No tooling required. Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

Edit the HTML/CSS directly. Keep all files together — pages use relative links, and post
pages reference `../style.css`.

---

## Deploying

GitHub Pages serves the repo root, so deploying is just a commit and push:

```bash
git add -A
git commit -m "Update site"
git push
```

The site is live ~1 minute after pushing.

---

## Security

See [SECURITY.md](SECURITY.md) for the responsible-disclosure policy.

## License

MIT — see [LICENSE](LICENSE).

## Driveable portfolio

The homepage is a small explorable 3D campus. The car is the navigation: visitors can drive freely with WASD / arrow keys, click a building, or choose a destination. Automatic navigation drives the car along the circular road and parks at the selected place. Arrival reveals the original portfolio content alongside the scene.

Six physical destinations correspond to Overview, Findings, Projects, Writing, About, and Contact. There are no race objectives, timers, scores, or unlocks. All content is immediately accessible through navigation. Space brakes, C switches between overview and follow cameras, Escape closes content or pauses the drive. Touch controls support phones. The map-view button shows the entire campus.

Content is read from the existing HTML pages and inserted into the side panel without rewriting its wording. Internal portfolio links drive the car to the corresponding place; writeups open within the same panel. External links retain their destinations. `profile.html` preserves the original homepage byte-for-byte. The original pages, articles, images, and résumé documents remain independently accessible. The “Read portfolio” link works without JavaScript or WebGL.

- `assets/campus.js`: 3D places, car, controls, lighting, and camera.
- `assets/navigation.mjs`: destinations and automatic route following.
- `assets/portfolio.js`: arrival-driven content and navigation.
- `drive.css`: responsive interface and original-content reader styling.
- `assets/vendor/`: locally vendored Three.js and Sky with the upstream MIT license.

GitHub Pages still serves the repository root with no build step or package installation. Run `python3 -m http.server 8000` to preview locally. For a private Sites preview only, run `python3 scripts/build-static.py`; `.openai/hosting.json` points to the staged output. Do not commit `dist/`.
