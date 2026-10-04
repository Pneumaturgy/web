# Quire

> Status: in development · personal project
> Repository: [Ghigog/Quire](https://github.com/Ghigog/Quire)
> · public · Kotlin · last commit 20 September 2026

Reads a book aloud on an e-ink Android reader, and gives every character in
it their own synthesised voice.

## The idea

Segment an EPUB into dialogue and narration, attribute each line to a
speaker, and give every speaker a voice of their own, highlighting the
active sentence as it plays. The analysis runs on the device with a small
local model, tuned for e-ink Android hardware.

## V1 is a speech engine, not a reader

Quire installs as an Android `TextToSpeechService`, and the Boox's own
reader (Onyx NeoReader) routes its Read Aloud through it. This was the
cheapest experiment that could invalidate the architecture, so it ran first
(ADR-0004, QUI-020) and passed on an Onyx Boox Note Air5 C. A standalone
reader is still on the roadmap, later.

## Voices are generated

ADR-0009: a character's voice is generated from a description of how they
should sound, not assigned from the engine's stock speakers. The analysis
records the description; a separate step realises it, so voices can
improve without re-running the analysis. Confirmed by ear on 6 September
2026.

Attribution runs in tiers: a heuristic first (`core/attribution`, scored
against `fixtures/attribution/*.tsv`), then a small language model with a
confidence fallback when the heuristic is unsure.

## What exists today

Eight modules in the root build: `core/model`, `core/index`,
`core/attribution`, `core/epub`, `core/voice`, `core/tts`,
`spike/indexer` and `spike/slice`.

Two Android apps under `app/`, outside the root build and built by CI:

| App | Does |
| --- | --- |
| `app:companion` | Imports a book, indexes it, casts its characters, resumes from a checkpoint if interrupted. Cloud voice settings. |
| `app:ttsservice` | The speech engine: whole-sentence synthesis with fragment serving, a rolling ring buffer, multi-voice utterances with `rangeStart` callbacks. |

Spikes: `spike/ttsbinding` (Android probe), `spike/pipeline` (desktop
harness, now with a chapter-to-audio `synthesize` command) and
`spike/hostbench` (Python TTS screening).

## The one thing that can leave the device

ADR-0010, 20 September 2026: optional bring-your-own-key cloud voices for
dialogue, with the local engine still doing narration. Dialogue is about a
quarter of a book's words and most of its emotional weight. Only the text
of the line being spoken and the chosen voice id are sent; no book, chapter,
reader or cast data.
