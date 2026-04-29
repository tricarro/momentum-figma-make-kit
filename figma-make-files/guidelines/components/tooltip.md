# Tooltip (Momentum) — Figma Make guidance

**Tooltip** is a **hover**- and **keyboard-focus**-driven **Popover** for **non-interactive** help text. It **closes** on **pointer** leave and **focus** **blur**. It **must not** contain **links**, **buttons**, or any **focusable** **content**—**ToggleTip** is the pattern for that. The surface uses **`aria-hidden="true"`** for VO so the **trigger** (or **adjacent** **Text**) must carry the **meaning** for assistive technology if needed, per the a11y model. **Events (React):** **`onShown`**, **`onHidden`**, **`onCreated`**, **`onDestroyed`**. **Trigger** via **`triggerId`** to associate with a **focusable** **control** (e.g. **Option**, **ListItem**). Reference: [Storybook — Tooltip / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-tooltip-tooltip--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-tooltip-tooltip--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { Tooltip, Text, Button, Icon } from "@momentum-design/components/dist/react";
```

---

## Example — `Tooltip` **body** (default slot, **no** focusable content)

The **open** / **close** and **anchor** to the **field** is specified in [Storybook — Tooltip / Example](https://momentum.design/storybook-static/index.html?path=/story/components-tooltip-tooltip--example) (depends on your package version). The **message** is usually a short **`Text`** or string:

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

(Wrap with the same **Button** / **input** + **`triggerId` / `id`** / **slotted** structure Storybook uses so the help shows on **hover** and **focus**.)

---

## Checklist

- [ ] Content is **plain** **text** (or unstyled text nodes)—no **interactive** **children**  
- [ ] **Long** help still belongs in a **Toggletip** or **inline** **help** when users must **read** at **length**  

[Storybook — Tooltip / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-tooltip-tooltip--docs)
