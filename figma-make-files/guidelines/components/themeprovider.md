# ThemeProvider (Momentum) — Figma Make guidance

**ThemeProvider** applies a **Momentum theme class** to its host, exposes **theme CSS custom properties** to child DOM, and when `themeclass` **changes** it **removes** the previous class and **adds** the new one. It also provides **default text** styling (font family, color, etc.).  
Official reference: [Storybook — ThemeProvider / Docs](https://momentum.design/storybook-static/index.html?path=/docs/providers-theme-provider--docs).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { ThemeProvider, IconProvider } from "@momentum-design/components/dist/react";
```

---

## What it is

- **Not** a replacement for loading tokens: you still import `@momentum-design` **fonts** and **tokens** CSS in the app entry (see [setup.md](../setup.md)). ThemeProvider **selects** which Momentum **theme** (light/dark and product variant) is active for subtrees and components that read theme variables.
- Puts the active **`themeclass` string** on the provider element so the matching theme rules from the components token bundle apply to **children**. Switching `themeclass` **swaps** the class, not a stack of themes.
- **Context:** Lit child components can consume the theme class via the provider’s context (implementation detail; use `themeclass` from React and normal composition for most Figma Make code).
- Pairs with **`IconProvider`**: in prototypes, **wrap the app (or the styled subtree) with `ThemeProvider` and put `IconProvider` inside** so Momentum `Icon` and other components have theme + icon resolution.

Web component: **`mdc-themeprovider`**. **Slot:** default — all children to be themed.

---

## Key prop (React / web, camelCase where the wrapper expects it)

- **`themeclass`** (string) — The **fully qualified** CSS class name for the Momentum theme stylesheet. It must **match** the class defined in the tokens/components CSS you ship (e.g. from `components/complete.css`). If you change the value, the old theme class is removed from the host and the new one is added.

**Default in the package:** `mds-theme-stable-darkWebex` (dark). For a **light** prototype, set e.g. `themeclass="mds-theme-stable-lightWebex"` explicitly.

**Available Momentum `themeclass` values** (per Storybook / typings):

| Pairing | `themeclass` values |
|--------|----------------------|
| Webex (default pair) | `mds-theme-stable-darkWebex`, `mds-theme-stable-lightWebex` |
| Bronze | `mds-theme-stable-darkBronzeWebex`, `mds-theme-stable-lightBronzeWebex` |
| Indigo | `mds-theme-stable-darkIndigoWebex`, `mds-theme-stable-lightIndigoWebex` |
| Jade | `mds-theme-stable-darkJadeWebex`, `mds-theme-stable-lightJadeWebex` |
| Lavender | `mds-theme-stable-darkLavenderWebex`, `mds-theme-stable-lightLavenderWebex` |
| Rose | `mds-theme-stable-darkRoseWebex`, `mds-theme-stable-lightRoseWebex` |

Choose **one** `themeclass` per `ThemeProvider`. Do not invent new class strings.

---

## Styling: CSS custom properties (host)

Optional overrides on **`mdc-themeprovider`** (see Storybook for full list):

- `--mdc-themeprovider-color-default` — default text color (relates to theme text tokens).
- `--mdc-themeprovider-font-family` — default **`Momentum`** from `@momentum-design/fonts` when not overridden.
- `--mdc-themeprovider-font-weight` — default `400`.
- Letter-spacing, font feature settings, and scrollbar track/thumb — see [Storybook — ThemeProvider / Docs](https://momentum.design/storybook-static/index.html?path=/docs/providers-theme-provider--docs).

In Figma Make, **prefer** theme tokens and `Text` as elsewhere; only use these if the Storybook use case requires host-level tuning.

---

## Example — `ThemeProvider` + `IconProvider` + light theme

```jsx
import { ThemeProvider, IconProvider } from "@momentum-design/components/dist/react";

function App() {
  return (
    <ThemeProvider themeclass="mds-theme-stable-lightWebex" style={{ minHeight: "100vh" }}>
      <IconProvider>
        {/* Your screen content; Text, Button, Icon, etc. */}
      </IconProvider>
    </ThemeProvider>
  );
}
```

For **dark** mode matching the package default, you can omit `themeclass` or set `themeclass="mds-theme-stable-darkWebex"`.

**Dark / light** per user: bind `themeclass` to `mds-theme-stable-lightWebex` or `mds-theme-stable-darkWebex` (or another **pair** from the table) — do **not** hand-roll separate light/dark CSS; Momentum’s theme classes carry the variables.

---

## Relationship to [Theming in setup.md](../setup.md#theming)

[setup.md](../setup.md#theming) shows putting theme classes on **`body`** or a **wrapper** `div`. **Using `ThemeProvider` is the React-side equivalent** for the subtree it wraps: set **`themeclass`** to the same string you would have put on the wrapper (e.g. `mds-theme-stable-lightWebex`). Still apply **`mds-typography`** and **`mds-elevation`** on a root (e.g. `body` or a parent `div`) per [setup.md](../setup.md) (package setup), and add **`mds-core`** when your layout expects core palette/tokens, if your `theme.css` or docs require it.

---

## Checklist for Figma Make

- [ ] Tokens and fonts are **imported** in the entry file before relying on any theme colors.
- [ ] **`ThemeProvider` wraps** the part of the tree that should use the selected Momentum theme; **`IconProvider` is inside** when using `Icon`.
- [ ] **`themeclass`** is one of the **documented** strings above, not a custom or partial name.
- [ ] **Light** prototypes set `mds-theme-stable-light…` (or the correct variant) explicitly if you do not want the package default **dark** Webex.
- [ ] Do **not** add parallel custom theming; switch themes only by changing `themeclass` to another supported Momentum class.

For provider-level behavior and edge cases, see [Storybook — ThemeProvider / Docs](https://momentum.design/storybook-static/index.html?path=/docs/providers-theme-provider--docs).
