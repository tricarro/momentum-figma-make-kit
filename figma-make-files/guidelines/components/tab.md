# Tab (Momentum) — Figma Make guidance

**Tab** is one **tab** in a **[TabList](./tablist.md)** or **[Verticaltablist](./verticaltablist.md)**. Set **`text`** and a stable **`tabId`** inside the list. **Slots** **`badge`** and **`chip`** (not both); **icons** use **`iconName`**. Fires **`onClick`**, keyboard events, **`onFocus`**, **`onActiveChange`** (**`detail.tabId`**, **`active`**)—**TabList** subscribes; you often **do not** handle **`onActiveChange`** per tab yourself. Styling: **`--mdc-tab-*`**. **Vertical** lists force **line**-style tabs—see **[Verticaltablist](./verticaltablist.md)**.

See also: [Tablist](./tablist.md), [Verticaltablist](./verticaltablist.md).

Browse the [Momentum Components catalog](https://momentum.design/en/components/) for naming; Storybook documents props and examples. Reference: [Storybook — Tab / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-tab-tab--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-tab-tab--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { Tab, TabList } from "@momentum-design/components/dist/react";
```

---

## What it is

- **Panel** content lives **outside** the tab row: render **tabpanel** regions in your layout and wire **`aria-controls`** / **`aria-labelledby`** per [TabList / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-tab-tablist--docs).

---

## Example — `Tab` inside `TabList`

```jsx
import { Tab, TabList } from "@momentum-design/components/dist/react";

function MyTabs() {
  return (
    <TabList>
      <Tab text="Account" tabId="account" />
      <Tab text="Billing" tabId="billing" />
    </TabList>
  );
}
```

Render **tab panels** and follow **WAI-ARIA Tabs** wiring from [Storybook — TabList / Example](https://momentum.design/storybook-static/index.html?path=/story/components-tab-tablist--example).

---

## Checklist for Figma Make

- [ ] **`ThemeProvider`** + **`IconProvider`** per [setup.md](../setup.md) when using **`iconName`**, **`badge`**, or **`chip`**  
- [ ] **`tabId`** values are **stable** and match controlled selection / panels  
- [ ] Related **tabpanel** **`id`** / **`aria-labelledby`** / **`aria-controls`** match Storybook for your version  

Cross-check [Storybook — Tab / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-tab-tab--docs) and your installed package version.
