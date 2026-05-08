# ThemeProvider (Momentum) — Figma Make guidance

**ThemeProvider** applies a **Momentum theme class** to its host, exposes **theme CSS custom properties** to child DOM, and when **`themeclass`** changes it **removes** the previous class and **adds** the new one. It also provides **default text** styling (font family, color, etc.). Wrap the **root** or styled subtree with **`ThemeProvider`**; nest **[IconProvider](./iconprovider.md)** **inside** when using **[Icon](./icon.md)**.

See also: [IconProvider](./iconprovider.md), [setup.md](../setup.md) (CSS bundles, **`mds-typography`**, body classes).

Browse the [Momentum Components catalog](https://momentum.design/en/components/) for naming; Storybook documents props and examples. Reference: [Storybook — ThemeProvider / Docs](https://momentum.design/storybook-static/index.html?path=/docs/providers-theme-provider--docs).

---

## Import

`ThemeProvider` is the **outer** wrapper in most apps; **`IconProvider`** typically wraps content **inside** `ThemeProvider`. See [setup.md](../setup.md).

```jsx
import { ThemeProvider, IconProvider } from "@momentum-design/components/dist/react";
```

---

## What it is

- **Not** a substitute for loading tokens: you still import **@momentum-design** **fonts** and **tokens** CSS in the app entry (see [setup.md](../setup.md)). **`themeclass`** selects which Momentum **theme** (light/dark and product variant) is active.  
- Puts the active **`themeclass`** string on the provider element so matching theme rules from the components token bundle apply to **children**.  
- **Pairs with `IconProvider`:** **`ThemeProvider`** → **`IconProvider`** → app content so **Icon** and themed components resolve correctly.

Web component: **`mdc-themeprovider`**. **Slot:** default — children to be themed.

---

## Key prop (React / web)

- **`themeclass`** (string) — **Fully qualified** CSS class from the tokens/components CSS you ship (e.g. from `components/complete.css`). Changing value **swaps** the class on the host.

**Default in the package:** `mds-theme-stable-darkWebex` (dark). For a **light** prototype, set e.g. **`themeclass="mds-theme-stable-lightWebex"`** explicitly.

**Documented `themeclass` values** (Storybook / typings):

| Pairing | `themeclass` values |
|--------|----------------------|
| Webex (default pair) | `mds-theme-stable-darkWebex`, `mds-theme-stable-lightWebex` |
| Bronze | `mds-theme-stable-darkBronzeWebex`, `mds-theme-stable-lightBronzeWebex` |
| Indigo | `mds-theme-stable-darkIndigoWebex`, `mds-theme-stable-lightIndigoWebex` |
| Jade | `mds-theme-stable-darkJadeWebex`, `mds-theme-stable-lightJadeWebex` |
| Lavender | `mds-theme-stable-darkLavenderWebex`, `mds-theme-stable-lightLavenderWebex` |
| Rose | `mds-theme-stable-darkRoseWebex`, `mds-theme-stable-lightRoseWebex` |

Choose **one** **`themeclass`** per **`ThemeProvider`**. Do not invent new class strings.

---

## Styling: CSS custom properties (host)

Optional overrides on **`mdc-themeprovider`** (see Storybook for full list):

- **`--mdc-themeprovider-color-default`** — default text color.  
- **`--mdc-themeprovider-font-family`** — default **Momentum** font when not overridden.  
- **`--mdc-themeprovider-font-weight`** — default **`400`**.

Prefer theme tokens and **[Text](./text.md)**; use host overrides only when Storybook calls for them.

---

## Example — `ThemeProvider` + `IconProvider` + light theme

```jsx
import { ThemeProvider, IconProvider } from "@momentum-design/components/dist/react";

function App() {
  return (
    <ThemeProvider themeclass="mds-theme-stable-lightWebex" style={{ minHeight: "100vh" }}>
      <IconProvider>{/* Text, Button, Icon, … */}</IconProvider>
    </ThemeProvider>
  );
}
```

For **dark** mode matching the package default, omit **`themeclass`** or set **`themeclass="mds-theme-stable-darkWebex"`**.

**User-driven light/dark:** bind **`themeclass`** to **`mds-theme-stable-lightWebex`** or **`mds-theme-stable-darkWebex`** (or another **documented pair**)—do **not** hand-roll separate light/dark CSS.

---

## Relationship to [setup.md](../setup.md#theming)

[setup.md](../setup.md#theming) shows theme classes on **`body`** or a wrapper **`div`**. **`ThemeProvider`** is the **React** equivalent for its subtree: set **`themeclass`** to the same string you would put on that wrapper. Still apply **`mds-typography`** / **`mds-elevation`** on a root per **setup**, and **`mds-core`** when your bundle/docs require it.

---

## Checklist for Figma Make

- [ ] Tokens and fonts are **imported** in the entry file before relying on theme colors  
- [ ] **`ThemeProvider`** wraps the tree that should use the selected theme; **`IconProvider`** **inside** when using **Icon**  
- [ ] **`themeclass`** is one of the **documented** strings above  
- [ ] **Light** prototypes set **`mds-theme-stable-light…`** explicitly if you do not want the package default **dark** Webex  
- [ ] Switch themes only by changing **`themeclass`**—no parallel custom theme layers  

Cross-check [Storybook — ThemeProvider / Docs](https://momentum.design/storybook-static/index.html?path=/docs/providers-theme-provider--docs) and your installed **`@momentum-design/components`** version.
