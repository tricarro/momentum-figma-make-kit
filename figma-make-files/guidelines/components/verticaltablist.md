# Verticaltablist (Momentum) — Figma Make guidance

**Verticaltablist** (React: **`Verticaltablist`**) is a **TabList** in **column** form: it **extends** **List** and only supports the **line** **Tab** look (other **Tab** **variant**s are **ignored**). **Arrow** **Up/Down** navigate; **Enter** / **Space** **select**; **`onChange`** exposes **`event.detail.tabId`**. The component sets **`tablist`**, vertical **`aria-orientation`**, and the same **tab** / **tabpanel** **contract** as [TabList](https://momentum.design/storybook-static/index.html?path=/docs/components-tab-tablist--docs)—**you** must wire **`dataAriaLabel`**, **`aria-controls`**, and **`tabpanel`**. Reference: [Storybook — Verticaltablist / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-verticaltablist-verticaltablist--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-verticaltablist-verticaltablist--example).

---

## Import

```jsx
import { Verticaltablist, Tab } from "@momentum-design/components/react";
```

Use `@momentum-design/components/react` only, not `@momentum-design/components` without `/react` (per `Guidelines.md`).

---

## What it is

- **Default** slot: **Tab** children, same as **TabList** but stacked nav in side panels or settings layouts.  

[Storybook — Verticaltablist / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-verticaltablist-verticaltablist--docs)
