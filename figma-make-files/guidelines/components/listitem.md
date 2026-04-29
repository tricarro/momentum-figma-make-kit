# ListItem (Momentum) — Figma Make guidance

**ListItem** is a **row** in a **List** with **leading** / **trailing** areas for **radio**, **checkbox**, or **toggle**, plus **Avatar**, **Badge**, and **Text** sublines. Use the named **slots** (`leading-controls`, `leading-text-primary-label`, `trailing-text-subline`, `trailing-controls`, etc.) or the **`content`** slot to **fully override** the body (per Storybook; overrides default layout). Parent must be **List** for a11y. Fires **`onClick`**, **`onKeyDown`**, **`onKeyUp`**, **`onFocus`**, and lifecycle **enabled** / **disabled** / **created** / **destroyed** in React. Reference: [Storybook — ListItem / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-list-listitem--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-list-listitem--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { List, ListItem, Text, Avatar, Checkbox, Radio, Toggle, Badge } from "@momentum-design/components/dist/react";
```

---

## What it is

- **Truncation:** for long text, the package recommends a **Tooltip**; add a **unique id** to the `ListItem` and set the tooltip’s **`triggerId`** to match (manual wiring per JSDoc).  
- Theming: **`--mdc-listitem-*`** for hover, active, labels, and gaps.  

**ListItem** = rich row; **Option** = option row inside listboxes / selects, not the same component.

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

(Add **leading** / **trailing** controls, **badges**, or **Tooltips** from the [Storybook — ListItem / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-list-listitem--docs) when the design needs them.)

---

## Checklist

- [ ] `List` wraps the items  
- [ ] Only **one** primary “control” type per design (radio **group** vs ad-hoc) matches **RadioGroup** or **name**  
- [ ] Truncation + **Tooltip** for ellipsized titles  
- [ ] `IconProvider` in the app root if rows use **Icon** / avatars with icons per [setup.md](../setup.md)  

[Storybook — ListItem / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-list-listitem--docs)
