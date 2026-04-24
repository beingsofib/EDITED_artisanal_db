#!/usr/bin/env node
/*
 * validate_homebrew_generator.js
 *
 * Sanity checker for homebrew_generator.js (and any other file built on the
 * same parseInput() contract).
 *
 * Checks performed:
 *   1. Every {placeholder} reference resolves to a category defined somewhere
 *      in the provided files (the main file alone, or the main file + any
 *      external consumer HTML files you pass in).
 *   2. No category has exact-duplicate item lines (unless they use the ^N
 *      weight suffix — in which case the weight is what controls multiplicity).
 *   3. Every category has at least one item.
 *   4. Weight syntax ^N only appears at end-of-line and N is a positive
 *      integer.
 *   5. Item lines are indented with exactly two spaces (style consistency).
 *   6. No stray leftover old plural names that were meant to be renamed
 *      (configurable — edit OLD_NAMES_TO_WARN below if desired).
 *
 * Usage:
 *   node validate_homebrew_generator.js [path/to/homebrew_generator.js ...] [--with-consumers ../custom_generators]
 *
 * Default target if no argument is given:
 *   ./homebrew_generator.js
 *
 * Exit status: 0 if clean (warnings OK), 1 if errors were found.
 */

const fs = require('fs');
const path = require('path');

// ---- Configuration ---------------------------------------------------------

// Optional: names that should never reappear (legacy plurals). Leave empty
// if you don't want this check.
const OLD_NAMES_TO_WARN = [
    'swords', 'blunt_weapons', 'pub_names',
    'facial_features', 'visual_characteristics',
];

// ---- Argument parsing ------------------------------------------------------

const args = process.argv.slice(2);
let consumerDir = null;
const targets = [];
for (let i = 0; i < args.length; i++) {
    if (args[i] === '--with-consumers') {
        consumerDir = args[++i];
    } else {
        targets.push(args[i]);
    }
}
if (targets.length === 0) {
    targets.push(path.join(__dirname, 'homebrew_generator.js'));
}

// ---- Helpers ---------------------------------------------------------------

/**
 * Extract the content of a template literal assigned like
 *   const SOMETHING = `...`;
 * Returns the body string, or null if no template literal is found.
 */
function extractTemplateBody(src) {
    const match = src.match(/=\s*`\n?([\s\S]*?)\n?`\s*;/);
    return match ? match[1] : null;
}

/**
 * Parse a parseInput-compatible body into { categoryName: [items] }.
 * Item lines are trimmed. Weighted items ("foo ^3") are kept as-is with the
 * weight suffix — validation functions inspect the suffix themselves.
 */
function parse(body) {
    const result = {};
    let current = null;
    for (const rawLine of body.split('\n')) {
        if (!rawLine.trim()) { continue; }
        if (!rawLine.startsWith(' ')) {
            current = rawLine.trim().replace(/:$/, '');
            if (!(current in result)) { result[current] = []; }
        } else if (current !== null) {
            result[current].push(rawLine);
        }
    }
    return result;
}

function extractPlaceholders(text) {
    const refs = new Set();
    const re = /\{([a-z_][a-z_0-9]*)\}/g;
    let m;
    while ((m = re.exec(text)) !== null) { refs.add(m[1]); }
    return refs;
}

// ---- Run -------------------------------------------------------------------

const errors = [];
const warnings = [];

// Accumulate all defined category names across all target files.
const allDefinitions = new Set();
const parsedByFile = {};

for (const target of targets) {
    const abs = path.resolve(target);
    if (!fs.existsSync(abs)) {
        errors.push(`File not found: ${abs}`);
        continue;
    }
    const src = fs.readFileSync(abs, 'utf8');
    const body = extractTemplateBody(src);
    if (body === null) {
        errors.push(`${target}: no template literal assignment found`);
        continue;
    }
    const cats = parse(body);
    parsedByFile[target] = { src, body, cats };
    for (const name of Object.keys(cats)) { allDefinitions.add(name); }
}

