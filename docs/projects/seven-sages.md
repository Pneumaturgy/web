# Seven Sages

> Status: shipped · v0.2.2 · personal project
> Repository: [Ghigog/Shipwright](https://github.com/Ghigog/Shipwright/tree/mod/seven-sages),
> branch `mod/seven-sages`
> · public · C++ · last commit 13 August 2026 · GPL

A story-driven randomizer mod for Ocarina of Time in which you play one of
the seven sages instead of Link, with two-player co-op.

## The fork

A fork of [HarbourMasters/Shipwright](https://github.com/HarbourMasters/Shipwright),
the Ocarina of Time PC port, created 7 August 2026. `develop` is upstream
untouched; everything of ours is on `mod/seven-sages`, built by CI for
Windows, macOS and Linux. GPL, because Ship of Harkinian is.

## Playing a sage

Each sage starts somewhere different, at a different age, with a different
kit, chosen from a ring on a dedicated quest slot at file select. That is
enough to make a seed read as a different game rather than the same one
reshuffled.

## Three directories

**`SevenSages`** — about fifty files of item, song, mask and ability
behaviour, plus the select menu and cosmetics.

**`SevenSagesCoop`** — two players in one shared world, sharing world state,
medallions, stones, songs and skulltula tokens while keeping personal
inventories. The seed itself is transferred to teammates in 2KB chunks and
reassembled by index.

**`SevenSagesTrade`** — a shared 24-slot stash reached through a beggar NPC
in Lon Lon Ranch. Every transfer is exactly conservative, with four storage
shapes handled separately so progressive upgrades decrement rather than zero
out.

## Releases

Five, through `seven-sages-v0.2.2` (13 August 2026), with builds attached.
The release notes are unusually honest about what has not been verified,
including an open bug where two players withdrawing the same item at the
same instant can both receive it.

A second mod ships in the same build, off by default: **Enrich World** —
extra scenery, a prop palette and an in-game placer.
