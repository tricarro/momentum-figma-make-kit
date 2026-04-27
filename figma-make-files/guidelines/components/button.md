# Button (Momentum) — Figma Make guidance

**Button** (`mdc-button`) is the main **action** control: **pill** (text, with or without **prefix** / **postfix** icon slots), or **icon-only** when there is no label. Variants: **primary** / **secondary** / **tertiary**; **colors** for solid styles: default, **positive**, **negative**, **accent**, **promotional**. Reference: [Storybook — Button / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-button-button--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-button-button--example).

---

## Import

```jsx
import { Button } from "@momentum-design/components/react";
```

Use `@momentum-design/components/react` only, not `@momentum-design/components` without `/react` (per [setup.md](../setup.md)).

---

## What it is

- Infers **layout** from content: text → **pill**; `prefix` / `postfix` / **`prefixIcon`** / **`postfixIcon`**; icon-only for icon + tertiary small sizes.  
- **Sizes (px):** pill **24–40**; icon **24–64**; tertiary icon can use **20**. Default **32** for typical use.  
- Inherits from **`Buttonsimple`**: `type` (`"button"` | `"submit"` | `"reset"`), `disabled`, `softDisabled`, `active` (pressed/toggle), keyboard + **`onClick`**, **`onKeyDown`**, etc.  
- **Slots:** default = label; **`prefix`**, **`postfix`** for custom content; or **`prefixIcon` / `postfixIcon`** props (Momentum icon **names**).

`IconProvider` required for icons. Styling: `--mdc-button-*` (see [docs](https://momentum.design/storybook-static/index.html?path=/docs/components-button-button--docs)).

For **navigation that looks like a button**, use **`ButtonLink`** instead.

---

## Key props (common)

- **`size`**, **`variant`**, **`color`**, **`type`**, **`disabled`**, **`softDisabled`**, **`active`**  
- **`prefixIcon`**, **`postfixIcon`** (icon names)  
- **`onClick`**, **`onKeyDown`**, **`onKeyUp`**, **`onFocus`**

Exact enums match **`button.types`** / Storybook (e.g. `variant` primary | secondary | tertiary, `color` for primary & secondary).

---

## Example

```jsx
import { Button } from "@momentum-design/components/react";

function SaveBar() {
  return (
    <Button
      variant="primary"
      color="default"
      size={32}
      type="button"
      prefixIcon="check-bold"
      onClick={() => { /* save */ }}
    >
      Save
    </Button>
  );
}
```

---

## Checklist

- [ ] `type="button"` for non-submit actions inside forms  
- [ ] `color="negative"` for destructive actions (when the design system prescribes)  
- [ ] Icon-only `Button` has an **accessible name** (visible text, `aria-label` on the custom element, or pattern from Storybook for your version)  
- [ ] Inside **`ButtonGroup`**, `size` / `variant` on the **group** override child buttons  

[Storybook — Button / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-button-button--docs)
