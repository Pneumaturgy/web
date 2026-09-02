# Lytra

> Status: shipped · v1.2.0 · personal project
> Repository: [Ghigog/lytra](https://github.com/Ghigog/lytra)
> · public · Godot 4 · last commit 25 July 2026

A transparent, always-on-top desktop overlay showing time-synced lyrics for
whatever is currently playing, whichever app is playing it.

## How it knows what is playing

A background thread polls the OS for the active track once a second.
GDScript cannot reach those APIs, so it shells out — `get_media.ps1` against
Windows media transport controls, `get_media.swift` on macOS — and calls
back onto the main thread with title, artist, album, position and duration.

Lyrics come from LRCLIB in LRC format and are parsed into a timeline. A
small mock database is bundled so the overlay can be worked on without a
network.

## The window

Borderless, transparent, always on top, with per-pixel transparency, styled
with glass and water-ripple shaders. About 1,000 lines across the overlay
controller and three autoloads.

## Releases

Two: v1.0.0 and v1.2.0 (24 July 2026).

> One commit reads "cant do click through", so the click-through mode the
> README advertises may not be working.
