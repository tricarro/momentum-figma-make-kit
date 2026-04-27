# Linksimple (Momentum) — Figma Make guidance

**Linksimple** is a **low-level** **`<a>`-style** link: **any** slotted **inline** content (usually **Text**, sometimes **Icon**). It has **no** fixed typography size; product chrome often uses **Link** instead for consistent sizes and trailing icons. Fires **`onClick`**, **`onKeyDown`**, **`onFocus`**, **`onBlur`**. Styling: **`--mdc-link-color-*`**, **`--mdc-link-inverted-color-*`**, and **`--mdc-link-border-radius`**. Reference: [Storybook — Linksimple / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-linksimple-linksimple--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-linksimple-linksimple--example).

---

## Import

```jsx
import { Linksimple, Text, Icon } from "@momentum-design/components/react";
```

Use `@momentum-design/components/react` only, not `@momentum-design/components` without `/react` (per [setup.md](../setup.md)).

---

## What it is

- **Base** for **Link** and other link-like parts (e.g. **ButtonLink** uses a different path).  
- **Same** a11y expectations: real `href` for navigation; **not** a `<button>` in disguise.  

**Linksimple** when the design needs a **fully custom** inline link assembly; default to **Link** for the standard MDS link + icon + size set.

---

## Key props (typical)

- **`href`**, **`target`**, **`rel`**, **`inverted`**, **`softDisabled`**

---

## Example — `Linksimple` with slotted `Text`

```jsx
import { Linksimple, Text } from "@momentum-design/components/react";

function SupportLink() {
  return (
    <Linksimple href="https://help.example.com" rel="noopener noreferrer" target="_blank">
      <Text type="body-primary" tagname="span">
        Get help
      </Text>
    </Linksimple>
  );
}
```

(Prefer **`Link`** when you need a **size** + **icon** pattern. See [Storybook — Linksimple / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-linksimple-linksimple--docs).)

---

## Checklist

- [ ] If you need size + `iconName`, use **Link** for consistency  
- [ ] Document **focus** and **contrast** on inverted surfaces in your frame  
- [ ] Don’t use for destructive primary actions; use **Button** (negative) patterns instead  

[Storybook — Linksimple / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-linksimple-linksimple--docs)
