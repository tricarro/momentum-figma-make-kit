# CardRadio (Momentum) — Figma Make guidance

**CardRadio** is a **card** that acts as a **radio**: only **one** **checked** item per **`name`**. **Requires `cardTitle` and `name`**. Arrow key navigation within the **same group** is supported. Wrap the set in **`role="radiogroup"`** and an **`aria-label`**. Reference: [Storybook — CardRadio / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-card-cardradio--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-card-cardradio--example).

---

## Import

```jsx
import { CardRadio, Text } from "@momentum-design/components/react";
```

Use `@momentum-design/components/react` only, not `@momentum-design/components` without `/react` (per `Guidelines.md`).

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
import { useState } from "react";
import { CardRadio, Text } from "@momentum-design/components/react";

function Billing() {
  const [plan, setPlan] = useState("monthly");
  return (
    <div role="radiogroup" aria-label="Billing period">
      <CardRadio
        name="billing"
        cardTitle="Monthly"
        variant="border"
        checked={plan === "monthly"}
        onChange={() => setPlan("monthly")}
      >
        <Text slot="body" type="body-midsize-medium" tagname="p">
          Billed every month.
        </Text>
      </CardRadio>
      <CardRadio
        name="billing"
        cardTitle="Yearly"
        variant="border"
        checked={plan === "yearly"}
        onChange={() => setPlan("yearly")}
      >
        <Text slot="body" type="body-midsize-medium" tagname="p">
          Save with annual billing.
        </Text>
      </CardRadio>
    </div>
  );
}
```

---

## Checklist

- [ ] **`name`** is stable and **shared** across the group  
- [ ] **Exactly one** `checked` at a time in UI state (drive from React state)  
- [ ] **`role="radiogroup"`** + label on the wrapper  
- [ ] **Multi select** = **`CardCheckbox`**, not **`CardRadio`**  

[Storybook — CardRadio / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-card-cardradio--docs)
