# TabList (Momentum) — Figma Make guidance

**TabList** (React: **`TabList`**) is the **horizontal** **tab** strip: **default** slot holds **Tab** children. **Arrow** keys move between tabs; **Enter** / **Space** select. **`onChange`:** **`event.detail.tabId`**. The component sets **`tablist`**, **`tab`**, and **`aria-selected`**. **You** must: label the bar with **`dataAriaLabel` / `data-aria-label`**, link each **tab** to a **`tabpanel`** with **`aria-controls`**, and label each **panel** with **`aria-labelledby`** to its tab—per the [doc](https://momentum.design/storybook-static/index.html?path=/docs/components-tab-tablist--docs). **Menus** on a tab: set **`aria-haspopup`** on that tab. Reference: [Storybook — TabList / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-tab-tablist--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-tab-tablist--example).

---

## Import

```jsx
import { TabList, Tab } from "@momentum-design/components/react";
```

Use `@momentum-design/components/react` only, not `@momentum-design/components` without `/react` (per `Guidelines.md`).

---

## What it is

- **Scroll** overflow may show **arrow** **buttons**—`--mdc-tablist-*` in the [doc](https://momentum.design/storybook-static/index.html?path=/docs/components-tab-tablist--docs).  
- **Vertical** **tabs** → use **Verticaltablist**, not **TabList** rotated.  

[Storybook — TabList / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-tab-tablist--docs)
