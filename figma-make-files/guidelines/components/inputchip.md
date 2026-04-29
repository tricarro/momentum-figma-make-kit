# InputChip (Momentum) — Figma Make guidance

**InputChip** represents a **value** the user (or app) can **remove**: **label**, optional **leading** icon, **`prefix`** slot for **Avatar** (wins over **`iconName`**), **close** control, and an **`error`** state for validation. **Remove** fires **`onRemove`** in React. Reference: [Storybook — InputChip / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-chip-inputchip--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-chip-inputchip--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { InputChip, Avatar } from "@momentum-design/components/dist/react";
```

---

## What it is

- **`label`:** string (required in typings).  
- **`error`:** boolean validation styling.  
- **`clearAriaLabel`:** **accessible** name for the **close** control.  
- **`onRemove`:** when the user activates **close**; bubbles.  
- **`prefix` slot:** e.g. small **Avatar**; else **`iconName`**.  
- **`disabled`:** from the disabled mixin.  
- Styling: `--mdc-chip-*` in [docs](https://momentum.design/storybook-static/index.html?path=/docs/components-chip-inputchip--docs).

**Typical** use: email **To:** field token, **file** chip with remove, or filter tags that are **dismissable**.

---

## Key props

- **`label`**, **`error`**, **`clearAriaLabel`**, **`iconName`**, **`onRemove`**, **`disabled`**

---

## Example — `InputChip`

```jsx
import { InputChip } from "@momentum-design/components/dist/react";

function EmailToken({ address, onDismiss }) {
  return (
    <InputChip
      label={address}
      clearAriaLabel={`Remove ${address}`}
      onRemove={onDismiss}
    />
  );
}
```

---

## Checklist

- [ ] **Always** set **`clearAriaLabel`** (or verify equivalent in your Storybook)  
- [ ] `onRemove` updates the parent’s list of values  
- [ ] **`error`** with form validation, not ad-hoc red text  
- [ ] For **static** (non-dismiss) tags, use **StaticChip** or **Chip** instead  

[Storybook — InputChip / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-chip-inputchip--docs)
