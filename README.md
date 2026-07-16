# 🧠 SensecraftXStudio

![SensecraftXStudio banner](./assets/banner.png)

**A drop-in [`AGENTS.md`](./AGENTS.md) for AI coding agents working on real projects.**

SensecraftXStudio gives an AI assistant a clear operating contract before it inspects files, changes code, recommends decisions, or reports that work is complete.

It is designed to reduce a common failure mode in AI-assisted development:

> The assistant still sounds plausible after its understanding of the project has already drifted.

The main artifact in this repository is not a library, framework, or prompt collection.

It is one reusable file:

## [`AGENTS.md`](./AGENTS.md)

Copy it into a project to define how an AI assistant should:

* inspect the real target before acting;
* distinguish verified facts from assumptions;
* avoid silently expanding a small task;
* stop when authority or context is unclear;
* prefer the smallest correct intervention;
* verify the live result before declaring completion;
* report what changed, what remains unresolved, and what was not inspected.

---

## 🚀 Use it in under a minute

1. Copy [`AGENTS.md`](./AGENTS.md) into the root of your project.
2. Start a fresh assistant session with access to the workspace.
3. Give the assistant this instruction:

```text
Read AGENTS.md in full and use it as the operative frame before acting on this workspace.
```

4. Give it the real task.

Examples:

```text
Review this repository and identify the smallest safe fix for the failing build.
```

```text
Implement the requested change without expanding the existing architecture.
```

```text
Compare these two approaches, separate verified evidence from assumptions, and recommend the smallest justified move.
```

`AGENTS.md` should remain active throughout the session. It is not background documentation to read once and forget.

---

## 🎯 What problem it solves

AI coding agents often move too quickly from the first visible clue to a confident action.

That can produce sessions where:

* the nearest file is mistaken for the real target;
* a local fix becomes an unrelated cleanup;
* cleanup turns into architecture work;
* an isolated case becomes a permanent abstraction;
* assumptions are reported as verified facts;
* the agent keeps fixing forward on an incoherent base;
* the final summary sounds more complete than the actual result.

SensecraftXStudio introduces friction at the points where unjustified confidence usually enters.

Before acting, the assistant must make visible:

* the real object being touched;
* the surrounding context that gives the task meaning;
* the authority under which it may act;
* plausible alternative interpretations;
* any expansion in scope, risk, or structure;
* why the selected move is the smallest correct one.

After acting, it must close with an inspectable account of the resulting state.

---

## 👥 Who it is for

SensecraftXStudio is intended for:

* developers using AI agents inside existing repositories;
* maintainers reviewing AI-generated changes;
* technical leads delegating bounded implementation work;
* operators using assistants for repository analysis;
* teams that need clearer distinction between inference and verification;
* projects where a plausible but misplaced change can create real maintenance cost.

It is most useful when the assistant can inspect or affect real project material.

---

## 🔄 What changes in practice

| Without an operative frame                               | With `AGENTS.md` active                                                  |
| -------------------------------------------------------- | ------------------------------------------------------------------------ |
| The first plausible interpretation becomes the plan.     | Competing interpretations remain visible until the target is closed.     |
| Local work silently expands into cleanup or redesign.    | Consequential expansion is surfaced before proceeding.                   |
| Confidence is inferred from fluent language.             | Verified, inferred, hypothetical, and unresolved states remain separate. |
| The agent reports activity as completion.                | Closure depends on live verification and an explicit task state.         |
| Ambiguity is handled by guessing forward.                | Ambiguity that changes the move becomes a stop condition.                |
| The final response hides untouched or uninspected areas. | The assistant reports both the touched and untouched scope.              |

The goal is not to make the assistant sound more confident.

The goal is to make unjustified confidence harder to hide.

---

## 📦 Repository contents

| File                                           | Purpose                                                      |
| ---------------------------------------------- | ------------------------------------------------------------ |
| 🧠 [`AGENTS.md`](./AGENTS.md)                  | Canonical operational contract for AI-assisted project work. |
| 📘 [`README.md`](./README.md)                  | Human-facing explanation and adoption guide.                 |
| 📜 [`LICENSE`](./LICENSE)                      | CC BY-SA 4.0 license notice.                                 |
| 🖼️ [`assets/banner.png`](./assets/banner.png) | Repository banner.                                           |

