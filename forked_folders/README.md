# forked_folders

A homebrew fork of the [5e Artisanal Database](https://github.com/SlyFlourish/5e_artisanal_database) by Michael E. Shea (SlyFlourish.com), licensed CC-BY-4.0. This folder contains custom generators, tools, and content layered on top of the upstream project, kept in a single subfolder so the upstream tree can be re-pulled without losing local work.

## Layout

```
forked_folders/
├── index.html                 # Homebrew landing page — bookmark this
├── homebrew.html              # Legacy redirect → index.html
├── css_js/                    # Pinned upstream copies (do NOT overwrite from upstream blindly)
├── custom_css_js/             # Homebrew JS (homebrew_generator.js, homebrew_shadowdark.js)
├── custom_generators/         # Homebrew HTML generators (villages, towns, NPCs, …)
│   ├── city_generators/       # City district generators
│   ├── shadowdark/            # Shadowdark-specific generators
│   └── names/
├── custom_tools/              # Homebrew tools (combat tracker, …)
├── hooks/                     # Git hook scripts (pre-commit validator — see README)
├── dyson_archive/             # Local Dyson Logos commercial map gallery
├── forgotten_realms/          # Forgotten Realms reference data
├── literary-generators/       # Bible/Shakespeare/Classics text generator
├── saved_files_for_update/    # Backup of files that get overwritten on upstream update
└── shop_catalog.pdf, components.pdf
```

## Bookmark `index.html`, not `homebrew.html`

`forked_folders/index.html` is the canonical landing page for the homebrew tools and generators. `homebrew.html` is a meta-refresh redirect kept around so older bookmarks pointing at the upstream `homebrew.html` filename continue to work.

## Update workflow (re-pulling upstream)

When the upstream 5e Artisanal Database is updated and you want to merge changes:

1. Pull or copy the new upstream tree into the parent project (`EDITED_artisanal_db/`).
2. **Do not let the upstream copy overwrite the pinned files in `forked_folders/css_js/`.** Those are intentionally pinned because `custom_css_js/homebrew_generator.js` depends on the exact `parseInput()` and `addCommonDataTo()` APIs in the version that was last audited (see the dependency note at the top of `custom_css_js/homebrew_generator.js` for the audit date). If you want to refresh them, do it deliberately and re-run the homebrew generators to confirm nothing broke.
3. Restore any custom files that the upstream replaced. `saved_files_for_update/` exists for exactly this — see `saved_files_for_update/README.md` for the list of monsters and spells that need to be copied back into the main database after each upstream merge.

## Pinned vs. homebrew files

| Folder | Source | Update policy |
|---|---|---|
| `css_js/` | Upstream copy | Pinned — only update with care, re-test homebrew generators after |
| `custom_css_js/` | Homebrew | Owned by this fork |
| `custom_generators/` | Homebrew | Owned by this fork |
| `custom_tools/` | Homebrew | Owned by this fork |
| `saved_files_for_update/` | Homebrew backup | Files here need to be re-copied into the upstream tree after each update |

## Before committing changes to homebrew_generator.js or custom_generators/

Run the validator to catch broken `{placeholder}` references, duplicate items, and weight-syntax errors before they reach the repo:

```bash
# From the forked_folders/ directory:
node custom_css_js/validate_homebrew_generator.js \
     custom_css_js/homebrew_generator.js \
     --with-consumers custom_generators
```

A pre-commit hook that runs this automatically is included at `hooks/pre-commit`. Install it once from the repo root (`EDITED_artisanal_db/`):

```bash
cp forked_folders/hooks/pre-commit .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit
```

The hook is a no-op when no homebrew generator files are staged, so it won't slow down unrelated commits.

## Conventions for new generators

When adding a new generator under `custom_generators/`:

- Breadcrumb format (top-level): `5e Artisanal Database → Homebrew Generators → <Generator Name>`, with the first link pointing to `../../index.html` and the second to `../index.html`.
- Breadcrumb format (one level deeper, e.g. `shadowdark/`): same structure, but `../../../index.html` and `../../index.html`.
- Stylesheet link: `../../css_js/5eadb.css` (or `../../../css_js/5eadb.css` one level deeper).
- Add the new generator to `index.html` under the appropriate `<h2>` section.

## License

Homebrew content in this folder is released under [CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/) unless a specific file says otherwise. Upstream content carries the upstream CC-BY-4.0 license — see `custom_css_js/homebrew_generator.js` for the required attribution statement.
