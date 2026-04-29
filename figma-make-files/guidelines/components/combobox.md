# Combobox (Momentum) — Figma Make guidance

**Combobox** is a **combobox** control: a **typeahead** / filterable list bound to a **text** input. Users can **type** to filter options, then **select**; **`no-result-text`** appears when there is no match. Options use **`Option`** and **`OptGroup`**, wrapped in **`Selectlistbox`** (see [Selectlistbox](https://momentum.design/storybook-static/index.html?path=/docs/components-list-selectlistbox--docs) in Storybook) **inside** the Combobox. Reference: [Storybook — Combobox / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-combobox-combobox--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-combobox-combobox--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { Combobox, Option, OptGroup, Selectlistbox } from "@momentum-design/components/dist/react";
```

---

## What it is

- **Filter:** default **`match-starts-with`**. **`filter="none"`** when the **app** filters (e.g. server results). A **custom** `filter` can be used for full control.  
- **Form:** every **`option`** should have a **`value`**; **`control-type="controlled"`** means the parent must update **`value`** from **`onChange` / `onInput`**.  
- **Slots:** `label`, `toggletip`, `help-text`, and form-field help patterns (see [docs](https://momentum.design/storybook-static/index.html?path=/docs/components-combobox-combobox--docs)).  
- **Events in React:** **`onChange`**, **`onInput`**, **`onKeyDown`**, **`onFocus`**, **`onClick`**.  
- **Tooltips on options:** place **`mdc-tooltip`** (or the React `Tooltip` wrapper) **outside** the listbox, per the package JSDoc.

**Combobox** vs **Select:** combobox = **type + filter**; use **Select** when a simple dropdown is enough (see [Select](https://momentum.design/storybook-static/index.html?path=/docs/components-select-select--docs)).

---

## Example
```jsx
import {
  Combobox,
  Option,
  Selectlistbox,
} from "@momentum-design/components/dist/react";


<div style="..." role="main">
  <Combobox
    dataAriaLabel="Select a country"
    helpText="Select a country"
    helpTextType="default"
    infoIconAriaLabel="Required icon label"
    label="Top Countries"
    name="country"
    noResultText="No results found"
    placeholder="Start typing"
    placement="bottom-start"
    invalidCustomValueText="Custom values are not allowed"
  >
    <Selectlistbox>
      <Option value="arg" label="Argentina"></Option>
      <Option value="aus" label="Australia"></Option>
      <Option value="au" label="Austria"></Option>
      <Option value="ban" label="Bangladesh"></Option>
      <Option value="bel" label="Belgium"></Option>
      <Option value="bra" label="Brazil"></Option>
      <Option value="can" label="Canada"></Option>
      <Option value="chi" label="China"></Option>
      <Option value="col" label="Colombia"></Option>
      <Option value="den" label="Denmark"></Option>
    </Selectlistbox>
  </Combobox>
</div>
```

## Key props (typical)

- **`label`**, **`value`**, **`noResultText`**, **`filter`**, **`controlType`**, **`required`**, **`helpText`**, **`helpTextType`**

---

## Checklist

- [ ] **Selectlistbox** wraps the options with the structure from Storybook  
- [ ] Each **Option** has a **`value`** for forms  
- [ ] For async lists, set **`filter="none"`** and own the option list  
- [ ] **WCAG combobox** keyboard patterns — follow the linked APG in the [package docs](https://momentum.design/storybook-static/index.html?path=/docs/components-combobox-combobox--docs)  

[Storybook — Combobox / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-combobox-combobox--docs)
