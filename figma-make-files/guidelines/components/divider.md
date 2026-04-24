# Divider (Momentum) — Figma Make guidance

**Divider** draws a **line** to separate content. It infers a **type** from what you put in the (default) **slot**: **Primary** (empty) — a plain line; **Text** — centered **`Text`**; **Grabber** — a centered **`Button`** to resize a pane. **`orientation`:** `horizontal` or `vertical` (vertical **text** in the center is **not** supported in the current doc). **Variant:** e.g. **solid** or **gradient**; see the [doc](https://momentum.design/storybook-static/index.html?path=/docs/components-decorator-divider--docs) for the full list. Reference: [Storybook — Divider / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-decorator-divider--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-decorator-divider--example).

---

## Import

```jsx
import { Divider, Text, Button } from "@momentum-design/components/react";
```

Use `@momentum-design/components/react` only, not `@momentum-design/components` without `/react` (per `Guidelines.md`).

---

## What it is

- **One** allowed child type in the slot: **`mdc-text`**, **`mdc-button`**, or nothing. Multiple or wrong tags **fall back** to Primary.  
- **Grabber** buttons: pass **`aria-label`**, **`aria-expanded`**, and wire resize behavior; see Storybook.  
- Large set of **`--mdc-divider-*`** custom properties.  

**Divider** for **structure**; for **in-app** “or” in forms, use **Text**+pattern from components, not a random line.

---

## Key props (typical)

- **`orientation`**, **`variant` / line style`

---

## Example — horizontal `Divider` and with centered `Text`

```jsx
import { Divider, Text } from "@momentum-design/components/react";

function SectionBreak() {
  return (
    <div>
      <Divider orientation="horizontal" />
      <Divider orientation="horizontal">
        <Text type="body-midsize-regular" tagname="span">
          Or
        </Text>
      </Divider>
    </div>
  );
}
```

(Use **one** child type in the default slot: nothing, `Text`, or a grabber `Button`—see [Storybook — Divider / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-decorator-divider--docs).)

---

## Checklist

- [ ] Grabber patterns have **name** and **state** in ARIA, not only an icon  
- [ ] Sufficient **contrast** for the line against the surface (tokens, not ad-hoc hex)  
- [ ] Vertical layout does not use **Text**-in-the-middle; that pattern is not supported for vertical in the [package note](https://momentum.design/storybook-static/index.html?path=/docs/components-decorator-divider--docs)  

[Storybook — Divider / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-decorator-divider--docs)
