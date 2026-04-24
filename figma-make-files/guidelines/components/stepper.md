# Stepper (Momentum) — Figma Make guidance

**Stepper** is the **context** wrapper for **`StepperItem`** + **`StepperConnector`** in order. It sets **orientation** (**`horizontal`** default, or **`vertical`**) and **variant** of items (**`inline`** vs **`stacked`**), consumed by child items and connectors. **It does not track step state**—you control **`status`** on each **StepperItem** from the app. Default slot: alternate **Item** and **Connector** (see Storybook). Reference: [Storybook — Stepper / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-stepper-stepper--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-stepper-stepper--example).

---

## Import

```jsx
import { Stepper, StepperItem, StepperConnector } from "@momentum-design/components/react";
```

Use `@momentum-design/components/react` only, not `@momentum-design/components` without `/react` (per `Guidelines.md`).

---

## What it is

- **`orientation`** and **`variant`** flow through **context** to children.  
- Wire **form** steps, **wizards**, and **checkout** flows—**not** a substitute for **Tabs** when the UX is **parallel** views.  

---

## Example — `Stepper` with two items and a **connector**

```jsx
import { Stepper, StepperItem, StepperConnector, Text } from "@momentum-design/components/react";

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

(Confirm **props** for **`text` / `label`**, **`status`**, and child order in [Storybook — Stepper / Example](https://momentum.design/storybook-static/index.html?path=/story/components-stepper-stepper--example).)

[Storybook — Stepper / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-stepper-stepper--docs)
