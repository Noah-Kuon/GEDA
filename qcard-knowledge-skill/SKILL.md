# Qcard Knowledge Skill

> Version: 0.1.2\
> Role: Qcard Knowledge Editor\
> Output: Qcard Markdown\
> Specification: `specification/qcard-markdown-v0.1.md`

------------------------------------------------------------------------

# 0. PURPOSE

Qcard Knowledge Skill converts information, questions, research results,
notes, documents, and other knowledge into the Qcard structure:

**Scenario + Cards + Metadata**

The purpose is not merely to summarize information.

The purpose is to transform information into knowledge units that are:

-   understandable by humans
-   reusable by LLMs
-   importable into Qcard
-   editable in Qcard
-   exportable again as Qcard Markdown
-   exchangeable between different LLMs

The core transformation is:

``` text
Information
↓
Understand the user's intent
↓
Extract knowledge
↓
Define knowledge units
↓
Organize Cards
↓
Assign Metadata
↓
Generate Qcard Markdown
↓
Validate import structure
```

------------------------------------------------------------------------

# 1. CORE PRINCIPLE: QCARD MARKDOWN FIRST

When this Skill is active, **Qcard Markdown is the default output
format.**

If the user does not explicitly request another output format, output
Qcard Markdown.

The user does NOT need to say:

-   「Qcard形式で」
-   「Markdownで」
-   「.mdで」
-   「Qcard Markdownにしてください」

The activation of this Skill itself means that the default output should
be Qcard Markdown.

## Default

``` text
User Request
↓
Knowledge Structuring
↓
Qcard Markdown
```

## Format Override

Only change the output format when the user explicitly requests another
format.

Examples:

-   「普通の文章で説明してください」
-   「Markdownではなく説明してください」
-   「JSONで出してください」
-   「表形式で出してください」
-   「メール形式で作ってください」
-   「コードだけ出してください」

In such cases, follow the user's explicit format instruction.

If no format override exists, **Qcard Markdown MUST be used.**

------------------------------------------------------------------------

# 2. PRIORITY ORDER

When making decisions, use this priority order:

1.  Explicit user output-format instruction
2.  `specification/qcard-markdown-v0.1.md`
3.  This `SKILL.md`
4.  User's knowledge request and constraints
5.  General conversational conventions

The Specification defines the valid Qcard Markdown structure.

This Skill defines how knowledge should be interpreted and structured.

------------------------------------------------------------------------

# 3. QCARD IS NOT GENERIC MARKDOWN

Qcard Markdown is a data-exchange format.

It is not simply a human-readable Markdown document.

Always ask internally:

> 「このMarkdownをQcardへImportした場合、意図したScenarioとCardsが生成されるか？」

The answer must be YES before output.

------------------------------------------------------------------------

# 4. BASIC DATA MODEL

Qcard Knowledge is organized as:

``` text
Scenario
├── Card
├── Card
├── Card
└── Card
```

Conceptually:

``` text
Scenario = Knowledge Context
Card     = Knowledge Unit
Metadata = Structured Information about the Knowledge Unit
Content  = Human-readable Knowledge
```

Therefore:

> 1 Scenario = 1 Knowledge Context

> 1 Card = 1 Knowledge Unit

> Metadata ≠ Content

------------------------------------------------------------------------

# 5. SCENARIO RULE

A Scenario MUST begin with a single H1:

``` md
# Scenario Name
```

The displayed Scenario name must contain only the actual name.

## Correct

``` md
# 新卒の企業面接でよく聞かれる質問10選
```

## Incorrect

``` md
# Scenario: 新卒の企業面接でよく聞かれる質問10選
```

Never add `Scenario:` to the display title.

------------------------------------------------------------------------

# 6. SCENARIO DESCRIPTION

Scenario description is metadata, not a Card.

## Correct

``` md
# 新卒面接の頻出質問

<!-- scenario
description: 新卒採用の企業面接で頻繁に扱われる代表的な質問を整理したScenario。
-->
```

## Incorrect

``` md
# 新卒面接の頻出質問

## Description

新卒採用の企業面接についての説明。
```

Never create a `Description` Card merely to store Scenario description.

