# StaticChip (Momentum) — Figma Make guidance

**StaticChip** is the **read-only** chip: **no** focus target and **no** **`onClick`**—a **label** and optional **icon** for **status**, **metadata**, or **tags** that are **not** buttons. For **clickable** chips use **[Chip](./chip.md)**; for **alerts** **[AlertChip](./alertchip.md)**; for **filters** **[FilterChip](./filterchip.md)**; for **removable** values **[InputChip](./inputchip.md)**.

See also: [Chip](./chip.md), [FilterChip](./filterchip.md), [InputChip](./inputchip.md).

Browse the [Momentum Components catalog](https://momentum.design/en/components/) for naming; Storybook documents props and examples. Reference: [Storybook — StaticChip / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-chip-staticchip--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-chip-staticchip--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { StaticChip } from "@momentum-design/components/dist/react";
```

---

## What it is

- **`label`:** same length guidance as **Chip** (≈ **20 characters**).  
- **`color`:** same palette as **Chip** (`default`, `cobalt`, `gold`, …).  
- **`iconName`:** leading icon from the Momentum icon set.  
- **No** button events; **presentational**.  
- Theming: **`--mdc-chip-color`**, **`--mdc-chip-border-color`**, **`--mdc-chip-background-color`** ([doc](https://momentum.design/storybook-static/index.html?path=/docs/components-chip-staticchip--docs)).

If the chip is **not** a control, ensure meaning is clear from surrounding **[Text](./text.md)**; do not rely on color alone.

---

## Key props

- **`label`**, **`color`**, **`iconName`**

---

## Example — `StaticChip`

```jsx
import { StaticChip } from "@momentum-design/components/dist/react";

function PlanBadge() {
  return <StaticChip color="violet" label="Enterprise" iconName="lock-bold" />;
}
```

---

## Checklist for Figma Make

- [ ] **`ThemeProvider`** + **`IconProvider`** per [setup.md](../setup.md) when using **`iconName`**  
- [ ] If users must **act** on the value, use **Button**, **Chip**, or **InputChip** instead  
- [ ] **Short** **`label`**; use **Text** or **Tooltip** nearby for long content  
- [ ] **Color** is redundant with text in the **`label`**  

Cross-check [Storybook — StaticChip / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-chip-staticchip--docs) and your installed package version.
