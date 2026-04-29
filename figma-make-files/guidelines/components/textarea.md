# Textarea (Momentum) — Figma Make guidance

**Textarea** is a **multiline** field: **label**, **help** / validation, **`maxCharacterLimit`**, **`onLimitExceeded`** (React) when the count crosses the limit (set **`helpTextType`** to **error** and set **`helpText`** from that path, per the package), optional **resizable** with **`resizeButtonAriaLabel`**, and **`characterLimitAnnouncement`** for screen reader updates. **Events:** **`onInput`**, **`onChange`**, **`onFocus`**, **`onBlur`**, **`onLimitExceeded`**. Same **form-field** family as **Input** / **Password**. Reference: [Storybook — Textarea / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-textarea-textarea--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-textarea-textarea--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { Textarea } from "@momentum-design/components/dist/react";
```

---

## What it is

- **Resizing:** when **`resizable`**, document **shortcuts** in the resize button’s **aria** label.  
- **Length** rules: use **`onLimitExceeded`** to flip **error** help text, not a silent cap.  

---

## Example — `Textarea`

```jsx
import { Textarea } from "@momentum-design/components/dist/react";

function Notes() {
  return <Textarea label="Notes" placeholder="Add details" maxCharacterLimit={500} helpText="Optional" />;
}
```

(Use **`onInput` / `onChange` / `onLimitExceeded`**, **`resizable`**, and **help** for errors per [Storybook — Textarea / Example](https://momentum.design/storybook-static/index.html?path=/story/components-textarea-textarea--example).)

[Storybook — Textarea / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-textarea-textarea--docs)
