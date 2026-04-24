# StaticChip (Momentum) — Figma Make guidance

**StaticChip** is the **read-only** chip: **no** focus target and **no** `onClick`—a **label** and optional **icon** for **status**, **metadata**, or **tags** that are **not** buttons. For **clickable** chips, use **Chip**; for **alerts** use **AlertChip**; for **filters** use **FilterChip**; for **removable** values use **InputChip**. Reference: [Storybook — StaticChip / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-chip-staticchip--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-chip-staticchip--example).

---

## Import

```jsx
import { StaticChip } from "@momentum-design/components/react";
```

Use `@momentum-design/components/react` only, not `@momentum-design/components` without `/react` (per `Guidelines.md`).

---

## What it is

- **`label`:** same length guidance as **Chip** (≈ **20 characters**).  
- **`color`:** same **palette** as **Chip** (`default`, `cobalt`, `gold`, …).  
- **`iconName`:** leading icon from Momentum icon set.  
- **No** button events; purely **presentational**.  
- Theming: `--mdc-chip-color`, `--mdc-chip-border-color`, `--mdc-chip-background-color` ([doc](https://momentum.design/storybook-static/index.html?path=/docs/components-chip-staticchip--docs)).

**Accessibility:** if the chip is **not** a control, it should be **perceivable** from surrounding **Text**; do not rely on color alone to convey state.

---

## Key props

- **`label`**, **`color`**, **`iconName`**

---

## Example — `StaticChip`

```jsx
import { StaticChip } from "@momentum-design/components/react";

function PlanBadge() {
  return <StaticChip color="violet" label="Enterprise" iconName="lock-bold" />;
}
```

---

## Checklist

- [ ] If users must **act** on the value, use **Button**, **Chip**, or **InputChip** instead  
- [ ] **Short** `label`; use **Text** or **Tooltip** nearby for long content  
- [ ] **Color** encodes *category* or *tone*, with redundant text in the `label`  

[Storybook — StaticChip / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-chip-staticchip--docs)
