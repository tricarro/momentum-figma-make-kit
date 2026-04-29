# FormfieldGroup (Momentum) — Figma Make guidance

**FormfieldGroup** groups **Checkbox**es or **Toggle**s: consistent **gaps** between children (12px / 0.75rem in the source), a **header** and optional **description** above, and `role="group"`. It is **not** for **Radio**—use **RadioGroup** for radios. You **must** pass **either** a visible **`headerText` / header** (which drives labels) **or** **`dataAriaLabel`**; one of them is required for accessibility. Reference: [Storybook — FormfieldGroup / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-formfieldgroup-formfieldgroup--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-formfieldgroup-formfieldgroup--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { FormfieldGroup, Checkbox, Toggle } from "@momentum-design/components/dist/react";
```

---

## What it is

- **Slots** — `default` for checkboxes/toggles; `label`, `toggletip`, `help-text` like other form fields.  
- **Roles** — the group is exposed as **`group`**; **`dataAriaLabel`** or header wiring sets **`aria-labelledby` / `aria-describedby`** per the package JSDoc.  
- **Radio** groups: use **RadioGroup**, not this component.  

See [Checkbox / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-checkbox-checkbox--docs) and the FormfieldGroup page for a full list of header and help props.

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

(Confirm `Checkbox` binding (`checked` / `onInput` or `onChange`) and the group **header** vs **`dataAriaLabel`** rule in [Storybook — FormfieldGroup / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-formfieldgroup-formfieldgroup--docs).)

---

## Checklist

- [ ] **Either** `headerText` (or the header slot) **or** `dataAriaLabel` is set  
- [ ] Only **Checkbox** / **Toggle** (or the documented “checkbox/toggle” pattern) in the default slot—**not** `Radio`  
- [ ] Help and validation on the **group** when the set fails validation together  
- [ ] Gaps and hierarchy match **Formfield** patterns from Storybook  

[Storybook — FormfieldGroup / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-formfieldgroup-formfieldgroup--docs)
