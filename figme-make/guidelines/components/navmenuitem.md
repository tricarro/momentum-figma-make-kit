# NavMenuItem (Momentum) — Figma Make guidance

**NavMenuItem** is a **navigation** row shaped like a **menu** item, meant for **`MenuBar`** inside **[SideNavigation](./sidenavigation.md)**: **leading** **icon**, **label**, optional **badge**, **active** state, optional **submenu** **arrow**, and optional **`tooltipText`** when the sidebar is **collapsed** or a **submenu** child is active. In React: **`onClick`**, keyboard events, **`onActiveChange`**. It is **not** a generic list row—use **[ListItem](./listitem.md)** for arbitrary lists.

See also: [SideNavigation](./sidenavigation.md), [MenuPopover](./menupopover.md), [ListItem](./listitem.md).

Browse the [Momentum Components catalog](https://momentum.design/en/components/) for naming; Storybook documents props and examples. Reference: [Storybook — NavMenuItem / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-sidenavigation-navmenuitem--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-sidenavigation-navmenuitem--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { NavMenuItem, MenuBar } from "@momentum-design/components/dist/react";
```

---

## What it is

- **`navId`:** unique id for this item within the **MenuBar** (see package JSDoc).  
- **Submenus:** submenu **`MenuPopover`** instances pair with triggers via element **`id`** / **`triggerID`** on **Popover** (capital **`ID`**)—follow [SideNavigation](https://momentum.design/storybook-static/index.html?path=/docs/components-sidenavigation-sidenavigation--docs) examples.  
- **`tooltipText`** / **`isActiveParentTooltipText`:** collapsed sidebar and active-child tooltips.  
- **`disableAriaCurrent`:** keep **look** without **`aria-current`** navigation semantics when needed (vs **`cannotActivate`**—see Storybook).  
- Theming: **`--mdc-navmenuitem-*`** in the [doc](https://momentum.design/storybook-static/index.html?path=/docs/components-sidenavigation-navmenuitem--docs).

---

## Example — `NavMenuItem`

```jsx
import { NavMenuItem } from "@momentum-design/components/dist/react";

function InboxRow() {
  return (
    <NavMenuItem navId="inbox" label="Inbox" iconName="inbox-bold" onClick={() => { /* navigate or expand */ }} />
  );
}
```

Place inside **`MenuBar`** / **`SideNavigation`** as in [Storybook — NavMenuItem / Example](https://momentum.design/storybook-static/index.html?path=/story/components-sidenavigation-navmenuitem--example); add **active**, **tooltipText**, and submenu wiring when the design needs them.

---

## Checklist for Figma Make

- [ ] **`ThemeProvider`** + **`IconProvider`** per [setup.md](../setup.md)  
- [ ] **`navId`** unique within its **MenuBar**  
- [ ] Submenus: **`MenuPopover`** **`triggerID`** matches the submenu trigger **`id`**  
- [ ] Not used as a free-floating row—compose with **SideNavigation** patterns  

Cross-check [Storybook — NavMenuItem / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-sidenavigation-navmenuitem--docs) and your installed package version.
