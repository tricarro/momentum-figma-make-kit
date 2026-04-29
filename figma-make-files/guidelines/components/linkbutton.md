# LinkButton (Momentum) — Figma Make guidance

**LinkButton** **looks** like a **link** and **acts** like a **button** (extends **Buttonsimple** behaviors): in-app **actions** without a destination **URL**—dismiss, expand, or trigger logic that is **not** navigation. It supports **`onClick`**, **`onKeyDown`**, **`onKeyUp`**, **`onFocus`**, **`onBlur`**. Figma Make should prefer **LinkButton** over a `<a href="#">` anti-pattern. Reference: [Storybook — LinkButton / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-linkbutton-linkbutton--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-linkbutton-linkbutton--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { LinkButton } from "@momentum-design/components/dist/react";
```

---

## What it is

- **Slot** — text label; optional **trailing** **Icon** in Storybook patterns.  
- **Sizing** — `LinkButtonSize` (see the [doc](https://momentum.design/storybook-static/index.html?path=/docs/components-linkbutton-linkbutton--docs) for the exact set; matches link visual scale).  
- Theming: **`--mdc-link-color-*`**, height via **`--mdc-button-height`**, and related tokens.  

**Link** / **Linksimple** for **hrefs**; **Button** for more prominent actions; **LinkButton** for **tertiary**-looking actions that are still **button** semantics.

---

## Key props (typical)

- **`type`**, **`size`**, **`onClick`**, **`disabled`**, **`softDisabled`**

---

## Example — `LinkButton` (in-app action, not navigation)

```jsx
import { useState } from "react";
import { LinkButton } from "@momentum-design/components/dist/react";

function ExpandDetails() {
  const [open, setOpen] = useState(false);

  return (
    <LinkButton type="button" size="midsize" onClick={() => setOpen((o) => !o)}>
      {open ? "Hide" : "Show"} details
    </LinkButton>
  );
}
```

(Use a **real** `href` with **`Link`**; use **`LinkButton`** only for **actions** with **no** URL, per [Storybook — LinkButton / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-linkbutton-linkbutton--docs).)

---

## Checklist

- [ ] `type="button"` when the control is not submitting a form  
- [ ] Use a **link-styled** control for actions; use **Link** when there is a **real** URL  
- [ ] `IconProvider` in the app root if using icons in the slot per [setup.md](../setup.md)  

[Storybook — LinkButton / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-linkbutton-linkbutton--docs)
