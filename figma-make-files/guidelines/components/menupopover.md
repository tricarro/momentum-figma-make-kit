# MenuPopover (Momentum) — Figma Make guidance

**MenuPopover** is **menu**-behavior **Popover** for **MenuBar** + **MenuItem** trees: **vertical** orientation, **arrow**-key navigation, **focus trap** while open, **Escape** / **outside click** to close, and **submenu** support (nested **`MenuPopover`**—opens on **hover** / **click** / **Enter** / **Space** per the package). **Submenus** close on **Left** and **Esc**; **Space** on **menuitemradio** / **menuitemcheckbox** does not close the whole menu. In React: **`onChange`**, **`onAction`**, plus **`onShown`**, **`onHidden`**, **`onCreated`**, **`onDestroyed`**.

See also: [Popover](./popover.md), [SideNavigation](./sidenavigation.md) (nav shell), [Dialog](./dialog.md) (modal, not a menu).

Browse the [Momentum Components catalog](https://momentum.design/en/components/) for naming; Storybook documents props and examples. Reference: [Storybook — MenuPopover / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-menupopover-menupopover--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-menupopover-menupopover--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import {
  MenuPopover,
  MenuItem,
  MenuBar,
  MenuItemCheckbox,
  MenuItemRadio,
  MenuSection,
} from "@momentum-design/components/dist/react";
```

---

## What it is

- **Content** in the default slot: **MenuItem**, **MenuSection**, checkbox/radio menu items—see [Storybook — MenuPopover](https://momentum.design/storybook-static/index.html?path=/docs/components-menupopover-menupopover--docs).  
- **`onAction`:** when a user selects an item and the **menu** should close.  
- **`onChange`:** for **MenuItemCheckbox** / **MenuItemRadio** value changes.  
- Anchoring uses **`Popover`** **`triggerID`** (capital **`ID`**) pointing at the **`id`** of the menu trigger—see **[Popover](./popover.md)**.

**MenuPopover** for app **menus** and **cascading** items; plain **[Popover](./popover.md)** for arbitrary overlays; **[Combobox](./combobox.md)** / **[Select](./select.md)** for combobox/listbox value picking.

---

## Example — `MenuPopover` with `MenuItem` children

```jsx
import { MenuPopover, MenuItem } from "@momentum-design/components/dist/react";

function FileMenu() {
  return (
    <MenuPopover
      onAction={() => {
        /* run command + close; confirm event shape in Storybook */
      }}
    >
      <MenuItem label="New" data-value="new" />
      <MenuItem label="Open" data-value="open" />
    </MenuPopover>
  );
}
```

You must **anchor** the popover to a **trigger** (e.g. **MenuBar** or **Button**) with **`triggerID`** / **`visible`** the way [Storybook — MenuPopover / Example](https://momentum.design/storybook-static/index.html?path=/story/components-menupopover-menupopover--example) shows; the snippet is only the **menu content** subtree.

---

## Checklist for Figma Make

- [ ] **`ThemeProvider`** + **`IconProvider`** per [setup.md](../setup.md)  
- [ ] **`triggerID`** on **`MenuPopover`** matches the trigger element’s **`id`** (same pattern as **Popover**)  
- [ ] Follow Storybook for **submenu** markup and **ARIA** (many attributes are set by the component)  
- [ ] **menuitem** actions that navigate still **close** via **`onAction`** or the documented event  
- [ ] Do not nest unrelated **listbox** patterns in the same trigger without checking focus rules  

Cross-check [Storybook — MenuPopover / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-menupopover-menupopover--docs) and your installed package version.
