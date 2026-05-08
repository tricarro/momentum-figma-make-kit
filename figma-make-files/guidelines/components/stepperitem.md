# StepperItem (Momentum) — Figma Make guidance

**StepperItem** is a **single** step in a **[Stepper](./stepper.md)**. **`status`:** e.g. **`completed`**, **`current`**, **`incomplete`**, **`error-current`**, **`error-incomplete`** (full set in [Storybook — StepperItem / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-stepper-stepperitem--docs)). **You** own state—the component does not advance steps by itself. **A11y:** for **`current`** / **`error-current`**, the package expects **`aria-current="step"`** on the active step and strong **`dataAriaLabel`** / **`aria-label`** when visible text is insufficient. Fires **`onClick`**, **`onKeyDown`**, **`onKeyUp`** in React.

See also: [Stepper](./stepper.md), [StepperConnector](./stepperconnector.md).

Browse the [Momentum Components catalog](https://momentum.design/en/components/) for naming; Storybook documents props and examples. Reference: [Storybook — StepperItem / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-stepper-stepperitem--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-stepper-stepperitem--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { Stepper, StepperItem, StepperConnector } from "@momentum-design/components/dist/react";
```

---

## What it is

- **Parts:** **`status-icon`**, **`step-number`**, **`label`**, **`help-text`**, error **icon** when in error states.  
- **Clicks** may navigate to a **previous** step only if your flow implements **`onClick`**; otherwise avoid **clickable** affordance without a handler.

---

## Example — one `StepperItem`

```jsx
import { Stepper, StepperItem } from "@momentum-design/components/dist/react";

function Single() {
  return (
    <Stepper>
      <StepperItem label="Confirm" status="error-current" dataAriaLabel="Confirm step" />
    </Stepper>
  );
}
```

Normally render **multiple** items and **[StepperConnector](./stepperconnector.md)** between them—[Storybook — Stepper / Example](https://momentum.design/storybook-static/index.html?path=/story/components-stepper-stepper--example).

---

## Checklist for Figma Make

- [ ] **`ThemeProvider`** per [setup.md](../setup.md)  
- [ ] **`status`** reflects real wizard/checkout step state from the app  
- [ ] **`dataAriaLabel`** (or visible label) identifies each step for assistive tech  
- [ ] **`StepperConnector`** between items—not after the last step only  

Cross-check [Storybook — StepperItem / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-stepper-stepperitem--docs) and your installed **`@momentum-design/components`** version.
