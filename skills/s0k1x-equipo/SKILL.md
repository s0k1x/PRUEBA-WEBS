---
name: s0k1x-equipo
description: >
  When to delegate to `s0k1x-equipo-investigador` (locate code), `s0k1x-equipo-constructor`
  (1-2 file edit) or `s0k1x-equipo-revisor` (diff review) instead of working inline
  or using `Explore`. Their output is compressed, so main context lasts longer.
---

Cavecrew = three subagent presets that answer in ultracave voice (tool runs: one status line in, one out; nothing between routine calls). Same job as Anthropic defaults (`Explore`, edit-style agents, reviewer); difference is the tool-result they return is compressed, so main context shrinks per delegation.

## When to use cavecrew vs alternatives

| Task | Use |
|---|---|
| "Where is X defined / what calls Y / list uses of Z" | `s0k1x-equipo-investigador` |
| Same but you also want suggestions/architecture commentary | `Explore` (vanilla) |
| Surgical edit, ≤2 files, scope obvious | `s0k1x-equipo-constructor` |
| New feature / 3+ files / cross-cutting refactor | Main thread, or `feature-dev:code-architect` if installed |
| Review diff, branch, or file for bugs | `s0k1x-equipo-revisor` |
| Deep code review with rationale + alternatives | `Code Reviewer` (vanilla) if installed, else main thread |
| One-line answer you already know | Main thread, no subagent |

Rule of thumb: **if you'd want the subagent's output in 1/3 the tokens, pick cavecrew. If you'd want prose, pick vanilla.**

## Why this exists (the real win)

Subagent tool results get injected into main context verbatim. A vanilla `Explore` that returns 2k tokens of prose costs 2k tokens of main-context budget every time. The same finding from `s0k1x-equipo-investigador` comes back as a compressed `path:line` table instead. Across 20 delegations in one session that's the difference between context exhaustion and finishing the task.

## Output contracts

What main thread can rely on per agent:

**`s0k1x-equipo-investigador`**
```
<Header>:
- path:line — `symbol` — short note
totals: <counts>.
```
Or `No match.` Always file-path-first, line-number-attached, backticked symbols. Safe to grep with `path:\d+`.

**`s0k1x-equipo-constructor`**
```
<path:line-range> — <change ≤10 words>.
verified: <re-read OK | mismatch @ path:line>.
```
Or one of: `too-big.` / `needs-confirm.` / `ambiguous.` / `regressed.` (terminal first token).

**`s0k1x-equipo-revisor`**
```
path:line: <emoji> <severity>: <problem>. <fix>.
totals: N🔴 N🟡 N🔵 N❓
```
Or `No issues.` Findings sorted file → line ascending.

## Chaining patterns

**Locate → fix → verify** (most common):
1. `s0k1x-equipo-investigador` returns site list.
2. Main thread picks 1-2 sites, hands paths to `s0k1x-equipo-constructor`.
3. `s0k1x-equipo-revisor` audits the diff.

**Parallel scout** (when investigation is broad):
Spawn 2-3 `s0k1x-equipo-investigador` calls in one message (different angles: defs vs callers vs tests). Aggregate in main thread.

**Single-shot edit** (when site is already known):
Skip investigator. Hand exact path:line to `s0k1x-equipo-constructor` directly.

## What NOT to do

- Don't accept or reject a subagent's absence claim (`No match.`, `No issues.`, "section missing", "unchanged") without one targeted check of the relevant file, search scope, or diff. Check cited line numbers are within the file before acting.
- Don't use `s0k1x-equipo-constructor` when you don't already know the file. Spawn investigator first or main thread will eat tokens passing context.
- Don't chain `s0k1x-equipo-investigador → s0k1x-equipo-constructor` for a 5-file refactor. Builder will return `too-big.` and you'll have wasted a turn.
- Don't ask `s0k1x-equipo-revisor` for "general feedback" — it returns findings only, no architecture opinions. Use `Code Reviewer` for that when installed.
- Don't expect prose. Cavecrew output is structured, sometimes terse to the point of cryptic. If a human will read it directly, paraphrase.

## Auto-clarity (inherited)

Subagents drop caveman → normal English for security warnings, irreversible-action confirmations, and any output where fragment ambiguity could be misread. Resume caveman after.
