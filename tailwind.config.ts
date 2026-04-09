import type { Config } from "tailwindcss";

/**
 * Novark Design System — Tailwind config.
 *
 * STRICT MODE. Primitive scales (colors, spacing, radius, typography, icon
 * stroke) live OUTSIDE `extend`, replacing Tailwind defaults. The only
 * utilities a developer can use are the ones defined here — trying to use
 * `bg-blue-500` or `p-4` (Tailwind default) produces an unknown-class error
 * at build time. This prevents design-system drift.
 *
 * Semantic color sets (`textColor`, `backgroundColor`, `borderColor`,
 * `ringColor`) stay inside `extend` because they ADD semantic names on top
 * of the primitive palette from `colors`. Both `bg-neutral-500` (primitive)
 * and `bg-primary` (semantic) must work.
 *
 * Single mode: Issuer. No dark mode switching.
 */
const config: Config = {
  content: [
    "./components/**/*.{ts,tsx}",
    "./patterns/**/*.{ts,tsx,html}",
    "./lib/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    // ── Primitive color scales (STRICT — replaces Tailwind defaults) ──
    // Only these colors are available. `bg-blue-500` is rejected.
    // `transparent` and `current` are the standard Tailwind keywords that
    // must be preserved explicitly when replacing the default palette.
    colors: {
      transparent: "transparent",
      current: "currentColor",
      inherit: "inherit",

      base: {
        white: "var(--colors-base-white)",
        black: "var(--colors-base-black)",
      },
      neutral: {
        25:  "var(--colors-neutral-25)",
        50:  "var(--colors-neutral-50)",
        100: "var(--colors-neutral-100)",
        200: "var(--colors-neutral-200)",
        300: "var(--colors-neutral-300)",
        400: "var(--colors-neutral-400)",
        500: "var(--colors-neutral-500)",
        600: "var(--colors-neutral-600)",
        700: "var(--colors-neutral-700)",
        800: "var(--colors-neutral-800)",
        900: "var(--colors-neutral-900)",
        950: "var(--colors-neutral-950)",
      },
      "brand-violet": {
        50:  "var(--colors-brand-violet-50)",
        100: "var(--colors-brand-violet-100)",
        200: "var(--colors-brand-violet-200)",
        300: "var(--colors-brand-violet-300)",
        400: "var(--colors-brand-violet-400)",
        500: "var(--colors-brand-violet-500)",
        600: "var(--colors-brand-violet-600)",
        700: "var(--colors-brand-violet-700)",
        800: "var(--colors-brand-violet-800)",
        900: "var(--colors-brand-violet-900)",
        950: "var(--colors-brand-violet-950)",
      },
      "brand-lemon": {
        100: "var(--colors-brand-lemon-100)",
        200: "var(--colors-brand-lemon-200)",
        300: "var(--colors-brand-lemon-300)",
        400: "var(--colors-brand-lemon-400)",
        500: "var(--colors-brand-lemon-500)",
        600: "var(--colors-brand-lemon-600)",
        700: "var(--colors-brand-lemon-700)",
        800: "var(--colors-brand-lemon-800)",
        900: "var(--colors-brand-lemon-900)",
      },
      red: {
        50:  "var(--colors-red-50)",
        100: "var(--colors-red-100)",
        200: "var(--colors-red-200)",
        300: "var(--colors-red-300)",
        400: "var(--colors-red-400)",
        500: "var(--colors-red-500)",
        600: "var(--colors-red-600)",
        700: "var(--colors-red-700)",
        800: "var(--colors-red-800)",
        900: "var(--colors-red-900)",
      },
      green: {
        50:  "var(--colors-green-50)",
        100: "var(--colors-green-100)",
        200: "var(--colors-green-200)",
        300: "var(--colors-green-300)",
        400: "var(--colors-green-400)",
        500: "var(--colors-green-500)",
        600: "var(--colors-green-600)",
        700: "var(--colors-green-700)",
        800: "var(--colors-green-800)",
        900: "var(--colors-green-900)",
      },
      orange: {
        100: "var(--colors-orange-100)",
        200: "var(--colors-orange-200)",
        300: "var(--colors-orange-300)",
        400: "var(--colors-orange-400)",
        500: "var(--colors-orange-500)",
        600: "var(--colors-orange-600)",
        700: "var(--colors-orange-700)",
        800: "var(--colors-orange-800)",
        900: "var(--colors-orange-900)",
      },
      "alpha-white": {
        12: "var(--colors-alpha-white-12)",
        20: "var(--colors-alpha-white-20)",
        30: "var(--colors-alpha-white-30)",
        50: "var(--colors-alpha-white-50)",
        75: "var(--colors-alpha-white-75)",
      },
      "alpha-black": {
        12: "var(--colors-alpha-black-12)",
        20: "var(--colors-alpha-black-20)",
        30: "var(--colors-alpha-black-30)",
        50: "var(--colors-alpha-black-50)",
        75: "var(--colors-alpha-black-75)",
      },
      "alpha-brand-dark": {
        12: "var(--colors-alpha-brand-dark-12)",
        20: "var(--colors-alpha-brand-dark-20)",
        30: "var(--colors-alpha-brand-dark-30)",
        40: "var(--colors-alpha-brand-dark-40)",
        50: "var(--colors-alpha-brand-dark-50)",
        60: "var(--colors-alpha-brand-dark-60)",
        75: "var(--colors-alpha-brand-dark-75)",
      },
      "alpha-brand": {
        12: "var(--colors-alpha-brand-12)",
        20: "var(--colors-alpha-brand-20)",
        30: "var(--colors-alpha-brand-30)",
        50: "var(--colors-alpha-brand-50)",
        75: "var(--colors-alpha-brand-75)",
      },
      "alpha-lemon": {
        12: "var(--colors-alpha-lemon-12)",
      },
      "alpha-green": {
        20: "var(--colors-alpha-green-20)",
        50: "var(--colors-alpha-green-50)",
        75: "var(--colors-alpha-green-75)",
      },
      "alpha-orange": {
        20: "var(--colors-alpha-orange-20)",
        50: "var(--colors-alpha-orange-50)",
        75: "var(--colors-alpha-orange-75)",
      },
      "alpha-red": {
        20: "var(--colors-alpha-red-20)",
        50: "var(--colors-alpha-red-50)",
        75: "var(--colors-alpha-red-75)",
      },
      chart: {
        1:  "var(--colors-chart-1)",
        2:  "var(--colors-chart-2)",
        3:  "var(--colors-chart-3)",
        4:  "var(--colors-chart-4)",
        5:  "var(--colors-chart-5)",
        6:  "var(--colors-chart-6)",
        7:  "var(--colors-chart-7)",
        8:  "var(--colors-chart-8)",
        9:  "var(--colors-chart-9)",
        10: "var(--colors-chart-10)",
      },
    },

    // ── Spacing (STRICT) ──────────────────────────────────────
    // Replaces the default 0.5/1/1.5/2/2.5/3... Tailwind scale. Only
    // Novark's named scale is available. Arbitrary values like `p-[13px]`
    // are still possible but clearly stand out in code review.
    spacing: {
      0: "0",
      none: "var(--spacing-none)",
      xxs:  "var(--spacing-xxs)",
      xs:   "var(--spacing-xs)",
      sm:   "var(--spacing-sm)",
      md:   "var(--spacing-md)",
      lg:   "var(--spacing-lg)",
      xl:   "var(--spacing-xl)",
      "2xl":  "var(--spacing-2xl)",
      "3xl":  "var(--spacing-3xl)",
      "4xl":  "var(--spacing-4xl)",
      "5xl":  "var(--spacing-5xl)",
      "6xl":  "var(--spacing-6xl)",
      "7xl":  "var(--spacing-7xl)",
      "8xl":  "var(--spacing-8xl)",
      "9xl":  "var(--spacing-9xl)",
      "10xl": "var(--spacing-10xl)",
      "11xl": "var(--spacing-11xl)",

      // Icon sizes (for width/height utilities used in the icon triplet)
      "icon-xxs": "var(--icon-size-xxs-px)",
      "icon-xs":  "var(--icon-size-xs-px)",
      "icon-sm":  "var(--icon-size-sm-px)",
      "icon-md":  "var(--icon-size-md-px)",
    },

    // ── Border radius (STRICT) ────────────────────────────────
    borderRadius: {
      none: "var(--radius-none)",
      xxs:  "var(--radius-xxs)",
      xs:   "var(--radius-xs)",
      sm:   "var(--radius-sm)",
      md:   "var(--radius-md)",
      lg:   "var(--radius-lg)",
      xl:   "var(--radius-xl)",
      "2xl": "var(--radius-2xl)",
      full: "var(--radius-full)",
    },

    // ── Font family (STRICT) ──────────────────────────────────
    fontFamily: {
      headings: ["var(--font-family-headings)"],
      body:     ["var(--font-family-body)"],
    },

    // ── Font weight (STRICT) ──────────────────────────────────
    // Only the three weights Figma defines. `font-bold` etc. are rejected.
    fontWeight: {
      display: "var(--font-weight-display)",
      body:    "var(--font-weight-body)",
      label:   "var(--font-weight-label)",
    },

    // ── Letter spacing (STRICT) ───────────────────────────────
    // All Novark text styles use letter-spacing: 0. `tracking-wide` etc.
    // are rejected.
    letterSpacing: {
      default: "var(--letter-spacing-default)",
    },

    // ── Stroke width (STRICT, Lucide icons) ───────────────────
    // Only the four icon strokes from Figma. Matches size triplet.
    strokeWidth: {
      "icon-xxs": "var(--icon-stroke-xxs)",
      "icon-xs":  "var(--icon-stroke-xs)",
      "icon-sm":  "var(--icon-stroke-sm)",
      "icon-md":  "var(--icon-stroke-md)",
    },

    // ── Font size (STRICT, with line-height/weight/tracking baked in) ──
    fontSize: {
      "display-1": ["var(--display-1-size)", { lineHeight: "var(--display-1-line-height)" }],
      "display-2": ["var(--display-2-size)", { lineHeight: "var(--display-2-line-height)" }],
      "display-3": ["var(--display-3-size)", { lineHeight: "var(--display-3-line-height)" }],

      "heading-1": ["var(--heading-1-size)", { lineHeight: "var(--heading-1-line-height)" }],
      "heading-2": ["var(--heading-2-size)", { lineHeight: "var(--heading-2-line-height)" }],
      "heading-3": ["var(--heading-3-size)", { lineHeight: "var(--heading-3-line-height)" }],
      "heading-4": ["var(--heading-4-size)", { lineHeight: "var(--heading-4-line-height)" }],
      "heading-5": ["var(--heading-5-size)", { lineHeight: "var(--heading-5-line-height)" }],

      "body-1": ["var(--body-1-size)", { lineHeight: "var(--body-1-line-height)" }],
      "body-2": ["var(--body-2-size)", { lineHeight: "var(--body-2-line-height)" }],
      "body-3": ["var(--body-3-size)", { lineHeight: "var(--body-3-line-height)" }],
      "body-4": ["var(--body-4-size)", { lineHeight: "var(--body-4-line-height)" }],
      "body-5": ["var(--body-5-size)", { lineHeight: "var(--body-5-line-height)" }],
      "body-6": ["var(--body-6-size)", { lineHeight: "var(--body-6-line-height)" }],
      "body-7": ["var(--body-7-size)", { lineHeight: "var(--body-7-line-height)" }],

      "label-1": ["var(--label-1-size)", { lineHeight: "var(--label-1-line-height)" }],
      "label-2": ["var(--label-2-size)", { lineHeight: "var(--label-2-line-height)" }],
      "label-3": ["var(--label-3-size)", { lineHeight: "var(--label-3-line-height)" }],
      "label-4": ["var(--label-4-size)", { lineHeight: "var(--label-4-line-height)" }],
      "label-5": ["var(--label-5-size)", { lineHeight: "var(--label-5-line-height)" }],
      "label-6": ["var(--label-6-size)", { lineHeight: "var(--label-6-line-height)" }],
      "label-7": ["var(--label-7-size)", { lineHeight: "var(--label-7-line-height)" }],

      // Buttons bake size + line-height + weight + tracking into one class.
      "button-1": ["var(--button-1-size)", {
        lineHeight: "var(--button-1-line-height)",
        letterSpacing: "var(--letter-spacing-default)",
        fontWeight: "var(--font-weight-label)",
      }],
      "button-2": ["var(--button-2-size)", {
        lineHeight: "var(--button-2-line-height)",
        letterSpacing: "var(--letter-spacing-default)",
        fontWeight: "var(--font-weight-label)",
      }],
      "button-3": ["var(--button-3-size)", {
        lineHeight: "var(--button-3-line-height)",
        letterSpacing: "var(--letter-spacing-default)",
        fontWeight: "var(--font-weight-label)",
      }],
    },

    extend: {
      // ── Semantic text colors (ADD on top of primitive colors) ──
      // These produce classes like `text-primary`, `text-brand-primary`,
      // `text-system-error-primary` — all backed by semantic CSS vars.
      textColor: {
        primary:    "var(--colors-fg-primary)",
        secondary:  "var(--colors-fg-secondary)",
        tertiary:   "var(--colors-fg-tertiary)",
        quaternary: "var(--colors-fg-quaternary)",

        "brand-primary":    "var(--colors-fg-brand-primary)",
        "brand-secondary":  "var(--colors-fg-brand-secondary)",
        "brand-tertiary":   "var(--colors-fg-brand-tertiary)",
        "brand-quaternary": "var(--colors-fg-brand-quaternary)",

        "brand-subtle-primary":   "var(--colors-fg-brand-subtle-primary)",
        "brand-subtle-secondary": "var(--colors-fg-brand-subtle-secondary)",
        "brand-subtle-tertiary":  "var(--colors-fg-brand-subtle-tertiary)",

        "ondark-primary":    "var(--colors-fg-ondark-primary)",
        "ondark-secondary":  "var(--colors-fg-ondark-secondary)",
        "ondark-tertiary":   "var(--colors-fg-ondark-tertiary)",
        "ondark-quaternary": "var(--colors-fg-ondark-quaternary)",

        "lemon-primary":   "var(--colors-fg-lemon-primary)",
        "lemon-secondary": "var(--colors-fg-lemon-secondary)",

        "system-success-subtle":    "var(--colors-fg-system-success-subtle)",
        "system-success-primary":   "var(--colors-fg-system-success-primary)",
        "system-success-secondary": "var(--colors-fg-system-success-secondary)",
        "system-success-tertiary":  "var(--colors-fg-system-success-tertiary)",
        "system-warning-subtle":    "var(--colors-fg-system-warning-subtle)",
        "system-warning-primary":   "var(--colors-fg-system-warning-primary)",
        "system-warning-secondary": "var(--colors-fg-system-warning-secondary)",
        "system-error-subtle":      "var(--colors-fg-system-error-subtle)",
        "system-error-primary":     "var(--colors-fg-system-error-primary)",
        "system-error-secondary":   "var(--colors-fg-system-error-secondary)",
      },

      // ── Semantic background colors ──────────────────────────────
      backgroundColor: {
        primary:    "var(--colors-bg-primary)",
        secondary:  "var(--colors-bg-secondary)",
        tertiary:   "var(--colors-bg-tertiary)",
        quaternary: "var(--colors-bg-quaternary)",

        "brand-primary":    "var(--colors-bg-brand-primary)",
        "brand-secondary":  "var(--colors-bg-brand-secondary)",
        "brand-tertiary":   "var(--colors-bg-brand-tertiary)",
        "brand-quaternary": "var(--colors-bg-brand-quaternary)",
        "brand-quinary":    "var(--colors-bg-brand-quinary)",

        "brand-subtle-primary":    "var(--colors-bg-brand-subtle-primary)",
        "brand-subtle-secondary":  "var(--colors-bg-brand-subtle-secondary)",
        "brand-subtle-tertiary":   "var(--colors-bg-brand-subtle-tertiary)",
        "brand-subtle-quaternary": "var(--colors-bg-brand-subtle-quaternary)",

        "consistent-white": "var(--colors-bg-consistent-white)",

        "ondark-primary":   "var(--colors-bg-ondark-primary)",
        "ondark-secondary": "var(--colors-bg-ondark-secondary)",
        "ondark-tertiary":  "var(--colors-bg-ondark-tertiary)",

        "lemon-primary":      "var(--colors-bg-lemon-primary)",
        "lemon-secondary":    "var(--colors-bg-lemon-secondary)",
        "lemon-tertiary":     "var(--colors-bg-lemon-tertiary)",
        "lemon-subtle":       "var(--colors-bg-lemon-subtle)",
        "lemon-subtle-hover": "var(--colors-bg-lemon-subtle-hover)",

        "system-success-primary":          "var(--colors-bg-system-success-primary)",
        "system-success-secondary":        "var(--colors-bg-system-success-secondary)",
        "system-success-tertiary":         "var(--colors-bg-system-success-tertiary)",
        "system-success-subtle-primary":   "var(--colors-bg-system-success-subtle-primary)",
        "system-success-subtle-secondary": "var(--colors-bg-system-success-subtle-secondary)",
        "system-success-subtle-tertiary":  "var(--colors-bg-system-success-subtle-tertiary)",

        "system-warning-primary":          "var(--colors-bg-system-warning-primary)",
        "system-warning-secondary":        "var(--colors-bg-system-warning-secondary)",
        "system-warning-tertiary":         "var(--colors-bg-system-warning-tertiary)",
        "system-warning-subtle-primary":   "var(--colors-bg-system-warning-subtle-primary)",
        "system-warning-subtle-secondary": "var(--colors-bg-system-warning-subtle-secondary)",
        "system-warning-subtle-tertiary":  "var(--colors-bg-system-warning-subtle-tertiary)",

        "system-error-primary":          "var(--colors-bg-system-error-primary)",
        "system-error-secondary":        "var(--colors-bg-system-error-secondary)",
        "system-error-tertiary":         "var(--colors-bg-system-error-tertiary)",
        "system-error-subtle-primary":   "var(--colors-bg-system-error-subtle-primary)",
        "system-error-subtle-secondary": "var(--colors-bg-system-error-subtle-secondary)",
        "system-error-subtle-tertiary":  "var(--colors-bg-system-error-subtle-tertiary)",

        section:         "var(--colors-bg-section)",
        "section-inverse": "var(--colors-bg-section-inverse)",
        "badge-neutral": "var(--colors-bg-badge-neutral)",
        iconbox:         "var(--colors-iconbox-bg)",
        dialog:          "var(--colors-bg-dialog)",

        // Semantic alpha layers — override `bg-alpha-*` to resolve via the
        // Issuer-mode semantic variables instead of the primitive ones.
        "alpha-white-12":  "var(--colors-alpha-bg-a-white-12)",
        "alpha-white-20":  "var(--colors-alpha-bg-a-white-20)",
        "alpha-white-30":  "var(--colors-alpha-bg-a-white-30)",
        "alpha-brand-12":  "var(--colors-alpha-bg-a-brand-12)",
        "alpha-brand-20":  "var(--colors-alpha-bg-a-brand-20)",
        "alpha-brand-30":  "var(--colors-alpha-bg-a-brand-30)",
        "alpha-orange-20": "var(--colors-alpha-bg-a-orange-20)",
        "alpha-green-20":  "var(--colors-alpha-bg-a-green-20)",
        "alpha-red-20":    "var(--colors-alpha-bg-a-red-20)",
        "alpha-black-12":  "var(--colors-alpha-bg-a-black-12)",
        "alpha-black-20":  "var(--colors-alpha-bg-a-black-20)",
        "alpha-black-30":  "var(--colors-alpha-bg-a-black-30)",
      },

      // ── Semantic border colors ───────────────────────────────
      borderColor: {
        primary:    "var(--colors-border-primary)",
        secondary:  "var(--colors-border-secondary)",
        tertiary:   "var(--colors-border-tertiary)",
        quaternary: "var(--colors-border-quaternary)",

        "brand-primary":   "var(--colors-border-brand-primary)",
        "brand-secondary": "var(--colors-border-brand-secondary)",
        "brand-tertiary":  "var(--colors-border-brand-tertiary)",

        "consistent-white": "var(--colors-border-consistent-white)",
        focus:              "var(--colors-border-focus)",
        badge:              "var(--colors-border-badge)",

        "system-success-primary":   "var(--colors-border-system-success-primary)",
        "system-success-secondary": "var(--colors-border-system-success-secondary)",
        "system-warning-primary":   "var(--colors-border-system-warning-primary)",
        "system-warning-secondary": "var(--colors-border-system-warning-secondary)",
        "system-error-primary":     "var(--colors-border-system-error-primary)",
        "system-error-secondary":   "var(--colors-border-system-error-secondary)",
      },

      // ── Ring color (focus rings) ─────────────────────────────
      ringColor: {
        focus: "var(--colors-border-focus)",
      },
    },
  },
  plugins: [],
};

export default config;
