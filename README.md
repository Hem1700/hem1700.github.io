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

The homepage is a physics sandbox in the spirit of bruno-simon.com: a chunky 4x4 on real raycast suspension, your name in giant pixel letters to crash through, a brick wall, jump ramps, and cones, crates and barrels that tumble. The six places are spread far across the open world — up to 160 units out from the middle, each at the end of its own road — so you drive out and find them. There are no walls: the ground runs on forever, exhibit platforms can be driven onto, and street lamps fall over when you hit them. Portfolio exhibits sit around the island; drive up to one and press E, or pick a place and the car drives itself there and opens the original content. Taking the wheel always works, even with a page open: the reader closes and you drive off.

- W A S D / arrows: drive and steer. Shift: boost. Space: handbrake. C: change camera.
- R: put the car and every loose object back. The car also rights itself if it lands on its roof.
- Escape: close content or pause/resume. Any drive key resumes a paused drive, and switching windows never pauses it.
- Touch driving buttons are available on phones.
- Sound is synthesised in the browser — no audio files. The engine is a four-cylinder four-stroke whose firing frequency follows the revs, so gear changes drop the note; on top of it sit intake roar, tyre roll and slip, wind, and impacts scaled by how hard you hit. It starts on your first key press or tap, and the Sound button in the header mutes it (the choice is remembered).
- The car weighs 900kg and drives through a five-speed gearbox with a torque curve, engine braking and aerodynamic drag: about 1.7 seconds to 10m/s, 3.7 to 25m/s, roughly 39m/s flat out (48 on boost), and 31 units to stop from 24m/s. The rear steps out under power and under the handbrake, and lays rubber where it slides.

The original homepage is preserved exactly in `profile.html`. Existing résumé pages, writeups, images and documents are unchanged, and content is read directly from those pages. Visitors can use “Read portfolio” without WebGL or JavaScript. GitHub Pages continues serving the repository root with no build step.

`assets/campus.js` builds the world, the car and the physics, `assets/navigation.mjs` plans routes between places, `assets/sound.mjs` synthesises the audio, and `assets/portfolio.js` connects driving to the original content. Three.js (MIT) and cannon-es 0.20.0 (MIT) are vendored in `assets/vendor/` with their licenses.

Run `python3 -m http.server 8000` for a local preview.
