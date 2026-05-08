# ToggleTip (Momentum) — Figma Make guidance

**ToggleTip** (React: **`ToggleTip`**, tag **`mdc-toggletip`**) is a **click-to-open** overlay for **content that can include links and buttons**. It **extends** **[Popover](./popover.md)** with toggletip defaults: stays open until **Escape**, **outside** click, or an optional **close** control; **focus trap** while open; focus **returns** to the **trigger**. Uses **[ScreenreaderAnnouncer](./screenreaderannouncer.md)** internally. **Not** a **[Tooltip](./tooltip.md)**—Tooltip is **hover/focus** and must not contain **focusable** content. **Events (React):** **`onShown`**, **`onHidden`**, **`onCreated`**, **`onDestroyed`**. **`screenreaderAnnouncerIdentity`** (camelCase in React) configures announcement placement.

See also: [Popover](./popover.md), [Tooltip](./tooltip.md), [ScreenreaderAnnouncer](./screenreaderannouncer.md).

Browse the [Momentum Components catalog](https://momentum.design/en/components/) for naming; Storybook documents props and examples. Reference: [Storybook — ToggleTip / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-toggletip-toggletip--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-toggletip-toggletip--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { ToggleTip, Button, Text, Link } from "@momentum-design/components/dist/react";
```

---

## What it is

- **Form** labels: often the **`toggletip`** **slot** on **Input** / **Checkbox**—match Storybook’s **trigger + panel** tree.  
- Anchoring uses **`Popover`** **`triggerID`** (capital **`ID`**) like other overlays—see **[Popover](./popover.md)**.  
- Theming: **`--mdc-toggletip-*`**.

---

## Example — `ToggleTip` content (default slot)

You must add the **trigger** / **`triggerID`** wiring the way [Storybook — ToggleTip / Example](https://momentum.design/storybook-static/index.html?path=/story/components-toggletip-toggletip--example) shows (version-specific).

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

---

## Checklist for Figma Make

- [ ] **`ThemeProvider`** + **`IconProvider`** per [setup.md](../setup.md)  
- [ ] **`triggerID`** matches the trigger element **`id`** (same as **Popover**)  
- [ ] Rich content / links → **ToggleTip**; plain short hover help → **Tooltip**  

Cross-check [Storybook — ToggleTip / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-toggletip-toggletip--docs) and your installed package version.
