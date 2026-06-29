# Stack And Integration

Use this reference when adding dependencies, routing, app shell, Telegram SDK integration, or project structure.

## Baseline From wallet_animations

- Vite SPA, React 19, no SSR/RSC/Next.js assumptions.
- `wouter` with `useHashLocation` for Telegram WebView routing.
- SCSS Modules for component styles.
- `motion` v12 with `motion/react-m` plus `LazyMotion`.
- `lottie-react` for exported icon animations.
- Telegram Web App behind a local `@lib/twa` wrapper.
- Theme from `var(--tg-theme-*)` CSS variables.
- Root body platform class: `.apple` or `.material`.

## Before Editing A Target Project

Check, in order:

1. Lockfile: `yarn.lock`, `pnpm-lock.yaml`, `package-lock.json`, or `bun.lockb`.
2. Framework and router: Vite/React, Next, Remix, plain SPA, hash/history mode.
3. Styling: CSS Modules, SCSS Modules, Tailwind, vanilla CSS, CSS-in-JS.
4. Telegram SDK access: direct `window.Telegram.WebApp`, `@twa-dev/sdk`, local wrapper, or absent.
5. Existing primitives: `Button`, `Text`, `Page`, `Modal`, `Tabs`, toast/snackbar, icons.

Do not switch package managers. If the expected runner is missing, ask.

## App Shell Pattern

Wrap the app in providers in this order when the project has no equivalent:

```jsx
<MotionProvider>
  <DeviceProvider>
    <AppearanceProvider>
      <App />
    </AppearanceProvider>
  </DeviceProvider>
</MotionProvider>
```

- `MotionProvider`: `LazyMotion features={domMax} strict`.
- `DeviceProvider`: maps Telegram platform to `apple` / `material`, sets body class, exposes `useSkin()`.
- `AppearanceProvider`: listens to Telegram `themeChanged`, falls back to `prefers-color-scheme`, sets `data-color-scheme`.

If the target project already has theme/platform providers, extend them instead of adding parallel contexts.

## Telegram Wrapper

Use one local module as the SDK boundary:

```js
const WebApp = window.Telegram.WebApp
export default WebApp
```

For non-Telegram local development, add a small fallback only if the current app already supports browser preview. Keep the fallback obvious and isolated.

Wrap native surfaces as headless React components:

- `BackButton`: registers click handler, shows on mount, hides on unmount.
- `MainButton` / `SecondaryButton`: configure text, color, disabled, progress, click handler.
- `BottomBar`: sets bottom bar color and restores default on unmount.
- `SettingsButton`: ref-count or debounce hide so route transitions do not flicker.

## Routing

Use hash routing inside Telegram WebView unless the project explicitly proves history routing works. For `wouter`, prefer:

```jsx
<Router hook={useHashLocation}>
  <Routes />
</Router>
```

Never navigate during render. Use a `Redirect` component with an effect.

Wrap route content in a single page transition owner. Avoid nested competing route-level transitions.

## File Structure Bias

When adding a new primitive:

```text
src/components/ComponentName/
  index.js
  ComponentName.module.scss
  ComponentName.showcase.js   # only if the project has showcases/catalogs
```

For prototypes or screens, keep shared interaction code in hooks/components and leave page files small. If a project has a catalog/config route registry, add new demos through that registry rather than hardcoding routes.
