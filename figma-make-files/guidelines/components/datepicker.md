# DatePicker (Momentum) — Figma Make guidance

**DatePicker** (`DatePicker` in React) lets users **pick a date** via a **Calendar** in a **popover** and/or **enter a date** depending on **variant**: **`input`** (month/day/year **spinbutton** subfields) or **`default`** (select-like **trigger** + calendar). It supports **localization** with a BCP-47 **locale** string. Reference: [Storybook — DatePicker / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-datepicker-datepicker--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-datepicker-datepicker--example).

---

## Import

```jsx
import { DatePicker } from "@momentum-design/components/react";
```

Use `@momentum-design/components/react` only, not `@momentum-design/components` without `/react` (per `Guidelines.md`).

---

## What it is

- **Variants** — `input` vs `default` (see [docs](https://momentum.design/storybook-static/index.html?path=/docs/components-datepicker-datepicker--docs) for the exact control model).  
- **Events (React):** **`onInput`** (as value changes), **`onChange`** (committed), **`onFocus`**, **`onBlur`**.  
- **Form-field slots** — `label`, `toggletip`, `help-icon`, `help-text` (and properties from the form-field layer).  
- Theming: **`--mdc-datepicker-*`** in the [docs](https://momentum.design/storybook-static/index.html?path=/docs/components-datepicker-datepicker--docs).  
- Often paired with **validation** and **`format`** / locale from product requirements.

**Calendar** alone: see **`calendar.md`**; **DatePicker** composes it into a field.

---

## Key props (typical)

- **`label`**, **`value` / binding**, **`variant`**, **`locale`**, **`helpText`**, **`helpTextType`**

---

## Checklist

- [ ] Choose **`input`** vs **`default`** to match the product’s data-entry pattern  
- [ ] Set **`locale`** (and any format) consistently with the rest of the app  
- [ ] Wire **`onChange`** for committed values and error messages from the field wrapper  
- [ ] `IconProvider` in the app root per `Guidelines.md` (icons in the control)  

[Storybook — DatePicker / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-datepicker-datepicker--docs)
