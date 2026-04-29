# Checkbox (Momentum) — Figma Make guidance

**Checkbox** wraps a **native** `<input type="checkbox">` with MDS styling, **label**, optional **help** / **error** text, and **toggletip** support. Use for **one or many** options, **binary** toggles, and **indeterminate** parent checkboxes. Group multiple checkboxes with **`FormfieldGroup`** (see Storybook) when the design shows a fieldset. Reference: [Storybook — Checkbox / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-checkbox-checkbox--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-checkbox-checkbox--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { Checkbox } from "@momentum-design/components/dist/react";
```

---

## What it is

- **`checked`**, **`indeterminate`** (parent “partial” state in trees).  
- **Label** via `label` property (and related form-field props from **`FormfieldWrapper`**: `required`, `helpText`, `helpTextType` `default` | `error`, `toggletipText`, etc.—see the full [docs](https://momentum.design/storybook-static/index.html?path=/docs/components-checkbox-checkbox--docs)).  
- **`dataAriaLabel`** (or `data-aria-label`) when there is **no** visible label.  
- **Events:** **`onChange`**, **`onFocus`**.  
- Part **`static-checkbox`** points at the **StaticCheckbox** look; style via parts/tokens, not a second custom checkbox in the same row.

**Space** toggles; **Tab** moves focus; **Enter** may submit the form.

---

## Key props (typical)

- **`label`**, **`checked`**, **`indeterminate`**, **`onChange`**, **`required`**, **`helpText`**, **`helpTextType`**, **`dataAriaLabel`**

---

## Example

```jsx
import { Checkbox } from "@momentum-design/components/dist/react";


<div role="main">
  <Checkbox
    label="I agree to the terms"
    helpTextType="default"
    dataAriaLabel="Agree to all terms and conditions"
  ></Checkbox>
</div>
```

---

## Checklist

- [ ] Every checkbox has a visible **`label`** or accessible **`dataAriaLabel`**  
- [ ] **Indeterminate** only for “some children selected” parent rows  
- [ ] **Help** / error text uses **`helpTextType="error"`** with validation state  
- [ ] Use **FormfieldGroup** (or design-system pattern) for **related** checkboxes in one fieldset  

[Storybook — Checkbox / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-checkbox-checkbox--docs)
