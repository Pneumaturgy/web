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

Six Gradle modules in the root build, with fifteen test classes across five
of them (`core/epub` is source-only so far). `./gradlew test` passes.

| Module | |
| --- | --- |
| `core/model` | |
| `core/index` | SQLite-backed book index |
| `core/attribution` | Heuristic speaker attributor, scored against `fixtures/attribution/*.tsv` by `FixtureScoreTest` — so quality is a number, not an impression |
| `core/epub` | `EpubText.kt`; no tests yet |
| `spike/indexer` | |
| `spike/slice` | |

Two further modules sit **outside** the root build, each with its own
`settings.gradle.kts`:

- `spike/ttsbinding` — a real Android application module
  (`com.android.application`, with a manifest).
- `spike/pipeline` — a desktop harness.

A Python benchmark harness lives in `spike/hostbench`.

## What does not

The reading app itself: the thing you would open to read a book. Code does
run, on a phone included — the libraries, the spikes and the measurements
are simply ahead of the application.

> An earlier version of this page said there was no Android module and that
> nothing ran on a device. Both were wrong; `spike/ttsbinding` was missed
> because it is outside the root build.
