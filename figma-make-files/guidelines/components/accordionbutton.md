# AccordionButton (Momentum) — Figma Make guidance

Use the **AccordionButton** component for a **simple, fully clickable** row: the **entire header** toggles the panel. If the design needs **chips, badges, or other controls** in the header while **only a separate control** expands or collapses, use **`Accordion`** instead. Official reference: [Storybook — AccordionButton / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-accordion-accordionbutton--docs). Optional visual reference: [Storybook — AccordionButton / Example](https://momentum.design/storybook-static/index.html?path=/story/components-accordion-accordionbutton--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { AccordionButton, Text } from "@momentum-design/components/dist/react";
// Optional: group multiple items
import { AccordionGroup } from "@momentum-design/components/dist/react";
```

---

## What it is

- **Header** (optional **prefix** icon, **header** text, **expand/collapse** arrow) and **body** (default slot).  
- The **whole header** is the control (click / keyboard) that opens and closes the body.  
- **`variant`**: `default` (borders) or `borderless`.  
- **`size`**: `small` (1rem padding) or `large` (1.5rem padding).  
- **`disabled`**: header is not clickable.  
- Fires **`onShown`** (React) when the section is toggled (`shown` in the design system), with `detail.expanded`.

For **several** rows, **`AccordionGroup`** can wrap multiple **`AccordionButton`** (or **`Accordion`**) children, shared **size** / **variant**, and **single-open** behavior unless **`allowMultiple`** is true.

---

## Accessibility

- Set **`dataAriaLevel`** to match the page **heading** level (default is **3**; use `2`, `3`, etc. to fit your outline).  
- If the first item is **expanded by default**, some screen readers **may lose focus** when toggling; prefer **collapsed** by default when you can.  
- Unlike **`Accordion`**, this component does **not** use separate `openButtonAriaLabel` / `closeButtonAriaLabel` props on the public API—the header acts as one interactive region.

---

## Slots

| Slot | Purpose |
| --- | --- |
| *(default)* | **Body** — collapsible content below the header. |

There are no `leading-controls` / `trailing-controls` slots on **AccordionButton**; use **`Accordion`** if the spec needs those.

---

## Key props (React / camelCase on the wrapper)

- **`headerText`**: Title in the header.  
- **`prefixIcon`**: Momentum **icon name**, or omit.  
- **`expanded`**: Open state; pair with **`onShown`** for controlled usage.  
- **`dataAriaLevel`**: Number for the heading level (default **3**).  
- **`size`**: `"small"` | `"large"`.  
- **`variant`**: `"default"` | `"borderless"`.  
- **`togglePosition`**: `"trailing"` | `"leading"` (where the **arrow** appears).  
- **`disabled`**: Disables the header.  
- **`onShown`**: Fired on toggle; **`e.detail.expanded`** is the new state.

Optional theming via CSS custom properties, e.g. `--mdc-accordionbutton-border-color`, `--mdc-accordionbutton-hover-color`, `--mdc-accordionbutton-active-color`, `--mdc-accordionbutton-disabled-color` (see [Storybook — AccordionButton / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-accordion-accordionbutton--docs)).

---

## Example — single `AccordionButton`

```jsx
import {
  AccordionButton,
  Button,
} from "@momentum-design/components/dist/react";


<div role="main">
  <AccordionButton
    expanded
    headerText="Heading"
    prefixIcon="placeholder-bold"
    size="small"
    variant="default"
    togglePosition="trailing"
  >
    Loreum impusm sit amet, consectetur adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
    nostrud exercitation ullamco laboris nisi ut aliqui p ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est
    laborum.<Button style="margin-top:0.75rem">Continue</Button>
  </AccordionButton>
</div>
```

---

## Checklist for Figma Make

- [ ] `AccordionButton` from `@momentum-design/components/dist/react`  
- [ ] Theme / tokens and **`mds-typography`** (and `ThemeProvider` / `IconProvider` as in [setup.md](../setup.md))  
- [ ] `dataAriaLevel` matches the page heading order  
- [ ] Body content uses Momentum **`Text`** (or other MDS components); spacing uses **MDS** tokens, not ad-hoc pixel values  
- [ ] Use **`AccordionGroup`** when multiple items should share one-at-a-time expansion (unless `allowMultiple`)  
- [ ] Switch to **`Accordion`** if the design adds **header slots** for extra controls

For the latest API, see [Storybook — AccordionButton / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-accordion-accordionbutton--docs) and your installed **`@momentum-design/components`** version.
