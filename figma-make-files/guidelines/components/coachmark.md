# Coachmark (Momentum) — Figma Make guidance

**Coachmark** is a **contextual** popover built on top of the **Popover** with coachmark **defaults**: it always shows an **arrow**, and the default surface is **contrast** colored. Use for **onboarding**, feature discovery, or callouts that explain a **specific** anchor element. It dispatches the same show/hide lifecycle as Popover. Reference: [Storybook — Coachmark / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-coachmark-coachmark--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-coachmark-coachmark--example).

---

## Import

```jsx
import { Coachmark } from "@momentum-design/components/react";
```

Use `@momentum-design/components/react` only, not `@momentum-design/components` without `/react` (per `Guidelines.md`).

---

## What it is

- **Popover-based:** **`onShown`**, **`onHidden`**, **`onCreated`**, **`onDestroyed`** in React.  
- **Default `role`:** `"dialog"` (can be overridden with **`role`**).  
- **Accessible name:** provide **`aria-label`** or **`aria-labelledby`**.  
- Theming: **`--mdc-popover-*`** (background, border, arrow, elevation) in the [docs](https://momentum.design/storybook-static/index.html?path=/docs/components-coachmark-coachmark--docs).

**Coachmark** vs **Tooltip** vs **Toggletip:** coachmarks are **larger, persistent-until-dismissed** teaching surfaces with an arrow, not a one-line hover hint.

---

## Key props / attributes (typical)

- **Lifecycle / visibility** — align with Popover in Storybook (e.g. anchor, open, placement)  
- **`onShown`**, **`onHidden`**

---

## Example (pattern)

```jsx
import {
  Button,
  Coachmark,
  List,
  ListItem,
  Text,
} from "@momentum-design/components/dist/react";


<div style="..." role="main">
  <div style="...">
    <Button> open </Button>
    <Button> close </Button>
  </div>
  <List>
    <ListItem label="Anchor Content" id="coachmark-trigger"></ListItem>
  </List>
  <Coachmark
    id="coachmark"
    triggerID="coachmark-trigger"
    zIndex="1000"
    showArrow
    closeButton
    style="width: 17.5rem; height: 9rem;"
  >
    <Text type="body-midsize-bold" tagname="div">Coachmark</Text>
    <Text type="body-midsize-regular" tagname="div"
      >This is a sample coach mark. Follow me to walk you through different ways
      that I can be used.</Text
    >
    <div style="...">
      <Button inverted>Next</Button>
      <Button
        style="--mdc-button-border-color: var(--mds-color-theme-inverted-outline-button-normal);"
        >Back</Button
      >
    </div>
  </Coachmark>
</div>
```

Follow the [Coachmark / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-coachmark-coachmark--docs) for exact anchor, slots, and controlled visibility.

---

## Checklist

- [ ] The coachmark has an **accessible name** (`aria-label` or `aria-labelledby`)  
- [ ] Flow does not trap the user: **dismiss** and **focus** behavior match the Storybook pattern  
- [ ] Use **contrast** styling intentionally; do not hand-roll custom popovers  

[Storybook — Coachmark / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-coachmark-coachmark--docs)
