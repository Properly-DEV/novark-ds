# TODO

Open items that cannot be resolved in code alone — typically because they depend on a change in the Figma source or a design decision from the team.

## Figma sync gaps

- [ ] **Literówka `quarternary` w Figma variable**
  Figma source w kolekcji *Issuer* ma wariable `colors/bg/bg-brand-quarternary` (z dodatkową literą "r" — powinno być `quaternary`). Literówka propaguje się przez `tokens.css` → `tailwind.config.ts` → `components/Button.tsx`, gdzie wariant `primary-violet` używa `active:bg-brand-quarternary`.

  Warianty `fg-brand-quaternary` (używane w wariancie `quaternary`) są już bez literówki — niespójność w samej Figmie.

  **Jak naprawić (kolejność):**
  1. Popraw nazwę w Figmie: `bg/bg-brand-quarternary` → `bg/bg-brand-quaternary`.
  2. Wyeksportuj zmienne ponownie (`variables/Issuer.tokens.json`).
  3. Sync w kodzie:
     - `tokens/tokens.css` — rename CSS variable
     - `tailwind.config.ts` — rename backgroundColor key
     - `components/Button.tsx` — `active:bg-brand-quarternary` → `active:bg-brand-quaternary`
     - `_preview/Button.html` — regen
  4. Jedna commit'ka "chore: fix quarternary → quaternary naming across Novark DS".
