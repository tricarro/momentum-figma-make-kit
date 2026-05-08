# ButtonGroup (Momentum) — Figma Make guidance

**ButtonGroup** groups **`Button`**s with shared **size**, **variant**, and layout (**horizontal** / **vertical**), optional **compact** mode. **Only** **`Button`** (`mdc-button`) is allowed as **direct** children.

See also: [Button](./button.md).

Browse the [Momentum Components catalog](https://momentum.design/en/components/) for naming; Storybook documents props and examples. Reference: [Storybook — ButtonGroup / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-button-buttongroup--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-button-buttongroup--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { ButtonGroup, Button } from "@momentum-design/components/dist/react";
```

---

## What it is

- **Orientation:** `horizontal` (default) or `vertical`.  
- **Variant** on the group: **primary** | **secondary** | **tertiary** (applied to **all** children; overrides per-button `variant`).  
- **Size:** `24` | `28` (default) | `32` | `40` (applied to all).  
- **`compact`:** when `true`, forces **24px** height for all.  
- The group defines **dividers** between buttons; tune with **`--mdc-buttongroup-*`** in [docs](https://momentum.design/storybook-static/index.html?path=/docs/components-button-buttongroup--docs).

**Do not** put `ButtonLink`, plain HTML, or spacers in the default slot.

### Defaults (package)

**`orientation`** **`horizontal`**, **`variant`** **`primary`**, **`size`** **`28`**, **`compact`** **`false`**.

---

## Key props

- **`orientation`**, **`variant`**, **`size`**, **`compact`**

---

## Example

```jsx
import { Button, ButtonGroup } from "@momentum-design/components/dist/react";


<ButtonGroup variant="primary" orientation="horizontal">
  <Button prefixIcon="placeholder-bold" ariaLabel="First action"></Button>
  <Button prefixIcon="placeholder-bold" ariaLabel="Second action"></Button>
  <Button prefixIcon="placeholder-bold" ariaLabel="Third action"></Button>
</ButtonGroup>
```

For **icon-only** groups, follow Storybook for accessible names (**`ariaLabel`** where supported).

---

## Checklist for Figma Make

- [ ] `ThemeProvider` + **`IconProvider`** when buttons use icons  
- [ ] **Only** `Button` as children  
- [ ] Group `variant` / `size` match the design; individual button props may be **overridden** by the group  
- [ ] Use for **toolbars** and **segmented** actions, not for unrelated buttons far apart in the layout (visual grouping)  

Cross-check [Storybook — ButtonGroup / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-button-buttongroup--docs) and your installed package version.
