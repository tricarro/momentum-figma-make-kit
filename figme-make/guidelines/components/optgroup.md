# OptGroup (Momentum) — Figma Make guidance

**OptGroup** groups **Option** rows inside a **Selectlistbox** (and compatible list contexts). It renders a **header** (**`label`** string) and holds **`Option`** components in the **default** slot. Supports **`disabled`** to disable the **group** (behavior cascades in source). Theming: **`--mdc-optgroup-disabled-color`**, **csspart** **`header-text`**. A **Divider** between groups in **Select** is often a separate **[Divider](./divider.md)** in the list, not part of **`OptGroup`**.

See also: [Option](./option.md), [Select](./select.md), [Selectlistbox](./selectlistbox.md), [ListBox](./listbox.md).

Browse the [Momentum Components catalog](https://momentum.design/en/components/) for naming; Storybook documents props and examples. Reference: [Storybook — OptGroup / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-select-optgroup--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-select-optgroup--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { OptGroup, Option } from "@momentum-design/components/dist/react";
```

---

## What it is

- **`label`:** group title above the options.  
- **Accessibility:** structure comes from the parent **Select** / **Selectlistbox** / **ListBox**—follow those docs.

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

Compose **[Select](./select.md)** (or **[Combobox](./combobox.md)**) and **`Selectlistbox`** per [Storybook — Select / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-select-select--docs); the snippet is only the **options** piece.

---

## Checklist for Figma Make

- [ ] **`ThemeProvider`** + **`IconProvider`** when options use icons per [setup.md](../setup.md)  
- [ ] **`label`** names the group for sighted users; verify SR grouping with **Select** / listbox Storybook  
- [ ] **`disabled`** on the group matches product rules for the whole section  

Cross-check [Storybook — OptGroup / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-select-optgroup--docs) and your installed package version.
