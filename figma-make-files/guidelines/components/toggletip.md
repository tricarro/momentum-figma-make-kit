# ToggleTip (Momentum) — Figma Make guidance

**ToggleTip** (React: **`ToggleTip`**, tag **`mdc-toggletip`**) is a **click-to-open** overlay for **content that can include links and buttons**. It **extends** **Popover** with toggletip **defaults**: stays open until **Escape**, **outside** click, or an optional **close** control; **focus trap** while open; focus **returns** to the **trigger**. Uses **ScreenreaderAnnouncer** internally. **Not** a **Tooltip**—**Tooltip** is **hover/focus** and must not contain **focusable** content. **Events (React):** **`onShown`**, **`onHidden`**, **`onCreated`**, **`onDestroyed`**. **Attribute** `screenreaderAnnouncerIdentity` (camelCase in React) is documented for announcement placement. Reference: [Storybook — ToggleTip / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-toggletip-toggletip--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-toggletip-toggletip--example).

---

## Import

```jsx
import { ToggleTip, Button, Text, Link } from "@momentum-design/components/react";
```

Use `@momentum-design/components/react` only, not `@momentum-design/components` without `/react` (per `Guidelines.md`).

---

## What it is

- **Toggletip** in **form** labels: often the **`toggletip`** **slot** on **Input** / **Checkbox**—use the same **Trigger**+**content** **pattern** in Storybook.  
- Theming: **`--mdc-toggletip-*`**.  

[Storybook — ToggleTip / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-toggletip-toggletip--docs)
