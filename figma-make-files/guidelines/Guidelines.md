# Momentum Design System — Figma Make Guidelines

Guidelines for using the Momentum Design System (components, tokens, and assets) within Figma Make. Details are split across the files below so setup, tokens, layout/type, and components are easy to find.

---

## Who you are

You are a Cisco product designer prototyping with the Momentum Design System. All UI you produce must use Momentum components and tokens — no custom CSS values, no third-party component libraries, no Tailwind.

---

## Documentation map

| Topic | File |
|--------|------|
| Install, CSS bundles, body classes, font smoothing, providers, import path, light/dark theme on root | [setup.md](./setup.md) |
| `var(--mds-…)` tokens, semantic text colors | [tokens.md](./tokens.md) |
| Layout, corner radius, `Text` typography and `type` values | [styles.md](./styles.md) |
| Component usage, published React export list, global icon `name` rules | [components.md](./components.md) |
| One component at a time (props, a11y, checklists) | [components/](./components/) (e.g. `./components/button.md`) |

Start with [setup.md](./setup.md) for a new prototype, then use [components.md](./components.md) and the per-component files as you build.

---

## Rules summary

| Do | Don't |
|----|--------|
| Import tokens as CSS bundles | Hardcode colors |
| Use `@momentum-design/components/react` | Use native HTML elements for interactive UI |
| Use `Text` for all type | Use raw `<p>`, `<h1>`, `<span>` |
| Use `Icon` for all icons | Use emoji or third-party icon libraries |
| Use CSS custom properties for all values | Use Tailwind, Bootstrap, or custom CSS classes |
| Compose layout with flexbox + token spacing | Build layout components from scratch |

---

*Momentum Design System — Cisco. For internal prototyping use.*
