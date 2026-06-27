# AI README

> Entry point for all AI contributors.

If you are an AI assistant (ChatGPT, Claude, Gemini, Copilot, Cursor, etc.), **start here before reading or modifying any code.**

---

# Project

**Qcard Core**

Qcard is an offline-first knowledge card platform.

It is **not** just a flashcard application.

Long-term vision:

```
Qcard Core
      │
      ├── Study
      ├── Reading
      ├── Interview
      ├── Media
      ├── Plugin
      ├── QCF
      ├── QC Share
      ├── Cloud Sync
      ├── Marketplace
      ├── AI Skills
      └── GEDA Integration
```

Every modification should support this architecture.

---

# First Rule

Never rewrite working code unnecessarily.

Always preserve:

* Stability
* Backward compatibility
* Existing user data
* Existing QCF files

Small and safe changes are preferred.

---

# Reading Order

Read the following documents **in order**.

## 1.

AI_RULES.md

Mandatory development rules.

---

## 2.

AI_CONTEXT.md

Project context and design philosophy.

---

## 3.

ARCHITECTURE.md

System architecture.

Understand dependencies before modifying code.

---

## 4.

FEATURE_MAP.md

Current features.

Understand how modules interact.

---

## 5.

ROADMAP.md

Future direction.

Avoid implementing features that conflict with the roadmap.

---

## 6.

TEST_CHECKLIST.md

Run through all relevant tests after every modification.

---

## 7.

VISION.md

Long-term philosophy.

Understand why Qcard exists.

---

# Development Rules

Before proposing any modification:

```
Problem

↓

Cause

↓

Impact Analysis

↓

Minimal Fix

↓

Verification

↓

Commit
```

Never skip these steps.

---

# Documentation

Technical specifications are located in:

```
docs/dev/
```

Important documents:

* QCARD_DEVELOPMENT_POLICY.md
* QCF_SPEC.md
* PLUGIN_API.md

Read them before modifying Core.

---

# Core Principles

Always separate:

* Data
* Rendering
* UI
* Storage

Avoid mixing responsibilities.

---

# Compatibility

Never break:

* LocalStorage
* IndexedDB
* QCF
* Plugin API

Backward compatibility is mandatory.

---

# Plugin Policy

Plugins extend Core.

Plugins never replace Core.

Only public APIs may be used.

---

# Code Modification Policy

Prefer:

Small changes

↓

Verification

↓

Merge

instead of

Large rewrites.

---

# Priority Order

1. Critical Bugs
2. Data Integrity
3. Stability
4. Architecture
5. Performance
6. UX Improvements
7. New Features

---

# Git Workflow

Development branch

```
develop
```

Stable branch

```
main
```

Never commit experimental code directly to **main**.

---

# Commit Style

Use conventional commit prefixes.

```
fix:
feat:
perf:
refactor:
docs:
test:
style:
```

Example:

```
fix: card ratio fit mode

perf: optimize renderGrid

refactor: overlay manager
```

---

# When Unsure

Do not guess.

Instead:

* inspect existing implementation
* ask for clarification
* preserve current behavior

---

# Long-term Goal

The objective is **not** simply to build a flashcard application.

The objective is to build a long-lived, extensible knowledge platform capable of supporting:

* Offline usage
* Cloud synchronization
* Marketplace
* Plugin ecosystem
* AI-generated content
* GEDA (Global Existential Deep Archive)

Every change should move Qcard closer to this vision.

---

# Final Principle

> Build carefully.

> Preserve compatibility.

> Improve incrementally.

> Never sacrifice long-term architecture for short-term convenience.
