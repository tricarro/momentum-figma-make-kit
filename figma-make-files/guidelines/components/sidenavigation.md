# SideNavigation (Momentum) — Figma Make guidance

**SideNavigation** (`SideNavigation` in React) is the app **shell** for a **vertical** nav: variants **`fixed-collapsed`**, **`fixed-expanded`**, **`flexible`**, **`flexible-on-hover`**, **`hidden`**, with **scrollable** and **fixed** **MenuBar** slots, **brand** area, and expand **grabber**. It provides **context** for **MenuBar** and **NavMenuItem**. In React: **`onToggle`**, **`onActiveChange`**. **Accessibility:** set **`dataAriaLabel`** (or labels) for **MenuBar** and each **NavMenuItem**; set **`grabberBtnAriaLabel`** (or the documented prop) for the **collapse** control. Submenus: **`MenuPopover`**’s **`triggerId`** matches a **`NavMenuItem`**’s **`id`**; **`parentNavTooltipText`** explains the active child when the rail is **collapsed**, per the JSDoc. Reference: [Storybook — SideNavigation / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-sidenavigation-sidenavigation--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-sidenavigation-sidenavigation--example).

---

## Import

```jsx
import { SideNavigation, MenuBar, NavMenuItem, Text, Divider } from "@momentum-design/components/react";
```

Use `@momentum-design/components/react` only, not `@momentum-design/components` without `/react` (per [setup.md](../setup.md)).

---

## What it is

- **Slots:** `scrollable-section` / `scrollable-menubar`, `fixed-section` / `fixed-menubar`, `brand-logo`.  
- **Section** headers: **`Text`**; section separators: **`Divider`** with **`variant="gradient"`** as recommended.  
- Theming: **`--mdc-sidenavigation-*`** (widths, paddings, grabber `z-index`).  

**Appheader** and **side** content live **outside** this component; **SideNavigation** is the **nav** column only.

---

## Example — `SideNavigation` + `MenuBar` + `NavMenuItem` (shell)

```jsx
import { 
  Icon,
  MenuSection,
  NavMenuItem,
  SideNavigation,
} from "@momentum-design/components/dist/react";


<div style="...">
  <SideNavigation
    expanded
    footerText="%Customer Name%"
    grabberBtnAriaLabel="Toggle Side navigation"
  >
    <!-- Upper Nav (scrollable section) -->
    <MenuSection slot="scrollable-menubar" showDivider>
      <NavMenuItem
        badgeType="counter"
        counter="2"
        maxCounter="66"
        iconName="chat-bold"
        navId="1"
        label="Messaging"
      ></NavMenuItem>
      <NavMenuItem
        iconName="meetings-bold"
        navId="2"
        label="Meetings"
        disabled
      ></NavMenuItem>
      <NavMenuItem
        badgeType="dot"
        iconName="audio-call-bold"
        navId="3"
        label="Calling"
      ></NavMenuItem>
    </MenuSection>

    <MenuSection slot="scrollable-menubar" showDivider headerText="Section 1">
      <NavMenuItem
        iconName="chat-bold"
        navId="4"
        label="Messaging"
      ></NavMenuItem>
      <NavMenuItem
        iconName="meetings-bold"
        navId="5"
        label="Meetings"
        badgeType="counter"
        counter="2"
        maxCounter="66"
      ></NavMenuItem>
      <NavMenuItem
        iconName="audio-call-bold"
        navId="6"
        label="Calling"
      ></NavMenuItem>
    </MenuSection>

    <MenuSection slot="scrollable-menubar" showDivider headerText="Section 2">
      <NavMenuItem
        badgeType="counter"
        counter="2"
        maxCounter="66"
        iconName="chat-bold"
        navId="8"
        label="Messaging"
      ></NavMenuItem>
      <NavMenuItem iconName="meetings-bold" navId="9" label="Meetings">
      </NavMenuItem>
      <NavMenuItem
        badgeType="dot"
        iconName="audio-call-bold"
        navId="10"
        label="Calling"
      >
      </NavMenuItem>
    </MenuSection>

    <MenuSection slot="scrollable-menubar" showDivider headerText="Section 3">
      <NavMenuItem
        iconName="chat-bold"
        navId="11"
        label="Messaging"
      ></NavMenuItem>
      <NavMenuItem
        badgeType="counter"
        counter="3"
        maxCounter="66"
        iconName="meetings-bold"
        navId="12"
        label="Meetings"
      ></NavMenuItem>
      <NavMenuItem
        badgeType="dot"
        iconName="audio-call-bold"
        navId="13"
        label="Calling"
      ></NavMenuItem>
      <NavMenuItem
        iconName="placeholder-bold"
        navId="14"
        label="Teams"
      ></NavMenuItem>
      <NavMenuItem
        badgeType="counter"
        counter="3"
        maxCounter="66"
        iconName="placeholder-bold"
        navId="15"
        label="Contacts"
      ></NavMenuItem>
      <NavMenuItem
        iconName="placeholder-bold"
        navId="16"
        label="Whiteboards"
      ></NavMenuItem>
    </MenuSection>

    <MenuSection slot="scrollable-menubar" headerText="Section 4">
      <NavMenuItem
        badgeType="counter"
        counter="2"
        maxCounter="66"
        iconName="chat-bold"
        navId="17"
        label="Messaging"
      ></NavMenuItem>
      <NavMenuItem
        iconName="meetings-bold"
        navId="18"
        label="Meetings"
      ></NavMenuItem>
      <NavMenuItem
        badgeType="dot"
        iconName="audio-call-bold"
        navId="19"
        label="Calling"
      ></NavMenuItem>
      <NavMenuItem
        iconName="chat-bold"
        navId="20"
        label="Messaging"
      ></NavMenuItem>
      <NavMenuItem
        iconName="meetings-bold"
        navId="21"
        label="Meetings"
      ></NavMenuItem>
      <NavMenuItem
        badgeType="dot"
        iconName="audio-call-bold"
        navId="22"
        label="Calling"
      ></NavMenuItem>
    </MenuSection>

    <!-- Lower Nav (Fixed section) -->
    <MenuSection slot="fixed-menubar">
      <NavMenuItem
        iconName="settings-bold"
        navId="23"
        label="Settings"
      ></NavMenuItem>
      <NavMenuItem
        badgeType="counter"
        counter="3"
        maxCounter="66"
        iconName="help-circle-bold"
        navId="24"
        label="Help"
      ></NavMenuItem>
    </MenuSection>

    <!-- Brand Logo (Fixed section) -->
    <Icon
      slot="brand-logo"
      ariaLabel="This is a brandlogo."
      name="apple-bold"
    ></Icon>
  </SideNavigation>
</div>
```

(The **full** layout (slot names, **`onToggle`**, **variants**, **submenus**) is in [Storybook — SideNavigation / Example](https://momentum.design/storybook-static/index.html?path=/story/components-sidenavigation-sidenavigation--example).)

---

## Checklist

- [ ] Every **nav** target has a **visible** or **screen-reader** label; **submenu** tooltips filled when the design collapses the rail  
- [ ] `ThemeProvider` + `IconProvider` in the tree per [setup.md](../setup.md)  
- [ ] `Divider` and **Text** for sections match the Momentum **side nav** story  

[Storybook — SideNavigation / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-sidenavigation-sidenavigation--docs)
