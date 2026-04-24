# ListBox (Momentum) — Figma Make guidance

**ListBox** (`ListBox` in React—capital **B**) is a **standalone** listbox: select **one** option, or with **`multiple`** toggle **several** with click / Enter / Space. Children are **`Option`** and **`OptGroup`**. It is **not** the same as **`Selectlistbox`** (used under **Select** and **Combobox**). The package notes **`name`**, **`value`**, and **`onChange`**, but it is **not a full form control** yet—confirm binding with Storybook for your version. Reference: [Storybook — ListBox / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-listbox-listbox--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-listbox-listbox--example).

---

## Import

```jsx
import { ListBox, Option, OptGroup } from "@momentum-design/components/react";
```

Use `@momentum-design/components/react` only, not `@momentum-design/components` without `/react` (per `Guidelines.md`).

---

## What it is

- **`multiple`:** multi-select mode when `true`.  
- **`onChange`:** selection changes.  
- Styling: **`--mdc-listbox-max-height`**.  
- **WCAG listbox** patterns: see the [APG listbox practice](https://www.w3.org/WAI/ARIA/apg/practices/listbox/) referenced in the source.  

**ListBox** (options list) vs **List** (generic `ListItem` rows).

---

## Example — `ListBox` with `Option` / `OptGroup`

```jsx
import { ListBox, Option, OptGroup } from "@momentum-design/components/react";

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

Add **`value`**, **`onChange`**, and **`multiple`** (and any required **form** `name` props) as in [Storybook — ListBox / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-listbox-listbox--docs).

---

## Checklist

- [ ] For **form** “pick one from dropdown” UX, also evaluate **Select**; for typeahead, **Combobox**  
- [ ] Options have stable **values** and clear **labels**  
- [ ] Verify **`multiple`** and keyboard selection match the Storybook table for this release  

[Storybook — ListBox / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-listbox-listbox--docs)
