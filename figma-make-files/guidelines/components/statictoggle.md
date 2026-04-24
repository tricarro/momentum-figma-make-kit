# StaticToggle (Momentum) — Figma Make guidance

**StaticToggle** is a **read-only** **toggle** (switch) appearance, matching the **Toggle** look without interaction. **Props:** `checked` (on/off), **`size`** `default` | `compact`, plus **`readOnly`**, `disabled`, **`softDisabled`**. The interactive case is **Toggle** (and often **FormfieldGroup** for groups). Parent **`mdc-toggle`** can slot static visuals per the [package JSDoc](https://momentum.design/storybook-static/index.html?path=/docs/components-decorator-statictoggle--docs). Reference: [Storybook — StaticToggle / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-decorator-statictoggle--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-decorator-statictoggle--example).

---

## Import

```jsx
import { StaticToggle } from "@momentum-design/components/react";
```

Use `@momentum-design/components/react` only, not `@momentum-design/components` without `/react` (per `Guidelines.md`).

---

## What it is

- **Read-only** settings “echo,” invoices, and compliance summaries.  
- The **slot** is typically for internal composition with **Toggle**; when used alone, follow Storybook.  
- Theming: **`--mdc-statictoggle-*`**.  

**StaticToggle** is **not** a substitute for a **form** `switch`; use **Toggle** when the value can **change** immediately.

---

## Key props (typical)

- **`checked`**, **`size`**, **`readOnly`**, **`disabled`**, **`softDisabled`**

---

## Checklist

- [ ] If the user can **flip** the value, use **Toggle** and wire **`onChange`**  
- [ ] Pair the row with a **Text** label so “on” is not only green vs gray  
- [ ] `compact` only when density matches the rest of the list  

[Storybook — StaticToggle / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-decorator-statictoggle--docs)
