# Accordion (Momentum) — Figma Make guidance

Use the **Accordion** component when the panel header must stay interactive apart from the expand/collapse action—e.g. **chips, badges, or extra buttons** in the header. Only the **dedicated expand/collapse control** toggles the section. For a **simple, fully clickable row header**, use **`AccordionButton`** instead. Official reference: [Storybook — Accordion / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-accordion-accordion--docs). Example story (visual + behavior): [Storybook — Accordion / Example](https://momentum.design/storybook-static/index.html?path=/story/components-accordion-accordion--example).

---

## Import

```jsx
import { Accordion, Text, Icon, Button, Chip } from "@momentum-design/components/react";
// Optional: group multiple items with coordinated expansion
import { AccordionGroup, AccordionButton } from "@momentum-design/components/react";
```

Use `@momentum-design/components/react` only, not `@momentum-design/components` without `/react` (per [setup.md](../setup.md)).

---

## What it is

- Vertically stacked **header** (prefix icon, title text, optional **leading** / **trailing** control areas, then **expand/collapse** button) and **body** (default slot).  
- **Unlike `AccordionButton`**, the **whole header is not** the primary toggle: **only the expand/collapse button** opens and closes the panel.  
- **`variant`**: border style (e.g. `default` has borders, `borderless` removes them).  
- **`size`**: padding (`small` = 1rem, `large` = 1.5rem for header/body).  
- **`disabled`**: blocks the toggle and should disable slotted header controls (when applicable).

For multiple sections, wrap items in **`AccordionGroup`** to share **variant**, **size**, and **single-expand** behavior; set **`allowMultiple`** if more than one section may be open. See the Storybook app’s **accordion / accordionGroup** doc page (same static host as the links above) for group props and layout variants (`stacked`, `contained`, `borderless`).

---

## Accessibility (required)

- Set **`openButtonAriaLabel`** and **`closeButtonAriaLabel`** for the expand/collapse control.  
- Set **`dataAriaLevel`** (e.g. `2`, `3`, …) to match the real **heading** hierarchy of the page (header text defaults to an H3-like role; align with your outline).  
- If the panel starts **expanded by default**, be aware some screen readers **may lose focus** on toggle; prefer collapsed-by-default when possible.  
- The component fires **`onShown`** when expand/collapse happens (React), mapping the native **`shown`** event. Use it for analytics or to sync to React state if you control `expanded` yourself.

---

## Slots (body + header)

| Slot | Purpose |
| --- | --- |
| *(default)* | **Body** — any content for the collapsible section. |
| `leading-header-text` | Text region after the **prefix** icon (if you use custom text here instead of/in addition to `headerText`—see package docs for your version). |
| `leading-controls` | Controls after the main header text. |
| `trailing-controls` | Controls before the **expand/collapse** button. |

For most Figma Make prototypes, **`headerText` + default slot** is enough.

---

## Key props (React / camelCase on the wrapper)

- **`headerText`**: Title string in the header.  
- **`prefixIcon`**: Momentum **icon name** (e.g. `"file-bold"`), or omit.  
- **`openButtonAriaLabel`**, **`closeButtonAriaLabel`**: **Required for a11y.**  
- **`expanded`**: Controlled open state; pair with `onShown` to update.  
- **`dataAriaLevel`**: Number for heading level (default **3** in the design system).  
- **`size`**: `"small"` | `"large"`.  
- **`variant`**: `"default"` | `"borderless"`.  
- **`togglePosition`**: `"trailing"` | `"leading"` (where the **arrow** row sits vs. text).  
- **`disabled`**: Disables interaction.  
- **`onShown`**: `(e) => …` when expansion changes; `e.detail` includes **`expanded`**.

Styling tokens for borders/disabled state can be tuned with CSS custom properties (see package docs) such as `--mdc-accordionbutton-border-color`, `--mdc-accordionbutton-disabled-color`.

---

## Example

import {
  Accordion,
  Badge,
  Button,
  Chip,
  Icon,
} from "@momentum-design/components/dist/react";


<div role="main">
  <Accordion
    expanded
    headerText="Heading"
    prefixIcon="placeholder-regular"
    openButtonAriaLabel="Open accordion"
    closeButtonAriaLabel="Close accordion"
    size="small"
    variant="default"
    togglePosition="trailing"
  >
    <Chip slot="leading-controls" label="Label"></Chip>
    <Icon slot="trailing-controls" name="placeholder-bold"></Icon>
    <Icon slot="trailing-controls" name="placeholder-bold"></Icon>
    <Chip slot="trailing-controls" label="Label"></Chip>
    <Badge slot="trailing-controls" type="counter" counter="911"></Badge>
    Loreum impusm sit amet, consectetur adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
    nostrud exercitation ullamco laboris nisi ut aliqui p ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est
    laborum.<Button style="margin-top:0.75rem">Continue</Button>
  </Accordion>
</div>


---

## Checklist for Figma Make

- [ ] `Accordion` from `@momentum-design/components/react`  
- [ ] Theme / tokens loaded ([setup.md](../setup.md) / primer) and **`mds-typography`** (and `ThemeProvider` / `IconProvider` as required)  
- [ ] `openButtonAriaLabel` and `closeButtonAriaLabel` set  
- [ ] `dataAriaLevel` matches the page’s heading order  
- [ ] Body copy uses Momentum **`Text`**, spacing uses **MDS** tokens, not one-off CSS numbers  
- [ ] Prefer `AccordionGroup` for multiple **Accordion**s with one-at-a-time open behavior (unless `allowMultiple`)

For the latest props and slots, cross-check the [Storybook Accordion – Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-accordion-accordion--docs) and your installed **`@momentum-design/components`** version.
