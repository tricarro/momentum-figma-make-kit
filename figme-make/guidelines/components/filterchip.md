# FilterChip (Momentum) — Figma Make guidance

**FilterChip** extends **Chip** for **filter** UIs: users **toggle** a constraint on/off. It has **`selected`** state and **`aria-pressed`** aligned to selection.

See also: [Chip](./chip.md), [InputChip](./inputchip.md), [StaticChip](./staticchip.md), [AlertChip](./alertchip.md).

Browse the [Momentum Components catalog](https://momentum.design/en/components/) for naming; Storybook documents props and examples. Reference: [Storybook — FilterChip / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-chip-filterchip--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-chip-filterchip--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { FilterChip } from "@momentum-design/components/dist/react";
```

---

## What it is

- **`selected`:** boolean (default **`false`**); click toggles selection.  
- Inherits **Chip** **`label`**, **`color`**, **`iconName`**, **`type`**, **`disabled`**, **`softDisabled`**, and keyboard/click events.  
- Theming: **`--mdc-chip-*`** as **Chip** ([docs](https://momentum.design/storybook-static/index.html?path=/docs/components-chip-filterchip--docs)).  
- Use in **toolbar** or **table header** areas for quick filters.

**Not** the same as **InputChip** (dismiss) or **AlertChip** (semantic alert).

### Defaults (package)

**`selected`** **`false`** until controlled.

---

## Key props

- **`selected`**, **`label`**, **`color`**, **`iconName`**, **`type`**, **`onClick`** (sync **`selected`** in React state—confirm **`detail`** vs inverted toggle in Storybook)

---

## Example — `FilterChip`

```jsx
import { useState } from "react";
import { FilterChip } from "@momentum-design/components/dist/react";

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

---

## Checklist for Figma Make

- [ ] **`ThemeProvider`** + **`IconProvider`** per [setup.md](../setup.md)  
- [ ] **`aria-pressed`** driven by **`selected`** (component handles wiring—verify in Storybook)  
- [ ] Non-filter tags → **Chip** / **StaticChip**; removable tokens → **InputChip**  
- [ ] Short **`label`** (~20 characters guidance, same as **Chip**)  

Cross-check [Storybook — FilterChip / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-chip-filterchip--docs) and your installed package version.
