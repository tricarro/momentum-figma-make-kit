# Searchfield (Momentum) — Figma Make guidance

**Searchfield** extends **[Input](./input.md)** with **inline filter chips** (**`InputChip`**, **`AlertChip`**, **`Chip`**) in the **`filters`** slot. Chips sit in the **text** line: **arrow** keys move between text and chips; **Backspace** removes a chip when the cursor is adjacent. **Control type** — default **uncontrolled** removes chips from the DOM and fires **`onChipRemove`**; **`controlType="controlled"`** only fires **`onChipRemove`**, and **you** remove the chip in state. In React: **`onChipRemove`**, plus **`onInput`**, **`onChange`**, **`onFocus`**, **`onBlur`**, **`onClear`**. The package **discourages** **Searchfield** **with** **Popover** or **ListBox**; keep **results** **on the page**. For search + **floating** results list, use **`SearchPopover`** (Storybook) instead of pairing **Searchfield** + **Popover**.

See also: [Input](./input.md), [InputChip](./inputchip.md), [Chip](./chip.md), [Combobox](./combobox.md).

Browse the [Momentum Components catalog](https://momentum.design/en/components/) for naming; Storybook documents props and examples. Reference: [Storybook — Searchfield / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-searchfield-searchfield--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-searchfield-searchfield--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { Searchfield, InputChip, Chip } from "@momentum-design/components/dist/react";
```

---

## What it is

- Inherits **Input** slots: **label**, **help**, **leading** icon, **clear**, etc.  
- **`onChipRemove`:** **`event.detail`** includes the **chip** element.

**Searchfield** = main search + **inline** **filters**; **`SearchPopover`** (catalog) = search + **floating** results; **Combobox** = typeahead **option** list.

---

## Example — `Searchfield`

```jsx
import { Searchfield } from "@momentum-design/components/dist/react";

function MessagesSearch() {
  return <Searchfield label="Search messages" placeholder="Search…" />;
}
```

Add **`InputChip`** / **`Chip`** filter children and **`onChipRemove`** when the design needs inline filters—[Storybook — Searchfield / Example](https://momentum.design/storybook-static/index.html?path=/story/components-searchfield-searchfield--example).

---

## Checklist for Figma Make

- [ ] **`ThemeProvider`** + **`IconProvider`** per [setup.md](../setup.md)  
- [ ] Do not pair with **Popover**-based result lists; use **`SearchPopover`** for that model (see Storybook)  
- [ ] **Controlled** chip lists keep React state in sync in **`onChipRemove`**  

Cross-check [Storybook — Searchfield / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-searchfield-searchfield--docs) and your installed package version.
