# Toast (Momentum) — Figma Make guidance

**Toast** is a **lightweight, non-modal** **inline**/stacked **alert**: success, warning, error, or **custom** variant. It is **controlled** from the app (show/hide, text). **Slots** — **`toast-body-normal`**, **`toast-body-detailed`**, **footer** **Button**s, **close**; wrap body copy in **`Text tagname="span"`** as **recommended**. **`onClose`** in React. **Not** a **Dialog**—**Toast** does not trap focus site-wide. **Banner** and **page**-level critical messaging may use a different **pattern**; check **Toast** **vs** **Banner** in the design file. Reference: [Storybook — Toast / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-toast-toast--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-toast-toast--example).

---

## Import

```jsx
import { Toast, Text, Button } from "@momentum-design/components/react";
```

Use `@momentum-design/components/react` only, not `@momentum-design/components` without `/react` (per [setup.md](../setup.md)).

---

## Example

```jsx
import { Button, Icon, Text, Toast } from "@momentum-design/components/react";

function ExampleToast() {
  return (
    <Toast
      variant="custom"
      headerText="Toast Title"
      headerTagName="span"
      closeButtonAriaLabel="Close toast"
      showMoreText="Show more"
      showLessText="Show less"
    >
      <Button slot="footer-button-secondary" type="button">
        Secondary
      </Button>
      <Button slot="footer-button-primary" type="button">
        Primary
      </Button>
      <Icon slot="content-prefix" size="1.5" name="placeholder-bold" />
      <Text slot="toast-body-normal" tagname="span">
        This is a toast message.
      </Text>
      <Text slot="toast-body-detailed" tagname="span">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Text>
    </Toast>
  );
}
```

## What it is

- Theming: **`--mdc-toast-*`**.
- **Expand** detailed body: use the **detailed** slot and footer **toggle** per Storybook.

[Storybook — Toast / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-toast-toast--docs)