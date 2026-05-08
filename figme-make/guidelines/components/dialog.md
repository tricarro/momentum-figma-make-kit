# Dialog (Momentum) — Figma Make guidance

**Dialog** is a **modal** with **header**, **body**, and **footer** slots. It **blocks** the page until closed. Sizes: **small**, **medium**, **large**, **xlarge**, **fullscreen**; **variants** include **default** and **promotional**. Visibility is **controlled** via **`visible`**: the component does **not** own open/close state—you set **`visible`** and handle **`onClose`**. Optional **`triggerID`** (matches the package prop: capital **`ID`**) restores focus to the element whose **`id`** matches that string.

See also: [Popover](./popover.md) (non-modal surfaces), [Coachmark](./coachmark.md) (teaching popover).

Browse the [Momentum Components catalog](https://momentum.design/en/components/) for naming; Storybook documents props and examples. Reference: [Storybook — Dialog / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-dialog-dialog--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-dialog-dialog--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { Dialog, Button, Text, Link } from "@momentum-design/components/dist/react";
```

---

## What it is

- **Slots:** **`header-prefix`**, **`dialog-body`**, **`footer-button-primary`** / **`footer-button-secondary`**, **`footer-link`**, or **`footer`** for custom layouts.  
- **Events (React):** **`onClose`** (close control or **Escape**—you still set **`visible`** false in state), **`onShown`**, **`onHidden`**, **`onCreated`**, **`onDestroyed`**.  
- **A11y:** set **`ariaLabel`** or **`aria-labelledby`** (often tie to visible title **`id`**).  
- **Layout:** max height follows viewport; body scrolls with **`overflow: auto`** where Storybook shows it.  
- Theming: **`--mdc-dialog-*`** in the [docs](https://momentum.design/storybook-static/index.html?path=/docs/components-dialog-dialog--docs).

Use **Dialog** for blocking tasks; lighter patterns (e.g. inline **Announcement**) only when Storybook/product allow.

---

## Key props (typical)

- **`visible`**, **`onClose`**, **`triggerID`**, **`variant`**, size props, **`ariaLabel`** / **`aria-labelledby`**

---

## Example — controlled `Dialog`

```jsx
import { useState } from "react";
import { Dialog, Button, Text } from "@momentum-design/components/dist/react";

function ConfirmAction() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button type="button" onClick={() => setOpen(true)}>
        Open dialog
      </Button>

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

Slot names must match [Storybook — Dialog / Example](https://momentum.design/storybook-static/index.html?path=/story/components-dialog-dialog--example) for your package version.

---

## Checklist for Figma Make

- [ ] **`ThemeProvider`** + **`IconProvider`** when header/footer use icons  
- [ ] **`visible`** and **`onClose`** wired so Escape and close control both collapse the dialog  
- [ ] **`ariaLabel`** or **`aria-labelledby`** set  
- [ ] Prefer **footer** slots for **Button** / **Link**; long copy lives in the scrollable **body**  

Cross-check [Storybook — Dialog / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-dialog-dialog--docs) and your installed package version.
