# CardRadio (Momentum) — Figma Make guidance

**CardRadio** is a **card** that acts as a **radio**: only **one** **checked** item per **`name`**. **Requires `cardTitle` and `name`**. Arrow key navigation within the **same group** is supported. Wrap the set in **`role="radiogroup"`** and an **`aria-label`**. Reference: [Storybook — CardRadio / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-card-cardradio--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-card-cardradio--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { CardRadio, Text } from "@momentum-design/components/dist/react";
```

---

## What it is

- **`name`:** groups radios; must be **identical** for cards in the same choice set.  
- **`checked`:** which card is selected.  
- **`onChange`:** when selection moves to this card.  
- **No nested interactives** in slots.  
- Inherits the same **card** layout/variant API as other card components (see [Card](https://momentum.design/storybook-static/index.html?path=/docs/components-card-card--docs)).  
- **`setDisabled(disabled: boolean)`** is present on the class; prefer **`disabled`** if exposed on the React wrapper in your build.

**Use `CardCheckbox`** for multi-select; **use `CardRadio`** for **exactly one** option in the group.

---

## Key props

- **`name`** and **`cardTitle`** (required) · **`checked`**, **`onChange`**, card layout props

---

## Example

```jsx
import { CardRadio, Text } from "@momentum-design/components/dist/react";


<div role="main">
  <CardRadio
    name="radio-card"
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
    ></CardRadio
  >
</div>
```

---

## Checklist

- [ ] **`name`** is stable and **shared** across the group  
- [ ] **Exactly one** `checked` at a time in UI state (drive from React state)  
- [ ] **`role="radiogroup"`** + label on the wrapper  
- [ ] **Multi select** = **`CardCheckbox`**, not **`CardRadio`**  

[Storybook — CardRadio / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-card-cardradio--docs)
