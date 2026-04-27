# AvatarButton (Momentum) — Figma Make guidance

**AvatarButton** is the **interactive** form of **Avatar**: same **photo / icon / initials / counter / presence** behavior, wrapped in a **button** (focusable, click, keyboard). For **display-only** avatars, use **`Avatar`**. Official reference: [Storybook — AvatarButton / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-avatar-avatarbutton--docs). Optional: [AvatarButton / Example](https://momentum.design/storybook-static/index.html?path=/story/components-avatar-avatarbutton--example).

---

## Import

```jsx
import { AvatarButton } from "@momentum-design/components/react";
```

Use `@momentum-design/components/react` only, not `@momentum-design/components` without `/react` (per [setup.md](../setup.md)).

---

## What it is

- Extends **`Buttonsimple`**: supports **`onClick`**, **`onKeyDown`**, **`onKeyUp`**, **`onFocus`**, **`disabled`**, **`softDisabled`**, **`type`** (e.g. `"button"`), and button **size** where applicable—see the package and Storybook for the exact matrix with avatar sizing.  
- Inherits **avatar** behavior: same **display priority** as **`Avatar`** (`src` → `iconName` → `initials` → `counter`), plus **`presence`**, **`isTyping`**, and **`size`** in the **avatar** sense (`24`–`124`).  
- **Accessibility:** the docs require a meaningful **`ariaLabel`** (React: **`ariaLabel`**) on the control.

---

## Key props (in addition to Avatar)

- **`ariaLabel`:** **Required** for a meaningful accessible name (e.g. "Open profile for Alex").  
- **`onClick`**, **`disabled`**, **`type`**, etc.: as in `Buttonsimple` / Storybook.

`--mdc-avatarbutton-*` variables control overlay, avatar fill, and loading (see [docs](https://momentum.design/storybook-static/index.html?path=/docs/components-avatar-avatarbutton--docs)).

---

## Example — `AvatarButton`

```jsx
import { AvatarButton } from "@momentum-design/components/dist/react";


<AvatarButton
  initials="MD"
  size="88"
  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAAAXNSR0IB2cksfwAAAAlwSFlzAACZygAAmcoB45GkIgAAAC1QTFRFejgAxIlH6urq4Z9Wj04Wm14nr3M47LFuy5Za///+t24d8c6o9MOA4NbNzrObv1/50QAAA3JJREFUeJzt2M9r02AYB/DUpd1AJgt1Je4gUnRsh4rl1XWIh461Zd42u5bpQSajpZsgSsR42GFlOjLEHbz1IAzcPPQP8BK3i4cdrCA7KdKCA2Uymr/BN83yq23W52n8cckXspW8PJ++70uaN28YxosXL168eDkpia4btfjEq86NaXGgI9ArinGnNlYUHwJ64PwtfSe0mUnxj52aJkOzneuzcSbp1DbNsPlO9T7x2knNUx3H4Hui96SgKPVqI/ENRcrFtdNpwCTQ2X6wEzYTCTT+1b7HIbVq7n4tlV6ZwOV+/dMhrN5fKtmA4QPj42eY8NIOfDH7AhsE+3OmPmoB9NRyqRVYD0Yjh5mspFSrxjRWa4ehTLYeBgJ0DksRRQrlMnryvFLfp9I8DPhlzoF6Geybo5hGA02Jw4B1RwBWzyyqF0K7+ggQuO0WuOkEXAYCp5yAESDQ7wQMA4EzGhD5Jsu7iiLTHF+Tl+BARBYFIlrzcWc/fBEI9L1+L1bM0oqWvdinC0DALy5XdGC5YkQUrgABVv3SdgDofqgmpva4aQSVPRIF/pYYJkhEE9ATXSrH4QAhUUmif9VKgZBxqcgNlcvQemZBBbimYIC0W2DyLwHbYKCnHVAub4GBAN8WAF8G9FpMaEkaN/YE4PHKEp/ag7wt23c2cQAZbx4BDqhUBI4ixAiHAgLkxt44F3zKcauCJMXEKB8bQwJEoEMoar3nKcQPoQB/o9Mcz5kHbg4osECBOVpYOD5SKIA1Af1wC4RSmAuRYQh5owJFE5iA3480IE2BKQ0IdQcIJpDmuEEkEDSAKQPA1B8DE38QOIsEFtwDcx+KNmAGB6TJPTsw4AYY7AKYpEDUBrx1AyxQALEqqOlpBeCrggZwboEQBWa6B3ytwOa/BQIkJES5rAVYwgJrFqCAB/wGMKcB80iAJWNuget0acqbwBYeIK4AhoxZAF4FUMtCAyANoKADcRwQbKyuRWNxLePu6jpgfUDB1TNZftUOIDvAnF+jD2YJ7QltVn1eKyABun8OV2uKlsaLAGQX1lt2frj65LkWwI8oD2zsLjYDkdO7z6D1/iNZvtUMjNyX5RUg0Ev3qj8OtNcXRp7Tk++AAPuC7nkHM/bQczJ428cUjuTWPEL9nJKFDWuxUtTfxmHCJjLqg35uFrdX8OLFi5f/ld/YPBWUjcanfAAAAABJRU5ErkJggg=="
  ariaLabel="Avatar Button"
></AvatarButton>
```

---

## Checklist for Figma Make

- [ ] **Always** set a descriptive **`ariaLabel`**  
- [ ] Use **`type="button"`** when the control is not submitting a form  
- [ ] Prefer **`Avatar`** when the element is not actionable  
- [ ] Match **`Avatar`** content rules: `src` / `iconName` / `initials` / `counter` and **`presence` / `isTyping`**  
- [ ] `IconProvider` / theme per [setup.md](../setup.md)  

For events, disabled states, and CSS parts (`overlay`, `content`, `photo`, `presence`, `loader`, …), see [Storybook — AvatarButton / Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-avatar-avatarbutton--docs).
