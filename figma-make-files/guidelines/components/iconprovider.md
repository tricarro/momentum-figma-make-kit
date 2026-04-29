# IconProvider (Momentum) — Figma Make guidance

**IconProvider** supplies **icon set configuration** to the subtree. Child `Icon` components and other Momentum code that **consumes** the provider can resolve **Momentum icons** (dynamic import from the published icon set) or, when configured, load icons from a **custom** base URL. The provider also sets **default sizing** defaults via length unit and size.  
Official reference: [Storybook — IconProvider / Docs](https://momentum.design/storybook-static/index.html?path=/docs/providers-icon-provider--docs).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { ThemeProvider, IconProvider } from "@momentum-design/components/dist/react";
```

---

## What it is

- **Resolves** where the **glyph data** for `Icon` comes from. With the default set, the [Momentum icon package](https://momentum.design) is loaded via **dynamic `import()`**; your app must have **`@momentum-design/icons`** installed and build tooling (e.g. Vite) must **support** dynamic imports.
- **Figma Make + this kit:** use **`momentum-icons` only** (the default) so every icon stays in the Momentum set—aligned with the [Icons](../components.md#icons) rules in [components.md](../components.md) (valid `name` only, no other libraries).
- **Wrap** `Icon` (and any Momentum control that needs icons) **inside** `IconProvider`. In prototypes, place **`IconProvider` inside `ThemeProvider`** (see [ThemeProvider](themeprovider.md)) so theming and icons are both in scope.
- **Context** is consumed by underlying components (`providerUtils`-style); you normally only need correct **props** and **nesting** on the provider, not the context object.

Web component: **`mdc-iconprovider`**. **Slot:** default — all children that should use this configuration.

---

## Key props (React / web, camelCase where the wrapper expects it)

| Prop | Type / default | When it matters |
|------|------------------|-----------------|
| **`iconSet`** | `momentum-icons` \| `custom-icons` (default: **`momentum-icons`**) | Figma Make kit work: **leave default**. `custom-icons` fetches from **`url`**; you must own hosting/bundling of those assets. |
| **`url`** | string, optional | Required when using **`custom-icons`**: **base URL** to fetch each icon (library-specific shape; see Storybook / implementation). **Not** used for `momentum-icons`. |
| **`fileExtension`** | string (default: **`svg`**) | Suffix for files when using **`custom-icons`**. |
| **`lengthUnit`** | string (default: **`em`**) | **Length unit** for default icon sizing in the provider scope. |
| **`size`** | number (default: **`1`**) | **Default icon size** for the length unit, when not overridden per-`Icon`. If unset on the child, size falls back through this. |
| **`cacheStrategy`** | `in-memory-cache` \| `web-cache-api` \| `undefined` (default) | **Only** when `iconSet` is **`custom-icons`**: cache repeated fetches. **`in-memory-cache`**: in JS only; **clears** when the provider is removed. **`web-cache-api`**: persisted via the [Web Cache API](https://developer.mozilla.org/en-US/docs/Web/API/Cache) (**HTTPS** environments). |
| **`cacheName`** | string, optional | If you set **`cacheStrategy`**, you must set a **unique** cache name. Invalid / missing pair → **no** caching. |

**Defaults in the package** (`momentum-icons`, `em`, `1`, `svg`) match typical Momentum + `Icon` usage; override only for explicit design or for **custom** (non–Figma-Make-default) products.

### Figma Make: `momentum-icons` (required for kit work)

- Install **`@momentum-design/icons`** in the app (as in the kit’s `package.json` / [setup.md](../setup.md)). No **`url`**, **`fileExtension`**, or **`custom-icons`** in standard prototypes.  
- Do **not** switch to **`custom-icons`** to work around a missing Momentum `name`—pick a real `name` or omit the icon (per [Icons](../components.md#icons)) instead.

### `custom-icons` (out of band for the kit)

- Only for products that **deliberately** host a compatible icon bundle at a base URL, manage extensions, and optionally set **`cacheStrategy` + `cacheName`** to avoid network churn. This does not replace the rule that [Icons](../components.md#icons) in kit guidance must be **Momentum**-named glyphs unless your program authorizes a different policy.

---

## Example — `ThemeProvider` + default `IconProvider` + `Icon`

```jsx
import { ThemeProvider, IconProvider, Icon } from "@momentum-design/components/dist/react";

function App() {
  return (
    <ThemeProvider themeclass="mds-theme-stable-lightWebex" style={{ minHeight: "100vh" }}>
      <IconProvider>
        <Icon name="search-bold" size='32px' />
      </IconProvider>
    </ThemeProvider>
  );
}
```

- **`iconSet` omitted** → `momentum-icons` with **`@momentum-design/icons`**.  
- **Per-`Icon` `size`** and **`lengthUnit`** override the provider’s defaults. For Figma Make, prefer **explicit** sizing on each **`Icon`**: match the **uploaded design**, or **`size={32}`** and **`lengthUnit="px"`** when the design does not state a size (see [icon.md](icon.md)).  
- Follow the [**Icon `name`** pattern](../components.md#icon-name-required-pattern) (`<base>-<weight>`; default **`-bold`** if weight unspecified).

---

## Checklist for Figma Make

- [ ] `IconProvider` **wraps** all routes / screens that use **`Icon`** (or Momentum parts that need the icon system).
- [ ] **`@momentum-design/icons`** is a project dependency; the bundler **supports** dynamic `import()`.
- [ ] **`iconSet` stays** `momentum-icons` (default) for kit work; no **`custom-icons`** / arbitrary URLs unless a separate product spec requires it.
- [ ] [Icons section](../components.md#icons): **only** documented Momentum `name` strings on `Icon`—no other packs or ad hoc SVG.  
- [ ] **`ThemeProvider` above or around** the same tree when the UI uses theme + icons together (see [ThemeProvider](themeprovider.md)).

For provider options, custom hosting, and caching, see [Storybook — IconProvider / Docs](https://momentum.design/storybook-static/index.html?path=/docs/providers-icon-provider--docs).
