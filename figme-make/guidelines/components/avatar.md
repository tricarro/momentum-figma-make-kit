# Avatar (Momentum) — Figma Make guidance

The **Avatar** shows a **person or space** as a **photo**, **initials**, a custom **icon**, or a **counter**. It is **not** a button: it does not take focus. For a **clickable** avatar, use **`AvatarButton`**.

See also: [AvatarButton](./avatarbutton.md).

Browse the [Momentum Components catalog](https://momentum.design/en/components/) for naming; Storybook documents props and examples. Official reference: [Storybook — Avatar / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-avatar-avatar--docs). Optional: [Avatar / Example](https://momentum.design/storybook-static/index.html?path=/story/components-avatar-avatar--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { Avatar } from "@momentum-design/components/dist/react";
```

---

## What it is

- **Display priority** (highest first): **`src` (photo)** → **`iconName` (icon)** → **`initials` (text)** → **`counter` (number)**.  
- **Photo:** while loading, **initials** (if set) or **icon** can show; on error, placeholder stays.  
- **Icon + initials without `src`:** **icon wins**; initials are ignored (icons may load later than instant initials).  
- **Default icon** if nothing else: **`user-regular`**.  
- **Initials:** first two characters, uppercased.  
- **Counter:** numeric; cap display **99+**; negatives show as **0**.  
- **`isTyping`:** shows a **typing/loading** overlay; **presence is hidden** while typing.  
- **`counter` set:** **presence** is not shown.  
- Embeds a **`Presence`**-style affordance when you pass a **`presence`** value (use the same type strings as the **Presence** component — see [Presence](./presence.md) or Storybook).  
- Defaults: **`aria-hidden="true"`** for assistive tech; set **`ariaHidden={false}`** (React) only when the avatar must be exposed.

---

## Key props (React / web component, camelCase)

- **`size`:** `24` | `32` | `48` | `64` | `72` | `88` | `124` (default **32**).  
- **`src`:** image URL (photo).  
- **`iconName`:** Momentum **icon** name (when no `src`).  
- **`initials`:** 1–2+ chars; only two shown, uppercased, when no `src` and no `iconName` (or as photo placeholder).  
- **`counter`:** number; when used, **presence** is suppressed.  
- **`presence`:** e.g. `"active"`, `"busy"`, `"dnd"`, … (see [Presence](./presence.md) or Storybook for the full set).  
- **`isTyping`:** `boolean` — typing overlay.  
- **`ariaHidden`:** `boolean` — default **`true`**.

Styling: theme tokens / `--mdc-avatar-*` custom properties in the [Storybook docs](https://momentum.design/storybook-static/index.html?path=/docs/components-avatar-avatar--docs) (`--mdc-avatar-default-background-color`, loading colors, etc.).

---

## Example — `Avatar` with initials (replace `src` with your image URL when needed)

```jsx
import { Avatar } from "@momentum-design/components/dist/react";


<Avatar initials="MD" size="88" presence="active"></Avatar>
```

---

## Checklist for Figma Make

- [ ] `Avatar` is **non-interactive**; use **`AvatarButton`** if the user can click it  
- [ ] Chosen **`size`** and content (`src` / `iconName` / `initials` / `counter`) follow **display priority** above  
- [ ] **`presence`** only when the design needs status and **`counter` / `isTyping`** are not hiding it  
- [ ] `ariaHidden` set deliberately if the image must be announced  
- [ ] `IconProvider` / theme set per [setup.md](../setup.md)  

For full props and parts, see [Storybook — Avatar / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-avatar-avatar--docs).
