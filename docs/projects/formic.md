# Formic

> Status: in development · personal project
> Repository: [Ghigog/Formic](https://github.com/Ghigog/Formic)
> · public · Next.js 16 + TypeScript + Prisma · started 21 September 2026
> · last commit 2 October 2026

An autonomous agent Kanban board: backlog idea to merged pull request, with
agents doing the middle.

## Five columns

Cards move across five columns, and specific transitions trigger sandboxed
work:

| Agent | Does |
| --- | --- |
| Product | Expands a raw request into a PRD. |
| Architect | Decomposes the PRD into tickets with isolated file scopes, validated as a dependency graph. |
| Coder | Implements a ticket in an ephemeral sandbox (E2B) and opens the pull request. |
| Reviewer | Drives CI through a bounded fix-or-merge loop. |
| PM | Writes the showcase once an epic is fully merged. |

Each column's agent is a template: provider, key, model and prompt.
Providers include Anthropic, OpenAI, Gemini, DeepSeek, OpenRouter, Groq and
ClinePass. Or a CLI on a plan you already pay for — Claude Code, Codex,
Gemini CLI — running in the repository's own GitHub Actions through a
`formic-agent.yml` workflow that Formic adds with one pull request.

Every epic is filed as a GitHub issue, its tickets as sub-issues, with
labels that follow the card.

## Two rules

- **File scope is the concurrency contract.** Tickets declare the
  directories they may touch; the graph is checked server-side for cycles
  and for overlap between tickets that could run together, and a diff
  outside its scope cannot commit.
- **Done means merged.** Only after the Reviewer approves and CI is green,
  one merge in flight at a time.

## The colony

Levels and points from merged story points, a heat multiplier for merges in
quick succession, ants that walk out to running work, sound, and a timeline
with a burndown. Levels unlock **Sentinels** — Tester, QA, DevOps, TechOps,
Architect, SecOps, Performance — which audit the repository and file a
backlog epic from their report, and **Queens**, which queue a target card's
prerequisites.

## In use

411 commits between 21 September and 2 October 2026. The Formic agent
workflow is in [Navi](navi.md)'s and [Orison](orison.md)'s repositories, and
in Formic's own.
