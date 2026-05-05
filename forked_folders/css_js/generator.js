
/*
This code is released under a CC0 1.0 Universal license.
https://creativecommons.org/publicdomain/zero/1.0/

You can copy, modify, and distribute this tool, even for commercial purposes,
all without asking permission.
*/

function parseInput(text) {
    const lines = text.trim().split('\n');
    const result = {};
    let currentKey = null;
    for (let line of lines) {
        if (!line.trim()) continue;
        if (!line.startsWith(' ')) {
            currentKey = line.trim().replace(':', '');
            result[currentKey] = [];
        } else if (currentKey) {
            const trimmed = line.trim();
            // Handle weighted items like "item ^3" (appears 3 times)
            const weightMatch = trimmed.match(/^(.+?)\s*\^(\d+)$/);
            if (weightMatch) {
                const item = weightMatch[1];
                const weight = parseInt(weightMatch[2]);
                for (let i = 0; i < weight; i++) {
                    result[currentKey].push(item);
                }
            } else {
                result[currentKey].push(trimmed);
            }
        }
    }
    return result;
}

function pick(list) {
    return list[Math.floor(Math.random() * list.length)];
}

function addCommasToNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Helper function to process quantity ranges like [[100-500]]
function processQuantityRanges(text, useCommas = false) {
    return text.replace(/\[\[(\d+)-(\d+)\]\]/g, (match, min, max) => {
        const value = Math.floor(Math.random() * (parseInt(max) - parseInt(min) + 1)) + parseInt(min);
        return useCommas ? addCommasToNumber(value) : value.toLocaleString();
    });
}

// Helper function to find matching closing braces
function findMatchingCloseBrace(text, startIndex) {
    let braceCount = 0;
    for (let i = startIndex + 2; i < text.length - 1; i++) {
        if (text.substr(i, 2) === '{{') {
            braceCount++;
            i++; // Skip next character
        } else if (text.substr(i, 2) === '}}') {
            if (braceCount === 0) {
                return i;
            } else {
                braceCount--;
                i++; // Skip next character
            }
        }
    }
    return -1;
}

// Helper function to extract weight from content string
function extractWeight(content) {
    const weightMatch = content.match(/\s*\^(\d+)$/);
    const weight = weightMatch ? parseInt(weightMatch[1]) : 1;
    const cleanContent = content.replace(/\s*\^\d+$/, '');
    return { weight, cleanContent };
}

// Helper function to create weighted choices array
function createWeightedChoices(options, data, weight) {
    const choices = [];

    // Add all options except the last one
    for (let i = 0; i < options.length - 1; i++) {
        const table = data[options[i]];
        choices.push(table && table.length > 0 ? pick(table) : options[i]);
    }

    // Add the last option with weight
    const lastOption = options[options.length - 1];
    const lastTable = data[lastOption];
    const lastResult = lastTable && lastTable.length > 0 ? pick(lastTable) : lastOption;

    for (let i = 0; i < weight; i++) {
        choices.push(lastResult);
    }

    return choices;
}

// Helper function to process double brace choices like {{table1|table2}}
function processDoubleBraceChoices(text, data) {
    let result = text;
    let startIndex = 0;

    while (true) {
        const openIndex = result.indexOf('{{', startIndex);
        if (openIndex === -1) break;

        const closeIndex = findMatchingCloseBrace(result, openIndex);
        if (closeIndex === -1) break;

        const content = result.substring(openIndex + 2, closeIndex);
        const { weight, cleanContent } = extractWeight(content);

        // Split on | and clean up each option
        const options = cleanContent.split('|').map(option => {
            return option.replace(/^\{/, '').replace(/\}$/, '').trim();
        }).filter(option => option !== '');

        if (options.length > 1) {
            const choices = createWeightedChoices(options, data, weight);
            const selectedResult = choices[Math.floor(Math.random() * choices.length)];

            // Replace the match with the result
            result = result.substring(0, openIndex) + selectedResult + result.substring(closeIndex + 2);
            startIndex = openIndex + selectedResult.length;
        } else {
            startIndex = closeIndex + 2;
        }
    }

    return result;
}

