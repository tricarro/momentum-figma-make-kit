# ListBox (Momentum) — Figma Make guidance

**ListBox** (`ListBox` in React—capital **B**) is a **standalone** listbox: select **one** option, or with **`multiple`** toggle **several** with click / Enter / Space. Children are **`Option`** and **`OptGroup`**. It is **not** the same as **[Selectlistbox](./selectlistbox.md)** (used under **Select** and **Combobox**). Confirm **`name`**, **`value`**, and **`onChange`** binding for your release in Storybook—behavior can evolve between versions.

See also: [Option](./option.md), [OptGroup](./optgroup.md), [Select](./select.md), [Combobox](./combobox.md), [Selectlistbox](./selectlistbox.md).

Browse the [Momentum Components catalog](https://momentum.design/en/components/) for naming; Storybook documents props and examples. Reference: [Storybook — ListBox / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-listbox-listbox--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-listbox-listbox--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { ListBox, Option, OptGroup } from "@momentum-design/components/dist/react";
```

---

## What it is

- **`multiple`:** multi-select mode when **`true`**.  
- **`onChange`:** selection changes.  
- Styling: **`--mdc-listbox-max-height`**.  
- **WCAG listbox** patterns: see the [APG listbox practice](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/) referenced in Storybook/source.

**ListBox** (options list) vs **[List](./list.md)** (generic **`ListItem`** rows).

---

## Example — `ListBox` with `Option` / `OptGroup`

```jsx
import { ListBox, Option, OptGroup } from "@momentum-design/components/dist/react";

function FlavorListBox() {
  return (
    <ListBox>
      <OptGroup label="Popular">
        <Option value="vanilla" label="Vanilla" />
        <Option value="chocolate" label="Chocolate" />
      </OptGroup>
    </ListBox>
  );
}
```

Add **`value`**, **`onChange`**, and **`multiple`** (and any **form** **`name`** props) per [Storybook — ListBox / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-listbox-listbox--docs).

---

## Checklist for Figma Make

- [ ] **`ThemeProvider`** + **`IconProvider`** per [setup.md](../setup.md)  
- [ ] For **dropdown** “pick one” UX, also evaluate **[Select](./select.md)**; for typeahead, **[Combobox](./combobox.md)**  
- [ ] Options have stable **`value`**s and clear **`label`**s  
- [ ] Verify **`multiple`** and keyboard selection against the Storybook table for this release  

Cross-check [Storybook — ListBox / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-listbox-listbox--docs) and your installed package version.
