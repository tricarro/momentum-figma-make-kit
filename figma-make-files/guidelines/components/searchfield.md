# Searchfield (Momentum) — Figma Make guidance

**Searchfield** extends **Input** with **inline filter chips** (**`InputChip`**, **`AlertChip`**, **`Chip`**) in the **`filters`** slot. Chips act like part of the **text** line: **arrow** keys move between text and chips; **Backspace** removes a chip when the cursor is next to it. **Control type** — default **uncontrolled** removes removed chips from the DOM and fires **`onChipRemove`**; **`controlType="controlled"`** only fires **`onChipRemove`**, and you must **remove the chip in state** yourself. In React: **`onChipRemove`**, plus **`onInput`**, **`onChange`**, **`onFocus`**, **`onBlur`**, **`onClear`**. The package **discourages** using **Searchfield** **with** a **Popover** or **ListBox**; **results** should be **on the page**. For a search field that **opens a popover** of results, use **SearchPopover** instead. Reference: [Storybook — Searchfield / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-searchfield-searchfield--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-searchfield-searchfield--example).

---

## Import

```jsx
import { Searchfield, InputChip, Chip } from "@momentum-design/components/react";
```

Use `@momentum-design/components/react` only, not `@momentum-design/components` without `/react` (per `Guidelines.md`).

---

## What it is

- Inherits **Input** slots: **label**, **help**, **leading** icon, **clear**, etc.  
- **`onChipRemove`:** `event.detail` includes the **chip** element.  

**Searchfield** = main search + **inline** **filters**; **SearchPopover** = search + **floating** results; **Combobox** = typeahead **option** list.

---

## Checklist

- [ ] Do not pair with **Popover**-based result lists; use **SearchPopover** for that model  
- [ ] **Controlled** chip lists keep React state in sync in **`onChipRemove`**  
- [ ] `IconProvider` in the app root per `Guidelines.md`  

[Storybook — Searchfield / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-searchfield-searchfield--docs)
