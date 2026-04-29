# Tab (Momentum) — Figma Make guidance

**Tab** is one **tab** in a **TabList** (or **Verticaltablist**). Set **`text`** and, inside **`TabList`**, a stable **`tabId`**. **Slots** **`badge`** and **`chip`** (not both); **icons** use **`iconName`**. Fires **`onClick`**, keyboard events, **`onFocus`**, and **`onActiveChange`** (detail: **`tabId`**, `active`)—**TabList** subscribes to this; with **TabList** you often **do not** handle per-tab **onActiveChange** yourself. Styling: **`--mdc-tab-*`** in the [doc](https://momentum.design/storybook-static/index.html?path=/docs/components-tab-tab--docs). **Vertical** list forces **line**-style—see [Verticaltablist](https://momentum.design/storybook-static/index.html?path=/docs/components-verticaltablist-verticaltablist--docs). Reference: [Storybook — Tab / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-tab-tab--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-tab-tab--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { Tab, TabList } from "@momentum-design/components/dist/react";
```

---

## What it is

- **Panel** content is **not** inside the tab: render **tabpanel** regions in your layout and wire **`aria-controls` / `aria-labelledby`** (see [TabList](https://momentum.design/storybook-static/index.html?path=/docs/components-tab-tablist--docs) notes).  

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

(Render **tab panels** in your page and follow **WAI-ARIA tab** wiring from [Storybook — TabList / Example](https://momentum.design/storybook-static/index.html?path=/story/components-tab-tablist--example).)

[Storybook — Tab / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-tab-tab--docs)
