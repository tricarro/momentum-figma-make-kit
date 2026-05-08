#!/usr/bin/env bash
# Copy cursor/*.mdc and cursor/components/*.mdc into .cursor/rules/ with flat names.
# Run from repo root: ./cursor/copy-to-cursor-rules.sh
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DEST="$ROOT/.cursor/rules"
mkdir -p "$DEST"
shopt -s nullglob
for f in "$ROOT/cursor"/*.mdc; do
  cp "$f" "$DEST/"
done
for f in "$ROOT/cursor/components"/*.mdc; do
  base="$(basename "$f")"
  cp "$f" "$DEST/components-${base}"
done
echo "Copied cursor rules to $DEST"
