# Link (Momentum) — Figma Make guidance

**Link** extends **Linksimple** and adds a **sized** text+icon **pattern**: **`iconName`**, and **`size`** for **`small`**, **`midsize`**, or **`large`** (default). Use for in-app and external **navigation**, **`mailto:`**, **`tel:`**, etc. Children are the **link text**. Fires **`onClick`**, **`onKeyDown`**, **`onFocus`**, **`onBlur`** in React. Reference: [Storybook — Link / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-link-link--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-link-link--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { Link } from "@momentum-design/components/dist/react";
```

---

## What it is

- **Inherits** **`href`**, **`target`**, **`rel`**, and link behavior from **Linksimple** (see **`linksimple.md`**).  
- **`--mdc-link-*`** and inverted tokens for state colors.  
- For **app actions** without a URL, use **Button** or **LinkButton**, not a fake `#` link.

**Link** vs **Linksimple** vs **ButtonLink** vs **LinkButton** — see **link.md**, **linksimple.md**, **linkbutton.md**, and **buttonlink.md** in this folder and [Storybook — Link / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-link-link--docs) for when to use which.

---

## Key props (typical)

- **`href`**, **`size`**, **`iconName`**, **`inverted`**, **`disabled` / softDisabled**

---

## Example — `Link` with `iconName`

```jsx
import { Link } from "@momentum-design/components/dist/react";

function PolicyLink() {
  return (
    <Link
      href="https://example.com/policy"
      size="midsize"
      iconName="link-bold"
      target="_blank"
      rel="noopener noreferrer"
    >
      Privacy policy
    </Link>
  );
}
```

(Confirm **`size`**, **`iconName`**, and **external** link **security** in [Storybook — Link / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-link-link--docs).)

---

## Checklist

- [ ] External links: **`rel`** and **`target`** (e.g. `noopener` + `noreferrer` for new tabs) per security policy  
- [ ] The visible **label** is descriptive (“Settings”), not only “Click here”  
- [ ] Icons use **Icon**/**Link**’s `iconName`; **IconProvider** at root per [setup.md](../setup.md)  

[Storybook — Link / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-link-link--docs)
