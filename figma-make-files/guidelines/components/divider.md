# Divider (Momentum) — Figma Make guidance

**Divider** draws a **line** to separate content. It infers a **type** from the **default** slot: **Primary** (empty)—plain line; **Text**—centered **`Text`**; **Grabber**—centered **`Button`** to resize a pane. **`orientation`:** **`horizontal`** or **`vertical`** (vertical **centered text** is **not** supported). **`variant`:** **`solid`** or **`gradient`** (see [docs](https://momentum.design/storybook-static/index.html?path=/docs/components-decorator-divider--docs)).

See also: [Bullet](./bullet.md), [Marker](./marker.md).

Browse the [Momentum Components catalog](https://momentum.design/en/components/) for naming; Storybook documents props and examples. Reference: [Storybook — Divider / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-decorator-divider--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-decorator-divider--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { Divider, Text, Button } from "@momentum-design/components/dist/react";
```

---

## What it is

- **One** allowed child pattern in the slot: **`Text`**, grabber **`Button`**, or **nothing**. Invalid or multiple children **fall back** to Primary.  
- **Grabber** **`Button`**: set **`aria-label`**, **`aria-expanded`**, wire resize logic per Storybook.  
- Large set of **`--mdc-divider-*`** custom properties.

### Defaults (package)

**`orientation`** **`horizontal`**, **`variant`** **`solid`**.

**Divider** for **layout structure**; arbitrary “or” copy in forms should still use **`Text`** and tokens, not unlabeled lines alone.

---

## Key props (typical)

- **`orientation`**, **`variant`**, **`arrowDirection`**, **`buttonPosition`** (grabber-only—see Storybook)

---

## Example — horizontal `Divider` and with centered `Text`

```jsx
import { Divider, Text } from "@momentum-design/components/dist/react";

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

Use **one** child type: nothing, **`Text`**, or grabber **`Button`**—see [Storybook — Divider / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-decorator-divider--docs).

---

## Checklist for Figma Make

- [ ] **`ThemeProvider`** per [setup.md](../setup.md)  
- [ ] Grabber patterns expose **name** and **state** in ARIA, not only an icon  
- [ ] **Contrast** for the line uses tokens, not ad-hoc hex  
- [ ] Do not put **centered `Text`** on **vertical** orientation (unsupported)  

Cross-check [Storybook — Divider / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-decorator-divider--docs) and your installed package version.
