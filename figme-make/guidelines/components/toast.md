# Toast (Momentum) — Figma Make guidance

**Toast** is a **lightweight, non-modal** stacked **alert**: success, warning, error, or **custom** variant. It is **controlled** from the app (visibility, copy). **Slots** — **`toast-body-normal`**, **`toast-body-detailed`**, **footer** **Button**s, **close**; wrap body copy in **`Text tagname="span"`** as recommended. **`onClose`** in React. **Not** a **[Dialog](./dialog.md)**—Toast does **not** trap focus site-wide. For **page-level** critical messaging, compare **Toast** vs **[Banner](./banner.md)** in the design spec.

See also: [Banner](./banner.md), [ScreenreaderAnnouncer](./screenreaderannouncer.md), [Button](./button.md).

Browse the [Momentum Components catalog](https://momentum.design/en/components/) for naming; Storybook documents props and examples. Reference: [Storybook — Toast / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-toast-toast--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-toast-toast--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { Toast, Text, Button, Icon } from "@momentum-design/components/dist/react";
```

---

## What it is

- Theming: **`--mdc-toast-*`**.  
- **Expand** detailed body: use **`toast-body-detailed`** and footer show more/less per Storybook.

---

## Example

```jsx
import { Button, Icon, Text, Toast } from "@momentum-design/components/dist/react";

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
      <Icon slot="content-prefix" name="placeholder-bold" size={24} lengthUnit="px" />
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

Confirm **`Icon`** **`size`** / **`lengthUnit`** and slot names for your Storybook version.

---

## Checklist for Figma Make

- [ ] **`ThemeProvider`** + **`IconProvider`** per [setup.md](../setup.md)  
- [ ] **`closeButtonAriaLabel`** (and footer actions) have clear names  
- [ ] Critical blocking flows still expose a **visible** message—not **Toast** alone if the design calls for **Banner** / **Dialog**  
- [ ] **`variant`** matches semantic intent (success / warning / error / custom)  

Cross-check [Storybook — Toast / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-toast-toast--docs) and your installed **`@momentum-design/components`** version.
