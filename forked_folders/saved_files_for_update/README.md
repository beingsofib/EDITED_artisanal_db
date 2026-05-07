# saved_files_for_update

This folder stores custom files that need to be re-added to the database after the main fork is updated from upstream. When an update replaces or overwrites files in the main database, copy the relevant files from here back into their correct locations.

## Contents

- `custom_monsters/` — Custom monster entries (JS and Markdown formats), organised by source book
- `custom_magic_items/` — Custom magic item entries (JS and Markdown formats), organised by source book
- `custom_spells/` — Custom spell entries (JS and Markdown formats), organised by source book

## Where each folder goes after an upstream update

After pulling a fresh upstream copy into `EDITED_artisanal_db/`, run these copies to restore custom content. All paths are relative to `EDITED_artisanal_db/` (the project root, one level above `forked_folders/`).

### Custom Monsters

| Source (in this folder) | Destination (in main DB) |
|---|---|
| `custom_monsters/js_files/custom_monster_index.js` | `monsters/custom/custom_monster_index.js` |
| `custom_monsters/js_files/<book>/*.js` | `monsters/custom/<book>/*.js` |
| `custom_monsters/md_files/` | kept here only — markdown source, not loaded by the DB |

> **Note:** `custom_monster_index.js` is loaded by the Combat Tracker at `forked_folders/custom_tools/combat_tracker/index.html` via the path `../../../monsters/custom/custom_monster_index.js`. If the index is missing after an update, the monster search in the tracker will be empty.

### Custom Magic Items

| Source (in this folder) | Destination (in main DB) |
|---|---|
| `custom_magic_items/<book>/*.js` | `magic_items/custom/<book>/*.js` |
| `custom_magic_items/<book>/*.md` | kept here only — markdown source, not loaded by the DB |

> **Note:** After copying, also check that `magic_items/custom/custom_magic_items_index.js` in the main DB is up to date. If the upstream overwrote it, merge in the entries from your backed-up copy or re-add them manually.

### Custom Spells

| Source (in this folder) | Destination (in main DB) |
|---|---|
| `custom_spells/js_files/*.js` | `spells/custom/*.js` |
| `custom_spells/<book>/*.js` | `spells/custom/<book>/*.js` |
| `custom_spells/md_files/` | kept here only — markdown source, not loaded by the DB |

## Quick restore script

Run this from inside the `saved_files_for_update/` folder after an upstream update:

```bash
# From: EDITED_artisanal_db/forked_folders/saved_files_for_update/
DB=../..   # EDITED_artisanal_db root

# Monsters
cp custom_monsters/js_files/custom_monster_index.js  "$DB/monsters/custom/"
cp -r custom_monsters/js_files/*/                    "$DB/monsters/custom/"

# Magic items (book subdirs)
for book in custom_magic_items/*/; do
  book_name=$(basename "$book")
  mkdir -p "$DB/magic_items/custom/$book_name"
  cp "$book"*.js "$DB/magic_items/custom/$book_name/" 2>/dev/null || true
done

# Spells
cp -r custom_spells/js_files/*.js  "$DB/spells/custom/" 2>/dev/null || true
for book in custom_spells/*/; do
  book_name=$(basename "$book")
  [[ "$book_name" == "js_files" || "$book_name" == "md_files" ]] && continue
  mkdir -p "$DB/spells/custom/$book_name"
  cp "$book"*.js "$DB/spells/custom/$book_name/" 2>/dev/null || true
done

echo "Restore complete. Check magic_items/custom/custom_magic_items_index.js manually."
```

> Verify the script works on a dry run (`echo` instead of `cp`) before running for real, especially if the upstream changed its directory layout.
