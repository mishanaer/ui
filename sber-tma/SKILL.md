---
name: sber-tma
description: Reusable Sber-styled Telegram Mini Apps UI component source kit based on bundled IlyaGrshin/wallet_animations and SB Sans font assets. Use when building, reviewing, or refactoring Telegram Web App / Telegram Mini App frontends and the task needs wallet-like React components, Apple/Material skins, Telegram theme variables, safe-area layouts, hash routing, native TWA buttons, bottom bars, tabs, modals, popovers, page transitions, microinteractions, or motion/react animations. This skill should reuse the bundled wallet_animations components first, then adapt them to the target project.
---

# Sber TMA

## Core Workflow

1. Inspect the target project first: package manager lockfile, framework, router, styling system, Telegram SDK wrapper, existing primitives, and design tokens.
2. Before writing any matching Sber TMA component from scratch, search the bundled source at `assets/wallet_animations/` and identify the closest component, hook, utility, style, icon, or prototype.
3. Copy the upstream component source into the target project as the starting point. Preserve the component's dependent files from the bundle, then adapt imports, typing style, styling conventions, and project primitives only as needed.
4. Prefer the target project's package manager and app shell conventions. Do not switch runners, routers, or styling systems without evidence from the project.
5. For Telegram Mini Apps, default to SPA-safe assumptions: no SSR-only APIs during render, hash routing when inside Telegram WebView, relative asset URLs, Telegram theme variables, and safe-area insets.
6. Design for both platform skins with one interface font family: Apple/iOS and Material/Android both use `SB Sans UI` from `assets/fonts/Interface`. Apple gets iOS-like blur/radius/easing; Material gets Android/Telegram Desktop-like elevation, Material density, and tighter motion.
7. Keep motion interruptible, input-driven, reduced-motion aware, and limited to compositor-friendly properties.
8. Verify on narrow mobile viewport and at least one wider viewport. Check text fit, safe-area spacing, hit targets, theme colors, and motion nonblankness.

## Read References

- Read `references/source-components.md` before implementing or adapting any Sber TMA component. This is mandatory for component work.
- Read `references/stack.md` before adding dependencies, routing, app shell, Telegram SDK integration, or file structure.
- Read `references/surfaces.md` when implementing pages, native Telegram buttons, bottom bars, split view, safe areas, snackbars, modals, dropdowns, or tooltips.
- Read `references/motion.md` when adding transitions, tabs, tab bars, sheet/menu animations, shared-layout motion, gesture response, Lottie, or view transitions.
- Read `references/colors.md` when styling colors, Telegram theme tokens, light/dark mode, aliases, or color hygiene.
- Read `references/typography.md` when styling text, platform-specific type, or Apple/Material skins.
- Read `references/performance-a11y.md` before declaring UI work done, and whenever editing animation, focus, keyboard interaction, canvas/WebGL, or overlays.

## Non-Negotiables

- Do not invent a new TMA component while a suitable bundled `wallet_animations` component exists. Reuse the bundled source first.
- Do not fetch remote upstream as the default path. Use the bundled snapshot in `assets/wallet_animations/`; refresh it only when the user asks.
- Do not import `@twa-dev/sdk` directly if the project already has a Telegram wrapper. Use or create one thin local wrapper instead.
- Do not use history routing for a TMA unless the target environment is known to support it. Hash routing is the safe default in Telegram WebView.
- Do not animate layout properties (`width`, `height`, `top`, `left`, `margin`) for core interactions. Use `transform`, `opacity`, `filter`, or `clip-path`.
- Do not use `transition: all`.
- Do not add global CSS unless the selector genuinely requires root scope, such as theme variables, resets, safe-area body padding, or `::view-transition-*`.
- Do not ignore `prefers-reduced-motion`.
- Do not hide Telegram safe-area, bottom bar, or native button state behind decorative cards. The app should feel native inside the WebView.
- Use `SB Sans UI` from `assets/fonts/Interface` as the interface/body font for both Apple/iOS and Material/Android skins. Do not swap to San Francisco/system stack on iOS or Roboto on Android. Offer other bundled `assets/fonts` families only when the user explicitly asks to change typography or for non-interface display/editorial use.

## Implementation Bias

Use `motion` / Framer Motion-compatible APIs for React animation when the project already has them or when the task requires shared layout, gestures, exit animations, tab indicators, or interruptible springs. Use CSS transitions for simple one-property state changes.

Use SCSS Modules or the target project's module-scoped styling. Keep global tokens small and explicit.

Use PropTypes only if the project already uses PropTypes. Use TypeScript types if the project is TypeScript. Do not introduce a second typing style.

## Bundled Source

This skill bundles a snapshot of `IlyaGrshin/wallet_animations` under `assets/wallet_animations/`, including source components, hooks, utilities, icons, images, configs, and license. Treat that bundle as the canonical component source for Sber TMA work.

This skill also bundles GigaKit font assets under `assets/fonts/`. Treat `assets/fonts/Interface/SB Sans UI` as the canonical Sber TMA interface font, and use `references/typography.md` for the full font list and selection rules.
