# Chip (Momentum) — Figma Make guidance

**Chip** is a **compact, interactive** pill (extends **Buttonsimple**): **leading `iconName`** and **`label`**. You can wrap it in **Tooltip** / other overlays for more context. Prefer **~20 character** labels (design recommendation). Use **FilterChip** for **selected/deselected** filter toggles, **InputChip** for **removable** user-entered values, **StaticChip** for read-only tags. Reference: [Storybook — Chip / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-chip-chip--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-chip-chip--example).

---

## Import

```jsx
import { Chip } from "@momentum-design/components/react";
```

Use `@momentum-design/components/react` only, not `@momentum-design/components` without `/react` (per `Guidelines.md`).

---

## What it is

- **`label`:** visible text.  
- **`iconName`:** Momentum icon (optional; extension pattern).  
- **`color`:** `default` · `cobalt` · `gold` · `lime` · `mint` · `orange` · `pink` · `purple` · `slate` · `violet`  
- **Events:** `onClick`, `onKeyDown`, `onKeyUp`, `onFocus`  
- Styling: `--mdc-chip-color`, `--mdc-chip-border-color`, `--mdc-chip-background-color` (see [docs](https://momentum.design/storybook-static/index.html?path=/docs/components-chip-chip--docs)).

**Do not** use a plain `Chip` when the UX is a **filter toggle** (use **FilterChip**) or a **token with remove** (use **InputChip**).

---

## Key props

- **`label`**, **`color`**, **`iconName`**, **`type`**, **`disabled`**, **`onClick`**

---

## Example

```jsx
import { Chip } from "@momentum-design/components/dist/react";


<Chip label="Label"></Chip>
```

---

## Checklist

- [ ] **Short** label; truncate in design, not in random CSS  
- [ ] **Filter** UI → **FilterChip**; **dismiss** token → **InputChip**; **read-only** tag → **StaticChip**  
- [ ] `IconProvider` in the app root per `Guidelines.md`  

[Storybook — Chip / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-chip-chip--docs)
