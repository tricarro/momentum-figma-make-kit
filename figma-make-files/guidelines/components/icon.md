# Icon (Momentum) — Figma Make guidance

**Icon** loads an SVG from the **IconProvider**’s **URL** and renders it by **`name`**. Sizing is driven by **`size`**, **`lengthUnit`**, and **`--mdc-icon-size`**. You must use **decorative**, **informative** (label + `role="img"`), or **informative standalone** (label, **`tabIndex={0}`**, and usually a **Tooltip**) per the a11y model in the [package docs](https://momentum.design/storybook-static/index.html?path=/docs/components-icon-icon--docs). Reference: [Storybook — Icon / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-icon-icon--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-icon-icon--example).

---

## Import

```jsx
import { Icon } from "@momentum-design/components/react";
```

Use `@momentum-design/components/react` only, not `@momentum-design/components` without `/react` (per `Guidelines.md`).

---

## What it is

- **IconProvider** at the app root supplies the **sprite or fetch URL**; icons **fail** silently if not found.  
- **Color:** **`--mdc-icon-fill-color`**; border radius: **`--mdc-icon-border-radius`**.  
- **Decorative:** no **aria** needed; keep them **hidden** from the accessibility tree.  
- **Meaning** not in adjacent text: set **`dataAriaLabel`** (or the documented equivalent) and treat as an image.  

Most product UI should use **icons inside** **Button**, **Input**, **Link**, etc. Use **Icon** alone only when the pattern calls for a standalone pictogram.

---

## Key props (typical)

- **`name`**, **`size`**, **`lengthUnit`**, **`dataAriaLabel`**

---

## Example — decorative `Icon` (`name` with weight)

```jsx
import { Icon } from "@momentum-design/components/react";

function SearchRow() {
  return <Icon name="search-bold" size={20} />;
}
```

(Use **`<base>-<weight>`** for **`name`** per the [Icons](../Guidelines.md#icons) section in `Guidelines.md`. Standalone **informative** icons also need the **label / `dataAriaLabel`** model from [Storybook — Icon / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-icon-icon--docs).)

---

## Checklist

- [ ] `IconProvider` and theme are configured per `Guidelines.md`  
- [ ] **Meaning** is in **text** or a proper **aria** / tooltip, not color alone  
- [ ] In standalone informative cases, match Storybook for **focus** and **tooltip**  

[Storybook — Icon / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-icon-icon--docs)
