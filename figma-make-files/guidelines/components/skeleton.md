# Skeleton (Momentum) — Figma Make guidance

**Skeleton** is a **placeholder** for **loading** UIs. **`variant`:** **`rectangular`** (default), **`rounded`**, **`circular`**, or **`button`**. Sizing: **wrap** optional slotted content (skeleton **matches** child size), **or** fill the **parent**; override with **`--mdc-skeleton-width`**, **`height`**, **`--mdc-skeleton-background-color`**. Use in list and card loading rows—mirror the real **[ListItem](./listitem.md)** / **Text** layout to avoid **layout shift**. **[Progressspinner](./progressspinner.md)** / **[Progressbar](./progressbar.md)** are for **known** or **busy** progress, not static chrome placeholders.

See also: [List](./list.md), [ListItem](./listitem.md), [ScreenreaderAnnouncer](./screenreaderannouncer.md).

Browse the [Momentum Components catalog](https://momentum.design/en/components/) for naming; Storybook documents props and examples. Reference: [Storybook — Skeleton / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-skeleton-skeleton--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-skeleton-skeleton--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { Skeleton, Text, List, ListItem } from "@momentum-design/components/dist/react";
```

---

## What it is

- **Shimmer** / motion follows the design system—avoid one-off custom CSS.  
- **Do not** use as the only loading signal—**announce** busy state where needed (**ScreenreaderAnnouncer** or live regions).

---

## Example — `Skeleton` (rectangular) with label

```jsx
import { Skeleton, Text } from "@momentum-design/components/dist/react";

function ListRowLoading() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--mds-spacing-inline-xs, 0.5rem)",
      }}
    >
      <Skeleton variant="rectangular" />
      <Text type="body-midsize-regular" tagname="p">
        Loading…
      </Text>
    </div>
  );
}
```

Prefer **wrapping** real **Text** / **Button** in **`Skeleton`** when the layout must match—[Storybook — Skeleton / Example](https://momentum.design/storybook-static/index.html?path=/story/components-skeleton-skeleton--example).

---

## Checklist for Figma Make

- [ ] **`ThemeProvider`** per [setup.md](../setup.md)  
- [ ] Skeleton **geometry** matches final **[Text](./text.md)** / row layout to limit layout shift  
- [ ] Pair with visible “Loading…” or **[ScreenreaderAnnouncer](./screenreaderannouncer.md)** when status matters  

Cross-check [Storybook — Skeleton / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-skeleton-skeleton--docs) and your installed package version.
