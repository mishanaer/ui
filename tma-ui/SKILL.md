---
name: tma-ui
description: Telegram Mini Apps UI craft guide based on IlyaGrshin/wallet_animations. Use when building, reviewing, or refactoring Telegram Web App / Telegram Mini App frontends, especially React/Vite SPA screens, wallet-like flows, platform-adaptive Apple/Material skins, Telegram theme variables, safe-area layouts, hash routing, native TWA buttons, bottom bars, tabs, modals, popovers, page transitions, microinteractions, and motion/react animations.
---

# TMA UI

## Core Workflow

1. Inspect the target project first: package manager lockfile, framework, router, styling system, Telegram SDK wrapper, existing primitives, and design tokens.
2. Prefer the project's existing primitives and conventions. Port the patterns from this skill conceptually; do not paste `wallet_animations` code blindly.
3. For Telegram Mini Apps, default to SPA-safe assumptions: no SSR-only APIs during render, hash routing when inside Telegram WebView, relative asset URLs, Telegram theme variables, and safe-area insets.
4. Design for both platform skins: Apple gets iOS-like blur/radius/easing; Material gets Android/Telegram Desktop-like elevation, Roboto-style typography, and tighter motion.
5. Keep motion interruptible, input-driven, reduced-motion aware, and limited to compositor-friendly properties.
6. Verify on narrow mobile viewport and at least one wider viewport. Check text fit, safe-area spacing, hit targets, theme colors, and motion nonblankness.

## Read References

- Read `references/stack.md` before adding dependencies, routing, app shell, Telegram SDK integration, or file structure.
- Read `references/surfaces.md` when implementing pages, native Telegram buttons, bottom bars, split view, safe areas, snackbars, modals, dropdowns, or tooltips.
- Read `references/motion.md` when adding transitions, tabs, tab bars, sheet/menu animations, shared-layout motion, gesture response, Lottie, or view transitions.
- Read `references/typography.md` when styling text, platform-specific type, colors, theme tokens, or Apple/Material skins.
- Read `references/performance-a11y.md` before declaring UI work done, and whenever editing animation, focus, keyboard interaction, canvas/WebGL, or overlays.

## Non-Negotiables

- Do not import `@twa-dev/sdk` directly if the project already has a Telegram wrapper. Use or create one thin local wrapper instead.
- Do not use history routing for a TMA unless the target environment is known to support it. Hash routing is the safe default in Telegram WebView.
- Do not animate layout properties (`width`, `height`, `top`, `left`, `margin`) for core interactions. Use `transform`, `opacity`, `filter`, or `clip-path`.
- Do not use `transition: all`.
- Do not add global CSS unless the selector genuinely requires root scope, such as theme variables, resets, safe-area body padding, or `::view-transition-*`.
- Do not ignore `prefers-reduced-motion`.
- Do not hide Telegram safe-area, bottom bar, or native button state behind decorative cards. The app should feel native inside the WebView.

## Implementation Bias

Use `motion` / Framer Motion-compatible APIs for React animation when the project already has them or when the task requires shared layout, gestures, exit animations, tab indicators, or interruptible springs. Use CSS transitions for simple one-property state changes.

Use SCSS Modules or the target project's module-scoped styling. Keep global tokens small and explicit.

Use PropTypes only if the project already uses PropTypes. Use TypeScript types if the project is TypeScript. Do not introduce a second typing style.

## Source

This skill distills reusable UI patterns from `IlyaGrshin/wallet_animations`, a Vite React Telegram Web App prototype for wallet UI animations.
