# Badge (Momentum) — Figma Make guidance

**Badge** shows a **dot** notification, **counter**, **icon**, or **success / warning / error** state. It is non-interactive display chrome—pair it with a parent (e.g. a tab, list row, or button) when the design needs counts or status. Reference: [Storybook — Badge / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-badge-badge--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-badge-badge--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { Badge } from "@momentum-design/components/dist/react";
```

---

## What it is

- **`type`:** `dot` (notification dot) · `icon` (set **`iconName`**) · `counter` (**`counter`**, **`maxCounter`**) · `success` · `warning` · `error` (uses built-in icons and semantic colors for those three).  
- **`variant`:** `primary` | `secondary` (affects color tokens for **icon** / **counter**-style use).  
- **Counter:** values above **`maxCounter`** show as `max+` (e.g. 99+); `maxCounter` can be `9` | `99` | `999` (capped in UI up to 999+ per design).  
- **`overlay`:** thin outline so a badge on top of a **button** stays visible.  
- Set **`ariaLabel`** when a screen reader should hear a name (counters and dots especially).

`IconProvider` is required for **`icon`**, `success`, `warning`, `error` icon rendering. Theme with `--mdc-badge-*` custom properties in Storybook.

---

## Key props (React / camelCase)

- **`type`**, **`variant`**, **`iconName`**, **`counter`**, **`maxCounter`**, **`overlay`**, **`ariaLabel`**

---

## Example

```jsx
import { Badge } from "@momentum-design/components/dist/react";

<Badge type="icon" iconName="placeholder-bold"></Badge>
```

---

## Checklist

- [ ] `Badge` is **not** a button; use `Button` + `Badge` overlay for actionable UI if needed  
- [ ] `ariaLabel` for meaningful count/dot semantics  
- [ ] `type="icon"` / semantic types use valid Momentum **icons** / `IconProvider`  
- [ ] MDS tokens for layout around the badge, not raw colors  

[Storybook — Badge / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-badge-badge--docs)
