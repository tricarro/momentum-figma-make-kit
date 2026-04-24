# AlertChip (Momentum) — Figma Make guidance

**AlertChip** is an **interactive** chip (extends **Buttonsimple**) for **status** or **inline alerts**: a **leading icon** and **label**, with **semantic** **`variant`** colors (error, success, warning, informational, neutral). Use for **short** inline callouts, not for full **Banner** width. Reference: [Storybook — AlertChip / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-chip-alertchip--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-chip-alertchip--example).

---

## Import

```jsx
import { AlertChip } from "@momentum-design/components/react";
```

Use `@momentum-design/components/react` only, not `@momentum-design/components` without `/react` (per `Guidelines.md`).

---

## What it is

- **`variant`:** `neutral` (default) · `error` · `success` · `warning` · `informational`  
- **`label`:** keep **≤ ~20 characters** (team recommendation in the source).  
- **`iconName`:** Momentum icon (from **IconName** mixin).  
- **Events:** `onClick`, `onKeyDown`, `onKeyUp`, `onFocus` (Buttonsimple).  
- Theming: `--mdc-chip-*` + dedicated **icon** / **border** tokens in the [doc](https://momentum.design/storybook-static/index.html?path=/docs/components-chip-alertchip--docs).

**Banner** = page-level message; **AlertChip** = compact, often **next to** other UI.

---

## Key props

- **`variant`**, **`label`**, **`iconName`**, **`type`**, **`disabled`**

---

## Example

```jsx
import { AlertChip } from "@momentum-design/components/dist/react";


<AlertChip label="Alert"></AlertChip>
```

(Use icon names and **`variant`** pairings that match your Storybook example.)

---

## Checklist

- [ ] `type="button"` when the chip is not in a form submit path  
- [ ] Keep copy **short**; use **Banner** for long or dismissible page alerts  
- [ ] Meaningful **label**; icon supports but does not replace the text for all users  

[Storybook — AlertChip / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-chip-alertchip--docs)
