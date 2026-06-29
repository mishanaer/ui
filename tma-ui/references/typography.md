# Typography And Skins

Use this reference when styling text or Apple/Material skins. For colors and theme tokens, read `colors.md`.

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

## Typography Hygiene

- Keep letter spacing at `0` unless matching an established native token.
- Reserve large display type for first-viewport hero-like screens, not compact panels.
- In dashboards/wallet lists, prioritize scanability: dense rows, stable columns, clear numeric alignment.

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
