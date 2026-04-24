# Selectlistbox (Momentum) — Figma Make guidance

**Selectlistbox** is a **light-DOM** wrapper that sits **between** **Select** (or **Combobox**) and the **Option** / **OptGroup** children so the **listbox** roles and `aria-owns` wiring stay correct. You **must** use it in those patterns—the package will remove it if/when `ariaOwnsElements` is broadly available. It has **no** business logic: **only** structure and a11y plumbing. Reference: [Storybook — Selectlistbox / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-list-selectlistbox--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-list-selectlistbox--example).

---

## Import

```jsx
import { Selectlistbox, Option } from "@momentum-design/components/react";
```

Use `@momentum-design/components/react` only, not `@momentum-design/components` without `/react` (per `Guidelines.md`).

---

## What it is

- **Default** slot: **`Option`** and **`OptGroup`** only (same as **Select**’s “default” slot in practice).  
- **Not** the same as **ListBox** (standalone) or the combobox’s internal list—name matches the **select** + **a11y** use case.  

[Storybook — Selectlistbox / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-list-selectlistbox--docs)
