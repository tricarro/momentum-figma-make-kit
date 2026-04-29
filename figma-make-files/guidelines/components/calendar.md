# Calendar (Momentum) — Figma Make guidance

**Calendar** shows a **monthly grid** for **single** date, **full week**, or **range** selection. It emits when the user picks a date and when the **visible month** changes. Reference: [Storybook — Calendar / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-calendar-calendar--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-calendar-calendar--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { Calendar } from "@momentum-design/components/dist/react";
```

---

## What it is

- **`selectionMode`:** `single` (default) · `week` · `range`.  
- **`value`:** ISO string **`yyyy-mm-dd`**; for **range**, this is the **start**; **`endValue`** is the end ISO string.  
- **`locale`:** BCP-47 (default **`en-US`**) for labels and week start.  
- **`min`** / **`max`:** optional ISO bounds for what can be selected.  
- **`showTodayButton`** and **`localeTodayLabel`**; **`localePrevMonthLabel`** / **`localeNextMonthLabel`** for month nav `aria-label`s.  
- **React events:** **`onDateSelected`**, **`onMonthChanged`** (maps `date-selected` and `month-changed`).  
- **`onDateSelected` `detail`:** at least **`date`**; in range mode also **`startDate`**, **`endDate`** as applicable.

Styling: `--mdc-calendar-*` tokens in the [doc](https://momentum.design/storybook-static/index.html?path=/docs/components-calendar-calendar--docs). Typically pair with a **popover** or **form field** pattern from Storybook for a full “picker” experience.

---

## Key props

- **`selectionMode`**, **`value`**, **`endValue`**, **`locale`**, **`min`**, **`max`**, **`showTodayButton`**, locale label props  
- **`onDateSelected`**, **`onMonthChanged`**

---

## Example

```jsx
import "@momentum-design/components/dist/components/calendar/index.js";

<mdc-calendar selection-mode="single" locale="en-US"></mdc-calendar>
```

For **`range`**, set **`selectionMode="range"`**, keep **`value`** / **`endValue`** in sync with `onDateSelected` **detail**.

---

## Checklist

- [ ] Dates are **ISO `yyyy-mm-dd`**, no locale-specific strings in `value`  
- [ ] **`min` / `max`** match form validation for the same field  
- [ ] Month nav and **Today** labels are localized in multi-language UIs  
- [ ] `onDateSelected` handles **`single`**, **week**, and **range** **detail** shapes as in the type **`DateSelectionDetail`** for your version  

[Storybook — Calendar / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-calendar-calendar--docs)
