---
name: i18n-next-intl
description: >-
  Adds or updates translations and localized routing in apps/web with next-intl.
  Use when adding user-visible strings, locales, namespaces, or localized links
  in @wish/web.
---

# i18n (next-intl)

Locales: **`ru`** (default), **`en`**. Config: `apps/web/src/i18n/`.

## Namespaces

Defined in `src/i18n/routing.ts`:

```ts
export const namespaces = ['nav', 'home', 'auth', 'developers'] as const;
```

Messages live in `apps/web/locales/{locale}/{namespace}.json`.

## Add strings

1. Pick or create a namespace (e.g. `auth`)
2. Add keys to **both** locales:

```
locales/ru/auth.json   ← source of truth for RU copy
locales/en/auth.json   ← EN translation
```

3. Use flat JSON keys:

```json
{ "title": "Авторизация", "submit": "Войти" }
```

4. In components:

```tsx
'use client';
import { useTranslations } from 'next-intl';

const t = useTranslations('auth');
return <h1>{t('title')}</h1>;
```

With interpolation: `t('count', { count })` — key in JSON: `"count": "Count is {count}"`.

## New namespace checklist

- [ ] Add to `namespaces` in `src/i18n/routing.ts`
- [ ] Create `locales/ru/{ns}.json` and `locales/en/{ns}.json`
- [ ] `request.ts` loads all namespaces automatically — no change needed there

## Navigation (locale-aware)

Always import from `@/i18n/navigation`, not `next/link` or `next/navigation`:

```tsx
import { Link, useRouter, usePathname, redirect } from '@/i18n/navigation';

const router = useRouter();
router.push('/auth'); // preserves locale prefix
```

## Server components

Layout loads messages via `NextIntlClientProvider` in `app/[locale]/layout.tsx`. For server-only translation access, use `next-intl/server` helpers (`getTranslations`, `getMessages`).

## Middleware

`src/middleware.ts` — redirects unsupported locale prefixes to `ru`. Matcher excludes `_next`, `api`, static files.

## Rules

- Never hardcode user-visible strings in TSX — use a namespace
- Keep keys in sync across `ru` and `en`
- Placeholders (`you@example.com`) may stay literal if not translated
- URL structure: `/{locale}/path` (e.g. `/ru/auth`, `/en/auth`)

## Verify

```bash
pnpm --filter @wish/web lint
pnpm --filter @wish/web build
# Manual: open /ru/... and /en/... in dev
pnpm dev
```
