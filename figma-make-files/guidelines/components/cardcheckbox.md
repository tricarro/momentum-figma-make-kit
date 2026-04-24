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
import { useState } from "react";
import { CardCheckbox, Text } from "@momentum-design/components/react";

function FeatureToggle() {
  const [on, setOn] = useState(false);
  return (
    <div role="group" aria-label="Add-ons">
      <CardCheckbox
        cardTitle="Screen share"
        variant="border"
        orientation="horizontal"
        checked={on}
        selectionType="checkbox"
        onChange={() => setOn((v) => !v)}
      >
        <Text slot="body" type="body-midsize-medium" tagname="p">
          Let guests share their screen in meetings.
        </Text>
      </CardCheckbox>
    </div>
  );
}
```

(Align **`onChange`** with your version’s `detail` / controlled pattern from Storybook.)

---

## Checklist

- [ ] `cardTitle` on every **CardCheckbox**  
- [ ] **Group** container: `role="group"` + **`aria-label`**  
- [ ] For **one-of-many** (single choice), use **`CardRadio`** + shared **`name`**, not a checkbox list  

[Storybook — CardCheckbox / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-card-cardcheckbox--docs)
