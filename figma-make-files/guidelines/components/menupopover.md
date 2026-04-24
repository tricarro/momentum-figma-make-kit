# MenuPopover (Momentum) — Figma Make guidance

**MenuPopover** is a **menu**-behaviour **Popover** for **MenuBar** + **MenuItem** trees: **vertical** orientation, **arrow**-key navigation, **focus trap** while open, **Escape** / **outside click** to close, and **submenu** support (nested `MenuPopover`—opens on **hover** / **click** / **Enter** / **Space** per the package). **Submenus** close on **Left** and **Esc**; **Space** on **menuitemradio** / **menuitemcheckbox** does not close the whole menu. In React: **`onChange`**, **`onAction`**, plus **`onShown`**, **`onHidden`**, **`onCreated`**, **`onDestroyed`**. Reference: [Storybook — MenuPopover / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-menupopover-menupopover--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-menupopover-menupopover--example).

---

## Import

```jsx
import { MenuPopover, MenuItem, MenuBar, MenuItemCheckbox, MenuItemRadio, MenuSection } from "@momentum-design/components/react";
```

Use `@momentum-design/components/react` only, not `@momentum-design/components` without `/react` (per `Guidelines.md`).

---

## What it is

- **Content** in the default slot: menu item components from the [menu patterns](https://momentum.design/storybook-static/index.html?path=/docs/components-menupopover-menupopover--docs).  
- **`onAction`:** when a user selects an item and the **menu** should close.  
- **`onChange`:** for **MenuItemCheckbox** / **MenuItemRadio** value changes.  

**MenuPopover** for app **menu** and **cascading** items; use plain **Popover** for arbitrary overlays; use **Combobox** / **Select** for value pickers.

---

## Checklist

- [ ] Follow Storybook for **submenu** markup and **ARIA** roles (the component sets many attributes automatically)  
- [ ] **menuitem** actions that navigate should still **close** via **`onAction`** or the documented event  
- [ ] Do not nest unrelated **listbox** patterns in the same trigger without checking focus rules  

[Storybook — MenuPopover / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-menupopover-menupopover--docs)
