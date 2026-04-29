# Searchfield (Momentum) — Figma Make guidance

**Searchfield** extends **Input** with **inline filter chips** (**`InputChip`**, **`AlertChip`**, **`Chip`**) in the **`filters`** slot. Chips act like part of the **text** line: **arrow** keys move between text and chips; **Backspace** removes a chip when the cursor is next to it. **Control type** — default **uncontrolled** removes removed chips from the DOM and fires **`onChipRemove`**; **`controlType="controlled"`** only fires **`onChipRemove`**, and you must **remove the chip in state** yourself. In React: **`onChipRemove`**, plus **`onInput`**, **`onChange`**, **`onFocus`**, **`onBlur`**, **`onClear`**. The package **discourages** using **Searchfield** **with** a **Popover** or **ListBox**; **results** should be **on the page**. For a search field that **opens a popover** of results, use **SearchPopover** instead. Reference: [Storybook — Searchfield / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-searchfield-searchfield--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-searchfield-searchfield--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { Searchfield, InputChip, Chip } from "@momentum-design/components/dist/react";
```

---

## What it is

- Inherits **Input** slots: **label**, **help**, **leading** icon, **clear**, etc.  
- **`onChipRemove`:** `event.detail` includes the **chip** element.  

**Searchfield** = main search + **inline** **filters**; **SearchPopover** = search + **floating** results; **Combobox** = typeahead **option** list.

---

## Example — `Searchfield`

```jsx
import { Searchfield } from "@momentum-design/components/dist/react";

function MessagesSearch() {
  return <Searchfield label="Search messages" placeholder="Search…" />;
}
```

(Add **`InputChip` / `Chip` filter** children and **`onChipRemove`** when the design needs inline filters—[Storybook — Searchfield / Example](https://momentum.design/storybook-static/index.html?path=/story/components-searchfield-searchfield--example).)

---

## Checklist

- [ ] Do not pair with **Popover**-based result lists; use **SearchPopover** for that model  
- [ ] **Controlled** chip lists keep React state in sync in **`onChipRemove`**  
- [ ] `IconProvider` in the app root per [setup.md](../setup.md)  

[Storybook — Searchfield / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-searchfield-searchfield--docs)
