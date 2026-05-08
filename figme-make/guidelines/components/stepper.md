# Stepper (Momentum) — Figma Make guidance

**Stepper** is the **context** wrapper for **[StepperItem](./stepperitem.md)** + **[StepperConnector](./stepperconnector.md)** in order. It sets **orientation** (**`horizontal`** default, or **`vertical`**) and **variant** of items (**`inline`** vs **`stacked`**), consumed by child items and connectors. **It does not track step state**—you control **`status`** on each **StepperItem** from the app. Default slot: alternate **StepperItem** and **StepperConnector** (see Storybook).

See also: [StepperItem](./stepperitem.md), [StepperConnector](./stepperconnector.md), [Tab](./tab.md) (parallel views—not the same as step UX).

Browse the [Momentum Components catalog](https://momentum.design/en/components/) for naming; Storybook documents props and examples. Reference: [Storybook — Stepper / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-stepper-stepper--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-stepper-stepper--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { Stepper, StepperItem, StepperConnector } from "@momentum-design/components/dist/react";
```

---

## What it is

- **`orientation`** and **`variant`** flow through **context** to children.  
- Use for **wizards**, **checkout**, **form** steps—not a substitute for **Tabs** when the UX is **parallel** sections.

---

## Example — `Stepper` with two items and a connector

```jsx
import { Stepper, StepperItem, StepperConnector } from "@momentum-design/components/dist/react";

function TwoStep() {
  return (
    <Stepper orientation="horizontal" variant="inline">
      <StepperItem label="Address" status="completed" dataAriaLabel="Address step" />
      <StepperConnector />
      <StepperItem label="Payment" status="current" dataAriaLabel="Payment step" />
    </Stepper>
  );
}
```

Confirm **`label`** / **`text`**, **`status`**, and child order in [Storybook — Stepper / Example](https://momentum.design/storybook-static/index.html?path=/story/components-stepper-stepper--example).

---

## Checklist for Figma Make

- [ ] **`ThemeProvider`** per [setup.md](../setup.md)  
- [ ] **`StepperItem`** **`status`** values reflect real app step state  
- [ ] One **[StepperConnector](./stepperconnector.md)** **between** each pair of steps—not trailing after the last item  

Cross-check [Storybook — Stepper / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-stepper-stepper--docs) and your installed package version.
