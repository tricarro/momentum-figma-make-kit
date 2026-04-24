# Momentum Design System — Figma Make Guidelines

These are guidelines for using the Momentum Design System (its components, tokens, and assets) within Figma Make.

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

### Using Components
Refer to "./components/{ComponentName}" for information on how to use a specific component when identified. Use React sample unless specific otherwise. 

---

## Layout

Use standard CSS layout (flexbox, grid) with token-based spacing. Momentum does not have a layout component — structure is yours to compose.

```jsx
<div style={{
  display: "flex",
  flexDirection: "column",
  gap: "var(--mds-space-200)",
  padding: "var(--mds-space-300)"
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

When using the Text component, here are the acceptable values to include:

'body-small-regular'
'body-small-medium'
'body-small-bold'
'body-midsize-regular'
'body-midsize-medium'
'body-midsize-bold'
'body-large-regular'
'body-large-medium'
'body-large-bold'
'body-small-regular-underline'
'body-small-medium-underline'
'body-midsize-regular-underline'
'body-midsize-medium-underline'
'body-large-regular-underline'
'body-large-medium-underline'
'heading-small-regular'
'heading-small-medium'
'heading-small-bold'
'heading-midsize-regular'
'heading-midsize-medium'
'heading-midsize-bold'
'heading-large-regular'
'heading-large-medium'
'heading-large-bold'
'heading-xlarge-regular'
'heading-xlarge-medium'
'heading-xlarge-bold'
'headline-small-light'
'headline-small-regular'

### Text colors

- **Prefer the `Text` component** with an appropriate `type` so color comes from Momentum by default. Only set `color` when you need a specific semantic (e.g. secondary, disabled, error, success).
- **Use theme text tokens only** — names like `var(--mds-color-theme-text-<role>-<state>)`. Examples: `text-primary-normal`, `text-secondary-normal`, `text-primary-disabled`, `text-error-normal`. These are **not** raw palette colors; do **not** use `--mds-color-core-*` for body or label text unless a guideline explicitly calls for a brand or chart color.
- **Set the Webex theme class** on the root (see [Theming](#theming)) so the same token resolves to the correct light or dark value.

Same pattern as in [Design Tokens](#design-tokens): `color: var(--mds-color-theme-text-primary-normal)` in CSS, or `style={{ color: "var(--mds-color-theme-text-primary-normal)" }}` in JSX.

---

## Icons

- **Only** the Momentum icon set shipped with `@momentum-design/components` / `@momentum-design/icons` is allowed. **Every** icon must be rendered with `<Icon name="…" />` and a `name` that is a real symbol from that set (per [Momentum design](https://momentum.design) / component docs / Storybook—not invented kebab-strings that “sound” right).
- **Do not** use emoji, stock images, inline SVG, `<img>` for UI icons, or any other pack (e.g. Lucide, Material Icons, Heroicons, Font Awesome, native OS glyphs) even if a close match is easier to find.
- If a requested icon cannot be found in the Momentum set, pick the closest **documented** Momentum `name` (per the `name` rules that follow) or leave the icon out. **Do not** invent, approximate, or copy names from other libraries.

```jsx
import { Icon } from "@momentum-design/components/react";

<Icon name="search-bold" size="20" />
```

### Icon `name` (required pattern)

1. **Every** `name` is `<base>-<weight>` in kebab-case. The **weight** is one of: `-light`, `-regular`, `-bold`, or `-filled`.
2. If the user (or the design) only gives a **base** name and no weight, **append `-bold`**. That is the default when nothing else is specified.
3. If the user names a **weight** (e.g. “use the regular version”), use that suffix instead of the default: `-light`, `-regular`, or `-filled` as requested.
4. **Never** pass a base name alone. Wrong: `name="brightness-high"`. Correct: `name="brightness-high-bold"` (default) or another valid `<base>-<weight>` from the Momentum set.

```jsx

<Icon name="brightness-high-bold" size="20" />
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