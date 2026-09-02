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

Studio: Pneuma Knights (Pneumaturgy/PorNada, private), Arcade Tycoon
(Pneumaturgy/ArcadeTycoon, private, scaffold only), Trinks
(Pneumaturgy/GMTKjam, private), Cerdo (Ghigog/Cerdo, public).

Personal: Quire, Vapor Music, Lytra, Theory Forge and Seven Sages are
public; By Jove, Mollusk, Navi and Orison are private.

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

## Fix in the repositories, not here

Not site problems, but they will mislead anyone who follows a link:

- **Quire's README** says there is no application code. Five Kotlin modules
  with tests exist. The accurate statement is that the libraries and spikes
  exist and the Android app does not.
- **Navi's repo root** carries committed debug artefacts — a 113KB
  `test_run.log`, a 179KB `done.md`, eight `reconstructed_aiservice_step*.txt`
  files. Private repo, so cosmetic.
- **Theory Forge, Orison, Mollusk and Navi READMEs** link internal docs by
  absolute `file:///Users/dylangrowcoot/` paths, dead for everyone else.

## Still open

- **PneuMath has no repository linked.** `iHackN3WTON/gdt_GuessTheNumber`
  was the candidate; the name does not match "find the hidden pattern in a
  sequence", and it was never confirmed.
- **By Jove pairs with `Pneumaturgy/ByJoveDocs`**, so it may be a studio
  project rather than a personal one. It is listed as personal until
  someone says otherwise. Grid position is unaffected either way.
- `Pneumaturgy/Pneuma`, `Pneumaturgy/godot-template`,
  `Pneumaturgy/Pneumaturgy-Documentation`, `Pneumaturgy/organization-docs`
  and `Ghigog/deafening-app` are deliberately left off — decided, not
  pending.

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
