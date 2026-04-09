# Novark — Design System

> Project conventions file. Read before every session.

## Stack
- React + TypeScript
- Tailwind CSS
- Tokens: `tokens/tokens.css` (values) → `tailwind.config.ts` (mapping)
- Utilities: `lib/utils.ts` (`cn()` for class merging)
- Icons: **Lucide React** — see "Icons" section below

## Theme Mode
- **Single mode: `Issuer`** — no light/dark switching.
- Only the Issuer colour collection was exported from Figma. Do not assume or add alternative modes.

## Figma
- File: https://www.figma.com/design/bOMlCpCGUOXLd0nobvg2nI/Novark---Design-System
- Typography reference: node `9910:32262`
- MCP: available
- Last export: 2026-04-09

## CSS Strategy
- Approach: Tailwind utility classes in `className`
- Config: `tailwind.config.ts` — all design tokens mapped from `tokens/tokens.css`
- Variants: use `cva` (class-variance-authority) for component variant definitions
- Class merging: use `cn()` from `lib/utils.ts` for conditional and merged classes
- Tokens: referenced as Tailwind classes — never raw hex/px values in className or style
- Interaction states: Tailwind state modifiers (`hover:`, `focus-visible:`, `active:`, `disabled:`) — NEVER JS props
- Focus ring: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus`
  (Novark Figma rysuje 2px ring stykający się z borderem — bez `ring-offset-*`. Każdy interaktywny komponent musi się trzymać tej konwencji.)
- Disabled: `disabled:opacity-40 disabled:cursor-not-allowed`
- No custom CSS classes — prefer utility composition. The only CSS file is `tokens/tokens.css`

## Typography
- Font family: **NdaxCryptix** (local woff2 in `assets/fonts/`, `@font-face` in `tokens/tokens.css`)
- Weights available: 400 (Regular) + 500 (Medium). The `@font-face` is restricted to this range.
- Weight tokens:
  - `font-display` (400) — Display 1–3
  - `font-label` (500) — Heading 1–5, Label 1–7, Button 1–3
  - `font-body` (500) — Body 1–7
- All text styles use `letter-spacing: 0`.
- Responsive: Web is the default (`:root`). Mobile overrides under `@media (max-width: 767px)`.
- Use Tailwind classes: `text-heading-1`, `text-body-3`, `text-label-2`, `text-button-1`, etc.
  The size + line-height are pre-wired in `fontSize` tuples.

## Icons — Lucide only
- Import from `lucide-react`. Install with `npm install lucide-react`.
- **Exact icon tokens from Figma variables (do NOT change):**

  | Token       | `--icon-size-*` | `--icon-stroke-*` | Lucide usage                                    |
  |-------------|------|--------|--------------------------------------------------|
  | xxs (12px)  | 12   | 1      | `<Icon size={12} strokeWidth={1} />`             |
  | xs  (16px)  | 16   | 1.33   | `<Icon size={16} strokeWidth={1.33} />`          |
  | sm  (20px)  | 20   | 1.5    | `<Icon size={20} strokeWidth={1.5} />`           |
  | md  (24px)  | 24   | 2      | `<Icon size={24} strokeWidth={2} />`             |

- **Never hardcode** other sizes or stroke widths. If a design requires a new pair, add it to `tokens/tokens.css` first (and to this table), then use it.
- Icon colour: inherit from parent via `currentColor`. Control with Tailwind `text-*` on the parent, e.g. `<div className="text-brand-primary"><Search size={20} strokeWidth={1.5} /></div>`.
- Decorative icons: `aria-hidden="true"`. Interactive icons must have an accessible label.
- Tailwind helper classes for common sizes: `w-icon-xxs`, `w-icon-xs`, `w-icon-sm`, `w-icon-md` (and matching `h-*`) — useful for wrapping boxes.

## Decision Rules
- Before changing a file, check what other files or skills depend on it. If a change breaks something downstream — fix both or don't change.
- Never add code, props, or files that aren't needed right now. Three simple lines beat one clever abstraction.
- When a value is missing (token, prop, spec) — report the gap, don't guess. Use a placeholder with a comment and add to `TODO.md`.
- Before fixing a problem, ask: "what do we lose if we do nothing?" If the answer is "nothing important" — skip it.
- Focus on the 20% of issues that cause 80% of problems. Critical findings first, suggestions last.
- After every change, check: did this break something else? If yes — fix it now, not later.

## Naming Convention
- Variant values: lowercase (`"primary"`, `"secondary"`, `"tertiary"`)
- Size values: lowercase (`"xxs"`, `"xs"`, `"sm"`, `"md"`)
- Boolean props for states: `disabled` (native), `loading` (custom) — never string enums

## Component File Structure
Each component is a single `.tsx` file. Order inside the file:
1. Header comment (name, Figma node, date)
2. Imports (React, cva, cn, lucide-react)
3. Exported types/interfaces
4. Variant definitions with `cva`
5. Main component with `forwardRef`
6. `export default`

## Dependencies (install before first component)
```
npm install tailwindcss postcss autoprefixer class-variance-authority clsx tailwind-merge lucide-react
```

## Audit History
QA skill maintains `{ComponentName}.audit.md` files next to each component. Token gaps from audits are tracked in `TODO.md`.

## Component list
See `STATUS.md` for the full list of components and their status.
