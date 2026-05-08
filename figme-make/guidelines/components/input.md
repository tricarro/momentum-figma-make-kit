# Input (Momentum) — Figma Make guidance

**Input** is the standard **single-line text** field: **label**, native **value** and attributes, **help** / error text, **leading** icon, **prefix** text, and optional **clear** trailing **Button**. In React, listen for **`onInput`**, **`onChange`**, **`onFocus`**, **`onBlur`**, and **`onClear`**. Styling uses **`--mdc-input-*`** and label/help tokens.

See also: [Password](./password.md), [Textarea](./textarea.md), [Searchfield](./searchfield.md).

Browse the [Momentum Components catalog](https://momentum.design/en/components/) for naming; Storybook documents props and examples. Reference: [Storybook — Input / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-input-input--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-input-input--example).

For **`helpTextType`** matrix (default, error, warning, success, priority), **`readonly`**, **`disabled`**, **`prefixText`**, **`leadingIcon`**, **`required`**, use Storybook—avoid duplicating the full matrix here.

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { Input } from "@momentum-design/components/dist/react";
```

---

## What it is

- **Slots** — **`label`**, **`toggletip`**, **`input-leading-icon`**, **`input-prefix-text`**, **`trailing-button`** (or props like **`leadingIcon`**, **`prefixText`**, **`trailingButton`**) and help slots.  
- **Clear** — set **`clearAriaLabel`** for the **clear** control when it is shown.  
- **Types** — follow Storybook for **`type`**, **`autocomplete`**, and validation.

**Password** fields: use the **Password** component, not **`Input`** with **`type="password"`** alone, unless the design explicitly says otherwise.

---

## Key props (typical)

- **`label`**, **`value` / `defaultValue`**, **`placeholder`**, **`onInput`**, **`onChange`**, **`onClear`**, **`leadingIcon`**, **`prefixText`**, **`trailingButton`**, **`clearAriaLabel`**, **`helpText`**, **`helpTextType`**, **`required`**

---

## Examples

### Example — `Input` with `label` and `helpText`

```jsx
import { Input } from "@momentum-design/components/dist/react";

function DisplayNameField() {
  return <Input label="Display name" defaultValue="" helpText="Shown in your profile." />;
}
```

For **controlled** usage, add **`value`** + **`onInput`** / **`onChange`** per [Storybook — Input / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-input-input--docs). For **passwords**, use **[Password](./password.md)**.

### Example — validation state

```jsx
import { Input } from "@momentum-design/components/dist/react";

function EmailField({ error }) {
  return (
    <Input
      label="Email"
      helpText={error ?? "We will never share your email."}
      helpTextType={error ? "error" : "default"}
      required
    />
  );
}
```

---

## Checklist for Figma Make

- [ ] **`ThemeProvider`** + **`IconProvider`** per [setup.md](../setup.md)  
- [ ] Label or **`dataAriaLabel`** for screen readers  
- [ ] **`onClear`** + **`clearAriaLabel`** when a clear action is shown  
- [ ] Errors use **`helpTextType="error"`** (or the slot) so messaging does not rely on color alone  

Cross-check [Storybook — Input / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-input-input--docs) and your installed **`@momentum-design/components`** version.
