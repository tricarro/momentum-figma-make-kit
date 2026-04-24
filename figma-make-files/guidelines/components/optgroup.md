# OptGroup (Momentum) — Figma Make guidance

**OptGroup** groups **Option** rows inside a **Selectlistbox**. It renders a **header** ( **`label`** string) and holds **`Option`**s in the **default** slot. Supports **`disabled`** to disable the **group** (cascades to options in the source). Theming: **`--mdc-optgroup-disabled-color`**, **csspart** `header-text`. **Divider** after a group in **Select** is a separate **Divider** component in the listbox list, not part of `OptGroup`. Reference: [Storybook — OptGroup / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-select-optgroup--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-select-optgroup--example).

---

## Import

```jsx
import { OptGroup, Option } from "@momentum-design/components/react";
```

Use `@momentum-design/components/react` only, not `@momentum-design/components` without `/react` (per `Guidelines.md`).

---

## What it is

- **`label`:** group title above the options.  
- **Accessibility:** the option group is structured by the listbox/ select implementation—follow **Select** / **Selectlistbox** docs.  

[Storybook — OptGroup / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-select-optgroup--docs)
