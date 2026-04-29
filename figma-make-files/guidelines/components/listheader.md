# Listheader (Momentum) — Figma Make guidance

**Listheader** is a **row** for the **title** and optional **actions** at the top of a **List**. Use **`headerText`**, or slot **Buttons** / **Links** in the **default** slot. Optional **`prefixIcon`** and **`postfixIcon`** (Momentum **icon** names). **`disabled`** grays the header; slot content can still be interactive unless you disable each control. **Place inside** the **`List`** component’s **`list-header` slot. Reference: [Storybook — Listheader / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-list-listheader--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-list-listheader--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { List, Listheader } from "@momentum-design/components/dist/react";
```

---

## What it is

- Theming: **`--mdc-listheader-height`**, **`padding`**, **`gap`**.  
- **Parts:** `header-text`, `prefix-icon`, `postfix-icon` for advanced styling.  

**Listheader** = list chrome; **ListItem** = data rows; **Listheader** is not a generic page title—use app chrome patterns for that if needed.

---

## Key props (typical)

- **`headerText`**, **`prefixIcon`**, **`postfixIcon`**, **`disabled`**

---

## Example — `Listheader` in the `list-header` slot

```jsx
import { List, Listheader, ListItem } from "@momentum-design/components/dist/react";

function InboxList() {
  return (
    <List>
      <Listheader
        slot="list-header"
        headerText="Inbox"
        postfixIcon="add-bold"
      />
      <ListItem label="Message one" />
      <ListItem label="Message two" />
    </List>
  );
}
```

(Confirm how **`List`** composes with **`Listheader`** in React: **`slot`** on the child vs a **`listHeader` prop**—see [Storybook — List / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-list-list--docs) and [Listheader / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-list-listheader--docs).)

---

## Checklist

- [ ] Nests under **`List`** in the **`list-header` slot, not floating alone  
- [ ] Trailing **actions** in the default slot remain **labeled** and **focusable**  
- [ ] `IconProvider` in the app root per [setup.md](../setup.md) if using icons  

[Storybook — Listheader / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-list-listheader--docs)
