# Link (Momentum) — Figma Make guidance

**Link** extends **Linksimple** and adds a **sized** text+icon **pattern**: **`iconName`**, and **`size`** for **`small`**, **`midsize`**, or **`large`** (default). Use for in-app and external **navigation**, **`mailto:`**, **`tel:`**, etc. Children are the **link text**. Fires **`onClick`**, **`onKeyDown`**, **`onFocus`**, **`onBlur`** in React. Reference: [Storybook — Link / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-link-link--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-link-link--example).

---

## Import

```jsx
import { Link } from "@momentum-design/components/react";
```

Use `@momentum-design/components/react` only, not `@momentum-design/components` without `/react` (per `Guidelines.md`).

---

## What it is

- **Inherits** **`href`**, **`target`**, **`rel`**, and link behavior from **Linksimple** (see **`linksimple.md`**).  
- **`--mdc-link-*`** and inverted tokens for state colors.  
- For **app actions** without a URL, use **Button** or **LinkButton**, not a fake `#` link.

**Link** vs **Linksimple** vs **ButtonLink** vs **LinkButton** — `Guidelines.md` and Storybook describe when to use which.

---

## Key props (typical)

- **`href`**, **`size`**, **`iconName`**, **`inverted`**, **`disabled` / softDisabled**

---

## Checklist

- [ ] External links: **`rel`** and **`target`** (e.g. `noopener` + `noreferrer` for new tabs) per security policy  
- [ ] The visible **label** is descriptive (“Settings”), not only “Click here”  
- [ ] Icons use **Icon**/**Link**’s `iconName`; **IconProvider** at root per `Guidelines.md`  

[Storybook — Link / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-link-link--docs)
