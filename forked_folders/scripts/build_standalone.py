#!/usr/bin/env python3
"""
build_standalone.py — rebuild ttrpg-inventory.html from the latest Vite build.

Usage (from forked_folders/):
    python3 scripts/build_standalone.py

Prerequisites:
    A fresh dist/ must already exist. If it doesn't, build it first:
        cd ttrpg-inventory && npm install && npm run build
"""
import os
import sys
import glob
import datetime

HERE     = os.path.dirname(os.path.abspath(__file__))
ROOT     = os.path.dirname(HERE)                                 # forked_folders/
DIST     = os.path.join(ROOT, 'ttrpg-inventory', 'dist')
ASSETS   = os.path.join(DIST, 'assets')
OUT      = os.path.join(ROOT, 'ttrpg-inventory.html')

def main():
    js_files  = glob.glob(os.path.join(ASSETS, '*.js'))
    css_files = glob.glob(os.path.join(ASSETS, '*.css'))

    if not js_files or not css_files:
        print(f"ERROR: No built assets found in {ASSETS}")
        print("Run:  cd ttrpg-inventory && npm install && npm run build")
        sys.exit(1)

    js_src  = open(js_files[0],  encoding='utf-8').read()
    css_src = open(css_files[0], encoding='utf-8').read()

    built = datetime.datetime.now().strftime('%Y-%m-%d')

    html = f"""<!doctype html>
<!--
  TTRPG Party Inventory — standalone single-file version
  ======================================================
  Open this file directly in any browser. No server, no installation required.

  All data is stored in your browser's localStorage, keyed by party ID (the
  UUID in the URL hash). Data never leaves your device.

  Source lives in ttrpg-inventory/src/. To rebuild this file after making
  source changes:
    cd ttrpg-inventory && npm install && npm run build
    python3 ../scripts/build_standalone.py

  Built: {built}
-->
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>TTRPG Inventory</title>
    <style>
{css_src}
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script>
{js_src}
    </script>
  </body>
</html>"""

    open(OUT, 'w', encoding='utf-8').write(html)
    size_kb = os.path.getsize(OUT) // 1024
    print(f"✓  Written {OUT}  ({size_kb} KB)")

if __name__ == '__main__':
    main()
