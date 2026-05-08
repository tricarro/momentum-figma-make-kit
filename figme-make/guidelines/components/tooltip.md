# Tooltip (Momentum) — Figma Make guidance

**Tooltip** is **hover**- and **keyboard-focus**-driven help built on **[Popover](./popover.md)** for **non-interactive** text. It **closes** on pointer leave and focus **blur**. It **must not** contain **links**, **buttons**, or **focusable** content—use **[ToggleTip](./toggletip.md)** for that. The surface may use **`aria-hidden`** for some SR modes; the **trigger** or adjacent **[Text](./text.md)** should carry meaning when required by the a11y model. **Events (React):** **`onShown`**, **`onHidden`**, **`onCreated`**, **`onDestroyed`**. Associate with a control via **`triggerID`** (capital **`ID`** on **Popover**) pointing at the trigger element’s **`id`** (e.g. **Option**, **ListItem** truncation patterns).

See also: [Popover](./popover.md), [ToggleTip](./toggletip.md).

Browse the [Momentum Components catalog](https://momentum.design/en/components/) for naming; Storybook documents props and examples. Reference: [Storybook — Tooltip / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-tooltip-tooltip--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-tooltip-tooltip--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { Tooltip, Text, Button } from "@momentum-design/components/dist/react";
```

---

## Example — Tooltip body (default slot, no focusable content)

Open/close and **anchor** wiring depend on your package version—copy from [Storybook — Tooltip / Example](https://momentum.design/storybook-static/index.html?path=/story/components-tooltip-tooltip--example). Message is usually short **`Text`**:

```jsx
import { Tooltip, Text } from "@momentum-design/components/dist/react";

function ShortHelp() {
  return (
    <Tooltip>
      <Text type="label-compact" tagname="span">
        8–64 characters
      </Text>
    </Tooltip>
  );
}
```

Give the **trigger** a stable **`id`** and set **`Tooltip`** **`triggerID`** to match (**`Popover`** API).

---

## Checklist for Figma Make

- [ ] **`ThemeProvider`** per [setup.md](../setup.md)  
- [ ] Content is **plain text** / **`Text`** only—no interactive children  
- [ ] **`triggerID`** matches **`id`** on the focusable trigger  
- [ ] Long or actionable help → **ToggleTip** or inline **help** slots, not **Tooltip**  

Cross-check [Storybook — Tooltip / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-tooltip-tooltip--docs) and your installed package version.
