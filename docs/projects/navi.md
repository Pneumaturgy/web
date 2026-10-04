# Navi

> Status: in development · personal project
> Repository: [Ghigog/navi-agent](https://github.com/Ghigog/navi-agent)
> · public · Electron + TypeScript · last commit 29 September 2026

A desktop companion shaped like the fairy from Ocarina of Time. She follows
the cursor, answers questions about what is on screen, and has a persistent
emotional state and a relationship with you.

## Companion first, agent second

The owner's own description:

> Someone close at hand that I can talk to, make friends with, make notes
> and get reminders, ask her to point something out on the screen. […] She
> should be somewhat capricious, so I need to look after her, like a
> virtual pet.

Her moods really do affect her competence, on purpose (NAV-97). The one
line a mood may never cross is honesty: it may make her terse, reluctant or
unwilling, and never make her invent a fact or misreport the screen.

## The port

Navi started as a Godot 4 app. In September 2026 she was ported to
Electron + TypeScript with a stateless Swift helper (ADR 0001, decided
7 September after a spike measured 2.4–2.6% CPU and 356 MB idle). Once the
port reached parity, the Godot app was deleted (NAV-105, 10 September).

First launch is a guided setup: Ollama locally or an OpenAI key, and the
macOS permissions shown live. Voice is whisper.cpp in and Piper out, both
off until turned on. Local Ollama is the daily driver; the judgement loop
below is the declared cloud-first exception.

## Speaking unprompted

Built in September 2026:

- **Google Calendar** sync and a commitment cache (NAV-108, NAV-117).
- **Leave-by reminders** (NAV-114).
- **Activity signal** — what you are doing now (NAV-109).
- **Interruption gate** (NAV-110) and a **judgement turn** answering
  SILENT or SPEAK (NAV-111).
- A **speech bubble that never steals focus** (NAV-112).
- An **outcome log** of how each interruption went (NAV-115).
- First run, and a "what Navi sees" view (NAV-118).

## Computer use

Through the macOS accessibility tree, not pixel coordinates from
screenshots (NAV-90), via a native helper that needs its own Accessibility
grant. The safety gate shipped first (NAV-91): deny-by-default allowlist,
apps she may never touch, confirmation tiers, a per-turn write limit, a kill
switch and an append-only audit log.

## The Triforce emotion system

Rule-based, not learned. Every interaction is scored on **Courage**,
**Wisdom** and **Power**; those plus a Love Meter persist to `emotion.json`.
The three scores drive an RGB formula that tints the fairy, and a
first-person inner-state block is injected into every system prompt — so
her colour and her manner are the same state read two ways.

## Related

One of three local-model companions in different bodies, alongside
[Mollusk](mollusk.md) (living-room appliance) and [Orison](orison.md) (game
master). Navi's emotion system was reused in Orison. Her repository now
runs [Formic](formic.md)'s agent workflow.
