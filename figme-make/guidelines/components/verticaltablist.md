# Verticaltablist (Momentum) — Figma Make guidance

**Verticaltablist** (React: **`Verticaltablist`**) is a **[TabList](./tablist.md)** in **column** layout: it **extends** **[List](./list.md)** and only supports the **line** **[Tab](./tab.md)** look (other **Tab** variants are **ignored**). **Arrow** **Up/Down** navigate; **Enter** / **Space** select; **`onChange`** exposes **`event.detail.tabId`**. The component sets **`tablist`**, vertical **`aria-orientation`**, and the same **tab** / **tabpanel** contract as **TabList**—**you** wire **`dataAriaLabel`**, **`aria-controls`**, and **tabpanel** labeling.

See also: [Tab](./tab.md), [Tablist](./tablist.md), [List](./list.md).

Browse the [Momentum Components catalog](https://momentum.design/en/components/) for naming; Storybook documents props and examples. Reference: [Storybook — Verticaltablist / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-verticaltablist-verticaltablist--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-verticaltablist-verticaltablist--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { Verticaltablist, Tab } from "@momentum-design/components/dist/react";
```

---

## What it is

- **Default** slot: **Tab** children—stacked nav for settings sidebars, profile shells, etc.

---

## Example — `Verticaltablist` with `Tab` children

```jsx
import { Verticaltablist, Tab } from "@momentum-design/components/dist/react";

function SettingsNav() {
  return (
    <Verticaltablist dataAriaLabel="Settings" onChange={() => {}}>
      <Tab text="Profile" tabId="profile" />
      <Tab text="Security" tabId="security" />
    </Verticaltablist>
  );
}
```

Implement **`onChange`** and **tab panel** wiring per [Storybook — Verticaltablist / Example](https://momentum.design/storybook-static/index.html?path=/story/components-verticaltablist-verticaltablist--example).

---

## Checklist for Figma Make

- [ ] **`ThemeProvider`** + **`IconProvider`** per [setup.md](../setup.md)  
- [ ] **`dataAriaLabel`** on **Verticaltablist**; panels wired like horizontal **TabList**  
- [ ] Do not use for **horizontal** top tabs—use **[TabList](./tablist.md)**  

Cross-check [Storybook — Verticaltablist / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-verticaltablist-verticaltablist--docs) and your installed package version.
