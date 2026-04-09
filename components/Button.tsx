/*
 * Component: Button
 * Figma:     https://www.figma.com/design/bOMlCpCGUOXLd0nobvg2nI/Novark---Design-System
 *            node 2029:1093
 * Generated: 2026-04-09 (v3)
 *
 * Variants:  primary-violet, primary-lemon, secondary, secondary-round,
 *            tertiary, quaternary, secondary-dark, secondary-round-dark
 * Sizes:     xs (24h) | sm (32h) | md (40h) | lg (48h)
 * States:    default · hover · focus-visible · active · disabled · loading
 *            All states use Tailwind state modifiers — no JS state props.
 *
 * Icon scale (1:1 with Figma variables):
 *   Always pair size + stroke width as a triplet.
 *     [&_svg]:w-icon-{size} [&_svg]:h-icon-{size} [&_svg]:stroke-icon-{size}
 *   Mapping per button size:
 *     xs, sm  → 12×12, stroke 1     (icon-xxs)
 *     md      → 16×16, stroke 1.33  (icon-xs)
 *     lg      → 20×20, stroke 1.5   (icon-sm)
 *   Larger icons always carry thicker strokes — gradient preserved.
 *
 * Layout:
 *   Flex row with `gap-*` between left icon / text / right icon.
 *   4px gap for xs/sm, 8px gap for md/lg — scales with button size.
 *   No wrapper spans, no DOM bloat.
 *
 * Typography:
 *   Uses text-button-{1|2|3} which is configured in tailwind.config.ts to
 *   bake font-size + line-height + font-weight (label/500) + letter-spacing
 *   (0) into one class. Family is font-body (NdaxCryptix).
 *   NOTE: Figma applies `text-transform: capitalize` in the design source,
 *   but we intentionally do NOT replicate it. Consumers write labels with
 *   intentional casing — prevents "iPhone" → "IPhone" and similar footguns.
 */

import * as React from "react";
import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "../lib/utils";

