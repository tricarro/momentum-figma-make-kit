# Slider (Momentum) — Figma Make guidance

**Slider** selects a **value** (or a **range** with **`range`**) along a **track**; with **step** greater than **1** it shows **ticks** and **snaps** the thumb. **Events (React):** **`onInput`**, **`onChange`**. **Spatial** navigation: user may need to **enter** “edit” mode to adjust with **arrow** keys, then **Enter** / **Escape** to exit—see the [doc](https://momentum.design/storybook-static/index.html?path=/docs/components-slider-slider--docs). Theming: **`--mdc-slider-*`**; **cssparts** include **track**, **tick**, **tooltip** region. **Progressbar** / **Progressspinner** show **read-only** progress, not a draggable value. Reference: [Storybook — Slider / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-slider-slider--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-slider-slider--example).

---

## Import

```jsx
import { Slider } from "@momentum-design/components/react";
```

Use `@momentum-design/components/react` only, not `@momentum-design/components` without `/react` (per `Guidelines.md`).

---

## Example — `Slider`

```jsx
import { Slider } from "@momentum-design/components/react";

function Volume() {
  return <Slider label="Volume" min={0} max={100} step={1} value={30} />;
}
```

(Use **`onInput` / `onChange`**, **two-thumb `range`**, and **a11y** for thumb labels from [Storybook — Slider / Example](https://momentum.design/storybook-static/index.html?path=/story/components-slider-slider--example).)

---

## Checklist

- [ ] **Label** and **min** / **max** / **step** are set from product; screen readers get the same information  
- [ ] **Range** mode documents **two** thumbs and how values bind in React  
- [ ] `IconProvider` in the app root if the slider uses built-in **Icon**s per `Guidelines.md`  

[Storybook — Slider / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-slider-slider--docs)
