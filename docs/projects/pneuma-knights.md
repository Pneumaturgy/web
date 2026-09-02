# Pneuma Knights

> Status: in development · design doc · created 13 July 2024
> Source: Notion, *Projects → Design Docs → Pneuma Knights*.
> Full design document:
> [Google Docs](https://docs.google.com/document/d/1w635j4DAkOwRYjL4AGsxnFsfcrL3GB94Eme8NHEOoUI/edit#heading=h.689pbr44gy3p)
> Repository: [Pneumaturgy/PorNada](https://github.com/Pneumaturgy/PorNada)
> · private · Godot 4 · last commit 1 June 2026 — named after
> [the story](por-nada.md) it carries

Story proposals: [Por Nada](por-nada.md) ·
[Nico's Story Proposal](nicos-story-proposal.md) ·
[Rapha's Story](raphas-story.md)

## Premise

*You wake up in a drop pod falling from the sky onto a strange planet. As
you emerge from the drop pod, you find yourself in a mech suit, surrounded
by a strange planet rich in resources. **Who are you? What is this strange
world? How did I get here?** You reach into your crashed drop pod and pull
out a `<random>` weapon. **Now you must survive!***

## Design pillars

- 2D, top down 3rd person view (like Factorio)
- Procedurally generated world
- Day/night cycle (like Minecraft)
- World is peaceful by day (*at least for now…*) and dangerous by night
  (*things that seemed inanimate by day now suddenly want to kill you?*)
- Gather resources from your environment to upgrade your gear / build your
  army of drones
- Discover other procedurally generated (but not all of them, see below)
  mechs just like yours, some are dead and some are alive (*and if alive
  they definitely want to kill you*)
  - Find and research new (random) parts for your mech via what you scavenge
    from those mechs (once they are dead)
- Build and maintain a group of autonomous drones to help you gather
  resources and defend yourself
- On death, explode into a bunch of pixels and choose what item(s) to take
  with you into the next life — based on a point system / power level, i.e.
  a bunch of weak items or a single strong one; every item has a power
  rating and you can carry up to X rating forward. ***Is this a simulation?
  How can I escape?***
  - Intro plays again and you are now playing a new game, but instead of a
    random weapon (unless you took nothing from the previous life), you find
    your saved items from your previous run in the drop pod.
- Find a secret set of powerful Arthurian Artifacts scattered throughout the
  world *to escape the simulation* and ***discover what is really going on***
- Find and fight past versions of yourself (these are the mechs that are not
  procedurally generated)

## The slot system

Your mech suit has multiple slots for items/artifacts. Only a single slot
can be controlled at a time (for a powerful effect), all other slots are
automated with a weaker effect. Overtime as you fill all the slots, you may
discover powerful synergies between slots/artifacts to the point where the
combination of your automated slots is stronger than your single selected
manual slot — at which point you are encouraged to pick your weakest
slot/item combination as your manual slot, to let the automation do all the
work as you run around the map exploring and fighting everything out to kill
you.

## Where it is now

This is the project that is actually being built. It runs on Godot 4, plays
on desktop and on a phone, and carries eleven system documents of its own in
[`Docs/`](https://github.com/Pneumaturgy/PorNada/tree/main/Docs). What
follows is what exists in the build, not in a design document.

### Phases

Three timed phases, not two: **dawn** for preparation, **day** for the
fight, **night** as an atmospheric looting stretch. `Main.gd` runs a timer
per phase and swaps the jukebox playlist as each begins.

### Payloads

Every projectile is a resource composed of three parts:

- `payloadStatsResource` — `bullet_speed`, `timeToLive`, `fire_rate`, a
  `spawn_children` flag, and `affected_properties_with_deltas`: a dictionary
  of how much health, defence or speed the hit changes.
- `payloadBehaviorResource` — the movement strategy (linear, chasing, and so
  on).
- `payloadSpawnResource` — how it initialises, and whether it spawns
  children.

A `Payload` is an `Area2D` that arms a death timer on `_ready`, moves by its
strategy, and on collision applies its effects, plays its hit effect and
frees itself. A straight shot, a homing missile, a shotgun spread and a
multi-stage shell are the same object configured differently.

### Enemies

Strategy pattern, injected by resource. `AlienResource` holds a
`MOVEMENT_STRATEGIES` enum and returns the right instance from
`get_chasing_movement_strategy()`. Two exist so far: the base
`alien_movement_strategy` (a direct vector at the player, scaled by speed)
and a teleport strategy. A new enemy is a `.tres` swapped in the inspector.

### Spawning

`AlienSpawner` places enemies in a ring outside the viewport, between a
minimum and maximum distance, and calls `update_difficulty()` to scale
`current_max_aliens`, `spawn_frequency` and `spawn_quantity` against
`Global.current_stage`.

Which enemy appears comes from a `SpawnTable` resource: rows of
`{stage_number, alien_index, weight}`, compiled at runtime into a lookup
dictionary, picked by rolling against the total weight for the stage. A `*`
wildcard row covers any stage nobody has tuned yet.

### The world

`procedural_background.gd` generates a `FastNoiseLite` image at a random
seed and walks its pixels. Each mesh type owns a band of noise values in
`ranges_array`; a point inside the band may place an instance, thinned by
`spawn_chances` and jittered by `variance_multiplier` so nothing lands on a
visible grid. Rendering goes through `MultiMeshInstance2D`, so thousands of
objects cost one draw call. Generation happens once, at `_ready()`.

### Entities, inventory, UI

`Entity` extends `CharacterBody2D` and holds `health`, `defense` and `speed`
in a properties dictionary, copied into `runtime_properties` at start, with
triggers that fire on change — death when health reaches zero. `Player`
extends `Mech`, which extends `Entity`, and adds input, weapons and
inventory.

Drops carry an identifier, an icon and a quantity range; the inventory is a
`CanvasLayer` grid that stacks by identifier and pauses player control while
open. Input works from a mobile overlay (touch to move, touch to aim) or
from mouse and keyboard, with a HUD health bar and a `glass_panel.gdshader`
for the UI.

### Practice

GUT tests in `Tests/`, an AI Assistant Hub editor plugin for LLM-assisted
work, and a house rule stated in the README: every feature and major change
gets a ticket in `Docs/Tickets.md` before anyone implements it.

### What changed from this design doc

The doc above says peaceful by day, dangerous by night. The build inverted
it — the fight is the day phase, the night is for looting — and added dawn
in front as a preparation beat. Drones, the Arthurian artifacts and fighting
past versions of yourself are still ahead of the build; the loop, the
enemies and the world are what exist today.