// Run per-file checks
for (const target of Object.keys(parsedByFile)) {
    const { src, body, cats } = parsedByFile[target];
    const rel = path.relative(process.cwd(), target) || target;

    // Check 3: empty categories
    for (const [name, items] of Object.entries(cats)) {
        if (items.length === 0) {
            errors.push(`${rel}: category "${name}" has no items`);
        }
    }

    // Check 2: duplicate items within a category (strict equality on trimmed item)
    for (const [name, items] of Object.entries(cats)) {
        const counts = new Map();
        for (const raw of items) {
            const key = raw.trim();
            counts.set(key, (counts.get(key) || 0) + 1);
        }
        for (const [entry, n] of counts) {
            if (n > 1) {
                // Don't flag lines that already have a weight suffix
                if (/\s*\^\d+$/.test(entry)) { continue; }
                warnings.push(`${rel}: "${name}" has ${n} identical entries — consider using "${entry} ^${n}" instead: "${entry.slice(0, 70)}${entry.length > 70 ? '…' : ''}"`);
            }
        }
    }

    // Check 4: malformed weight suffixes
    let lineNo = 0;
    for (const rawLine of body.split('\n')) {
        lineNo++;
        const trimmed = rawLine.trim();
        if (!trimmed) { continue; }
        // Find any ^ that isn't followed by end-of-line positive int
        const caretMatches = trimmed.match(/\^[^\s]*/g) || [];
        for (const c of caretMatches) {
            // Accept exactly ^N at EOL; permit ^ inside content otherwise.
            if (trimmed.endsWith(c) && !/^\^\d+$/.test(c)) {
                errors.push(`${rel}: malformed weight syntax at end of line: "${trimmed}"`);
            }
        }
    }

    // Check 5: item-line indentation (expect exactly two spaces)
    {
        let bad = 0;
        for (const rawLine of body.split('\n')) {
            if (/^\s+\S/.test(rawLine)) {
                const leading = rawLine.match(/^(\s+)/)[1];
                if (leading !== '  ') { bad++; }
            }
        }
        if (bad > 0) {
            warnings.push(`${rel}: ${bad} item line(s) are not indented with exactly two spaces`);
        }
    }

    // Check 1: placeholders that reference categories. Look in the parseInput
    // body only (comments in .js outside the template don't matter).
    const refs = extractPlaceholders(body);
    for (const name of refs) {
        if (!allDefinitions.has(name)) {
            errors.push(`${rel}: {${name}} is referenced but never defined`);
        }
    }

    // Check 6: legacy plural names
    for (const oldName of OLD_NAMES_TO_WARN) {
        if (cats[oldName]) {
            warnings.push(`${rel}: legacy plural category "${oldName}" is still defined — rename to singular?`);
        }
        if (refs.has(oldName)) {
            warnings.push(`${rel}: legacy plural placeholder {${oldName}} is still referenced`);
        }
    }
}

// Optional: scan consumer HTML files for placeholder references that don't
// resolve to any known category.
if (consumerDir) {
    const absDir = path.resolve(consumerDir);
    if (!fs.existsSync(absDir)) {
        errors.push(`Consumer directory not found: ${absDir}`);
    } else {
        function walk(dir) {
            const out = [];
            for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
                const full = path.join(dir, entry.name);
                if (entry.isDirectory()) { out.push(...walk(full)); }
                else if (entry.isFile() && entry.name.endsWith('.html')) { out.push(full); }
            }
            return out;
        }
        for (const fp of walk(absDir)) {
            const src = fs.readFileSync(fp, 'utf8');
            if (!src.includes('homebrew_generator.js')) { continue; }
            // Consumer pages typically define a local dataText template literal.
            // Extract any template literal in <script> tags and search placeholders.
            const tplMatches = src.match(/`\n?[\s\S]*?\n?`/g) || [];
            const rel = path.relative(process.cwd(), fp) || fp;
            for (const tpl of tplMatches) {
                const refs = extractPlaceholders(tpl);
                for (const name of refs) {
                    if (!allDefinitions.has(name)) {
                        // Also parse any category declarations in the local template
                        // before flagging — the consumer may define its own categories.
                        const local = parse(tpl.slice(1, -1));
                        if (!(name in local)) {
                            errors.push(`${rel}: {${name}} is not defined in the page or in the shared data`);
                        }
                    }
                }
                // Also check legacy plurals in consumer templates
                for (const oldName of OLD_NAMES_TO_WARN) {
                    if (refs.has(oldName)) {
                        warnings.push(`${rel}: legacy plural placeholder {${oldName}} is still referenced`);
                    }
                }
            }
        }
    }
}

// ---- Report ----------------------------------------------------------------

if (warnings.length) {
    console.log('Warnings:');
    for (const w of warnings) { console.log('  ' + w); }
    console.log('');
}
if (errors.length) {
    console.log('Errors:');
    for (const e of errors) { console.log('  ' + e); }
    console.log('');
    console.log(`FAIL — ${errors.length} error(s), ${warnings.length} warning(s)`);
    process.exit(1);
} else {
    console.log(`OK — ${warnings.length} warning(s), no errors. Defined categories: ${allDefinitions.size}.`);
    process.exit(0);
}
