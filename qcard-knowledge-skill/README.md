# Qcard Knowledge Skill

**Qcard Knowledge Skill** is a knowledge-structuring skill that transforms information generated, collected, or researched by AI into the **Qcard format: Scenario + Cards**.

It is designed to work across multiple LLMs, including **Claude, ChatGPT, Gemini, and other AI systems**.

The goal is not simply to summarize information.

The goal is to transform information into a reusable **knowledge structure**.

---

## Concept

Traditional AI output is usually structured as a continuous document:

```text
Information
    ↓
Long-form text
    ↓
Human reads and interprets
```

Qcard Knowledge Skill introduces another layer:

```text
Information
    ↓
Knowledge extraction
    ↓
Knowledge units
    ↓
Scenario + Cards
    ↓
Qcard Markdown
```

This makes knowledge easier to:

* understand
* review
* reorganize
* memorize
* exchange
* reuse
* expand with another AI

---

# What is Qcard?

Qcard organizes knowledge using two fundamental structures.

```text
Scenario
│
├── Card
├── Card
├── Card
├── Card
└── ...
```

### Scenario

A **Scenario** represents the overall context or theme of a group of knowledge.

Examples:

```text
Generative AI
Toyota EV Strategy
Recruitment Branding
The History of Photography
Introduction to Quantum Computing
```

### Card

A **Card** represents one meaningful knowledge unit within the Scenario.

For example:

```text
# Generative AI

## What is Generative AI?

## How Generative AI Works

## History of Generative AI

## Major LLMs

## Advantages

## Limitations

## Future Possibilities
```

The objective is to make each Card understandable as an individual unit while preserving its relationship with the Scenario.

---

# Why Qcard Knowledge Skill?

AI systems are already capable of researching and generating enormous amounts of information.

However, AI output is often difficult to reuse.

A typical research process looks like this:

```text
User
 ↓
AI research
 ↓
Long answer
 ↓
Copy / paste
 ↓
Another AI
 ↓
Another long answer
```

Qcard introduces a common structure:

```text
AI A
 ↓
Qcard Knowledge Skill
 ↓
Qcard Markdown
 ↓
Qcard
 ↓
AI B
 ↓
Qcard Knowledge Skill
 ↓
Expanded / revised knowledge
```

This enables Qcard to function as a **knowledge exchange format between humans and AI systems**.

---

# Supported AI Systems

Qcard Knowledge Skill is designed to be portable.

It can be used with:

* Claude
* ChatGPT
* Gemini
* Other LLMs capable of following system instructions or custom instructions

The Skill itself does not depend on a specific AI provider.

The same knowledge-structuring rules can therefore be used across different AI systems.

---

# Repository Structure

```text
qcard-knowledge-skill/
│
├── README.md
│
├── SKILL.md
│
├── specification/
│   └── qcard-markdown-v0.1.md
│
└── examples/
    └── ...
```

## File Roles

### `SKILL.md`

Defines **how the AI should behave as a Qcard Knowledge Editor**.

It describes:

* information extraction
* knowledge segmentation
* Scenario design
* Card design
* Card ordering
* source preservation
* metadata handling
* research mode
* expansion mode
* reorganization mode
* validation rules

### `specification/qcard-markdown-v0.1.md`

Defines the **Qcard Markdown format itself**.

It is the technical specification for the exchange format.

The distinction is important:

```text
SKILL.md
    ↓
How to create knowledge

Qcard Markdown Specification
    ↓
How that knowledge is represented
```

---

# Basic Usage

## 1. Give information to an LLM

For example:

```text
Research the history of generative AI.
```

Or provide existing information:

```text
Here is some research about generative AI.

[Research text]
```

---

## 2. Ask the AI to convert it to Qcard

For example:

```text
Convert this information into Qcard Markdown.
```

Or:

```text
Organize this research into approximately 10 Qcards.
```

---

## 3. The AI generates Qcard Markdown

