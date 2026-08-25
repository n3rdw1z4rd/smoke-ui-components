/**
 * Named constants for every themeable value, so components never contain a
 * hardcoded color/spacing literal or a hand-typed `var(--...)` string.
 * Renaming or typo-ing a token becomes a TypeScript error, not a silently
 * broken style.
 *
 * Each constant's *value* is still a CSS `var()` reference, so runtime
 * theming (via setTheme(), a `prefers-color-scheme` media query, or a
 * wrapping `.theme-x` class) continues to work with zero JavaScript
 * re-render — the browser repaints anything referencing a changed variable
 * on its own.
 */

export const COLOR_BG = "var(--smoke-bg)";
export const COLOR_BG_ELEVATED = "var(--smoke-bg-elevated)";
export const COLOR_FG = "var(--smoke-fg)";
export const COLOR_FG_MUTED = "var(--smoke-fg-muted)";
export const COLOR_ACCENT = "var(--smoke-accent)";
export const COLOR_BORDER = "var(--smoke-border)";

export const SPACING_XS = "var(--smoke-spacing-xs)";
export const SPACING_SM = "var(--smoke-spacing-sm)";
export const SPACING_MD = "var(--smoke-spacing-md)";
export const SPACING_LG = "var(--smoke-spacing-lg)";

export const RADIUS_SM = "var(--smoke-radius-sm)";
export const RADIUS_MD = "var(--smoke-radius-md)";

export const FONT_MONO = "var(--smoke-font-mono)";
export const FONT_SIZE_SM = "var(--smoke-font-size-sm)";
export const FONT_SIZE_MD = "var(--smoke-font-size-md)";

/**
 * Maps each token above to the bare CSS custom property name (no `var()`
 * wrapper), for use with `style.setProperty()` in theme.ts. Kept as a
 * single source of truth so the two files can't drift out of sync.
 */
export const VAR_NAMES = {
    bg: "--smoke-bg",
    bgElevated: "--smoke-bg-elevated",
    fg: "--smoke-fg",
    fgMuted: "--smoke-fg-muted",
    accent: "--smoke-accent",
    border: "--smoke-border",

    spacingXs: "--smoke-spacing-xs",
    spacingSm: "--smoke-spacing-sm",
    spacingMd: "--smoke-spacing-md",
    spacingLg: "--smoke-spacing-lg",

    radiusSm: "--smoke-radius-sm",
    radiusMd: "--smoke-radius-md",

    fontMono: "--smoke-font-mono",
    fontSizeSm: "--smoke-font-size-sm",
    fontSizeMd: "--smoke-font-size-md",
} as const;
