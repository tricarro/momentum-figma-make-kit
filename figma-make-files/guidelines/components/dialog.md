# Dialog (Momentum) — Figma Make guidance

**Dialog** is a **modal** with **header**, **body**, and **footer** slots. It **blocks** the page until closed. Sizes: **small**, **medium**, **large**, **xlarge**, **fullscreen**; **variants** include **default** and **promotional**. Visibility is **fully controlled** via **`visible`**: the component does **not** own open/close state—you set **`visible`** and handle **`onClose`**. Optional **`triggerID`** restores focus to a trigger; otherwise the previously focused element is used. Reference: [Storybook — Dialog / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-dialog-dialog--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-dialog-dialog--example).

---

## Import

```jsx
import { Dialog, Button, Text, Link } from "@momentum-design/components/react";
```

Use `@momentum-design/components/react` only, not `@momentum-design/components` without `/react` (per `Guidelines.md`).

---

## What it is

- **Slots:** `header-prefix`, `dialog-body`, `footer-button-primary` / `footer-button-secondary`, `footer-link`, or **`footer`** for custom layouts.  
- **Events (React):** **`onClose`** (close button or **Escape** — it does not automatically hide; your handler should set `visible` false), **`onShown`**, **`onHidden`**, **`onCreated`**, **`onDestroyed`**.  
- **A11y:** you must set **`aria-label`** or **`aria-labelledby`** (often the visible title’s id).  
- **Layout:** max height follows viewport; body and dialog scroll with **`overflow: auto`**.  
- Theming: **`--mdc-dialog-*`** in the [docs](https://momentum.design/storybook-static/index.html?path=/docs/components-dialog-dialog--docs).

**Dialog** for blocking tasks; use **AnnouncementDialog** or lighter patterns for non-modal messaging when Storybook allows.

---

## Key props (typical)

- **`visible`**, **`onClose`**, **`triggerId`**, **`variant`**, size-related props, **`ariaLabel`** / `aria-labelledby`

---

## Checklist

- [ ] `visible` and **`onClose`** are wired so Escape and the close control **both** work  
- [ ] **`aria-label`** or **`aria-labelledby`** is set  
- [ ] Prefer **footer** slots for **Button** and **Link**; avoid orphan actions outside the pattern  
- [ ] For **long** copy, the scrollable **body** slot is used; header stays stable  

[Storybook — Dialog / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-dialog-dialog--docs)
