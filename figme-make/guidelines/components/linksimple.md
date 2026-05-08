# Linksimple (Momentum) — Figma Make guidance

**Linksimple** is a **low-level** **`<a>`-style** link: **any** slotted **inline** content (usually **Text**, sometimes **Icon**). It has **no** fixed typography size; product chrome often uses **[Link](./link.md)** instead for consistent sizes and trailing icons. Fires **`onClick`**, **`onKeyDown`**, **`onFocus`**, **`onBlur`**. Styling: **`--mdc-link-color-*`**, **`--mdc-link-inverted-color-*`**, **`--mdc-link-border-radius`**.

See also: [Link](./link.md), [LinkButton](./linkbutton.md).

Browse the [Momentum Components catalog](https://momentum.design/en/components/) for naming; Storybook documents props and examples. Reference: [Storybook — Linksimple / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-linksimple-linksimple--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-linksimple-linksimple--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { Linksimple, Text, Icon } from "@momentum-design/components/dist/react";
```

---

## What it is

- **Base** for **Link** and other link-like parts.  
- **Same** a11y expectations: real **`href`** for navigation; **not** a **`<button>`** in disguise.

Default to **Link** for the standard MDS link + icon + size set; use **Linksimple** when the design needs a **fully custom** inline link assembly.

---

## Key props (typical)

- **`href`**, **`target`**, **`rel`**, **`inverted`**, **`softDisabled`**

---

## Example — `Linksimple` with slotted `Text`

```jsx
import { Linksimple, Text } from "@momentum-design/components/dist/react";

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

Prefer **[Link](./link.md)** when you need **`size`** + **`iconName`**.

---

## Checklist for Figma Make

- [ ] **`ThemeProvider`** per [setup.md](../setup.md); **`IconProvider`** if slotted **Icon**  
- [ ] If you need **`size`** + **`iconName`**, use **Link** for consistency  
- [ ] **Focus** and **contrast** on inverted surfaces match the frame spec  
- [ ] Do not use for destructive primary actions; use **Button** (negative) patterns instead  

Cross-check [Storybook — Linksimple / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-linksimple-linksimple--docs) and your installed package version.
