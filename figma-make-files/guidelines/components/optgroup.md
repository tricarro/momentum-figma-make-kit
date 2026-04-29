# OptGroup (Momentum) — Figma Make guidance

**OptGroup** groups **Option** rows inside a **Selectlistbox**. It renders a **header** ( **`label`** string) and holds **`Option`**s in the **default** slot. Supports **`disabled`** to disable the **group** (cascades to options in the source). Theming: **`--mdc-optgroup-disabled-color`**, **csspart** `header-text`. **Divider** after a group in **Select** is a separate **Divider** component in the listbox list, not part of `OptGroup`. Reference: [Storybook — OptGroup / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-select-optgroup--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-select-optgroup--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { OptGroup, Option } from "@momentum-design/components/dist/react";
```

---

## What it is

- **`label`:** group title above the options.  
- **Accessibility:** the option group is structured by the listbox/ select implementation—follow **Select** / **Selectlistbox** docs.  

---

## Example — `OptGroup` wrapping `Option` rows (inside `Select` / `Selectlistbox`)

```jsx
import { OptGroup, Option } from "@momentum-design/components/dist/react";

function FruitsGroup() {
  return (
    <OptGroup label="Fruits" disabled={false}>
      <Option value="apple" label="Apple" />
      <Option value="banana" label="Banana" />
    </OptGroup>
  );
}
```

(Compose **`Select`** (or **Combobox**) and **`Selectlistbox`** in the [Storybook — Select / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-select-select--docs) pattern; the snippet is only the **options** piece.)

[Storybook — OptGroup / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-select-optgroup--docs)
