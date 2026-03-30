# Updating from Upstream (lazy_gm_tools)

This fork is set up with two git remotes:

- **origin** — your fork: `https://github.com/beingsofib/EDITED_artisanal_db.git`
- **upstream** — Sly Flourish's base: `https://github.com/beingsofib/lazy_gm_tools`

## What is yours vs. upstream

**Everything in these directories is yours — upstream will never overwrite it:**

| Path | Contents |
|------|----------|
| `forked_folders/` | All custom generators, your pinned engine copy, shadowdark content |
| `magic_items/custom/` | Custom magic item JS files + index |
| `monsters/custom/` | Custom monster JS files + index |
| `spells/custom/` | Custom spell JS files + index |

**Everything else is upstream and may change on each update.**

## Files to inspect before merging any upstream changes

Before running `git merge upstream/main` (or equivalent), check these three files:

### 1. `css_js/generator.js`

This is the template engine your generators depend on. Check that the public API functions are unchanged:

- `addCommonDataTo(dataText)` — must still exist with the same signature
- `parseInput(text)` — must still exist

If either has changed, you'll need to update `forked_folders/custom_css_js/homebrew_generator.js`
and re-audit the dependency note comment at the top of that file before merging.

### 2. `css_js/custom-content-loader.js`

This file defines the variable names your custom indexes must export. If upstream renames any of these,
custom content will silently disappear from the databases (no error shown):

| Variable | Used by |
|----------|---------|
| `customMagicItemsData` | `magic_items/custom/custom_magic_items_index.js` |
| `customMonsterCombatStats` | `monsters/custom/custom_monster_index.js` |
| `customSpellsData` | `spells/custom/custom_spells_index.js` |

If any variable name changes, update the matching `const` declaration in the relevant custom index file.

### 3. `index.html`

The root index page links to your homebrew generators:

```html
<a href="./forked_folders/homebrew.html">Homebrew Encounters</a>
```

If upstream regenerates `index.html` and removes this line, the generators become unlinked from the
home screen. However, `forked_folders/index.html` is your self-contained fallback — bookmark it
directly and you're independent of whatever happens to the root page.

## Safe update procedure

```bash
# 1. Fetch upstream changes without merging yet
git fetch upstream

# 2. See what changed
git diff HEAD upstream/main -- css_js/generator.js
git diff HEAD upstream/main -- css_js/custom-content-loader.js
git diff HEAD upstream/main -- index.html

# 3. If the three files above look safe, merge
git merge upstream/main

# 4. Resolve any conflicts (your files in forked_folders/ etc. won't conflict)

# 5. Push to your fork
git push origin main
```

## Pinned engine copy

`forked_folders/css_js/` contains pinned copies of the three files all custom generators load:

- `generator.js` — the template engine
- `common_generator_data.js` — shared common tables
- `5eadb.css` — stylesheet

When you confirm upstream's `css_js/generator.js` is safe (step 2 above), copy it over to keep
the pinned copy in sync:

```bash
cp css_js/generator.js forked_folders/css_js/generator.js
cp css_js/common_generator_data.js forked_folders/css_js/common_generator_data.js
```

**Important — local modification to generator.js:** The pinned copy has one deliberate change from
upstream: `generateContent()` iterates 3 times instead of 10. After copying from upstream, re-apply
this by editing `forked_folders/css_js/generator.js` line ~233:

```js
// change this:
for (let i = 0; i < 10; i++) {
// to this:
for (let i = 0; i < 3; i++) {
```

Then update the audit date comment at the top of `forked_folders/custom_css_js/homebrew_generator.js`.
