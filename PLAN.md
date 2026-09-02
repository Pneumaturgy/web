# Implementation plan — Pneumaturgy v2 → production site

Source of truth: `design-handoff/project/Pneumaturgy v2.dc.html` (the final,
agreed design per `design-handoff/chats/chat1.md` — dawn-lit editorial studio, Culture/Growth/Spirit cards,
manifesto sections, "how is this different", money + conflict resolution
side by side, work above studio in nav). This is a Claude Design prototype
built on a proprietary runtime (`support.js`, `x-dc`/`sc-if`/`onClick="{{ }}"`
bindings) — not meant to ship as-is per `README.md`.

## Decisions made (see conversation for full context)

- **Stack: plain static HTML/CSS/JS, no build step.** The source is a single
  page (hero → work grid → studio → manifesto → join) with an in-page modal
  ("sheet") system for 11 project detail docs — not 19 separately routed
  pages. A framework/SSG (Astro etc.) was considered (user shared an old,
  possibly-outdated Gemini writeup suggesting Astro+Tailwind+a social
  auto-posting pipeline) but for this shape of content a build step adds
  risk (npm install, translation of exact inline pixel values into a utility
  framework) without a real benefit yet. Zero-build HTML/CSS/JS is also the
  most resilient choice if this session gets interrupted by a usage limit —
  every file is directly inspectable/resumable, nothing depends on an
  install step completing. If/when the site grows into real per-project
  routed pages or a CMS-driven pipeline, revisit.
- **Location:** built at `/site` inside the original handoff repo first, then
  moved to the root of its own repo, `Pneumaturgy/pneumaturgy_web` on GitHub,
  once the user created it. The original handoff bundle (`project/`,
  `chats/`, `README.md`) came along too, under `design-handoff/`, so nothing
  from the Claude Design export is lost.
- **Discord link:** left as a placeholder (`href="#"`, marked with a
  `data-todo` comment) — user doesn't have the real invite URL yet.
- **Social-media automation pipeline** from the Gemini writeup: out of
  scope. Nothing in the design or chat transcript asked for it; it's
  speculative infra from an unrelated old conversation. Not building it
  unless separately requested.
