# Progressspinner (Momentum) — Figma Make guidance

**Progressspinner** is a **circular** **determinate** indicator: it **extends** **Progressbar** (same **value** 0–100, **`error`**, and label/help from `FormfieldWrapper`) and adds **SVG** track + **progress** arcs. At **100%** it can show a **success** check; in **`error`** it shows the **error** pictogram. Styling: **`--mdc-spinner-size`**, **`--mdc-track-color`**, **`--mdc-progress-color`**, success and error color tokens. Reference: [Storybook — Progressspinner / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-progressspinner-progressspinner--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-progressspinner-progressspinner--example).

---

## Import

```jsx
import { Progressspinner } from "@momentum-design/components/react";
```

Use `@momentum-design/components/react` only, not `@momentum-design/components` without `/react` (per [setup.md](../setup.md)).

---

## What it is

- **End states** — default arc, full **success** mark, or **error** mark (see [docs](https://momentum.design/storybook-static/index.html?path=/docs/components-progressspinner-progressspinner--docs)).  
- **Parts** — `spinner-base`, `spinner-container`, `spinner-track`, `spinner-progress`, `success-icon`, `error-icon`.  

Use **Progressspinner** in **compact** spaces (row end, cell); use **Progressbar** for full-width file rows.

---

## Example — `Progressspinner`

```jsx
import { Progressspinner } from "@momentum-design/components/react";

function StepSpinner() {
  return (
    <Progressspinner
      label="Saving"
      value="75"
      dataAriaLabel="Saving, 75 percent"
    />
  );
}
```

(See **end-of-flow** **success** / **error** visuals in [Storybook — Progressspinner / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-progressspinner-progressspinner--docs).)

---

## Checklist

- [ ] `value` reflects **real** progress, not a looping fake unless the spec says so  
- [ ] Pair with **Text** and/or **ScreenreaderAnnouncer** for status changes the user must hear  
- [ ] `error: true` only with a **message** the user can read (see **Progressbar** + form-field help)  

[Storybook — Progressspinner / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-progressspinner-progressspinner--docs)
