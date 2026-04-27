# StaticRadio (Momentum) — Figma Make guidance

**StaticRadio** is a **read-only** **radio** look—**no** `onChange` or **name** grouping. Use in **read-only** summaries, confirmations, or to echo which option was **chosen** in a flow. The interactive case is **Radio** / **RadioGroup** / **CardRadio**. The **`Radio`** component can style the static affordance from the [StaticRadio / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-decorator-staticradio--docs) in advanced use. Reference: [Storybook — StaticRadio / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-decorator-staticradio--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-decorator-staticradio--example).

---

## Import

```jsx
import { StaticRadio } from "@momentum-design/components/react";
```

Use `@momentum-design/components/react` only, not `@momentum-design/components` without `/react` (per [setup.md](../setup.md)).

---

## What it is

- **Props (visual only):** `checked`, `disabled`, **`readOnly`**, `softDisabled`.  
- **Slot** — the label.  
- Theming: **`--mdc-staticradio-*`**.  

**StaticRadio** is **not** a `radiogroup` member; do not wire keyboard **arrow** group unless you are building a custom a11y layer on top of **Radio**.

---

## Key props (typical)

- **`checked`**, **`readOnly`**, **`disabled`**, **`softDisabled`**

---

## Example — `StaticRadio` (selected)

```jsx
import { StaticRadio, Text } from "@momentum-design/components/react";

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

(Use a **string** in the default slot or **Text**; see [Storybook — StaticRadio / Example](https://momentum.design/storybook-static/index.html?path=/story/components-decorator-staticradio--example).)

---

## Checklist

- [ ] Real **mutually exclusive** selection uses **Radio** + `name` (or **RadioGroup**) in forms  
- [ ] Readout rows include **text** (plan name, not only a dot)  
- [ ] In tables, the cell still has a **row** label, not a lone static radio shape  

[Storybook — StaticRadio / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-decorator-staticradio--docs)
