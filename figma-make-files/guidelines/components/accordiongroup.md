# AccordionGroup (Momentum) — Figma Make guidance

Use **AccordionGroup** to present **several** **`Accordion`** and/or **`AccordionButton`** items as one set: shared **size** and **group layout variant**, and coordinated **expansion** (one open at a time by default). Official reference: [Storybook — AccordionGroup / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-accordion-accordiongroup--docs). Optional visual reference: [Storybook — AccordionGroup / Example](https://momentum.design/storybook-static/index.html?path=/story/components-accordion-accordiongroup--example).

---

## Import

```jsx
import { AccordionGroup, AccordionButton, Text } from "@momentum-design/components/react";
// When headers need extra controls (use Accordion as children, not AccordionButton)
import { Accordion } from "@momentum-design/components/react";
```

Use `@momentum-design/components/react` only, not `@momentum-design/components` without `/react` (per global guidelines).

---

## What it is

- A **container** whose **default** slot holds only **`Accordion`** and **`AccordionButton`** children. **Other elements are ignored.**  
- The group **applies** its **`size`** and **`variant`** to every child so styling stays consistent.  
- **`allowMultiple`**: `false` (default) = opening one item **collapses** the others; `true` = **more than one** can stay open.  
- Group **layout** `variant` (see below) controls borders and spacing **between** items; it is **not** the same set of values as a single `Accordion` / `AccordionButton`’s `variant`—the group **drives** what children receive.

| Group `variant` | Role |
| --- | --- |
| `stacked` (default) | **1.5rem** gap between items. |
| `borderless` | **No** borders on the group and child items. |
| `contained` | **Continuous** borders, **no** gap between items. |

- **`size`**: `small` (1rem padding) or `large` (1.5rem) for children—**1rem** vs **1.5rem** padding in the design system.  
- Optional theming: `--mdc-accordiongroup-items-border-color` for border color on items and separators (see [docs](https://momentum.design/storybook-static/index.html?path=/docs/components-accordion-accordiongroup--docs)).

**Child choice:** use **`AccordionButton`** for **simple** clickable rows; use **`Accordion`** when a row needs **extra header controls** (chips, badges, buttons) and a **separate** expand control.

---

## Accessibility

- Set **`dataAriaLevel`** on **each** child so headings match the real **outline** (same guidance as `Accordion` / `AccordionButton`).  
- If the **first** item is **expanded by default**, some screen readers **may lose focus** on toggle; prefer **collapsed** by default when possible.  
- The group does not replace per-item labels: **`Accordion`** children still need **`openButtonAriaLabel`** and **`closeButtonAriaLabel`** when the design system requires them.

---

## Slots

| Slot | Purpose |
| --- | --- |
| *(default)* | **`Accordion`** and/or **`AccordionButton`** instances only. |

Do not put arbitrary markup here—non-accordion children are **ignored**.

---

## Key props (React / camelCase on the wrapper)

- **`size`**: `"small"` | `"large"` — applied to **all** children.  
- **`variant`**: `"stacked"` | `"borderless"` | `"contained"` — **group** layout and borders.  
- **`allowMultiple`**: `boolean` — allow more than one expanded panel (default **`false`**).

---

## Example — `AccordionGroup` with `AccordionButton` children

```jsx
import {
  AccordionButton,
  AccordionGroup,
  Button,
} from "@momentum-design/components/dist/react";


<div role="main">
  <AccordionGroup size="small" variant="stacked">
    <AccordionButton headerText="Why is the moon sometimes out during the day?"
      >Loreum impusm sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui p ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.<Button style="margin-top:0.75rem"
        >Continue</Button
      ></AccordionButton
    >
    <AccordionButton headerText="Why is the sky blue?"
      >Loreum impusm sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui p ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.<Button style="margin-top:0.75rem"
        >Continue</Button
      ></AccordionButton
    >
    <AccordionButton headerText="Will we ever discover aliens?"
      >Loreum impusm sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui p ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.<Button style="margin-top:0.75rem"
        >Continue</Button
      ></AccordionButton
    >
    <AccordionButton headerText="How much does the Earth weigh?"
      >Loreum impusm sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui p ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.<Button style="margin-top:0.75rem"
        >Continue</Button
      ></AccordionButton
    >
    <AccordionButton headerText="How do airplanes stay up?"
      >Loreum impusm sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui p ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.<Button style="margin-top:0.75rem"
        >Continue</Button
      ></AccordionButton
    >
  </AccordionGroup>
</div>
```

For **`Accordion`** children, add **`openButtonAriaLabel`**, **`closeButtonAriaLabel`**, and any **header slots** on each `Accordion` per the **Accordion** guidance.

---

## Checklist for Figma Make

- [ ] `AccordionGroup` from `@momentum-design/components/react`  
- [ ] **Only** `Accordion` / `AccordionButton` as direct children in the default slot  
- [ ] `size` and `variant` match the design; remember group **`variant`** options (`stacked` / `borderless` / `contained`) differ from a single item’s `variant`  
- [ ] `allowMultiple` matches the spec (one open vs several)  
- [ ] Each child has correct **`dataAriaLevel`**; **`Accordion`** children include required **ARIA** labels for the expand control  
- [ ] Theme / tokens, **`mds-typography`**, and `ThemeProvider` / `IconProvider` as in `Guidelines.md`  

For the latest API, see [Storybook — AccordionGroup / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-accordion-accordiongroup--docs) and your installed **`@momentum-design/components`** version.