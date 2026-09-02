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

The site now links a repository from every project that has one, and orders
the work grid by last commit. Read in September 2026:

| Project | Repository | Last commit | Visibility |
| --- | --- | --- | --- |
| Pneuma Knights | Pneumaturgy/PorNada | 1 Jun 2026 | **private** |
| Arcade Tycoon | Pneumaturgy/ArcadeTycoon | 30 Nov 2024 | **private** |
| Trinks | Pneumaturgy/GMTKjam | 20 Aug 2024 | **private** |
| Cerdo | Ghigog/Cerdo | 7 Jul 2024 | **private** |

Every one of those is private today, so the links 404 for anyone who is not
signed in with access. They need flipping to public before the site is worth
sharing.

## Still to add

Personal projects were not added. GitHub access in a session is limited to a
single owner, and this session was opened on `Pneumaturgy/` — so
`Ghigog/*` and `iHackN3WTON/*` could not be read at all, and writing
descriptions from repository names alone would have meant inventing them.

Waiting on a line each: `vapor-music`, `by_jove_godot`, `lol-theory`,
`lytra`, `navi-agent`, `mollusk`, `orison`, `Quire`, and `Shipwright` (a
Ship of Harkinian mod on the Ocarina of Time randomizer, called Seven
Sages). Also unconfirmed: whether `iHackN3WTON/gdt_GuessTheNumber` is
PneuMath — the name does not obviously match "find the hidden pattern in a
sequence".

Same-owner repositories not yet on the site or in these docs, which may or
may not belong there: `Pneumaturgy/Pneuma`, `Pneumaturgy/godot-template`
(the handbook's template, as a repository),
`Pneumaturgy/Pneumaturgy-Documentation`, `Pneumaturgy/organization-docs`
and `Pneumaturgy/ByJoveDocs`.

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