Example:

```md
# Generative AI

<!-- scenario
description: An overview of generative AI, including its history, technology, major applications, and limitations
tags: AI, Generative AI, LLM
-->

## What is Generative AI?

Generative AI refers to AI systems capable of generating new content...

<!-- meta
tags: AI, Generative AI, Overview
-->

## History of Generative AI

...

<!-- meta
tags: AI, History
-->

## How Generative AI Works

...

<!-- meta
tags: AI, Machine Learning
-->
```

---

# Import into Qcard

The generated Markdown can then be imported into Qcard.

The intended workflow is:

```text
LLM
 ↓
Qcard Knowledge Skill
 ↓
.md
 ↓
Qcard Import
 ↓
Scenario
 ↓
Cards
```

The Markdown format is therefore not just an export format.

It can also function as a **knowledge exchange format**.

---

# Knowledge Transformation

Qcard Knowledge Skill uses the following conceptual pipeline:

```text
┌───────────────────┐
│ Raw Information   │
│                   │
│ • AI answers      │
│ • Web research    │
│ • Articles        │
│ • Notes           │
│ • Documents       │
└─────────┬─────────┘
          │
          ▼
┌───────────────────┐
│ Understanding     │
│                   │
│ What is important?│
│ What belongs      │
│ together?         │
└─────────┬─────────┘
          │
          ▼
┌───────────────────┐
│ Knowledge Units   │
│                   │
│ One meaningful    │
│ concept at a time │
└─────────┬─────────┘
          │
          ▼
┌───────────────────┐
│ Cards             │
│                   │
│ Card 1            │
│ Card 2            │
│ Card 3            │
└─────────┬─────────┘
          │
          ▼
┌───────────────────┐
│ Scenario          │
└─────────┬─────────┘
          │
          ▼
┌───────────────────┐
│ Qcard Markdown    │
└───────────────────┘
```

---

# Core Principle

The most important rule is:

> **1 Card = 1 Knowledge Unit**

Cards should not be divided merely by paragraph length.

They should be divided according to meaning.

For example, this is generally too broad:

```text
## Generative AI
```

if the Card contains:

* definition
* history
* architecture
* applications
* advantages
* limitations
* future prospects

Instead, these concepts can become separate Cards:

```text
## What is Generative AI?

## History of Generative AI

## How Generative AI Works

## Applications of Generative AI

## Advantages

## Limitations

## Future Prospects
```

---

# Source Preservation

Qcard Knowledge Skill attempts to preserve the origin of information whenever possible.

Metadata can contain information such as:

```text
tags
source
url
note
uri
```

This allows knowledge to retain not only its content, but also information about its origin.

The principle is:

```text
Knowledge
+
Context
+
Source
=
Reusable Knowledge
```

---

# Multi-Source Knowledge

Qcard Knowledge Skill can also structure information gathered from multiple sources.

For example:

```text
Source A
Source B
Source C
     ↓
Comparison
     ↓
Common information
     ↓
Differences
     ↓
Contradictions
     ↓
Integrated knowledge structure
     ↓
Qcard
```

Conflicting information should not be silently merged into a single fact.

Where necessary, the source or disagreement should remain visible.

---

# Knowledge Expansion

Qcard is designed to work iteratively.

An existing Scenario can be given back to an AI.

For example:

```text
Here is my existing Qcard.

Identify missing knowledge and expand it.
```

The AI can then analyze:

```text
Existing Cards
      ↓
Knowledge Gap Detection
      ↓
Missing Information
      ↓
Additional Research
      ↓
New Cards
```

This means a Qcard Scenario can gradually evolve into a larger knowledge system.

---

# Reorganization

Existing Qcards can also be reorganized.

For example:

```text
Organize these cards so they are easier to understand.
```

The Skill can restructure:

* Card boundaries
* Card order
* duplicate information
* metadata
* relationships between concepts

while preserving the underlying knowledge.

