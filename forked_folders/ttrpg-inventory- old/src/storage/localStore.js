/**
 * localStore.js — localStorage-backed storage adapter.
 *
 * Replaces Firebase/Firestore. All operations are synchronous (localStorage is
 * synchronous). BroadcastChannel is used so multiple tabs on the same machine
 * stay in sync without a server.
 *
 * Data layout in localStorage (keyed by partyId):
 *   ttrpg:<partyId>:chars   — object  { [charId]: characterData }
 *   ttrpg:<partyId>:audit   — array   [{ id, action, description, timestamp }, ...]
 *   ttrpg:<partyId>:config  — object  { weightUnit, coinsPerWeightUnit, defaultContainers }
 */

// crypto.randomUUID() requires a secure context (HTTPS/localhost).
// Use getRandomValues() as a fallback so the app works over plain HTTP.
const generateId = () => {
  if (crypto?.randomUUID) return crypto.randomUUID();
  return '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, c =>
    (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
  );
};

// BroadcastChannel for cross-tab sync (silently no-ops if unavailable)
let channel = null;
try { channel = new BroadcastChannel('ttrpg-inventory'); } catch (_) {}

// In-memory subscriber registry: subs[type][partyId][subId] = callbackFn
const subs = { chars: {}, audit: {}, config: {} };

// ---- Internal helpers ----

const storageKey = {
  chars:  (id) => `ttrpg:${id}:chars`,
  audit:  (id) => `ttrpg:${id}:audit`,
  config: (id) => `ttrpg:${id}:config`,
};

const emptyFor = (type) =>
  type === 'chars' ? {} : type === 'audit' ? [] : {};

function read(type, partyId) {
  try {
    const raw = localStorage.getItem(storageKey[type](partyId));
    return raw ? JSON.parse(raw) : emptyFor(type);
  } catch (_) {
    return emptyFor(type);
  }
}

function write(type, partyId, value) {
  localStorage.setItem(storageKey[type](partyId), JSON.stringify(value));
}

/** Push updated data to all in-process subscribers and other tabs. */
function notify(type, partyId) {
  const data = read(type, partyId);
  for (const cb of Object.values(subs[type]?.[partyId] ?? {})) cb(data);
  channel?.postMessage({ type, partyId });
}

// Handle cross-tab notifications
if (channel) {
  channel.onmessage = ({ data: { type, partyId } }) => {
    const data = read(type, partyId);
    for (const cb of Object.values(subs[type]?.[partyId] ?? {})) cb(data);
  };
}

/** Internal: register a subscriber; returns an unsubscribe function. */
function subscribe(type, partyId, transform, callback) {
  const id = generateId();
  if (!subs[type][partyId]) subs[type][partyId] = {};
  subs[type][partyId][id] = (raw) => callback(transform(raw));
  // Fire immediately with current data
  subs[type][partyId][id](read(type, partyId));
  return () => { delete subs[type]?.[partyId]?.[id]; };
}

// ---- Public subscribe API ----

/**
 * Subscribe to the characters list for a party.
 * callback receives a sorted array of { id, ...characterData }.
 * Returns an unsubscribe function.
 */
export function subscribeToCharacters(partyId, callback) {
  return subscribe(
    'chars',
    partyId,
    (raw) => {
      const arr = Object.entries(raw).map(([id, d]) => ({ id, ...d }));
      arr.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
      return arr;
    },
    callback,
  );
}

/**
 * Subscribe to the audit log for a party.
 * callback receives an array sorted newest-first.
 * Returns an unsubscribe function.
 */
export function subscribeToAuditLog(partyId, callback) {
  return subscribe(
    'audit',
    partyId,
    (raw) =>
      (Array.isArray(raw) ? [...raw] : []).sort(
        (a, b) => new Date(b.timestamp) - new Date(a.timestamp),
      ),
    callback,
  );
}

/**
 * Subscribe to the party config document.
 * callback receives the raw config object (empty object for new parties).
 * Returns an unsubscribe function.
 */
export function subscribeToConfig(partyId, callback) {
  return subscribe('config', partyId, (raw) => raw, callback);
}

// ---- Transaction API ----

/**
 * Run a synchronous "transaction" over character data.
 *
 * fn receives an object { get(charId), update(charId, fields) }:
 *   - get(charId)           — returns a snapshot of the character's stored data
 *                             (without the id field), or null if not found.
 *   - update(charId, fields)— merges fields into that character.
 *
 * fn's return value is returned from transaction().
 * All updates are flushed to localStorage atomically after fn returns.
 */
export function transaction(partyId, fn) {
  const chars = read('chars', partyId);
  const dirty = {};

  const txn = {
    get: (charId) => (chars[charId] ? { ...chars[charId] } : null),
    update: (charId, fields) => {
      dirty[charId] = { ...(dirty[charId] ?? chars[charId] ?? {}), ...fields };
    },
  };

  const result = fn(txn);

  if (Object.keys(dirty).length > 0) {
    for (const [id, data] of Object.entries(dirty)) chars[id] = data;
    write('chars', partyId, chars);
    notify('chars', partyId);
  }

  return result;
}

// ---- Mutation helpers ----

/** Add a new character document. Returns the generated id. */
export function addCharacter(partyId, charData) {
  const chars = read('chars', partyId);
  const id = generateId();
  chars[id] = charData;
  write('chars', partyId, chars);
  notify('chars', partyId);
  return id;
}

/** Merge plain fields into a character (no transaction needed for simple updates). */
export function updateCharacterFields(partyId, charId, fields) {
  const chars = read('chars', partyId);
  if (!chars[charId]) return;
  chars[charId] = { ...chars[charId], ...fields };
  write('chars', partyId, chars);
  notify('chars', partyId);
}

/** Get a single character by id synchronously. Returns { id, ...data } or null. */
export function getCharacter(partyId, charId) {
  const chars = read('chars', partyId);
  return chars[charId] ? { id: charId, ...chars[charId] } : null;
}

/** Delete a character document. */
export function deleteCharacter(partyId, charId) {
  const chars = read('chars', partyId);
  delete chars[charId];
  write('chars', partyId, chars);
  notify('chars', partyId);
}

/** Append an entry to the audit log (cap at 500 entries). */
export function addAuditLogEntry(partyId, action, description) {
  const audit = read('audit', partyId);
  audit.unshift({
    id: generateId(),
    action,
    description,
    timestamp: new Date().toISOString(),
  });
  if (audit.length > 500) audit.length = 500;
  write('audit', partyId, audit);
  notify('audit', partyId);
}

/** Merge config fields into the party config document. */
export function savePartyConfig(partyId, config) {
  const existing = read('config', partyId);
  write('config', partyId, { ...existing, ...config });
  notify('config', partyId);
}

// ---- Import / Export ----

/** Return the full party data as a formatted JSON string. */
export function exportParty(partyId) {
  return JSON.stringify(
    {
      partyId,
      exportedAt: new Date().toISOString(),
      chars: read('chars', partyId),
      audit: read('audit', partyId),
      config: read('config', partyId),
    },
    null,
    2,
  );
}

/**
 * Restore a party from a JSON string produced by exportParty().
 * Overwrites the current data for this partyId.
 */
export function importParty(partyId, json) {
  const data = JSON.parse(json);
  if (data.chars)  { write('chars',  partyId, data.chars);  notify('chars',  partyId); }
  if (data.audit)  { write('audit',  partyId, data.audit);  notify('audit',  partyId); }
  if (data.config) { write('config', partyId, data.config); notify('config', partyId); }
}
