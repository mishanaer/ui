# Colors And Theme Tokens

Use this reference when styling colors, Telegram theme variables, light/dark mode, color aliases, or color hygiene.

## Light Theme Tokens

Base UI colors should come from Telegram variables. The bundled `wallet_animations` light fallback is:

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
  --tg-theme-accent-text-color: #007aff;
  --tg-theme-section-header-text-color: #6d6d72;
  --tg-theme-section-separator-color: #c8c7cc;
  --tg-theme-bottom-bar-bg-color: #f2f2f2;
  --tg-theme-hint-color: #8e8e93;
  --secondary-button-color: rgb(from var(--tg-theme-button-color) r g b / 0.1);
  --text-confirm-color: #34c759;
  --tertiary-fill-background: rgba(from #747480 r g b / 0.12);
  --quaternary-fill-background: rgba(from #747480 r g b / 0.08);
  --separator-non-opaque: rgb(60 60 67 / 0.36);
  --segmented_control_active_background: #ffffff;
  --button-disabled-color: #e9e8e8;
  --text-disabled-color: #bababa;
  --border-color: oklch(from var(--tg-theme-hint-color) l c h / 0.5);
  --background-material-regular-color-1: rgb(255 255 255 / 0.25);
  --background-material-regular-color-2: rgb(255 255 255 / 0.6);
  --background-material-regular-blend-mode-1: plus-lighter;
  --background-material-regular-blend-mode-2: normal;
  --toast-background: rgb(45 45 45 / 0.8);
  --toast-text: #ffffff;
  --toast-link: #5ac8fa;
}
```

Material skin overrides toast colors:

```css
body.material {
  --toast-background: rgb(40 48 57 / 0.92);
  --toast-link: #85caff;
}
```

## Dark Theme Tokens

For browser fallback, `wallet_animations` switches dark values with `prefers-color-scheme`:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --tg-theme-bg-color: #000000;
    --tg-theme-text-color: #ffffff;
    --tg-theme-secondary-bg-color: #1c1c1d;
    --tg-theme-button-color: #3e88f7;
    --tg-theme-button-text-color: #ffffff;
    --tg-theme-subtitle-text-color: #98989e;
    --tg-theme-destructive-text-color: #eb5545;
    --tg-theme-section-bg-color: #2c2c2e;
    --tg-theme-accent-text-color: #3e88f7;
    --tg-theme-section-header-text-color: #8d8e93;
    --tg-theme-section-separator-color: #545458;
    --tg-theme-bottom-bar-bg-color: #1d1d1d;
    --tg-theme-hint-color: #98989e;
    --secondary-button-color: rgb(from var(--tg-theme-button-color) r g b / 0.1);
    --text-confirm-color: #30d158;
    --tertiary-fill-background: rgba(from #787880 r g b / 0.24);
    --quaternary-fill-background: rgba(from #787880 r g b / 0.18);
    --separator-non-opaque: rgba(84, 84, 88, 0.65);
    --segmented_control_active_background: #636366;
    --button-disabled-color: #3c3c3e;
    --text-disabled-color: #606060;
    --border-color: oklch(from var(--tg-theme-hint-color) l c h / 0.4);
    --background-material-regular-color-1: rgba(0, 0, 0, 0.41);
    --background-material-regular-color-2: rgba(0, 0, 0, 0);
    --background-material-regular-blend-mode-1: normal;
    --background-material-regular-blend-mode-2: normal;
  }
}
```

## Explicit Scheme Overrides

Inside Telegram, prefer Telegram-provided theme values and the `themeChanged` event. For browser preview fallback, support `prefers-color-scheme`.

Use `data-color-scheme="light"` / `data-color-scheme="dark"` overrides only if the project already has explicit theme preview or skin-switcher behavior. The bundled source mirrors the light/dark token blocks with:

```css
:where([data-color-scheme="light"]) {
  --tg-theme-bg-color: #ffffff;
  --tg-theme-text-color: #000000;
  --tg-theme-secondary-bg-color: #efeff4;
  --tg-theme-button-color: #007aff;
  --tg-theme-button-text-color: #ffffff;
  --tg-theme-subtitle-text-color: #8e8e93;
  --tg-theme-destructive-text-color: #ff3b30;
  --tg-theme-section-bg-color: #ffffff;
  --tg-theme-accent-text-color: #007aff;
  --tg-theme-section-header-text-color: #6d6d72;
  --tg-theme-section-separator-color: #c8c7cc;
  --tg-theme-bottom-bar-bg-color: #f2f2f2;
  --tg-theme-hint-color: #8e8e93;
  --secondary-button-color: rgb(from var(--tg-theme-button-color) r g b / 0.1);
  --text-confirm-color: #34c759;
  --tertiary-fill-background: rgba(from #747480 r g b / 0.12);
  --quaternary-fill-background: rgba(from #747480 r g b / 0.08);
  --separator-non-opaque: rgb(60 60 67 / 0.36);
  --segmented_control_active_background: #ffffff;
  --button-disabled-color: #e9e8e8;
  --text-disabled-color: #bababa;
  --border-color: oklch(from var(--tg-theme-hint-color) l c h / 0.5);
  --background-material-regular-color-1: rgb(255 255 255 / 0.25);
  --background-material-regular-color-2: rgb(255 255 255 / 0.6);
  --background-material-regular-blend-mode-1: plus-lighter;
  --background-material-regular-blend-mode-2: normal;
}

:where([data-color-scheme="dark"]) {
  --tg-theme-bg-color: #000000;
  --tg-theme-text-color: #ffffff;
  --tg-theme-secondary-bg-color: #1c1c1d;
  --tg-theme-button-color: #3e88f7;
  --tg-theme-button-text-color: #ffffff;
  --tg-theme-subtitle-text-color: #98989e;
  --tg-theme-destructive-text-color: #eb5545;
  --tg-theme-section-bg-color: #2c2c2e;
  --tg-theme-accent-text-color: #3e88f7;
  --tg-theme-section-header-text-color: #8d8e93;
  --tg-theme-section-separator-color: #545458;
  --tg-theme-bottom-bar-bg-color: #1d1d1d;
  --tg-theme-hint-color: #98989e;
  --secondary-button-color: rgb(from var(--tg-theme-button-color) r g b / 0.1);
  --text-confirm-color: #30d158;
  --tertiary-fill-background: rgba(from #787880 r g b / 0.24);
  --quaternary-fill-background: rgba(from #787880 r g b / 0.18);
  --separator-non-opaque: rgba(84, 84, 88, 0.65);
  --segmented_control_active_background: #636366;
  --button-disabled-color: #3c3c3e;
  --text-disabled-color: #606060;
  --border-color: oklch(from var(--tg-theme-hint-color) l c h / 0.4);
  --background-material-regular-color-1: rgba(0, 0, 0, 0.41);
  --background-material-regular-color-2: rgba(0, 0, 0, 0);
  --background-material-regular-blend-mode-1: normal;
  --background-material-regular-blend-mode-2: normal;
}
```

## Color Hygiene

- Avoid a one-hue palette. Telegram blue can be the accent, but surfaces, success, destructive, separators, and hints should be distinct tokens.
- Keep destructive, confirm, hint, separator, and bottom-bar tokens separate even when they look close in one theme.
- Prefer semantic variables over raw hex in component styles.
- When porting a bundled `wallet_animations` component, bring over the required theme variables or map them to the target project's token names.
