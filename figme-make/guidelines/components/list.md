# List (Momentum) — Figma Make guidance

**List** is the **container** for **ListItem** rows. Place **`ListItem`** components in the **default** slot. Optionally place **`Listheader`** in the **`list-header`** slot for a title row above the items. Always use **`List`** as the parent, **even** for a single item (structure for assistive tech).

See also: [ListItem](./listitem.md), [Listheader](./listheader.md), [ListBox](./listbox.md) (options list, not generic rows).

Browse the [Momentum Components catalog](https://momentum.design/en/components/) for naming; Storybook documents props and examples. Reference: [Storybook — List / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-list-list--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-list-list--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { List, ListItem, Listheader } from "@momentum-design/components/dist/react";
```

---

## What it is

- **Slots** — **`default`** (list items); **`list-header`** for a **`Listheader`** (confirm **`slot`** vs composition props for your React wrapper in Storybook).  
- **csspart** **`container`** wraps the items.

**List** holds structure; **ListItem** provides rows; **ListBox** + **Option** / **OptGroup** is a different control—see [ListBox](./listbox.md).

---

## Example — `List` with `ListItem` rows

```jsx
import { List, ListItem } from "@momentum-design/components/dist/react";

function SimpleList() {
  return (
    <List>
      <ListItem label="Project Alpha" secondaryLabel="Last updated 2d ago" />
      <ListItem label="Project Beta" secondaryLabel="Last updated 1w ago" />
    </List>
  );
}
```

For a **header** row, put **`Listheader`** in the **`list-header`** slot on **`List`**—see [Storybook — List / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-list-list--docs).

---

## Checklist for Figma Make

- [ ] **`ThemeProvider`** per [setup.md](../setup.md); **`IconProvider`** when rows or header use **Icon**  
- [ ] **List** wraps every list-row pattern in the doc  
- [ ] Long labels: add **Tooltip** and pair **`triggerID`** on **Popover** / tooltip with a **unique `id`** on the trigger element—see [ListItem](./listitem.md) and Storybook  

Cross-check [Storybook — List / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-list-list--docs) and your installed package version.
