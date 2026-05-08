# TabList (Momentum) — Figma Make guidance

**TabList** (React: **`TabList`**) is the **horizontal** **tab** strip: the **default** slot holds **[Tab](./tab)** children. **Arrow** keys move between tabs; **Enter** / **Space** activate. **`onChange`:** **`event.detail.tabId`**. The component sets **`tablist`**, **`tab`**, and **`aria-selected`**. **You** must label the bar (**`dataAriaLabel`**), link each **tab** to a **`tabpanel`** (**`aria-controls`**), and label each **panel** (**`aria-labelledby`**)—per [Storybook — TabList / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-tab-tablist--docs). Menus on a tab: set **`aria-haspopup`** on that tab.

See also: [Tab](./tab.md), [Verticaltablist](./verticaltablist.md).

Browse the [Momentum Components catalog](https://momentum.design/en/components/) for naming; Storybook documents props and examples. Reference: [Storybook — TabList / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-tab-tablist--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-tab-tablist--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { TabList, Tab } from "@momentum-design/components/dist/react";
```

---

## What it is

- **Scroll** overflow may show arrow buttons—**`--mdc-tablist-*`** in the [doc](https://momentum.design/storybook-static/index.html?path=/docs/components-tab-tablist--docs).  
- **Vertical** tabs → **[Verticaltablist](./verticaltablist.md)**, not a rotated **TabList**.

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

Implement **`onChange`** (**`event.detail.tabId`**) and panel wiring per [Storybook — TabList / Example](https://momentum.design/storybook-static/index.html?path=/story/components-tab-tablist--example).

---

## Checklist for Figma Make

- [ ] **`ThemeProvider`** + **`IconProvider`** per [setup.md](../setup.md)  
- [ ] **`dataAriaLabel`** on **TabList**; each **Tab** / panel pair wired for SR users  
- [ ] Selection state stays in sync with visible **tabpanel** content  

Cross-check [Storybook — TabList / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-tab-tablist--docs) and your installed package version.
