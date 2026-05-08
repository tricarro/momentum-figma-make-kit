# Text (Momentum) — Figma Make guidance

**Text** is the **typography** primitive: **`type`** selects the design type scale; **`tagname`** overrides the **HTML** tag (default **`p`**; must be **valid** or it falls back). Content goes in the **default** slot. Must sit under **[ThemeProvider](./themeprovider.md)** so **token** colors and **font** apply. Styling: **csspart** **`text`** and the **`type`** matrix in the [doc](https://momentum.design/storybook-static/index.html?path=/docs/components-text-text--docs). Use **Text** for **all** Momentum copy in prototypes—avoid raw **`<p>`** / **`<span>`** with ad-hoc styling (see workspace guidelines).

See also: [ThemeProvider](./themeprovider.md), [Link](./link.md).

Browse the [Momentum Components catalog](https://momentum.design/en/components/) for naming; Storybook documents props and examples. Reference: [Storybook — Text / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-text-text--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-text-text--example).

---

## Import

Requires <ThemeProvider> ancestor. Use **[IconProvider](./iconprovider.md)** when children include **[Icon](./icon.md)**. See setup.md.

```jsx
import { Text } from "@momentum-design/components/dist/react";
```

---

## What it is

- **Inline** emphasis / links: often **[Link](./link.md)** or **`Text`** with **`tagname="span"`**—follow Storybook.  
- **Typewriter** animation is the separate **Typewriter** component, not a **`Text`** prop.

---

## Example — `Text` (heading + body)

```jsx
import { Text } from "@momentum-design/components/dist/react";

function Blurb() {
  return (
    <div>
      <Text type="heading-3" tagname="h1">
        Welcome
      </Text>
      <Text type="body-primary" tagname="p">
        This copy uses the Momentum type scale.
      </Text>
    </div>
  );
}
```

Choose **`type`** and **`tagname`** from the matrix in [Storybook — Text / Example](https://momentum.design/storybook-static/index.html?path=/story/components-text-text--example).

---

## Checklist for Figma Make

- [ ] **`ThemeProvider`** wraps the subtree so **`type`** resolves correctly  
- [ ] **`IconProvider`** when slotted content uses **Icon**  
- [ ] **`type`** matches hierarchy (heading vs body vs label)—do not invent sizes outside the matrix  

Cross-check [Storybook — Text / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-text-text--docs) and your installed **`@momentum-design/components`** version.
