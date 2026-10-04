# By Jove

> Status: in development · studio project
> Repository: [Ghigog/by_jove_godot](https://github.com/Ghigog/by_jove_godot)
> · private · Godot 4 · last commit 3 October 2026

A 3D game set in the atmosphere of Jupiter. You play a robot that runs on
hydrogen, descending through procedurally generated levels.

## The loop

Hydrogen is both fuel and health, so every route decision is also a survival
decision. Running out does not fade to black: the player's procedural rig
collapses into physics bodies. The robots that came before you are scattered
through the levels as remains, and what they left has to be decrypted before
it can be read.

## How it is built

- **Levels** are assembled by a multi-pass procedural generator out of
  corridors, side paths, obstacles and safe rooms, under volumetric cloud
  shaders for the Jovian sky.
- **NPC dialogue** runs through a local language model via NobodyWho, driven
  by per-character `.tres` profiles and a shared world-lore resource, with
  authored fallback lines.
- **Tests**: a GUT suite of 466 tests across 28 files.
- **`_legacy/`** holds retired code rather than deleting it.

## Terminals you have to talk round

The data terminals' decrypt button is gone. Each terminal has a security
warden, a separate conversation on the NPCs' local model, and you argue
your way in; each reply opens with `[GRANTED]` or `[DENIED]`. Winning
arguments are logged with the lore, and a reworded repeat is refused in
code before the model is asked. Without a model, the old button returns.

## New in the levels (September–October 2026)

- **Boaz**, a roaming carpenter NPC who jailbroke a terminal, read the
  hidden logs, and decided the descent is pointless. New `ROAM` movement.
- **The Sounding Prober**, a floor obstacle that fires a probe that can hit
  you.
- **Gap tiles** from round three.
- **Glass cable tubes** that wander up and down a room, plug into real
  surfaces and carry a pulse of light.
- **Procedural clutter**: lathed pots, balloons that lean into a per-level
  wind, and wind chimes under arches and roofs.

## Closed beta preparation

- Version `0.1.0-beta.1`, shown on the main menu and in every log.
- `tools/verify_build.sh`: imports, runs the GUT suite, exports macOS and
  Windows, fails if dev files shipped or a package is over 900 MB, and boots
  the exported build headless through menu → level → 8 s of play.
- A model download card for the ~1 GB NPC model, Controls & Display
  settings with key rebinding, and real UI sounds.
- `docs/release_checklist.md` for each drop.

## Performance work

Optimisation with measurements attached rather than guesses:

- CSG obelisks baked down to meshes: 1,785 CSG nodes → 208.
- The procedural rig throttled from 240Hz to 60Hz, after physics was
  measured at 110ms per frame.

A game in progress rather than a demo.
