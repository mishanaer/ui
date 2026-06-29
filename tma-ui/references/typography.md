# Typography, Color, And Skins

Use this reference when styling text, colors, theme tokens, or Apple/Material skins.

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

For browser fallback, support `prefers-color-scheme`. Inside Telegram, prefer Telegram-provided theme and `themeChanged`.

## Platform Skins

Map Telegram platform to UI skin:

- `ios`, `macos` -> `apple`.
- `android`, `android_x`, `tdesktop`, `webk`, `webz`, `unigram` -> `material`.

Apply `body.apple` or `body.material`. Do not branch on `navigator.userAgent` when Telegram platform is available.

Apple bias:

- System font stack.
- Larger radii.
- Blur/glass where content underneath remains legible.
- Softer spring: stiffness around 640, damping 40.

Material bias:

- Roboto/Roboto Flex or project Material font.
- More solid surfaces and elevation.
- Stronger spring: stiffness around 800, damping 60.

## Text Primitive

Prefer one `Text` primitive that delegates variant mapping by skin:

```jsx
<Text
  apple={{ variant: "subheadline1", weight: "semibold" }}
  material={{ variant: "subheadline1", weight: "medium" }}
>
  Amount
</Text>
```

When overriding text color, set color on the wrapper and let text inherit. This keeps variant selectors and nested badges predictable.

Do not scale font size with viewport width. Use fixed token sizes with responsive layout constraints.

## Token Hygiene

- Keep letter spacing at `0` unless matching an established native token.
- Reserve large display type for first-viewport hero-like screens, not compact panels.
- In dashboards/wallet lists, prioritize scanability: dense rows, stable columns, clear numeric alignment.
- Avoid a one-hue palette. Telegram blue can be the accent, but surfaces, success, destructive, separators, and hints should be distinct tokens.

## Root Interaction Defaults

For TMA-like experiences:

```css
* {
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  user-select: none;
}

input,
textarea {
  user-select: text;
}

button,
[role="button"] {
  touch-action: manipulation;
}
```

Use these only if the target app has no conflicting form/text-selection requirements.
