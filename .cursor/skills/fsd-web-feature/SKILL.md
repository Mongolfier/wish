---
name: fsd-web-feature
description: >-
  Adds pages, widgets, and features in apps/web using the FSD-like core/
  structure. Use when implementing web UI, routes, layouts, or app-specific
  composition in @wish/web.
---

# FSD Web Feature

App: `apps/web` (`@wish/web`). Next.js 15 App Router + `[locale]` segment.

## Layer map

```
apps/web/src/
├── app/[locale]/          # Next.js routes only — thin pages, layouts, route CSS
├── core/
│   ├── app/               # App shell: RootBody, MainLayout
│   ├── widgets/           # Composite blocks: Header, Footer
│   ├── features/          # User actions: LanguageSelector
│   └── shared/            # Cross-cutting: router, utils
└── i18n/                  # next-intl config (not FSD layer)
```

### Import rules

| From → To      | Allowed                                |
| -------------- | -------------------------------------- |
| `app/`         | `core/*`, `@wish/ui-kit`, `@/i18n/*`   |
| `widgets/`     | `features/`, `shared/`, `@wish/ui-kit` |
| `features/`    | `shared/`, `@wish/ui-kit`              |
| `shared/`      | external libs only                     |
| `@wish/ui-kit` | never import from `apps/web`           |

- Alias: `@/*` → `src/*`
- UI primitives come from `@wish/ui-kit`, not copied into web
- Widgets **compose** ui-kit organisms with app data (see `Footer` wrapping `FooterUI`)

## Add a feature

```
src/core/features/myFeature/
├── index.ts                          # public API only
├── hooks/useMyFeature.ts             # logic
└── ui/MyFeature/MyFeature.tsx        # 'use client' if hooks/events
```

Export from `index.ts`:

```ts
export { MyFeature } from './ui/MyFeature/MyFeature';
```

## Add a widget

```
src/core/widgets/myWidget/
├── MyWidget.tsx
├── ui/...                            # sub-components
├── config.ts                         # static data
└── types.ts
```

Wire into `MainLayout` or a page — widgets do not import from `app/`.

## Add a page

1. Route under `src/app/[locale]/.../page.tsx`
2. Use route groups: `(main-layout)` for pages with header/footer
3. Keep page thin — delegate to `core/features` or `core/widgets`
4. `'use client'` only when the page needs client hooks; prefer client components in `core/`

Example route helper — extend `core/shared/router/routes.ts`:

```ts
export const routes = {
	index: '/',
	auth: '/auth',
} as const;
```

Navigation: use `@/i18n/navigation` (`Link`, `useRouter`) — not `next/navigation` directly.

## Styling in web

- Route/page CSS: `page.css` next to `page.tsx` or `*.module.css` in `core/`
- Global: `src/app/globals.css`, `layout.css`
- Do not add component styles that belong in ui-kit

## Verify

```bash
pnpm --filter @wish/web lint
pnpm --filter @wish/web lint:css
pnpm --filter @wish/web test:run
pnpm --filter @wish/web build    # needs ui-kit built first
```
