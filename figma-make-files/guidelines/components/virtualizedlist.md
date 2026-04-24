# VirtualizedList (Momentum) — Figma Make guidance

**VirtualizedList** extends **List** with [TanStack Virtual](https://tanstack.com/virtual/latest) for **very long** rows. **`virtualizerProps` is required:** at least **`count`**, **`estimateSize`**, and **`getItemKey`**. The app renders only **visible** rows, driven by **`onVirtualItemsChange`**: each **ListItem** (or row) must set **`data-index`** to match the **`virtualItems` list. **Do not** put top/bottom padding on the scroll container in CSS; use **`paddingStart`** and **`paddingEnd`** on **`virtualizerProps`**. If you add gaps between items (margin/gap in CSS), mirror the pixel value in the **`gap`** field of **`virtualizerProps`**. For **Listheader**, use the `list-header` slot (same pattern as **List**). **Events (React):** **`onScroll`**, **`onVirtualItemsChange`**. Set **`observeSizeChanges`** when item heights can change and the list must re-measure (uses **ResizeObserver** internally). Reference: [Storybook — VirtualizedList / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-virtualizedlist-virtualizedlist--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-virtualizedlist-virtualizedlist--example).

---

## Import

```jsx
import { VirtualizedList, ListItem, Listheader } from "@momentum-design/components/react";
```

Use `@momentum-design/components/react` only, not `@momentum-design/components` without `/react` (per `Guidelines.md`).

---

## What it is

- **Stability** of **`getItemKey`** is **critical** when list **data** **mutates**—or **scroll** and **content** will **jitter** (per JSDoc).  
- For **short** lists, **List** is **simpler**; use **VirtualizedList** at **hundreds+** of **rows** or when **profile** **requires** it.  

---

## Example (shell — `virtualizerProps` **required**)

```jsx
import { VirtualizedList, ListItem } from "@momentum-design/components/react";

function LongList() {
  return (
    <VirtualizedList
      virtualizerProps={{
        count: 1000,
        estimateSize: 56,
        getItemKey: (i) => String(i),
        paddingStart: 0,
        paddingEnd: 0,
        gap: 0,
      }}
      onVirtualItemsChange={() => {
        /* set data-index on visible rows; see JSDoc + Storybook */
      }}
    >
      {/* Render rows from `virtualItems` in your app — see Storybook */}
    </VirtualizedList>
  );
}
```

(Follow **`onVirtualItemsChange`**, **`data-index`**, and **height** / **gap** rules in [Storybook — VirtualizedList / Example](https://momentum.design/storybook-static/index.html?path=/story/components-virtualizedlist-virtualizedlist--example).)

[Storybook — VirtualizedList / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-virtualizedlist-virtualizedlist--docs)
