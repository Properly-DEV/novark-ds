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
- **Tailwind CSS** — every value resolves to a design token via `tailwind.config.ts`
- **class-variance-authority** + **clsx** + **tailwind-merge** for variants
- **lucide-react** for icons

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

See [`TODO.md`](./TODO.md). Currently 1 item: Figma source has a typo in `bg-brand-quarternary` that needs fixing upstream.
