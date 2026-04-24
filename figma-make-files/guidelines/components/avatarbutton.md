# AvatarButton (Momentum) — Figma Make guidance

**AvatarButton** is the **interactive** form of **Avatar**: same **photo / icon / initials / counter / presence** behavior, wrapped in a **button** (focusable, click, keyboard). For **display-only** avatars, use **`Avatar`**. Official reference: [Storybook — AvatarButton / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-avatar-avatarbutton--docs). Optional: [AvatarButton / Example](https://momentum.design/storybook-static/index.html?path=/story/components-avatar-avatarbutton--example).

---

## Import

```jsx
import { AvatarButton } from "@momentum-design/components/react";
```

Use `@momentum-design/components/react` only, not `@momentum-design/components` without `/react` (per `Guidelines.md`).

---

## What it is

- Extends **`Buttonsimple`**: supports **`onClick`**, **`onKeyDown`**, **`onKeyUp`**, **`onFocus`**, **`disabled`**, **`softDisabled`**, **`type`** (e.g. `"button"`), and button **size** where applicable—see the package and Storybook for the exact matrix with avatar sizing.  
- Inherits **avatar** behavior: same **display priority** as **`Avatar`** (`src` → `iconName` → `initials` → `counter`), plus **`presence`**, **`isTyping`**, and **`size`** in the **avatar** sense (`24`–`124`).  
- **Accessibility:** the docs require a meaningful **`ariaLabel`** (React: **`ariaLabel`**) on the control.

---

## Key props (in addition to Avatar)

- **`ariaLabel`:** **Required** for a meaningful accessible name (e.g. "Open profile for Alex").  
- **`onClick`**, **`disabled`**, **`type`**, etc.: as in `Buttonsimple` / Storybook.

`--mdc-avatarbutton-*` variables control overlay, avatar fill, and loading (see [docs](https://momentum.design/storybook-static/index.html?path=/docs/components-avatar-avatarbutton--docs)).

---

## Example — `AvatarButton`

```jsx
import { AvatarButton } from "@momentum-design/components/react";

function OpenProfile() {
  return (
    <AvatarButton
      size={32}
      initials="TC"
      presence="busy"
      type="button"
      ariaLabel="Open profile for Taylor"
      onClick={() => { /* open profile */ }}
    />
  );
}
```

---

## Checklist for Figma Make

- [ ] **Always** set a descriptive **`ariaLabel`**  
- [ ] Use **`type="button"`** when the control is not submitting a form  
- [ ] Prefer **`Avatar`** when the element is not actionable  
- [ ] Match **`Avatar`** content rules: `src` / `iconName` / `initials` / `counter` and **`presence` / `isTyping`**  
- [ ] `IconProvider` / theme per `Guidelines.md`  

For events, disabled states, and CSS parts (`overlay`, `content`, `photo`, `presence`, `loader`, …), see [Storybook — AvatarButton / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-avatar-avatarbutton--docs).
