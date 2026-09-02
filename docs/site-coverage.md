# Site coverage — docs against the website

The site (`index.html`) now carries the substance of every page in these
docs. This page records what is still deliberately different, so nobody has
to diff the two by hand.

Last checked against the site: September 2026.

## Closed

Everything below was missing from the site and has since been added.

| Was missing | Now on the site |
| --- | --- |
| [How we work](studio/how-we-work.md) — cadence and circular pairing | Its own studio section, between the three values and the manifesto |
| [Geomancy → Classes](projects/geomancy-classes.md) — the eleven logical forms as roles | "The classes are the logic" in the Geomancy sheet: the family/role table and all eleven forms worked through |
| [Geomancy → Original Concept](projects/geomancy-original-concept.md) — lineage, full fight, generated fighters, mana from people, personal progression | "Where it comes from" in the Geomancy sheet |
| [Por Nada — the story](projects/por-nada-story.md) — the whole final act | The Libertalia notices, the GDScript block with its comments, the yes/no branch and Nada's night-75 instructions, all in the Por Nada sheet |
| [Nico's Story Proposal](projects/nicos-story-proposal.md) — the full bark pools, mech logs, epilogue | Four threshold pools with their unlock conditions, both sets of mech logs with the day arithmetic, and the scientists' dialogue in full |
| [SciWars](projects/sciwars-apocalypse.md) — units, economy, controls | "Units", "The world" and "Playing it" sections |
| [Arcade Tycoon](projects/arcade-tycoon.md) — ticket pricing, the four screens | "Pricing the cabinet" and "Four screens" |
| [Handbook](handbook/) — the step-by-step guides | The handbook sheet now carries the full folder tree, the crash course, GUT, and the export and package-name steps, and links here for the screenshots |
| [Manifesto](studio/manifesto.md) — Stoic attribution, the Benedict link | The hero definition and a line under the conflict section |

## Still different, on purpose

**Handbook screenshots.** All seventeen live in `handbook/assets/` and are
shown on the doc pages. The site links to those pages rather than embedding
them — a modal is the wrong place for seventeen screenshots of Windows
dialogs. Reverse it by inlining the images if you would rather have them
there.

**Length.** The site still reads as a site: ledes, cards, and prose written
to be read straight through. The docs keep the author's original phrasing
and typos throughout. Where the two disagree on a fact, the docs win.

## Repositories

Every project with a repository links to it, and the work grid is ordered by
last commit. Read from GitHub on 2 September 2026.

Studio: By Jove (Ghigog/by_jove_godot, private), Por Nada
(Pneumaturgy/PorNada, private), Arcade Tycoon (Pneumaturgy/ArcadeTycoon,
private, scaffold only), Trinks (Pneumaturgy/GMTKjam, private), Cerdo
(Ghigog/Cerdo, public).

Personal: Quire, Vapor Music, Lytra, Theory Forge and Seven Sages are
public; Mollusk, Navi and Orison are private.

Private repositories stay private by decision. Their links are labelled
`private` on the site so a visitor knows the repository exists and the link
is not broken — what is current about each one is written up on the page
instead. The full table is in the [project index](projects/README.md).

## Accuracy notes carried from the repositories

Things the write-ups deliberately say, because the source contradicts
itself or the obvious reading is wrong:

- **Vapor Music is proprietary**, all rights reserved. It was AGPL until 20
  August 2026. It must never be described as open source.
- **Seven Sages is GPL**, because Ship of Harkinian is. It is a fork; only
  the `mod/seven-sages` branch is ours.
- **Orison is paused**, not active — nothing since 17 June 2026.
- Four projects were touched in the last week of August, two not since
  June. The site says "last commit" and "last worked on" rather than
  implying everything is live.

## The site's shape

**The work** carries what is finished or in active development, ordered by
last commit. **Design docs** sits at the very bottom of the page, below the
join panel, for projects that have not reached implementation: Arcade
Tycoon, SciWars: Apocalypse, Shryn, LifeTracker and Ratchet & Clank
Cleaner. The footer is last.

Arcade Tycoon has a repository but it is a scaffold with nothing built on
it, so it belongs with the design docs rather than the work.

Card size carries project size, read from the repository: `1x1` small,
`2x1` or `1x2` medium, `2x2` large. Large today is By Jove, Seven Sages and
Por Nada. Seven Sages carries a line of facts under its body so the space
is earned rather than empty; the other two fill it with artwork instead.

The grid packs with `grid-auto-flow: dense`, so a small card will sometimes
rise to fill a gap left by a larger one. Ordering therefore reads as
newest-first overall rather than strictly commit by commit — the
alternative was visible holes in the grid, or distorting card sizes to make
them tile, and both were worse. Below 1000px the row spans drop and it
becomes a plain flow; below 640px it is a single column in exact date
order.

Two things came off the site and stayed in the docs only:

- **How we build** — the handbook is pure internal documentation and does
  not belong on a public page. It lives in [handbook/](handbook/).
- **Nico's Proposal and Rapha's Story** — they are proposals for Por Nada's
  story, so they are now disclosures inside the Por Nada sheet rather than
  a card of their own.

Card eyebrows no longer mark work as personal or studio; they carry status
and the last commit date on its own line. The
[project index](projects/README.md) still records which is which.

## Project art

Collected from the repositories and delivered on the `site-assets` branch of
`Ghigog/Quire`. What went in, renamed into the site's
`assets/<Project>/<Name>` layout:

| Project | Files | Treatment |
| --- | --- | --- |
| By Jove | `ByJoveLogo.png`, `Skydome.jpg` | Skydome behind the card gradient, mark top-right; skydome again as a figure in the sheet |
| Vapor Music | `VaporLogo.png`, `VaporKeyArt.jpg` | Logo card; key art opens the sheet |
| Lytra | `LytraLogo.png` | Logo card |
| Mollusk | `MolluskLogo.png`, `Architecture.png` | Logo card; the architecture diagram illustrates "Three processes" |
| Navi | `NaviLogo.png` | **Dark** logo card — the mark is pale glass and washes out on white |
| Orison | `OrisonLogo.png` | **Dark** logo card — the mark is white on transparency and is invisible on white |

Putting the two pale marks on dark plates solved them without redrawing
anything.

### Held back, with reasons

- **`vapor-02.jpg`** — a render of Vapor's committed design canvas showing a
  *phone* UI. Vapor is a desktop Tauri app, so publishing it would
  misrepresent the product, and the second panel is mostly empty
  placeholder. Not used.
- **`byjove-02.jpg`** — character key art (Komra): a gnarled wooden face.
  Striking, but nothing in the write-up establishes what Komra is, so it
  could not be captioned honestly.
- **`theoryforge-01.png`** — 343×361 decorative graphic, below the size floor
  and not a logo.
- **`pneumaturgy-logo.png`** — this is the *full* mark including the circle
  and cross, which was deliberately dropped from the site's identity at
  design time. `assets/flame.png` stays.
- **`cerdo-01.png`**, **`lytra-01.png`** — a die sprite and an app icon that
  duplicate art the site already has.

### Still needs art made

| Project | Gap |
| --- | --- |
| Quire | No image of any kind in the repository |
| Seven Sages | Only original image on `mod/seven-sages` is a 128×32 title strip; everything else in the fork is Ship of Harkinian's |
| Theory Forge | No logo, and a screenshot needs a machine that can reach the Meraki and Data Dragon CDNs |

Those three stay plain text cards, which the design supports.

## Corrections to this repo's own Quire write-up

Checking Quire against the checkout turned up three errors in what was
written here first. All are now fixed on the site and in
[the project page](projects/quire.md); recorded so the same mistakes are
not reintroduced:

- **Six modules in the root build, not five.** `spike:slice` was missed, and
  it has tests.
- **`core:epub` has no unit tests** — just `EpubText.kt` under `src/main`.
  Fifteen test classes across the other five modules; `./gradlew test`
  passes.
- **"Nothing runs on a device" was wrong.** `spike/ttsbinding` is a real
  Android application module and `spike/pipeline` a desktop harness; both
  sit outside the root build with their own `settings.gradle.kts`, which is
  why a glance at the root missed them. What is genuinely absent is the
  reading app.

The general lesson: a module list read from `settings.gradle.kts` alone
undercounts a project that has nested builds.

## Settled

- **By Jove is a studio project**, not a personal one, and is listed as
  such. `Pneumaturgy/ByJoveDocs` is old and not referenced.
- **PneuMath has no repository linked, on purpose.**
  `iHackN3WTON/gdt_GuessTheNumber` is a predecessor of the idea rather than
  PneuMath itself, and stays off the site.
- `Pneumaturgy/Pneuma`, `Pneumaturgy/godot-template`,
  `Pneumaturgy/Pneumaturgy-Documentation`, `Pneumaturgy/organization-docs`
  and `Ghigog/deafening-app` are deliberately left off.

## Known gaps in the source itself

- [Ratchet & Clank Cleaner](projects/ratchet-and-clank-cleaner.md) is a
  title with no body.
- [Geomancy → Classes](projects/geomancy-classes.md) contradicts itself on
  two role labels (dilemma and operand); see the note at the foot of that
  page. The site uses the section headings, not the glossary: dilemma →
  magicians, operand → warriors.
- Neither Cerdo nor PneuMath records a store or build link.
- Notion's *GMTK Game Jam* page was an empty stub; the project it stood for
  is written up from its repository as [Trinks](projects/trinks.md).
- The high priest "ensures all decisions comply with **consciousness**" here
  and with **the overall vision** on the site. Left as it is on purpose: the
  site's wording is the one we mean.
