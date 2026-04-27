# Card (Momentum) — Figma Make guidance

**Card** is a **static** layout block for image, header, body, and optional footer. Use it for read-only or lightly interactive regions where **actions** are separate controls (e.g. **`Button`** in footer slots, **`Link`** in `footer-link`). The whole card is **not** one big button—use **`CardButton`**, **`CardCheckbox`**, or **`CardRadio`** for selection/click surfaces. Reference: [Storybook — Card / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-card-card--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-card-card--example).

---

## Import

```jsx
import { Card, Text, Button, Link } from "@momentum-design/components/react";
```

Use `@momentum-design/components/react` only, not `@momentum-design/components` without `/react` (per [setup.md](../setup.md)).

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
import { Card, Text } from "@momentum-design/components/dist/react";


<div role="main">
  <Card
    variant="border"
    orientation="vertical"
    cardTitle="Title"
    subtitle="Subtitle"
    imageSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAABUUlEQVR4nO3bMU7DMABAURdxqNx/6rEYKqKIiiq/YDDovanxYMW/djLlcr1eB+e8/PYN/CViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFr1Nn37ZtjLF/eHa7fDwydZ4vmrWztm3bF7CPjPfF3H7fj8yb51vM2lnP3fpxg/xYgvPWemZ9OFarfTi6VqxxCLRaqbFgrP3ELXL0ji6T/sD7pe6PofH5W2w/fQ9KnZlnklmx/qXljuHKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQK3gAA4FUSP2o9dQAAAABJRU5ErkJggg=="
    imageAlt="Image Alt"
    iconName="placeholder-bold"
    titleTagName="span"
    subtitleTagName="span"
    ><Text slot="body" tagname="span"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate
      aliquet risus, eget auctor ante egestas facilisis. Curabitur malesuada
      tempor pulvinar. Quisque sollicitudin magna leo, gravida ultrices lacus
      lobortis at. Praesent gravida dui diam, non elementum risus laoreet vitae.
      Sed sed nunc ullamcorper, porttitor dui id, posuere justo. Curabitur
      laoreet sem ut pharetra hendrerit. Vivamus mattis ligula eget imperdiet
      tempor. Ut in massa luctus lacus sodales accumsan. Praesent at aliquam
      leo. Ut a scelerisque turpis.</Text
    ></Card
  >
</div>
```

(Adjust `slot` usage to your package’s Storybook—some builds expect specific slot names on the child only.)

---

## Checklist

- [ ] **Selection** = **`CardCheckbox`** or **`CardRadio`**; **single CTA** on whole card = **`CardButton`**  
- [ ] `icon-button` slot: **max 3** header action buttons  
- [ ] **Footer** uses `Link` + `Button` MDS, not ad-hoc `<a>`/`<button>` when avoidable  
- [ ] MDS **tokens** for any extra spacing around the card  

[Storybook — Card / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-card-card--docs)
