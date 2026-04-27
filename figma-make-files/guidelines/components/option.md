# Option (Momentum) — Figma Make guidance

**Option** is a **row** inside a **Selectlistbox** (under **Select** or **Combobox** / patterns that slot options). It exposes **`label`**, **`secondaryLabel`**, optional **`prefixIcon`**, and **`selected`** (shows the **check** affordance). Interacts like a **ListItem** for **events** in React. **Long** labels: add **Tooltip** manually: give the option a **unique id** and set **`triggerId`** on the tooltip, per the package. Reference: [Storybook — Option / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-select-option--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-select-option--example).

---

## Import

```jsx
import { Option } from "@momentum-design/components/react";
```

Use `@momentum-design/components/react` only, not `@momentum-design/components` without `/react` (per [setup.md](../setup.md)).

---

## What it is

- **Always** use **`value`** on the underlying element for form submission.  
- Styling overlaps **ListItem**-style **parts** and **`--mdc-option-*`**.  
- **Not** a standalone list row—**ListItem** is for **List**; **Option** is for **listbox** contexts.  

---

## Example — `Option` in a `Select` listbox (see `select.md` for the full field)

```jsx
import { Option } from "@momentum-design/components/react";

function StateOption() {
  return <Option value="az" label="Arizona" secondaryLabel="US" selected={false} />;
}
```

(Always use **`value`**; wire **`selected`** to the listbox/Select model from [Storybook — Option / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-select-option--docs).)

[Storybook — Option / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-select-option--docs)
