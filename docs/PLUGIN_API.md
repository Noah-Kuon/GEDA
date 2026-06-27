# Plugin API

Version: 1.0

---

# Philosophy

Plugins extend Qcard.

Plugins never modify Core.

---

# Rules

Plugins

CAN

* Read cards
* Read scenarios
* Add UI
* Register commands
* Export data

Plugins

CANNOT

* Modify internal database
* Replace core rendering
* Override storage
* Execute automatically

---

# Lifecycle

```
Load

↓

Initialize

↓

Register

↓

Ready

↓

Execute

↓

Unload
```

---

# Plugin Manifest

```json
{
  "id":"",
  "name":"",
  "version":"",
  "author":"",
  "description":"",
  "entry":"plugin.js"
}
```

---

# Public API

Available

```
Qcard.getCards()

Qcard.getScenario()

Qcard.showToast()

Qcard.exportQCF()

Qcard.registerCommand()

Qcard.registerToolbarButton()
```

---

# Security

Plugins execute in sandbox mode.

No direct DOM rewriting.

No access to private storage.

---

# Future APIs

Reserved

```
Cloud API

Marketplace API

AI API

GEDA API
```

---

# Versioning

Plugin API

1.x

must remain compatible.

Breaking changes require

2.0.
