# A11y review checklist

Use for static review of React/Next.js and `@wish/ui-kit` components. Not every item applies to every change.

## Semantics & structure

- [ ] One `<main>` per page; landmark roles not duplicated incorrectly
- [ ] Heading hierarchy logical (`h1` → `h2` → …), no skipped levels for styling
- [ ] Lists use `<ul>`/`<ol>`/`<li>`; nav blocks use `<nav>` with discernible name (`aria-label` if no visible title)
- [ ] Buttons are `<button>`; navigation is `<a href>` or Next `Link` — not clickable `<div>`

## Names & labels

- [ ] Every form field has visible `<label>` or `aria-label` / `aria-labelledby`
- [ ] Icon-only buttons/links: `aria-label` (localized via next-intl, not hardcoded EN-only)
- [ ] Decorative icons: `aria-hidden`
- [ ] Images: meaningful `alt`; decorative `alt=""`

## Forms & errors

- [ ] Required fields indicated (not color-only)
- [ ] Invalid fields: `aria-invalid`, error text linked via `aria-describedby`
- [ ] Submit loading: `aria-busy` / disabled state (see ui-kit `Button`)
- [ ] Autocomplete attributes where applicable

## Keyboard & focus

- [ ] All interactive elements reachable by Tab
- [ ] Focus order matches visual order
- [ ] `:focus-visible` style visible (ui-kit Button, Link, SocialLink)
- [ ] No `outline: none` without replacement
- [ ] Modals/dialogs: focus trap, Escape to close, return focus on close (if applicable)

## Color & motion

- [ ] Text contrast ≥ 4.5:1 (normal), 3:1 (large text) — check dark footer/header
- [ ] Information not conveyed by color alone
- [ ] Respect `prefers-reduced-motion` for non-essential animation

## Dynamic content

- [ ] Loading states don't rely only on spinners without text/`aria-busy`
- [ ] Toasts/alerts: `role="status"` or `role="alert"` as appropriate
- [ ] Client-only content: no hydration mismatch hiding labels from AT

## i18n (`next-intl`)

- [ ] User-visible strings in locale files, not inline in JSX (except tests)
- [ ] `lang` on `<html>` matches route locale
- [ ] `aria-label` / `title` translated for both `ru` and `en`

## ui-kit components

When changing `@wish/ui-kit`:

- [ ] Forward refs on interactive elements where consumers need focus management
- [ ] Props don't strip native ARIA attributes (`...htmlProps` spread on root element)
- [ ] Storybook stories show focus and disabled states
- [ ] `Link` + `Button`: disabled state exposes `aria-disabled` / native `disabled`

## axe rule categories (automated gaps)

Axe won't catch everything. Still manually verify:

- Logical reading order
- Quality of link/button text ("click here")
- Complex widgets (combobox, custom select)
- VoiceOver/NVDA behavior on auth flows
