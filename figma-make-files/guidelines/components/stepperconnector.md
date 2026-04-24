# StepperConnector (Momentum) — Figma Make guidance

**StepperConnector** is the **line** between two **StepperItem**s. It reflects **complete** vs **incomplete** state from the **Stepper** context and matches **horizontal** or **vertical** **orientation**, laid out **only** between items **inside** **Stepper**. Theming: **`--mdc-stepperconnector-complete-background`**, **`--mdc-stepperconnector-incomplete-background`**, **csspart** `connector`. Reference: [Storybook — StepperConnector / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-stepper-stepperconnector--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-stepper-stepperconnector--example).

---

## Import

```jsx
import { Stepper, StepperItem, StepperConnector } from "@momentum-design/components/react";
```

Use `@momentum-design/components/react` only, not `@momentum-design/components` without `/react` (per `Guidelines.md`).

---

## Checklist

- [ ] One **connector** **between** each **pair** of steps, not at the end of the list  
- [ ] Color tokens reflect **step** state from your **StepperItem** `status` values, not ad-hoc hex  

[Storybook — StepperConnector / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-stepper-stepperconnector--docs)
