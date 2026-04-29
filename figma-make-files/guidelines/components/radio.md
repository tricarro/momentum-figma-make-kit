# Radio (Momentum) — Figma Make guidance

**Radio** is a single **option** in a **mutually exclusive** set. All radios in the set share the same **`name`**, or sit inside **RadioGroup** (preferred for label + help). **Events:** **`onInput`**, **`onChange`**, **`onFocus`**. The visual circle comes from the **`radio-indicator`** part (built on [StaticRadio](https://momentum.design/storybook-static/index.html?path=/docs/components-decorator-staticradio--docs)); you can **slot** a custom **`indicator`**. **`required`** does not show a required field asterisk on the radio by itself—put validation on **RadioGroup**’s help text or the radio’s **`validationMessage`**, per the package. Reference: [Storybook — Radio / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-radio-radio--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-radio-radio--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { Radio, RadioGroup, Text } from "@momentum-design/components/dist/react";
```

---

## What it is

- **Keyboard:** **Arrow** between options, **Space** to select, **Tab** for groups, **Enter** to submit the form.  
- **`dataAriaLabel`:** when there is no visible **label** slot.  
- **card** UIs: **CardRadio** is an alternative **pattern**; see **`cardradio.md`**.  

**Radio** in forms; **StaticRadio** for read-only; **ListItem**+radio for list patterns.

---

## Example — one `Radio` in a set (prefer **`RadioGroup`** in real forms)

```jsx
import { RadioGroup, Radio } from "@momentum-design/components/dist/react";

function OneOfThree() {
  return (
    <RadioGroup name="size" headerText="Shirt size" label="Shirt size">
      <Radio label="Small" value="s" />
      <Radio label="Medium" value="m" />
      <Radio label="Large" value="l" />
    </RadioGroup>
  );
}
```

(Confirm **group** and **`Radio` value** API in [Storybook — Radio / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-radio-radio--docs) and [RadioGroup / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-radiogroup-radiogroup--docs).)

---

## Checklist

- [ ] **RadioGroup** (or a shared `name`) ties every **Radio** in the set  
- [ ] Group error copy lives on **RadioGroup** (recommended) or per-field as in Storybook  
- [ ] `IconProvider` in the app root per [setup.md](../setup.md) when labels use **Icon** / toggletip icons  

[Storybook — Radio / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-radio-radio--docs)
