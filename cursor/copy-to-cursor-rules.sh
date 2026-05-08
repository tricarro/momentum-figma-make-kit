#!/usr/bin/env bash
# Copy guidance/*.mdc and guidance/components/*.mdc into .cursor/rules/ with flat names.
# Run from repo root: ./guidance/copy-to-cursor-rules.sh
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DEST="$ROOT/.cursor/rules"
mkdir -p "$DEST"
shopt -s nullglob
for f in "$ROOT/guidance"/*.mdc; do
  cp "$f" "$DEST/"
done
for f in "$ROOT/guidance/components"/*.mdc; do
  base="$(basename "$f")"
  cp "$f" "$DEST/components-${base}"
done
echo "Copied guidance rules to $DEST"
