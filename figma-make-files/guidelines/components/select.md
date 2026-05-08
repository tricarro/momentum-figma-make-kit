# Select (Momentum) — Figma Make guidance

**Select** is a **dropdown** for choosing **one** option from a predefined list. Wrap **Option** / **OptGroup** in **`Selectlistbox`** (required for accessible wiring). Each **Option** needs a **`value`**; set **`selected`** for the default, or set **`value`** on **Select** to match. **Divider**s between groups are optional. Tooltips on options must **live outside** the select (per the package). **[Combobox](./combobox.md)** is for typeahead; **[ListBox](./listbox.md)** is a standalone listbox.

See also: [Selectlistbox](./selectlistbox.md), [Option](./option.md), [OptGroup](./optgroup.md), [Divider](./divider.md).

Browse the [Momentum Components catalog](https://momentum.design/en/components/) for naming; Storybook documents props and examples. Reference: [Storybook — Select / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-select-select--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-select-select--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { Select, Selectlistbox, Option, OptGroup, Divider } from "@momentum-design/components/dist/react";
```

---

## What it is

- **Events (React):** **`onChange`**, **`onInput`**, **`onClick`**, **`onKeyDown`**, **`onFocus`**.  
- **Form-field** slots: **`label`**, **`toggletip`**, **`help-text`**, and related props.  
- Theming: **`--mdc-select-*`**, listbox height/width, etc., in the [doc](https://momentum.design/storybook-static/index.html?path=/docs/components-select-select--docs).

**Select** vs **Combobox** — no free typing in the basic select trigger.

---

## Example — `Select` + `Selectlistbox` + `Option`

```jsx
import { Select, Selectlistbox, Option } from "@momentum-design/components/dist/react";

function CountryField() {
  return (
    <Select label="Country" placeholder="Select a country">
      <Selectlistbox>
        <Option value="us" label="United States" />
        <Option value="ca" label="Canada" />
      </Selectlistbox>
    </Select>
  );
}
```

Use **`value`**, **`onInput`** / **`onChange`**, and form wiring from [Storybook — Select / Example](https://momentum.design/storybook-static/index.html?path=/story/components-select-select--example).

---

## Checklist for Figma Make

- [ ] **`ThemeProvider`** + **`IconProvider`** per [setup.md](../setup.md)  
- [ ] **`Selectlistbox`** wraps the options in the same structure as Storybook  
- [ ] Every **Option** has a **`value`** for forms and controlled state  

Cross-check [Storybook — Select / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-select-select--docs) and your installed package version.
