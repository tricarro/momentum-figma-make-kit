# Bullet (Momentum) — Figma Make guidance

**Bullet** is a small **circular** dot for **list** and **nav** affordances. **Sizes** — `small` (0.25rem, default), `medium` (0.5rem), `large` (1rem). Styling: **`--mdc-bullet-size`**, **`--mdc-bullet-background-color`**. It is **decorative**—do not use **color or size** alone to convey the only copy of a status. Part of the **Decorator** set in the design system. Reference: [Storybook — Bullet / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-decorator-bullet--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-decorator-bullet--example).

---

## Import

```jsx
import { Bullet } from "@momentum-design/components/react";
```

Use `@momentum-design/components/react` only, not `@momentum-design/components` without `/react` (per `Guidelines.md`).

---

## What it is

- **Unordered** lists, nav markers, and quiet emphasis.  
- Pair with **Text** so meaning is in words, not the dot.  

**Bullet** (dot) vs **Marker** (vertical line), **Divider** (separating line), **Chip** (interactive pill).

---

## Key props (typical)

- **`size`**

---

## Checklist

- [ ] Adjacent **text** carries the message  
- [ ] `size` matches the layout density in Figma (dense vs open)  
- [ ] `Bullet` is not used as a fake “status LED” without text; use **Badge** or a labeled pattern if needed  

[Storybook — Bullet / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-decorator-bullet--docs)
