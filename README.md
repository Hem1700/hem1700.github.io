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

## Driveable portfolio playground

The homepage is a free-roam 3D playground with a detailed car, two ramps, and 36 movable cones, crates and barrels. Explore in any order, knock objects over, or follow optional automatic navigation to a portfolio exhibit. Manual driving never forces the reader open: park near a place and press E or use the onscreen Explore button.

- WASD / arrows: accelerate, reverse, and steer.
- Space: brake. R: restore the car and loose objects. C: change camera.
- Escape: close content or pause/resume.
- Touch driving buttons and onscreen reset are available on phones.
- Selecting a place traces a visible route and drives there. Arriving through automatic navigation opens its original content.

The original homepage is preserved exactly in `profile.html`. Existing résumé pages, writeups, images and documents are unchanged, and content is read directly from those pages. Visitors can use “Read portfolio” without WebGL or JavaScript. GitHub Pages continues serving the repository root with no build step.

`assets/campus.js` creates the world, `assets/navigation.mjs` plans routes, `assets/physics.mjs` handles movable-object collisions, and `assets/portfolio.js` connects movement to original content. The car model and credits are in `assets/models/`; Three.js and its MIT license are vendored in `assets/vendor/`.

Run `python3 -m http.server 8000` for a local preview. `python3 scripts/build-static.py` stages the unchanged static architecture for private Sites hosting when available.
