# FormfieldGroup (Momentum) — Figma Make guidance

**FormfieldGroup** groups **Checkbox**es or **Toggle**s: consistent **gaps** between children (~12px / **0.75rem** in source), optional **header** / **description**, and **`role="group"`**. **Not** for **Radio**—use **[RadioGroup](./radiogroup.md)**. You **must** provide **either** visible **`headerText`** (or header slot) **or** **`dataAriaLabel`**.

See also: [Checkbox](./checkbox.md), [Toggle](./toggle.md), [Radiogroup](./radiogroup.md).

Browse the [Momentum Components catalog](https://momentum.design/en/components/) for naming; Storybook documents props and examples. Reference: [Storybook — FormfieldGroup / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-formfieldgroup-formfieldgroup--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-formfieldgroup-formfieldgroup--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { FormfieldGroup, Checkbox, Toggle } from "@momentum-design/components/dist/react";
```

---

## What it is

- **Slots** — **`default`** for checkboxes/toggles; **`label`**, **`toggletip`**, **`help-text`** like other form fields.  
- **Roles** — exposed as **`group`**; **`dataAriaLabel`** or header wiring sets **`aria-labelledby`** / **`aria-describedby`** per JSDoc.  
- **Radio** sets → **RadioGroup**, not this component.

See [Checkbox](./checkbox.md) and [Storybook — FormfieldGroup](https://momentum.design/storybook-static/index.html?path=/docs/components-formfieldgroup-formfieldgroup--docs) for full header/help props.

---

## Key props (typical)

- **`headerText`**, **`headerDescriptionText`**, **`dataAriaLabel`**, **`label`**, **`helpText`**, **`helpTextType`**, **`required`**

---

## Example — `FormfieldGroup` with `Checkbox` children

```jsx
import { FormfieldGroup, Checkbox } from "@momentum-design/components/dist/react";

function FeatureToggles() {
  return (
    <FormfieldGroup headerText="Notifications" label="Group label">
      <Checkbox label="Product updates" />
      <Checkbox label="Marketing" />
    </FormfieldGroup>
  );
}
```

Confirm **`checked`** / **`onChange`** wiring for each **Checkbox** in Storybook for your version.

---

## Checklist for Figma Make

- [ ] **`ThemeProvider`** per [setup.md](../setup.md)  
- [ ] **Either** **`headerText`** (or header slot) **or** **`dataAriaLabel`**  
- [ ] Only **Checkbox** / **Toggle** (or documented pattern) in **`default`** — **not** **Radio**  
- [ ] Group-level validation/help when the **set** fails together  

Cross-check [Storybook — FormfieldGroup / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-formfieldgroup-formfieldgroup--docs) and your installed package version.
