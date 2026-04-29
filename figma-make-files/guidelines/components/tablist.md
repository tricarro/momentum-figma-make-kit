# TabList (Momentum) — Figma Make guidance

**TabList** (React: **`TabList`**) is the **horizontal** **tab** strip: **default** slot holds **Tab** children. **Arrow** keys move between tabs; **Enter** / **Space** select. **`onChange`:** **`event.detail.tabId`**. The component sets **`tablist`**, **`tab`**, and **`aria-selected`**. **You** must: label the bar with **`dataAriaLabel` / `data-aria-label`**, link each **tab** to a **`tabpanel`** with **`aria-controls`**, and label each **panel** with **`aria-labelledby`** to its tab—per the [doc](https://momentum.design/storybook-static/index.html?path=/docs/components-tab-tablist--docs). **Menus** on a tab: set **`aria-haspopup`** on that tab. Reference: [Storybook — TabList / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-tab-tablist--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-tab-tablist--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { TabList, Tab } from "@momentum-design/components/dist/react";
```

---

## What it is

- **Scroll** overflow may show **arrow** **buttons**—`--mdc-tablist-*` in the [doc](https://momentum.design/storybook-static/index.html?path=/docs/components-tab-tablist--docs).  
- **Vertical** **tabs** → use **Verticaltablist**, not **TabList** rotated.  

---

## Example — `TabList` with `Tab` children

```jsx
import { TabList, Tab } from "@momentum-design/components/dist/react";

function TopTabs() {
  return (
    <TabList dataAriaLabel="Settings" onChange={() => {}}>
      <Tab text="General" tabId="general" />
      <Tab text="Security" tabId="security" />
    </TabList>
  );
}
```

(Implement **`onChange`**: read **`event.detail.tabId`**; wire **panels** and **selection** per [Storybook — TabList / Example](https://momentum.design/storybook-static/index.html?path=/story/components-tab-tablist--example).)

[Storybook — TabList / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-tab-tablist--docs)
