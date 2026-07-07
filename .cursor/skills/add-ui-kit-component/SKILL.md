---
name: add-ui-kit-component
description: >-
  Adds or updates components in @wish/ui-kit following atomic design, CSS
  Modules, Storybook, and barrel exports. Use when creating UI components,
  elements, organisms, or icons in packages/ui-kit.
---

# Add UI Kit Component

Package: `packages/ui-kit` (`@wish/ui-kit`). Web consumes the **built** `dist/` — run `pnpm build:ui-kit` after changes.

## Choose a layer

| Layer     | Path             | When                                     |
| --------- | ---------------- | ---------------------------------------- |
| Core      | `src/core/`      | Primitives (Icon)                        |
| Elements  | `src/elements/`  | Single-purpose UI (Button, Link, Select) |
| Molecules | `src/molecules/` | Composed from elements                   |
| Organisms | `src/organisms/` | Large blocks (Footer, MainMenu)          |

Do not put app-specific logic here. Keep components reusable and prop-driven (slots, `className`).

## File layout

For a component `MyComponent` in `elements/`:

```
src/elements/MyComponent/
├── MyComponent.tsx
├── MyComponent.module.css      # required for styles
├── MyComponent.vars.css        # optional design tokens (--my_component-*)
├── MyComponent.stories.tsx     # Storybook
├── MyComponent.mdx             # optional docs
└── index.ts                    # export { MyComponent, type MyComponentProps }
```

## Component conventions

- Named export + `displayName` on forwardRef components
- Props interface: `MyComponentProps`, JSDoc on non-obvious props
- CSS Modules: `import css from './MyComponent.module.css'`, combine with `classnames`
- Scoped class names: `wishui-{filename}__{localName}` (configured in `vite.config.ts`)
- Import shared mixins: `@import url('../../assets/mixins/transition.css')`
- Use `Icon` from `../../core/Icon` for icons — never inline SVG in components
- Peer deps only: `react`, `react-dom`, `react-select` — no Next.js imports

## Storybook

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { MyComponent } from './MyComponent';

const meta = {
	title: 'Elements/MyComponent', // Elements | Molecules | Organisms | Core
	component: MyComponent,
} satisfies Meta<typeof MyComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		/* ... */
	},
};
```

Run: `pnpm storybook` from root or `pnpm --filter @wish/ui-kit storybook`.

## Barrel export

`src/index.ts` is **auto-generated** by `generateBarrelPlugin` on build. Add `index.ts` in the component folder — do not hand-edit `src/index.ts`.

## Verify

```bash
pnpm --filter @wish/ui-kit lint
pnpm --filter @wish/ui-kit lint:css
pnpm --filter @wish/ui-kit test:run
pnpm --filter @wish/ui-kit build
pnpm build:ui-kit   # from root — required before web picks up changes
```

## Icons (if needed)

Add SVG to `src/assets/icons/{category}/{name}.svg`. Types regenerate via `generateIconTypesPlugin` on build. Use `<Icon category="logo" name="apple" />`.
