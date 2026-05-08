# StaticCheckbox (Momentum) — Figma Make guidance

**StaticCheckbox** is a **read-only** (non-form) **checkbox** appearance. It has **no** **`onChange`** and does **not** submit—**visual** **`checked`**, **`indeterminate`**, **`disabled`** / **`softDisabled`**, and **`readonly`** for summary UIs, confirmations, or “what you selected” readouts. The interactive control is **[Checkbox](./checkbox.md)** / **[CardCheckbox](./cardcheckbox.md)** / **[FormfieldGroup](./formfieldgroup.md)**. **`Checkbox`** can expose the static piece via a **`static-checkbox`** CSS part.

See also: [Checkbox](./checkbox.md), [CardCheckbox](./cardcheckbox.md).

Browse the [Momentum Components catalog](https://momentum.design/en/components/) for naming; Storybook documents props and examples. Reference: [Storybook — StaticCheckbox / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-decorator-staticcheckbox--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-decorator-staticcheckbox--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { StaticCheckbox } from "@momentum-design/components/dist/react";
```

---

## What it is

- **Props:** **`checked`**, **`indeterminate`**, **`disabled`**, **`readonly`** / **`readOnly`**, **`softDisabled`** in React.  
- **Default slot** — the **label** next to the mark.  
- Theming: **`--mdc-staticcheckbox-*`**.  
- **A11y:** treated as **decorative** in package docs; meaning must sit in the **slotted** label or **nearby** **Text**.

**Never** use **StaticCheckbox** in an editable form row where a real **checkbox** is required.

---

## Key props (typical)

- **`checked`**, **`indeterminate`**, **`readOnly`**, **`disabled`**, **`softDisabled`**

---

## Example — `StaticCheckbox` (read-only)

```jsx
import { StaticCheckbox } from "@momentum-design/components/dist/react";

function PlanSummary() {
  return <StaticCheckbox checked readOnly>API access</StaticCheckbox>;
}
```

You can slot **`Text`** in the default label slot—[Storybook — StaticCheckbox / Example](https://momentum.design/storybook-static/index.html?path=/story/components-decorator-staticcheckbox--example).

---

## Checklist for Figma Make

- [ ] **`ThemeProvider`** per [setup.md](../setup.md)  
- [ ] Replace with **[Checkbox](./checkbox.md)** when the user can **change** the value  
- [ ] Label is **read** in document order, not only the graphic  
- [ ] **`indeterminate`** only for “partially selected” trees (same as interactive pattern)  

Cross-check [Storybook — StaticCheckbox / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-decorator-staticcheckbox--docs) and your installed package version.
