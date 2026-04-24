# Presence (Momentum) — Figma Make guidance

**Presence** is the small **status indicator** (active, busy, in a meeting, and so on). **Avatars** and **AvatarButton** can show presence via their **`presence`** property, which uses the same **type** values. Use the standalone **`<Presence />`** when you need a **presence chip** next to custom layout (or outside the default avatar flow). Official reference: [Storybook — Presence / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-avatar-presence--docs). Optional: [Presence / Example](https://momentum.design/storybook-static/index.html?path=/story/components-avatar-presence--example).

---

## Import

```jsx
import { Presence } from "@momentum-design/components/react";
```

Use `@momentum-design/components/react` only, not `@momentum-design/components` without `/react` (per `Guidelines.md`).

---

## What it is

- Renders a **colored** presence affordance and **icon** for a given **status type**.  
- **`size`:** the overall presence footprint; allowed values: **`24`**, **`32`**, **`48`**, **`64`**, **`72`**, **`88`**, **`124`** (default **32**). Very small avatars still enforce a **minimum ~14px** icon read from the design spec in Storybook.  
- Theming is via **`--mdc-presence-*-background-color`** per type (e.g. `--mdc-presence-active-background-color`, `…-busy-…`, `…-meeting-…`); see the [Storybook CSS property list](https://momentum.design/storybook-static/index.html?path=/docs/components-avatar-presence--docs).

**`type` values (string, default `active`):**  
`active` · `away` · `away-calling` · `busy` · `dnd` · `meeting` · `on-call` · `on-device` · `on-mobile` · `pause` · `pto` · `presenting` · `quiet` · `scheduled` · and **`overlay`** (see [Storybook](https://momentum.design/storybook-static/index.html?path=/docs/components-avatar-presence--docs)).

**Relationship to Avatar / AvatarButton:** set **`presence={type}`** on those components to render presence **on** the avatar. **Standalone `Presence`** is for **repeated** or **non-avatar** layouts. Note: on **Avatar**, presence is **hidden** when **`counter`** is set or **`isTyping`** is true.

---

## Key props

- **`type`:** one of the values above; default **`active`**.  
- **`size`:** one of `24` | `32` | `48` | `64` | `72` | `88` | `124`; default **32**.

---

## Example — standalone `Presence`

```jsx
import { Presence, Text } from "@momentum-design/components/react";

function StatusRow() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "var(--mds-space-150, 0.375rem)" }}>
      <Presence type="meeting" size={32} />
      <Text type="body-midsize-medium" tagname="span">
        In a meeting
      </Text>
    </div>
  );
}
```

**Note:** use **kebab-case** `type` values (e.g. `on-mobile`, `away-calling`).

---

## Checklist for Figma Make

- [ ] `Presence` is only for **status** UI; use **`Avatar`** / **`AvatarButton`** `presence` for badge-on-avatar  
- [ ] `type` and `size` match the design; verify against [Storybook](https://momentum.design/storybook-static/index.html?path=/docs/components-avatar-presence--docs)  
- [ ] Do not use standalone `Presence` to fake **avatars**; pair with `Text` or other MDS for labels  
- [ ] `IconProvider` / theme per `Guidelines.md`  

For CSS parts and token names, see [Storybook — Presence / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-avatar-presence--docs).
