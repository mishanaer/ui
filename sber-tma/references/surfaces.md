# Surfaces And Layout

Use this reference for pages, Telegram-native buttons, bottom bars, split view, safe areas, snackbars, modals, dropdowns, and tooltips.

## Page Chrome

Page-level components should own:

- Background color via Telegram theme variables.
- Optional header/back behavior.
- Safe-area padding.
- Bottom inset when a tab bar, bottom bar, main button, snackbar, or floating switcher is present.

Use CSS variables for shared offsets:

```css
body {
  padding-top: calc(env(safe-area-inset-top) + var(--tg-content-safe-area-inset-top, 0px));
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
}

.bottomAnchored {
  bottom: var(--bottom-clearance, env(safe-area-inset-bottom));
}
```

## Native Telegram Buttons

Use native TWA buttons for primary commit actions:

- Payment/transfer/send: `MainButton`.
- Secondary visible action: `SecondaryButton`.
- Navigation: `BackButton`.
- App-level settings: `SettingsButton`.

The React component should render `null`; effects register and clean up SDK state.

Keep button show/hide stable during route transitions. If multiple screens can mount the same native button, use a ref-count or tiny delayed hide to prevent flicker.

## Bottom Bar And Tab Bar

Bottom tab bars in Telegram should:

- Respect `env(safe-area-inset-bottom)`.
- Use Telegram bottom bar color or explicit theme token.
- Keep labels/icons fixed-size so active states do not shift layout.
- Replay icon/Lottie animation when tapping the active tab if that is a meaningful affordance.

For Apple skin, glass border and blur can be visible. For Material skin, prefer solid/elevated surfaces.

## Split View

Use split view only for wide viewports and only where the route supports it.

Pattern:

- Sidebar: catalog/list/navigation.
- Detail: current route or placeholder.
- Shell owns Telegram chrome while detail pages defer to it.
- Expose pane width as a CSS variable if inner content needs pane-relative sizing.

Do not force split view on narrow phones.

## Modals And Sheets

Modal basics:

- `AnimatePresence` for mount/unmount if using motion.
- Overlay opacity transition around 200ms linear.
- Sheet/card spring around stiffness 250, damping 30, or target-project equivalent.
- `role="dialog"` and `aria-modal="true"`.
- Focus trap while open.
- Escape/outside-click handling if the product permits dismiss.

For CSS-only fallback, keep a mounted/animating state long enough for exit animation, then unmount.

## Dropdowns, Popovers, Tooltips

Anchor menus to their trigger:

- Measure trigger and floating element with refs.
- Set `transform-origin` from trigger side/corner.
- Animate `scale` + `opacity`; do not animate top/left after positioning.
- Close on outside click, Escape, route change, or selection.
- Use `role="menu"` / `menuitem` for menus; use `role="tooltip"` for passive tooltips.

Default popover variants:

```js
const POPOVER_VARIANTS = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 500, damping: 32 } },
  exit: { scale: 0, opacity: 0, transition: { duration: 0.25 } },
}
```

## Snackbars

Snackbars should not block primary actions or native buttons. Anchor above safe area and bottom controls. For entry/exit use a soft spring, for text/link changes use a quick opacity/transform transition.
