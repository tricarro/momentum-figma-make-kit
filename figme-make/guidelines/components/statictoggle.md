# StaticToggle (Momentum) — Figma Make guidance

**StaticToggle** is a **read-only** **toggle** (switch) appearance, matching **[Toggle](./toggle.md)** without interaction. **Props:** **`checked`** (on/off), **`size`** **`default`** \| **`compact`**, plus **`readOnly`**, **`disabled`**, **`softDisabled`**. The interactive case is **Toggle** (often with **[FormfieldGroup](./formfieldgroup.md)** for groups). Parent **`mdc-toggle`** can compose static visuals per JSDoc.

See also: [Toggle](./toggle.md), [FormfieldGroup](./formfieldgroup.md).

Browse the [Momentum Components catalog](https://momentum.design/en/components/) for naming; Storybook documents props and examples. Reference: [Storybook — StaticToggle / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-decorator-statictoggle--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-decorator-statictoggle--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { StaticToggle } from "@momentum-design/components/dist/react";
```

---

## What it is

- **Read-only** settings echo, invoices, compliance summaries.  
- **Slot** usage follows **Toggle** composition when used alone—see Storybook.  
- Theming: **`--mdc-statictoggle-*`**.

**StaticToggle** is **not** a form **`switch`**; use **Toggle** when the value can **change** immediately.

---

## Key props (typical)

- **`checked`**, **`size`**, **`readOnly`**, **`disabled`**, **`softDisabled`**

---

## Example — `StaticToggle` (on)

```jsx
import { StaticToggle, Text } from "@momentum-design/components/dist/react";

function NotifReadout() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "var(--mds-spacing-inline-xs, 0.5rem)",
      }}
    >
      <StaticToggle checked size="default" readOnly />
      <Text type="body-midsize-regular" tagname="span">
        Notifications on
      </Text>
    </div>
  );
}
```

Confirm **slot** / layout in [Storybook — StaticToggle / Example](https://momentum.design/storybook-static/index.html?path=/story/components-decorator-statictoggle--example).

---

## Checklist for Figma Make

- [ ] **`ThemeProvider`** per [setup.md](../setup.md)  
- [ ] If the user can **flip** the value, use **Toggle** and **`onChange`**  
- [ ] Pair with **Text** so “on” is not only green vs gray  
- [ ] **`compact`** only when density matches the rest of the list  

Cross-check [Storybook — StaticToggle / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-decorator-statictoggle--docs) and your installed package version.
