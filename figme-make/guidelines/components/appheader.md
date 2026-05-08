# Appheader (Momentum) — Figma Make guidance

**Appheader** (`Appheader` in React, web component **`mdc-appheader`**) is a **top app bar** layout: three **slots**—**leading**, **center**, and **trailing**—inside a semantic **`<header>`**. Leading is for **brand**, **product name**, or a **menu** control; **center** for **search** (`Searchfield` / `Input`) or **actions**; **trailing** for **avatars**, **settings**, or **extra actions**. It does **not** own **side** navigation; pair it with the main content area and optionally **[SideNavigation](sidenavigation.md)** in the overall shell.

See also: [Avatar](./avatar.md), [AvatarButton](./avatarbutton.md), [SideNavigation](./sidenavigation.md).

Browse the [Momentum Components catalog](https://momentum.design/en/components/) for naming; Storybook documents props and examples. Reference: [Storybook — Appheader / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-appheader--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-appheader--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import {
  Appheader,
  Avatar,
  Brandvisual,
  Button,
  Chip,
  Searchfield,
} from "@momentum-design/components/dist/react";
```

---

## What it is

- **Slots:** `leading` · `center` · `trailing`. Each section is a **flex** row: leading **start**-aligned, center **center**-aligned, trailing **end**-aligned; all three share **equal flex growth** so space distributes predictably.  
- **Height / chrome:** default **`--mdc-appheader-height: 4rem` (64px)** on the host; the container uses **`padding: 1rem`**. Override height only with **`--mdc-appheader-height`** on **`Appheader`** (or a wrapper) if the **uploaded design** specifies a different bar height—align to that file before changing tokens.  
- **CSS `::part(...)`:** From a stylesheet you can target the host’s shadow parts, e.g. **`mdc-appheader::part(container)`**, **`::part(leading-section)`**, **`::part(center-section)`**, **`::part(trailing-section)`** (names match Storybook). Prefer composition and tokens first—use **`::part`** only for rare layout polish.  
- **Composition:** put **Momentum** children in each slot—**`Button`**, **`Text`**, **`Searchfield`**, **`Input`**, **`Icon`**, **`Avatar`**, **`AvatarButton`**, **`MenuBar`**, etc. Match **labels**, **icons**, and **hit targets** to the design and to each component’s doc.  

**Appheader** is only the **horizontal** header strip; page **title** flows, **tabs**, and **left nav** are composed **outside** or **below** it per layout ([styles.md](../styles.md#layout)).

---

## Slots (no component-specific React props)

| Slot | Role | Typical content |
| --- | --- | --- |
| **`leading`** | Start | Menu **`Button`**, **brand** / **`Text`**, **`Icon`** + label |
| **`center`** | Middle | **`Searchfield`** or **`Input`**, or grouped actions / **`Text`** |
| **`trailing`** | End | **`Avatar`** / **`AvatarButton`**, **`Button`**, **`Icon`** + **`Tooltip`** |

Assign slots with **`slot="leading"`**, **`slot="center"`**, **`slot="trailing"`** on the **direct** child (or a wrapping **`div`**) in JSX.

---

## Example — `Appheader` with search and profile

```jsx
import {
  Appheader,
  Avatar,
  Brandvisual,
  Button,
  Chip,
  Searchfield,
} from "@momentum-design/components/dist/react";


<Appheader>
  <div
    slot="leading"
    style={{
      display: "flex",
      alignItems: "center",
      gap: "var(--mds-spacing-inline-xs, 0.5rem)",
    }}
  >
    <Button
      variant="tertiary"
      prefixIcon="application-panel-bold"
      ariaLabel="Open navigation menu"
    ></Button>
    <Brandvisual
      name="momentum-design-logo-dark-color-horizontal"
      style={{ display: "block" }}
    ></Brandvisual>
    <Chip color="cobalt" label="cobalt"></Chip>
  </div>
  <div slot="center">
    <Searchfield label="Search" placeholder="Search"></Searchfield>
  </div>
  <div
    slot="trailing"
    style={{
      display: "flex",
      alignItems: "center",
      gap: "var(--mds-spacing-inline-xs, 0.5rem)",
    }}
  >
    <Avatar name="avatar" src="https://picsum.photos/id/8/5000/3333"></Avatar>
    <Button
      variant="tertiary"
      prefixIcon="waffle-menu-bold"
      ariaLabel="Open app menu"
    ></Button>
  </div>
</Appheader>
```

(Simplify or swap slot contents to match the **uploaded design**; full **shell** patterns are in [Storybook — Appheader / Example](https://momentum.design/storybook-static/index.html?path=/story/components-appheader--example).)

---

## Checklist for Figma Make

- [ ] `ThemeProvider` + `IconProvider` in the tree per [setup.md](../setup.md)  
- [ ] **Meaning** for **icon-only** and **search** controls: **`title`**, **`aria`**, or **`label`/`helpText`** on **`Input`/`Searchfield`/`Button`** as required  
- [ ] **Avatar** in the trailing slot: if it must be **clickable** or open a **menu**, prefer **`AvatarButton`** per [avatar.md](avatar.md)  
- [ ] **Bar height** and **slot** contents match the **uploaded Figma** (or use default **4rem** and package padding)  
- [ ] **Side** navigation stays in **`SideNavigation`**, not inside **`Appheader`** (see [sidenavigation.md](sidenavigation.md))  

[Storybook — Appheader / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-appheader--docs)
