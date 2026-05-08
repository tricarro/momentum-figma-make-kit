# StepperConnector (Momentum) — Figma Make guidance

**StepperConnector** is the **line** between two **[StepperItem](./stepperitem.md)** components. It reflects **complete** vs **incomplete** from **Stepper** context and matches **horizontal** or **vertical** **orientation**. Use **only** **between** items **inside** **[Stepper](./stepper.md)**. Theming: **`--mdc-stepperconnector-complete-background`**, **`--mdc-stepperconnector-incomplete-background`**, **csspart** **`connector`**.

See also: [Stepper](./stepper.md), [StepperItem](./stepperitem.md).

Browse the [Momentum Components catalog](https://momentum.design/en/components/) for naming; Storybook documents props and examples. Reference: [Storybook — StepperConnector / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-stepper-stepperconnector--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-stepper-stepperconnector--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { Stepper, StepperItem, StepperConnector } from "@momentum-design/components/dist/react";
```

---

## What it is

Same composition as **[Stepper](./stepper.md)**—**StepperConnector** sits **between** **StepperItem** rows, not at the end of the sequence.

---

## Example — between two steps

```jsx
import { Stepper, StepperItem, StepperConnector } from "@momentum-design/components/dist/react";

function ConnectorOnly() {
  return (
    <Stepper>
      <StepperItem label="1" status="completed" dataAriaLabel="Step 1" />
      <StepperConnector />
      <StepperItem label="2" status="incomplete" dataAriaLabel="Step 2" />
    </Stepper>
  );
}
```

[Storybook — StepperConnector / Example](https://momentum.design/storybook-static/index.html?path=/story/components-stepper-stepperconnector--example)

---

## Checklist for Figma Make

- [ ] **`ThemeProvider`** per [setup.md](../setup.md)  
- [ ] Exactly **one** connector **between** each **pair** of steps—not after the final step  
- [ ] Connector colors come from **`--mdc-stepperconnector-*`** tokens, not ad-hoc hex  

Cross-check [Storybook — StepperConnector / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-stepper-stepperconnector--docs) and your installed package version.
