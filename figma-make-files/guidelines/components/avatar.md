# Avatar (Momentum) — Figma Make guidance

The **Avatar** shows a **person or space** as a **photo**, **initials**, a custom **icon**, or a **counter**. It is **not** a button: it does not take focus. For a **clickable** avatar, use **`AvatarButton`**. Official reference: [Storybook — Avatar / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-avatar-avatar--docs). Optional: [Avatar / Example](https://momentum.design/storybook-static/index.html?path=/story/components-avatar-avatar--example).

---

## Import

```jsx
import { Avatar } from "@momentum-design/components/react";
```

Use `@momentum-design/components/react` only, not `@momentum-design/components` without `/react` (per `Guidelines.md`).

---

## What it is

- **Display priority** (highest first): **`src` (photo)** → **`iconName` (icon)** → **`initials` (text)** → **`counter` (number)**.  
- **Photo:** while loading, **initials** (if set) or **icon** can show; on error, placeholder stays.  
- **Icon + initials without `src`:** **icon wins**; initials are ignored (icons may load later than instant initials).  
- **Default icon** if nothing else: **`user-regular`**.  
- **Initials:** first two characters, uppercased.  
- **Counter:** numeric; cap display **99+**; negatives show as **0**.  
- **`isTyping`:** shows a **typing/loading** overlay; **presence is hidden** while typing.  
- **`counter` set:** **presence** is not shown.  
- Embeds a **`Presence`**-style affordance when you pass a **`presence`** value (use the same type strings as the **Presence** component).  
- Defaults: **`aria-hidden="true"`** for assistive tech; set **`ariaHidden={false}`** (React) only when the avatar must be exposed.

---

## Key props (React / web component, camelCase)

- **`size`:** `24` | `32` | `48` | `64` | `72` | `88` | `124` (default **32**).  
- **`src`:** image URL (photo).  
- **`iconName`:** Momentum **icon** name (when no `src`).  
- **`initials`:** 1–2+ chars; only two shown, uppercased, when no `src` and no `iconName` (or as photo placeholder).  
- **`counter`:** number; when used, **presence** is suppressed.  
- **`presence`:** e.g. `"active"`, `"busy"`, `"dnd"`, … (see **`presence.md`** or Storybook for the full set).  
- **`isTyping`:** `boolean` — typing overlay.  
- **`ariaHidden`:** `boolean` — default **`true`**.

Styling: theme tokens / `--mdc-avatar-*` custom properties in the [Storybook docs](https://momentum.design/storybook-static/index.html?path=/docs/components-avatar-avatar--docs) (`--mdc-avatar-default-background-color`, loading colors, etc.).

---

## Example — `Avatar` with photo and presence

```jsx
import { Avatar } from "@momentum-design/components/dist/react";


<Avatar
  initials="MD"
  size="88"
  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAAAXNSR0IB2cksfwAAAAlwSFlzAACZygAAmcoB45GkIgAAAC1QTFRFejgAxIlH6urq4Z9Wj04Wm14nr3M47LFuy5Za///+t24d8c6o9MOA4NbNzrObv1/50QAAA3JJREFUeJzt2M9r02AYB/DUpd1AJgt1Je4gUnRsh4rl1XWIh461Zd42u5bpQSajpZsgSsR42GFlOjLEHbz1IAzcPPQP8BK3i4cdrCA7KdKCA2Uymr/BN83yq23W52n8cckXspW8PJ++70uaN28YxosXL168eDkpia4btfjEq86NaXGgI9ArinGnNlYUHwJ64PwtfSe0mUnxj52aJkOzneuzcSbp1DbNsPlO9T7x2knNUx3H4Hui96SgKPVqI/ENRcrFtdNpwCTQ2X6wEzYTCTT+1b7HIbVq7n4tlV6ZwOV+/dMhrN5fKtmA4QPj42eY8NIOfDH7AhsE+3OmPmoB9NRyqRVYD0Yjh5mspFSrxjRWa4ehTLYeBgJ0DksRRQrlMnryvFLfp9I8DPhlzoF6Geybo5hGA02Jw4B1RwBWzyyqF0K7+ggQuO0WuOkEXAYCp5yAESDQ7wQMA4EzGhD5Jsu7iiLTHF+Tl+BARBYFIlrzcWc/fBEI9L1+L1bM0oqWvdinC0DALy5XdGC5YkQUrgABVv3SdgDofqgmpva4aQSVPRIF/pYYJkhEE9ATXSrH4QAhUUmif9VKgZBxqcgNlcvQemZBBbimYIC0W2DyLwHbYKCnHVAub4GBAN8WAF8G9FpMaEkaN/YE4PHKEp/ag7wt23c2cQAZbx4BDqhUBI4ixAiHAgLkxt44F3zKcauCJMXEKB8bQwJEoEMoar3nKcQPoQB/o9Mcz5kHbg4osECBOVpYOD5SKIA1Af1wC4RSmAuRYQh5owJFE5iA3480IE2BKQ0IdQcIJpDmuEEkEDSAKQPA1B8DE38QOIsEFtwDcx+KNmAGB6TJPTsw4AYY7AKYpEDUBrx1AyxQALEqqOlpBeCrggZwboEQBWa6B3ytwOa/BQIkJES5rAVYwgJrFqCAB/wGMKcB80iAJWNuget0acqbwBYeIK4AhoxZAF4FUMtCAyANoKADcRwQbKyuRWNxLePu6jpgfUDB1TNZftUOIDvAnF+jD2YJ7QltVn1eKyABun8OV2uKlsaLAGQX1lt2frj65LkWwI8oD2zsLjYDkdO7z6D1/iNZvtUMjNyX5RUg0Ev3qj8OtNcXRp7Tk++AAPuC7nkHM/bQczJ428cUjuTWPEL9nJKFDWuxUtTfxmHCJjLqg35uFrdX8OLFi5f/ld/YPBWUjcanfAAAAABJRU5ErkJggg=="
></Avatar>
```

---

## Checklist for Figma Make

- [ ] `Avatar` is **non-interactive**; use **`AvatarButton`** if the user can click it  
- [ ] Chosen **`size`** and content (`src` / `iconName` / `initials` / `counter`) follow **display priority** above  
- [ ] **`presence`** only when the design needs status and **`counter` / `isTyping`** are not hiding it  
- [ ] `ariaHidden` set deliberately if the image must be announced  
- [ ] `IconProvider` / theme set per `Guidelines.md`  

For full props and parts, see [Storybook — Avatar / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-avatar-avatar--docs).
