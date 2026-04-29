# Dialog (Momentum) — Figma Make guidance

**Dialog** is a **modal** with **header**, **body**, and **footer** slots. It **blocks** the page until closed. Sizes: **small**, **medium**, **large**, **xlarge**, **fullscreen**; **variants** include **default** and **promotional**. Visibility is **fully controlled** via **`visible`**: the component does **not** own open/close state—you set **`visible`** and handle **`onClose`**. Optional **`triggerID`** restores focus to a trigger; otherwise the previously focused element is used. Reference: [Storybook — Dialog / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-dialog-dialog--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-dialog-dialog--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { Dialog, Button, Text, Link } from "@momentum-design/components/dist/react";
```

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

## Example — controlled `Dialog`

```jsx
import { useState } from "react";
import { Dialog, Button, Text } from "@momentum-design/components/dist/react";

function ConfirmAction() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open dialog</Button>

      <Dialog visible={open} onClose={() => setOpen(false)} ariaLabel="Confirm action">
        <Text slot="dialog-body" type="body-primary">
          Are you sure you want to continue?
        </Text>
        <Button slot="footer-button-secondary" type="button" onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button slot="footer-button-primary" type="button" onClick={() => setOpen(false)}>
          Confirm
        </Button>
      </Dialog>
    </>
  );
}
```

(Slot names and **footer** layout must match your Storybook for this version—see [Storybook — Dialog / Example](https://momentum.design/storybook-static/index.html?path=/story/components-dialog-dialog--example).)

---

## Checklist

- [ ] `visible` and **`onClose`** are wired so Escape and the close control **both** work  
- [ ] **`aria-label`** or **`aria-labelledby`** is set  
- [ ] Prefer **footer** slots for **Button** and **Link**; avoid orphan actions outside the pattern  
- [ ] For **long** copy, the scrollable **body** slot is used; header stays stable  

[Storybook — Dialog / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-dialog-dialog--docs)
