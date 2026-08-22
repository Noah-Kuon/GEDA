Qcard Data Model v0.1
# Qcard Data Model v0.1

> Version: 0.1
> Status: Draft
> Purpose: Qcard knowledge data の基本構造を定義する
> Primary unit: Scenario / Card
> Current exchange fields: scenario, uri, title, content, tags, source, url, note

---

# 1. Purpose

Qcard Data Modelは、Qcardが扱う知識データの基本構造を定義する。

Qcardの知識は、1つのScenarioと、そのScenarioに属する複数のCardによって構成される。

基本構造：

Scenario
├── Card
├── Card
├── Card
└── ...

Cardは、独立して理解・参照・編集・交換できるKnowledge Unitとして扱う。

Qcard Data Modelは、特定の表示形式やファイル形式に依存しない。

したがって、同一のData Modelを以下の形式へ変換できる。

- Qcard内部データ
- CSV
- Googleスプレッドシート
- Markdown
- JSON
- 将来的なAPI形式

---

# 2. Core Concept

Qcard Data Modelの基本構造は以下とする。

```text
Scenario
    ↓
Cards
    ↓
Knowledge Units

より具体的には、

Scenario
│
├── Card
│   ├── URI
│   ├── Title
│   ├── Content
│   ├── Tags
│   ├── Source
│   ├── URL
│   └── Note
│
├── Card
│   └── ...
│
└── Card
    └── ...
3. Canonical Card Fields

Qcard v0.1のCardは、以下の8フィールドを基本データモデルとする。

Field	Required	Description
scenario	YES	Cardが所属するScenario
uri	NO	Cardを識別するURI
title	YES	Cardのタイトル
content	YES	Card本文
tags	NO	Cardを分類するタグ
source	NO	情報の出典
url	NO	出典等に関連するURL
note	NO	補足情報・メモ

Canonical field order:

scenario
uri
title
content
tags
source
url
note

この順序をCSVなどの標準出力順序として維持する。

4. Scenario
4.1 Definition

Scenarioは、複数のCardをまとめるKnowledge Contextである。

例：

Scenario:
新卒の企業面接でよく聞かれる質問

このScenarioの下に、

Card 1: 自己紹介
Card 2: ガクチカ
Card 3: 志望動機
...

が存在する。

4.2 Scenario Principle

Scenarioは単なるフォルダ名ではない。

Scenarioは、

「これらのCardを一つの知識集合として扱う理由」

を表す。

したがって、同一Scenario内のCardには、何らかの共通する文脈が存在することが望ましい。

5. scenario Field
Definition

scenario はCardが所属するScenarioの名称を保持する。

Example:

scenario: 新卒の企業面接でよく聞かれる質問
Required

YES

Type

String

Rules
Scenario名を格納する
Markdown記法を含めない
Scenario: のようなプレフィックスを付けない
Cardごとに同一Scenario名を保持できる
CSVではScenarioを識別するための主要フィールドとして使用する

Correct:

新卒の企業面接でよく聞かれる質問

Incorrect:

Scenario: 新卒の企業面接でよく聞かれる質問
6. uri Field
Definition

uri はCardを識別するためのURIである。

Example:

urn:qcard:interview:self-introduction
Required

NO

Type

String

Important Principle

URIはユーザーが必ず入力しなければならないフィールドではない。

特に外部データからQcardへImportする場合、

uri = empty

を許容する。

Qcard側で必要に応じてURIを生成・付与できる設計を前提とする。

7. title Field
Definition

title はCardの名称であり、Cardを識別・理解するための主要な表示情報である。

Example:

「自己紹介をお願いします」
Required

YES

Type

String

Rules

タイトルにはCardの中心となるKnowledge Unitを表現する。

ユーザーが「質問」を求めている場合は、可能な限り実際の質問形式を使用する。

Example:

「自己紹介をお願いします」

Topicとして要求された場合：

自己紹介
8. content Field
Definition

content はCardが保持する主要な知識本文である。

Required

YES

Type

Text

Rules

ContentにはKnowledge Unitの意味を保持する。

Contentには以下を含めることができる。

説明
定義
背景
事例
手順
比較
理由
注意点
考察
その他の知識
9. Metadata Separation

Qcard Data Modelでは、ContentとMetadataを区別する。

Content:

新卒面接の冒頭で行われる質問。
応募者の基本情報や第一印象を確認する。

Metadata:

tags
source
url
note
uri

以下のような表現をContent内に埋め込むことは、構造化データとしては推奨しない。

Tags: 新卒, 面接
Source: ...
URI: ...

MetadataはData Model上の独立したFieldとして扱う。

10. tags Field
Definition

tags はCardを分類・検索するためのタグ集合である。

Required

NO

Type

Array of String

Conceptual representation:

[
  "新卒採用",
  "面接",
  "自己紹介"
]

CSV representation:

新卒採用,面接,自己紹介
Rules
複数タグを許容する
タグは分類目的で使用する
本文の単純なキーワード抽出結果を無制限に格納しない
同一タグを重複させない
11. source Field
Definition

source は情報の出典・情報源を表す。

Example:

厚生労働省

または、

ユーザー提供資料
Required

NO

Type

String

Rules

情報源が明確な場合に使用する。

不明な情報源を推測して入力しない。

12. url Field
Definition

url はSource等に関連するURLを保持する。

Example:

https://example.com/article
Required

NO

Type

String

Rules

URLが実際に存在する場合に使用する。

URLを推測・捏造しない。

13. note Field
Definition

note はCard本文とは区別して保持したい補足情報・編集用メモである。

Required

NO

Type

Text

Examples
後で出典を確認する
ユーザーによる追記候補
LLM生成後に要確認

NoteはContentそのものではなく、Cardに付随する補助情報として扱う。

14. Required / Optional Model

Minimum valid Card:

scenario
title
content

Full Card:

scenario
uri
title
content
tags
source
url
note

したがって、

Minimum Card
=
scenario + title + content

とする。

15. Empty Fields

Optional fields may be empty.

Example:

scenario,uri,title,content,tags,source,url,note
新卒面接,,自己紹介をお願いします,面接冒頭で...,新卒;面接,,,

空欄をエラーとして扱わない。

特に、

uri
source
url
note

は空欄を許容する。

16. CSV Representation

Qcard CSV v0.1では、1行を1Cardとして扱う。

Header:

scenario,uri,title,content,tags,source,url,note

Example:

scenario,uri,title,content,tags,source,url,note
新卒面接,,「自己紹介をお願いします」,面接冒頭で基本情報を確認する質問。,新卒採用;面接;自己紹介,,,
新卒面接,,「学生時代に最も力を入れたことは何ですか？」,学生時代の経験や行動を確認する質問。,新卒採用;面接;ガクチカ,,,
17. CSV Row Principle

1 CSV row = 1 Card

Example:

Row 1 → Card 1
Row 2 → Card 2
Row 3 → Card 3

Scenarioは複数行にまたがってもよい。

Example:

scenario = 新卒面接

が10行続けば、

1 Scenario
10 Cards

として解釈できる。

18. CSV Import

CSV Importでは以下の処理を行う。

CSV
↓
Header Recognition
↓
Row Recognition
↓
Field Mapping
↓
Card Creation
↓
Scenario Assignment
↓
URI Handling
↓
Qcard

URIが空欄の場合は、新規Cardとして扱える。

19. CSV Export

QcardからCSVを書き出す場合、標準Headerは以下とする。

scenario
uri
title
content
tags
source
url
note

Field order should remain stable.

20. Spreadsheet Editing

Qcard CSVは、Googleスプレッドシート等で編集できるRaw Dataとして扱うことができる。

Typical workflow:

Qcard
↓
CSV Export
↓
Google Spreadsheet
↓
Edit
↓
CSV Export
↓
Qcard Import

また、新規データをSpreadsheet上で作成することもできる。

この場合、

uri

は空欄でもよい。

21. Markdown Representation

Qcard MarkdownはQcard Data Modelを人間が読みやすい形で表現する交換形式である。

Data Model:

scenario
title
content
tags
source
url
note

↓

Markdown:

# 新卒面接

## 「自己紹介をお願いします」

面接冒頭で基本情報を確認する質問です。

<!-- meta
tags: 新卒採用, 面接, 自己紹介
-->

MarkdownはData Modelそのものではない。

22. JSON Representation

将来的にJSON形式をサポートする場合、概念モデルは以下とする。

{
  "scenario": "新卒面接",
  "cards": [
    {
      "uri": "",
      "title": "「自己紹介をお願いします」",
      "content": "面接冒頭で基本情報を確認する質問です。",
      "tags": [
        "新卒採用",
        "面接",
        "自己紹介"
      ],
      "source": "",
      "url": "",
      "note": ""
    }
  ]
}

JSONは将来的なAPI・LLM連携等を想定した交換形式とする。

23. Format Independence

Qcard Data Modelと各フォーマットを分離する。

                 Qcard Data Model
                        │
          ┌─────────────┼─────────────┐
          ↓             ↓             ↓
        CSV          Markdown        JSON
          ↓             ↓             ↓
    Spreadsheet       Human          API/LLM

各フォーマットは同じData Modelを表現する。

24. LLM Integration

LLMにQcard Data Modelを生成させる場合、最終的な目的はMarkdownの見た目を再現することではなく、8フィールドへの正確な分類である。

LLM Input:

自然言語
Markdown
Web情報
文書
会話
調査結果

↓

LLM Processing:

Knowledge Extraction
↓
Scenario Detection
↓
Card Segmentation
↓
Metadata Extraction

↓

Qcard Data Model:

scenario
uri
title
content
tags
source
url
note
25. URI and LLM

LLMは、原則としてURIを勝手に生成しない。

Input dataに既存URIが存在する場合は保持する。

URIが存在しない場合：

uri = empty

として出力する。

URIの生成はQcard側の責務とすることを基本とする。

26. Knowledge Normalization

Qcard Knowledge Normalizerは、外部から入力された情報をQcard Data Modelへ変換する。

Raw Input
↓
Parser
↓
Knowledge Extraction
↓
Field Mapping
↓
Qcard Data Model
↓
Validation
↓
Import

Input examples:

ChatGPT output
Claude output
Gemini output
Markdown
Plain text
CSV
Spreadsheet data
27. Structural Validation

Valid Card:

scenario = present
title = present
content = present

Optional:

uri
tags
source
url
note

Invalid examples:

scenario = empty
title = empty
content = empty

ただし、空欄を許容する仕様については、Import処理側のエラー方針に従う。

28. Semantic Validation

構造的に正しいだけでは十分ではない。

Example:

title = 自己紹介
content = 志望動機についての説明

これはData Model上は格納できても、Semanticには不整合の可能性がある。

Normalizerでは可能な範囲で、

Title
↓
Content
↓
Tags

の意味的一貫性を確認する。

29. Data Preservation

Format conversion must preserve information.

CSV
↓
Markdown
↓
CSV

または、

Markdown
↓
Qcard
↓
CSV

を行った場合、可能な限り以下を保持する。

scenario
uri
title
content
tags
source
url
note
30. Unknown Data

入力データにQcard Data Modelに対応しない情報が存在する場合、勝手に削除しない。

可能な処理：

適切なFieldへ統合
↓
noteへ保存
↓
未対応情報として警告

ただし、情報の意味を変更してはならない。

31. Data Model vs UI

Qcard UIで表示される内容とData Modelは同一ではない。

例えば、

UI:
Card Title
Card Content
Tag chips
Source link

であっても、内部的には、

title
content
tags
source
url

として管理される。

UIの変更によってData Modelを変更する必要はない。

32. Data Model vs Markdown

Markdownの構文を変更しても、Data Modelそのものを変更する必要はない。

例えば、

Markdown v0.1
Markdown v0.2

が存在しても、

Qcard Data Model v0.1

は独立して維持できる。

33. Versioning

Data Modelは独立したVersionを持つ。

Current:

Qcard Data Model v0.1

Markdown specification:

Qcard Markdown v0.1

CSV specification:

Qcard CSV v0.1

これらは同じVersion番号である必要はない。

34. Backward Compatibility

将来Data Modelを拡張する場合、既存の8フィールドを可能な限り維持する。

Current canonical fields:

scenario
uri
title
content
tags
source
url
note

新しいFieldを追加する場合、既存データを破壊しないことを原則とする。

35. Future Extensions

将来的に以下のFieldが必要になる可能性がある。

created_at
updated_at
author
status
language
type
parent_uri
related_uri
order
media
audio
image

ただし、v0.1ではこれらをCanonical Fieldに含めない。

特に、

type
status
order
relationship

などは、実際の利用要件を確認した上で追加する。

36. Canonical Model

Qcard Data Model v0.1のCanonical Card:

{
  "scenario": "string",
  "uri": "string | empty",
  "title": "string",
  "content": "string",
  "tags": ["string"],
  "source": "string | empty",
  "url": "string | empty",
  "note": "string | empty"
}
37. Minimal Example
{
  "scenario": "新卒面接",
  "uri": "",
  "title": "「自己紹介をお願いします」",
  "content": "面接冒頭で基本情報を確認する質問です。",
  "tags": ["新卒採用", "面接", "自己紹介"],
  "source": "",
  "url": "",
  "note": ""
}
38. Full Example
{
  "scenario": "新卒の企業面接でよく聞かれる質問",
  "uri": "urn:qcard:interview:self-introduction",
  "title": "「自己紹介をお願いします」",
  "content": "面接の冒頭で、応募者の基本情報や第一印象を確認するための質問です。",
  "tags": [
    "新卒採用",
    "面接",
    "自己紹介"
  ],
  "source": "ユーザー提供情報",
  "url": "",
  "note": "回答時間は1分程度を想定"
}
39. Core Invariants

Qcard Data Model v0.1では、以下を基本不変条件とする。

1. 1 Row = 1 Card
2. 1 Card belongs to 1 Scenario
3. scenario identifies the Scenario context
4. title identifies the Card
5. content contains the main knowledge
6. tags are metadata
7. source is provenance metadata
8. url is source/reference metadata
9. note is auxiliary metadata
10. uri is optional
11. URI may be generated by Qcard
12. Data Model is independent from presentation format
40. Design Philosophy

Qcard Data Modelは、LLMやMarkdownに依存しない。

LLM
 ↓
Knowledge
 ↓
Qcard Data Model
 ↓
CSV / Markdown / JSON
 ↓
Qcard

または、

CSV / Markdown / JSON
 ↓
Qcard Data Model
 ↓
Qcard

という双方向変換を可能にする。

41. Final Definition

Qcard Data Model v0.1とは、

「Scenarioに属するKnowledge UnitとしてのCardを、8つのCanonical Fieldによって表現するための最小データモデル」

である。

Canonical Fields:

scenario
uri
title
content
tags
source
url
note

この8フィールドをQcardの基本的なKnowledge Exchange Modelとして扱う。

42. Version
Qcard Data Model
Version: 0.1

Status: Draft

Canonical Fields:
8

Primary Unit:
Card

Context Unit:
Scenario

Current Exchange Formats:
CSV
Markdown

Future Exchange Formats:
JSON
API

### 重要なポイント

今回の定義では、**あえてv0.1をシンプルにしています**。

特に、

> `scenario / uri / title / content / tags / source / url / note`

という現在実際に使われている8項目を、まず**Canonical Field**として固定するのが重要です。

そして、`uri` は空欄を許容し、**Qcard側で生成できる**という現在の運用もモデルに明記しました。

これによって、今後は、

**LLM → Qcard Data Model → CSV / Markdown → Qcard**

という設計ができます。

また、先ほどの話に戻ると、これなら**LLMに「完璧なQcard Markdown」を生成させる必要がなくなります**。LLMには8フィールドへの意味的な分類をさせ、最終的なMarkdown/CSVの構文はQcard側のGeneratorに任せられます。

なお、今回のv0.1では、まだ `order`、`created_at`、`updated_at`、Card間の関係、画像・音声などはCanonical Fieldに入れていません。ここを最初から増やしすぎると、現在のQcardの実装とズレてしまうためです。

**次の段階では、このData Modelを基準に `Qcard Knowledge Normalizer v0.1` を設計するのが自然です。**
