# Brandvisual (Momentum) — Figma Make guidance

**Brandvisual** loads a **branded mark** (logo) by **`name`**, using the Momentum **brand visual** set. It fires **`onLoad`** / **`onError`** when the asset is fetched. Use in headers, sign-in, or any surface that must show a **Cisco** / product mark per brand guidelines. Reference: [Storybook — Brandvisual / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-brandvisual-brandvisual--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-brandvisual-brandvisual--example).

---

## Import

```jsx
import { Brandvisual } from "@momentum-design/components/react";
```

Use `@momentum-design/components/react` only, not `@momentum-design/components` without `/react` (per `Guidelines.md`).

---

## What it is

- **`name`:** a valid **brand visual** key from the design system (TypeScript: **`BrandVisualNames`** in the package—use Storybook to see the allowed set for your build).  
- **`altText`:** use for **PNG**-based brand visuals; important for a11y.  
- **`onLoad`:** success after fetch.  
- **`onError`:** failed import (handle fallback UI in React if needed).  
- Renders the SVG/image inside parts **`brandvisual`** and **`brandvisualImage`** (see [docs](https://momentum.design/storybook-static/index.html?path=/docs/components-brandvisual-brandvisual--docs) for `csspart` use).

`@momentum-design/brand-visuals` (or the package your app wires for dynamic loads) must resolve for the **`name`** you use—see the repo’s Vite/Storybook setup if the mark does not appear.

---

## Key props

- **`name`**, **`altText`**, **`onLoad`**, **`onError`**

---

## Example

```jsx
import { Brandvisual } from "@momentum-design/components/react";
import { useState } from "react";

function ProductHeader() {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <div style={{ height: 32, width: 120 }} role="img" aria-label="Product" />;
  }

  return (
    {/* `name` must be a key from your package’s BrandVisualNames / Storybook list */}
    <Brandvisual
      name="webex"
      altText="Webex"
      onError={() => setFailed(true)}
    />
  );
}
```

Pick a **`name`** that exists in your version’s **`BrandVisualNames`** (re-exported from `@momentum-design/brand-visuals`).

---

## Checklist

- [ ] `name` is a valid key for the installed **brand visual** bundle  
- [ ] `altText` for image-based marks  
- [ ] Error state so a failed load does not leave a blank hole with no layout  
- [ ] Follow **brand** placement rules (spacing, min size) from the design file  

[Storybook — Brandvisual / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-brandvisual-brandvisual--docs)
