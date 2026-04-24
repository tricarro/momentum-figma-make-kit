# StepperItem (Momentum) — Figma Make guidance

**StepperItem** is a **single** step. **`status`:** e.g. **`completed`**, **`current`**, **`incomplete`**, **`error-current`**, **`error-incomplete`** (see the [doc](https://momentum.design/storybook-static/index.html?path=/docs/components-stepper-stepperitem--docs)). The component is **uncontrolled**—**you** set `status` from the app. **A11y:** for **`current`** or **`error-current`**, the package expects **`aria-current="step"`** on the **one** active step, and a strong **`aria-label` / `dataAriaLabel`** if the text alone is not enough. Fires **`onClick`**, **`onKeyDown`**, **`onKeyUp`** in React. Reference: [Storybook — StepperItem / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-stepper-stepperitem--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-stepper-stepperitem--example).

---

## Import

```jsx
import { Stepper, StepperItem, StepperConnector, Text } from "@momentum-design/components/react";
```

Use `@momentum-design/components/react` only, not `@momentum-design/components` without `/react` (per `Guidelines.md`).

---

## What it is

- **Parts:** `status-icon`, `step-number`, `label`, `help-text`, error **icon** when in error.  
- **Clicks** can move the user to a **previous** step if your flow allows; otherwise do not make steps look **clickable** without a handler.  

[Storybook — StepperItem / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-stepper-stepperitem--docs)
