# Vapor Music

> Status: in development · personal project
> Repository: [Ghigog/vapor-music](https://github.com/Ghigog/vapor-music)
> · public · Rust + Tauri 2 + React 19 · last commit 31 August 2026
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

## Not released

The README is blunt about why: requiring a WebDAV URL is a real barrier.
Native Proton Drive, Mega, Google Drive and Dropbox backends are wanted and
unbuilt. Sixteen issues open.
