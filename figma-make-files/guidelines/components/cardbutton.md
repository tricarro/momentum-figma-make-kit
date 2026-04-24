# CardButton (Momentum) — Figma Make guidance

**CardButton** **looks** like a **Card** but behaves as a **single button**—**click/keyboard anywhere** on the card (except avoid nested focusables; slots should be **non-interactive** content). Use **`name`** and **`value`** in forms. Reference: [Storybook — CardButton / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-card-cardbutton--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-card-cardbutton--example).

---

## Import

```jsx
import { CardButton, Text } from "@momentum-design/components/react";
```

Use `@momentum-design/components/react` only, not `@momentum-design/components` without `/react` (per `Guidelines.md`).

---

## What it is

- Inherits **card** layout/appearance (`image`, `before-body` / `body` / `after-body`, `title`, `subtitle`, footer slots—**no** `icon-button` slot in the public CardButton `index` vs full Card: confirm with your Storybook).  
- Fires **`onClick`**, **`onKeyDown`**, **`onKeyUp`**, **`onFocus`**.  
- **Do not** place **`Button`**, **links**, or other nested interactives in slots—**nested interactive** content breaks accessibility. Use plain **`Text`**, static imagery, or decorative icons only.  
- Form props: align with **Buttonsimple**-style **`type`**, and **`name` / `value`** when needed.

**Pick `Card` + footer `Button` instead** if the design needs **several** actions; pick **`CardButton`** for **one** primary action on the **whole** tile.

---

## Key props

- Same **card** surface props as **Card** (`cardTitle`, `variant`, `orientation`, `imageSrc`, …) plus button **`type`**, optionally **`name`**, **`value`**

---

## Example

```jsx
import { CardButton, Text } from "@momentum-design/components/dist/react";


<CardButton
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
    Sed sed nunc ullamcorper, porttitor dui id, posuere justo. Curabitur laoreet
    sem ut pharetra hendrerit. Vivamus mattis ligula eget imperdiet tempor. Ut
    in massa luctus lacus sodales accumsan. Praesent at aliquam leo. Ut a
    scelerisque turpis.</Text
  ></CardButton
>
```

---

## Checklist

- [ ] **One** action per card surface; no nested `Button`/`Link` in slots  
- [ ] **`type="button"`** when not submitting a form row  
- [ ] Clear purpose for screen readers (name comes from **title**/content; add guidance from Storybook if a dedicated `aria-label` pattern exists in your version)  

[Storybook — CardButton / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-card-cardbutton--docs)
