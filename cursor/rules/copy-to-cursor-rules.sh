#!/usr/bin/env bash
# Copy cursor/rules/*.mdc and cursor/rules/components/*.mdc into .cursor/rules/ with flat names.
# Run from repo root: ./cursor/rules/copy-to-cursor-rules.sh
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
DEST="$ROOT/.cursor/rules"
mkdir -p "$DEST"
shopt -s nullglob
for f in "$ROOT/cursor/rules"/*.mdc; do
  cp "$f" "$DEST/"
done
for f in "$ROOT/cursor/rules/components"/*.mdc; do
  base="$(basename "$f")"
  cp "$f" "$DEST/components-${base}"
done
echo "Copied cursor rules to $DEST"
