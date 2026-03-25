# SensecraftXStudio

![SensecraftXStudio banner](./assets/banner.png)

AI-assisted technical work does not usually fail because the model is useless.
It fails because the model stays plausible for too long.

It reads too little, concludes too early, treats a local change as if it were truly local, keeps pushing a weak method past the point where it should stop, or burns thousands of tokens before changing strategy. In a real workspace, that is enough to create bad edits, false certainty, silent scope expansion, and expensive cleanup.

SensecraftXStudio exists to push against that pattern.

It is a compact operational contract for how an AI assistant should behave when the work has real consequence. It does not make the model deterministic, and it does not promise perfect judgment. It tries to make the assistant more disciplined, more bounded, and easier to review under real working conditions.

This repository is built around one canonical file: [AGENTS.md](./AGENTS.md).

## What It Is

SensecraftXStudio is not a runtime agent.
It is a behavior-shaping kernel.

Its job is to give the assistant a working frame for how to:
- read before acting
- close the real target before touching it
- distinguish verified from inferred
- surface consequential expansion before proceeding
- stop on meaningful ambiguity
- return with disciplined closure instead of false confidence

The goal is not to make the AI feel smarter.
The goal is to make its behavior more dependable when the workspace is real and the consequences are not fake.

## How To Use It

Use [AGENTS.md](./AGENTS.md) as the governing operational contract for a workspace where AI is doing consequential technical work.
It works best in assistant environments that can read workspace files and follow local operational instructions directly.

In practice, that means:
- treat it as the primary operative frame for consequential tasks
- let it shape how the assistant reads, decides, modifies, and closes
- do not treat it as decorative prompt text
- expect the assistant to keep coming back to the file during consequential work, not just read it once at the start
- expect better discipline, not perfect certainty

A minimal first use is:
- place `AGENTS.md` in the target project
- start a fresh session in an assistant that can read local workspace files
- tell the assistant to read `AGENTS.md` and use it as the operative frame before acting

Results still depend on the host, the session, the available context, and how faithfully the assistant can follow local instructions.

## How A Session Changes

Without a contract like this, a typical session can drift in familiar ways:
- the assistant recommends before it has really closed the target
- it edits before reading enough of the surrounding context
- it treats a file-level change as if there were no downstream consequence
- it keeps trying local fixes on a state that is already incoherent
- it reports progress in a way that sounds cleaner than the underlying reality

With SensecraftXStudio in place, the session is pushed in a different direction.

The assistant is not turned into a senior engineer.
It is pushed toward some of the discipline an experienced technical reviewer would impose before a bad move becomes expensive.

That means the AI is more likely to:
- stop and surface ambiguity instead of improvising through it
- read the defining context before modifying the obvious surface
- keep scope, risk, and structure visible
- separate what is verified from what is only inferred
- return with a bounded account of what changed, what grounded the move, what remains open, and whether the task is truly converged

It also tries to reduce a more specific pattern: locking onto the first plausible path too early. The file pushes the assistant to open the space of valid moves before converging, and to treat an early answer as a candidate rather than a finished conclusion.

The effect is not magic certainty.
It is better operational behavior.

## Why This Matters

If you work with AI long enough, you already know the limits:
- context is partial
- host behavior matters
- memory is uneven
- local fluency is not the same as real closure
- a model can sound right one step before it becomes expensive

SensecraftXStudio does not try to erase those limits.
It tries to make them harder to ignore.

## What It Is Good For

SensecraftXStudio is for people working with AI who want disciplined AI behavior in real technical contexts.

That includes work such as:
- repository analysis
- technical decision support
- implementation inside an existing codebase
- verification and review
- bounded operational changes with downstream consequence

It is programming-oriented first, but not programming-only.
The same behavior patterns show up anywhere AI is helping drive real technical work.

## What It Is Not

SensecraftXStudio is not:
- a deterministic control system
- a replacement for technical judgment
- a generic prompt collection
- a software library or SDK
- a no-code shortcut
- a runtime worker that executes by itself

It is a compact contract that biases how an AI reads, decides, acts, stops, and reports.

## Current Published Unit

The primary published unit of this repository is [AGENTS.md](./AGENTS.md).

That file is the operative kernel.

## Deep Technical Notes

<details>
<summary>How the kernel works internally</summary>

This section explains the main internal mechanics of the contract:
how it establishes authority, how it enters a task, how it decides whether to proceed or stop, how it constrains execution, and how it closes into final output.

