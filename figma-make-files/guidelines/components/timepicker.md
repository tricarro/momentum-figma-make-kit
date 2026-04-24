# TimePicker (Momentum) — Figma Make guidance

**TimePicker** (`TimePicker` in React) is a **time** field: **label**, **spinbutton**-style **hour** / **minute** (and **AM/PM** when 12h), a **dropdown** of preset intervals, and form-field **help** slots. **12h** vs **24h** and **locale**-style behavior: see the [doc](https://momentum.design/storybook-static/index.html?path=/docs/components-timepicker-timepicker--docs). **Events (React):** **`onInput`**, **`onChange`**, **`onFocus`**, **`onBlur`**. Pairs with **DatePicker** when the product needs a full **datetime** flow, built from separate fields unless Storybook offers a **composed** pattern. Reference: [Storybook — TimePicker / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-timepicker-timepicker--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-timepicker-timepicker--example).

---

## Import

```jsx
import { TimePicker } from "@momentum-design/components/react";
```

Use `@momentum-design/components/react` only, not `@momentum-design/components` without `/react` (per `Guidelines.md`).

---

## Checklist

- [ ] **Time zone** and **format** match the spec (12h/24h, leading zeros)  
- [ ] `IconProvider` in the app root per `Guidelines.md`  

[Storybook — TimePicker / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-timepicker-timepicker--docs)
