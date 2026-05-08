# Selectlistbox (Momentum) — Figma Make guidance

**Selectlistbox** is a **light-DOM** wrapper that sits **between** **[Select](./select.md)** (or **[Combobox](./combobox.md)**) and the **Option** / **OptGroup** children so **listbox** roles and **`aria-owns`** wiring stay correct. Use it in those patterns—the package notes it may be removed when **`ariaOwnsElements`** is broadly available. It has **no** selection business logic: **structure** and **a11y** plumbing only.

See also: [Select](./select.md), [Combobox](./combobox.md), [Option](./option.md), [OptGroup](./optgroup.md), [ListBox](./listbox.md) (standalone—different use case).

Browse the [Momentum Components catalog](https://momentum.design/en/components/) for naming; Storybook documents props and examples. Reference: [Storybook — Selectlistbox / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-list-selectlistbox--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-list-selectlistbox--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { Selectlistbox, Option } from "@momentum-design/components/dist/react";
```

---

## What it is

- **Default** slot: **`Option`** and **`OptGroup`** only (same as **Select**’s option tree in practice).  
- **Not** the same as **[ListBox](./listbox.md)** (standalone listbox component).

You **rarely** import **`Selectlistbox`** alone—it exists so **Select** / **Combobox** wrap **Option** trees correctly.

---

## Example — with **`Select`** (usual pattern)

```jsx
import { Select, Selectlistbox, Option } from "@momentum-design/components/dist/react";

function InSelect() {
  return (
    <Select label="Priority">
      <Selectlistbox>
        <Option value="p1" label="P1" />
        <Option value="p2" label="P2" />
      </Selectlistbox>
    </Select>
  );
}
```

See [Storybook — Select / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-select-select--docs) and [Selectlistbox / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-list-selectlistbox--docs).

---

## Checklist for Figma Make

- [ ] **`ThemeProvider`** + **`IconProvider`** when options use **`prefixIcon`** per [setup.md](../setup.md)  
- [ ] **`Selectlistbox`** wraps **Option** / **OptGroup** exactly as Storybook shows for **Select** / **Combobox**  
- [ ] Do not substitute **ListBox** for **`Selectlistbox`**—different components  

Cross-check [Storybook — Selectlistbox / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-list-selectlistbox--docs) and your installed package version.
