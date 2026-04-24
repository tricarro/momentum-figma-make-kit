# Input (Momentum) — Figma Make guidance

**Input** is the standard **text** field: **label**, native **value** and attributes, **help** / error text, **leading** icon, **prefix** text, and optional **clear** trailing **Button**. In React, listen for **`onInput`**, **`onChange`**, **`onFocus`**, **`onBlur`**, and **`onClear`**. Styling is driven by **`--mdc-input-*`** and the label/help tokens. Reference: [Storybook — Input / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-input-input--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-input-input--example).

---

## Import

```jsx
import { Input } from "@momentum-design/components/react";
```

Use `@momentum-design/components/react` only, not `@momentum-design/components` without `/react` (per `Guidelines.md`).

---

## What it is

- **Slots** — `label`, `toggletip`, `input-leading-icon`, `input-prefix-text`, `trailing-button` (or props like **`leadingIcon`**, **`prefixText`**, **`trailingButton`**) and help slots.  
- **Clear** — set **`clearAriaLabel`** (or the documented attr) for the **clear** control.  
- **Types** — follow Storybook for **`type`**, **`autocomplete`**, and validation.  

**Password** fields: use the **Password** component, not a raw type-only swap, unless the design says otherwise.

---

## Key props (typical)

- **`label`**, **`value` / `defaultValue`**, **`placeholder`**, **`onInput`**, **`onChange`**, **`onClear`**, **`leadingIcon`**, **`prefixText`**, **`trailingButton`**, **`clearAriaLabel`**, **`helpText`**, **`helpTextType`**

---

## Checklist

- [ ] Label or **`dataAriaLabel`** for screen readers  
- [ ] **`onClear` + `clearAriaLabel`** if a clear action is shown  
- [ ] Errors use **`helpTextType="error"`** (or the slot) with a strategy that does not rely on color alone  
- [ ] `IconProvider` in the app root per `Guidelines.md`  

[Storybook — Input / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-input-input--docs)
