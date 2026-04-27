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

## Examples

Use these patterns as a **reference map** to the usual Figma / Storybook button types: **pill (text)**, **pill inverted**, **prefix icon**, **postfix icon**, **icon-only**, **icon-only inverted**. `IconProvider` must wrap the tree (see [setup.md](../setup.md)). Icon `name` values use the `<base>-<weight>` rule in [components.md](../components.md#icons).

### 1. Pill button (text only)

Default **pill**—label in the default slot, no icon props.

```jsx
import { Button } from "@momentum-design/components/react";

<Button variant="primary" color="default" size={32} type="button">
  Continue
</Button>
```

### 2. Pill button (inverted)

`inverted` flips the **primary** / **default** fill for use on **strong** or **dark** surfaces. Only applies for `variant="primary"`, `color="default"`, and not `active` (see package docs).

```jsx
<Button variant="primary" color="default" size={32} type="button" inverted>
  Continue
</Button>
```

### 3. Pill with prefix icon

Icon **before** the label via `prefixIcon`.

```jsx
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
```

### 4. Pill with postfix icon

Icon **after** the label via `postfixIcon`.

```jsx
<Button
  variant="secondary"
  color="default"
  size={32}
  type="button"
  postfixIcon="arrow-right-bold"
>
  Next
</Button>
```

### 5. Icon button (icon only)

**No** default slot text; **only** `prefixIcon` or `postfixIcon` (not both for a single icon). Type is inferred as **icon** button. Use an **accessible name** (e.g. `title`, `aria-label` on a wrapper, or the pattern your Storybook version documents for `mdc-button`).

```jsx
<Button
  variant="tertiary"
  color="default"
  size={32}
  type="button"
  prefixIcon="more-bold"
  title="More actions"
/>
```

### 6. Icon button (inverted)

On surfaces where **inverted** primary is used, keep `variant="primary"`, `color="default"`, and `inverted` with a **prefix** icon and no label.

```jsx
<Button
  variant="primary"
  color="default"
  size={32}
  type="button"
  inverted
  prefixIcon="audio-static-bold"
  title="Unmute"
/>
```

### Row of variants (layout only)

When showing several references in a prototype, space them with a consistent `gap` (see [styles.md](../styles.md#layout)):

```jsx
<div
  style={{
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "0.5rem",
  }}
>
  <Button variant="primary" color="default" size={32} type="button">
    Pill
  </Button>
  <Button variant="primary" color="default" size={32} type="button" inverted>
    Inverted
  </Button>
  <Button variant="primary" color="default" size={32} type="button" prefixIcon="check-bold">
    Prefix
  </Button>
  <Button variant="primary" color="default" size={32} type="button" postfixIcon="arrow-right-bold">
    Postfix
  </Button>
  <Button variant="tertiary" color="default" size={32} type="button" prefixIcon="more-bold" title="More" />
  <Button
    variant="primary"
    color="default"
    size={32}
    type="button"
    inverted
    prefixIcon="settings-bold"
    title="Settings"
  />
</div>
```

---

## Checklist

- [ ] `type="button"` for non-submit actions inside forms  
- [ ] `color="negative"` for destructive actions (when the design system prescribes)  
- [ ] Icon-only `Button` has an **accessible name** (visible text, `aria-label` on the custom element, or pattern from Storybook for your version)  
- [ ] Inside **`ButtonGroup`**, `size` / `variant` on the **group** override child buttons  

[Storybook — Button / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-button-button--docs)
