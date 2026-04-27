# ButtonLink (Momentum) — Figma Make guidance

**ButtonLink** is an **`<a>`-style** control that **looks** like **Button** (variant, size, **prefix** / **postfix** icons). Use for **same-page anchors** or off-site **navigation**; use **`Button`** for **in-app actions** with no URL. It extends **`Linksimple`**: **`href`**, **`target`**, **`rel`**, etc. Reference: [Storybook — ButtonLink / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-button-buttonlink--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-button-buttonlink--example).

---

## Import

```jsx
import { ButtonLink } from "@momentum-design/components/react";
```

Use `@momentum-design/components/react` only, not `@momentum-design/components` without `/react` (per [setup.md](../setup.md)).

---

## What it is

- **Visuals:** same mental model as **`Button`** (sizes, variants, `prefixIcon` / `postfixIcon`, default slot = label).  
- **Link behavior:** `href` required for navigation; supports **`onClick`**, **`onKeyDown`**, **`onFocus`**, **`onBlur`**.  
- **`softDisabled`:** looks disabled, still focusable (you must block real navigation in handlers if used).  
- Styling: `--mdc-button-*` family as in the [ButtonLink](https://momentum.design/storybook-static/index.html?path=/docs/components-button-buttonlink--docs) doc.

**External** links: set **`rel`** (e.g. `noopener noreferrer`) and **`target`** as required by your policy when `target="_blank"`.

---

## Key props (link + button styling)

- **`href`**, **`target`**, **`rel`**, **`size`**, **`variant`**, **`color`**  
- **`prefixIcon`**, **`postfixIcon`**, **`softDisabled`**  
- **`onClick`**, **`onFocus`**, **`onBlur`**

---

## Example

```jsx
import { ButtonLink } from "@momentum-design/components/dist/react";


<div role="main">
  <ButtonLink
    href="https://www.webex.com"
    target="_blank"
    rel="noopener noreferrer"
    >VisitLink</ButtonLink
  >
</div>
```

Use a real internal help URL in production.

---

## Checklist

- [ ] `href` points to a **real** destination; no `#` unless you handle focus in the same view  
- [ ] `Button` (not `ButtonLink`) for **form submit** / in-app only actions  
- [ ] External links: **`rel`** + **`target`** as required  

[Storybook — ButtonLink / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-button-buttonlink--docs)
