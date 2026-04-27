# Skeleton (Momentum) — Figma Make guidance

**Skeleton** is a **gray** placeholder for **loading** UIs. **`variant`:** `rectangular` (default), `rounded`, `circular`, or **`button`**. Sizing: **wrap** optional slotted **content** (skeleton **matches** child size), **or** fill the **parent**; override with **`--mdc-skeleton-width`**, **`height`**, **`--mdc-skeleton-background-color`**. Use in **list** and **card** loading rows—pair with the same layout as the real **ListItem** / **Text** to avoid **layout shift**. **Progressspinner** and **Progressbar** are for **known** or **indeterminate** progress, not static chrome skeletons. Reference: [Storybook — Skeleton / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-skeleton-skeleton--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-skeleton-skeleton--example).

---

## Import

```jsx
import { Skeleton, Text, List, ListItem } from "@momentum-design/components/react";
```

Use `@momentum-design/components/react` only, not `@momentum-design/components` without `/react` (per [setup.md](../setup.md)).

---

## What it is

- **Shimmer** / motion, if any, is defined in the design system, not with one-off custom CSS.  
- **Do not** use as the only loading signal—**announce** busy state where needed (**ScreenreaderAnnouncer** or live regions).  

---

## Example — `Skeleton` (rectangular) next to a **label** size

```jsx
import { Skeleton, Text } from "@momentum-design/components/react";

function ListRowLoading() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <Skeleton variant="rectangular" />
      <Text type="body-midsize-regular" tagname="p">
        Loading…
      </Text>
    </div>
  );
}
```

(Prefer **wrapping** real **Text** / **Button** in **`Skeleton`** when the layout must match; see [Storybook — Skeleton / Example](https://momentum.design/storybook-static/index.html?path=/story/components-skeleton-skeleton--example).)

[Storybook — Skeleton / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-skeleton-skeleton--docs)
