# ScreenreaderAnnouncer (Momentum) — Figma Make guidance

**ScreenreaderAnnouncer** posts **transient** text to a **visually hidden** **`aria-live`** region so screen reader users hear **status** updates (save complete, row added, error echoed, etc.). Set **`announcement`**, or use the public **`announce()`** with an options object (see [docs](https://momentum.design/storybook-static/index.html?path=/docs/components-screenreaderannouncer-screenreaderannouncer--docs)). **`delay`** and **`timeout`** control timing; **`identity`** lets multiple instances share one live region—read JSDoc before relying on this.

See also: [Toast](./toast.md), [Progressbar](./progressbar.md), [Progressspinner](./progressspinner.md).

Browse the [Momentum Components catalog](https://momentum.design/en/components/) for naming; Storybook documents props and examples. Reference: [Storybook — ScreenreaderAnnouncer / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-screenreaderannouncer-screenreaderannouncer--docs). Optional: [Example](https://momentum.design/storybook-static/index.html?path=/story/components-screenreaderannouncer-screenreaderannouncer--example).

---

## Import

Requires <ThemeProvider> and <IconProvider> ancestors. See setup.md.

```jsx
import { ScreenreaderAnnouncer } from "@momentum-design/components/dist/react";
```

---

## What it is

- **Complements** **Toast**, **Text**, and in-page error regions—it does **not** replace a visible message for all users.  
- Use **short**, **polite** copy; avoid **spam** on every keypress.  
- **[Toggletip](./toggletip.md)** uses its own SR path; do not duplicate the same string with a global announcer unless the UX doc requires it.

---

## Example — `ScreenreaderAnnouncer`

```jsx
import { ScreenreaderAnnouncer } from "@momentum-design/components/dist/react";

function AppChrome() {
  return <ScreenreaderAnnouncer announcement="Your profile was updated" />;
}
```

Use **`announce()`**, **`delay`**, **`timeout`**, and **`identity`** for advanced cases—see [Storybook — ScreenreaderAnnouncer / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-screenreaderannouncer-screenreaderannouncer--docs).

---

## Checklist for Figma Make

- [ ] **`ThemeProvider`** per [setup.md](../setup.md)  
- [ ] The same information is (or can be) seen **on screen**; announcer is **redundant** enhancement, not the only error channel  
- [ ] **`identity`** / **`dataAriaLive`** choices are stable; read JSDoc for multiple polite vs assertive channels  
- [ ] Test with a real screen reader in your target browser  

Cross-check [Storybook — ScreenreaderAnnouncer / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-screenreaderannouncer-screenreaderannouncer--docs) and your installed package version.
