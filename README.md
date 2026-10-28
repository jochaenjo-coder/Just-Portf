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
- `portrait.jpg` — profile photo used in the hero
- `render.yaml` — Render Blueprint for a free static site

## Deploy to Render

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/jochaenjo-coder/Just-Portf)

The Blueprint creates a free static site with no build step. Sign in to Render, connect GitHub, review the service, and click **Apply**. Future pushes to `main` deploy automatically.

## Publish with GitHub Pages

In the repository, go to **Settings → Pages**, set **Source** to **Deploy from a branch**, choose **main** and **/(root)**, then save.

The site will be available at <https://jochaenjo-coder.github.io/Just-Portf/>.
