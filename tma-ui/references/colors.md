# Colors And Theme Tokens

Use this reference when styling colors, Telegram theme variables, light/dark mode, color aliases, or color hygiene.

## Theme Tokens

Base UI colors should come from Telegram variables:

```css
:root {
  --tg-theme-bg-color: #ffffff;
  --tg-theme-text-color: #000000;
  --tg-theme-secondary-bg-color: #efeff4;
  --tg-theme-button-color: #007aff;
  --tg-theme-button-text-color: #ffffff;
  --tg-theme-subtitle-text-color: #8e8e93;
  --tg-theme-destructive-text-color: #ff3b30;
  --tg-theme-section-bg-color: #ffffff;
  --tg-theme-section-separator-color: #c8c7cc;
  --tg-theme-bottom-bar-bg-color: #f2f2f2;
}
```

Add app-specific aliases only when they clarify repeated use:

```css
:root {
  --secondary-button-color: rgb(from var(--tg-theme-button-color) r g b / 0.1);
  --text-confirm-color: #34c759;
  --separator-non-opaque: rgb(60 60 67 / 0.36);
}
```

## Light And Dark

Inside Telegram, prefer Telegram-provided theme values and the `themeChanged` event. For browser preview fallback, support `prefers-color-scheme`.

Use `data-color-scheme="light"` / `data-color-scheme="dark"` overrides only if the project already has explicit theme preview or skin-switcher behavior.

## Color Hygiene

- Avoid a one-hue palette. Telegram blue can be the accent, but surfaces, success, destructive, separators, and hints should be distinct tokens.
- Keep destructive, confirm, hint, separator, and bottom-bar tokens separate even when they look close in one theme.
- Prefer semantic variables over raw hex in component styles.
- When porting a bundled `wallet_animations` component, bring over the required theme variables or map them to the target project's token names.
