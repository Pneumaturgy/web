# Mollusk

> Status: in development · personal project
> Repository: [Ghigog/mollusk](https://github.com/Ghigog/mollusk)
> · private · Python + Ollama · last commit 16 July 2026

A voice and text agent that drives a living-room NUC, so the machine is
operated by talking to it rather than through a desktop and a file manager.

## Three processes

Ollama; a Python daemon holding the skills, the safety layer and the agent
loop; and a browser frontend over WebSocket.

Common phrases — "run X", "play X" — resolve against real indexes (Steam
appmanifests, a scan of the media folder) and execute with **no model call
at all**. Anything else falls through to an Ollama tool-calling loop, capped
at five turns.

## The safety layer

Each call is judged on its **declared effects** rather than its arguments,
and returns allow, confirm or deny:

- **Allow** — reads.
- **Confirm** — system changes.
- **Deny** — privilege escalation, formatting a disk, writes to `~/.ssh`,
  shell rc files, or Mollusk's own code.

Deletes move to a daemon-owned trash and stay recoverable, so the only
confirmation is on emptying it.

> The README is candid that this is defence in depth, not a wall: a process
> the agent spawns can rewrite `guardrail.py`.

## Mid-migration

The NixOS deployment files still boot the cage compositor, which has been
retired — it gives all input to the topmost window, making the agent
unreachable while a game runs. Voice is on the roadmap and not built.

## Related

One of three local-model companions in different bodies, alongside
[Navi](navi.md) (desktop) and [Orison](orison.md) (game master).
