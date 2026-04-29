# SideNavigation (Momentum) — Figma Make guidance

**SideNavigation** (`SideNavigation` in React) is the **vertical** nav **shell**—layout variants, scrollable vs fixed groups, brand/footer chrome, expand/collapse **grabber**, and provider context for **`MenuBar`** / **`NavMenuItem`**. Props, events, slots, submenu wiring, and labeling are summarized in **[Behavior model](#behavior-model)** below. Official reference: [Storybook — SideNavigation / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-sidenavigation-sidenavigation--docs); walkthrough layout: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-sidenavigation-sidenavigation--example).

---

## Import
Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { SideNavigation, MenuBar, NavMenuItem, Text, Divider } from "@momentum-design/components/dist/react";
```

---

## Behavior model

Typed-style reference for how props, events, slots, and related components fit together (see [Storybook — SideNavigation / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-sidenavigation-sidenavigation--docs)).

### `SideNavigation` props

| Prop | Type | Role |
|------|------|------|
| `variant` | `'fixed-collapsed'` \| `'fixed-expanded'` \| `'flexible'` \| `'flexible-on-hover'` \| `'hidden'` | Chooses the shell layout: fixed collapsed/expanded widths, flexible toggle (and hover behavior where supported), or hides the nav shell. |
| `expanded` | `boolean` \| `undefined` | Whether the rail is expanded; used with flexible-style variants and grabber toggling. |
| `footerText` | `string` | Copy in the fixed footer area (e.g. customer name). |
| `grabberBtnAriaLabel` | `string` | Accessible name for the expand/collapse **grabber** (sets `aria-label` on the control). |
| `parentNavTooltipText` | `string` | Tooltip text when a **parent** row must describe an active **child** (e.g. collapsed rail with an open submenu). |

### `SideNavigation` events (React)

| Handler | Payload | When |
|---------|---------|------|
| `onToggle` | `{ expanded: boolean }` | The **grabber** toggles expanded vs collapsed. |
| `onActiveChange` | `{ navId: string; active: boolean }` | A descendant **`NavMenuItem`**’s active state changes. |

### Slots (composition)

| Slot | Purpose |
|------|---------|
| `scrollable-section` / **`scrollable-menubar`** | Scrollable nav groups — typically **`MenuSection`** with `slot="scrollable-menubar"` and **`NavMenuItem`** children. |
| `fixed-section` / **`fixed-menubar`** | Fixed bottom nav (e.g. settings, help). |
| `brand-logo` | Brand **`Icon`** / logo (often alongside footer chrome). |

**SideNavigation** is a **provider**: it supplies context to descendant **`MenuBar`** / menu sections and **`NavMenuItem`** (selection, collapsed rail behavior, submenu-related hints).

### Submenus (`NavMenuItem` + `MenuPopover`)

| Piece | Prop | Contract |
|-------|------|----------|
| **`NavMenuItem`** | Stable **`id`** | Identifies the row that triggers the submenu (Storybook / DOM identity). |
| **`MenuPopover`** | **`triggerId`** | Must match that **`NavMenuItem`**’s **`id`** so the popover binds to the correct trigger. |
| **`NavMenuItem`** / shell | **`parentNavTooltipText`** | Explains **which submenu child** is active when the rail is **collapsed** (see JSDoc). |

### Accessibility — minimum labeling

| Surface | Prop | Notes |
|---------|------|-------|
| Grabber | `grabberBtnAriaLabel` | Meaningful label for expand/collapse. |
| **`MenuBar`** | `dataAriaLabel` (per docs) | Labels the menu region for AT when the API exposes it. |
| **`NavMenuItem`** | `dataAriaLabel` / `ariaLabel` / visible **`label`** | Each row needs a clear name; follow Storybook for which prop applies in your slotting setup. |
| **`MenuSection`** / regions | `ariaLabel`, `headerText` | Describe grouped sections when multiple blocks stack in the scrollable area. |

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
