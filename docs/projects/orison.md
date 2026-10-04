# Orison

> Status: in development · personal project
> Repository: [Ghigog/orison](https://github.com/Ghigog/orison)
> · public · Rust + Tauri 2 (Godot 4 reference build) + Ollama · last
> commit 26 September 2026

An engine that reads a Markdown vault of notes and turns it into a playable
text adventure or visual novel.

## Vault in, game out

The vault — environments, characters, stories, Obsidian-style — is compiled
into typed game data and a knowledge graph. A session runs against two
local models with separate jobs:

- a **world builder** that narrates and returns structured JSON;
- a **character agent** that writes dialogue and tracks affinity.

A JSON repair pass catches malformed model output rather than crashing on
it. Around that: a tri-dimensional emotion system and a campaign graph.

## The migration

Orison sat untouched from 17 June to 6 September 2026. It came back with
`docs/migration_plan.md`: the Godot 4 build (~19,600 lines) is frozen as the
reference implementation, and the engine moved to a Rust core
(`crates/orison-core`), a headless CLI (`crates/orison-cli`) that plays a
campaign in a terminal, and a Tauri 2 desktop app (`apps/desktop`).

The desktop app, as of late September:

- Play screen with slash commands, Esc-to-cancel, campaign import and delete.
- Map screen drawing the knowledge graph with Cytoscape.
- Character screen with live rapport and emotion.
- Markdown in the transcript, virtualised with CSS containment.
- Lamp / E-ink theme toggle, persisted.
- Accessibility pass: contrast, focus, keyboard navigation.
- Adventure-starter generation ported to the Rust core.

Phase 6 was closed out with what is and is not done written down.

## Next: the first five minutes

Phase 7 is packaging and first run. Today the README's own instructions are
install Ollama from another site, open a terminal, pull two models — "a
developer tool wearing an application's clothes". Phase 7 exists to remove
that.

## Related

One of three local-model companions in different bodies, alongside
[Navi](navi.md) (desktop) and [Mollusk](mollusk.md) (living-room appliance).
Navi's emotion system was reused here. The repository runs
[Formic](formic.md)'s agent workflow.
