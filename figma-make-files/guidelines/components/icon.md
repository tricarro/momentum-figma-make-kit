# Icon (Momentum) — Figma Make guidance

**Icon** loads an SVG from the **IconProvider**’s **URL** and renders it by **`name`**. Sizing is driven by **`size`** and **`lengthUnit`** (align to the **uploaded design**; use **32px** when the design is silent—see **Sizing** below). You must use **decorative**, **informative** (label + `role="img"`), or **informative standalone** (label, **`tabIndex={0}`**, and usually a **Tooltip**) per the a11y model in the [package docs](https://momentum.design/storybook-static/index.html?path=/docs/components-icon-icon--docs). Reference: [Storybook — Icon / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-icon-icon--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-icon-icon--example).

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

**Sizing:** **Align `size` and `lengthUnit` to the uploaded design file** (the Figma or reference you are implementing—inspect frames, components, and measurements so icons match that spec). When the design does **not** specify a size, set **`size={32}`** and **`lengthUnit="px"`** (32px) as the Figma Make default. If the icon lives inside another Momentum control (**Button**, **Input**, etc.), still prefer the **uploaded design** when it shows a concrete size; otherwise follow that parent’s scale, and use **32px** only when nothing else is defined.

---

## Key props (typical)

- **`name`**, **`size`**, **`lengthUnit`**, **`dataAriaLabel`** — see **Sizing** above: match the **uploaded design** first; **32px** (`32` + `"px"`) when unspecified.

---

## Example — decorative `Icon` (`name` with weight)

```jsx
import { Icon } from "@momentum-design/components/react";

function SearchRow() {
  return <Icon name="search-bold" size='32px' />;
}
```

(Use **`<base>-<weight>`** for **`name`** per the [Icons](../components.md#icons) section in [components.md](../components.md). Standalone **informative** icons also need the **label / `dataAriaLabel`** model from [Storybook — Icon / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-icon-icon--docs).)

---

## Checklist

- [ ] `IconProvider` and theme are configured per [setup.md](../setup.md)  
- [ ] **`size` / `lengthUnit`** follow the **uploaded design** when it specifies dimensions; if not, use **32px** default (`size={32}`, `lengthUnit="px"`)  
- [ ] **Meaning** is in **text** or a proper **aria** / tooltip, not color alone  
- [ ] In standalone informative cases, match Storybook for **focus** and **tooltip**  

[Storybook — Icon / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-icon-icon--docs)
