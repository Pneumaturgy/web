# Trinks

> Status: shipped · GMTK game jam · August 2024
> Repository: [Pneumaturgy/GMTKjam](https://github.com/Pneumaturgy/GMTKjam)
> · Godot 4 · last commit 20 August 2024
>
> Notion never wrote this one up: its *Closed Projects → GMTK Game Jam*
> page is an empty stub. This page is written from the repository.

Our GMTK 2024 entry. A trink is a block with three empty sockets, and every
trink it grows is another block with three empty sockets.

## How it grows

Each trink carries a slot on its right, its left and its base. When one
enters the world it looks at all three, skips any that are already occupied
or overlapping something, and rolls for a new trink in each of the rest. A
trink that was itself grown from another never fills its base slot — that
socket is freed on birth, since the parent already occupies it.

Left alone this would never terminate. So each trink hands its children a
*refusal* chance (`no_spawn_chance`, starting at 50) and multiplies it by
`no_spawn_growth_factor` — 1.5 — on the way down. Every generation is
likelier than the last to decline, and the structure stops itself.

The roll is weighted across the three types, against the total spawn chance
plus the accumulated refusal:

| Type | Weight | Behaviour |
| --- | --- | --- |
| `BlankTrink` | 50 | The only type that grows further. Inherits the raised refusal chance. |
| `SpikeTrink` | 30 | Hazard. Terminal — never grows anything. Destroys any trink entering its detection slot. |
| `ShieldTrink` | 15 | Hazard. Terminal, and sets its growth factor to 10, so it is far more reluctant still. |

Both hazards extend `HazardTrink`, which extends `Trink`.

## Out in the world

The main scene listens on `Global.connected` and instantiates a fresh
`BlankTrink` each time a connection is made. It is placed at least 500
pixels clear of the player on both axes, in a randomly chosen quadrant of a
4096-pixel field — so the map keeps seeding new structures to find while the
one under your hands is still deciding how far it wants to go.

## Infrastructure

Built on the [Godot mobile UI template](../handbook/godot-mobile-ui-template.md):
the same `Global` autoload, with encrypted save and progress files
(`user://GMTKjam.save`, `user://GMTKjam_progress.save`) written through
`FileAccess.open_encrypted_with_pass` and a wins/losses progress dictionary.
