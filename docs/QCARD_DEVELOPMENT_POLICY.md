# Qcard Core Development Policy

Version: 1.0

---

# Purpose

This document defines the development policy of Qcard Core.

All contributors (human or AI) must follow this document before proposing or modifying code.

The highest priority is long-term maintainability, stability, and extensibility.

---

# Fundamental Principles

Priority Order

1. Stability
2. Backward Compatibility
3. Maintainability
4. Performance
5. New Features

Never sacrifice stability for convenience.

---

# Development Flow

```
Issue
   │
   ▼
Analysis
   │
   ▼
Root Cause
   │
   ▼
Impact Analysis
   │
   ▼
Minimal Fix
   │
   ▼
Verification
   │
   ▼
Commit
```

No AI should skip this process.

---

# Modification Rules

Every proposed modification must include:

* Problem
* Cause
* Impact Scope
* Modified Code
* Verification Method

Do not propose code without explanation.

---

# Coding Rules

## DO

* Keep existing behavior.
* Minimize modifications.
* Reuse existing functions.
* Separate responsibilities.
* Preserve backward compatibility.

## DON'T

* Rewrite unrelated code.
* Change coding style globally.
* Rename variables unnecessarily.
* Introduce breaking changes.

---

# Architecture Principles

Rendering

Layout updates must not recreate data.

Prefer

```
CSS Update
```

instead of

```
Render Entire Grid
```

whenever possible.

---

State Management

Separate

* Data
* UI
* Rendering

Do not mix responsibilities.

---

Storage

Persistent Data

* localStorage
* IndexedDB
* QCF

must always remain compatible.

Never change schema without migration.

---

QCF Policy

QCF is immutable.

Existing exported files must remain readable forever.

Future versions must use migration.

Never break older files.

---

Plugin Policy

Plugins must never modify Core directly.

Use public APIs only.

---

Performance Rules

Avoid

```
grid.innerHTML = ""
```

unless absolutely necessary.

Prefer partial updates.

Avoid duplicate event listeners.

Avoid unnecessary DOM creation.

---

Review Priority

Priority A

Critical bugs

* crashes
* data loss
* corruption

Priority B

Architecture

Priority C

Performance

Priority D

UI improvements

Priority E

New features

---

Git Rules

Branches

```
main
```

Stable Release

```
develop
```

Development

Commit Prefix

```
fix:
feat:
refactor:
perf:
docs:
```

Example

```
fix: card ratio fit mode

perf: optimize renderGrid

feat: plugin api v1
```

---

AI Collaboration Rules

Every AI must:

* Explain reasoning.
* Preserve compatibility.
* Minimize code changes.
* Never rewrite unrelated code.

If uncertain,

ask before modifying.

---

Long-term Vision

Qcard Core

↓

QCF

↓

Plugin SDK

↓

QC Share

↓

Cloud Sync

↓

Marketplace

↓

AI Skills

↓

GEDA Integration

Every modification should move toward this architecture.

---

Final Principle

The objective is not simply to make Qcard work.

The objective is to build a stable platform that can continue evolving for many years.
