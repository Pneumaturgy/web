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
| [Por Nada](projects/por-nada.md) — the whole final act | The Libertalia notices, the GDScript block with its comments, the yes/no branch and Nada's night-75 instructions, all in the Por Nada sheet |
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

Studio: By Jove (Ghigog/by_jove_godot, private), Pneuma Knights
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

## README fixes — PRs open

Not site problems, but they mislead anyone who follows a link. All five are
on branch `claude/readme-fixes-p4y2lt`, awaiting merge:

| Repo | PR | Fix |
| --- | --- | --- |
| Ghigog/Quire | [#1](https://github.com/Ghigog/Quire/pull/1) | Status section rewritten — it claimed there was no application code |
| Ghigog/lol-theory | [#1](https://github.com/Ghigog/lol-theory/pull/1) | 3 `file:///Users/...` links repointed; clone URL still said `your-username` |
| Ghigog/orison | [#1](https://github.com/Ghigog/orison/pull/1) | 9 links |
| Ghigog/mollusk | [#1](https://github.com/Ghigog/mollusk/pull/1) | 9 links |
| Ghigog/navi-agent | [#1](https://github.com/Ghigog/navi-agent/pull/1) | 5 links |

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
