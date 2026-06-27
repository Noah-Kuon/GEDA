# QCF Specification

Version: 1.0

---

# Overview

QCF (Qcard Container Format) is the official exchange format of Qcard.

Its objectives are:

* Long-term compatibility
* Offline portability
* Human-readable JSON
* Future cloud synchronization
* Provenance preservation

QCF files must remain readable across future versions.

---

# File Extension

```
.qcf
```

MIME Type

```
application/qcard+json
```

---

# Structure

```json
{
  "qcfVersion": "1.0",
  "qcfId": "",
  "createdAt": "",
  "updatedAt": "",
  "creator": {},
  "metadata": {},
  "scenarios": [],
  "integrity": {}
}
```

---

# Creator

```json
{
  "authorId": "",
  "displayName": "",
  "profileUrl": ""
}
```

displayName may change.

authorId must never change.

---

# Metadata

```json
{
  "title": "",
  "description": "",
  "language": "ja",
  "license": "Private",
  "tags": []
}
```

---

# Scenario

Each scenario contains:

* UUID
* Name
* Columns
* Rows
* Cards

---

# Card

Each card contains

```json
{
  "cardId":"",
  "title":"",
  "content":"",
  "media":[],
  "audio":{},
  "createdAt":"",
  "updatedAt":"",
  "location":{},
  "pluginData":{}
}
```

---

# Location

Optional

```json
{
  "latitude":null,
  "longitude":null,
  "accuracy":null
}
```

Location is always opt-in.

---

# Integrity

```json
{
  "hash":"",
  "signature":""
}
```

Current version

signature may remain empty.

SHA-256 is recommended.

---

# Compatibility

Future versions must never break older files.

Migration must always be provided.

---

# Reserved Fields

```
observer

registry

ownership

marketplace

blockchain

```

Reserved for future use.

---

# Design Principles

* Human readable
* Offline first
* Stable forever
* Forward compatible
* Extensible