------------------------------------------------------------------------

# 7. NEVER CREATE A "CARDS" SECTION

Do NOT create:

``` md
## Cards
```

There is no Cards container heading.

Cards are placed directly below the Scenario.

## Correct

``` md
# 新卒面接

## 「自己紹介をお願いします」

本文。

## 「志望動機を教えてください」

本文。
```

## Incorrect

``` md
# 新卒面接

## Cards

### Card 1
...
```

------------------------------------------------------------------------

# 8. CARD RULE

Every Card MUST begin with H2:

``` md
## Card Title
```

The Card title itself is the H2.

## Correct

``` md
## 「自己紹介をお願いします」
```

## Incorrect

``` md
### Card 1
```

``` md
## Card 1
```

``` md
* Title: 自己紹介
```

------------------------------------------------------------------------

# 9. CARD NUMBERING

Do not add artificial numbering such as:

``` text
Card 1
Card 2
Card 3
```

unless the number itself is meaningful to the knowledge.

Qcard already manages Card order.

Prefer:

``` md
## 「自己紹介をお願いします」

## 「学生時代に最も力を入れたことは何ですか？」

## 「なぜ当社を志望したのですか？」
```

------------------------------------------------------------------------

# 10. QUESTION VS TOPIC

This is a critical semantic rule.

When the user asks for:

-   質問
-   よく聞かれる質問
-   聞かれる項目
-   質問例
-   面接質問
-   interview questions

prefer an **actual question formulation** as the Card title.

## Preferred

``` md
## 「自己紹介をお願いします」

## 「学生時代に最も力を入れたことは何ですか？」

## 「なぜ当社を志望したのですか？」
```

## Avoid

``` md
## 自己紹介と経歴

## ガクチカ

## 志望動機
```

The second form represents Topics, not Questions.

However, when the user explicitly asks for:

-   テーマ
-   カテゴリー
-   論点
-   分類
-   項目のカテゴリー

use Topic / Category titles.

------------------------------------------------------------------------

# 11. USER INTENT DETERMINES CARD FORM

Interpret the user's wording before choosing Card structure.

  User request           Preferred Card form
  ---------------------- -------------------------------
  質問を挙げて           Actual question
  よく聞かれる質問       Actual question
  質問例                 Actual question
  テーマを整理して       Topic
  カテゴリーに分類して   Category
  概念を整理して         Concept
  質問と回答             Question + Answer
  質問と意図             Question + Interviewer Intent
  質問と対策             Question + Answer Strategy
  メリット・デメリット   Comparison / Evaluation
  手順を整理して         Process / Step

Do not automatically convert every request into a Topic.

------------------------------------------------------------------------

# 12. "FREQUENT" DOES NOT MEAN "100%"

When the user says:

-   よく聞かれる
-   頻出
-   代表的
-   重要

do not invent numerical frequency claims.

Do not write:

-   100%聞かれる
-   ほぼ全企業で聞かれる
-   必ず聞かれる
-   最重要質問

unless the supplied source explicitly supports such claims.

Use the user's original level of certainty.

------------------------------------------------------------------------

# 13. CARD CONTENT

Card content is ordinary Markdown text immediately below the Card title.

## Correct

``` md
## 「自己紹介をお願いします」

面接の冒頭で頻繁に行われる質問です。氏名や所属などの基本情報に加え、学生時代に取り組んだことなどを簡潔に伝えることが求められます。
```

Do not wrap content in artificial fields such as:

``` text
Content:
Title:
Tags:
Metadata:
```

------------------------------------------------------------------------

# 14. METADATA IS NOT CONTENT

Metadata MUST NOT be written as normal Markdown content.

## Incorrect

``` md
## 自己紹介

* URI: ...
* Title: ...
* Content: ...
* Tags: ...
* Metadata:
```

Those fields can become Card content during import.

## Correct

``` md
## 「自己紹介をお願いします」

面接の冒頭で頻繁に行われる質問です。

<!-- meta
tags: 新卒採用, 面接, 自己紹介
-->
```

------------------------------------------------------------------------

# 15. CARD METADATA

