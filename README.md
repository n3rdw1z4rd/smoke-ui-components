# @n3rdw1z4rd/smoke-ui-components

A small set of convenience components — `Panel`, `Row`, `Slider`,
`Checkbox`, `Vec3Group` — for
[`@n3rdw1z4rd/smoke-ui`](https://www.npmjs.com/package/@n3rdw1z4rd/smoke-ui),
themeable via CSS custom properties.

## Install

```bash
npm install @n3rdw1z4rd/smoke-ui @n3rdw1z4rd/smoke-ui-components
```

`@n3rdw1z4rd/smoke-ui` is a peer dependency — your project needs its own
JSX setup (see that package's README) for these components to render.

## Usage

```tsx
import { Signal } from "@n3rdw1z4rd/smoke-ui";
import { Panel, Vec3Group } from "@n3rdw1z4rd/smoke-ui-components";

const posX = new Signal(0);
const posY = new Signal(0);
const posZ = new Signal(0);

const DebugPanel = () => (
  <Panel title="Box Transform">
    <Vec3Group title="Position" x={posX} y={posY} z={posZ} min={-5} max={5} step={0.1} />
  </Panel>
);

document.body.append(<DebugPanel />);
```

A default dark theme is applied automatically the moment this package is
imported — no setup required to get a reasonable-looking result immediately.

## Theming

Every visual property in these components — colors, spacing, radius, font —
is a named constant from `tokens.ts` whose *value* is a CSS `var()`
reference, not a hardcoded literal. That gets you two things at once:

- **Compile-time safety.** Import `COLOR_ACCENT` instead of writing
  `"var(--smoke-accent)"` by hand, and a typo or rename is a TypeScript
  error instead of a silently broken style.
- **Runtime theming with zero JavaScript re-render.** Since the underlying
  value is still a CSS variable, changing it repaints every component that
  references it immediately — no signal, no subscription, no re-render pass.

### Changing the theme

```ts
import { setTheme } from "@n3rdw1z4rd/smoke-ui-components";

setTheme({ accent: "#ff4477", bg: "#111111" });
```

`setTheme` only overrides the keys you pass — anything omitted keeps its
current value. Call it any time; every mounted component using that
variable updates instantly.

### Full theme shape

```ts
import { defaultTheme, setTheme } from "@n3rdw1z4rd/smoke-ui-components";

setTheme({
  ...defaultTheme,
  bg: "#ffffff",
  fg: "#111111",
  // ...override the rest as needed
});
```

### Scoped themes

`setTheme` accepts an optional second argument — the element to apply
variables to (defaults to `document.documentElement`, i.e. global). Pass a
specific container element to theme just one panel differently from the
rest of the page:

```ts
setTheme({ accent: "#22cc88" }, someContainerElement);
```

### Available tokens

| Category | Tokens |
|---|---|
| Color | `bg`, `bgElevated`, `fg`, `fgMuted`, `accent`, `border` |
| Spacing | `spacingXs`, `spacingSm`, `spacingMd`, `spacingLg` |
| Radius | `radiusSm`, `radiusMd` |
| Typography | `fontMono`, `fontSizeSm`, `fontSizeMd` |

## Components

- **`Panel({ title, children })`** — a titled container.
- **`Row({ label, children })`** — a label + control row, used inside `Panel`.
- **`Slider({ label, signal, min, max, step? })`** — a range input bound to
  a `Signal<number>`.
- **`Checkbox({ label, signal })`** — a checkbox bound to a `Signal<boolean>`.
- **`Vec3Group({ title, x, y, z, min, max, step? })`** — three `Slider`s for
  x/y/z, e.g. for position/rotation/scale.

## License

MIT
