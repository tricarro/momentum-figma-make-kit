# Icon (Momentum) — Figma Make guidance

**Icon** loads an SVG from the **IconProvider**’s **URL** and renders it by **`name`**. Sizing is driven by **`size`** and **`lengthUnit`**. You must use **decorative**, **informative** (label + `role="img"`), or **informative standalone** (label, **`tabIndex={0}`**, and usually a **Tooltip**) per the a11y model in the [package docs](https://momentum.design/storybook-static/index.html?path=/docs/components-icon-icon--docs). Reference: [Storybook — Icon / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-icon-icon--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-icon-icon--example).

---

## Import

```jsx
import { Icon } from "@momentum-design/components/react";
```

Use `@momentum-design/components/react` only, not `@momentum-design/components` without `/react` (per [setup.md](../setup.md)).

---

## What it is

- **IconProvider** at the app root supplies the **sprite or fetch URL**; icons **fail** silently if not found.  
- **Color:** **`--mdc-icon-fill-color`**; border radius: **`--mdc-icon-border-radius`**.  
- **Decorative:** no **aria** needed; keep them **hidden** from the accessibility tree.  
- **Meaning** not in adjacent text: set **`dataAriaLabel`** (or the documented equivalent) and treat as an image.  

Most product UI should use **icons inside** **Button**, **Input**, **Link**, etc. Use **Icon** alone only when the pattern calls for a standalone pictogram.

**Sizing:** Set **`size`** (and **`lengthUnit`**, if the spec uses something other than pixels) **explicitly** for each use. Do **not** assume one global value for all icons. Choose it from the **Figma** design you are matching (the referenced frame, inspect tokens or measurements), or from the **parent component** that owns the icon (for example, **Button** `size` and built-in icon slots often define the icon dimensions—align with that component’s scale rather than hard‑coding a standalone `Icon` default everywhere).

---

## Key props (typical)

- **`name`**, **`size`**, **`lengthUnit`**, **`dataAriaLabel`** (see **Sizing** above: pick **`size`** per design or parent, not a single app‑wide default)

---

## Example — decorative `Icon` (`name` with weight)

```jsx
import { Icon } from "@momentum-design/components/react";

function SearchRow() {
  return <Icon name="search-bold" size={20} />;
}
```

(Use **`<base>-<weight>`** for **`name`** per the [Icons](../components.md#icons) section in [components.md](../components.md). Standalone **informative** icons also need the **label / `dataAriaLabel`** model from [Storybook — Icon / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-icon-icon--docs).)

---

## Checklist

- [ ] `IconProvider` and theme are configured per [setup.md](../setup.md)  
- [ ] **`size` / `lengthUnit`** match the **referenced Figma** spec or the **parent** component (Button, list row, etc.); not a one‑size‑fits‑all value  
- [ ] **Meaning** is in **text** or a proper **aria** / tooltip, not color alone  
- [ ] In standalone informative cases, match Storybook for **focus** and **tooltip**  

[Storybook — Icon / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-icon-icon--docs)
