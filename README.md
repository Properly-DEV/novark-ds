# Novark — Design System

React + TypeScript + Tailwind CSS design system for Novark.

## 🔗 Live Preview

**Button component:** [`/_preview/Button.html`](./_preview/Button.html)

_After GitHub Pages is enabled, the live URL will be:_
`https://properly-dev.github.io/novark-ds/_preview/Button.html`

The preview shows all 32 variant × size combinations of the Button, full interaction states (default / hover / focus / pressed / disabled / loading), spec tables per size, and real-world casing tests.

---

## What's in this repo

```
novark-ds/
├── tokens/
│   └── tokens.css              ← design tokens (CSS custom properties)
├── tailwind.config.ts          ← Tailwind mapping of every token
├── postcss.config.js
├── lib/
│   └── utils.ts                ← cn() helper
├── components/
│   └── Button.tsx              ← production component (v3)
├── assets/
│   └── fonts/                  ← NdaxCryptix (woff2)
├── variables/                  ← Figma variable JSON exports (source of truth)
├── _preview/
│   └── Button.html             ← standalone preview (works without build)
├── CLAUDE.md                   ← project conventions & decisions
├── STATUS.md                   ← component status
└── TODO.md                     ← open Figma sync gaps
```

## Stack

- **React 18** + **TypeScript**
- **Tailwind CSS** (strict mode — see below)
- **class-variance-authority** + **clsx** + **tailwind-merge** for variants
- **lucide-react** for icons

## Strict Tailwind mode

`tailwind.config.ts` runs in **strict mode**: primitive scales (`colors`, `spacing`, `borderRadius`, `fontFamily`, `fontSize`, `fontWeight`, `letterSpacing`, `strokeWidth`) are defined **outside** of `extend`, replacing the Tailwind defaults. Semantic color sets (`textColor`, `backgroundColor`, `borderColor`, `ringColor`) are in `extend`, adding semantic names on top of the primitive palette.

**What this means for developers:**

| Allowed | Rejected at build time |
|---|---|
| `bg-brand-secondary` (semantic) | `bg-blue-500` (Tailwind default) |
| `bg-neutral-500` (our primitive) | `bg-slate-700` (Tailwind default) |
| `p-lg`, `gap-md`, `h-6xl` (our spacing) | `p-4`, `gap-2`, `h-12` (Tailwind default) |
| `text-button-1`, `text-body-3` (our typography) | `text-sm`, `text-base` (Tailwind default) |
| `font-label` (our weight) | `font-medium`, `font-bold` (Tailwind default) |
| `rounded-md`, `rounded-full` (our radius) | `rounded-lg`, `rounded-3xl` (Tailwind default) |
| `stroke-icon-sm` (our stroke) | `stroke-2` (Tailwind default) |

This prevents design-system drift — any attempt to reach for a default Tailwind class that is not part of Novark will fail compilation. The goal is that you *cannot* use anything that is not in the design.

## Theme

**Single mode — `Issuer`.** No light/dark toggle. All semantic colors are exported from the Issuer collection in Figma.

## Quick start

```bash
npm install react react-dom tailwindcss postcss autoprefixer \
            class-variance-authority clsx tailwind-merge lucide-react
```

Then import:

```tsx
import { Button } from "./components/Button";
import { Search, ArrowRight } from "lucide-react";

<Button variant="primary-violet" size="lg" leftIcon={<Search />}>
  Search
</Button>
```

## Button — at a glance

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

**8 variants × 4 sizes = 32 combinations.** Every state handled by Tailwind modifiers — zero JS state. All visual values from design tokens — zero hardcoded hex/px.

### Icon scale (1:1 with Figma variables)

| Button size | Icon size | Stroke width |
|---|---|---|
| xs, sm | 12 × 12 | 1 |
| md | 16 × 16 | 1.33 |
| lg | 20 × 20 | 1.5 |

Larger icon = thicker stroke, always proportional.

## For developers

See [`CLAUDE.md`](./CLAUDE.md) for full conventions: naming, state rules, focus ring, icon rules, file structure.

## Open items

See [`TODO.md`](./TODO.md). Currently 1 item: the Figma source file has a typo (`quarternary` instead of `quaternary`) in four variables. The derived code files have been corrected, but the typo still needs to be fixed in Figma itself to prevent regression on the next re-export.