// Helper function to process single brace choices like {"option1"|"option2"}
function processSingleBraceChoices(text, data) {
    return text.replace(/\{([^}]+)\}/g, (match, content) => {
        // Check if this contains pipe separator (multiple options)
        if (content.includes('|')) {
            const { weight, cleanContent } = extractWeight(content);

            // Split by pipes and handle both quoted and unquoted options
            const options = cleanContent.split('|').map(opt => {
                const trimmed = opt.trim();
                // Check if it's quoted
                const quoted = trimmed.match(/^"([^"]+)"$/);
                if (quoted) {
                    return quoted[1];
                }
                // Unquoted option - could be a table name or literal value
                return trimmed;
            });

            if (options.length > 1) {
                const choices = createWeightedChoices(options, data, weight);
                return choices[Math.floor(Math.random() * choices.length)];
            }
        }
        // If not a pipe choice, return original to be handled by table lookup
        return match;
    });
}

// Helper function to process quantity patterns like "X x {table}"
function processQuantityPatterns(text, data) {
    return text.replace(/(\d+)\s+x\s+\{([^}]+)\}/g, (match, quantity, tableName) => {
        const qty = parseInt(quantity);
        if (qty === 0) return ''; // Skip zero quantities

        const table = data[tableName];
        if (!table || !Array.isArray(table) || table.length === 0) {
            return match; // Return original if table not found
        }

        // For magic item tables, generate unique items; for gems/art, allow duplicates
        if (tableName.includes('magic_items') || tableName.includes('_themes') || tableName.includes('art')) {
            // Generate unique magic items
            const items = [];
            for (let i = 0; i < qty; i++) {
                const item = pick(table);
                items.push(item);
            }
            return items.join('<br>');
        } else {
            // For gems, art objects, etc., use the original behavior (allow duplicates)
            const item = pick(table);
            const result = `${qty} x ${item}`;
            return qty === 1 ? result.replace(' gemstones ', ' gemstone ') : result;
        }
    });
}

// Helper function to process simple table references like {tablename}
function processTableReferences(text, data) {
    return text.replace(/{(.*?)}/g, (_, key) => pick(data[key] || ['']));
}

// Main template filling function - now much cleaner but preserves all functionality!
function fillTemplate(template, data, useCommas = false) {
    let result = template;

    // Process template in multiple passes until no more changes
    let iterations = 0;
    const maxIterations = 10; // Safety limit to prevent infinite loops

    while ((result.includes('{') || result.includes('[[')) && iterations < maxIterations) {
        iterations++;

        // Process each type of template syntax
        result = processQuantityRanges(result, useCommas);
        result = processDoubleBraceChoices(result, data);
        result = processSingleBraceChoices(result, data);
        result = processQuantityPatterns(result, data);
        result = processTableReferences(result, data);
    }

    return result;
}

// Modify the function below for different outputs.
// Defaults to 3 returns in an ordered list.
// LOCAL MODIFICATION: upstream default is 10; changed to 3 for district generators.
// Re-apply this change after syncing from upstream (see UPDATING.md).
// LOCAL MODIFICATION: supports window.generateCount override (default 3).
//   When count is 1, outputs raw HTML with no <ol> wrapper (clean for district generators).
//   Set window.generateCount = 1 in any page that wants a single undecorated result.

function generateContent() {
    const parsed = parseInput(window.dataText || dataText);
    const templates = parsed.template || [''];
    delete parsed.template;

    const output = document.getElementById('output');
    // Respect UI selector first, then page override, then default of 3
    const countEl = document.getElementById('generateCount');
    const count = (countEl ? parseInt(countEl.value) : 0) || window.generateCount || 3;

    if (count === 1) {
        const template = pick(templates);
        const result = fillTemplate(template, parsed);
        output.innerHTML = result.charAt(0).toUpperCase() + result.slice(1);
    } else {
        let html = '<ol>';
        for (let i = 0; i < count; i++) {
            const template = pick(templates);
            const result = fillTemplate(template, parsed);
            const capitalizedResult = result.charAt(0).toUpperCase() + result.slice(1);
            html += '<li>' + capitalizedResult + '</li>';
        }
        html += '</ol>';
        output.innerHTML = html;
    }
    addCopyButton();
    addPinButton();
}

