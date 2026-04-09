# TODO

Open items that cannot be resolved in code alone — typically because they depend on an external source (Figma) or a design decision from the team.

## Figma sync gaps

- [ ] **Typo `quarternary` in the Figma source**
  The Figma *Issuer* collection contains variables spelled `quarternary` (with an extra "r") — the correct word is `quaternary`. Affected variables:
  - `colors/bg/bg-quarternary`
  - `colors/bg/bg-brand-quarternary`
  - `colors/bg/bg-brand-subtle-quarternary`
  - `colors/border/border-quarternary`

  Notably, the `fg` collection (`colors/fg/fg-quaternary`, `colors/fg/fg-brand-quaternary`) is spelled correctly — so the typo is inconsistent within Figma itself.

  **Status in this repo:** The derived files (`tokens/tokens.css`, `tailwind.config.ts`, `components/Button.tsx`, `_preview/Button.html`) have been fixed to use the correct spelling (`quaternary`). The raw Figma export in `variables/Issuer.tokens.json` is left untouched — it is the authoritative record of what Figma currently exports.

  **How to fully resolve:**
  1. Rename the variables in the Figma file: drop the extra "r" from `bg-*` and `border-*` collections.
  2. Re-export variables to `variables/Issuer.tokens.json`.
  3. Diff the new export against `tokens/tokens.css` — there should now be zero name differences.
  4. Commit with message: `chore(tokens): sync Figma rename quarternary → quaternary`.

  Until step 1 happens, any future re-export from Figma that overwrites `tokens.css` will need to re-apply the typo fix.
