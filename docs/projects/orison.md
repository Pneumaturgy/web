# Orison

> Status: paused · personal project
> Repository: [Ghigog/orison](https://github.com/Ghigog/orison)
> · private · Godot 4 + Ollama · last commit 17 June 2026

An engine that reads a Markdown vault of notes and turns it into a playable
text adventure or visual novel.

## Vault in, game out

A `VaultScanner` walks an Obsidian-style vault of environments, characters
and stories; a 24KB `VaultCompiler` turns it into typed game data and builds
a knowledge graph.

The session then runs against two local models with separate jobs:

- a **world builder** that narrates and returns structured JSON;
- a **character agent** that writes dialogue and tracks affinity.

A JSON repair pass catches malformed model output rather than crashing on
it. Around that: a tri-dimensional emotion system, a campaign graph view,
and a large onboarding flow (46KB).

## Paused

Two commits — "init" and "mvp" — but roughly a dozen core modules and seven
UI controllers behind them. It went in fast and then stopped. Nothing since
17 June 2026, the longest gap of any project here.

> The README claims PC, Mac and Mobile. The mobile build is intent; there is
> no evidence of one.

## Related

One of three local-model companions in different bodies, alongside
[Navi](navi.md) (desktop) and [Mollusk](mollusk.md) (living-room appliance).
Navi's emotion system was reused here.
