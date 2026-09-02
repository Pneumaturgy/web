# By Jove

> Status: in development · personal project
> Repository: [Ghigog/by_jove_godot](https://github.com/Ghigog/by_jove_godot)
> · private · Godot 4 · last commit 31 August 2026
>
> Paired with `Pneumaturgy/ByJoveDocs`.

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
- **Tests**: a 130-test GUT suite.
- **`_legacy/`** holds retired code rather than deleting it.

## Performance work

Recent commits are optimisation with measurements attached rather than
guesses:

- CSG obelisks baked down to meshes: 1,785 CSG nodes → 208.
- The procedural rig throttled from 240Hz to 60Hz, after physics was
  measured at 110ms per frame.

A game in progress rather than a demo. No release.
