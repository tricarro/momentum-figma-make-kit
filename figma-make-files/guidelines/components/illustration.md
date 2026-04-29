# Illustration (Momentum) — Figma Make guidance

**Illustration** loads a **larger SVG** scene (empty states, onboarding) by **`name`**, with sizing via **`--mdc-illustration-size`**. It must sit under **IllustrationProvider**, which defines the **base URL** and caching (web API cache or in-memory). Color is **baked into the asset**; picking a different **`name`** is the main way to change the look. Reference: [Storybook — Illustration / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-illustration-illustration--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-illustration-illustration--example). Also: **IllustrationProvider** [docs](https://momentum.design/storybook-static/index.html?path=/docs/components-illustration-illustrationprovider--docs).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { Illustration, IllustrationProvider } from "@momentum-design/components/dist/react";
```

---

## What it is

- **Decorative** vs **informative** — same model as **Icon** (decorative: hide from AT; informative: need **`dataAriaLabel`** and **`img`** role when required).  
- If fetch fails, **nothing** renders.  
- Pair with **Text** headings and actions for full empty states.

**Illustration** (large scene) vs **Icon** (small pictogram) vs **Brandvisual** (logo mark).

---

## Key props (typical)

- **`name`**, **`dataAriaLabel`**, **`className` / size overrides**

---

## Example — `Illustration` inside `IllustrationProvider`

```jsx
import { Illustration, IllustrationProvider, Text, Button } from "@momentum-design/components/dist/react";

function EmptyInbox() {
  return (
    <IllustrationProvider>
      <div style={{ display: "grid", placeItems: "center", gap: "0.5rem" }}>
        <Illustration name="your-illustration-name" dataAriaLabel="Empty inbox illustration" />
        <Text type="heading-4" tagname="h2">
          No messages
        </Text>
        <Button type="button" variant="primary">
          Refresh
        </Button>
      </div>
    </IllustrationProvider>
  );
}
```

(Replace **`name`** with a **published** Momentum illustration id from [Storybook — Illustration / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-illustration-illustration--docs); configure **IllustrationProvider** as in [IllustrationProvider / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-illustration-illustrationprovider--docs). The **`name` above** is illustrative and may not exist in your set.)

---

## Checklist

- [ ] **IllustrationProvider** wraps the tree that uses **`Illustration`**  
- [ ] Empty states still have a **title** and **action**; art is supportive  
- [ ] Informative illustrations are **named** in copy or **`dataAriaLabel`** as in Storybook  

[Storybook — Illustration / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-illustration-illustration--docs)