// Treasure-specific generator function
function generateTreasure() {
    // Check if we have a tier selector (treasure generator)
    const tierElement = document.getElementById('tier');
    if (!tierElement) {
        // Fall back to standard generation
        generateContent();
        return;
    }

    const tier = tierElement.value;
    const parsed = parseInput(window.dataText || dataText);
    const output = document.getElementById('output');

    let result = pick(parsed[tier]);

    // Process templates until no more changes, using comma formatting for treasure
    for (let i = 0; i < 10; i++) {
        const newResult = fillTemplate(result, parsed, true); // true = use comma formatting
        if (newResult === result) break;
        result = newResult;
    }

    // Format output as bulleted list
    const items = result.split('<br>')
        .map(item => item.trim())
        .filter(item => item !== '')
        .map(item => '- ' + item.charAt(0).toUpperCase() + item.slice(1));

    output.innerHTML = '<p>' + items.join('<br>') + '</p>';
    addCopyButton();
    addPinButton();
}

// Alias for backward compatibility
window.generate = generateTreasure;

// ---- UI enhancements (keyboard shortcut, copy button, count selector, favicon) ----

// Copy output text to clipboard — works over HTTP (no secure-context requirement).
function addCopyButton() {
    const output = document.getElementById('output');
    if (!output) return;

    let btn = document.getElementById('_copyBtn');
    if (!btn) {
        btn = document.createElement('button');
        btn.id = '_copyBtn';
        btn.style.cssText = 'margin-top:6px;font-size:14px;min-height:auto;padding:4px 14px;';
        output.insertAdjacentElement('afterend', btn);
    }
    btn.textContent = 'Copy';
    btn.onclick = () => {
        const text = output.innerText.trim();
        // Prefer Clipboard API (HTTPS/localhost); fall back to execCommand for HTTP.
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(() => flash(btn));
        } else {
            const ta = document.createElement('textarea');
            ta.value = text;
            ta.style.cssText = 'position:fixed;top:0;left:0;opacity:0;pointer-events:none';
            document.body.appendChild(ta);
            ta.focus(); ta.select();
            try { document.execCommand('copy'); } catch (_) {}
            document.body.removeChild(ta);
            flash(btn);
        }
    };
    function flash(b) {
        b.textContent = 'Copied!';
        setTimeout(() => { b.textContent = 'Copy'; }, 1500);
    }
}

// Inject count selector and favicon; wire up keyboard shortcut.
// Called once on page load. Safe to call multiple times (idempotent).
function injectGeneratorUI() {
    const output = document.getElementById('output');
    if (!output) return;

    // ── Favicon (d20 triangle) via inline SVG data URI — no path dependency ──
    if (!document.querySelector('link[rel="icon"]')) {
        const ico = document.createElement('link');
        ico.rel = 'icon';
        ico.type = 'image/svg+xml';
        ico.href = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpolygon points='16,2 30,29 2,29' fill='%23444'/%3E%3Ctext x='16' y='25' text-anchor='middle' fill='white' font-size='11' font-family='sans-serif' font-weight='bold'%3E20%3C/text%3E%3C/svg%3E";
        document.head.appendChild(ico);
    }

    // ── Count selector ──
    // Skip for pages that set window.generateCount (district picker, etc.)
    // and for the treasure generator which has its own tier selector.
    if (!window.generateCount && !document.getElementById('tier') && !document.getElementById('generateCount')) {
        const wrap = document.createElement('div');
        wrap.style.cssText = 'margin:6px 0 2px;';
        wrap.innerHTML =
            '<label style="font-size:16px">Results:&nbsp;' +
            '<select id="generateCount" style="font-size:16px;min-height:auto;padding:4px 10px;margin:0;">' +
            '<option value="1">1</option>' +
            '<option value="3" selected>3</option>' +
            '<option value="5">5</option>' +
            '<option value="10">10</option>' +
            '</select></label>';
        output.insertAdjacentElement('beforebegin', wrap);
    }

    // ── Pinned result banner ──
    injectPinnedBanner();

    // ── Keyboard shortcut: Space or R to reroll ──
    document.addEventListener('keydown', (e) => {
        // Don't fire when typing in a form field
        if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return;
        if (e.key === ' ' || e.key === 'r' || e.key === 'R') {
            e.preventDefault();
            if (document.getElementById('tier')) {
                generateTreasure();
            } else {
                generateContent();
            }
        }
    });
}

