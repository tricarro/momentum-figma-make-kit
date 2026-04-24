# StaticCheckbox (Momentum) — Figma Make guidance

**StaticCheckbox** is a **read-only** (non-form) **checkbox** appearance. It has **no** `onChange` and does **not** submit—**visual** `checked`, **`indeterminate`**, `disabled` / **`softDisabled`**, and **`readonly`** for summary UIs, confirmations, or “what you selected” readouts. The interactive control is **Checkbox** / **CardCheckbox** / **FormfieldGroup**. The **`Checkbox`** component can expose the static piece via a **`static-checkbox` CSS part. Reference: [Storybook — StaticCheckbox / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-decorator-staticcheckbox--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-decorator-staticcheckbox--example).

---

## Import

```jsx
import { StaticCheckbox } from "@momentum-design/components/react";
```

Use `@momentum-design/components/react` only, not `@momentum-design/components` without `/react` (per `Guidelines.md`).

---

## What it is

- **Props:** `checked`, `indeterminate`, `disabled`, `readonly` / **`readOnly`**, `softDisabled` in React.  
- **Default slot** — the **label** string next to the mark.  
- Theming: **`--mdc-staticcheckbox-*`**.  
- **A11y:** the package marks this as **decorative**; meaning must sit in the **slotted** label or **nearby** text, not the graphic alone.  

**Never** use **StaticCheckbox** in an editable form row where a real **checkbox** is required.

---

## Key props (typical)

- **`checked`**, **`indeterminate`**, **`readOnly`**, **`disabled`**, **`softDisabled`**

---

## Example — `StaticCheckbox` (read-only)

```jsx
import { StaticCheckbox } from "@momentum-design/components/react";

function PlanSummary() {
  return <StaticCheckbox checked readOnly>API access</StaticCheckbox>;
}
```

(You can also put a **`Text`** (or other) child in the **default** **label** slot; see [Storybook — StaticCheckbox / Example](https://momentum.design/storybook-static/index.html?path=/story/components-decorator-staticcheckbox--example).)

---

## Checklist

- [ ] Replaced with **Checkbox** the moment the user can **change** the value  
- [ ] The label is **read** in document order, not in the fake control  
- [ ] `indeterminate` only for “partially selected” trees (same as interactive pattern)  

[Storybook — StaticCheckbox / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-decorator-staticcheckbox--docs)
