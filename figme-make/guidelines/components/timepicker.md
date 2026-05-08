# TimePicker (Momentum) — Figma Make guidance

**TimePicker** (`TimePicker` in React) is a **time** field: **label**, **spinbutton**-style **hour** / **minute** (and **AM/PM** in 12h mode), optional **preset** intervals, and form-field **help** slots. **12h** vs **24h** and locale-style behavior: see the [doc](https://momentum.design/storybook-static/index.html?path=/docs/components-timepicker-timepicker--docs). **Events (React):** **`onInput`**, **`onChange`**, **`onFocus`**, **`onBlur`**. Combine with **[DatePicker](./datepicker.md)** when the product needs full **date + time** (separate fields unless Storybook documents a composed control).

See also: [DatePicker](./datepicker.md), [Input](./input.md).

Browse the [Momentum Components catalog](https://momentum.design/en/components/) for naming; Storybook documents props and examples. Reference: [Storybook — TimePicker / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-timepicker-timepicker--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-timepicker-timepicker--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { TimePicker } from "@momentum-design/components/dist/react";
```

---

## What it is

- Same **form-field** shell pattern as other **`FormfieldWrapper`** components (**`label`**, **`helpText`**, **`helpTextType`**, toggletip slots—confirm names in Storybook).  
- Wire **`value`** / controlled state per **[Storybook — TimePicker / Example](https://momentum.design/storybook-static/index.html?path=/story/components-timepicker-timepicker--example)**.

---

## Example — `TimePicker`

```jsx
import { TimePicker } from "@momentum-design/components/dist/react";

function StartTime() {
  return <TimePicker label="Start time" />;
}
```

Add **`onInput`** / **`onChange`**, **12h/24h**, **locale**, and **`value`** binding from Storybook.

---

## Checklist for Figma Make

- [ ] **`ThemeProvider`** + **`IconProvider`** per [setup.md](../setup.md)  
- [ ] **Time zone** and **format** match the spec (12h/24h, leading zeros)  
- [ ] **`helpText`** / validation aligned with **[DatePicker](./datepicker.md)** when both appear in one flow  

Cross-check [Storybook — TimePicker / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-timepicker-timepicker--docs) and your installed package version.
