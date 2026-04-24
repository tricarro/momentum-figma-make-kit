# Banner (Momentum) — Figma Make guidance

**Banner** surfaces **important, persistent messages** and expects **user action** (dismiss, fix, or follow a step). It supports **variant**-driven **icons** and copy via **`label`** / **`secondaryLabel`**, or full override through **slots**. Reference: [Storybook — Banner / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-banner-banner--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-banner-banner--example).

---

## Import

```jsx
import { Banner, Button } from "@momentum-design/components/react";
```

Use `@momentum-design/components/react` only, not `@momentum-design/components` without `/react` (per `Guidelines.md`).

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
import { Banner, Button } from "@momentum-design/components/react";

function DataIssueBanner() {
  return (
    <Banner
      variant="warning"
      label="Connection interrupted"
      secondaryLabel="We’ll retry automatically. You can also refresh."
    />
  );
}
```

Add `trailing-actions` with `Button` children when the design needs **Dismiss** / **Retry** (see Storybook for your package version’s slot example).

---

## Checklist

- [ ] `variant` matches the severity; **`custom`** + `leading-icon` if you need a one-off treatment  
- [ ] Actions in **`trailing-actions`** use MDS **Button**, not raw `<button>`  
- [ ] Prefer **tokens** (`var(--mds-…)`) for any extra layout around the banner  

[Storybook — Banner / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-banner-banner--docs)