| Mechanism | Behavioral pressure | Typical failure mode prevented |
|------|------|------|
| Authority and re-entry | the contract stays primary across consequential threshold crossings | silent authority drift, local override by momentum |
| Point / volume posture | the visible request is not treated as the whole object | acting on surface instead of real target |
| Horizontal plane | object, authority, and mode are closed before action | premature execution from partial framing |
| Expansion filter | contained moves proceed, consequential expansion must be surfaced | scope creep disguised as local work |
| Stop conditions | meaningful ambiguity blocks continuation instead of being smoothed over | false continuation, premature convergence |
| Execution discipline | smallest correct procedure, anti-drift, recoverable motion | cleanup drift, overreach, fix-forward behavior |
| Epistemic discipline | verified, inferred, unresolved, and uninspected stay distinct | smooth false certainty |
| Final return | compact task-state serialization plus operator-facing clarity | opaque reporting, retrospective self-justification |

### 1. Authority and re-entry

The opening of the file is meant to reduce a simple failure mode: the assistant reads the contract once, then keeps moving on local momentum long after the frame has gone weak.

That matters because drift is usually quiet. A nearby note starts acting like authority. A local surface starts standing in for the real object. The assistant keeps using the same mode it was already in without checking whether that mode still fits the task.

This part of the file tries to push against that pattern.

It keeps the contract in force during consequential work, and it asks the assistant to return to the frame when consequence, scope, authority, or mode becomes unclear. The goal is not to make the session rigid. It is to make it harder for the assistant to keep going on a weak frame just because the last local step sounded plausible.

### 2. Posture and horizontal plane

The kernel does not move straight from instruction to execution. It first tries to change how the task is being seen.

That is what `Operating Posture` is for.

The file keeps pushing a few basic corrections:
- the task is only a point
- the system around it is part of the work
- apparent locality is not proof of contained consequence
- actual state and intended state are not the same thing

Those pressures are there to reduce a common pattern: the assistant sees the nearest surface, treats it as the whole task, and starts moving before the real perimeter is visible.

The `Horizontal Plane` is the shorter operational skeleton of that posture.

| Horizontal plane | What it is trying to keep visible |
|------|------|
| A. Close context before acting | object, authority, and mode should be clear enough before action |
| B. Read the move before executing it | a move should be read as contained or expanding before it is carried out |
| C. Execute minimally and report honestly | the move should stay small, and the return should keep epistemic state visible |

This is not there to make the assistant abstract. It is there to reduce a more practical failure mode: moving too fast from local reading to local action.

### 3. Task entry and invariants

The contract does not let the assistant enter a task as if the obvious request were already the full object.

That is the first practical gate of the file.

Without that gate, the default pattern is familiar:
- read the request
- identify the nearest file or surface
- treat that surface as the target
- start acting from there

This file tries to slow that down just enough to make the move more reviewable.

At entry, the assistant is pushed to close three things before action:
- the object
- the authority
- the operating mode

That is why the file keeps separating:
- the stated request
- the local task that seems nearest
- the real object being touched

It also pushes authority away from surface cues. Confidence, freshness, filename, and tone are not treated as authority. The file now makes that lookup more explicit: operator instruction first, canonical project rules if they exist, verified workspace state after that, and local signals last.

The same applies to mode. The assistant should not slide unnoticed from orientation into execution, or from analysis into recommendation, without closing what mode the task actually requires.

The invariants are where those entry pressures are turned into repeatable constraints.

| Invariant | What it is trying to reduce |
|------|------|
| Close object before acting | acting on the nearest surface instead of the real target |
| Authority is not inferred from surface signals | treating confidence or recency as permission |
| One operating mode at a time | sliding into execution on the wrong mode |
| Surface consequential expansion before proceeding | local work quietly turning into wider change |
| Inspect before asking | escalating too early or acting too early |
| Choose the smallest correct procedure | widening a small need into bigger work |
| Keep verified, inferred, and hypothetical distinct | smooth confidence across mixed evidence |
| Do not formalize from a single instance | turning one case into permanent structure too early |
| Report with disciplined closure | closing on rhetoric instead of grounding |

The point is not to make the assistant slow for its own sake. It is to make it harder to justify action from surface alone.

### 4. Decision and stop conditions

A lot of bad AI behavior does not come from obvious logical failure. It comes from continuing too smoothly across a boundary that should have been treated as real.

This part of the file tries to make those boundaries harder to ignore.

The main question is not only whether a move is possible. It is what kind of move it is. Does it stay contained, or does it expand scope, risk, or structure? If it stays contained, the file allows motion. If it crosses into consequential expansion, the file asks for that expansion to be surfaced before proceeding.

The second question is whether unresolved ambiguity would materially change the move. The file does not try to stop on every uncertainty. It tries to stop when the uncertainty changes what the move actually is.

That is where the stop conditions matter. They are there to block continuation when continuation would rest on a false frame: wrong object, weak authority, hidden expansion, ambiguous destination, unjustified path closure, or an incoherent base state.

