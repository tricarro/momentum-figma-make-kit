# List (Momentum) — Figma Make guidance

**List** is the **container** for **ListItem** rows. Place **`ListItem`**s in the **default** slot. Optionally place **`Listheader`** in the **`list-header`** slot for a title row above the items. Always use **`List`** as the parent, **even** for a single item (a11y structure). Reference: [Storybook — List / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-list-list--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-list-list--example).

---

## Import

```jsx
import { List, ListItem, Listheader } from "@momentum-design/components/react";
```

Use `@momentum-design/components/react` only, not `@momentum-design/components` without `/react` (per `Guidelines.md`).

---

## What it is

- **Slots** — `default` (list items); **`list-header`** (`listHeader` in React props on the wrapper—follow Storybook) for a **`Listheader`**.  
- **csspart** `container` wraps the items.  

**List** holds structure; **ListItem** provides rows; **ListBox** (with **Option**s) is a different “options” control—see **`listbox.md`**.

---

## Example — `List` with `ListItem` rows

```jsx
import { List, ListItem } from "@momentum-design/components/react";

function SimpleList() {
  return (
    <List>
      <ListItem label="Project Alpha" secondaryLabel="Last updated 2d ago" />
      <ListItem label="Project Beta" secondaryLabel="Last updated 1w ago" />
    </List>
  );
}
```

(For a **header** row, place **`Listheader`** in the **`list-header` slot** on `List`—see [Storybook — List / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-list-list--docs).)

---

## Checklist

- [ ] **List** wraps every list row pattern in the doc  
- [ ] Long labels: add **Tooltip** with **`triggerID`** on the `ListItem`, per the ListItem docs  
- [ ] `IconProvider` in the app root when list rows use **Icon** (e.g. in `Listheader`) per `Guidelines.md`  

[Storybook — List / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-list-list--docs)
