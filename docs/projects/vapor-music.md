# Vapor Music

> Status: open beta · personal project
> Download: [GitHub releases](https://github.com/Ghigog/vapor-music/releases/latest)
> Repository: [Ghigog/vapor-music](https://github.com/Ghigog/vapor-music)
> · public · Rust + Tauri 2 + React 19 · v2.1.0 · last commit 19 September 2026
> · **proprietary, all rights reserved** — not open source

A local-first music player that analyses your own library on your own
machine, and moves between tracks by tempo and key instead of shuffling.

## Three crates that touch nothing

| Crate | Does |
| --- | --- |
| `vapor-dsp` | Decodes audio; derives tempo, key, energy, loudness and cue points. |
| `vapor-engine` | Two decks, an EQ chain, six transitions, time-stretching capped at ±6% — past which it refuses the mix rather than produce an artefact. |
| `vapor-library` | Playlists, the queue, and a Camelot-wheel pathfinder routing between harmonically compatible tracks. |

None of the three opens a socket or a file. The Tauri shell owns the audio
device (cpal), WebDAV sync, the keychain and the filesystem, which is what
keeps the analysis testable.

## It was a Godot app until August 2026

The original build, and its C++ GDExtension wrapping Essentia and Rubber
Band, was deleted on 21 August 2026 and preserved on the tag
`godot-final-v1.78` — eighty release notes' worth of history in
`docs/CHANGELOG-godot.md`. The rewrite also moved the licence off AGPL.

## September 2026

- **Vibe DJ** steers along its energy curve and decides one track at a time,
  conducting whichever list you pressed play on.
- **One library view**, ranked by what gets played.
- **Artist pages** show albums and their tracks; genre is on screen, and
  artist, album and genre all navigate from Liner Notes.

## Open beta

`v2.0.0` tagged 3 September 2026, `v2.1.0` on 19 September; now in open
beta, downloadable from the repository's releases page. One tag builds
macOS, Windows, Linux and Android (APK) through `release.yml`. The barrier
the README names still stands: sync requires a WebDAV URL. Native Proton Drive,
Mega, Google Drive and Dropbox backends are wanted and unbuilt.