const buttonVariants = cva(
  // Base — shared by every variant × size
  cn(
    "relative inline-flex items-center justify-center",
    "font-body whitespace-nowrap select-none",
    "transition-colors",
    // Border placeholder so Tertiary hover/pressed don't shift layout
    "border border-transparent",
    // Focus ring — 2px, no offset (Novark Figma convention; see CLAUDE.md)
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus",
    // Disabled
    "disabled:opacity-40 disabled:cursor-not-allowed",
    // SVG defaults — never set size or stroke separately, the size variant
    // applies the icon triplet (w + h + stroke-width) to all descendant svgs.
    "[&_svg]:shrink-0 [&_svg]:pointer-events-none",
    // Loading — hide every direct child except the spinner, which is
    // absolutely positioned and keeps the button at its natural width.
    // Cursor during loading is `not-allowed` via `disabled:` because the
    // button is always disabled when loading.
    "data-[loading=true]:[&>:not(.btn-spinner)]:opacity-0",
  ),
  {
    variants: {
      variant: {
        "primary-violet": cn(
          "bg-brand-secondary text-ondark-primary",
          "hover:bg-brand-tertiary",
          "focus-visible:bg-brand-tertiary",
          "active:bg-brand-quaternary",
        ),
        "primary-lemon": cn(
          "bg-lemon-primary text-primary",
          "hover:bg-lemon-secondary",
          "focus-visible:bg-lemon-secondary",
          "active:bg-lemon-tertiary",
        ),
        secondary: cn(
          "bg-brand-subtle-secondary text-primary",
          "hover:bg-brand-subtle-tertiary",
          "focus-visible:bg-brand-subtle-tertiary",
          "active:bg-brand-subtle-quaternary",
        ),
        "secondary-round": cn(
          "bg-brand-subtle-secondary text-primary",
          "hover:bg-brand-subtle-tertiary",
          "focus-visible:bg-brand-subtle-tertiary",
          "active:bg-brand-subtle-quaternary",
        ),
        tertiary: cn(
          "bg-consistent-white text-secondary",
          "hover:border-brand-primary hover:text-primary",
          "focus-visible:border-brand-primary focus-visible:text-primary",
          "active:bg-tertiary active:border-brand-primary active:text-tertiary",
        ),
        quaternary: cn(
          "bg-transparent text-brand-quaternary",
          "hover:text-brand-tertiary",
          "focus-visible:text-brand-tertiary",
          "active:text-brand-secondary",
        ),
        "secondary-dark": cn(
          "bg-alpha-white-12 text-ondark-primary",
          "hover:bg-alpha-white-20",
          "focus-visible:bg-alpha-white-20",
          "active:bg-alpha-white-30",
        ),
        "secondary-round-dark": cn(
          "bg-alpha-white-12 text-ondark-primary",
          "hover:bg-alpha-white-20",
          "focus-visible:bg-alpha-white-20",
          "active:bg-alpha-white-30",
        ),
      },
      size: {
        // h-3xl=24 · radius-xs(6)  · text-button-3 · gap 4 · icon xxs(12/1)
        xs: cn(
          "h-3xl px-xs gap-xs rounded-xs text-button-3",
          "[&_svg]:w-icon-xxs [&_svg]:h-icon-xxs [&_svg]:stroke-icon-xxs",
        ),
        // h-4xl=32 · radius-sm(8)  · text-button-3 · gap 4 · icon xxs(12/1)
        sm: cn(
          "h-4xl px-md gap-xs rounded-sm text-button-3",
          "[&_svg]:w-icon-xxs [&_svg]:h-icon-xxs [&_svg]:stroke-icon-xxs",
        ),
        // h-5xl=40 · radius-md(12) · text-button-2 · gap 8 · icon xs(16/1.33)
        // No py-* — fixed h- + items-center already centers content.
        md: cn(
          "h-5xl px-lg gap-md rounded-md text-button-2",
          "[&_svg]:w-icon-xs [&_svg]:h-icon-xs [&_svg]:stroke-icon-xs",
        ),
        // h-6xl=48 · radius-md(12) · text-button-1 · gap 8 · icon sm(20/1.5)
        lg: cn(
          "h-6xl px-lg gap-md rounded-md text-button-1",
          "[&_svg]:w-icon-sm [&_svg]:h-icon-sm [&_svg]:stroke-icon-sm",
        ),
      },
    },
    compoundVariants: [
      // Round variants override radius regardless of size
      { variant: "secondary-round", className: "rounded-full" },
      { variant: "secondary-round-dark", className: "rounded-full" },
    ],
    defaultVariants: {
      variant: "primary-violet",
      size: "lg",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   * Icon rendered before the label. Pass a Lucide icon directly — the
   * button applies size and stroke-width automatically via the icon triplet.
   * Add `aria-hidden="true"` to the icon if it is purely decorative.
   */
  leftIcon?: React.ReactNode;
  /**
   * Icon rendered after the label. Same rules as `leftIcon`.
   */
  rightIcon?: React.ReactNode;
  /**
   * Shows a centered spinner and hides the label/icons without changing
   * the button's width. Also disables the button for pointer + keyboard.
   */
  loading?: boolean;
}

/**
 * Novark Button.
 *
 * Defaults to `type="button"` so the component never accidentally submits
 * a form when used inside one. Pass `type="submit"` explicitly when needed.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant,
    size,
    leftIcon,
    rightIcon,
    loading = false,
    disabled,
    className,
    children,
    type = "button",
    ...rest
  },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      className={cn(buttonVariants({ variant, size }), className)}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      data-loading={loading || undefined}
      {...rest}
    >
      {leftIcon}
      {/* Text is wrapped in a minimal span so the loading-state CSS
          selector can target it (text nodes aren't selectable). */}
      {children != null && children !== false && <span>{children}</span>}
      {rightIcon}
      {loading && (
        <Loader2
          aria-hidden="true"
          className="btn-spinner absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin"
        />
      )}
    </button>
  );
});

export default Button;