---

# URI and Identity

Cards may have persistent identifiers.

For example:

```text
uri: fig://...
```

When an existing Card already has a URI, the Skill should preserve it.

This allows the identity of a knowledge unit to remain stable even when its content is edited or reorganized.

---

# Design Philosophy

Qcard Knowledge Skill is based on a simple distinction.

### Traditional document

```text
Information
    ↓
Document
```

### Qcard

```text
Information
    ↓
Knowledge
    ↓
Knowledge Units
    ↓
Cards
    ↓
Scenario
```

This makes Qcard suitable not only for reading, but also for:

* learning
* research
* knowledge management
* AI collaboration
* knowledge exchange
* iterative research
* structured note-taking

---

# Relationship with Qcard

Qcard Knowledge Skill and the Qcard application have different responsibilities.

```text
Qcard Knowledge Skill
        │
        │ creates
        ▼
Qcard Markdown
        │
        │ imports into
        ▼
Qcard Application
        │
        ├── visualization
        ├── editing
        ├── playback
        ├── memorization
        └── knowledge management
```

The Skill does not need to reproduce the entire Qcard application.

Its responsibility is to produce structured knowledge that Qcard can consume.

---

# Versioning

The Skill and Markdown specification are versioned independently.

Current versions:

```text
Qcard Knowledge Skill
v0.1

Qcard Markdown Specification
v0.1
```

Future changes may introduce:

```text
v0.2
v0.3
v1.0
```

Backward compatibility should be considered when changing the Markdown specification.

---

# Development Roadmap

## v0.1 — Foundation

* Scenario + Card structure
* Markdown output
* Knowledge segmentation
* Metadata preservation
* Source preservation
* Multi-LLM compatibility

## v0.2 — Knowledge Intelligence

Potential additions:

* knowledge gap detection
* duplicate detection
* relationship detection
* improved source attribution
* confidence indicators
* fact / inference distinction
* automatic card recommendations

## v0.3 — Knowledge Exchange

Potential additions:

* cross-Scenario references
* persistent URI relationships
* knowledge merging
* knowledge diff
* AI-to-AI knowledge exchange
* structured citations

## v1.0 — Qcard Knowledge Protocol

Potential goal:

> Establish Qcard as a portable format for exchanging structured knowledge between humans, AI systems, and Qcard-compatible applications.

---

# Example Future Workflow

A possible future workflow is:

```text
            ┌─────────────┐
            │   ChatGPT   │
            └──────┬──────┘
                   │
                   ▼
          Qcard Knowledge Skill
                   │
                   ▼
             Qcard Markdown
                   │
                   ▼
              ┌─────────┐
              │  Qcard  │
              └────┬────┘
                   │
          Human editing / learning
                   │
                   ▼
             Qcard Markdown
                   │
                   ▼
          Qcard Knowledge Skill
                   │
          ┌────────┴────────┐
          ▼                 ▼
       Claude             Gemini
```

The same knowledge can therefore move between different AI environments while retaining a common structure.

---

# License

License information will be defined in a future version.

Until a license is explicitly specified, do not assume that this repository grants unrestricted rights to reuse, modify, or redistribute its contents.

---

# Status

**Experimental / v0.1**

Qcard Knowledge Skill is currently an experimental specification.

The format and behavior may change before reaching v1.0.

---

# Related Files

* [`SKILL.md`](./SKILL.md)
* [`Qcard Markdown Specification`](./specification/qcard-markdown-v0.1.md)

---

# Vision

Qcard Knowledge Skill aims to make knowledge portable.

Instead of knowledge being trapped inside a particular AI conversation, application, or provider:

```text
ChatGPT
Claude
Gemini
Qcard
Human
```

can exchange knowledge through a shared structure.

The long-term vision is:

> **AI-generated information should be able to become structured, portable, human-readable knowledge.**

Qcard Knowledge Skill is an attempt to define that bridge.