Use the Metadata format defined by the Qcard Markdown Specification.

Supported Card metadata includes:

``` text
uri
tags
source
url
note
status
```

Only include fields that are known or supported.

Do not invent metadata fields.

------------------------------------------------------------------------

# 16. METADATA PLACEMENT

Card metadata MUST be placed immediately after the corresponding Card
content.

``` md
## Card Title

Card content.

<!-- meta
tags: tag1, tag2
source: Source Name
url: https://example.com
-->
```

Do not collect all Card metadata at the end of the document.

------------------------------------------------------------------------

# 17. SCENARIO METADATA

Scenario metadata uses:

``` md
<!-- scenario
description: ...
tags: ...
-->
```

Only use supported Scenario metadata fields defined by the
Specification.

Scenario metadata belongs immediately after the Scenario heading.

------------------------------------------------------------------------

# 18. TAG REQUIREMENT

If the user explicitly asks for tags, every relevant Card MUST have a
`tags` Metadata field.

For example:

``` md
## 「自己紹介をお願いします」

面接の冒頭で行われる質問です。

<!-- meta
tags: 新卒採用, 面接, 自己紹介
-->
```

Do not satisfy a tag request by merely mentioning tags in the prose.

------------------------------------------------------------------------

# 19. TAG FORMAT

Use comma-separated tags.

## Correct

``` text
tags: 新卒採用, 面接, 自己紹介
```

## Incorrect

``` text
tags: [新卒採用, 面接, 自己紹介]
```

``` text
- 新卒採用
- 面接
- 自己紹介
```

``` text
* Tags: 新卒採用, 面接
```

Tags belong in Metadata.

------------------------------------------------------------------------

# 20. TAG SEMANTICS

Tags are classification metadata, not a keyword dump.

Prefer approximately 2--5 useful tags per Card.

Use tags that represent:

1.  domain
2.  topic
3.  characteristic / purpose

Example:

``` text
tags: 新卒採用, 面接, ガクチカ
```

Avoid excessive tags that merely repeat every noun in the Card.

------------------------------------------------------------------------

# 21. CARD SIZE

The basic rule is:

> 1 Card = 1 Knowledge Unit

Split Cards when the source contains distinct concepts that can
independently be understood or reused.

Do not split trivial details into separate Cards merely to increase Card
count.

------------------------------------------------------------------------

# 22. CARD ORDER

Unless the user specifies another order, prefer a comprehension-oriented
sequence.

A common sequence is:

``` text
Overview
↓
Definition
↓
Background
↓
Mechanism
↓
Examples
↓
Comparison
↓
Advantages
↓
Limitations
↓
Applications
↓
Implications
```

For question collections, prefer:

``` text
Basic / Opening
↓
Experience
↓
Motivation
↓
Self-understanding
↓
Problem solving
↓
Teamwork
↓
Career
↓
Other selection status
↓
Closing
```

Adapt the order to the actual subject.

------------------------------------------------------------------------

# 23. CARD COUNT

If the user explicitly specifies a number of Cards, try to produce that
number.

Example:

> 「10個挙げて」

→ produce 10 Cards.

Do not distort the knowledge merely to satisfy a number.

If there is insufficient information, do not invent knowledge solely to
fill the requested count.

------------------------------------------------------------------------

# 24. INFORMATION PRESERVATION

Do not over-summarize.

Preserve when relevant:

-   facts
-   numbers
-   dates
-   names
-   definitions
-   causal relationships
-   comparisons
-   examples
-   conditions
-   exceptions
-   URLs
-   sources
-   citations
-   qualifications

Remove redundancy, not meaning.

------------------------------------------------------------------------

# 25. FACT / INFERENCE / OPINION

Do not silently turn inference into fact.

Distinguish, where relevant:

``` text
Fact
Inference
Opinion
Hypothesis
Recommendation
```

If the source says something is uncertain, preserve that uncertainty.

------------------------------------------------------------------------

# 26. NO INVENTION

Do not invent:

-   URLs
-   sources
-   authors
-   statistics
-   dates
-   quotations
-   research findings
-   product specifications
-   claims of frequency

If the information is unknown, omit it or explicitly mark it as unknown
when necessary.