- **Assets:** copied only the files actually referenced by the design
  (listed in the handoff's "also read these files" import list) into
  `site/assets/`, preserving the same relative paths/filenames used in the
  source `<img src="assets/...">` attributes, so the HTML needs no path
  rewriting.

## Task breakdown

1. [x] Scaffold `/site` dir, copy referenced assets.
2. [x] Write this plan.
3. [x] `css/style.css` — design tokens (colors, fonts, radii, shadows),
   reset, keyframes (`drift`, `bloom`, `rise`), real `:hover` rules
   (replacing the prototype's `style-hover="..."` attribute).
4. [x] `index.html` — page shell: fixed pill nav (Work/Studio/Join), hero
   (flame art, wordmark, pneuma/-turgy etymology pair, CTA buttons).
5. [x] Work grid — 11 cards (Geomancy, Pneuma Knights, Shryn, Por Nada,
   SciWars, Arcade Tycoon, Cerdo, PneuMath, Nico's/Rapha's stories,
   Handbook, Sketches), each opens its sheet on click.
6. [x] Studio section — Culture / Growth / Spirit cards with their small
   icon glyphs.
7. [x] Manifesto sections — "bad decision" intro, "how is this different"
   (3 cards: culture / time / resources), "what about the money?" +
   "how do we resolve conflict?" side-by-side section (4 roles list +
   dark callout).
8. [x] Join CTA section + footer.
9. [x] Sheet/modal system — 11 full detail panels (content transcribed
   verbatim from the source), generic open/close JS (click card → open
   matching sheet, Close button / Escape / backdrop click → close,
   `document.body.style.overflow` lock while open, matches the prototype's
   `DCLogic` state behaviour with plain JS + a `data-sheet` attribute
   convention instead of the `{{ open.x }}` bindings). Also added URL-hash
   deep-linking (`/#geomancy`) as a small enhancement — cheap, non-breaking,
   makes individual projects shareable.
10. [x] Pixel-fidelity pass — verified visually via a real Chromium render
    (Playwright, browser already available in this environment) against the
    source inline styles: colors, spacing, radii, shadows, gradients, grid
    layout, and the modal all check out at both desktop (1440px) and mobile
    (390px) widths. Google Fonts (Bricolage Grotesque / Instrument Sans /
    Martian Mono) couldn't be fetched inside this sandbox's network, so the
    screenshots show a system-font fallback — the `<link>` tags are correct
    and this resolves itself on any host with normal internet access.
11. [x] `README.md` — how to preview (`python3 -m http.server` or
    similar, no build needed) and deploy (any static host: GitHub Pages /
    Cloudflare Pages / Netlify, point at the repo root).
12. [x] Smoke test in a real browser (dev server + Playwright/Chromium
    already available in this environment): all cards tested open the right
    sheet, close works three ways (Close button, Escape, backdrop click),
    all referenced images returned 200 (only a harmless `/favicon.ico` 404),
    no console/page errors, responsive at mobile width.
13. [x] Report back to user; got explicit go-ahead, moved the site to the
    root of `Pneumaturgy/pneumaturgy_web` (plus `design-handoff/` for
    provenance), and committed/pushed.

## Follow-up: documentation pass

14. [x] `docs/` — the Notion prose lifted out of the handoff bundle and kept
    as documentation in its own right: manifesto, how we work, every project
    page (including the two Geomancy sub-pages), and the two handbook guides
    with their screenshots extracted from the Notion export zip. Notion
    artefacts stripped (base64 icon blobs, LaTeX-styled headings, internal
    page URLs); wording otherwise left as the author wrote it.
15. [x] `docs/site-coverage.md` — a written comparison of the docs against
    `index.html`: what the site never carries (How we work, Geomancy
    Classes, Geomancy Original Concept), where it stops early (Por Nada's
    final act, Nico's full bark pools, SciWars unit progression, Arcade
    Tycoon ticket pricing, the whole step-by-step handbook), and the handful
    of lines that exist only on the site and should be folded back into the
    docs.
16. [x] Site parity pass — everything `docs/site-coverage.md` flagged as
    missing is now on the site: a "How we work" section (cadence, circular
    pairing); Geomancy's lineage and its logic-class system; Por Nada's
    final act (Libertalia notices, the GDScript block, the yes/no branch,
    the night-75 instructions); Nico's full bark pools, mech logs and
    epilogue; SciWars units, economy and controls; Arcade Tycoon ticket
    pricing and its four screens; the full Godot handbook; and the Stoic
    attribution plus the Benedict link in the manifesto. Verified in a real
    Chromium render: all 11 sheets open, no horizontal overflow at 1280px
    or 390px, no new console errors.
17. [x] Repositories and ordering — the work grid is now ordered by last
    commit, with the design-doc-only projects after it, and every project
    that has a repository links to it. Pneuma Knights gained a "where it is
    now" section written from `Pneumaturgy/PorNada` (phases, payloads,
    enemy strategies, spawn tables, procedural background, inventory,
    mobile UI, GUT, tickets). Arcade Tycoon is recorded honestly as a
    scaffold. Trinks — the GMTK 2024 entry Notion never wrote up — is a new
    project page written from `Pneumaturgy/GMTKjam`, and comes out of the
    sketches card. Real Discord invite wired up.
    Not done: the personal `Ghigog/*` and `iHackN3WTON/*` projects. A
    session's GitHub access is limited to one owner and this one is on
    `Pneumaturgy/`, so those repos could not be read; see
    `docs/site-coverage.md` for the list still waiting on a description.
18. [x] Personal projects — nine of them (Quire, By Jove, Vapor Music,
    Seven Sages, Lytra, Mollusk, Navi, Orison, Theory Forge) written up
    from their repositories and mixed into the same work grid as the
    studio's, ordered by last commit. Their repos live under a different
    GitHub owner than this session could reach, so the source material was
    gathered by a second session scoped to `Ghigog/` and handed over.
    Cerdo's repository is public and its last commit is July 2024, checked
    against GitHub rather than taken from the handoff.
