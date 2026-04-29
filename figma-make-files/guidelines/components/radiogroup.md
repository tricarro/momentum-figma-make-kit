# RadioGroup (Momentum) — Figma Make guidance

**RadioGroup** groups **Radio** options with a shared **`name`** (auto-assigned from the group if unset) and a **form-field** shell inherited from **FormfieldGroup**—**header** / **description** text, `role="group"` / radiogroup wiring, and **help** / **toggletip** like other form groups. It is the **right** way to get **one** set of **Radio**s with a **label** and **group-level** error text (the package recommends this over relying on each `Radio` alone for validation). Reference: [Storybook — RadioGroup / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-radiogroup-radiogroup--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-radiogroup-radiogroup--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { RadioGroup, Radio } from "@momentum-design/components/dist/react";
```

---

## What it is

- **`name`:** string that all **Radio** children use for the HTML **name** (group identity).  
- Inherits the same “**header** or **dataAriaLabel** / description” expectations as [FormfieldGroup](https://momentum.design/storybook-static/index.html?path=/docs/components-formfieldgroup-formfieldgroup--docs) (see **`formfieldgroup.md`** for checkbox/toggle groups—**RadioGroup** is the radio analogue).  
- For **list**-style or **card**-style UIs, see **ListItem**+**Radio** and **CardRadio** instead when the design spec says so.  

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

(Wire **selection** and **`onChange` / `onInput`** the way [Storybook — RadioGroup / Example](https://momentum.design/storybook-static/index.html?path=/story/components-radiogroup-radiogroup--example) does for a controlled group.)

---

## Checklist

- [ ] `RadioGroup` + multiple **`Radio`**, not orphan radios with mismatched `name`  
- [ ] Group help text reflects **“choose one”** errors  
- [ ] `IconProvider` in the app root per [setup.md](../setup.md)  

[Storybook — RadioGroup / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-radiogroup-radiogroup--docs)
