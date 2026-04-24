# Toggle (Momentum) — Figma Make guidance

**Toggle** is a **binary** **switch** implemented as a **checkbox** with **`role="switch"`**—for features that **apply immediately** (not “submit form”). **Group** toggles with **FormfieldGroup** (not **RadioGroup**). **Events (React):** **`onChange`**, **`onFocus`**. The **visual** thumb uses the **`static-toggle`** CSS part, backed by [StaticToggle](https://momentum.design/storybook-static/index.html?path=/docs/components-decorator-statictoggle--docs). Label / help / toggletip match **Checkbox**-family patterns. **StaticToggle** = read-only display. Reference: [Storybook — Toggle / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-toggle-toggle--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-toggle-toggle--example).

---

## Import

```jsx
import { Toggle, FormfieldGroup } from "@momentum-design/components/react";
```

Use `@momentum-design/components/react` only, not `@momentum-design/components` without `/react` (per `Guidelines.md`).

---

## Checklist

- [ ] `dataAriaLabel` when the label is not visible, per the package a11y notes  
- [ ] `IconProvider` in the app root per `Guidelines.md`  

[Storybook — Toggle / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-toggle-toggle--docs)
