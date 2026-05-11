# Cursor rules — Momentum Design System

This folder holds **Cursor project rules** (`.mdc`) translated from [`../../figme-make/guidelines/`](../../figme-make/guidelines/). They encode the same guardrails as the Figma Make guidelines—setup, tokens, layout/typography, component usage—but with Cursor-oriented wording so designers and builders can **vibe code** consistently with Momentum.

## Installing rules for Cursor

Cursor loads project rules only from **`.cursor/rules/*.mdc`**. Files in `cursor/rules/` (this folder) are **not** applied automatically until you copy or symlink them into `.cursor/rules/`.

### Option A — helper script (recommended)

Flattens `cursor/rules/components/*.mdc` into `.cursor/rules/` with a `components-` prefix so every rule file sits at the top level (works even if your Cursor version ignores nested rule folders):

```bash
./cursor/rules/copy-to-cursor-rules.sh
```

### Option B — manual copy

Copy `cursor/rules/*.mdc` into `.cursor/rules/` and either copy `cursor/rules/components/*.mdc` into `.cursor/rules/components/` **or** rename with a `components-` prefix if nested folders are not picked up.

## Frontmatter conventions

| Rule set | `alwaysApply` | `globs` |
|----------|----------------|---------|
| [`guidelines.mdc`](guidelines.mdc) — core guardrails | `true` | — |
| [`setup.mdc`](setup.mdc), [`tokens.mdc`](tokens.mdc), [`styles.mdc`](styles.mdc) | `false` | `**/*.{css,tsx,jsx}` |
| [`components.mdc`](components.mdc) | `false` | `**/*.{tsx,jsx}` |
| [`components/*.mdc`](components/) — per-component guidance | **`false` (required)** | `**/*.{tsx,jsx}` |

Per-component rules must **never** use `alwaysApply: true`; they should only attach when matching files are in scope via **`globs`**.

**Note:** Many component rules share the same broad glob. Cursor may still attach several component rules while you edit TSX; narrowing globs later (per product folder) is optional.

## Mirror layout

Paths mirror the source guidelines:

- `Guidelines.md` → `guidelines.mdc`
- `setup.md` → `setup.mdc`
- `components/button.md` → `components/button.mdc`

Relative links inside these files point at sibling `.mdc` files under `cursor/rules/`.
