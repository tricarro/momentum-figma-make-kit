# StaticRadio (Momentum) — Figma Make guidance

**StaticRadio** is a **read-only** **radio** look—**no** **`onChange`** or **`name`** grouping. Use in **read-only** summaries, confirmations, or to echo which option was **chosen**. The interactive case is **[Radio](./radio.md)** / **[Radiogroup](./radiogroup.md)** / **[CardRadio](./cardradio.md)**. **`Radio`** can compose with static affordances—see [StaticRadio / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-decorator-staticradio--docs).

See also: [Radio](./radio.md), [Radiogroup](./radiogroup.md), [CardRadio](./cardradio.md).

Browse the [Momentum Components catalog](https://momentum.design/en/components/) for naming; Storybook documents props and examples. Reference: [Storybook — StaticRadio / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-decorator-staticradio--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-decorator-staticradio--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { StaticRadio } from "@momentum-design/components/dist/react";
```

---

## What it is

- **Props (visual only):** **`checked`**, **`disabled`**, **`readOnly`**, **`softDisabled`**.  
- **Slot** — the label.  
- Theming: **`--mdc-staticradio-*`**.

**StaticRadio** is **not** a **`radiogroup`** member; do not wire **arrow** group navigation unless you add a custom a11y layer on top of **Radio**.

---

## Key props (typical)

- **`checked`**, **`readOnly`**, **`disabled`**, **`softDisabled`**

---

## Example — `StaticRadio` (selected)

```jsx
import { StaticRadio, Text } from "@momentum-design/components/dist/react";

function ChosenPlan() {
  return (
    <StaticRadio checked readOnly>
      <Text type="body-midsize-regular" tagname="span">
        Pro plan
      </Text>
    </StaticRadio>
  );
}
```

Use a string in the default slot or **Text**—[Storybook — StaticRadio / Example](https://momentum.design/storybook-static/index.html?path=/story/components-decorator-staticradio--example).

---

## Checklist for Figma Make

- [ ] **`ThemeProvider`** per [setup.md](../setup.md)  
- [ ] Real **mutually exclusive** selection uses **Radio** + **`name`** or **[Radiogroup](./radiogroup.md)** in forms  
- [ ] Readout rows include **text** (plan name), not only the dot  
- [ ] In tables, the row still has a **row** label, not a lone static radio shape  

Cross-check [Storybook — StaticRadio / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-decorator-staticradio--docs) and your installed package version.
