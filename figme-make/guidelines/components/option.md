# Option (Momentum) — Figma Make guidance

**Option** is a **row** inside **Selectlistbox** (under **[Select](./select.md)** or **[Combobox](./combobox.md)**) and inside **[ListBox](./listbox.md)** when those patterns slot options. It exposes **`label`**, **`secondaryLabel`**, optional **`prefixIcon`**, and **`selected`** (check affordance). **Long** labels: add **Tooltip** manually—give the option or label element a **unique `id`** and set the tooltip / popover’s **`triggerID`** to match (see package JSDoc).

See also: [OptGroup](./optgroup.md), [Select](./select.md), [Selectlistbox](./selectlistbox.md), [ListItem](./listitem.md) ( **`List`** rows, not listbox).

Browse the [Momentum Components catalog](https://momentum.design/en/components/) for naming; Storybook documents props and examples. Reference: [Storybook — Option / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-select-option--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-select-option--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { Option } from "@momentum-design/components/dist/react";
```

---

## What it is

- **Always** use **`value`** for the underlying option value / form model.  
- Styling overlaps **ListItem**-style **parts** and **`--mdc-option-*`**.  
- **Not** a standalone generic list row—**ListItem** is for **[List](./list.md)**.

---

## Example — `Option` in a `Select` listbox (see `select.md` for the full field)

```jsx
import { Option } from "@momentum-design/components/dist/react";

function StateOption() {
  return <Option value="az" label="Arizona" secondaryLabel="US" selected={false} />;
}
```

Always **`value`**; wire **`selected`** to the **Select** / **ListBox** model from [Storybook — Option / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-select-option--docs).

---

## Checklist for Figma Make

- [ ] **`ThemeProvider`** + **`IconProvider`** when using **`prefixIcon`** per [setup.md](../setup.md)  
- [ ] Stable **`value`**, human **`label`**, optional **`secondaryLabel`**  
- [ ] **`selected`** driven by the parent listbox—do not toggle in isolation  
- [ ] Truncation + **Tooltip** uses **`triggerID`** + matching trigger **`id`**  

Cross-check [Storybook — Option / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-select-option--docs) and your installed package version.
