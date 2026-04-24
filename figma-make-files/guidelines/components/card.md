# Card (Momentum) — Figma Make guidance

**Card** is a **static** layout block for image, header, body, and optional footer. Use it for read-only or lightly interactive regions where **actions** are separate controls (e.g. **`Button`** in footer slots, **`Link`** in `footer-link`). The whole card is **not** one big button—use **`CardButton`**, **`CardCheckbox`**, or **`CardRadio`** for selection/click surfaces. Reference: [Storybook — Card / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-card-card--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-card-card--example).

---

## Import

```jsx
import { Card, Text, Button, Link } from "@momentum-design/components/react";
```

Use `@momentum-design/components/react` only, not `@momentum-design/components` without `/react` (per `Guidelines.md`).

---

## What it is

- **Layout:** `image` → header (`title` / `subtitle` / up to **3** `icon-button` slots) → `before-body` / `body` / `after-body` → footer (`footer-link`, `footer-button-primary`, `footer-button-secondary`, or custom `footer`).  
- **Visuals (from `CardComponentMixin`):** **`variant`:** `border` · `ghost` · `promotional` · **`orientation`:** `vertical` · `horizontal` · optional **`iconName`**, **`imageSrc`** / **`imageAlt`**, **`titleTagName`** / **`subtitleTagName`** for semantic headings.  
- **Strings:** `cardTitle`, `subtitle`—or use **`title` / `subtitle` / `body` slots** for richer content.  
- **Width:** `--mdc-card-width` (see Storybook).  
- **No** root `onClick`—it is a **presentational** card.

Use **`Text`** in body slots, **`Button`**, **`Link`** in footer; avoid raw `<div>`-only if the design can be built with MDS.

---

## Key props (typical)

- **`cardTitle`**, **`subtitle`**, **`variant`**, **`orientation`**, **`imageSrc`**, **`imageAlt`**, **`iconName`**, **`titleTagName`**, **`subtitleTagName`**

---

## Example

```jsx
import { Card, Text, Button, Link } from "@momentum-design/components/react";

function PlanCard() {
  return (
    <Card
      cardTitle="Pro"
      subtitle="For growing teams"
      variant="border"
      orientation="vertical"
    >
      <Text slot="body" type="body-midsize-medium" tagname="p">
        Includes advanced meetings and support.
      </Text>
      <Button slot="footer-button-primary" variant="primary" size={32} type="button">
        Choose Pro
      </Button>
    </Card>
  );
}
```

(Adjust `slot` usage to your package’s Storybook—some builds expect specific slot names on the child only.)

---

## Checklist

- [ ] **Selection** = **`CardCheckbox`** or **`CardRadio`**; **single CTA** on whole card = **`CardButton`**  
- [ ] `icon-button` slot: **max 3** header action buttons  
- [ ] **Footer** uses `Link` + `Button` MDS, not ad-hoc `<a>`/`<button>` when avoidable  
- [ ] MDS **tokens** for any extra spacing around the card  

[Storybook — Card / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-card-card--docs)