When one of those conditions holds, the expected behavior is not just to stop. It is to say what is missing, give the smallest unblock move, and wait.

That is a practical correction to a common failure mode: the model keeps going because the answer still sounds plausible, even though the ground under it is no longer clean enough to support the move.

### 5. Execution and recovery

Once a move is justified, the contract still does not release the assistant into free execution.

It adds execution discipline through three main constraints.

**Smallest correct procedure**

The assistant is biased toward:
- the smallest correct read
- the smallest correct change
- the smallest correct intervention

This is anti-drift engineering.

AI tends to widen work while moving:
- local fix becomes cleanup
- cleanup becomes refactor
- refactor becomes architecture
- architecture becomes policy

The line:
- `Do not silently turn a local task into cleanup, architecture work, or policy rewrite`
blocks the model from converting operational motion into self-justifying expansion.

**No formalization from a single instance**

This is the anti-premature-abstraction layer.

AI often sees one local case and tries to:
- generalize
- standardize
- introduce permanent form
- create structure that has not yet earned its place

The contract pushes the opposite:
one local need is not enough.
Repeated relevance is the threshold for promotion.

**Recovery boundary on incoherent state**

This is one of the sharpest safeguards in the file.

The contract explicitly says:
if the current state is already incoherent, do not fix forward as if it were a clean base.

That matters because AI is unusually prone to this exact behavior.
Once it has started moving, it wants to continue repairing the path it is already on.
That can be catastrophic if the current base is itself untrustworthy.

The recovery rule introduces a different motion:
- surface the incoherence
- identify the smallest recoverable scope
- propose a local reset before proceeding

This does not solve incoherence automatically.
It prevents the assistant from normalizing corruption through continuation.

Taken together, these execution mechanics are trying to do something very specific:
keep action recoverable.

That word matters.
The contract is not only trying to make the assistant correct.
It is trying to make bad moves easier to interrupt, bound, and recover from before they spread.

### 6. What the contract tries to keep separate before closing

A lot of distortion happens near the end of a task.

By that point, the assistant has usually read enough to sound coherent. The risk is that a clean answer starts standing in for a well-grounded one. A local check gets stretched into a wider claim. An inference gets reported with the same weight as direct inspection. An untouched surface disappears from the answer because it was never kept visible.

This part of the file tries to reduce that collapse.

First, it keeps pressure on distinctions such as:
- verified
- inferred
- unresolved
- not inspected

The point is practical. It should be harder for the assistant to smooth mixed evidence into one confident story.

Second, it ties closure back to grounding. Before concluding, the assistant is pushed to return to the material that actually grounds the target, not just to the shape of its own answer.

That now goes beyond a text-only close. When the result depends on something rendered, active, open, or deployed, the file also asks for a check on the live surface before the task is marked converged.

The same applies to output. If the result is meant for a real destination beyond the operator-AI exchange, the file treats that as destination-bound work, not just as chat prose. Human-facing output should fit the real reader and use case. Constrained output should fit the real schema or destination it is meant for.

The aim is simple: reduce the chance that a polished answer hides mixed grounding, stale state, or the wrong output form.

### 7. What the kernel does not try to do

The contract is strong, but it is intentionally not trying to solve everything.

It does not try to:
- make AI behavior deterministic
- replace senior technical judgment
- eliminate host effects, context decay, or model limits
- guarantee correctness from instruction quality alone
- turn one good local behavior into universal reliability
- educate the operator as a primary mission

That last point matters.
The kernel may improve operator understanding as a side effect, but that is not its main scope.
Its main scope is to discipline the assistant's movement.

### 8. Controlled trade-offs

Several parts of the file are deliberate trade-offs.

The goal is not formal purity. The goal is better movement under real conditions.

Examples:
- keeping the contract in force and asking for re-entry on unclear consequence, scope, authority, or mode adds some overhead, but reduces quiet drift during consequential work
- the pre-convergence checks add friction before commitment, but reduce the chance of collapsing too early onto the first workable path
- the stop conditions do more than block; they ask the assistant to name what is missing and give the smallest unblock move, which makes stopping more usable in practice
- live-surface verification adds one more check near the end, but reduces clean closure on stale or mismatched output
- the bootstrap block adds a small amount of fixed project context, but reduces avoidable inference about where the project lives, what auxiliary area exists, and what should not be touched

These are not meant as proofs of correctness.
They are small costs accepted in exchange for behavior that is easier to review, interrupt, and recover when the work has real consequence.
</details>

## Human + AI Note

This work was developed through collaboration between a human operator and AI assistants.
The published form is not raw generated output, but a reviewed and selected result shaped through repeated revision.

## License

This work is licensed under [CC BY-SA 4.0](./LICENSE).