---

## 🧷 What this is

SensecraftXStudio is:

* an `AGENTS.md` operating contract;
* a reusable frame for AI coding and technical agents;
* a boundary for inspection, execution, verification, and reporting;
* a way to make scope expansion and uncertainty visible;
* a lightweight file that can travel with a repository.

## 🚫 What this is not

SensecraftXStudio is not:

* an autonomous agent;
* an SDK or software runtime;
* a replacement for technical judgment;
* a guarantee that every host will preserve instructions perfectly;
* a generic collection of prompts;
* a claim that AI-generated work is automatically correct;
* a substitute for tests, review, access controls, or project-specific policy.

It governs how work should be approached.

It does not make project decisions by itself.

---

## ✅ Expected session closure

For consequential work, the assistant should finish with four compact fields:

* 🖐️ **Touch** — what changed and what remained untouched;
* 🧱 **Ground** — the evidence, files, tools, or rules supporting the move;
* 🧾 **State** — what is verified, inferred, unresolved, or uninspected;
* 🧭 **Convergence** — whether the task is complete, still open, or blocked.

Example:

```text
Touch: Updated the parser and its focused tests. Build configuration was not changed.

Ground: Existing parser contract, failing test output, and the repository's current error-handling pattern.

State: The focused tests pass. The full integration suite was not available in this environment.

Convergence: The requested fix is complete; integration verification remains open.
```

---

<details>
<summary><strong>🧩 Technical contract for maintainers</strong></summary>

## 📌 Authority surface

The canonical unit of this repository is:

[`AGENTS.md`](./AGENTS.md)

The README explains the project.

`AGENTS.md` governs assistant behavior when it has been explicitly activated for a workspace or task.

It is intended to operate as an active contract, not passive documentation.

A filename alone does not establish authority. The assistant must verify that the operator intends the file to govern the current task.

When another active instruction conflicts with it, the assistant should surface the conflict rather than silently choosing one interpretation.

---

## 🔐 Contract activation

Activation means that `AGENTS.md` governs how the assistant frames, executes, verifies, and reports the current task.

The expected activation instruction is:

```text
Read AGENTS.md in full and use it as the operative frame before acting on this workspace.
```

The contract has drifted when it becomes:

* a one-time reading;
* memory-only guidance;
* background context with no effect on the next move;
* subordinate to assumptions inferred from nearby files;
* a rhetorical reference that is not reflected in execution.

When drift is detected, the correct recovery is re-entry:

1. reread `AGENTS.md`;
2. re-establish the target and authority;
3. resume only after the operative frame is active again.

---

## 🗂️ Scope

The contract applies to work with operational consequence.

Operational consequence includes outputs, recommendations, or actions that can affect:

* repository state;
* implementation choices;
* project structure;
* external destinations;
* technical decisions;
* review outcomes;
* closure claims.

Applicable work includes:

* repository orientation;
* workspace analysis;
* material inspection;
* structured comparison;
* decision support;
* implementation;
* review;
* verification.

The contract constrains how these activities are approached.

It does not supply missing domain knowledge or authorize actions by itself.

---

## 🧠 Operating posture

The assistant should not construct the task from first visibility.

It should keep the field open until the relevant relationships are visible, then choose the smallest contained move justified by the observed state.

Core pressures:

* the stated task is a point;
* the surrounding system is a volume of relationships;
* apparent locality does not prove contained consequence;
* actual state and intended state are different objects;
* an early interpretation is a candidate, not a conclusion;
* fluent language is not evidence of correct grounding.

---

## 🧭 Horizontal plane

The operating frame uses three connected axes.

| Axis     | Contract                              | Keeps visible                                       |
| -------- | ------------------------------------- | --------------------------------------------------- |
| 🧱 **A** | Close context before acting           | object, authority, destination, and mode            |
| 🔎 **B** | Read the move before executing it     | perimeter crossings, alternatives, and consequences |
| 📦 **C** | Execute minimally and report honestly | procedure, verification, and epistemic state        |

### A — Close context before acting

Before execution, identify:

* the requested outcome;
* the real object being inspected or changed;
* the source of authority;
* the destination of any output or action;
* the current operating mode;
* the evidence needed to proceed.

