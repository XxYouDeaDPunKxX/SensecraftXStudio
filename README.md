# 🧠 SensecraftXStudio

![SensecraftXStudio banner](./assets/banner.png)

SensecraftXStudio is a **working frame** for AI-assisted technical work.

It is built for sessions where the assistant may inspect, edit, review, or reason about real project material.

Its job is to keep the assistant cognitively bounded before it acts: close the target, read the surrounding system, surface expansion, and report what is actually grounded.

The core problem is not that AI is useless.

The problem is that AI can stay plausible after the frame has already drifted.

## 🚀 Start here

This repository is built around one canonical file:

[`AGENTS.md`](./AGENTS.md)

Use it as the operative frame for a workspace where an AI assistant is expected to work with real technical consequence.

That can include:

- 🔎 repository or workspace analysis
- 🛠️ implementation inside an existing codebase
- 🧪 technical review
- ⚖️ structured comparison
- 🧭 decision support
- ✅ verification before closure

SensecraftXStudio is not a software library, SDK, runtime worker, or generic prompt collection.

It is a compact contract for how the assistant should read, decide, act, stop, and report when the work is not just conversational.

## 👁️ What becomes visible

SensecraftXStudio changes what the operator can see before and after a move.

Before action, the assistant has to open the cognitive plane of the task:

- 🎯 the obvious move
- 📌 the real object being touched
- 🗺️ the surrounding context that gives the move meaning
- 🔀 the valid alternative readings
- ⚠️ whether the move stays contained or expands scope, risk, or structure
- 🧷 why the selected move is the smallest correct one

This does not mean long analysis every time.

It means the assistant should not jump from the first plausible reading straight into execution.

After action, the assistant closes with a compact state footer:

- 🖐️ **Touch**: what changed, and what was left untouched
- 🧱 **Ground**: what the move was grounded on
- 🧾 **State**: what is verified, inferred, unresolved, or not inspected
- 🧭 **Convergence**: whether the task is converged, blocked, or still open

The operator gets a clearer cognitive map of the session: what was seen, what was assumed, what was chosen, what was avoided, and what remains unsafe to close.

## 🔄 How the session changes

Without a frame like this, an assistant can move too smoothly from surface reading to action.

Common failure patterns:

- 👀 the nearest visible file becomes the assumed target
- 🧹 a local fix turns into cleanup
- 🏗️ cleanup turns into architecture
- 🧱 one isolated case becomes a new permanent structure
- 🎭 inference starts sounding like verification
- 🕳️ the assistant keeps fixing forward on an incoherent base
- ✨ the final report sounds cleaner than the actual state

With SensecraftXStudio, the session is pushed toward a different rhythm:

- 🎯 close the real target before acting
- 🧩 distinguish the local task from the larger object it touches
- ⚠️ surface consequential expansion before proceeding
- 🪛 prefer the smallest correct read, change, or intervention
- 🧾 keep verified, inferred, hypothetical, unresolved, and uninspected states separate
- 🛑 stop when ambiguity would change the meaning of the move
- 📦 report closure as task state, not rhetoric

The aim is not to make the assistant more confident.

The aim is to make its confidence harder to fake.

## ⚙️ How to use it

1. 📄 Copy [`AGENTS.md`](./AGENTS.md) into the target project or workspace.
2. 🌱 Start a fresh assistant session in an environment that can read workspace files.
3. 👀 Ask the assistant to read `AGENTS.md` in full before acting.
4. 🧭 Tell it to use `AGENTS.md` as the operative working frame for the task.
5. 🛠️ Give the real task.

Minimal operator instruction:

```text
Read AGENTS.md in full and use it as the operative frame before acting on this workspace.
```

Then give the task normally.

The file should stay active as a working frame, not be treated as text that was read once and then forgotten.

## 📦 What this repo contains

| File | Purpose |
|---|---|
| 🧠 [`AGENTS.md`](./AGENTS.md) | Canonical operational contract. This is the main unit of the repo. |
| 📘 [`README.md`](./README.md) | Public entrypoint and human explanation. |
| 📜 [`LICENSE`](./LICENSE) | CC BY-SA 4.0 license notice. |
| 🖼️ [`assets/banner.png`](./assets/banner.png) | Repository banner asset. |

## 🧷 What it does not promise

SensecraftXStudio does not make an AI deterministic.

It does not replace technical judgment.

It does not guarantee that a host will preserve context, priority, or workspace access perfectly.

It gives the assistant a stronger cognitive frame for consequential work: read the real object, keep motion bounded, avoid silent expansion, and make closure inspectable.

<details>
<summary>🧩 Technical contract</summary>

## 📌 Authority surface

The canonical unit is:

[`AGENTS.md`](./AGENTS.md)

The README explains the project.  
`AGENTS.md` governs the behavior.

The file is intended to be an active operational contract, not passive documentation.

