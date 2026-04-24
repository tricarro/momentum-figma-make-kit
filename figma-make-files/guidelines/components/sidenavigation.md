# SideNavigation (Momentum) — Figma Make guidance

**SideNavigation** (`SideNavigation` in React) is the app **shell** for a **vertical** nav: variants **`fixed-collapsed`**, **`fixed-expanded`**, **`flexible`**, **`flexible-on-hover`**, **`hidden`**, with **scrollable** and **fixed** **MenuBar** slots, **brand** area, and expand **grabber**. It provides **context** for **MenuBar** and **NavMenuItem**. In React: **`onToggle`**, **`onActiveChange`**. **Accessibility:** set **`dataAriaLabel`** (or labels) for **MenuBar** and each **NavMenuItem**; set **`grabberBtnAriaLabel`** (or the documented prop) for the **collapse** control. Submenus: **`MenuPopover`**’s **`triggerId`** matches a **`NavMenuItem`**’s **`id`**; **`parentNavTooltipText`** explains the active child when the rail is **collapsed**, per the JSDoc. Reference: [Storybook — SideNavigation / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-sidenavigation-sidenavigation--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-sidenavigation-sidenavigation--example).

---

## Import

```jsx
import { SideNavigation, MenuBar, NavMenuItem, Text, Divider } from "@momentum-design/components/react";
```

Use `@momentum-design/components/react` only, not `@momentum-design/components` without `/react` (per `Guidelines.md`).

---

## What it is

- **Slots:** `scrollable-section` / `scrollable-menubar`, `fixed-section` / `fixed-menubar`, `brand-logo`.  
- **Section** headers: **`Text`**; section separators: **`Divider`** with **`variant="gradient"`** as recommended.  
- Theming: **`--mdc-sidenavigation-*`** (widths, paddings, grabber `z-index`).  

**Appheader** and **side** content live **outside** this component; **SideNavigation** is the **nav** column only.

---

## Checklist

- [ ] Every **nav** target has a **visible** or **screen-reader** label; **submenu** tooltips filled when the design collapses the rail  
- [ ] `ThemeProvider` + `IconProvider` in the tree per `Guidelines.md`  
- [ ] `Divider` and **Text** for sections match the Momentum **side nav** story  

[Storybook — SideNavigation / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-sidenavigation-sidenavigation--docs)
