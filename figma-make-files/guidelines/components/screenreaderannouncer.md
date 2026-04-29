# ScreenreaderAnnouncer (Momentum) — Figma Make guidance

**ScreenreaderAnnouncer** posts **transient** text to a **visually hidden** `aria-live` region so **screen reader** users hear **status** updates (save complete, row added, error banner text echoed, etc.). Set **`announcement`**, or use the public **`announce()`** with an options object (from the [docs](https://momentum.design/storybook-static/index.html?path=/docs/components-screenreaderannouncer-screenreaderannouncer--docs)). **`delay`** and **`timeout`** control timing; default **`dataAriaLive`** / identity behavior is documented in the source (multiple instances with the same **`identity`** share one live region—read the JSDoc). If you set a custom **`identity`**, the element must **exist** and be **visually hidden** (example CSS in the package). Reference: [Storybook — ScreenreaderAnnouncer / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-screenreaderannouncer-screenreaderannouncer--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-screenreaderannouncer-screenreaderannouncer--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { ScreenreaderAnnouncer } from "@momentum-design/components/dist/react";
```

---

## What it is

- **Complements** **Toast**, **Text**, and **in-page** error regions—it does not replace a visible **message** for all users.  
- Use **short**, **polite** copy; avoid **spam** on every keypress.  
- See the package link to the **live regions** reference for `aria-live` **politeness** and patterns.  

**Toggletip** already uses a screen-reader path internally for its content; do not duplicate the same string with a global announcer unless the UX doc requires it.

---

## Example — `ScreenreaderAnnouncer`

```jsx
import { ScreenreaderAnnouncer } from "@momentum-design/components/dist/react";

function AppChrome() {
  return <ScreenreaderAnnouncer announcement="Your profile was updated" />;
}
```

(Use **`announce()`**, **`delay`**, **`timeout`**, and **`identity`** for advanced cases—see [Storybook — ScreenreaderAnnouncer / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-screenreaderannouncer-screenreaderannouncer--docs).)

---

## Checklist

- [ ] The same information is (or can be) seen **on screen**; announcer is **redundant** enhancement, not the only error channel  
- [ ] **`identity` / `dataAriaLive` choices** are stable; read the JSDoc if you need multiple **polite** vs **assertive** channels  
- [ ] Test with a real **screen reader** in your target browser  

[Storybook — ScreenreaderAnnouncer / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-screenreaderannouncer-screenreaderannouncer--docs)
