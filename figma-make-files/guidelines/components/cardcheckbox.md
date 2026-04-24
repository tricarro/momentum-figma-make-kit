# CardCheckbox (Momentum) — Figma Make guidance

**CardCheckbox** is a **card** that acts as a **checkbox**: click or keyboard toggles **`checked`**, **`role="checkbox"`**, and **`onChange`**. **Multiple** cards in a set can be **checked** at once. **Requires `cardTitle`**. Wrap a group in **`role="group"`** with an **`aria-label`**. Reference: [Storybook — CardCheckbox / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-card-cardcheckbox--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-card-cardcheckbox--example).

---

## Import

```jsx
import { CardCheckbox, Text } from "@momentum-design/components/react";
```

Use `@momentum-design/components/react` only, not `@momentum-design/components` without `/react` (per `Guidelines.md`).

---

## What it is

- **`checked`:** boolean (default `false`).  
- **`selectionType`:** `check` (check icon) or `checkbox` (uses **StaticCheckbox** visuals).  
- **Events:** **`onChange`**, **`onClick`**, focus/key handlers as in Storybook.  
- **No nested interactives** in body/footer slots.  
- **`disabled`** from mixin when applicable.  
- Same **card** visuals as **Card** (`variant`, `orientation`, `imageSrc`, …) via shared mixins.

---

## Key props

- **`cardTitle`** (required) · **`checked`**, **`onChange`**, **`selectionType`**, plus card surface props

---

## Example

```jsx
import { CardCheckbox, Text } from "@momentum-design/components/dist/react";


<div role="main">
  <CardCheckbox
    variant="border"
    orientation="vertical"
    cardTitle="Title"
    subtitle="Subtitle"
    imageSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAABUUlEQVR4nO3bMU7DMABAURdxqNx/6rEYKqKIiiq/YDDovanxYMW/djLlcr1eB+e8/PYN/CViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFr1Nn37ZtjLF/eHa7fDwydZ4vmrWztm3bF7CPjPfF3H7fj8yb51vM2lnP3fpxg/xYgvPWemZ9OFarfTi6VqxxCLRaqbFgrP3ELXL0ji6T/sD7pe6PofH5W2w/fQ9KnZlnklmx/qXljuHKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQK3gAA4FUSP2o9dQAAAABJRU5ErkJggg=="
    imageAlt="Image Alt"
    iconName="placeholder-bold"
    selectionType="check"
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
    ></CardCheckbox
  >
</div>
```

(Align **`onChange`** with your version’s `detail` / controlled pattern from Storybook.)

---

## Checklist

- [ ] `cardTitle` on every **CardCheckbox**  
- [ ] **Group** container: `role="group"` + **`aria-label`**  
- [ ] For **one-of-many** (single choice), use **`CardRadio`** + shared **`name`**, not a checkbox list  

[Storybook — CardCheckbox / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-card-cardcheckbox--docs)
