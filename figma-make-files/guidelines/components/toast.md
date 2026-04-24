# Toast (Momentum) — Figma Make guidance

**Toast** is a **lightweight, non-modal** **inline**/stacked **alert**: success, warning, error, or **custom** variant. It is **controlled** from the app (show/hide, text). **Slots** — **`toast-body-normal`**, **`toast-body-detailed`**, **footer** **Button**s, **close**; wrap body copy in **`Text tagname="span"`** as **recommended**. **`onClose`** in React. **Not** a **Dialog**—**Toast** does not trap focus site-wide. **Banner** and **page**-level critical messaging may use a different **pattern**; check **Toast** **vs** **Banner** in the design file. Reference: [Storybook — Toast / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-toast-toast--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-toast-toast--example).

---

## Import

```jsx
import { Toast, Text, Button } from "@momentum-design/components/react";
```

Use `@momentum-design/components/react` only, not `@momentum-design/components` without `/react` (per `Guidelines.md`).

---

## What it is

- Theming: **`--mdc-toast-*`**.  
- **Expand** detailed body: use the **detailed** slot and footer **toggle** per Storybook.  

[Storybook — Toast / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-toast-toast--docs)
