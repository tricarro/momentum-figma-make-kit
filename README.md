# Momentum Figma Make Kit

Repository for **Momentum Design System** guidance used when prototyping in **Figma Make** (and similar AI-assisted flows). Most of the content lives under **`figma-make-files/`**: markdown guidelines for humans and assistants, plus a small **Vite + React** package that pins `@momentum-design/*` versions and applies bundler fixes needed for icons and brand visuals in Make.

For **Cursor** (and consistent AI-assisted coding in the IDE), translated **project rules** live under **[`guidance/`](guidance/README.md)** (`.mdc` files). See [`guidance/README.md`](guidance/README.md) for how to copy them into `.cursor/rules/` and how to regenerate them from `figma-make-files/guidelines/`.

---

## What lives in `figma-make-files/`

### Guidelines (`guidelines/`)

| Resource | Role |
|----------|------|
| [`guidelines/Guidelines.md`](figma-make-files/guidelines/Guidelines.md) | Entry point: audience (AI + Cisco builders), documentation map, Momentum-only guardrails, do/don’t summary |
| [`guidelines/setup.md`](figma-make-files/guidelines/setup.md) | Install, required CSS bundles, root/body classes, font smoothing, `ThemeProvider` / `IconProvider`, React import path (`@momentum-design/components/dist/react`), light/dark theme classes |
| [`guidelines/tokens.md`](figma-make-files/guidelines/tokens.md) | `var(--mds-…)` tokens and semantic text colors |
| [`guidelines/styles.md`](figma-make-files/guidelines/styles.md) | Layout, radius, `Text` typography and `type` values |
| [`guidelines/components.md`](figma-make-files/guidelines/components.md) | Component usage, full React export list from the pinned `@momentum-design/components` build, global icon `name` rules |
| [`guidelines/components/*.md`](figma-make-files/guidelines/components/) | **80** per-component files (lowercase names matching exports): props, a11y notes, examples, checklists; many link to **Momentum Storybook** on momentum.design for authoritative behavior |

Start at **Guidelines.md**, then **setup.md** for a new prototype; use **components.md** and the matching `./components/<name>.md` while building.

### NPM package and toolchain

[`figma-make-files/package.json`](figma-make-files/package.json) defines the private package **`@figma-make/momentum-figma-make-kit`**. It declares **Node ≥ 24.6**, **React 19**, **Vite 7**, and pinned **`@momentum-design/*`** dependencies (components, tokens, fonts, icons, illustrations, brand-visuals). The same versions are repeated under **`resolutions`** so the tree stays aligned.

Scripts: **`npm run dev`** / **`build`** / **`preview`**, **`npm run lint`**.

[`figma-make-files/vite.config.ts`](figma-make-files/vite.config.ts) registers custom **esbuild** and **Rollup** plugins that rewrite **dynamic imports** inside Momentum’s **Icon** and **Brandvisual** bundles so **`@momentum-design/icons`** and **`@momentum-design/brand-visuals`** resolve correctly when bundling for Figma Make.

[`figma-make-files/tsconfig.json`](figma-make-files/tsconfig.json) type-checks **`src`** and **`vite.config.ts`**.

### CSS scaffolding (`src/styles/` and root CSS files)

- **[`src/styles/index.css`](figma-make-files/src/styles/index.css)** — Imports Momentum font and token CSS (`core`, `components`, `typography` complete bundles), then **`tailwind.css`** and **`theme.css`**.
- **`theme.css`** — Maps **`var(--mds-…)`** tokens to semantic variables (for example surface, primary, destructive) when the document uses the expected **Momentum scope/theme classes** (see comments in that file and **setup.md**).
- **`tailwind.css`** / **`fonts.css`** — Tailwind and font wiring used with the stack above.
- **[`default_shadcn_theme.css`](figma-make-files/default_shadcn_theme.css)** — Optional **shadcn / Tailwind** bridge: semantic colors expressed via Momentum tokens and base layer usage; same requirement for **`mds-core`** and Webex theme classes on an ancestor.

Guidelines still expect **Momentum tokens and components first**; avoid ad hoc styling on design-system surfaces (see **Guidelines.md**).

---

## Working with this repository

Edit and extend markdown under **`figma-make-files/guidelines/`** so Figma Make and the Momentum team share one source of truth. Keep **`package.json`** resolutions in sync when bumping **`@momentum-design/*`** versions; **`components.md`** documents the React export list for the pinned components release.

---

## External references

- **Momentum Design System** — component APIs and live examples: links throughout **`guidelines/`**, often to **https://momentum.design/storybook-static/**.
- **Package versions** — see [`figma-make-files/package.json`](figma-make-files/package.json).

*Momentum Design System — Cisco. For internal prototyping use.*
