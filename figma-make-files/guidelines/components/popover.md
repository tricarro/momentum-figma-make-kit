# Popover (Momentum) — Figma Make guidance

**Popover** is a **generic** anchored overlay: **Floating UI** positioning, scrollable content, **`--mdc-popover-*`** theming, and **shown** / **hidden** / **created** / **destroyed** in React. Use for **custom** panels that are not the dedicated **MenuPopover** or **Coachmark** (those wrap Popover with different defaults). If **one trigger** opens **several** popovers, set **`disableAriaExpanded`** on all but **one** so the trigger’s **`aria-expanded`** is not wrong. For **`appendTo`** in React: the package warns of **`NotFoundError`** when the popover portaled node is **directly** added/removed by React—**wrap the Popover in an element** (not `Fragment`) when using **`appendTo`**, per the JSDoc. Reference: [Storybook — Popover / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-popover-popover--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-popover-popover--example).

---

## Import

```jsx
import { Popover, Button, Text } from "@momentum-design/components/react";
```

Use `@momentum-design/components/react` only, not `@momentum-design/components` without `/react` (per `Guidelines.md`).

---

## What it is

- **Events (React):** **`onShown`**, **`onHidden`**, **`onCreated`**, **`onDestroyed`**.  
- **Parts** — `popover-content`, `popover-close`, `popover-hover-bridge` for styling.  
- **Backdrop** and **max** width/height: see Storybook.  

**Popover** = general; **MenuPopover** = application menus; **Dialog** = modal; **Toggletip** / **Tooltip** = smaller help.

---

## Example — `Popover` with a **trigger** + **Button**

```jsx
import { useState } from "react";
import { Popover, Button, Text } from "@momentum-design/components/react";

function WithPopover() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button type="button" onClick={() => setOpen(true)}>
        Open
      </Button>
      <Popover
        onHidden={() => setOpen(false)}
        onShown={() => {
          // optional: focus
        }}
      >
        <Text type="body-primary" tagname="p" slot="popover-content">
          Panel content
        </Text>
      </Popover>
    </>
  );
}
```

(The **trigger → popover** wiring, **`visible` / open state**, and **slot** names are version-specific; copy the pattern from [Storybook — Popover / Example](https://momentum.design/storybook-static/index.html?path=/story/components-popover-popover--example).)

---

## Checklist

- [ ] **`appendTo` + React** use the **wrapper** workaround if you hit mount errors  
- [ ] For multiple flyouts on one **trigger**, set **`disableAriaExpanded`** on extra popovers  
- [ ] Focus: confirm **trap** and **return focus** for modal-like usage vs lightweight dropdowns to match UX and Storybook  

[Storybook — Popover / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-popover-popover--docs)
