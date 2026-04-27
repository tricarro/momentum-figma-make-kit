# Password (Momentum) — Figma Make guidance

**Password** extends **Input** for **password** entry: show/hide trailing control with **`showButtonAriaLabel`** and **`hideButtonAriaLabel`**, plus standard **label**, **help** / **validation** (**`helpTextType`:** default, error, warning, success, priority, …), and **Input** slots. Events in React: **`onInput`**, **`onChange`**, **`onFocus`**, **`onBlur`**, **`onClear`**. Do **not** use a raw **`Input type="password"`** unless the spec explicitly deviates. Reference: [Storybook — Password / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-password-password--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-password-password--example).

---

## Import

```jsx
import { Password } from "@momentum-design/components/react";
```

Use `@momentum-design/components/react` only, not `@momentum-design/components` without `/react` (per [setup.md](../setup.md)).

---

## What it is

- Inherits **leading** icon, **prefix** text, **toggletip**, **clear** (`trailingButton` when applicable), and **`--mdc-input-*`**.  
- **Autofill** and **native** password attributes: follow the Storybook and platform guidance.  

**Password** = credential field; for short secrets that are not passwords, use **Input** with the right `type` / mask only if the doc allows.

---

## Key props (typical)

- **`label`**, **`showButtonAriaLabel`**, **`hideButtonAriaLabel`**, **`helpText`**, **`helpTextType`**, **`onInput`**, **`onChange`**

---

## Example — `Password` with show/hide labels

```jsx
import { Password } from "@momentum-design/components/react";

function SignIn() {
  return (
    <Password
      label="Password"
      showButtonAriaLabel="Show password"
      hideButtonAriaLabel="Hide password"
      helpText="8+ characters."
    />
  );
}
```

(Add **`value` / `defaultValue`** and **`onInput` / `onChange`** for a real form; see [Storybook — Password / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-password-password--docs).)

---

## Checklist

- [ ] **Show** / **hide** buttons have **distinct, translated** ARIA labels  
- [ ] Errors use **`helpTextType`** (or slots), not only red borders  
- [ ] `IconProvider` in the app root per [setup.md](../setup.md)  

[Storybook — Password / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-password-password--docs)
