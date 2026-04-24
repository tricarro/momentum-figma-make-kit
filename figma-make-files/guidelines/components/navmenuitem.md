# NavMenuItem (Momentum) — Figma Make guidance

**NavMenuItem** is a **navigation** row shaped like a **menu** item, meant for **`MenuBar`** **inside** **SideNavigation**: **leading** **icon**, **label**, optional **badge**, **active** state, optional **submenu** **arrow**, and optional **`tooltipText`** when the sidebar is **collapsed** or a **submenu** child is active. In React: **`onClick`**, keyboard events, **`onActiveChange`**. It is **not** a free-floating list row for arbitrary pages—use **ListItem** for generic lists. Reference: [Storybook — NavMenuItem / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-sidenavigation-navmenuitem--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-sidenavigation-navmenuitem--example).

---

## Import

```jsx
import { NavMenuItem, MenuBar } from "@momentum-design/components/react";
```

Use `@momentum-design/components/react` only, not `@momentum-design/components` without `/react` (per `Guidelines.md`).

---

## What it is

- **Submenu:** set **`id`** on the item, **`triggerId`** on the paired **`MenuPopover`**, and **`parentNavTooltipText`** for collapsed mode (see [SideNavigation](https://momentum.design/storybook-static/index.html?path=/docs/components-sidenavigation-sidenavigation--docs)).  
- **Action-only** row: **`disableAriaCurrent`** to keep the **look** without `aria-current` navigation behavior.  
- Theming: **`--mdc-navmenuitem-*`** in the [doc](https://momentum.design/storybook-static/index.html?path=/docs/components-sidenavigation-navmenuitem--docs).  

---

## Example — `NavMenuItem`

```jsx
import { NavMenuItem } from "@momentum-design/components/react";

function InboxRow() {
  return (
    <NavMenuItem label="Inbox" iconName="inbox-bold" onClick={() => { /* navigate or expand */ }} />
  );
}
```

(Place this inside **`MenuBar` / `SideNavigation`** the way [Storybook — NavMenuItem / Example](https://momentum.design/storybook-static/index.html?path=/story/components-sidenavigation-navmenuitem--example) does; add **active**, **tooltipText**, and **submenu** props when the design needs them.)

[Storybook — NavMenuItem / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-sidenavigation-navmenuitem--docs)
