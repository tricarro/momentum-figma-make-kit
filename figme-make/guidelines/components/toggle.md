# Toggle (Momentum) — Figma Make guidance

**Toggle** is a **binary** **switch** implemented as a **checkbox** with **`role="switch"`**—for settings that **apply immediately** (not “submit at end of form”). **Group** toggles with **[FormfieldGroup](./formfieldgroup.md)** (not **[Radiogroup](./radiogroup.md)**). **Events (React):** **`onChange`**, **`onFocus`**. The thumb uses the **`static-toggle`** CSS part, backed by **[StaticToggle](./statictoggle.md)**. Label / help / toggletip match **Checkbox**-family patterns.

See also: [FormfieldGroup](./formfieldgroup.md), [StaticToggle](./statictoggle.md), [Checkbox](./checkbox.md).

Browse the [Momentum Components catalog](https://momentum.design/en/components/) for naming; Storybook documents props and examples. Reference: [Storybook — Toggle / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-toggle-toggle--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-toggle-toggle--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { Toggle, FormfieldGroup } from "@momentum-design/components/dist/react";
```

---

## Example — `Toggle`

```jsx
import { useState } from "react";
import { Toggle } from "@momentum-design/components/dist/react";

function Mute() {
  const [on, setOn] = useState(false);

  return (
    <Toggle
      label="Mute notifications"
      checked={on}
      onChange={() => {
        setOn((v) => !v);
      }}
    />
  );
}
```

Use **`onChange`** / **`onInput`**, **`dataAriaLabel`**, and **FormfieldGroup** grouping as in [Storybook — Toggle / Example](https://momentum.design/storybook-static/index.html?path=/story/components-toggle-toggle--example).

---

## Checklist for Figma Make

- [ ] **`ThemeProvider`** + **`IconProvider`** per [setup.md](../setup.md)  
- [ ] **`dataAriaLabel`** when the label is not visible (per package a11y notes)  
- [ ] Prefer **[StaticToggle](./statictoggle.md)** for read-only summaries  

Cross-check [Storybook — Toggle / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-toggle-toggle--docs) and your installed package version.
