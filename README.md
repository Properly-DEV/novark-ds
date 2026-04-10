# Novark — Design System

React + TypeScript + Tailwind CSS design system for Novark.

## Preview

**Button:** [`_preview/Button.html`](./_preview/Button.html) — open locally, no build step needed.

All 32 variant × size combinations with full interaction states (hover, focus, pressed, disabled, loading).

## What's in this repo

```
tokens/tokens.css          ← design tokens (CSS custom properties)
tailwind.config.ts         ← strict Tailwind mapping of every token
components/Button.tsx      ← production component
lib/utils.ts               ← cn() helper (clsx + tailwind-merge)
assets/fonts/              ← NdaxCryptix (woff2)
variables/                 ← raw Figma variable exports
_preview/Button.html       ← standalone visual preview
```

## Stack

- **React 18** + **TypeScript**
- **Tailwind CSS** (strict mode)
- **class-variance-authority** + **clsx** + **tailwind-merge**
- **lucide-react** for icons

## Strict Tailwind mode

`tailwind.config.ts` replaces the default Tailwind scales (`colors`, `spacing`, `borderRadius`, `fontFamily`, `fontSize`, `fontWeight`, `letterSpacing`, `strokeWidth`) with Novark tokens. Semantic color sets are added via `extend`.

| Allowed | Rejected at build time |
|---|---|
| `bg-brand-secondary`, `bg-neutral-500` | `bg-blue-500`, `bg-slate-700` |
| `p-lg`, `gap-md`, `h-6xl` | `p-4`, `gap-2`, `h-12` |
| `text-button-1`, `text-body-3` | `text-sm`, `text-base` |
| `rounded-md`, `font-label`, `stroke-icon-sm` | `rounded-lg`, `font-bold`, `stroke-2` |

You cannot use anything that is not in the design.

## Quick start

```bash
npm install react react-dom tailwindcss postcss autoprefixer \
            class-variance-authority clsx tailwind-merge lucide-react
```

```tsx
import { Button } from "./components/Button";
import { Search } from "lucide-react";

<Button variant="primary-violet" size="lg" leftIcon={<Search />}>
  Search
</Button>
```

## Button

8 variants × 4 sizes = 32 combinations. States handled by Tailwind modifiers. All values from design tokens.

| | xs (24h) | sm (32h) | md (40h) | lg (48h) |
|---|---|---|---|---|
| **primary-violet** | ✓ | ✓ | ✓ | ✓ |
| **primary-lemon** | ✓ | ✓ | ✓ | ✓ |
| **secondary** | ✓ | ✓ | ✓ | ✓ |
| **secondary-round** | ✓ | ✓ | ✓ | ✓ |
| **tertiary** | ✓ | ✓ | ✓ | ✓ |
| **quaternary** | ✓ | ✓ | ✓ | ✓ |
| **secondary-dark** | ✓ | ✓ | ✓ | ✓ |
| **secondary-round-dark** | ✓ | ✓ | ✓ | ✓ |

## Conventions

See [`CLAUDE.md`](./CLAUDE.md) for full project conventions.
See [`TODO.md`](./TODO.md) for open Figma sync gaps.
