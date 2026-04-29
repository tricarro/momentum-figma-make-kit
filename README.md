# Momentum Figma Make Kit

Working repository for **Momentum Design System** guidance used when prototyping in **Figma Make** (and related AI-assisted flows). It turns Cisco’s published `@momentum-design/*` packages into **clear rules**: tokens, setup, components, icons, and per-component notes aligned with Storybook.

---

## What’s here

| Area | Purpose |
|------|---------|
| [`figma-make-files/guidelines/Guidelines.md`](figma-make-files/guidelines/Guidelines.md) | Start here — audience, documentation map, do/don’t summary |
| [`figma-make-files/guidelines/setup.md`](figma-make-files/guidelines/setup.md) | Install, CSS bundles, `ThemeProvider` / `IconProvider`, React import path |
| [`figma-make-files/guidelines/tokens.md`](figma-make-files/guidelines/tokens.md), [`styles.md`](figma-make-files/guidelines/styles.md) | Design tokens and layout / typography |
| [`figma-make-files/guidelines/components.md`](figma-make-files/guidelines/components.md) | Component usage, React export list, icon rules |
| [`figma-make-files/guidelines/components/`](figma-make-files/guidelines/components/) | One markdown file per component (props, a11y, examples, checklists) |

Guidelines target **Cisco internal prototyping**: Momentum components and tokens only — no ad hoc CSS values, third-party UI kits, or Tailwind for design-system surfaces (see Guidelines for full rules).

---

## Using the guidelines

This repository is used for the Momentum Team to edit and save information related to Figma Make. All guidance should be available inside Momentum's Figma Make Kit.

---

## External references

- **Momentum Design System** — components, tokens, and Storybook as linked from the guideline files.
- Package versions and resolutions are recorded in [`figma-make-files/package.json`](figma-make-files/package.json).
