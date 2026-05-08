# Illustration (Momentum) — Figma Make guidance

**Illustration** renders **Momentum SVG illustrations** by **`name`** + **`size`** **with** **`lengthUnit="px"`**. Illustrations register via **`IllustrationProvider`** / **`registerMomentumIllustrations`**—do **not** load SVG assets manually.

**IllustrationProvider** is separate from **IconProvider**: illustrations vs icons use different registries and **`name`** spaces.

See also: [Icon](./icon.md), [IconProvider](./iconprovider.md), [Brandvisual](./brandvisual.md).

Browse the [Momentum Components catalog](https://momentum.design/en/components/) for naming; Storybook documents props and examples. Reference: [Storybook — Illustration / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-illustration-illustration--docs).

---

## Import

Requires <ThemeProvider> and <IllustrationProvider> ancestors. See setup.md.

```jsx
import { Illustration } from "@momentum-design/components/dist/react";
```

---

## What it is

- **`name`** — exact illustration registry key (case-sensitive); unknown names **warn** and render nothing.  
- **`size`** — numeric length + **`lengthUnit`** (**`px`** default).  
- **`aria-hidden`** — **`true`** when decorative (paired with visible **`Text`**); omit when the illustration conveys meaning—then pair with **`aria-label`** or adjacent copy **`id`**.  
- Colors inherit **`currentColor`**—set **`color`** on parent **`Text`** / CSS **`color`** using **`var(--mds-color-*)`**.

---

## Key props

- **`name`**, **`size`**, **`lengthUnit`**, **`aria-hidden`**, **`aria-label`**

---

## Example — decorative illustration beside heading `Text`

```jsx
import { Illustration, Text } from "@momentum-design/components/dist/react";

function EmptyStateHero() {
  return (
    <Text type="title-primary">
      <Illustration name="empty-state-generic" size={48} lengthUnit="px" aria-hidden />
      Nothing here yet
    </Text>
  );
}
```

Confirm **`name`** values in [Storybook — Illustration / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-illustration-illustration--docs) for your package version.

---

## Checklist for Figma Make

- [ ] **`ThemeProvider`** + **`IllustrationProvider`** + **`registerMomentumIllustrations`** per [setup.md](../setup.md)  
- [ ] **`name`** matches **illustration** registry (not **`Icon`** **`name`**)  
- [ ] Decorative illustrations → **`aria-hidden`** + adjacent **`Text`**  
- [ ] Meaningful illustrations → **`aria-label`** or labelled-by visible **`Text`**  

Cross-check [Storybook — Illustration / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-illustration-illustration--docs) and your installed package version.
