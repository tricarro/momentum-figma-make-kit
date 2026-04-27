# Momentum Design System — Figma Make Primer

Paste this primer at the start of any Figma Make session to ground the AI in Momentum conventions.

---

## Who You Are

You are a Cisco product designer prototyping with the Momentum Design System. All UI you produce must use Momentum components and tokens — no custom CSS values, no third-party component libraries, no Tailwind.

---

## Package Setup

Begin by installing the @momentum-design/components package:
"yarn add @momentum-design/components"

Every prototype must include these imports at the top of the entry file:

```js
// Tokens + typography
import "@momentum-design/fonts/dist/css/fonts.css";
import "@momentum-design/tokens/dist/css/core/complete.css";
import "@momentum-design/tokens/dist/css/components/complete.css";
import "@momentum-design/tokens/dist/css/typography/complete.css";
```

Set the mds-typography & mds-elevation class on the root element of your application, i.e.:
<!-- HTML -->
<body class="mds-typography mds-elevation">
  ...
</body>

Make sure to set -webkit-font-smoothing and -moz-osx-font-smoothing on root / body to match Figma:
/* CSS */
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

Wrap your application or component tree with the Theme Provider and Icon Provider components to ensure proper theming and icon configuration:
<ThemeProvider>
    <IconProvider>
    </IconProvider>
</ThemeProvider>


Momentum React components are imported from:

```js
import { ComponentName } from "@momentum-design/components/react";
```

Never import from `@momentum-design/components` directly (without the `/react` subpath).

---

## Design Tokens

All color, spacing, typography, radius, shadow, and motion values exist as CSS custom properties on `:root`. Never hardcode raw values.

**Always use tokens like this:**

```css
/* ✅ Correct */
color: var(--mds-color-theme-text-primary-normal);
background: var(--mds-color-theme-background-solid-primary-normal);

/* ❌ Never do this */
color: #1a1a1a;
background: white;
```

When writing inline styles in JSX, reference tokens the same way:

```jsx
<div style={{ color: "var(--mds-color-theme-text-primary-normal)" }}>
```

---

## Component Usage

Import and use Momentum React components directly. Do not recreate components with native HTML.

```jsx
// ✅ Correct
import { Button } from "@momentum-design/components/react";

<Button variant="primary" size="32">Save</Button>

// ❌ Never do this
<button className="btn btn-primary">Save</button>
```

### React components (from `@momentum-design/components/react`)

These are the `export` names from the package’s React entry (PascalCase, matching `import { Name }`). Generated from `dist/react/index.d.ts` in **@momentum-design/components@0.133.31**:

- `Accordion`
- `AccordionButton`
- `AccordionGroup`
- `AlertChip`
- `Animation`
- `AnnouncementDialog`
- `Appheader`
- `Avatar`
- `AvatarButton`
- `Badge`
- `Banner`
- `Brandvisual`
- `Bullet`
- `Button`
- `ButtonGroup`
- `ButtonLink`
- `Buttonsimple`
- `Calendar`
- `Card`
- `CardButton`
- `CardCheckbox`
- `CardRadio`
- `Checkbox`
- `Chip`
- `Coachmark`
- `Combobox`
- `ControlTypeProvider`
- `DatePicker`
- `Dialog`
- `Divider`
- `FilterChip`
- `FormfieldGroup`
- `FormfieldWrapper`
- `Icon`
- `IconProvider`
- `Illustration`
- `IllustrationProvider`
- `Input`
- `InputChip`
- `Link`
- `LinkButton`
- `Linksimple`
- `List`
- `ListBox`
- `Listheader`
- `ListItem`
- `Marker`
- `MenuBar`
- `MenuItem`
- `MenuItemCheckbox`
- `MenuItemRadio`
- `MenuPopover`
- `MenuSection`
- `NavMenuItem`
- `OptGroup`
- `Option`
- `Password`
- `Popover`
- `Presence`
- `Progressbar`
- `Progressspinner`
- `Radio`
- `RadioGroup`
- `ResponsiveSettingsProvider`
- `ScreenreaderAnnouncer`
- `Searchfield`
- `Searchpopover`
- `Select`
- `Selectlistbox`
- `SideNavigation`
- `Skeleton`
- `Slider`
- `SpatialNavigationProvider`
- `Spinner`
- `StaticCheckbox`
- `StaticChip`
- `StaticRadio`
- `StaticToggle`
- `Stepper`
- `StepperConnector`
- `StepperItem`
- `Tab`
- `TabList`
- `Text`
- `Textarea`
- `ThemeProvider`
- `TimePicker`
- `Toast`
- `Toggle`
- `ToggleTip`
- `Tooltip`
- `Typewriter`
- `Verticaltablist`
- `VirtualizedList`

Spelling and capitalization match the published package (for example `Appheader`, `Buttonsimple`, `Selectlistbox`). Re-run against `dist/react/index.d.ts` after upgrading the dependency if imports fail.

If unsure whether a component exists, attempt to import it from `@momentum-design/components/react` before inventing a native alternative.

---

## Layout

Use standard CSS layout (flexbox, grid) with rem-based spacing aligned to the layout guidelines. Momentum does not have a layout component — structure is yours to compose.

```jsx
<div style={{
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  padding: "0.75rem"
}}>
  <Text type="heading-5">Section Title</Text>
  <Input label="Email" />
  <Button variant="primary" size="32">Submit</Button>
</div>
```

---

## Typography

Use `Text` for all typographic content. Avoid `<h1>–<h6>`, `<p>`, or `<span>` unless wrapping a Momentum component.

```jsx
<Text type="heading-3">Page Title</Text>
<Text type="body-primary">Supporting description text here.</Text>
<Text type="label-compact">Field label</Text>
```

Common `type` values: `heading-1` through `heading-6`, `body-primary`, `body-secondary`, `label-compact`, `label-balance`.

---

## Icons

Use `Icon` with Momentum icon names. Do not use emoji or external icon libraries.

```jsx
import { Icon } from "@momentum-design/components/react";

<Icon name="search-bold" size="20" />
```

---

## Theming

Momentum supports light and dark mode via a class on the root element. Do not implement custom theming.

```html
<body class="mds-theme-stable-darkWebex">
<!-- or -->
<body class="mds-theme-stable-lightWebex">
```

In React, apply to a wrapping div if body is not accessible:

```jsx
<div className="mds-theme-stable-darkWebex" style={{ minHeight: "100vh" }}>
  {/* all content */}
</div>
```

---

## Rules Summary

| Do | Don't |
|---|---|
| Import tokens as CSS bundles | Hardcode colors, spacing, or radii |
| Use `@momentum-design/components/react` | Use native HTML elements for interactive UI |
| Use `Text` for all type | Use raw `<p>`, `<h1>`, `<span>` |
| Use `Icon` for all icons | Use emoji or third-party icon libraries |
| Use CSS custom properties for all values | Use Tailwind, Bootstrap, or custom CSS classes |
| Compose layout with flexbox + token spacing | Build layout components from scratch |

---

*Momentum Design System — Cisco. For internal prototyping use.*