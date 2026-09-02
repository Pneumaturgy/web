# Navi

> Status: in development · personal project
> Repository: [Ghigog/navi-agent](https://github.com/Ghigog/navi-agent)
> · private · Godot 4 · last commit 7 July 2026

A desktop assistant shaped like the fairy from Ocarina of Time. She follows
the cursor and answers prompts about what is on screen.

## Interaction

A borderless transparent window tracks the OS mouse position with an offset,
so clicks still reach other applications.

- A **global hotkey** freezes her and opens a prompt box.
- **Holding** it is push-to-talk through whisper.cpp, with Piper for speech
  out.
- **Dragging her and letting go** takes a fresh desktop screenshot for
  visual context.
- The reply streams into a speech bubble pointing at her.

Models: Ollama or Gemini.

## The Triforce emotion system

Rule-based, not learned. Every interaction is scored on **Courage**,
**Wisdom** and **Power**; those plus a Love Meter persist to
`user://emotion_state.json`. The three scores drive an RGB formula that
tints the fairy, and a first-person inner-state block is injected into every
system prompt — so her colour and her manner are the same state read two
ways.

Sixteen GUT test files.

## Housekeeping

> The repo root carries committed debug artefacts: a 113KB `test_run.log`,
> a 179KB `done.md`, and eight `reconstructed_aiservice_step*.txt` files.
> The README also links its own docs by absolute
> `file:///Users/dylangrowcoot/` paths, which are dead for anyone else.
> Nothing secret, just untidy — and it is private anyway.

## Related

One of three local-model companions in different bodies, alongside
[Mollusk](mollusk.md) (living-room appliance) and [Orison](orison.md) (game
master). Navi's emotion system was reused in Orison.
