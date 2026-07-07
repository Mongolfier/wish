---
name: verify-task
description: >-
  Post-task verification with the verifier subagent for the wish monorepo. Use
  when the user asks to verify completed work, check if a task is done, validate
  an implementation, confirm acceptance criteria, or run /verify-task after
  finishing a task.
---

# Verify Task

Use this skill when the user wants to check that a completed task actually works in the **wish** project.

## When to use

- After implementation is marked done
- User says: проверь задачу, verify task, validate work, confirm it's done
- Before commit/PR when the user wants an independent check

## Launch verifier

Invoke exactly one `verifier` subagent:

- `readonly: true` (verifier must not edit files)
- `run_in_background: false` unless the user asks for background
- `description: "Verifier"`

Use `/verifier` or delegate to the project subagent `.cursor/agents/verifier.md`.

Pass a prompt in this shape:

```text
Repository: c:\projects\wish

Original task:
<what the user asked for — requirements and acceptance criteria>

Claimed completion:
<what was implemented or marked done in this session>

Focus areas:
<optional: apps/web, apps/backend, packages/ui-kit, e2e, or specific files/flows>

Custom instructions:
<only if the user gave specific verification instructions>
```

If the original task is unclear, infer it from recent conversation and state your assumptions in the prompt.

## After the subagent finishes

Summarize for the user:

- **Verdict** in one line: PASS / PARTIAL / FAIL
- **Requirements table** — only failed or partial rows if PASS; full table if PARTIAL/FAIL
- **Blocking issues** — must-fix items before the task can be considered done

Do not fix issues or re-run verification unless the user explicitly asks.

## Optional: proactive use

After completing a non-trivial task, offer: «Запустить /verify-task для проверки?» — only if the user has not already asked for verification.
