# FilterChip (Momentum) — Figma Make guidance

**FilterChip** extends **Chip** for **filter** UIs: tables and lists where users **toggle** a constraint on/off. It has a **`selected`** state and sets **`aria-pressed`** to match. Reference: [Storybook — FilterChip / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-chip-filterchip--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-chip-filterchip--example).

---

## Import

```jsx
import { FilterChip } from "@momentum-design/components/react";
```

Use `@momentum-design/components/react` only, not `@momentum-design/components` without `/react` (per `Guidelines.md`).

---

## What it is

- **`selected`:** boolean (default `false`); user click toggles selection.  
- Inherits **Chip** **`label`**, **`color`**, **`iconName`**, and keyboard/click events.  
- Theming: same `--mdc-chip-*` as **Chip** ([docs](https://momentum.design/storybook-static/index.html?path=/docs/components-chip-filterchip--docs)).  
- Use in **toolbar** or **table header** areas for “quick filter” affordances.

**Not** the same as **InputChip** (dismiss/close) or **AlertChip** (semantic alert styling).

---

## Key props

- **`selected`**, **`label`**, **`color`**, **`iconName`**, **`onClick`** (and keyboard handlers to sync state in React)

---

## Example

```jsx
import { useState } from "react";
import { FilterChip } from "@momentum-design/components/react";

function UnreadFilter() {
  const [on, setOn] = useState(false);
  return (
    <FilterChip
      label="Unread"
      color="default"
      selected={on}
      onClick={() => setOn((v) => !v)}
      type="button"
    />
  );
}
```

(Confirm controlled `selected` pattern with your Storybook if `onClick` should read `!selected` from event detail instead.)

---

## Checklist

- [ ] `aria-pressed` is driven by **`selected`** (handled by the component)  
- [ ] Non-filter tags → **Chip** or **StaticChip**; removable tokens → **InputChip**  
- [ ] Keep labels short like **Chip** (≈ 20 characters guidance)  

[Storybook — FilterChip / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-chip-filterchip--docs)
