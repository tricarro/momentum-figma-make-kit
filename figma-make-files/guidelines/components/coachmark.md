# Coachmark (Momentum) — Figma Make guidance

**Coachmark** is a **contextual** popover built on **Popover** with coachmark defaults: **arrow**, **contrast** surface by default. Use for **onboarding**, feature discovery, or callouts anchored to a **specific** element. Lifecycle matches **Popover** (**show** / **hide**).

See also: [Popover](./popover.md), [Tooltip](./tooltip.md), [Toggletip](./toggletip.md).

Browse the [Momentum Components catalog](https://momentum.design/en/components/) for naming; Storybook documents props and examples. Reference: [Storybook — Coachmark / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-coachmark-coachmark--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-coachmark-coachmark--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { Coachmark } from "@momentum-design/components/dist/react";
```

---

## What it is

- **Popover-based:** **`onShown`**, **`onHidden`**, **`onCreated`**, **`onDestroyed`** in React (align names with your Storybook version).  
- **Default `role`:** **`dialog`** (overridable via **`role`**).  
- **Accessible name:** **`aria-label`** or **`aria-labelledby`**.  
- Theming: **`--mdc-popover-*`** (background, border, arrow, elevation) in the [docs](https://momentum.design/storybook-static/index.html?path=/docs/components-coachmark-coachmark--docs).

**Coachmark** vs **Tooltip** vs **Toggletip:** coachmarks are **larger, teaching** surfaces with an arrow and dismissal patterns—not a one-line hover hint.

---

## Key props / attributes (typical)

- **Anchor / visibility:** **`triggerID`** (or anchor pattern per Storybook), **`open`**, **`placement`**, **`zIndex`**, **`showArrow`**, **`closeButton`**  
- **Lifecycle:** **`onShown`**, **`onHidden`**

Follow Storybook for controlled vs declarative opening—API varies by version.

---

## Example (pattern — wire anchor IDs per Storybook)

```jsx
import { Button, Coachmark, Text } from "@momentum-design/components/dist/react";


<div role="main" style={{ padding: "2rem" }}>
  <Button id="coachmark-trigger">Focus target</Button>
  <Coachmark
    triggerID="coachmark-trigger"
    showArrow
    closeButton
    aria-label="Feature introduction"
    style={{ width: "17.5rem" }}
  >
    <Text type="body-midsize-bold" tagname="div">
      Coachmark title
    </Text>
    <Text type="body-midsize-regular" tagname="div">
      Short supporting copy. Use tokens for width/spacing in real layouts.
    </Text>
  </Coachmark>
</div>
```

Copy **anchor**, **controlled open state**, and **footer actions** from [Storybook — Coachmark / Example](https://momentum.design/storybook-static/index.html?path=/story/components-coachmark-coachmark--example) for your package.

---

## Checklist for Figma Make

- [ ] **`ThemeProvider`** + **`IconProvider`** when coachmark content uses **Icon** / **Button**  
- [ ] **Accessible name** (**`aria-label`** or **`aria-labelledby`**)  
- [ ] **Dismiss** and **focus** behavior match Storybook (no accidental trap)  
- [ ] Prefer **Coachmark** tokens—avoid bespoke popover CSS  

Cross-check [Storybook — Coachmark / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-coachmark-coachmark--docs) and your installed package version.