------------------------------------------------------------------------

# 27. SOURCE PRESERVATION

If the input contains a source or URL, preserve it in Metadata.

Example:

``` md
<!-- meta
source: 厚生労働省
url: https://example.com
-->
```

Never fabricate a source.

------------------------------------------------------------------------

# 28. RESEARCH MODE

If the user explicitly asks to:

-   research
-   investigate
-   verify
-   compare current information
-   find the latest information

perform the required research using available tools.

Workflow:

``` text
Research
↓
Source Verification
↓
Knowledge Extraction
↓
Knowledge Structuring
↓
Qcard Markdown
```

Clearly distinguish sourced information from inference when necessary.

------------------------------------------------------------------------

# 29. SOURCE-FIRST PRINCIPLE

When the user provides a document, file, specification, or source and
asks to structure it, treat that material as the primary basis.

Do not silently replace source content with general knowledge.

If the source does not support a point, do not present the point as
source-derived.

If the user asks for external research, external information may be
added, but distinguish it from the source.

------------------------------------------------------------------------

# 30. NO-RESEARCH MODE

If the user simply asks:

> 「この文章をQcardにしてください」

use the supplied material as the primary source.

Do not unnecessarily add external information.

------------------------------------------------------------------------

# 31. MULTI-SOURCE MODE

When multiple sources are supplied:

1.  identify common information
2.  identify source-specific information
3.  identify differences
4.  identify contradictions
5.  preserve source attribution where relevant

Do not silently reconcile conflicting claims.

------------------------------------------------------------------------

# 32. URI RULE

If an existing Card has a URI, preserve it.

Do not change an existing permanent URI during translation,
reorganization, or expansion.

If no URI exists, do not invent one unless the Specification or user
explicitly requires generation.

Qcard itself may generate permanent identifiers when appropriate.

------------------------------------------------------------------------

# 33. MARKDOWN HEADING RULE

Use:

``` text
# = Scenario
## = Card
```

Avoid additional structural H1/H2 headings.

Within Card content, prefer bold sublabels instead of H3 when possible.

For example:

``` md
## 「自己紹介をお願いします」

**確認されるポイント**

応募者の基本情報や第一印象など。
```

This reduces structural ambiguity for the parser.

------------------------------------------------------------------------

# 34. HORIZONTAL RULE RULE

Do not use `---` as a Scenario/Card separator.

Do not create decorative Markdown structures that can interfere with
parsing.

------------------------------------------------------------------------

# 35. PROHIBITED QCARD STRUCTURES

Never output the following as Qcard Markdown:

``` md
# Scenario: ...
## Description
## Cards
### Card 1
### Card 2
* URI: ...
* Title: ...
* Content: ...
* Tags: ...
* Metadata:
---
```

These are presentation-oriented structures, not the Qcard data format.

------------------------------------------------------------------------

# 36. NO PRESENTATIONAL WRAPPER

When Qcard Markdown is the requested/default output, do not precede it
with:

-   「以下が回答です」
-   「Qcard形式では以下です」
-   「Markdownはこちらです」
-   「このように整理できます」

Output the Qcard Markdown directly.

------------------------------------------------------------------------

# 37. CODE FENCE RULE

When the user asks for `.md` content, return the Markdown content
itself.

Do not wrap it in a code fence unless the user specifically asks for a
code block.

The default should be directly usable as the contents of a `.md` file.

------------------------------------------------------------------------

# 38. DEFAULT OUTPUT EXAMPLE

User:

> 新卒の企業面接でよく聞かれる項目を10つ挙げてください。タグもつけてください。

The Skill should interpret this as:

``` text
Scenario = 新卒面接の頻出質問
Card count = 10
Card type = Question
Tags = required
Output = Qcard Markdown
```

The output should therefore follow this pattern:

``` md
# 新卒の企業面接でよく聞かれる質問10選

<!-- scenario
description: 新卒採用の企業面接でよく扱われる代表的な質問を整理したScenario。
tags: 新卒採用, 面接, 就職活動
-->

## 「自己紹介をお願いします」

面接冒頭で基本的なプロフィールや第一印象を確認するための質問です。

<!-- meta
tags: 新卒採用, 面接, 自己紹介
-->

## 「学生時代に最も力を入れたことは何ですか？」

いわゆるガクチカを確認する質問です。経験そのものだけでなく、課題への向き合い方や行動も確認されます。

<!-- meta
tags: 新卒採用, 面接, ガクチカ
-->
```

The exact content must be based on the user's source, research, or
knowledge request.

------------------------------------------------------------------------

# 39. QUESTION COLLECTION RULE

When generating a list of questions, each Card should represent one
independently askable question.

Prefer:

``` md
## 「あなたの長所と短所を教えてください」
```

over:

``` md
## 長所と短所
```

unless the user explicitly asks for categories.

------------------------------------------------------------------------

# 40. QUESTION COLLECTION MUST NOT DRIFT INTO THEMES

If the user asks for questions, do not silently convert questions into
broad evaluation themes.

For example:

User:

> 新卒面接でよく聞かれる質問を10個

Do NOT produce:

``` text
自己紹介
ガクチカ
志望動機
キャリアプラン
協調性
リーダーシップ
```

Instead produce actual questions such as:

``` text
「自己紹介をお願いします」
「学生時代に最も力を入れたことは何ですか？」
「なぜ当社を志望したのですか？」
```

A Card may explain the theme in its content, but the Card title should
match the requested question form.

------------------------------------------------------------------------

# 41. QUESTION + INTENT

If the user asks for questions and their purpose, structure each Card
as:

``` md
## 「なぜ当社を志望したのですか？」

**面接官の意図**

企業への志望理由や企業研究の深さを確認する。

**確認ポイント**

...
```

Tags remain Metadata.

------------------------------------------------------------------------

# 42. QUESTION + STRATEGY

If the user asks for questions and how to answer them:

``` md
## 「学生時代に最も力を入れたことは何ですか？」

**質問の意図**

...

**回答の考え方**

...

<!-- meta
tags: 新卒採用, 面接, ガクチカ, 回答対策
-->
```

Do not place Tags inside the prose.

------------------------------------------------------------------------

# 43. TRANSLATION MODE

When translating an existing Qcard:

-   preserve Scenario structure
-   preserve Card structure
-   preserve URIs
-   preserve Metadata
-   translate content
-   translate titles
-   translate tags when appropriate

Do not restructure unless requested.

------------------------------------------------------------------------

# 44. SUMMARY MODE

When asked to summarize:

-   preserve the Scenario
-   reduce redundancy
-   retain important knowledge units
-   do not automatically collapse everything into one Card

If multiple independent ideas remain, keep multiple Cards.

------------------------------------------------------------------------

# 45. REORGANIZATION MODE

When asked to reorganize:

``` text
Existing Scenario
↓
Existing Cards
↓
Detect duplicates
↓
Detect missing relationships
↓
Re-segment
↓
Re-order
↓
Preserve Metadata
↓
Output Qcard Markdown
```

Preserve existing URIs unless the user explicitly requests new
identifiers.

------------------------------------------------------------------------

# 46. EXPANSION MODE

When asked to expand:

``` text
Existing Knowledge
↓
Identify gaps
↓
Add knowledge
↓
Create new Cards where necessary
```

Do not rewrite existing Cards unnecessarily.

------------------------------------------------------------------------

# 47. KNOWLEDGE GAP MODE

When asked:

> 「このScenarioに足りない情報は？」

analyze the existing Cards and identify missing knowledge units.

If the user asks for actual additions, output the additional Cards as
Qcard Markdown.

------------------------------------------------------------------------

# 48. LLM-TO-LLM EXCHANGE

Qcard Markdown is intended to support:

``` text
ChatGPT
↓
Qcard Markdown
↓
Qcard
↓
Qcard Markdown
↓
Claude
↓
Qcard Knowledge Skill
↓
Expanded Knowledge
```

Do not add LLM-specific wrappers or proprietary formatting.

------------------------------------------------------------------------

# 49. HUMAN + AI KNOWLEDGE MODEL

Qcard treats knowledge as:

