# Spinner (Momentum) — Figma Make guidance

**Spinner** is an **indeterminate** (unknown duration) **loading** indicator. **Variant:** default **track** or **`button`** (for use inside **[Button](./button.md)**—contrast-tuned with label/icon). **Size** presets: **large** (~96px) for regions/pages, **midsize** (default **48px**), **small** (**24px**) inline—or unset **size** and set **`--mdc-spinner-size`**. **Color:** default vs **`inverted`** (e.g. **[Coachmark](./coachmark.md)**). **A11y:** with **`dataAriaLabel`** / **`aria-label`**, the host gets **`role="img"`**; without it, **`aria-hidden="true"`** (decorative). **[Progressspinner](./progressspinner.md)** = **determinate** percent; **Spinner** = “working…”.

See also: [Progressspinner](./progressspinner.md), [Button](./button.md).

Browse the [Momentum Components catalog](https://momentum.design/en/components/) for naming; Storybook documents props and examples. Reference: [Storybook — Spinner / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-spinner-spinner--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-spinner-spinner--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { Spinner, Text, Button } from "@momentum-design/components/dist/react";
```

---

## What it is

- **Button** + **Spinner:** use the **`button`** **variant** on **Spinner** inside **Button** (Storybook) so contrast stays **≥ 3:1** with the label.  
- **`IconProvider`** may not be required for the SVG itself—confirm in [docs](https://momentum.design/storybook-static/index.html?path=/docs/components-spinner-spinner--docs).

---

## Example — `Spinner` (inline, **midsize**)

```jsx
import { Spinner, Text } from "@momentum-design/components/dist/react";

function InlineLoading() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "var(--mds-spacing-inline-xs, 0.5rem)",
      }}
    >
      <Spinner size="midsize" dataAriaLabel="Loading" />
      <Text type="body-midsize-regular" tagname="span">
        Loading
      </Text>
    </div>
  );
}
```

See **`button`** variant and **inverted** on busy **Button**s in [Storybook — Spinner / Example](https://momentum.design/storybook-static/index.html?path=/story/components-spinner-spinner--example).

---

## Checklist for Figma Make

- [ ] **`ThemeProvider`** per [setup.md](../setup.md)  
- [ ] Meaningful **`dataAriaLabel`** when the spinner is the main busy indicator; omit (**decorative**) only when adjacent **Text** explains state  
- [ ] **`button`** variant + **inverted** match **Button** treatment in Storybook  

Cross-check [Storybook — Spinner / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-spinner-spinner--docs) and your installed package version.
