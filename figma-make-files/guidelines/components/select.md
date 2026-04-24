# Select (Momentum) — Figma Make guidance

**Select** is a **dropdown** for choosing **one** option (or a controlled value) from a predefined list. Wrap **Option** / **OptGroup** in **`Selectlistbox`** (required for accessible wiring). Each **Option** needs a **`value`**; set **`selected`** for the default, or set **`value`** on **Select** to match. **Divider**s between groups are optional. Tooltips on options must **live outside** the select (per the package). **Combobox** is for typeahead; **ListBox** is a different standalone listbox. Reference: [Storybook — Select / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-select-select--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-select-select--example).

---

## Import

```jsx
import { Select, Selectlistbox, Option, OptGroup, Divider } from "@momentum-design/components/react";
```

Use `@momentum-design/components/react` only, not `@momentum-design/components` without `/react` (per `Guidelines.md`).

---

## What it is

- **Events (React):** **`onChange`**, **`onInput`**, **`onClick`**, **`onKeyDown`**, **`onFocus`**.  
- **Form-field** slots: `label`, `toggletip`, `help-text`, and related props.  
- Theming: **`--mdc-select-*`**, listbox height/width, etc., in the [doc](https://momentum.design/storybook-static/index.html?path=/docs/components-select-select--docs).  

**Select** vs **Combobox** — no free typing in the basic select trigger.

---

## Example — `Select` + `Selectlistbox` + `Option`

```jsx
import { Select, Selectlistbox, Option } from "@momentum-design/components/react";

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

(Use **`value`**, **`onInput` / `onChange`**, and **form** wiring from [Storybook — Select / Example](https://momentum.design/storybook-static/index.html?path=/story/components-select-select--example).)

---

## Checklist

- [ ] **Selectlistbox** wraps the options in the same structure as Storybook  
- [ ] Every **Option** has a **`value`** for forms and controlled state  
- [ ] `IconProvider` in the app root per `Guidelines.md`  

[Storybook — Select / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-select-select--docs)
