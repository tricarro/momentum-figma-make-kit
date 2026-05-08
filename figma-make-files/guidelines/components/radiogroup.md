# RadioGroup (Momentum) — Figma Make guidance

**RadioGroup** groups **Radio** options with a shared **`name`** (auto-assigned from the group if unset) and a **form-field** shell inherited from **FormfieldGroup**—**header** / **description** text, **`role="radiogroup"`** wiring, and **help** / **toggletip** like other form groups. Prefer **RadioGroup** for **one** labeled set with **group-level** validation (the package recommends this over relying on each **Radio** alone).

See also: [Radio](./radio.md), [FormfieldGroup](./formfieldgroup.md) (checkbox/toggle groups—not radios), [ListItem](./listitem.md), [CardRadio](./cardradio.md).

Browse the [Momentum Components catalog](https://momentum.design/en/components/) for naming; Storybook documents props and examples. Reference: [Storybook — RadioGroup / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-radiogroup-radiogroup--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-radiogroup-radiogroup--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { RadioGroup, Radio } from "@momentum-design/components/dist/react";
```

---

## What it is

- **`name`:** string that all **Radio** children use for the HTML **`name`** (group identity).  
- Same **header** or **`dataAriaLabel`** / description expectations as **[FormfieldGroup](./formfieldgroup.md)**—**RadioGroup** is the radio analogue.  
- **List**-style or **card**-style UIs may use **ListItem** + **Radio** or **CardRadio** when the design spec says so.

**RadioGroup** vs **FormfieldGroup** — the latter is for **checkbox** / **toggle** groups, **not** radios.

---

## Key props (typical)

- **`name`**, **`headerText`**, **`headerDescriptionText`**, **`dataAriaLabel`**, **`helpText`**, **`helpTextType`**

---

## Example — `RadioGroup` with `Radio` options

```jsx
import { RadioGroup, Radio } from "@momentum-design/components/dist/react";

function ThemeChoice() {
  return (
    <RadioGroup name="theme" headerText="Theme" label="App theme">
      <Radio label="Light" value="light" />
      <Radio label="Dark" value="dark" />
    </RadioGroup>
  );
}
```

Wire **selection** and **`onChange`** / **`onInput`** like [Storybook — RadioGroup / Example](https://momentum.design/storybook-static/index.html?path=/story/components-radiogroup-radiogroup--example).

---

## Checklist for Figma Make

- [ ] **`ThemeProvider`** + **`IconProvider`** per [setup.md](../setup.md)  
- [ ] **RadioGroup** + multiple **`Radio`**, not orphan radios with mismatched **`name`**  
- [ ] Group help text reflects **“choose one”** errors  

Cross-check [Storybook — RadioGroup / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-radiogroup-radiogroup--docs) and your installed package version.
