# Progressbar (Momentum) — Figma Make guidance

**Progressbar** shows a **linear** 0–100% bar: **`variant`** **default** or **inline**; **validation**-style help via **`error`** and the same **form-field** label/help model as other **`FormfieldWrapper`** components. **`value`** is a string percentage, **clamped** 0–100. Optional **label** and help slots / **`helpText`**. Theming: **`--mdc-progressbar-*`**. For **circular** progress, use **Progressspinner** (it extends the same value logic). Reference: [Storybook — Progressbar / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-progressbar-progressbar--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-progressbar-progressbar--example).

---

## Import

```jsx
import { Progressbar } from "@momentum-design/components/react";
```

Use `@momentum-design/components/react` only, not `@momentum-design/components` without `/react` (per `Guidelines.md`).

---

## What it is

- **`value`:** string **percentage**; **`error`:** error chrome.  
- **Validation** chrome (default / success / error) is derived from **`value`** and **`error`**; see the [doc](https://momentum.design/storybook-static/index.html?path=/docs/components-progressbar-progressbar--docs) for the exact rules.  
- Expose progress to **screen reader** users: use **`dataAriaLabel`** and/or **help** text, not only bar color.  

**Progressbar** = **determinate** linear; **Progressspinner** = circular (also uses **`value`**, plus success/error end states from the [Progressspinner doc](https://momentum.design/storybook-static/index.html?path=/docs/components-progressspinner-progressspinner--docs)).

---

## Checklist

- [ ] **`value`** updated as the real job advances; avoid fake animation on static pages  
- [ ] When **`error`**, a **string** in **help** explains what failed, not just red fill  
- [ ] Prefer **Text** or **`dataAriaLabel`** for “Uploading 40%” style announcements, or add **ScreenreaderAnnouncer** for one-off status updates  

[Storybook — Progressbar / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-progressbar-progressbar--docs)