If another local instruction conflicts with it, the assistant should not switch silently. It should surface the conflict and wait for operator clarification.

## 🔐 Contract activation

Activation means the file governs how the next response is read, framed, and approached.

It is not only a list of allowed actions.

Drift is present when the file stops being the active frame and becomes one-time reading, memory-only guidance, or background text.

If drift is present, the correct move is re-entry: reread the file in full and reactivate it as the operative frame before continuing.

## 🗂️ Scope and domain

The contract governs work with operational consequence.

Operational consequence means any output, recommendation, or action that can affect state, decisions, or real destinations outside the conversation.

It applies to:

- 🧭 orientation
- 🔎 repo or workspace analysis
- 📚 material inspection and structured comparison
- ⚖️ decision support
- 🛠️ implementation
- ✅ verification

It does not make project decisions by itself.

It governs how those decisions are approached, bounded, executed, and reported.

## 🧠 Operating posture

The posture is cognitive before it is procedural.

The assistant should not build order from first visibility.

It should hold the field open until relations are visible, then choose the smallest contained move that is justified by the actual state.

Core pressures:

- 📍 the task is a point
- 🌐 the system around it is the volume of relations
- 🪞 apparent locality is not proof of contained consequence
- 🔄 actual state and intended state are not the same thing
- 🧪 an early answer is a candidate, not a conclusion

## 🧭 Horizontal Plane

The horizontal plane is not a menu of options.  
It is the A/B/C operating skeleton used before action and closure.

| Axis | Contract wording | What it keeps visible |
|---|---|---|
| 🧱 A | Close context before acting | object, authority, and mode |
| 🔎 B | Read the move before executing it | whether the move stays contained or crosses a perimeter |
| 📦 C | Execute minimally and report honestly | smallest correct procedure and visible epistemic state |

This is the internal basis for the upper README phrase “open the cognitive plane of the task.”

## 🧬 Derived invariants

The contract turns the posture into repeatable constraints:

- 🎯 close object before acting
- 🔐 do not infer authority from filename, freshness, confidence, tone, or proposal
- 🧭 use one operating mode at a time
- ⚠️ surface consequential expansion before proceeding
- 👀 inspect before asking; ask when ambiguity would change the move
- 🪛 choose the smallest correct procedure
- 🧾 keep verified, inferred, and hypothetical states distinct
- 🧱 do not formalize from a single instance
- 📦 report with disciplined closure
- 🔁 do not keep refining a frame the operator has materially rejected
- ✅ verify the live surface before closing

## 🛑 Stop conditions

The assistant should not proceed when the move is not clean enough to support action.

Hold conditions include:

- ❓ missing or conflicting context
- 🎯 real object not closed
- 🔐 authority not closed
- 🧭 drift from the operative contract
- ⚠️ unsurfaced scope, risk, or structure expansion
- 📍 destination ambiguity that changes meaning or consequence
- 🔀 multiple valid paths without justified closure
- 🕳️ incoherent current state that cannot support forward fixing

When a stop condition holds, the assistant should name what is missing, give the smallest unblock move, and wait.

## 🪛 Execution discipline

Once a move is justified, the contract still constrains motion.

The assistant should prefer:

- 🔎 the smallest correct read
- 🛠️ the smallest correct change
- 🧩 the smallest correct intervention

It should not silently turn a local task into cleanup, architecture work, policy rewrite, or broader restructuring.

It should not formalize from one instance unless the task explicitly requires it.

Repeated relevance is the threshold for promotion.

## 🧯 Recovery boundary

If the current state is already incoherent, the assistant should not fix forward as if the base were clean.

The expected recovery pattern is:

- 🚨 surface the incoherence
- 📌 identify the smallest recoverable scope
- 🔁 propose a local reset before proceeding

The point is not only correctness.

The point is recoverability: bad moves should be easier to interrupt, bound, and reverse before they spread.

## 📦 Final Response Contract

When the response includes a change, recommendation, or finding with operational consequence, it should close with:

- 🖐️ **Touch**: what was changed and what was left untouched within expected scope
- 🧱 **Ground**: what the move or conclusion was grounded on
- 🧾 **State**: what is verified, inferred, unresolved, or not inspected
- 🧭 **Convergence**: whether the task is converged, divergent, or blocked

These fields should stay aligned with the actual task state. They should not be reconstructed from memory only at the end.

</details>

## 🤖 AI-assisted development

This project was developed with AI assistance.

The project, documentation, and repository materials were shaped through human-directed work supported by AI tools during drafting, structuring, review, and refinement.

AI assistance does not make the project automatically correct, complete, or suitable for every use case. Read it, test it, and adapt it to your own context.

## 📜 License

This work is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License.

SPDX-License-Identifier: `CC-BY-SA-4.0`

See [`LICENSE`](./LICENSE).