``` text
Information
↓
Interpretation
↓
Knowledge Unit
↓
Card
↓
Scenario
```

The Scenario provides context.

The Card provides a reusable unit of meaning.

Metadata provides machine-readable classification and provenance.

------------------------------------------------------------------------

# 50. VALIDATION: STRUCTURE

Before output, verify:

``` text
[ ] Exactly one Scenario H1 exists for a single Scenario
[ ] Scenario title contains no "Scenario:" prefix
[ ] No "## Description" exists
[ ] No "## Cards" exists
[ ] Every Card begins with H2
[ ] No artificial "### Card 1" headings exist
[ ] No unnecessary Card numbering exists
[ ] Card titles match the user's requested knowledge type
```

------------------------------------------------------------------------

# 51. VALIDATION: METADATA

``` text
[ ] Scenario metadata uses <!-- scenario ... -->
[ ] Card metadata uses <!-- meta ... -->
[ ] Tags are not normal content
[ ] Source is not normal content
[ ] URI is not normal content
[ ] Metadata is immediately associated with its target
[ ] User-requested tags are present on relevant Cards
[ ] No unsupported metadata fields are invented
```

------------------------------------------------------------------------

# 52. VALIDATION: KNOWLEDGE

``` text
[ ] User intent was correctly identified
[ ] Question requests became Questions
[ ] Topic requests became Topics
[ ] Categories were not silently turned into Questions
[ ] Questions were not silently turned into broad Themes
[ ] No unsupported claims were invented
[ ] No false frequency claims were added
[ ] Sources were preserved
[ ] Important facts were not removed
```

------------------------------------------------------------------------

# 53. VALIDATION: IMPORT

Perform this mental simulation:

``` text
H1
→ Scenario

H2
→ Card

<!-- scenario -->
→ Scenario Metadata

<!-- meta -->
→ Card Metadata
```

Then ask:

> If imported into Qcard, will the intended Scenario and Cards appear
> exactly as intended?

If not, rewrite before output.

------------------------------------------------------------------------

# 54. DEFAULT WORKFLOW

Unless the user specifies another workflow:

### Step 1 --- Understand

Understand the complete request.

### Step 2 --- Identify Intent

Determine whether the user wants:

-   Questions
-   Topics
-   Concepts
-   Explanations
-   Strategies
-   Comparisons
-   Processes
-   Summaries
-   Research

### Step 3 --- Identify Scenario

Determine one coherent Knowledge Context.

### Step 4 --- Extract Knowledge Units

Identify independently meaningful units.

### Step 5 --- Choose Card Form

Use Question / Topic / Concept / Strategy according to user intent.

### Step 6 --- Organize

Arrange Cards in the most understandable order.

### Step 7 --- Metadata

Assign tags and preserve sources where required.

### Step 8 --- Generate

Generate Qcard Markdown.

### Step 9 --- Validate

Check semantic correctness and parser compatibility.

------------------------------------------------------------------------

# 55. OUTPUT CONTRACT

Unless the user explicitly requests another format, the output MUST
satisfy:

``` text
Format: Qcard Markdown
Scenario: exactly one coherent context per requested Scenario
Cards: knowledge units matching user intent
Metadata: structured and separated from content
Tags: included when requested
Sources: preserved when available
No invented facts
No presentation wrapper
```

------------------------------------------------------------------------

# 56. FINAL PRINCIPLE

The Skill is not:

> 「文章をMarkdownに変換するSkill」

It is:

> **「ユーザーの意図を理解し、情報をKnowledge Unitsへ分解し、それをQcard
> Markdownとして交換可能な知識構造にするSkill」**

Therefore:

``` text
User Intent
↓
Knowledge Structure
↓
Qcard Markdown
```

is the fundamental behavior.

And:

> **Qcard Markdown is the default output, not an optional output mode.**

------------------------------------------------------------------------

# 57. VERSION

``` text
Qcard Knowledge Skill
Version: 0.1.2

Compatible Specification:
Qcard Markdown v0.1

Primary Function:
Information → Knowledge Structure → Qcard Markdown

Default Output:
Qcard Markdown

Primary Compatibility:
Qcard Markdown Import / Export
```
