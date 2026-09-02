# Quire

> Status: in development · personal project
> Repository: [Ghigog/Quire](https://github.com/Ghigog/Quire)
> · public · Kotlin · last commit 31 August 2026

An offline e-reader that reads a book aloud and gives every character in it
their own synthesised voice.

## The idea

Segment an EPUB into dialogue and narration, attribute each line to a
speaker, and hand every speaker their own ONNX voice, highlighting the
active sentence as it plays. All of it on the device, with a small local
model, tuned for e-ink Android hardware.

## What exists today

- Five Gradle modules of Kotlin, with unit tests: `core/model`,
  `core/index`, `core/attribution`, `core/epub`, and `spike/indexer`.
- A SQLite-backed book index.
- A heuristic speaker attributor, scored against TSV fixtures — so
  attribution quality is a number rather than an impression.
- A Python benchmark harness under `spike/hostbench`.

## What does not

There is no Android application module in `settings.gradle.kts`, so nothing
runs on a device yet. The libraries and the spikes are real; the app is not.

> The README's Status section says there is no application code at all.
> That is now the wrong way round and will mislead anyone who reads it —
> five Kotlin modules with tests exist. Worth correcting in the repo.
