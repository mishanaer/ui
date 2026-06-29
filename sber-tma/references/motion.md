# Motion Patterns

Use this reference for page transitions, tabs, tab bars, sheets, menus, shared layout motion, gestures, Lottie, and view transitions.

## Defaults

Use these as starting points, then adapt to the project:

```js
export const EASING = {
  MATERIAL_STANDARD: [0.26, 0.08, 0.25, 1],
  LINEAR: "linear",
}

export const SPRING = {
  APPLE: { type: "spring", stiffness: 640, damping: 40 },
  MATERIAL: { type: "spring", stiffness: 800, damping: 60, mass: 1 },
  DROPDOWN: { type: "spring", stiffness: 500, damping: 32 },
  SNAP: { type: "spring", stiffness: 120, damping: 20 },
  GENTLE: { type: "spring", stiffness: 500, damping: 40 },
  SNACKBAR: { type: "spring", stiffness: 280, damping: 26 },
}
```

Most UI transitions should be 0.2-0.3s. Hard cap routine UI at 1s.

## Reduced Motion

Always check `useReducedMotion()` or CSS `prefers-reduced-motion`.

- For tab indicators: use `{ duration: 0 }`.
- For scroll alignment: set `scrollLeft` directly.
- For page transitions: fade minimally or disable scale/slide.
- For Lottie: pause, shorten, or replace with static state.

## Page Transition

Use one route-level owner:

```jsx
const variants = {
  initial: { opacity: 0, scale: 1.006 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.01 },
}

<AnimatePresence mode="popLayout">
  <m.div key={location} variants={variants} transition={{ duration: 0.3, ease: EASING.MATERIAL_STANDARD }} />
</AnimatePresence>
```

Avoid adding another page transition inside individual pages.

## Tabs

For segmented tabs:

- Use `role="tablist"` and `role="tab"`.
- Implement ArrowLeft, ArrowRight, Home, End.
- Use a shared `layoutId` active indicator.
- If scrollable, animate `scrollLeft` toward the active segment, or jump when reduced motion is enabled.
- Keep tab button widths stable.

Glass variant: put glass surface behind the tab list and animate only the indicator.

## Tab Bar

For bottom tab bars:

- Render inactive and active overlay layers when using clipped active state.
- Move overlay with `clip-path` or transform.
- Use a strong spring for indicator drag: around stiffness 800, damping 50.
- Let tapping the active tab replay icon animation if useful.
- Keep Lottie refs stable; do not remount just to restart unless replay state is intentionally keyed.

## Sheets, Modals, Menus

Use:

- Overlay: opacity, 200ms, linear.
- Sheet/card: y/scale + opacity with spring, damping 30-ish.
- Dropdown/popover: scale + opacity from correct `transform-origin`.

Do not scale a wrapper that owns `backdrop-filter` in Safari. Put `backdrop-filter` on the animated element itself or avoid scaling the glass layer.

## View Transitions API

Use native View Transitions only as progressive enhancement:

- Guard with `document.startViewTransition`.
- Keep global `::view-transition-*` CSS isolated in one file.
- Fall back to synchronous update callback when unsupported.
- Do not combine root view transitions with heavy route-level motion that competes visually.

## Lottie

- Use `lottieRef` to control playback.
- Prefer platform-specific animation files when Apple and Material shapes differ.
- Theme Lottie paths through stable classes where possible, such as fill/stroke color hooks.
- Avoid remounting the entire component tree to replay an icon.
