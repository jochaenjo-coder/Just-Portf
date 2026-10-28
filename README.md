# Just-Portf

A one-page portfolio site for **Justine Usman** — Administrative Assistant & AI Video Generator — built from the résumé markdown in the parent folder.

## Preview locally

```bash
node server.js
```

Then open <http://localhost:3000>. The original résumé is also served at `/resume.md`.

## Files

- `index.html` — the full site (HTML + CSS + a little JavaScript, no build step)
- `server.js` — zero-dependency local static server
- `portrait.jpg` — optional; drop a photo in this folder and it appears in the hero automatically (initials show until then)

## Publish with GitHub Pages

In the repository, go to **Settings → Pages**, set **Source** to **Deploy from a branch**, choose **main** and **/(root)**, then save.

The site will be available at <https://jochaenjo-coder.github.io/Just-Portf/>.
