# ButtonGroup (Momentum) — Figma Make guidance

**ButtonGroup** groups **`Button`**s with shared **size**, **variant**, and layout (**horizontal** / **vertical**), optional **compact** mode. **Only** **`Button`** (mdc-button) is allowed as **direct** children. Reference: [Storybook — ButtonGroup / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-button-buttongroup--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-button-buttongroup--example).

---

## Import

```jsx
import { ButtonGroup, Button } from "@momentum-design/components/react";
```

Use `@momentum-design/components/react` only, not `@momentum-design/components` without `/react` (per `Guidelines.md`).

---

## What it is

- **Orientation:** `horizontal` (default) or `vertical`.  
- **Variant** on the group: **primary** | **secondary** | **tertiary** (applied to **all** children; overrides per-button `variant`).  
- **Size:** `24` | `28` (default) | `32` | `40` (applied to all).  
- **`compact`:** when `true`, forces **24px** height for all.  
- The group defines **dividers** between buttons; tune with `--mdc-buttongroup-*` in [docs](https://momentum.design/storybook-static/index.html?path=/docs/components-button-buttongroup--docs).

**Do not** put `ButtonLink`, plain HTML, or spacers in the default slot.

---

## Key props

- **`orientation`**, **`variant`**, **`size`**, **`compact`**

---

## Example

```jsx
import { ButtonGroup, Button } from "@momentum-design/components/react";

function TextAlignGroup() {
  return (
    <ButtonGroup variant="secondary" size={32} orientation="horizontal" compact={false}>
      <Button type="button" prefixIcon="align-left-bold">
        Left
      </Button>
      <Button type="button" prefixIcon="align-center-bold">
        Center
      </Button>
      <Button type="button" prefixIcon="align-right-bold">
        Right
      </Button>
    </ButtonGroup>
  );
}
```

For **icon-only** groups, follow Storybook and your `Button` version for accessible names (e.g. `aria-label` on the host if exposed).

---

## Checklist

- [ ] **Only** `Button` as children  
- [ ] Group `variant` / `size` match the design; individual button props may be **overridden** by the group  
- [ ] Use for **toolbars** and **segmented** actions, not for unrelated buttons far apart in the layout (visual grouping)  

[Storybook — ButtonGroup / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-button-buttongroup--docs)
