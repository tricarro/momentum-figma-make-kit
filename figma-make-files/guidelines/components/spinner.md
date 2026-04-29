# Spinner (Momentum) — Figma Make guidance

**Spinner** is an **indeterminate** (unknown duration) **loading** indicator. **Variant:** default **track** or **`button`** (sits in **Button**—tuned for **contrast** with label/icon). **Size** presets: **large** (~96px) for **regions** / **pages**, **midsize** (default **48px**), **small** (**24px**) **inline** with text—or unset **size** and set **`--mdc-spinner-size`**. **Color:** default vs **`inverted`** (e.g. **Coachmark**). **A11y:** with **`dataAriaLabel` / `aria-label`**, the host gets **`role="img"`**; without it, **`aria-hidden="true"`** (decorative). **Progressspinner** = **determinate** **percent** with arcs; **Spinner** = “working…”. Reference: [Storybook — Spinner / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-spinner-spinner--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-spinner-spinner--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { Spinner, Text, Button } from "@momentum-design/components/dist/react";
```

---

## What it is

- **Button** + **Spinner:** use the **`button`** **variant** on the **Spinner** inside the **Button** (see Storybook) so colors stay **≥ 3:1** with the label.  
- `IconProvider` in the app root is **not** always required for the SVG itself—check [docs](https://momentum.design/storybook-static/index.html?path=/docs/components-spinner-spinner--docs) for the exact markup.  

---

## Example — `Spinner` (inline, **midsize**)

```jsx
import { Spinner, Text } from "@momentum-design/components/dist/react";

function InlineLoading() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      <Spinner size="midsize" dataAriaLabel="Loading" />
      <Text type="body-midsize-regular" tagname="span">
        Loading
      </Text>
    </div>
  );
}
```

(See **`button` variant** and **inverted** on busy **Button**s in [Storybook — Spinner / Example](https://momentum.design/storybook-static/index.html?path=/story/components-spinner-spinner--example).)

[Storybook — Spinner / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-spinner-spinner--docs)
