# ToggleTip (Momentum) — Figma Make guidance

**ToggleTip** (React: **`ToggleTip`**, tag **`mdc-toggletip`**) is a **click-to-open** overlay for **content that can include links and buttons**. It **extends** **Popover** with toggletip **defaults**: stays open until **Escape**, **outside** click, or an optional **close** control; **focus trap** while open; focus **returns** to the **trigger**. Uses **ScreenreaderAnnouncer** internally. **Not** a **Tooltip**—**Tooltip** is **hover/focus** and must not contain **focusable** content. **Events (React):** **`onShown`**, **`onHidden`**, **`onCreated`**, **`onDestroyed`**. **Attribute** `screenreaderAnnouncerIdentity` (camelCase in React) is documented for announcement placement. Reference: [Storybook — ToggleTip / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-toggletip-toggletip--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-toggletip-toggletip--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { ToggleTip, Button, Text, Link } from "@momentum-design/components/dist/react";
```

---

## What it is

- **Toggletip** in **form** labels: often the **`toggletip`** **slot** on **Input** / **Checkbox**—use the same **Trigger**+**content** **pattern** in Storybook.  
- Theming: **`--mdc-toggletip-*`**.  

---

## Example — `ToggleTip` content (default **slot**)

`ToggleTip` **extends** **Popover**; you must still add the **trigger** / **anchor** markup the same way as in the Storybook page (not repeated here, because it is version-specific).

```jsx
import { ToggleTip, Text, Link } from "@momentum-design/components/dist/react";

function RichHelpBody() {
  return (
    <ToggleTip placement="bottom">
      <Text type="body-primary" tagname="div">
        Use links or buttons in this panel. <Link href="https://example.com">Learn more</Link>
      </Text>
    </ToggleTip>
  );
}
```

Copy the full **trigger + `ToggleTip`** tree from [Storybook — ToggleTip / Example](https://momentum.design/storybook-static/index.html?path=/story/components-toggletip-toggletip--example).

[Storybook — ToggleTip / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-toggletip-toggletip--docs)
