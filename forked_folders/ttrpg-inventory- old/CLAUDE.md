# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
npm run dev      # Vite dev server
npm run build    # production build to dist/
npm run preview  # serve the built bundle
npm run lint     # eslint . — note: no eslint config is checked in, so this fails until one is added
```

There is no test runner configured. No environment variables are required — the app runs fully client-side with no external services.

## Architecture

This is a self-hosted, server-free inventory tool for TTRPG parties. All data lives in `localStorage`, keyed by party ID. `BroadcastChannel` keeps multiple tabs on the same machine in sync. There is no backend and no network dependency.

### Storage layer

`src/storage/localStore.js` is the single data access module. It exposes:

- `subscribeToCharacters(partyId, cb)` — calls `cb(sortedArray)` immediately and on every change. Returns unsubscribe.
- `subscribeToAuditLog(partyId, cb)` — same, newest-first array.
- `subscribeToConfig(partyId, cb)` — same, config object.
- `transaction(partyId, fn)` — synchronous "transaction": `fn` receives `{ get(charId), update(charId, fields) }`, flushes all updates atomically to localStorage and notifies subscribers.
- `addCharacter / updateCharacterFields / getCharacter / deleteCharacter` — simple CRUD helpers.
- `addAuditLogEntry(partyId, action, description)` — appends to the audit log (capped at 500).
- `savePartyConfig(partyId, config)` — merges config fields.
- `exportParty(partyId)` / `importParty(partyId, json)` — full party backup/restore.

localStorage keys: `ttrpg:<partyId>:chars`, `ttrpg:<partyId>:audit`, `ttrpg:<partyId>:config`.

### Data model

```
localStorage:
  ttrpg:{partyId}:chars   — { [charId]: { name, order, containers: [...] } }
  ttrpg:{partyId}:audit   — [{ id, action, description, timestamp }, ...]
  ttrpg:{partyId}:config  — { weightUnit, coinsPerWeightUnit, defaultContainers }
```

Containers and items are nested arrays inside each character object. Every mutation that touches `containers[]` goes through `store.transaction()`, which reads, mutates immutably, and writes in one synchronous step:

```js
store.transaction(partyId, (txn) => {
  const charData = txn.get(charId);
  if (!charData) return null;
  const updatedContainers = /* immutably map over containers */;
  txn.update(charId, { containers: updatedContainers });
  return result; // passed back to caller for audit logging
});
```

Cross-character operations call `txn.get` for both characters and `txn.update` for both — all reads happen before writes.

`addAuditLogEntry` is called after the transaction returns. The transaction returns a `result` object so the caller has names/counts for the log message.

### Routing and party identity

`App.jsx` mounts a single route `/:partyId`. A party is just a UUID in the URL. Unknown routes redirect to either the last-visited party (from `localStorage.lastVisitedParty`) or a freshly generated UUID. No authentication required.

### Component layout

`InventoryAppContent.jsx` (~2200 lines) is the app. It owns:

- All storage subscriptions (characters, audit log, config).
- All mutation handlers (add/delete/rename/transfer/identify/liquidate/import/export/etc.).
- All modal-open state — the UI is a stack of modals (`AddItemInputModal`, `ItemDetailsModal`, `ContainerDetailsModal`, `CharacterDetailsModal`, `TransferAllItemsModal`, `ImportItemsModal`, `AuditLogModal`, `DeleteConfirmationModal`, plus the generic `Modal` / `GenericInputModal`).
- The character grid renderer (responsive 1–4 columns based on viewport width).

When adding a new mutation, follow the existing pattern: validate `partyId`, call `store.transaction(partyId, ...)`, mutate `containers` immutably inside the transaction, then call `addAuditLogEntry`.

### Item types

Items in a container's `items` array are heterogeneous. The discriminators are:

- `itemType: 'coins'` — has a `coins: { platinum, gold, silver, copper }` object. Weight is computed (`50 coins = 1 lb`, floored) in `src/utils/coins.js`. When adding/transferring coins into a container that already has a coins item, the two are merged.
- `itemType: 'treasure'` — has `goldValue`, `quantity`, `weightPerItem`. Can be "liquidated" into a coins item.
- `isUnidentified: true` — has `secretName` and `secretDescription` shown only in details until the item is "identified."
- otherwise: a plain item with `name`, `weight`, `description`.

Weights are stored as pounds.
