# Banner (Momentum) — Figma Make guidance

**Banner** surfaces **important, persistent messages** and expects **user action** (dismiss, fix, or follow a step). It supports **variant**-driven **icons** and copy via **`label`** / **`secondaryLabel`**, or full override through **slots**. Reference: [Storybook — Banner / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-banner-banner--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-banner-banner--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { Banner, Button } from "@momentum-design/components/dist/react";
```

---

## What it is

- **`variant`:** `custom` (default) · `informational` · `warning` · `error` · `success` (drives default **leading** icon; for **`custom`**, supply a **`leading-icon`** slot or the banner may have no default icon).  
- **Properties path:** `label` with optional `secondaryLabel` (secondary only shows with a label).  
- **Slots:** `content` replaces **entire** inner layout; or use `leading-icon`, `leading-text`, `trailing-actions` for custom sections.  
- Trailing **actions** (e.g. dismiss) go in **`trailing-actions`**, often with Momentum **`Button`**s.

Styling: `--mdc-banner-*` (background, border, padding, icon color, elevation, etc.) in [docs](https://momentum.design/storybook-static/index.html?path=/docs/components-banner-banner--docs).

---

## Key props

- **`variant`**, **`label`**, **`secondaryLabel`**

For slots, use the **`slot="..."` attribute** on children (e.g. `<Button slot="trailing-actions" …>` when supported by the pattern in Storybook for your version).

---

## Example

```jsx
import { Banner, Button } from "@momentum-design/components/dist/react";


<Banner
  variant="informational"
  label="System Update Available"
  secondaryLabel="A new version is ready to install. Please save your work before proceeding."
>
  <div slot="trailing-actions">
    <Button ariaLabel="Cancel action" variant="tertiary">Cancel</Button>
    <Button ariaLabel="Perform primary action" variant="secondary"
      >Action</Button
    >
    <Button
      prefixIcon="cancel-bold"
      ariaLabel="Dismiss banner"
      variant="tertiary"
      size="20"
    ></Button>
  </div>
</Banner>
```

Add `trailing-actions` with `Button` children when the design needs **Dismiss** / **Retry** (see Storybook for your package version’s slot example).

---

## Checklist

- [ ] `variant` matches the severity; **`custom`** + `leading-icon` if you need a one-off treatment  
- [ ] Actions in **`trailing-actions`** use MDS **Button**, not raw `<button>`  
- [ ] Prefer **tokens** (`var(--mds-…)`) for any extra layout around the banner  

[Storybook — Banner / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-banner-banner--docs)