// ── Pin / unpin last result ──
// Each generator page gets its own localStorage key based on its URL path.
var _pinKey = 'pin:' + window.location.pathname;

function injectPinnedBanner() {
    if (document.getElementById('_pinnedBanner')) return;

    var banner = document.createElement('div');
    banner.id = '_pinnedBanner';
    banner.style.cssText =
        'display:none;border:2px solid #888;border-radius:4px;padding:10px 12px;' +
        'margin-bottom:12px;background:#f5f5e8;position:relative;font-size:16px;';
    banner.innerHTML =
        '<strong style="font-size:13px;color:#666;text-transform:uppercase;' +
        'letter-spacing:.05em;display:block;margin-bottom:6px;">📌 Pinned</strong>' +
        '<div id="_pinnedText"></div>' +
        '<button id="_unpinBtn" style="position:absolute;top:8px;right:8px;' +
        'font-size:12px;min-height:auto;padding:2px 10px;margin:0;" ' +
        'onclick="unpinResult()">Unpin</button>';

    // Dark-mode overrides via inline style won't fire automatically, so use a class
    document.head.insertAdjacentHTML('beforeend',
        '<style>@media(prefers-color-scheme:dark){' +
        '#_pinnedBanner{background:#2a2a1a!important;border-color:#666!important;color:#ddd!important}}</style>');

    const output = document.getElementById('output');
    output.parentNode.insertBefore(banner, output.parentNode.firstChild);

    loadPinnedResult();
}

function loadPinnedResult() {
    var saved = localStorage.getItem(_pinKey);
    var banner = document.getElementById('_pinnedBanner');
    if (!banner) return;
    if (saved) {
        document.getElementById('_pinnedText').innerHTML = saved;
        banner.style.display = 'block';
    } else {
        banner.style.display = 'none';
    }
}

function pinResult() {
    var output = document.getElementById('output');
    if (!output || !output.innerHTML.trim()) return;
    localStorage.setItem(_pinKey, output.innerHTML);
    loadPinnedResult();
    // Flash the pin button
    var btn = document.getElementById('_pinBtn');
    if (btn) { btn.textContent = 'Pinned!'; setTimeout(() => { btn.textContent = 'Pin'; }, 1500); }
}

function unpinResult() {
    localStorage.removeItem(_pinKey);
    var banner = document.getElementById('_pinnedBanner');
    if (banner) banner.style.display = 'none';
}

// Appends Pin button alongside the Copy button after each generation.
function addPinButton() {
    let btn = document.getElementById('_pinBtn');
    if (!btn) {
        btn = document.createElement('button');
        btn.id = '_pinBtn';
        btn.style.cssText = 'margin-top:6px;margin-left:4px;font-size:14px;min-height:auto;padding:4px 14px;';
        btn.onclick = pinResult;
        // Insert after the copy button if present, otherwise after output
        const copyBtn = document.getElementById('_copyBtn');
        const output = document.getElementById('output');
        const anchor = copyBtn || output;
        anchor.insertAdjacentElement('afterend', btn);
    }
    btn.textContent = 'Pin';
}

// Generate samples on page load to show functionality
window.addEventListener('load', function() {
    injectGeneratorUI();
    // Check if this is a treasure generator
    if (document.getElementById('tier')) {
        generateTreasure();
    } else {
        generateContent();
    }
});
