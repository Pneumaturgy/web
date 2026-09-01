# Pneumaturgy — production site

Plain static HTML/CSS/JS (no build step). This is the production
implementation of `design-handoff/project/Pneumaturgy v2.dc.html`, the final
Claude Design prototype described in `design-handoff/chats/chat1.md`. See
`PLAN.md` for the implementation plan and the decisions behind the stack
choice.

## Structure

```
index.html      one-page site: nav, hero, work grid, studio, manifesto,
                 join/footer, plus 11 project "sheets" rendered as a modal
css/style.css    all styling — design tokens, layout, the sheet/modal system
js/main.js       opens/closes project sheets, Escape/backdrop-click to
                 close, syncs the open sheet to the URL hash (e.g.
                 /#geomancy is shareable and deep-links straight to it)
assets/          images referenced by index.html (logos, figure glyphs,
                 Geomancy gem photography, screenshots)
design-handoff/  the original Claude Design export this site was built
                 from — chat transcript, Notion export, source prototype —
                 kept for provenance, not needed to run the site
```

## Preview locally

No install, no build. Any static file server works, e.g.:

```
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy

Static hosting only — point any of these at the repo root:

- **GitHub Pages** — Settings → Pages → deploy from this branch, root.
- **Cloudflare Pages / Netlify / Vercel** — set the project (or build)
  output directory to `/` (repo root), no build command needed.

## Known placeholder

The "Join the Discord" button (`index.html`, marked with a `<!-- TODO -->`
comment near the `join` section) links to `#`. Swap in the real invite URL
when you have one.

## Extending

Each project write-up lives in its own `<article class="sheet-doc"
data-doc="...">` block inside `index.html`. `js/main.js` matches sheets to
their opening card purely by the shared `data-sheet` / `data-doc` value, so
adding a new project is: add a card button with a new `data-sheet="key"`,
add a matching `<article data-doc="key">` in the sheet overlay, done.