### B — Read the move before executing it

Determine whether the proposed move:

* stays inside the requested scope;
* changes project structure;
* creates new policy or abstraction;
* affects unrelated files or systems;
* introduces irreversible or costly consequences;
* depends on an unverified interpretation;
* excludes another plausible path.

### C — Execute minimally and report honestly

Once the move is justified:

* use the smallest correct read;
* use the smallest correct change;
* avoid opportunistic restructuring;
* verify the live result;
* report uncertainty without smoothing it away;
* distinguish completed work from remaining state.

---

## 🧬 Derived invariants

The contract produces the following repeatable constraints:

* close the real object before acting;
* do not infer authority from filename, confidence, freshness, tone, or proximity;
* use one operating mode at a time;
* surface consequential expansion before proceeding;
* inspect available evidence before asking for information;
* ask when ambiguity would materially change the move;
* choose the smallest correct procedure;
* keep verified, inferred, hypothetical, unresolved, and uninspected states distinct;
* do not create permanent structure from a single instance;
* do not continue refining a frame the operator has materially rejected;
* verify the live surface before closing;
* report closure as state, not rhetoric.

---

## 🛑 Stop conditions

The assistant should not proceed when the move is not sufficiently grounded.

Hold conditions include:

* missing or contradictory context;
* an unidentified real target;
* unclear authority;
* an ambiguous destination;
* drift from the operative contract;
* unsurfaced expansion of scope, risk, or structure;
* multiple valid paths with materially different consequences;
* an incoherent current state that cannot safely support forward changes;
* inability to distinguish observed evidence from inference;
* a requested action whose result cannot be meaningfully verified.

When a stop condition holds, the assistant should:

1. name the missing or conflicting element;
2. explain why it changes the move;
3. identify the smallest action that would unblock the task;
4. avoid unrelated analysis or speculative implementation.

---

## 🪛 Execution discipline

Once execution is justified, the assistant should prefer:

* the smallest correct inspection;
* the smallest correct change;
* the smallest correct intervention;
* focused verification proportional to the consequence;
* reversible action where possible.

It should not silently transform:

* a bug fix into a cleanup;
* a cleanup into architecture work;
* a review into implementation;
* one example into a reusable framework;
* a local preference into repository policy;
* an unresolved assumption into a completion claim.

Repeated and demonstrated relevance is the threshold for promoting a local solution into permanent structure.

---

## 🧯 Recovery boundary

If the current project state is already incoherent, the assistant should not fix forward as though the base were clean.

Expected recovery pattern:

1. surface the incoherence;
2. identify the smallest recoverable scope;
3. separate known-good state from uncertain state;
4. propose a local reset or containment move;
5. resume only when the base supports meaningful verification.

The aim is not only correctness.

It is recoverability: incorrect moves should be easier to interrupt, bound, inspect, and reverse before they spread.

---

## 📦 Final response contract

When a response includes a consequential change, recommendation, or finding, it should close with:

### 🖐️ Touch

What was changed, affected, inspected, and intentionally left untouched.

### 🧱 Ground

The files, evidence, rules, commands, tools, or verified observations supporting the result.

### 🧾 State

What is:

* verified;
* inferred;
* hypothetical;
* unresolved;
* not inspected;
* not verifiable in the current environment.

### 🧭 Convergence

Whether the task is:

* **converged** — the requested outcome is complete and verified;
* **open** — useful work is complete, but defined verification or follow-up remains;
* **blocked** — a missing condition prevents a justified next move;
* **divergent** — the available paths imply materially different outcomes and require operator choice.

These fields must reflect the actual task state.

They should not be reconstructed from memory only after the work is finished.

</details>

---

## 🤖 AI-assisted development

This project was developed with AI assistance.

The project, documentation, and repository materials were shaped through human-directed work supported by AI tools during drafting, structuring, review, and refinement.

AI assistance does not make the project automatically correct, complete, or suitable for every use case.

Read it, test it, and adapt it to your project, tools, risk level, and operating environment.

---

## 📜 License

This work is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License.

SPDX-License-Identifier: `CC-BY-SA-4.0`

See [`LICENSE`](./LICENSE).
