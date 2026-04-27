# Marker (Momentum) — Figma Make guidance

**Marker** is a **vertical** emphasis strip (~**0.25rem** wide by default) beside content: **`variant`** `solid` or `striped` (diagonal). Use to **relate** list rows, **cards**, or **blocks** to a category, priority, or callout. It is **decorative** in the a11y sense: **color/pattern** must be explained by **Text** (or a legend), not by the marker alone. Styling: **`--mdc-marker-*`** in the [doc](https://momentum.design/storybook-static/index.html?path=/docs/components-decorator-marker--docs). Reference: [Storybook — Marker / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-decorator-marker--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-decorator-marker--example).

---

## Import

```jsx
import { Marker } from "@momentum-design/components/react";
```

Use `@momentum-design/components/react` only, not `@momentum-design/components` without `/react` (per [setup.md](../setup.md)).

---

## What it is

- **List** and **table** lead columns, or **card** leading edge.  
- **Do not** encode the **only** meaning in red vs green—add **labels** or **Badges** per content strategy.  

**Marker** (vertical strip) vs **Divider** (horizontal/vertical line between regions), **Bullet** (list dot).

---

## Key props (typical)

- **`variant`**

---

## Example — `Marker` next to a block

```jsx
import { Marker, Text } from "@momentum-design/components/react";

function Callout() {
  return (
    <div style={{ display: "flex", gap: "var(--mds-space-200, 0.5rem)" }}>
      <Marker variant="solid" />
      <Text type="body-primary" tagname="p">
        Status: in review (also describe this in copy; do not rely on color alone).
      </Text>
    </div>
  );
}
```

(Validate **`variant`** and layout against [Storybook — Marker / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-decorator-marker--docs).)

---

## Checklist

- [ ] A **string label** in the item explains what the marker color means  
- [ ] **Contrast** between marker and page background (tokens)  
- [ ] Not used in place of **error** or **status** when the spec calls for **AlertChip** / **Banner**  

[Storybook — Marker / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-decorator-marker--docs)
