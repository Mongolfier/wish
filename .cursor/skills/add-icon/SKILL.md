---
name: add-icon
description: >-
  Adds SVG icons to @wish/ui-kit with typed categories and Storybook preview.
  Use when adding or renaming icons in packages/ui-kit/src/assets/icons.
---

# Add Icon

Icons live in `packages/ui-kit/src/assets/icons/`. Types and Storybook list are **auto-generated** on ui-kit build.

## File placement

```
src/assets/icons/
├── spinner.svg                    # root icon (no category)
├── actions/add.svg
├── logo/apple.svg
├── information/email.svg
└── {category}/{name}.svg
```

| Rule       | Detail                                                          |
| ---------- | --------------------------------------------------------------- |
| Format     | SVG only                                                        |
| Name       | lowercase, snake_case or kebab (`arrow_down`, `checkbox-empty`) |
| Category   | folder name = `Icon` `category` prop                            |
| Root icons | SVG directly in `icons/` → `category` omitted                   |

Existing categories include: `actions`, `arrows`, `checked`, `entrance`, `information`, `logo`, `markers`, `shop`, `sorting-and-filter`.

Prefer an existing category; create a new folder only when none fits.

## Usage in components

```tsx
import { Icon } from '@wish/ui-kit';

<Icon category="logo" name="apple" width={24} height={24} />
<Icon name="spinner" width={20} height={20} />   // root icon
```

Types come from generated `src/core/Icon/icons.types.ts` — invalid `category`/`name` pairs fail TypeScript.

## Regenerate types

Runs automatically via `generateIconTypesPlugin` on build:

```bash
pnpm --filter @wish/ui-kit build
# or
pnpm build:ui-kit
```

Generates:

- `src/core/Icon/icons.types.ts` — discriminated union types
- `src/core/Icon/_stories/iconsList.ts` — Storybook icon table

**Do not hand-edit** generated files.

## Preview in Storybook

```bash
pnpm storybook
```

Open **Core/Icon** story — all icons listed via `iconsList`.

## SVG guidelines

- Clean paths; remove editor metadata when possible
- Use `currentColor` for fills/strokes when icon should inherit text color
- Consistent viewBox (typically 24×24)
- Filename without `.svg` becomes `name` prop

## Verify

```bash
pnpm --filter @wish/ui-kit build
pnpm --filter @wish/ui-kit lint
```

Rebuild ui-kit before web if icons are used in app: `pnpm build:ui-kit`.
