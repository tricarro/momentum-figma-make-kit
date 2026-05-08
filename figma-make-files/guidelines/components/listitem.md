# ListItem (Momentum) — Figma Make guidance

**ListItem** is a **row** in a **List** with **leading** / **trailing** areas for **radio**, **checkbox**, or **toggle**, plus **Avatar**, **Badge**, and **Text** sublines. Use the named **slots** (**`leading-controls`**, **`leading-text-primary-label`**, **`trailing-text-subline`**, **`trailing-controls`**, etc.) or the **`content`** slot to **fully override** the body (see Storybook). Parent must be **List** for the intended pattern. Fires **`onClick`**, **`onKeyDown`**, **`onKeyUp`**, **`onFocus`**, and lifecycle events in React.

See also: [List](./list.md), [Option](./option.md) (listbox rows, not **`List`**).

Browse the [Momentum Components catalog](https://momentum.design/en/components/) for naming; Storybook documents props and examples. Reference: [Storybook — ListItem / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-list-listitem--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-list-listitem--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { List, ListItem, Text, Avatar, Checkbox, Radio, Toggle, Badge } from "@momentum-design/components/dist/react";
```

---

## What it is

- **Truncation:** for long text, the package recommends **Tooltip**; give the **`ListItem`** (or label element) a **unique `id`** and set the tooltip/popover’s **`triggerID`** to that **`id`** (see JSDoc / Storybook).  
- Theming: **`--mdc-listitem-*`** for hover, active, labels, and gaps.

**ListItem** = rich row in **List**; **Option** = row inside **Select** / **ListBox** listboxes.

---

## Example — `ListItem` with text props

```jsx
import { List, ListItem } from "@momentum-design/components/dist/react";

function OneRow() {
  return (
    <List>
      <ListItem
        label="Design review"
        secondaryLabel="Today, 2:00 PM"
        sublineText="3 attendees"
      />
    </List>
  );
}
```

Add **leading** / **trailing** controls, **badges**, or **tooltips** from [Storybook — ListItem / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-list-listitem--docs) when the design needs them.

---

## Checklist for Figma Make

- [ ] **`ThemeProvider`** + **`IconProvider`** when rows use **Icon** / avatars with icons per [setup.md](../setup.md)  
- [ ] **`List`** wraps the items  
- [ ] **Radio** selection patterns align with **[Radiogroup](./radiogroup.md)** / shared **`name`**—do not mix ad-hoc semantics  
- [ ] Truncation + **Tooltip** for ellipsized titles (**`triggerID`** matches trigger **`id`**)  

Cross-check [Storybook — ListItem / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-list-listitem--docs) and your installed package version.
