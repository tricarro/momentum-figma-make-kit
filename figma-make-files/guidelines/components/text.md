# Text (Momentum) — Figma Make guidance

**Text** is the **typography** primitive: **`type`** maps to the design type scale, **`tagname`** overrides the **HTML** tag (default **`p`**; must be a **valid** tag or it falls back). Content goes in the **default** slot. Must be under **`ThemeProvider`** so **token** colors and **font** work. Styling: **`csspart` `text`** and the **`type`** matrix in the [doc](https://momentum.design/storybook-static/index.html?path=/docs/components-text-text--docs). Use **Text** for **all** Momentum **copy** in Figma Make—**no** raw `<span>` with random font sizes. Reference: [Storybook — Text / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-text-text--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-text-text--example).

---

## Import

```jsx
import { Text } from "@momentum-design/components/react";
```

Use `@momentum-design/components/react` only, not `@momentum-design/components` without `/react` (per [setup.md](../setup.md)).

---

## What it is

- **Link**-like inline: often **`Link`** or **`Text`**+**`tagname="span"`** in context—follow Storybook.  
- **Typewriter** animation is a **separate** **Typewriter** component, not a prop on **Text** alone.  

---

## Example — `Text` (heading + body)

```jsx
import { Text } from "@momentum-design/components/react";

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

(Choose **`type`** and **`tagname`** from the matrix in [Storybook — Text / Example](https://momentum.design/storybook-static/index.html?path=/story/components-text-text--example).)

[Storybook — Text / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-text-text--docs)
