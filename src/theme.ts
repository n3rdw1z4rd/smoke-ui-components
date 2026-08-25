import { VAR_NAMES } from "./tokens";

export type Theme = {
    bg: string;
    bgElevated: string;
    fg: string;
    fgMuted: string;
    accent: string;
    border: string;

    spacingXs: string;
    spacingSm: string;
    spacingMd: string;
    spacingLg: string;

    radiusSm: string;
    radiusMd: string;

    fontMono: string;
    fontSizeSm: string;
    fontSizeMd: string;
};

export const defaultTheme: Theme = {
    bg: "#1e1e1e",
    bgElevated: "#2a2a2a",
    fg: "#eeeeee",
    fgMuted: "#999999",
    accent: "#4477ff",
    border: "#3a3a3a",

    spacingXs: "4px",
    spacingSm: "8px",
    spacingMd: "12px",
    spacingLg: "20px",

    radiusSm: "4px",
    radiusMd: "6px",

    fontMono: "ui-monospace, 'SF Mono', Menlo, Consolas, monospace",
    fontSizeSm: "12px",
    fontSizeMd: "13px",
};

/**
 * Writes theme values onto an element's CSS custom properties (defaults to
 * `document.documentElement`, i.e. `:root`). Partial themes only override
 * the keys provided — anything omitted keeps its current value, so calling
 * setTheme({ accent: "#ff4477" }) after the initial theme is applied just
 * swaps the accent color without resetting everything else.
 */
export function setTheme(theme: Partial<Theme>, target: HTMLElement = document.documentElement): void {
    for (const key in theme) {
        const value = theme[key as keyof Theme];
        if (value === undefined) continue;
        target.style.setProperty(VAR_NAMES[key as keyof Theme], value);
    }
}

// Apply sane defaults immediately on import, so components look correct
// out of the box with zero setup. Call setTheme() again afterward — with
// a full or partial theme — to override.
if (typeof document !== "undefined") {
    setTheme(defaultTheme);
}
