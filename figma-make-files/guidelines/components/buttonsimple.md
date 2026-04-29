# Buttonsimple (Momentum) — Figma Make guidance

**Buttonsimple** (`mdc-buttonsimple`) is a **low-level** **`<button>`** with label in the default slot, **`type`**, **disabled** / **softDisabled**, and **active** (toggle/pressed with `aria-pressed`). It is the **base** for **Button** and other composite controls. Prefer **`Button`** for Figma Make unless you need a **minimal** control or are matching Storybook that uses `Buttonsimple` directly. Reference: [Storybook — ButtonSimple / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-button-buttonsimple--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-button-buttonsimple--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { Buttonsimple } from "@momentum-design/components/dist/react";
```

The public export is **`Buttonsimple`** from `@momentum-design/components/dist/react`.

---

## What it is

- **`type`:** `button` (default) · `submit` · `reset`  
- **`disabled`:** not focusable or clickable.  
- **`softDisabled`:** **looks** disabled; stays focusable—**you** must block actions.  
- **`active`:** toggle / pressed state (`aria-pressed`).  
- **Events:** `onClick`, `onKeyDown`, `onKeyUp`, `onFocus`  
- **Single slot** for the **text** label; no built-in prefix/postfix icon API (use **`Button`** for that).

`Button`, **AvatarButton**, and others extend this; styling tokens: `--mdc-button-*` in the [doc](https://momentum.design/storybook-static/index.html?path=/docs/components-button-buttonsimple--docs).

---

## Key props

- **`type`**, **`disabled`**, **`softDisabled`**, **`active`**, **`size`**, **`onClick`**, etc.

`size` in **Buttonsimple** ties to the button height system used by the design system—see the Storybook table for your version.

---

## Example

```jsx
import { Buttonsimple } from "@momentum-design/components/dist/react";

<Buttonsimple>Click Me</Buttonsimple>
```

---

## Checklist

- [ ] Prefer **`Button`** for icons, colors, and full variant set  
- [ ] `type="button"` in forms when not submitting  
- [ ] `softDisabled` only with a clear **inert** action policy in code  
- [ ] `active` for **true** toggles, not for single-use actions  

[Storybook — ButtonSimple / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-button-buttonsimple--docs)
