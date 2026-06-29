# Performance And Accessibility

Use this reference before declaring UI work done and whenever editing animation, overlays, focus, keyboard behavior, canvas/WebGL, or touch interactions.

## Animation Performance

Prefer:

- `transform`
- `opacity`
- `filter` when cheap enough and tested
- `clip-path` for masks/indicators

Avoid for interactive animation:

- `width`
- `height`
- `top`
- `left`
- `margin`
- layout read/write loops

Never use `transition: all`. List properties explicitly.

Use `will-change` sparingly and remove it after the interaction when practical.

## Safari And Telegram WebView Caveats

- Scaling an ancestor with `backdrop-filter` can flicker in Safari. Animate the actual glass element or avoid scaling glass.
- iOS Low Power Mode can degrade animations; keep important state changes understandable without motion.
- Telegram WebView safe-area behavior changes with native bars/buttons; test bottom-anchored UI.
- Relative asset URLs are safer for deployments under Telegram subpaths.

## Reduced Motion CSS Safety Net

Use a global fallback:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

Still handle reduced motion in JS for scroll, gestures, Lottie, and shared layout motion.

## Keyboard And Focus

Tabs:

- `role="tablist"` on the list.
- `role="tab"` on each tab.
- `aria-selected`.
- Roving `tabIndex`.
- ArrowLeft, ArrowRight, Home, End.

Dialogs:

- `role="dialog"`.
- `aria-modal="true"`.
- Focus trap while open.
- Restore focus to trigger on close when possible.
- Escape closes unless destructive flow requires explicit decision.

Menus:

- `role="menu"` and `role="menuitem"` when it is an action menu.
- Close on Escape and outside click.
- Keep trigger `aria-expanded` and `aria-controls` in sync when feasible.

## Touch Targets

Use at least 44px effective touch target for primary controls. Icon-only buttons need an accessible label even if the icon is visually obvious.

Do not let active labels, counters, loading text, or icon animation resize tab bars, buttons, or rows.

## Verification Checklist

Before final response:

- Lockfile/package manager respected.
- Existing primitives reused or explicitly justified.
- No unscoped global CSS except root/theme/view-transition necessities.
- TMA safe areas checked on mobile width.
- Light/dark Telegram tokens checked.
- Apple/Material skin behavior checked if platform code changed.
- Reduced motion path exists.
- Overlays have focus/outside-click/Escape behavior where appropriate.
- Motion uses compositor-friendly properties.
- Dev server or static build verified according to project conventions.
